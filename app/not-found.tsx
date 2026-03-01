import { Terminal } from '@/components/terminal/Terminal'
import { Button } from '@/components/ui/Button'

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-terminal-bg">
      <div className="max-w-2xl mx-auto px-6">
        <Terminal badge="/usr/local/admin/error">
          <div className="space-y-2">
            <div className="text-status-error">ERROR 404: route not found</div>
            <div className="text-terminal-muted">---</div>
            <div>requested path: {'{current_path}'}</div>
            <div>status: NOT_FOUND</div>
            <div className="text-terminal-muted">---</div>
            <div className="mt-4">
              <span className="text-terminal-accent">$</span> suggest --action
            </div>
            <div className="text-terminal-muted">searching available routes...</div>
            <div className="mt-2">
              <span className="text-status-ok">✓</span> found: [home, platform, how-it-works, contact]
            </div>
          </div>
        </Terminal>

        <div className="mt-8 text-center">
          <Button variant="terminal" size="lg" href="/">
            Return to Home
          </Button>
        </div>
      </div>
    </main>
  )
}
