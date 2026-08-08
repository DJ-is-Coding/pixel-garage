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
    "image_file": "bmw_e30_325i.png",
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
    "image_file": "mazda_na_miata.png",
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
    "image_file": "porsche_944.png",
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
      "practicality": 8,
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
        "practicality_bonus": 2,
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
  },
  {
    "id": "toyota_mr2_sw20",
    "make": "Toyota",
    "model": "MR2",
    "generation": "SW20",
    "production_years": "1989-1999",
    "style_category": "Mid-Engine Sports Coupe",
    "transmission_options": ["manual", "automatic"],
    "scores": {
      "sportiness": 8,
      "practicality": 3,
      "style": 8,
      "parts_availability": 7,
      "diy_ease": 5
    },
    "variants": [
      {
        "variant_id": "mr2_sw20_na_hardtop",
        "name": "Hardtop NA (5S-FE / 3S-GE)",
        "image_file": "toyota_mr2_sw20_hardtop.png",
        "practicality_bonus": 0,
        "trim_note": "Naturally aspirated coupe chassis; lower maintenance and rigid roof body structure."
      },
      {
        "variant_id": "mr2_sw20_turbo_tbar",
        "name": "T-Bar Turbo (3S-GTE)",
        "image_file": "toyota_mr2_sw20_tbar_turbo.png",
        "practicality_bonus": 0,
        "trim_note": "Target spec: 3S-GTE Turbocharged engine with removable T-bar glass roof panels."
      }
    ],
    "search_keywords": [
      "Toyota MR2",
      "MR2 SW20",
      "Toyota MR2 Turbo",
      "MR2 T-Bar",
      "3S-GTE MR2"
    ],
    "known_issues": [
      {
        "component": "Pre-1993 Suspension Geometry & Snap Oversteer",
        "severity": "High",
        "frequency": "Common on 1989-1992 models",
        "estimated_repair_cost": "€400 - €1,200",
        "what_to_look_for": "Check rear toe links and suspension setup; early revision models suffer aggressive snap oversteer under abrupt lift-off mid-corner."
      },
      {
        "component": "Under-Chassis Coolant Hose Leaks (\"Hose from Hell\")",
        "severity": "High",
        "frequency": "Common on aging vehicles",
        "estimated_repair_cost": "€300 - €900",
        "what_to_look_for": "Inspect coolant pipes running beneath the floorpan between front radiator and rear engine bay for corrosion or pinhole leaks."
      },
      {
        "component": "T-Bar Roof Weatherseal Leaks",
        "severity": "Medium",
        "frequency": "Common on T-Bar models",
        "estimated_repair_cost": "€150 - €450",
        "what_to_look_for": "Inspect cabin carpeting, seats, and rubber seals around the removable glass roof for water ingress."
      }
    ]
  },
  {
    "id": "nissan_silvia_s13",
    "make": "Nissan",
    "model": "Silvia / 200SX (S13)",
    "generation": "S13",
    "production_years": "1989-1994",
    "style_category": "Rear-Wheel-Drive Sports Coupe",
    "transmission_options": ["manual", "automatic"],
    "scores": {
      "sportiness": 8,
      "practicality": 5,
      "style": 9,
      "parts_availability": 7,
      "diy_ease": 7
    },
    "variants": [
      {
        "variant_id": "s13_fastback",
        "name": "Fastback (200SX / 180SX)",
        "image_file": "nissan_s13_fastback.png",
        "practicality_bonus": 1,
        "trim_note": "Classic liftback silhouette with pop-up headlights (sold as 200SX in Europe with CA18DET / SR20DET)."
      },
      {
        "variant_id": "s13_coupe",
        "name": "Notchback Coupe (Silvia)",
        "image_file": "nissan_s13_coupe.png",
        "practicality_bonus": 0,
        "trim_note": "Lighter notchback body style featuring fixed projector headlights and traditional trunk."
      }
    ],
    "search_keywords": [
      "Nissan S13",
      "Nissan 200SX",
      "Nissan 180SX",
      "Nissan Silvia S13",
      "CA18DET",
      "SR20DET"
    ],
    "known_issues": [
      {
        "component": "Front Frame Rail & Sill Rust",
        "severity": "High",
        "frequency": "Very Common in European salt-road climates",
        "estimated_repair_cost": "€600 - €2,000",
        "what_to_look_for": "Inspect frame rails directly behind front wheels, floor pan seams, rear strut towers, and lower sills for severe structural rust."
      },
      {
        "component": "Wiring Harness Damage (Drift / Lowering Abuse)",
        "severity": "High",
        "frequency": "Common on modified examples",
        "estimated_repair_cost": "€250 - €800",
        "what_to_look_for": "Check front wheel well harnesses for tire rub damage on lowered cars; inspect engine harness for crude splices and ECU tampering."
      },
      {
        "component": "CA18DET / SR20DET Turbo & Bottom-End Wear",
        "severity": "High",
        "frequency": "Common if poorly maintained",
        "estimated_repair_cost": "€500 - €1,500",
        "what_to_look_for": "Listen for rod knock on cold start; check exhaust for blue smoke indicating turbo seal or valve stem seal failure."
      }
    ]
  },
  {
    "id": "honda_civic_ef_eg",
    "make": "Honda",
    "model": "Civic / CR-X",
    "generation": "EF / EG",
    "production_years": "1988-1995",
    "style_category": "Lightweight Hot Hatch",
    "transmission_options": ["manual", "automatic"],
    "scores": {
      "sportiness": 7,
      "practicality": 6,
      "style": 8,
      "parts_availability": 8,
      "diy_ease": 9
    },
    "variants": [
      {
        "variant_id": "civic_ef_eg_base_hatch",
        "name": "Base / DX Hatchback",
        "image_file": "honda_civic_ef_eg_base.png",
        "practicality_bonus": 0,
        "trim_note": "Ultra-lightweight entry hatchback; simple single-cam engine, ideal blank canvas for DIY projects."
      },
      {
        "variant_id": "civic_ef_eg_vtec_sport_sedan",
        "name": "Si / VTEC (Si-R / VTi)",
        "image_file": "honda_civic_ef_eg_vtec_sedan.png",
        "practicality_bonus": 0,
        "trim_note": "Target spec: High-revving DOHC VTEC performance model (B16A / B16A1 / B16A2 engines with upgraded suspension)."
      }
    ],
    "search_keywords": [
      "Honda Civic EF",
      "Honda Civic EG",
      "Honda CRX",
      "Civic Si-R",
      "Civic VTi",
      "B16A2",
      "D16Z6"
    ],
    "known_issues": [
      {
        "component": "Rear Quarter-Panel & Arch Rust",
        "severity": "High",
        "frequency": "Very Common in salt-road climates",
        "estimated_repair_cost": "€400 - €1,500",
        "what_to_look_for": "Inspect rear wheel arches, doglegs, lower sills, and rubber window seals for bubbling or rusted-through sheet metal."
      },
      {
        "component": "Distributor Bearing & Ignition Coil Failure",
        "severity": "Medium",
        "frequency": "Common on D-Series and B-Series engines",
        "estimated_repair_cost": "€120 - €300",
        "what_to_look_for": "Check for engine sputtering, sudden stalling, or a high-pitched squeal originating from the distributor housing."
      },
      {
        "component": "Brittle Interior Plastics & Stripped Panel Clips",
        "severity": "Low",
        "frequency": "Very Common",
        "estimated_repair_cost": "€50 - €200",
        "what_to_look_for": "Inspect interior trim mounting points, center console plastics, and door cards for cracked tabs and loose clips from repeated interior disassembly."
      }
    ]
  },
  {
    "id": "volkswagen_golf_mk2_gti",
    "make": "Volkswagen",
    "model": "Golf GTI",
    "generation": "Mk2 (Typ 19E)",
    "production_years": "1985-1992",
    "style_category": "Classic European Hot Hatch",
    "transmission_options": ["manual"],
    "scores": {
      "sportiness": 8,
      "practicality": 7,
      "style": 8,
      "parts_availability": 9,
      "diy_ease": 9
    },
    "variants": [
      {
        "variant_id": "golf_mk2_gti_8v",
        "name": "GTI 8V",
        "image_file": "volkswagen_golf_mk2_gti_8v.png",
        "practicality_bonus": 0,
        "trim_note": "Target spec: 1.8L 8-valve engine; torquey, bulletproof low-end power, and high DIY ease."
      },
      {
        "variant_id": "golf_mk2_gti_16v",
        "name": "GTI 16V",
        "image_file": "volkswagen_golf_mk2_gti_16v.png",
        "practicality_bonus": 0,
        "trim_note": "Target spec: High-revving 1.8L/2.0L 16-valve engine with signature quad-headlight front grille."
      }
    ],
    "search_keywords": [
      "Volkswagen Golf Mk2",
      "Golf GTI Mk2",
      "Golf GTI 8V",
      "Golf GTI 16V",
      "Golf Mk2 GTI",
      "VW Mk2 GTI"
    ],
    "known_issues": [
      {
        "component": "Worn Shift Linkage Bushings",
        "severity": "Medium",
        "frequency": "Very Common",
        "estimated_repair_cost": "€50 - €150",
        "what_to_look_for": "Excessive play or sloppiness in shift lever, difficulty engaging 1st and reverse gears; rebuild linkage bushing kit required."
      },
      {
        "component": "Vacuum Leaks & K-Jetronic / Digifant Idle Issues",
        "severity": "Medium",
        "frequency": "Common",
        "estimated_repair_cost": "€100 - €350",
        "what_to_look_for": "Check intake boots, vacuum lines, and Idle Air Control Valve (ISV) for unmetered air leaks causing hunting or erratic idle."
      },
      {
        "component": "Fuel Filler Neck & Wheel Arch Rust",
        "severity": "High",
        "frequency": "Common in European salt-road climates",
        "estimated_repair_cost": "€400 - €1,500",
        "what_to_look_for": "Inspect rust around fuel filler door and inner arch mounting point; rust flaking into fuel tank can clog injection fuel pumps."
      }
    ]
  },
  {
    "id": "saab_900_turbo",
    "make": "Saab",
    "model": "900 Turbo",
    "generation": "Classic (OG 900)",
    "production_years": "1979-1993",
    "style_category": "Quirky Swedish Turbo Coupe",
    "transmission_options": ["manual", "automatic"],
    "scores": {
      "sportiness": 7,
      "practicality": 7,
      "style": 9,
      "parts_availability": 6,
      "diy_ease": 5
    },
    "variants": [
      {
        "variant_id": "saab_900_turbo_hatchback",
        "name": "3-Door Turbo Hatchback",
        "image_file": "saab_900_turbo_hatchback.png",
        "practicality_bonus": 1,
        "trim_note": "Target spec: Full-pressure Turbo (16V Turbo / Aero) featuring signature 3-spoke wheels and curved wrap-around windshield."
      },
      {
        "variant_id": "saab_900_turbo_convertible",
        "name": "900 Turbo Convertible",
        "image_file": "saab_900_turbo_convertible.png",
        "practicality_bonus": -1,
        "trim_note": "Target spec: 900 Turbo Cabriolet featuring hydraulic soft top and classic Swedish open-top styling."
      }
    ],
    "search_keywords": [
      "Saab 900",
      "Saab 900 Turbo",
      "Saab 900 Aero",
      "Saab 90016V",
      "Saab 900 Convertible",
      "Classic Saab 900"
    ],
    "known_issues": [
      {
        "component": "Transaxle & Reverse-Mounted Engine Gearbox Failures",
        "severity": "High",
        "frequency": "Common under high boost / aggressive driving",
        "estimated_repair_cost": "€800 - €2,500",
        "what_to_look_for": "Check manual gearbox for pop-outs in 5th or reverse, crunching syncros, and oil leaks from the transmission case situated directly below the engine sump."
      },
      {
        "component": "Front Spring Tunnel & Axle Drive Shaft Tunnel Rust",
        "severity": "High",
        "frequency": "Common in salt-road climates",
        "estimated_repair_cost": "€500 - €1,800",
        "what_to_look_for": "Inspect front upper control arm mounting points inside the spring tunnels and drive axle driveshaft tunnels for structural rust or metal fatigue."
      },
      {
        "component": "Complex Vacuum Line Leaks & APC System Errors",
        "severity": "Medium",
        "frequency": "Very Common",
        "estimated_repair_cost": "€100 - €400",
        "what_to_look_for": "Check aged rubber vacuum hoses under hood causing erratic boost behavior, check valve issues, or Automatic Performance Control (APC) system cut-outs."
      },
      {
        "component": "Hydraulic Soft Top Leaks & Mechanism Wear (Convertible Only)",
        "severity": "High",
        "frequency": "Common on Convertible variants",
        "estimated_repair_cost": "€400 - €1,200",
        "what_to_look_for": "Inspect rear seat floorboards for hydraulic fluid stains, fluid reservoir level in boot, and top operation for smooth latching."
      }
    ]
  },
  {
    "id": "volvo_240",
    "make": "Volvo",
    "model": "240",
    "generation": "240 Series",
    "production_years": "1982-1993",
    "style_category": "Heavy-Duty Brick / Wagon",
    "transmission_options": ["manual", "automatic"],
    "scores": {
      "sportiness": 5,
      "practicality": 8,
      "style": 8,
      "parts_availability": 9,
      "diy_ease": 9
    },
    "variants": [
      {
        "variant_id": "volvo_240_dl_sedan",
        "name": "240 DL Sedan",
        "image_file": "volvo_240_dl_sedan.png",
        "practicality_bonus": 0,
        "trim_note": "Naturally aspirated Redblock (B200/B230) sedan; simple, indestructible daily driver."
      },
      {
        "variant_id": "volvo_240_turbo_sedan",
        "name": "240 Turbo Sedan",
        "image_file": "volvo_240_turbo_sedan.png",
        "practicality_bonus": 0,
        "trim_note": "Target spec: B21ET / B230FT turbocharged sedan; classic square-body performance."
      },
      {
        "variant_id": "volvo_240_turbo_wagon",
        "name": "240 Turbo Wagon (Estate)",
        "image_file": "volvo_240_turbo_wagon.png",
        "practicality_bonus": 2,
        "trim_note": "Target spec: Turbocharged estate with massive cargo capacity and cult status."
      }
    ],
    "search_keywords": [
      "Volvo 240",
      "Volvo 240 Turbo",
      "Volvo 240 Estate",
      "Volvo 245",
      "Volvo Redblock",
      "B21ET",
      "B230FT"
    ],
    "known_issues": [
      {
        "component": "Biodegradable Engine Wiring Harness (1983–1987)",
        "severity": "High",
        "frequency": "Common on 1983-1987 models",
        "estimated_repair_cost": "€250 - €700",
        "what_to_look_for": "Inspect wiring insulation under hood near firewall and alternator; outer casing crumbles leading to short circuits and erratic engine running."
      },
      {
        "component": "Clogged Flame Trap & PCV Oil Leaks",
        "severity": "Medium",
        "frequency": "Common",
        "estimated_repair_cost": "€50 - €200",
        "what_to_look_for": "Check oil trap breather system under intake manifold; backpressure caused by clogs pushes oil past front/rear crankshaft seals."
      },
      {
        "component": "Floor Pan & Tailgate Rust (Wagon)",
        "severity": "High",
        "frequency": "Common in salt-road climates",
        "estimated_repair_cost": "€400 - €1,500",
        "what_to_look_for": "Inspect front floor pans under carpets, lower edge of wagon rear tailgate, and rear wheel arches for corrosion."
      }
    ]
  },
  {
    "id": "ford_mustang_foxbody",
    "make": "Ford",
    "model": "Mustang",
    "generation": "Fox Body",
    "production_years": "1979-1993",
    "style_category": "Lightweight V8 Muscle",
    "transmission_options": ["manual", "automatic"],
    "scores": {
      "sportiness": 8,
      "practicality": 5,
      "style": 8,
      "parts_availability": 8,
      "diy_ease": 8
    },
    "variants": [
      {
        "variant_id": "foxbody_notchback_lx",
        "name": "Notchback Coupe (LX / SSP)",
        "image_file": "ford_mustang_foxbody_notchback.png",
        "practicality_bonus": 0,
        "trim_note": "Target spec: 5.0L V8 Notchback; lightest and most rigid Fox chassis favoured for track setups."
      },
      {
        "variant_id": "foxbody_hatchback_gt",
        "name": "Hatchback GT",
        "image_file": "ford_mustang_foxbody_hatchback_gt.png",
        "practicality_bonus": 1,
        "trim_note": "Target spec: 5.0L V8 GT featuring iconic louvered taillights, lower body cladding, and fog lamps."
      }
    ],
    "search_keywords": [
      "Ford Mustang Fox Body",
      "Mustang Foxbody 5.0",
      "Mustang LX Notchback",
      "Mustang GT Hatchback",
      "Fox Body Mustang",
      "Ford 302 Small Block"
    ],
    "known_issues": [
      {
        "component": "Rear Torque Box Stress Cracks",
        "severity": "High",
        "frequency": "Common on hard-launched or high-torque V8 examples",
        "estimated_repair_cost": "€300 - €900",
        "what_to_look_for": "Inspect upper and lower rear control arm mounting points (torque boxes) under the body for metal fatigue, tears, or cracking."
      },
      {
        "component": "Sagging Heavy Doors & Worn Hinge Pins",
        "severity": "Medium",
        "frequency": "Very Common",
        "estimated_repair_cost": "€80 - €250",
        "what_to_look_for": "Lift open doors at the latch end to check for vertical play; inspect latch striker wear and door alignment against the body lines."
      },
      {
        "component": "A-Pillar Floor Pan & Strut Tower Rust",
        "severity": "High",
        "frequency": "Common in European/salt-road climates",
        "estimated_repair_cost": "€500 - €1,800",
        "what_to_look_for": "Inspect front strut towers, floor pans under interior carpeting, frame rails, and battery tray areas for severe structural corrosion."
      }
    ]
  },
  {
    "id": "jeep_cherokee_xj",
    "make": "Jeep",
    "model": "Cherokee",
    "generation": "XJ",
    "production_years": "1984-2001",
    "style_category": "Rugged Boxy 4x4",
    "transmission_options": ["manual", "automatic"],
    "scores": {
      "sportiness": 4,
      "practicality": 8,
      "style": 8,
      "parts_availability": 8,
      "diy_ease": 8
    },
    "variants": [
      {
        "variant_id": "cherokee_xj_2door_sport",
        "name": "2-Door Sport",
        "image_file": "jeep_cherokee_xj_2door.png",
        "practicality_bonus": -1,
        "trim_note": "Target spec: 2-door bodyshell with longer front doors and sporty, shorter-profile side profile."
      },
      {
        "variant_id": "cherokee_xj_4door_limited",
        "name": "4-Door Limited",
        "image_file": "jeep_cherokee_xj_4door.png",
        "practicality_bonus": 1,
        "trim_note": "Target spec: 4-door trim level featuring plush leather interior, color-matched body trim, and full daily practicality."
      }
    ],
    "search_keywords": [
      "Jeep Cherokee XJ",
      "Jeep XJ",
      "Cherokee XJ 4.0",
      "Jeep Cherokee Sport",
      "Jeep Cherokee Limited",
      "XJ Cherokee 2.5 TD"
    ],
    "known_issues": [
      {
        "component": "Floor Pan & Unibody Frame Rail Rust",
        "severity": "High",
        "frequency": "Very Common in European salt-road climates",
        "estimated_repair_cost": "€400 - €1,600",
        "what_to_look_for": "Inspect front and rear floor pans under interior carpeting, sill rocker panels, and unibody frame rails near suspension mounts for severe rust."
      },
      {
        "component": "Cooling System Thermal Stress & Vapor Lock / Heat Soak",
        "severity": "High",
        "frequency": "Common on 4.0L Inline-6 models in heavy traffic",
        "estimated_repair_cost": "€150 - €500",
        "what_to_look_for": "Check radiator for leaks or clogging, water pump condition, and heat shielding around fuel injectors to prevent rough idle/misfires after hot restarts."
      },
      {
        "component": "Sagging Rear Leaf Springs & Suspension Bushing Wear",
        "severity": "Medium",
        "frequency": "Very Common on aging vehicles",
        "estimated_repair_cost": "€200 - €600",
        "what_to_look_for": "Check rear ride height for inverse leaf spring arch (\"frown\"); inspect sway bar links and track bar bushings for play causing steering wobble."
      }
    ]
  },
  {
    "id": "bmw_z3_e36_7_8",
    "make": "BMW",
    "model": "Z3",
    "generation": "E36/7 (Roadster) / E36/8 (Coupe)",
    "production_years": "1995-2002",
    "style_category": "Retro Roadster / Shooting Brake",
    "transmission_options": ["manual", "automatic"],
    "scores": {
      "sportiness": 8,
      "practicality": 4,
      "style": 9,
      "parts_availability": 8,
      "diy_ease": 7
    },
    "variants": [
      {
        "variant_id": "bmw_z3_roadster",
        "name": "1.9L / 2.8L Roadster (E36/7)",
        "image_file": "bmw_z3_roadster.png",
        "practicality_bonus": 0,
        "trim_note": "Target spec: Classic 2-seater open-top convertible featuring M44 4-cylinder or M52 6-cylinder engines."
      },
      {
        "variant_id": "bmw_z3_coupe_clownshoe",
        "name": "2.8L / 3.0L Coupe (E36/8 \"Clown Shoe\")",
        "image_file": "bmw_z3_coupe_clownshoe.png",
        "practicality_bonus": 2,
        "trim_note": "Target spec: Iconic shooting brake chassis with rigid fixed roof and M52TU / M54 straight-6 performance."
      }
    ],
    "search_keywords": [
      "BMW Z3",
      "BMW Z3 Roadster",
      "BMW Z3 Coupe",
      "Z3 Clown Shoe",
      "BMW E36/7",
      "BMW E36/8",
      "BMW Z3 2.8",
      "BMW Z3 3.0i"
    ],
    "known_issues": [
      {
        "component": "Rear Differential Mount & Subframe Floor Pan Cracking",
        "severity": "High",
        "frequency": "Common on 6-cylinder and hard-driven models",
        "estimated_repair_cost": "€500 - €1,800",
        "what_to_look_for": "Inspect boot floor pan spot welds and rear differential mount crossmember under trunk carpet for tearing, popped welds, or rust separation."
      },
      {
        "component": "Plastic Cooling System Components (Thermostat, Water Pump, Expansion Tank)",
        "severity": "High",
        "frequency": "Very Common above 100,000 km",
        "estimated_repair_cost": "€200 - €600",
        "what_to_look_for": "Inspect expansion tank seams, plastic radiator neck, and water pump pulley for hairline cracks or blue coolant residue; preventative overhaul recommended."
      },
      {
        "component": "Glovebox Sag & Interior Trim Rattles",
        "severity": "Low",
        "frequency": "Very Common",
        "estimated_repair_cost": "€40 - €150",
        "what_to_look_for": "Check dashboard passenger glovebox alignment for heavy drooping caused by weakened plastic mounting brackets and heat-degraded glue."
      },
      {
        "component": "Soft Top Rear Window Fogging & Water Leaks (Roadster Only)",
        "severity": "Medium",
        "frequency": "Common on Roadster variants",
        "estimated_repair_cost": "€100 - €450",
        "what_to_look_for": "Inspect rear plastic window for yellowing or zipper separation; check floor carpets behind seats for dampness indicating degraded soft top seals."
      }
    ]
  }
];