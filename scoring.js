/**
 * Zero-Runtime Algorithmic Vehicle Matcher
 * Supports Multi-Variant Matching & MADM Scoring
 */

const ScoringEngine = {
  /**
   * Calculates dynamic match scores based on user inputs.
   * @param {Object} userInputs - Preferences from the frontend questionnaire.
   * @param {Array} carDatabase - Array of car objects from cars.js.
   * @returns {Array} Sorted list of cars with match percentage and recommended variant.
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

    if (usage_type === 'daily') {
      weights.practicality += 0.1;
      weights.parts_availability += 0.1;
      weights.sportiness = Math.max(0.05, weights.sportiness - 0.1);
    }

    return carDatabase.map(car => {
      // Evaluate best variant if variants array exists
      let chosenVariant = null;
      let variantBonus = { sportiness: 0, practicality: 0, style: 0 };

      if (car.variants && car.variants.length > 0) {
        // Find variant that aligns best with user's highest-weighted attribute
        let bestScore = -Infinity;

        car.variants.forEach(variant => {
          let vScore = 0;
          const pBonus = variant.practicality_bonus || 0;
          const sBonus = variant.sportiness_bonus || 0;
          const stBonus = variant.style_bonus || 0;

          vScore += (car.scores.practicality + pBonus) * weights.practicality;
          vScore += (car.scores.sportiness + sBonus) * weights.sportiness;
          vScore += (car.scores.style + stBonus) * weights.style;

          if (vScore > bestScore) {
            bestScore = vScore;
            chosenVariant = variant;
            variantBonus = { sportiness: sBonus, practicality: pBonus, style: stBonus };
          }
        });
      }

      // Compute weighted base score
      let rawScore = 0;
      let totalWeight = 0;

      for (const [attr, weight] of Object.entries(weights)) {
        const bonus = variantBonus[attr] || 0;
        const attrScore = Math.min(10, (car.scores[attr] || 5) + bonus);
        rawScore += attrScore * weight;
        totalWeight += weight;
      }

      let matchPercentage = (rawScore / (totalWeight * 10)) * 100;

      // Penalties
      if (mechanical_ability === 1 && car.scores.diy_ease < 6) {
        matchPercentage -= (6 - car.scores.diy_ease) * 4;
      }

      let targetTrim = chosenVariant?.trim_note || car.trim_alternatives?.preferred || "Standard Trim";

      if (transmission !== 'flexible') {
        const hasPreferredTrans = car.transmission_options.includes(transmission);
        if (!hasPreferredTrans) {
          matchPercentage -= 15;
        } else if (transmission === 'automatic' && car.trim_alternatives?.automatic_fallback && !chosenVariant) {
          targetTrim = car.trim_alternatives.automatic_fallback;
        }
      }

      if (budget_parts_tol === 1 && car.scores.parts_availability < 7) {
        matchPercentage -= 10;
      }

      const finalScore = Math.min(100, Math.max(15, Math.round(matchPercentage)));

      return {
        ...car,
        matchScore: finalScore,
        activeVariant: chosenVariant,
        recommendedTrim: targetTrim,
        fallbackNote: chosenVariant ? chosenVariant.trim_note : `Target spec: ${targetTrim}`
      };
    }).sort((a, b) => b.matchScore - a.matchScore);
  }
};