import { Terminal } from '@/components/terminal/Terminal'
import { TypingAnimation } from '@/components/terminal/TypingAnimation'
import { StatusBadge } from '@/components/terminal/StatusBadge'
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'

export default function HomePage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-saas-teal via-saas-tealLight to-saas-gray relative overflow-hidden">
        {/* Background blobs */}
        <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-saas-teal/30 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-saas-tealLight/40 rounded-full blur-3xl" />

        <div className="max-w-6xl mx-auto px-6 relative z-10 py-20">
          <div className="text-center mb-12">
            <h1 className="font-serif text-6xl md:text-7xl font-light text-saas-text mb-6">
              Healthcare Administration,<br />
              <span className="font-semibold">Reimagined</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
              AI agents that autonomously coordinate patient care, from referral to discharge
            </p>
            <div className="flex gap-4 justify-center">
              <Button variant="primary" size="lg" href="/contact">Schedule Demo</Button>
              <Button variant="secondary" size="lg" href="/how-it-works">Learn More</Button>
            </div>
          </div>

          {/* Terminal Demo */}
          <Terminal badge="/usr/local/admin/orchestrator">
            <TypingAnimation
              text="$ orchestrator boot --sessions 2&#10;init: runtime • schedulers • network&#10;load: patient-context • healthcare-context&#10;cluster online • patient channels active"
              speed={15}
            />
          </Terminal>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-center text-gray-600 mb-8">Trusted by leading healthcare organizations</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center opacity-50">
            {[1, 2, 3, 4].map(i => (
              <div key={i} className="h-12 bg-gray-200 rounded" />
            ))}
          </div>
        </div>
      </section>

      {/* Value Props */}
      <section className="py-24 bg-saas-gray">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-serif text-5xl text-center mb-16">Why Admin.ai</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card hover>
              <StatusBadge status="ok" label="Autonomous" />
              <h3 className="font-serif text-2xl mt-4 mb-3">24/7 Operation</h3>
              <p className="text-gray-600">
                AI agents work around the clock, handling patient coordination without human intervention
              </p>
            </Card>
            <Card hover>
              <StatusBadge status="info" label="Intelligent" />
              <h3 className="font-serif text-2xl mt-4 mb-3">Clinical Accuracy</h3>
              <p className="text-gray-600">
                Medical-grade AI trained on healthcare workflows ensures accurate triage and documentation
              </p>
            </Card>
            <Card hover>
              <StatusBadge status="warn" label="Integrated" />
              <h3 className="font-serif text-2xl mt-4 mb-3">Seamless EMR Sync</h3>
              <p className="text-gray-600">
                Direct integration with major EMR systems means zero manual data entry
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-saas-text text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-serif text-5xl mb-6">Ready to transform your operations?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Join the future of healthcare administration
          </p>
          <Button variant="secondary" size="lg" href="/contact">Schedule a Demo</Button>
        </div>
      </section>
    </main>
  )
}
