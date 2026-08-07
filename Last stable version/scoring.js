/**
 * Zero-Runtime Algorithmic Vehicle Matcher
 * Uses Multi-Attribute Decision-Making (MADM) with weighted linear normalization.
 */

const ScoringEngine = {
  /**
   * Calculates dynamic match scores based on user inputs.
   * @param {Object} userInputs - Preferences from the frontend questionnaire.
   * @param {Array} carDatabase - Array of car objects from cars.json.
   * @returns {Array} Sorted list of cars with match percentage and spec guidance.
   */
  evaluateMatches(userInputs, carDatabase) {
    const {
      driving_preference, // 'sporty', 'practical', 'stylish', 'diy'
      mechanical_ability, // 1 (Novice), 2 (Weekend Wrench), 3 (Master)
      usage_type,         // 'daily', 'weekend'
      transmission,       // 'manual', 'automatic', 'flexible'
      budget_parts_tol    // 1 (Low), 2 (Medium), 3 (High)
    } = userInputs;

    // Define weights based on driving preference
    let weights = {
      sportiness: 0.2,
      practicality: 0.2,
      style: 0.2,
      parts_availability: 0.2,
      diy_ease: 0.2
    };

    switch (driving_preference) {
      case 'sporty':
        weights = { sportiness: 0.45, practicality: 0.05, style: 0.2, parts_availability: 0.15, diy_ease: 0.15 };
        break;
      case 'practical':
        weights = { sportiness: 0.05, practicality: 0.45, style: 0.1, parts_availability: 0.2, diy_ease: 0.2 };
        break;
      case 'stylish':
        weights = { sportiness: 0.2, practicality: 0.1, style: 0.5, parts_availability: 0.1, diy_ease: 0.1 };
        break;
      case 'diy':
        weights = { sportiness: 0.15, practicality: 0.15, style: 0.1, parts_availability: 0.2, diy_ease: 0.4 };
        break;
    }

    // Adjust weights based on usage profile
    if (usage_type === 'daily') {
      weights.practicality += 0.1;
      weights.parts_availability += 0.1;
      weights.sportiness = Math.max(0.05, weights.sportiness - 0.1);
    }

    return carDatabase.map(car => {
      let rawScore = 0;
      let totalWeight = 0;

      // Compute weighted sum (0-10 scale per attribute)
      for (const [attr, weight] of Object.entries(weights)) {
        rawScore += (car.scores[attr] || 5) * weight;
        totalWeight += weight;
      }

      let matchPercentage = (rawScore / (totalWeight * 10)) * 100;

      // Apply Mechanical Ability vs DIY Ease Penalty
      // Novice (1) looking at hard DIY car (< 6) receives penalty
      if (mechanical_ability === 1 && car.scores.diy_ease < 6) {
        matchPercentage -= (6 - car.scores.diy_ease) * 4;
      }

      // Apply Transmission Preference Penalty & Recommendation
      let targetTrim = car.trim_alternatives.preferred;
      if (transmission !== 'flexible') {
        const hasPreferredTrans = car.transmission_options.includes(transmission);
        if (!hasPreferredTrans) {
          matchPercentage -= 15;
        } else if (transmission === 'automatic' && car.trim_alternatives.automatic_fallback) {
          targetTrim = car.trim_alternatives.automatic_fallback;
        }
      }

      // Parts availability check for low-tolerance users
      if (budget_parts_tol === 1 && car.scores.parts_availability < 7) {
        matchPercentage -= 10;
      }

      // Clamp score between 0% and 100%
      const finalScore = Math.min(100, Math.max(15, Math.round(matchPercentage)));

      return {
        ...car,
        matchScore: finalScore,
        recommendedTrim: targetTrim,
        fallbackNote: transmission === 'automatic' && car.trim_alternatives.automatic_fallback
          ? `Selected Automatic spec: Target the ${car.trim_alternatives.automatic_fallback}.`
          : `Target spec: ${car.trim_alternatives.preferred}`
      };
    }).sort((a, b) => b.matchScore - a.matchScore);
  }
};