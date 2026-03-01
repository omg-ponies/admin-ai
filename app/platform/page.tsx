import { Card } from '@/components/ui/Card'
import { Terminal } from '@/components/terminal/Terminal'

export default function PlatformPage() {
  return (
    <main>
      {/* Hero */}
      <section className="py-24 bg-saas-text text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="font-serif text-6xl font-semibold mb-6">Platform</h1>
          <p className="text-xl text-gray-300">
            Four core pillars powering autonomous healthcare coordination
          </p>
        </div>
      </section>

      {/* Four Pillars */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: 'Triage', desc: 'Intelligent patient prioritization based on clinical urgency and resource availability' },
              { title: 'Coordination', desc: 'Automated scheduling, provider matching, and resource allocation across the care network' },
              { title: 'Communication', desc: 'Multi-channel patient engagement with natural language understanding and responses' },
              { title: 'Documentation', desc: 'Real-time EMR sync with structured clinical data and compliance tracking' },
            ].map((pillar) => (
              <Card key={pillar.title} hover>
                <h3 className="font-serif text-2xl mb-4">{pillar.title}</h3>
                <p className="text-gray-600">{pillar.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Specs */}
      <section className="py-24 bg-saas-gray">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="font-serif text-4xl text-center mb-16">Technical Specifications</h2>
          <Terminal badge="/usr/local/admin/specs">
            <div className="space-y-2">
              <div>architecture: microservices • event-driven</div>
              <div>integration: HL7 FHIR • REST API • webhooks</div>
              <div>security: HIPAA compliant • SOC 2 Type II • encrypted at rest</div>
              <div>availability: 99.99% uptime SLA • multi-region deployment</div>
              <div>scale: handles 10k+ patients/day • real-time processing</div>
            </div>
          </Terminal>
        </div>
      </section>
    </main>
  )
}
