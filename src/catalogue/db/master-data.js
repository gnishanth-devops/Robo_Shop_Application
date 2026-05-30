//
// Products
//
db = db.getSiblingDB('catalogue');
db.products.insertMany([
    // Industrial Robots

{
  sku: 'IRX-100',
  name: 'Industrial RX-100',
  description: 'Heavy-duty robotic arm for manufacturing automation',
  price: 4500,
  instock: 25,
  categories: ['Industrial Robot']
},
{
  sku: 'WELD-900',
  name: 'WeldMaster 900',
  description: 'Precision welding robot with AI-assisted calibration',
  price: 7800,
  instock: 12,
  categories: ['Industrial Robot']
},

// Healthcare

{
  sku: 'MED-CARE',
  name: 'MediCare Assistant',
  description: 'Patient monitoring and healthcare support robot',
  price: 3200,
  instock: 18,
  categories: ['Healthcare']
},
{
  sku: 'SURG-X',
  name: 'Surgical Precision X',
  description: 'Advanced robotic surgical assistant',
  price: 25000,
  instock: 3,
  categories: ['Healthcare']
},

// Home Robots

{
  sku: 'HOME-AI',
  name: 'Home Companion AI',
  description: 'Smart assistant for daily household activities',
  price: 599,
  instock: 50,
  categories: ['Home Robot']
},
{
  sku: 'CLEANBOT',
  name: 'CleanBot Ultra',
  description: 'Autonomous vacuum and floor cleaning robot',
  price: 349,
  instock: 80,
  categories: ['Home Robot']
},

// Security

{
  sku: 'SEC-GUARD',
  name: 'Security Guardian',
  description: '24x7 autonomous security patrol robot',
  price: 2200,
  instock: 15,
  categories: ['Security']
},
{
  sku: 'DRONE-EYE',
  name: 'Drone Eye',
  description: 'Aerial surveillance and monitoring drone',
  price: 1800,
  instock: 20,
  categories: ['Security']
},

// AI Systems

{
  sku: 'GPT-X1',
  name: 'GPT-X1 Assistant',
  description: 'Enterprise-grade conversational AI assistant',
  price: 999,
  instock: 100,
  categories: ['Artificial Intelligence']
},
{
  sku: 'VISION-PRO',
  name: 'VisionPro AI',
  description: 'Computer vision platform for object recognition',
  price: 1500,
  instock: 40,
  categories: ['Artificial Intelligence']
},

// Logistics

{
  sku: 'WAREBOT',
  name: 'Warehouse Bot',
  description: 'Automated inventory transport robot',
  price: 2800,
  instock: 22,
  categories: ['Logistics']
},
{
  sku: 'SORTMAX',
  name: 'SortMax AI',
  description: 'High-speed package sorting robot',
  price: 6200,
  instock: 8,
  categories: ['Logistics']
}
]);

// full text index for searching
db.products.createIndex({
    name: "text",
    description: "text"
});

// unique index for product sku
db.products.createIndex(
    { sku: 1 },
    { unique: true }
);

