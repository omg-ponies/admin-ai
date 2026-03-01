import { Card } from '@/components/ui/Card'

export default function HowItWorksPage() {
  return (
    <main>
      {/* Hero */}
      <section className="py-24 bg-gradient-to-br from-saas-teal to-saas-tealLight">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="font-serif text-6xl font-semibold mb-6">How It Works</h1>
          <p className="text-xl text-gray-700">
            Autonomous AI coordination from referral to discharge
          </p>
        </div>
      </section>

      {/* Workflow */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-serif text-4xl text-center mb-16">The Workflow</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: '1', title: 'Referral', desc: 'Patient referral received and parsed automatically' },
              { step: '2', title: 'Triage', desc: 'AI analyzes urgency and clinical requirements' },
              { step: '3', title: 'Coordination', desc: 'Scheduling and provider matching in real-time' },
              { step: '4', title: 'Documentation', desc: 'Complete records synced to EMR systems' },
            ].map((item) => (
              <Card key={item.step} className="text-center">
                <div className="w-12 h-12 bg-saas-teal rounded-full flex items-center justify-center font-bold text-2xl mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="font-serif text-xl mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 bg-saas-gray">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-serif text-4xl text-center mb-16">Key Features</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              'Natural Language Processing',
              'EMR Integration',
              'Intelligent Routing',
              'Automated Follow-ups',
              'Real-time Analytics',
              'Compliance Monitoring',
            ].map((feature) => (
              <Card key={feature}>
                <h3 className="font-semibold text-lg mb-2">{feature}</h3>
                <p className="text-gray-600 text-sm">Enterprise-grade capability for healthcare administration</p>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
