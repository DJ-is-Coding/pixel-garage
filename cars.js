/**
 * Intelligent Library - Classic Vehicle Database
 */
const CARS_DATABASE = [
  {
    "id": "bmw_e30_325i",
    "make": "BMW",
    "model": "3 Series",
    "generation": "E30",
    "production_years": "1982-1994",
    "style_category": "Sports Sedan / Coupe",
    "transmission_options": ["manual", "automatic"],
    "image_file": "bmw_e30_325i.png", // Direct image reference
    "scores": {
      "sportiness": 8,
      "practicality": 7,
      "style": 9,
      "parts_availability": 8,
      "diy_ease": 7
    },
    "trim_alternatives": {
      "preferred": "325i Manual (M20B25 Inline-6)",
      "automatic_fallback": "325i Automatic with M20 Engine",
      "budget_alternative": "318i / 318is (M42 4-Cylinder)"
    },
    "search_keywords": ["BMW E30", "E30 325i", "E30 318is", "BMW 325i coupe"],
    "known_issues": [
      {
        "component": "Timing Belt (M20 Engine)",
        "severity": "High",
        "frequency": "Common",
        "estimated_repair_cost": "$400 - $800",
        "what_to_look_for": "Interference engine. Verify replacement within last 4 years or 45,000 miles."
      },
      {
        "component": "Rust on Strut Towers & Jack Points",
        "severity": "Critical",
        "frequency": "Moderate",
        "estimated_repair_cost": "$1,200 - $3,000+",
        "what_to_look_for": "Check inside front wheel arches, floor pan drains, and battery tray."
      }
    ]
  },
  {
    "id": "mazda_miata_na",
    "make": "Mazda",
    "model": "MX-5 Miata",
    "generation": "NA",
    "production_years": "1989-1997",
    "style_category": "Roadster",
    "transmission_options": ["manual", "automatic"],
    "image_file": "mazda_na_miata.jpg",
    "scores": {
      "sportiness": 9,
      "practicality": 3,
      "style": 8,
      "parts_availability": 10,
      "diy_ease": 9
    },
    "trim_alternatives": {
      "preferred": "1.8L Manual (1994-1997) with Torsen LSD",
      "automatic_fallback": "1.6L/1.8L Automatic (Low demand, discount pricing)",
      "budget_alternative": "1.6L Manual (1990-1993)"
    },
    "search_keywords": ["Mazda Miata NA", "NA Miata", "MX-5 Miata 1.8", "Miata pop up headlights"],
    "known_issues": [
      {
        "component": "Short-Nose Crank Wobble (1990-1991.5)",
        "severity": "Critical",
        "frequency": "Uncommon",
        "estimated_repair_cost": "$1,000 - $2,500",
        "what_to_look_for": "Inspect crank pulley for wobbling at idle on early 1.6L models."
      }
    ]
  },
  {
    "id": "porsche_944",
    "make": "Porsche",
    "model": "944",
    "generation": "Transaxle",
    "production_years": "1982-1991",
    "style_category": "Sports Coupe",
    "transmission_options": ["manual", "automatic"],
    "image_file": "porsche_944_coupe.jpeg",
    "scores": {
      "sportiness": 9,
      "practicality": 5,
      "style": 9,
      "parts_availability": 6,
      "diy_ease": 5
    },
    "trim_alternatives": {
      "preferred": "944 Turbo (951) / 944 S2 3.0L",
      "automatic_fallback": "944 2.5L Base Automatic",
      "budget_alternative": "944 Base 2.5L 8V Manual"
    },
    "search_keywords": ["Porsche 944", "Porsche 944 Turbo", "Porsche 951"],
    "known_issues": [
      {
        "component": "Timing Belt & Water Pump Failure",
        "severity": "Critical",
        "frequency": "Common",
        "estimated_repair_cost": "$1,200 - $1,800",
        "what_to_look_for": "Belts require retensioning every 15k miles."
      }
    ]
  },
  {
  "id": "mercedes_w123",
  "make": "Mercedes-Benz",
  "model": "W123",
  "generation": "W123",
  "production_years": "1976-1985",
  "style_category": "Luxury Classic",
  "transmission_options": ["automatic", "manual"],
  "scores": {
    "sportiness": 3,
    "practicality": 8, // Base score for sedan
    "style": 8,
    "parts_availability": 8,
    "diy_ease": 8
  },
  "variants": [
    {
      "variant_id": "w123_sedan",
      "name": "300D Sedan",
      "image_file": "mercedes_w123_300d.png",
      "practicality_bonus": 0,
      "trim_note": "Target spec: 300D Turbodiesel (OM617 Engine)"
    },
    {
      "variant_id": "w123_estate",
      "name": "300TD Estate (Wagon)",
      "image_file": "mercedes_w123_300td_wagon.png",
      "practicality_bonus": 2, // Boosts practicality to 10/10
      "trim_note": "Target spec: 300TD Turbodiesel Wagon (Self-leveling rear suspension)"
    }
  ],
  "search_keywords": [
    "Mercedes W123",
    "Mercedes 300D",
    "Mercedes 300TD",
    "Mercedes W123 Wagon",
    "Mercedes W123 Estate"
  ],
  "known_issues": [
    {
      "component": "Vacuum System Leaks",
      "severity": "Medium",
      "frequency": "Very Common",
      "estimated_repair_cost": "€100 - €400",
      "what_to_look_for": "Controls door locks, climate controls, and engine shutoff valve."
    },
    {
      "component": "SLS (Self-Leveling Suspension) - Estate Only",
      "severity": "High",
      "frequency": "Common on Estates",
      "estimated_repair_cost": "€500 - €1,200",
      "what_to_look_for": "Check hydraulic spheres (accumulators) in rear cargo area if ride is harsh or bouncy."
    },
    {
      "component": "Wheel Arch & Jacking Point Rust",
      "severity": "High",
      "frequency": "Common in salt-road climates",
      "estimated_repair_cost": "€600 - €2,000",
      "what_to_look_for": "Inspect inner wheel arches, sills, and jacking points for bubbling paint or structural rust."
    }
  ]
}
];