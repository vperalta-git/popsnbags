// Shared product data for the entire application

export const getStaticProducts = () => {
  return [
    {
      id: 1,
      name: 'HKS Freeflow Muffler',
      price: 4450,
      originalPrice: 7417,
      category: 'Exhaust System',
      brand: 'HKS',
      image: '/images/productpics/hks_muff-removebg-preview.png',
      description: 'High-performance exhaust muffler for enhanced sound and flow'
    },
    {
      id: 2,
      name: 'Tein H Lowering Springs',
      price: 18250,
      originalPrice: 30417,
      category: 'Suspension',
      brand: 'TEIN',
      image: '/images/productpics/tein-removebg-preview.png',
      description: 'Premium lowering springs for improved stance and handling'
    },
    {
      id: 3,
      name: 'BC Racing BR Coilovers',
      price: 54340,
      originalPrice: 90567,
      category: 'Suspension',
      brand: 'BC Racing',
      image: '/images/productpics/ZR-Coilover-removebg-preview.png',
      description: 'Adjustable coilover suspension system'
    },
    {
      id: 4,
      name: 'ROTA Grid 2 Wheels',
      price: 32000,
      originalPrice: 45000,
      category: 'Wheels',
      brand: 'ROTA',
      image: '/images/productpics/rotagrid2-removebg-preview.png',
      description: 'Size: 17x8.0, Offset (ET): +35, PCD: 5x114.3, Color: Gunmetal Gray. One of Rota\'s most iconic designs, the Grid 2 delivers the perfect balance between aggressive looks and track-ready performance. Ideal for JDM builds and street setups.',
      specifications: 'Set of 4 wheels'
    },
    {
      id: 5,
      name: 'Air Suspension System',
      price: 85000,
      originalPrice: 120000,
      category: 'Suspension',
      brand: 'Universal',
      image: '/images/productpics/airsus-removebg-preview.png',
      description: 'Complete air suspension kit for adjustable ride height'
    },
    {
      id: 6,
      name: 'MOMO Monte Carlo Steering Wheel',
      price: 15600,
      originalPrice: 26000,
      category: 'Interior',
      brand: 'MOMO',
      image: '/images/productpics/momo-pontecarlo-removebg-preview.png',
      description: 'Classic leather steering wheel with vintage appeal'
    },
    {
      id: 7,
      name: 'MOMO Racing Steering Wheel',
      price: 18500,
      originalPrice: 28000,
      category: 'Interior',
      brand: 'MOMO',
      image: '/images/productpics/momo.png',
      description: 'Professional racing steering wheel for track use'
    },
    {
      id: 8,
      name: 'Torque Performance Exhaust',
      price: 12500,
      originalPrice: 18750,
      category: 'Exhaust System',
      brand: 'Torque',
      image: '/images/productpics/torque-removebg-preview (1).png',
      description: 'High-flow performance exhaust system'
    },
    {
      id: 9,
      name: 'IKR Racing Components',
      price: 8500,
      originalPrice: 14000,
      category: 'Engine Parts',
      brand: 'IKR',
      image: '/images/productpics/ikr.png',
      description: 'High-performance engine components and accessories'
    },
    {
      id: 10,
      name: 'Work Emotion CR Wheels',
      price: 52000,
      originalPrice: 65000,
      category: 'Wheels',
      brand: 'WORK',
      image: 'https://via.placeholder.com/400x300/1f2937/ef4444?text=WORK+Wheels',
      description: 'Premium forged wheels with classic 6-spoke design'
    },
    {
      id: 25,
      name: 'Tomei Expreme Ti Catback Exhaust',
      price: 35000,
      originalPrice: 42000,
      category: 'Exhaust System',
      brand: 'Tomei',
      image: '/images/productpics/titann-removebg-preview.png',
      description: 'Titanium catback exhaust system for maximum performance'
    },
    {
      id: 12,
      name: 'Cusco Strut Tower Brace',
      price: 8900,
      originalPrice: 12000,
      category: 'Suspension',
      brand: 'Cusco',
      image: 'https://via.placeholder.com/400x300/1f2937/ef4444?text=Cusco+Brace',
      description: 'Front strut tower brace for improved chassis rigidity'
    },
    {
      id: 26,
      name: 'AEM Cold Air Intake',
      price: 12500,
      originalPrice: 16000,
      category: 'Engine Parts',
      brand: 'AEM',
      description: 'Cold air intake system with heat shield'
    },
    {
      id: 11,
      name: 'ROTA Boost',
      price: 28500,
      originalPrice: 35000,
      category: 'Wheels',
      brand: 'ROTA',
      image: '/images/productpics/BOOST-removebg-preview.png',
      description: 'Size: 16x7.0, Offset (ET): +40, PCD: 4x100, Color: Flat Black. Clean and simple design with a modern touch. Perfect for daily drivers and light modifications.',
      specifications: 'Set of 4 wheels'
    },
    {
      id: 27,
      name: 'ROTA Torque',
      price: 37000,
      originalPrice: 45000,
      category: 'Wheels',
      brand: 'ROTA',
      image: '/images/productpics/GTR-removebg-preview.png',
      description: 'Size: 18x8.5, Offset (ET): +45, PCD: 5x114.3, Color: Matte Bronze. The Rota Torque is known for its lightweight multi-spoke design and clean aesthetic. A favorite among Subaru and Evo owners.',
      specifications: 'Set of 4 wheels'
    },
    {
      id: 13,
      name: 'ROTA Slipstream',
      price: 27000,
      originalPrice: 33000,
      category: 'Wheels',
      brand: 'ROTA',
      image: '/images/productpics/slipstream-removebg-preview.png',
      description: 'Size: 15x7.0, Offset (ET): +40, PCD: 4x100, Color: Flat Black. Compact and classic, the Slipstream remains a go-to choice for hatchbacks and compact cars. Perfect for both daily driving and weekend runs.',
      specifications: 'Set of 4 wheels'
    },
    {
      id: 14,
      name: 'ROTA Grid Drift',
      price: 39500,
      originalPrice: 48000,
      category: 'Wheels',
      brand: 'ROTA',
      image: 'images/productpics/xlarge-grid188.5hblack.jpg',
      description: 'Size: 18x9.5, Offset (ET): +20, PCD: 5x114.3, Color: Hyper Black. Built for performance and stance, the Grid Drift combines a deep concave face with durable flow-formed construction. Perfect for RWD cars and widebody builds.',
      specifications: 'Set of 4 wheels'
    },
    {
      id: 15,
      name: 'ROTA Fighter 10',
      price: 33500,
      originalPrice: 40000,
      category: 'Wheels',
      brand: 'ROTA',
      image: '/images/productpics/FIGHTER10-removebg-preview.png',
      description: 'Size: 17x9.0, Offset (ET): +25, PCD: 5x100, Color: Gloss White. A fan-favorite among rally-inspired setups, the Fighter 10 brings timeless motorsport style. Strong, reliable, and lightweight.',
      specifications: 'Set of 4 wheels'
    },
    {
      id: 16,
      name: 'ROTA D154',
      price: 29000,
      originalPrice: 35000,
      category: 'Wheels',
      brand: 'ROTA',
      image: '/images/productpics/D154-removebg-preview.png',
      description: 'Size: 16x8.0, Offset (ET): +20, PCD: 4x100, Color: Matte Gunmetal with Polished Lip. With its classic five-spoke design and polished lip, the D154 is perfect for both retro and modern builds.',
      specifications: 'Set of 4 wheels'
    },
    {
      id: 17,
      name: 'ROTA MXR',
      price: 36500,
      originalPrice: 43000,
      category: 'Wheels',
      brand: 'ROTA',
      image: '/images/productpics/MXR-removebg-preview.png',
      description: 'Size: 18x9.0, Offset (ET): +35, PCD: 5x114.3, Color: Satin Black. The MXR offers a modern mesh design inspired by European tuning culture. Perfect for cars that blend performance and show-quality looks.',
      specifications: 'Set of 4 wheels'
    },
    // MOMO STEERING WHEELS
    {
      id: 18,
      name: 'MOMO Prototipo Black Edition',
      price: 17500,
      category: 'Steering Wheel',
      brand: 'MOMO',
      description: 'Classic 350mm leather wheel with white stitching'
    },
    {
      id: 19,
      name: 'MOMO Drifting Deep Dish (Red Stitch)',
      price: 18000,
      category: 'Steering Wheel',
      brand: 'MOMO',
      description: '90mm deep dish suede wheel for drift setups'
    },
    {
      id: 20,
      name: 'MOMO Monte Carlo 350mm (Black Spokes)',
      price: 16800,
      category: 'Steering Wheel',
      brand: 'MOMO',
      description: 'Premium leather with strong grip feel'
    },
    // MUFFLERS
    {
      id: 21,
      name: 'HKS Hi-Power Exhaust',
      price: 32000,
      category: 'Muffler',
      brand: 'HKS',
      description: 'Stainless steel with angled tip, aggressive tone'
    },
    {
      id: 22,
      name: 'Greddy Spectrum Elite Catback',
      price: 34500,
      category: 'Muffler',
      brand: 'Greddy',
      description: 'Deep tone and high flow, perfect for turbo cars'
    },
    {
      id: 23,
      name: 'Tomei Expreme Ti Full Titanium Muffler',
      price: 56000,
      category: 'Muffler',
      brand: 'Tomei',
      description: 'Ultra-lightweight titanium with race sound'
    },
    {
      id: 24,
      name: 'Blitz Nur-Spec R',
      price: 29500,
      category: 'Muffler',
      brand: 'Blitz',
      description: 'Mirror-finish canister, clean deep tone'
    },
    {
      id: 100,
      name: 'Fujitsubo Legalis R',
      price: 41000,
      category: 'Muffler',
      brand: 'Fujitsubo',
      description: 'JDM legal street exhaust with smooth tone'
    },
    {
      id: 101,
      name: 'Magnaflow Street Series',
      price: 22000,
      category: 'Muffler',
      brand: 'Magnaflow',
      description: 'American stainless steel muffler with mellow bass tone'
    },
    {
      id: 102,
      name: 'APEXi N1 Evolution-R',
      price: 35000,
      category: 'Muffler',
      brand: 'APEXi',
      description: 'Track-grade flow and signature angled design'
    },
    {
      id: 28,
      name: 'Invidia Q300 Catback',
      price: 37000,
      category: 'Muffler',
      brand: 'Invidia',
      description: 'Polished stainless catback with moderate sound'
    },
    {
      id: 29,
      name: 'Spoon N1 Muffler',
      price: 42500,
      category: 'Muffler',
      brand: 'Spoon',
      description: 'Lightweight racing muffler tuned for Honda engines'
    },
    {
      id: 30,
      name: 'Mugen Power Exhaust',
      price: 39000,
      category: 'Muffler',
      brand: 'Mugen',
      description: 'Factory fit with sporty yet refined tone'
    },
    {
      id: 31,
      name: 'Tanabe Medalion Concept G',
      price: 33000,
      category: 'Muffler',
      brand: 'Tanabe',
      description: 'Compact, JASMA-approved street muffler'
    },
    {
      id: 32,
      name: 'Borla S-Type',
      price: 30000,
      category: 'Muffler',
      brand: 'Borla',
      description: 'Aggressive American sound with high-quality build'
    },
    // LOWERING SPRINGS
    {
      id: 33,
      name: 'Tein S-Tech Springs',
      price: 15500,
      category: 'Lowering Springs',
      brand: 'TEIN',
      description: '1.5-inch drop with comfort and performance'
    },
    {
      id: 34,
      name: 'Eibach Pro-Kit',
      price: 16800,
      category: 'Lowering Springs',
      brand: 'Eibach',
      description: 'Progressive rate for balanced ride'
    },
    {
      id: 35,
      name: 'H&R Sport Springs',
      price: 17500,
      category: 'Lowering Springs',
      brand: 'H&R',
      description: '1.8-inch drop for sporty stance'
    },
    {
      id: 36,
      name: 'BC Racing Lowering Springs',
      price: 19000,
      category: 'Lowering Springs',
      brand: 'BC Racing',
      description: 'Track-focused drop setup'
    },
    {
      id: 37,
      name: 'Tanabe DF210 Springs',
      price: 14500,
      category: 'Lowering Springs',
      brand: 'Tanabe',
      description: 'Aggressive drop with daily comfort'
    },
    {
      id: 38,
      name: 'Cusco Performance Springs',
      price: 18000,
      category: 'Lowering Springs',
      brand: 'Cusco',
      description: 'Enhanced cornering response'
    },
    {
      id: 39,
      name: 'Swift Sport Springs',
      price: 17000,
      category: 'Lowering Springs',
      brand: 'Swift',
      description: 'Lightweight material with high rebound'
    },
    {
      id: 40,
      name: 'RS-R Down Sus Springs',
      price: 16500,
      category: 'Lowering Springs',
      brand: 'RS-R',
      description: 'JDM drop springs with smooth ride'
    },
    // SPOON PRODUCTS
    {
      id: 41,
      name: 'Spoon Sports Carbon Side Mirrors',
      price: 28000,
      category: 'Exterior',
      brand: 'Spoon Sports',
      description: 'Lightweight aerodynamic mirrors for Honda models'
    },
    {
      id: 42,
      name: 'Spoon Strut Tower Bar',
      price: 19000,
      category: 'Suspension',
      brand: 'Spoon Sports',
      description: 'Reinforces chassis rigidity for better handling'
    },
    // WORK WHEELS
    {
      id: 43,
      name: 'Work Emotion CR Kai 18x9.5 +30 (Bronze)',
      price: 68000,
      category: 'Wheel',
      brand: 'Work',
      description: 'Iconic 5-spoke JDM wheel, forged strength'
    },
    {
      id: 44,
      name: 'Work Meister S1 3P 17x9 (Silver)',
      price: 85000,
      category: 'Wheel',
      brand: 'Work',
      description: 'Classic multi-piece wheel with polished lip'
    },
    // MUGEN PRODUCTS
    {
      id: 45,
      name: 'Mugen Front Lip Spoiler (Civic)',
      price: 21000,
      category: 'Body Kit',
      brand: 'Mugen',
      description: 'Aerodynamic upgrade for Honda Civic'
    },
    {
      id: 46,
      name: 'Mugen Shift Knob Aluminum',
      price: 4500,
      category: 'Interior',
      brand: 'Mugen',
      description: 'Lightweight aluminum knob with clean feel'
    },
    {
      id: 47,
      name: 'Mugen Sports Suspension Kit',
      price: 48000,
      category: 'Suspension',
      brand: 'Mugen',
      description: 'Tuned for sporty yet balanced handling'
    },
    {
      id: 48,
      name: 'Mugen Power Radiator Cap',
      price: 3000,
      category: 'Engine',
      brand: 'Mugen',
      description: 'Increases cooling pressure capacity'
    },
    // TOMEI PRODUCT
    {
      id: 49,
      name: 'Tomei Poncam Set',
      price: 59000,
      category: 'Engine',
      brand: 'Tomei',
      description: 'Drop-in camshafts for high performance engines'
    },
    // OTHER PERFORMANCE / EXTERIOR PARTS
    {
      id: 50,
      name: 'AEM Cold Air Intake Kit',
      price: 22000,
      category: 'Intake',
      brand: 'AEM',
      description: 'Improves airflow and throttle response'
    },
    {
      id: 51,
      name: 'K&N Performance Filter',
      price: 5500,
      category: 'Intake',
      brand: 'K&N',
      description: 'Washable high-flow air filter'
    },
    {
      id: 52,
      name: 'Brembo GT Brake Kit',
      price: 98000,
      category: 'Brakes',
      brand: 'Brembo',
      description: '4-piston big brake kit for improved stopping power'
    },
    {
      id: 53,
      name: 'Cusco Rear Sway Bar',
      price: 14000,
      category: 'Suspension',
      brand: 'Cusco',
      description: 'Reduces body roll and improves cornering'
    },
    {
      id: 54,
      name: 'Exedy Stage 1 Clutch Kit',
      price: 23500,
      category: 'Drivetrain',
      brand: 'Exedy',
      description: 'Reliable clutch upgrade for street/track'
    },
    {
      id: 55,
      name: 'HKS Blow-Off Valve SQV4',
      price: 16000,
      category: 'Turbo',
      brand: 'HKS',
      description: 'Signature sharp sound and reliable boost control'
    },
    {
      id: 56,
      name: 'Pivot Throttle Controller',
      price: 9000,
      category: 'Electronics',
      brand: 'Pivot',
      description: 'Adjust throttle response for sporty driving'
    },
    {
      id: 57,
      name: 'Bride Low Max Seat',
      price: 48000,
      category: 'Interior',
      brand: 'Bride',
      description: 'Racing bucket seat for maximum support'
    },
    {
      id: 58,
      name: 'Defi Advance BF Gauges Set',
      price: 38000,
      category: 'Gauges',
      brand: 'Defi',
      description: 'Digital boost, oil, and water temp gauges'
    },
    // BODY KIT PRODUCTS
    {
      id: 59,
      name: 'Toyota Vios Gen 3.5 Thai Facelift Front Bumper',
      price: 11800,
      category: 'Body Kit',
      brand: 'Toyota',
      description: 'Clean and aggressive Thai-style front bumper upgrade for 2018–2022 Vios models, perfect fitment.'
    },
    {
      id: 60,
      name: 'Toyota Vios Gen 3.5 Rear Diffuser (Thai Style)',
      price: 6800,
      category: 'Body Kit',
      brand: 'Toyota',
      description: 'Sleek, understated diffuser for a subtle OEM+ rear look, ABS plastic, unpainted.'
    },
    {
      id: 61,
      name: 'Honda Civic FD Mugen RR Front Lip',
      price: 7200,
      category: 'Body Kit',
      brand: 'Mugen',
      description: 'Polyurethane front lip with Mugen RR design, durable and paintable, fits 2006–2011 Civic FD.'
    },
    {
      id: 62,
      name: 'Honda Civic EG6 Carbon Fiber Hood',
      price: 18000,
      category: 'Body Kit',
      brand: 'Honda',
      description: 'Lightweight carbon hood with UV coating and OEM latch compatibility for 1992–1995 Civics.'
    },
    {
      id: 63,
      name: 'Honda Civic EK Carbon Fiber Hood (Type R Style)',
      price: 19500,
      category: 'Body Kit',
      brand: 'Honda',
      description: 'High-quality carbon weave with gloss finish, direct bolt-on fitment.'
    },
    {
      id: 64,
      name: 'Toyota Corolla AE101 "Big Body" TRD Lip Kit',
      price: 14000,
      category: 'Body Kit',
      brand: 'Toyota',
      description: 'Classic TRD-inspired front, side, and rear lip kit, flexible polyurethane.'
    },
    {
      id: 65,
      name: 'Toyota Corolla AE111 "Lovelife" Thai Facelift Bumper Set',
      price: 17000,
      category: 'Body Kit',
      brand: 'Toyota',
      description: 'Front and rear bumper conversion to the sporty Thai look, includes signal lights and grille.'
    },
    {
      id: 66,
      name: 'Toyota Corolla AE101 Carbon Fiber Hood',
      price: 16000,
      category: 'Body Kit',
      brand: 'Toyota',
      description: 'Lightweight carbon hood, smooth weave, perfect for restoration or show cars.'
    },
    {
      id: 67,
      name: 'Toyota Corolla AE111 Ducktail Spoiler',
      price: 9000,
      category: 'Body Kit',
      brand: 'Toyota',
      description: 'Subtle rear lip spoiler for Lovelife models, available in ABS or carbon finish.'
    },
    {
      id: 68,
      name: 'Toyota Altis 10th Gen Modulo Body Kit',
      price: 17500,
      category: 'Body Kit',
      brand: 'Toyota',
      description: 'Complete front, side, and rear kit adds clean and modern OEM+ look.'
    },
    {
      id: 69,
      name: 'Honda Civic FD Carbon Ducktail Spoiler',
      price: 10000,
      category: 'Body Kit',
      brand: 'Honda',
      description: 'Real carbon fiber ducktail, lightweight and stylish for subtle rear flair.'
    },
    {
      id: 70,
      name: 'Toyota Vios GR-S Style Rear Wing',
      price: 11000,
      category: 'Body Kit',
      brand: 'Toyota',
      description: 'GR-inspired design, ABS material, bolt-on fit for 2020+ models.'
    },
    {
      id: 71,
      name: 'Toyota Corolla AE101 GT Wing (Adjustable Aluminum)',
      price: 8800,
      category: 'Body Kit',
      brand: 'Toyota',
      description: 'Classic tuner-style aluminum GT wing with adjustable brackets, universal fit.'
    },
    {
      id: 72,
      name: 'Honda City GM6 Carbon Fender Garnish Set',
      price: 3500,
      category: 'Body Kit',
      brand: 'Honda',
      description: 'Adds sporty detail to fenders, adhesive installation, carbon-look finish.'
    },
    {
      id: 73,
      name: 'Toyota Corolla AE111 "Lovelife" Side Skirt Pair (TRD Style)',
      price: 7200,
      category: 'Body Kit',
      brand: 'Toyota',
      description: 'ABS material with OEM fitment, complements Thai facelift bumpers.'
    }
  ];
};

