/**
 * Main UI Controller - Multi-Variant Enabled
 */

document.addEventListener('DOMContentLoaded', () => {
  const carData = typeof CARS_DATABASE !== 'undefined' ? CARS_DATABASE : [];

  const calculateBtn = document.getElementById('calculate-btn');
  const resultsContainer = document.getElementById('results-container');
  const inspectorModal = document.getElementById('inspector-modal');
  const inspectorCloseBtn = document.getElementById('modal-close-btn');
  const modalCarTitle = document.getElementById('modal-car-title');
  const modalBody = document.getElementById('modal-body');
  
  const alertsModal = document.getElementById('alerts-modal');
  const alertsCloseBtn = document.getElementById('alerts-close-btn');
  const alertsModalBody = document.getElementById('alerts-modal-body');

  runMatching();

  if (calculateBtn) {
    calculateBtn.addEventListener('click', (e) => {
      e.preventDefault();
      runMatching();
    });
  }

  if (inspectorCloseBtn) inspectorCloseBtn.addEventListener('click', () => inspectorModal.classList.add('hidden'));
  if (alertsCloseBtn) alertsCloseBtn.addEventListener('click', () => alertsModal.classList.add('hidden'));

  function runMatching() {
    if (!carData.length) {
      resultsContainer.innerHTML = `<p style="color: var(--accent-red);">[ERROR] Vehicle library database not found.</p>`;
      return;
    }

    const userInputs = {
      driving_preference: document.getElementById('driving_preference').value,
      mechanical_ability: parseInt(document.getElementById('mechanical_ability').value, 10),
      usage_type: document.getElementById('usage_type').value,
      transmission: document.getElementById('transmission').value,
      budget_parts_tol: parseInt(document.getElementById('budget_parts_tol').value, 10)
    };

    const rankedCars = ScoringEngine.evaluateMatches(userInputs, carData);
    renderFeed(rankedCars);
  }

  function renderFeed(cars) {
    resultsContainer.innerHTML = '';

    cars.forEach(car => {
      const card = document.createElement('div');
      card.className = 'car-card';

      // Determine initial active variant & image
      const hasVariants = car.variants && car.variants.length > 0;
      const activeVar = car.activeVariant || (hasVariants ? car.variants[0] : null);
      const initialImage = activeVar ? activeVar.image_file : (car.image_file || `${car.id}.jpg`);
      const initialNote = activeVar ? activeVar.trim_note : car.fallbackNote;

      // Build Variant Dropdown HTML if variants exist
      let variantDropdownHtml = '';
      if (hasVariants) {
        const optionsHtml = car.variants.map(v => `
          <option value="${v.variant_id}" ${activeVar && v.variant_id === activeVar.variant_id ? 'selected' : ''}>
            ${v.name}
          </option>
        `).join('');

        variantDropdownHtml = `
          <div class="variant-selector-container">
            <span class="variant-label">BODY VARIANT:</span>
            <select class="variant-dropdown" data-car-id="${car.id}">
              ${optionsHtml}
            </select>
          </div>
        `;
      }

      card.innerHTML = `
        <div class="car-card-header">
          <span class="car-title">${car.make} ${car.model} (${car.generation})</span>
          <span class="match-badge">${car.matchScore}% MATCH</span>
        </div>

        ${variantDropdownHtml}
        
        <!-- Object-Fit Image Frame -->
        <div class="car-image-container">
          <img id="img-${car.id}" src="${initialImage}" alt="${car.make} ${car.model}" class="car-pixel-img" onerror="this.src='data:image/svg+xml;utf8,<svg xmlns=\'http://www.w3.org/2000/svg\' width=\'120\' height=\'60\'><rect width=\'100%\' height=\'100%\' fill=\'%230f141c\'/><text x=\'50%\' y=\'50%\' fill=\'%233fb950\' font-family=\'monospace\' font-size=\'12\' text-anchor=\'middle\' dominant-baseline=\'middle\'>[ NO IMAGE ]</text></svg>'">
        </div>

        <div class="car-body">
          <p><strong>Years:</strong> ${car.production_years} | <strong>Category:</strong> ${car.style_category}</p>
          <div id="note-${car.id}" class="spec-note">${initialNote}</div>
          
          <div class="gauge-container">
            <div class="gauge-label">
              <span>Sportiness</span>
              <span>${car.scores.sportiness}/10</span>
            </div>
            <div class="gauge-bar-outer">
              <div class="gauge-bar-inner" style="width: ${car.scores.sportiness * 10}%;"></div>
            </div>
          </div>

          <div class="gauge-container">
            <div class="gauge-label">
              <span>DIY Ease / Maintainability</span>
              <span>${car.scores.diy_ease}/10</span>
            </div>
            <div class="gauge-bar-outer">
              <div class="gauge-bar-inner" style="width: ${car.scores.diy_ease * 10}%; background-color: var(--accent-amber);"></div>
            </div>
          </div>
        </div>
        <div class="card-actions">
          <button class="pixel-btn secondary-btn inspect-btn" data-id="${car.id}">INSPECT ISSUES</button>
          <button class="pixel-btn outline-btn alert-btn" data-id="${car.id}">SET UP ALERTS</button>
        </div>
      `;

      resultsContainer.appendChild(card);
    });

    // Attach Variant Selector Event Listeners
    document.querySelectorAll('.variant-dropdown').forEach(dropdown => {
      dropdown.addEventListener('change', (e) => {
        const carId = e.target.dataset.carId;
        const selectedVariantId = e.target.value;
        const car = cars.find(c => c.id === carId);

        if (car && car.variants) {
          const newVariant = car.variants.find(v => v.variant_id === selectedVariantId);
          if (newVariant) {
            // Live update image and trim note
            const imgEl = document.getElementById(`img-${carId}`);
            const noteEl = document.getElementById(`note-${carId}`);
            
            if (imgEl) imgEl.src = newVariant.image_file;
            if (noteEl) noteEl.innerText = newVariant.trim_note;
          }
        }
      });
    });

    // Attach Inspectors and Alerts Listeners
    document.querySelectorAll('.inspect-btn').forEach(btn => {
      btn.addEventListener('click', (e) => openInspector(e.target.dataset.id, cars));
    });

    document.querySelectorAll('.alert-btn').forEach(btn => {
      btn.addEventListener('click', (e) => openAlertSynthesizer(e.target.dataset.id, cars));
    });
  }

  function openInspector(carId, cars) {
    const car = cars.find(c => c.id === carId);
    if (!car) return;

    modalCarTitle.innerText = `[ ${car.make} ${car.model} INSPECTOR ]`;
    
    let issuesHtml = car.known_issues.map(issue => `
      <div class="issue-block">
        <div class="issue-title">⚠ ${issue.component} [Severity: ${issue.severity}]</div>
        <p><strong>Frequency:</strong> ${issue.frequency} | <strong>Est. Repair:</strong> ${issue.estimated_repair_cost}</p>
        <p style="margin-top: 5px; color: var(--text-bright);"><strong>What to inspect:</strong> ${issue.what_to_look_for}</p>
      </div>
    `).join('');

    const activeTrim = car.activeVariant ? car.activeVariant.trim_note : car.recommendedTrim;

    modalBody.innerHTML = `
      <p><strong>Target Spec:</strong> ${activeTrim}</p>
      <h3 style="margin-top: 15px; font-family: var(--font-pixel); font-size: 12px; color: var(--accent-amber);">KNOWN MECHANICAL FAILURES & INSPECTION CHECKLIST</h3>
      ${issuesHtml}
    `;

    inspectorModal.classList.remove('hidden');
  }

  function openAlertSynthesizer(carId, cars) {
    const car = cars.find(c => c.id === carId);
    if (!car) return;

    const primaryKeyword = car.search_keywords[0];
    const booleanQuery = car.search_keywords.map(k => `"${k}"`).join(' OR ');

    const batUrl = `https://bringatrailer.com/search/?s=${encodeURIComponent(primaryKeyword)}`;
    const googleAlertsUrl = `https://www.google.com/alerts?q=${encodeURIComponent(booleanQuery)}`;
    const autoTraderUrl = `https://www.autotrader.com/cars-for-sale/all-cars?keywordPhrases=${encodeURIComponent(primaryKeyword)}`;

    alertsModalBody.innerHTML = `
      <p>Synthesized search queries for <strong>${car.make} ${car.model}</strong>:</p>
      
      <div style="margin-top: 15px;">
        <label style="font-size: 16px; color: var(--text-bright);">RAW SEARCH STRING (Copy for Facebook Marketplace / RSS):</label>
        <div class="search-link-box">${booleanQuery}</div>
      </div>

      <h3 style="margin-top: 15px; font-family: var(--font-pixel); font-size: 12px; color: var(--accent-green);">PRE-CONFIGURED MARKETPLACE DIRECT LINKS:</h3>
      <ul style="list-style: none; margin-top: 10px;">
        <li style="margin-bottom: 8px;">
          👉 <a href="${googleAlertsUrl}" target="_blank" rel="noopener noreferrer" style="color: var(--accent-green);">Create Automated Google Alert</a>
        </li>
        <li style="margin-bottom: 8px;">
          👉 <a href="${batUrl}" target="_blank" rel="noopener noreferrer" style="color: var(--accent-amber);">Search Bring a Trailer Listings</a>
        </li>
        <li>
          👉 <a href="${autoTraderUrl}" target="_blank" rel="noopener noreferrer" style="color: var(--accent-amber);">Search AutoTrader Classic Feed</a>
        </li>
      </ul>
    `;

    alertsModal.classList.remove('hidden');
  }
});