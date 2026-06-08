import { Routes, Route } from 'react-router-dom'
import { ThemeProvider } from './context/ThemeContext'
import Sidebar from './components/Sidebar'
import Topbar from './components/Topbar'
import Dashboard from './pages/Dashboard'
import Orders from './pages/Orders'
import Products from './pages/Products'

function ComingSoon({ page }) {
  return (
    <div className="page-body" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: 400 }}>
      <div style={{ textAlign: 'center', color: 'var(--text-muted)' }}>
        <i className="ti ti-tools" style={{ fontSize: 40, display: 'block', marginBottom: 12 }} />
        <div style={{ fontFamily: 'var(--font-display)', fontSize: 18, fontWeight: 600, color: 'var(--text-primary)', marginBottom: 6 }}>{page}</div>
        <div style={{ fontSize: 13 }}>Coming soon — page under construction</div>
      </div>
    </div>
  )
}

export default function App() {
  return (
    <ThemeProvider>
      <div className="layout">
        <Sidebar />
        <div className="main-content">
          <Topbar />
          <Routes>
            <Route path="/"          element={<Dashboard />} />
            <Route path="/orders"    element={<Orders />} />
            <Route path="/products"  element={<Products />} />
            <Route path="/customers" element={<ComingSoon page="Customers" />} />
            <Route path="/coupons"   element={<ComingSoon page="Coupons" />} />
            <Route path="/reports"   element={<ComingSoon page="Reports" />} />
            <Route path="/marketing" element={<ComingSoon page="Marketing" />} />
            <Route path="/settings"  element={<ComingSoon page="Settings" />} />
          </Routes>
        </div>
      </div>
    </ThemeProvider>
  )
}
