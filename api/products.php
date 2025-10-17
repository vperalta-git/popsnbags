<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

// Handle preflight requests
if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
    exit(0);
}

// Sample products data - in a real application, this would come from a database
$products = [
    [
        'id' => 1,
        'name' => 'HKS Freeflow Muffler',
        'price' => 4450,
        'originalPrice' => 7417,
        'discount' => 40,
        'category' => 'Exhaust System',
        'brand' => 'HKS',
        'image' => 'hks-muffler.jpg',
        'description' => 'High-performance exhaust muffler for enhanced sound and flow',
        'inStock' => true,
        'featured' => true
    ],
    [
        'id' => 2,
        'name' => 'Tein H Lowering Springs',
        'price' => 18250,
        'originalPrice' => 30417,
        'discount' => 40,
        'category' => 'Suspension',
        'brand' => 'TEIN',
        'image' => 'tein-springs.jpg',
        'description' => 'Premium lowering springs for improved stance and handling',
        'inStock' => true,
        'featured' => true
    ],
    [
        'id' => 3,
        'name' => 'Air Force Japan Air Suspension Kit',
        'price' => 238999,
        'originalPrice' => 398332,
        'discount' => 40,
        'category' => 'Suspension',
        'brand' => 'Air Force Japan',
        'image' => 'air-suspension.jpg',
        'description' => 'Complete air suspension kit for ultimate adjustability',
        'inStock' => true,
        'featured' => true
    ],
    [
        'id' => 4,
        'name' => 'Rota Wheels JKR 18 x 9.5',
        'price' => 45000,
        'originalPrice' => 75000,
        'discount' => 40,
        'category' => 'Wheels',
        'brand' => 'ROTA',
        'image' => 'rota-wheels.jpg',
        'description' => 'Lightweight racing wheels with aggressive styling',
        'inStock' => true,
        'featured' => true
    ],
    [
        'id' => 5,
        'name' => 'BC Racing BR Coilovers',
        'price' => 54340,
        'originalPrice' => 90567,
        'discount' => 40,
        'category' => 'Suspension',
        'brand' => 'BC Racing',
        'image' => 'bc-coilovers.jpg',
        'description' => 'Adjustable coilover suspension system',
        'inStock' => true,
        'featured' => false
    ],
    [
        'id' => 6,
        'name' => 'Momo Monte Carlo Wheel',
        'price' => 18753,
        'originalPrice' => 31255,
        'discount' => 40,
        'category' => 'Steering',
        'brand' => 'MOMO',
        'image' => 'momo-wheel.jpg',
        'description' => 'Classic racing steering wheel with suede grip',
        'inStock' => true,
        'featured' => true
    ],
    [
        'id' => 7,
        'name' => 'Rota Torque',
        'price' => 20384,
        'originalPrice' => 33973,
        'discount' => 40,
        'category' => 'Wheels',
        'brand' => 'ROTA',
        'image' => 'rota-torque.jpg',
        'description' => 'Multi-spoke performance wheels',
        'inStock' => true,
        'featured' => false
    ],
    [
        'id' => 8,
        'name' => 'HKS Super Turbo Muffler Ti',
        'price' => 145342,
        'originalPrice' => 242237,
        'discount' => 40,
        'category' => 'Exhaust System',
        'brand' => 'HKS',
        'image' => 'hks-turbo-muffler.jpg',
        'description' => 'Titanium turbo muffler for maximum performance',
        'inStock' => true,
        'featured' => true
    ],
    [
        'id' => 9,
        'name' => 'Spoon Sports Brake Pads',
        'price' => 8500,
        'originalPrice' => 14167,
        'discount' => 40,
        'category' => 'Braking System',
        'brand' => 'Spoon Sports',
        'image' => 'spoon-brake-pads.jpg',
        'description' => 'High-performance brake pads for track use',
        'inStock' => true,
        'featured' => false
    ],
    [
        'id' => 10,
        'name' => 'Mugen Air Intake',
        'price' => 15600,
        'originalPrice' => 26000,
        'discount' => 40,
        'category' => 'Engine Parts',
        'brand' => 'Mugen',
        'image' => 'mugen-intake.jpg',
        'description' => 'Cold air intake system for improved airflow',
        'inStock' => true,
        'featured' => false
    ]
];

$requestMethod = $_SERVER['REQUEST_METHOD'];
$requestUri = $_SERVER['REQUEST_URI'];

// Parse the request
$path = parse_url($requestUri, PHP_URL_PATH);
$pathParts = explode('/', trim($path, '/'));

switch ($requestMethod) {
    case 'GET':
        if (isset($_GET['featured']) && $_GET['featured'] === 'true') {
            // Return only featured products for flash sale
            $featuredProducts = array_filter($products, function($product) {
                return $product['featured'] === true;
            });
            echo json_encode(['success' => true, 'data' => array_values($featuredProducts)]);
        } elseif (isset($_GET['id'])) {
            // Return specific product
            $productId = intval($_GET['id']);
            $product = array_filter($products, function($p) use ($productId) {
                return $p['id'] === $productId;
            });
            
            if (!empty($product)) {
                echo json_encode(['success' => true, 'data' => array_values($product)[0]]);
            } else {
                http_response_code(404);
                echo json_encode(['success' => false, 'message' => 'Product not found']);
            }
        } elseif (isset($_GET['category'])) {
            // Return products by category
            $category = $_GET['category'];
            $filteredProducts = array_filter($products, function($product) use ($category) {
                return strtolower($product['category']) === strtolower($category);
            });
            echo json_encode(['success' => true, 'data' => array_values($filteredProducts)]);
        } elseif (isset($_GET['brand'])) {
            // Return products by brand
            $brand = $_GET['brand'];
            $filteredProducts = array_filter($products, function($product) use ($brand) {
                return strtolower($product['brand']) === strtolower($brand);
            });
            echo json_encode(['success' => true, 'data' => array_values($filteredProducts)]);
        } else {
            // Return all products
            echo json_encode(['success' => true, 'data' => $products]);
        }
        break;
        
    default:
        http_response_code(405);
        echo json_encode(['success' => false, 'message' => 'Method not allowed']);
        break;
}
?>