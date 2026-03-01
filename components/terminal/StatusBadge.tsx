interface StatusBadgeProps {
  status: 'ok' | 'warn' | 'error' | 'info'
  label: string
  showDot?: boolean
}

export function StatusBadge({ status, label, showDot = true }: StatusBadgeProps) {
  const colors = {
    ok: 'bg-green-100 text-green-800',
    warn: 'bg-yellow-100 text-yellow-800',
    error: 'bg-red-100 text-red-800',
    info: 'bg-blue-100 text-blue-800',
  }

  const dotColors = {
    ok: 'bg-status-ok',
    warn: 'bg-status-warn',
    error: 'bg-status-error',
    info: 'bg-status-info',
  }

  return (
    <span className={`status-badge ${colors[status]}`}>
      {showDot && <span className={`status-dot ${dotColors[status]}`} />}
      {label}
    </span>
  )
}