// Helper function to generate specifications based on product data
export const generateSpecifications = (product) => {
  const baseSpecs = {
    'Brand': product.brand,
    'Category': product.category,
    'Price': typeof product.price === 'number' ? `₱${product.price.toLocaleString()}` : product.price
  };

  // Add product-specific specifications based on category
  if (product.category === 'Wheels' || product.category === 'Wheel') {
    return {
      ...baseSpecs,
      'Type': 'Automotive Wheel',
      'Package': product.specifications || 'Set of 4 wheels'
    };
  }

  if (product.category === 'Muffler') {
    return {
      ...baseSpecs,
      'Type': 'Exhaust Muffler',
      'Material': 'Stainless Steel',
      'Sound Level': 'Performance'
    };
  }

  if (product.category === 'Lowering Springs') {
    return {
      ...baseSpecs,
      'Type': 'Lowering Springs',
      'Material': 'High-Tensile Steel'
    };
  }

  if (product.category === 'Steering Wheel') {
    return {
      ...baseSpecs,
      'Type': 'Racing Steering Wheel',
      'Diameter': '350mm'
    };
  }

  // Body Kit categories
  if (product.category === 'Body Kit' || product.category === 'Body Kit Set') {
    return {
      ...baseSpecs,
      'Type': 'Body Kit',
      'Material': 'ABS Plastic',
      'Finish': 'Unpainted'
    };
  }

  if (product.category === 'Carbon Hood') {
    return {
      ...baseSpecs,
      'Type': 'Carbon Fiber Hood',
      'Material': 'Carbon Fiber',
      'Weight': 'Lightweight'
    };
  }

  if (product.category === 'Front Lip' || product.category === 'Lip Kit') {
    return {
      ...baseSpecs,
      'Type': 'Front Lip/Spoiler',
      'Material': 'Polyurethane',
      'Installation': 'Bolt-on'
    };
  }

  if (product.category === 'Spoiler' || product.category === 'Wing' || product.category === 'Spoiler/Wing') {
    return {
      ...baseSpecs,
      'Type': 'Rear Spoiler/Wing',
      'Material': 'ABS/Carbon Fiber',
      'Installation': 'Bolt-on'
    };
  }

  if (product.category === 'Diffuser') {
    return {
      ...baseSpecs,
      'Type': 'Rear Diffuser',
      'Material': 'ABS Plastic',
      'Style': 'OEM+'
    };
  }

  if (product.category === 'Side Skirt' || product.category === 'Fender Accessory') {
    return {
      ...baseSpecs,
      'Type': 'Exterior Accessory',
      'Material': 'ABS/Carbon Look',
      'Installation': 'OEM Fitment'
    };
  }

  return baseSpecs;
};