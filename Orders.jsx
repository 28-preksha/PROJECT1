import { useState, useMemo } from 'react'
import Badge from '../components/Badge'
import { orders } from '../data/mockData'

const STATUSES = ['All', 'Pending', 'Shipped', 'Delivered', 'Cancelled']

function initials(name) {
  return name.split(' ').map(w => w[0]).join('').slice(0, 2).toUpperCase()
}

export default function Orders() {
  const [search, setSearch] = useState('')
  const [activeFilter, setActiveFilter] = useState('All')

  const filtered = useMemo(() => {
    const q = search.toLowerCase()
    return orders.filter(o => {
      const matchQ = o.name.toLowerCase().includes(q) || o.id.toLowerCase().includes(q) || o.email.toLowerCase().includes(q)
      const matchF = activeFilter === 'All' || o.status === activeFilter
      return matchQ && matchF
    })
  }, [search, activeFilter])

  return (
    <div className="page-body">
      <div className="table-card">
        <div className="table-header">
          <div className="search-wrap">
            <i className="ti ti-search" aria-hidden="true" />
            <input
              className="search-input"
              type="text"
              placeholder="Search orders, customers..."
              value={search}
              onChange={e => setSearch(e.target.value)}
            />
          </div>
          <div className="filter-btns">
            {STATUSES.map(s => (
              <button
                key={s}
                className={`filter-btn${activeFilter === s ? ' active' : ''}`}
                onClick={() => setActiveFilter(s)}
              >
                {s}
              </button>
            ))}
          </div>
          <button className="add-btn">
            <i className="ti ti-plus" aria-hidden="true" /> New Order
          </button>
        </div>

        <div className="table-scroll">
          <table>
            <thead>
              <tr>
                <th>Order ID</th>
                <th>Customer</th>
                <th>Date</th>
                <th>Items</th>
                <th>Amount</th>
                <th>Payment</th>
                <th>Status</th>
                <th style={{ textAlign: 'center' }}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map(o => (
                <tr key={o.id}>
                  <td style={{ fontWeight: 600, color: 'var(--accent)' }}>{o.id}</td>
                  <td>
                    <div className="customer-cell">
                      <div className="cust-avatar" style={{ background: o.color }}>{initials(o.name)}</div>
                      <div>
                        <div className="cust-name">{o.name}</div>
                        <div className="cust-email">{o.email}</div>
                      </div>
                    </div>
                  </td>
                  <td style={{ color: 'var(--text-secondary)' }}>{o.date}</td>
                  <td><span style={{ fontWeight: 500 }}>{o.items}</span> item{o.items > 1 ? 's' : ''}</td>
                  <td style={{ fontWeight: 600 }}>{o.amount}</td>
                  <td><span style={{ fontSize: 12, color: 'var(--text-secondary)' }}>{o.payment}</span></td>
                  <td><Badge status={o.status} /></td>
                  <td style={{ textAlign: 'center' }}>
                    <button className="action-btn" title="View"><i className="ti ti-eye" /></button>
                    <button className="action-btn" title="Edit"><i className="ti ti-edit" /></button>
                    <button className="action-btn" title="More"><i className="ti ti-dots-vertical" /></button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {filtered.length === 0 && (
            <div className="empty-state">
              <i className="ti ti-inbox" />
              No orders match your search.
            </div>
          )}
        </div>

        <div className="pagination">
          <span>Showing {filtered.length} of 3,842 orders</span>
          <div className="filter-btns">
            <button className="filter-btn" style={{ padding: '5px 12px' }}>← Prev</button>
            <button className="filter-btn active" style={{ padding: '5px 12px' }}>1</button>
            <button className="filter-btn" style={{ padding: '5px 12px' }}>2</button>
            <button className="filter-btn" style={{ padding: '5px 12px' }}>3</button>
            <button className="filter-btn" style={{ padding: '5px 12px' }}>Next →</button>
          </div>
        </div>
      </div>
    </div>
  )
}
