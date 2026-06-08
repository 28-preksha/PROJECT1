export default function StatCard({ label, value, change, changeType, iconClass, iconColor }) {
  return (
    <div className="stat-card">
      <div className={`stat-icon ${iconColor}`}>
        <i className={`ti ${iconClass}`} aria-hidden="true" />
      </div>
      <div className="stat-label">{label}</div>
      <div className="stat-value">{value}</div>
      <div className={`stat-change ${changeType}`}>
        <i className={`ti ${changeType === 'up' ? 'ti-trending-up' : 'ti-trending-down'}`} aria-hidden="true" />
        {change}
      </div>
    </div>
  )
}
