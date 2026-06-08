export const orders = [
  { id: '#ORD-8821', name: 'Priya Sharma',     email: 'priya@email.com',      color: '#10b981', date: '08 Jun 2025', items: 2, amount: '₹24,900',   payment: 'UPI',         status: 'Delivered' },
  { id: '#ORD-8820', name: 'Rohan Mehta',      email: 'rohan@email.com',      color: '#3b82f6', date: '08 Jun 2025', items: 1, amount: '₹8,995',    payment: 'Card',        status: 'Shipped'   },
  { id: '#ORD-8819', name: 'Ananya Patel',     email: 'ananya@email.com',     color: '#f59e0b', date: '07 Jun 2025', items: 3, amount: '₹31,990',   payment: 'Net Banking', status: 'Pending'   },
  { id: '#ORD-8818', name: 'Karan Singh',      email: 'karan@email.com',      color: '#5b5ef5', date: '07 Jun 2025', items: 1, amount: '₹74,999',   payment: 'Card',        status: 'Shipped'   },
  { id: '#ORD-8817', name: 'Deepika Nair',     email: 'deepika@email.com',    color: '#ef4444', date: '06 Jun 2025', items: 1, amount: '₹1,14,900', payment: 'EMI',         status: 'Cancelled' },
  { id: '#ORD-8816', name: 'Vikram Bose',      email: 'vikram@email.com',     color: '#8b5cf6', date: '06 Jun 2025', items: 4, amount: '₹12,480',   payment: 'UPI',         status: 'Delivered' },
  { id: '#ORD-8815', name: 'Shreya Gupta',     email: 'shreya@email.com',     color: '#06b6d4', date: '05 Jun 2025', items: 2, amount: '₹5,990',    payment: 'COD',         status: 'Delivered' },
  { id: '#ORD-8814', name: 'Aditya Joshi',     email: 'aditya@email.com',     color: '#f97316', date: '05 Jun 2025', items: 1, amount: '₹45,990',   payment: 'Card',        status: 'Pending'   },
  { id: '#ORD-8813', name: 'Neha Reddy',       email: 'neha@email.com',       color: '#ec4899', date: '04 Jun 2025', items: 5, amount: '₹7,645',    payment: 'UPI',         status: 'Delivered' },
  { id: '#ORD-8812', name: 'Siddharth Kumar',  email: 'siddharth@email.com',  color: '#14b8a6', date: '04 Jun 2025', items: 2, amount: '₹19,800',   payment: 'Net Banking', status: 'Shipped'   },
  { id: '#ORD-8811', name: 'Pooja Verma',      email: 'pooja@email.com',      color: '#a855f7', date: '03 Jun 2025', items: 1, amount: '₹2,499',    payment: 'COD',         status: 'Cancelled' },
  { id: '#ORD-8810', name: 'Rahul Das',        email: 'rahul@email.com',      color: '#22c55e', date: '03 Jun 2025', items: 3, amount: '₹37,200',   payment: 'Card',        status: 'Delivered' },
  { id: '#ORD-8809', name: 'Kavya Menon',      email: 'kavya@email.com',      color: '#eab308', date: '02 Jun 2025', items: 1, amount: '₹15,999',   payment: 'UPI',         status: 'Shipped'   },
  { id: '#ORD-8808', name: 'Arjun Malhotra',   email: 'arjun@email.com',      color: '#64748b', date: '02 Jun 2025', items: 2, amount: '₹63,498',   payment: 'EMI',         status: 'Pending'   },
  { id: '#ORD-8807', name: 'Ishaan Chopra',    email: 'ishaan@email.com',     color: '#0ea5e9', date: '01 Jun 2025', items: 6, amount: '₹4,194',    payment: 'COD',         status: 'Delivered' },
]

