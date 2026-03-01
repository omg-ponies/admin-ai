import { ReactNode } from 'react'

interface TerminalProps {
  badge?: string
  children: ReactNode
  className?: string
}

export function Terminal({ badge = '/usr/local/admin', children, className = '' }: TerminalProps) {
  return (
    <div className={`terminal-window ${className}`}>
      <div className="terminal-header">
        <span className="terminal-dot" />
        <span className="terminal-dot" />
        <span className="terminal-dot" />
        <span className="terminal-badge">{badge}</span>
      </div>
      <div className="terminal-body">
        {children}
      </div>
    </div>
  )
}
