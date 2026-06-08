# NexAdmin — E-Commerce Admin Panel

A professional, modern e-commerce admin panel built with **React + Vite**.

## Tech Stack
- React 18
- React Router v6
- Chart.js + react-chartjs-2
- Vite (dev server + bundler)
- Pure CSS (no Tailwind, no UI library)

## Project Structure
```
nexadmin/
├── src/
│   ├── components/
│   │   ├── Sidebar.jsx       # Navigation sidebar
│   │   ├── Topbar.jsx        # Header with dark mode toggle
│   │   ├── StatCard.jsx      # Reusable metric card
│   │   ├── Badge.jsx         # Status badge (Delivered, Pending...)
│   │   ├── SalesChart.jsx    # Line chart - daily sales
│   │   └── StatusChart.jsx   # Donut chart - order status
│   ├── pages/
│   │   ├── Dashboard.jsx     # Main dashboard
│   │   ├── Orders.jsx        # Orders table with search + filter
│   │   └── Products.jsx      # Products inventory table
│   ├── context/
│   │   └── ThemeContext.jsx  # Dark/Light mode state
│   ├── data/
│   │   └── mockData.js       # All sample data (orders, products, charts)
│   ├── App.jsx               # Routes setup
│   ├── main.jsx              # Entry point
│   └── index.css             # Global styles + CSS variables
├── index.html
├── vite.config.js
└── package.json
```

## Setup & Run

### Requirements
- Node.js v18 or above  
- npm or yarn

### Steps

```bash
# 1. Project folder mein jao
cd nexadmin

# 2. Dependencies install karo
npm install

# 3. Dev server start karo
npm run dev
```

Browser mein open hoga: **http://localhost:5173**

### Build for Production
```bash
npm run build
```

## Features
- **Dashboard** — Revenue, Orders, Customers stats + Sales line chart + Status donut chart + Recent orders + Top products
- **Orders** — Full table with live search, status filter (Pending/Shipped/Delivered/Cancelled), pagination
- **Products** — Inventory table with stock bar, category tags, status filter, live search
- **Dark / Light Mode** — System preference detect karta hai, toggle button se switch karo
- **React Router** — Clean URL-based navigation