export const products = [
  { emoji: '💻', name: 'MacBook Air M3',       cat: 'Electronics', sku: 'APL-MBA-M3',  price: '₹1,14,900', stock: 47,  maxStock: 200, status: 'In Stock',     revenue: '₹14.2L' },
  { emoji: '📱', name: 'Samsung Galaxy S24',   cat: 'Electronics', sku: 'SAM-GS24',    price: '₹74,999',   stock: 123, maxStock: 300, status: 'In Stock',     revenue: '₹11.6L' },
  { emoji: '🎧', name: 'Sony WH-1000XM5',      cat: 'Audio',       sku: 'SNY-WH5',     price: '₹31,990',   stock: 8,   maxStock: 150, status: 'Low Stock',    revenue: '₹9.5L'  },
  { emoji: '👟', name: 'Nike Air Max 270',      cat: 'Footwear',    sku: 'NK-AM270',    price: '₹8,995',    stock: 234, maxStock: 500, status: 'In Stock',     revenue: '₹6.8L'  },
  { emoji: '🎮', name: 'PlayStation 5',         cat: 'Gaming',      sku: 'SNY-PS5',     price: '₹54,990',   stock: 0,   maxStock: 100, status: 'Out of Stock', revenue: '₹5.2L'  },
  { emoji: '⌚', name: 'Apple Watch Series 9',  cat: 'Wearables',   sku: 'APL-WS9',     price: '₹41,900',   stock: 62,  maxStock: 120, status: 'In Stock',     revenue: '₹4.8L'  },
  { emoji: '📷', name: 'Canon EOS R6 Mark II', cat: 'Cameras',     sku: 'CAN-EOS-R6',  price: '₹2,49,995', stock: 5,   maxStock: 50,  status: 'Low Stock',    revenue: '₹4.2L'  },
  { emoji: '🖥️', name: 'LG 27" 4K Monitor',    cat: 'Monitors',    sku: 'LG-27-4K',    price: '₹42,990',   stock: 89,  maxStock: 200, status: 'In Stock',     revenue: '₹3.9L'  },
  { emoji: '👜', name: 'Coach Leather Bag',     cat: 'Fashion',     sku: 'CCH-LB-01',   price: '₹22,000',   stock: 3,   maxStock: 80,  status: 'Low Stock',    revenue: '₹3.1L'  },
  { emoji: '🏋️', name: 'Bowflex Dumbbell Set', cat: 'Fitness',     sku: 'BWF-DB90',    price: '₹18,500',   stock: 0,   maxStock: 60,  status: 'Out of Stock', revenue: '₹2.6L'  },
  { emoji: '🧴', name: 'The Ordinary Serum Kit',cat: 'Beauty',     sku: 'TOC-SK-01',   price: '₹3,990',    stock: 412, maxStock: 600, status: 'In Stock',     revenue: '₹2.1L'  },
  { emoji: '📚', name: 'Premium Study Desk',    cat: 'Furniture',   sku: 'FRN-SD-PRO',  price: '₹12,999',   stock: 18,  maxStock: 40,  status: 'In Stock',     revenue: '₹1.8L'  },
]

export const salesData = {
  labels: ['May 26','27','28','29','30','31','Jun 1','2','3','4','5','6','7','8'],
  values: [42, 38, 65, 54, 71, 48, 82, 67, 90, 74, 95, 88, 76, 102],
}

export const statusData = {
  labels: ['Pending', 'Shipped', 'Delivered', 'Cancelled'],
  values: [22, 31, 38, 9],
  colors: ['#f59e0b', '#3b82f6', '#10b981', '#ef4444'],
}

export const topProducts = [
  { emoji: '💻', name: 'MacBook Air M3',     units: 124, pct: 100, revenue: '₹14.2L' },
  { emoji: '📱', name: 'Samsung S24',        units: 287, pct: 82,  revenue: '₹11.6L' },
  { emoji: '🎧', name: 'Sony WH-1000XM5',   units: 341, pct: 67,  revenue: '₹9.5L'  },
  { emoji: '👟', name: 'Nike Air Max 270',   units: 612, pct: 48,  revenue: '₹6.8L'  },
  { emoji: '🎮', name: 'PlayStation 5',      units: 89,  pct: 38,  revenue: '₹5.2L'  },
]
