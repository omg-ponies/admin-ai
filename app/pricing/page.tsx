import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'

export default function PricingPage() {
  const tiers = [
    {
      name: 'Starter',
      price: '$2,500',
      period: '/month',
      desc: 'For small clinics getting started',
      features: [
        'Up to 500 patients/month',
        'Basic EMR integration',
        'Email support',
        'Standard SLA',
      ],
    },
    {
      name: 'Professional',
      price: '$7,500',
      period: '/month',
      desc: 'For growing healthcare organizations',
      features: [
        'Up to 2,000 patients/month',
        'Advanced EMR integration',
        'Priority support',
        '99.9% uptime SLA',
        'Custom workflows',
        'Analytics dashboard',
      ],
      highlight: true,
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: '',
      desc: 'For large health systems',
      features: [
        'Unlimited patients',
        'Full EMR ecosystem integration',
        'Dedicated success manager',
        '99.99% uptime SLA',
        'Custom AI training',
        'Advanced analytics',
        'Multi-site deployment',
      ],
    },
  ]

  return (
    <main>
      {/* Hero */}
      <section className="py-24 bg-gradient-to-br from-saas-teal to-saas-tealLight">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="font-serif text-6xl font-semibold mb-6">Pricing</h1>
          <p className="text-xl text-gray-700">
            Transparent pricing that scales with your organization
          </p>
        </div>
      </section>

      {/* Pricing Tiers */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            {tiers.map((tier) => (
              <Card
                key={tier.name}
                className={`${tier.highlight ? 'border-2 border-saas-teal ring-4 ring-saas-teal/20' : ''}`}
              >
                {tier.highlight && (
                  <div className="text-xs font-semibold text-saas-teal uppercase tracking-wide mb-4">
                    Most Popular
                  </div>
                )}
                <h3 className="font-serif text-2xl mb-2">{tier.name}</h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold">{tier.price}</span>
                  <span className="text-gray-600">{tier.period}</span>
                </div>
                <p className="text-gray-600 mb-6">{tier.desc}</p>
                <ul className="space-y-3 mb-8">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex gap-2">
                      <span className="text-saas-teal">✓</span>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  variant={tier.highlight ? 'primary' : 'secondary'}
                  className="w-full"
                  href="/contact"
                >
                  {tier.name === 'Enterprise' ? 'Contact Sales' : 'Get Started'}
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-saas-gray">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-serif text-4xl text-center mb-16">Frequently Asked Questions</h2>
          <div className="space-y-8">
            {[
              { q: 'How does billing work?', a: 'Monthly subscription billed in advance. Annual plans available with 2 months free.' },
              { q: 'Can I change plans?', a: 'Yes, upgrade or downgrade anytime. Changes take effect on your next billing cycle.' },
              { q: 'What EMR systems do you support?', a: 'Epic, Cerner, Meditech, Allscripts, and 50+ other major EMR platforms.' },
              { q: 'Is there a setup fee?', a: 'No setup fees for Starter and Professional plans. Enterprise pricing includes implementation.' },
            ].map((faq) => (
              <div key={faq.q}>
                <h3 className="font-semibold text-lg mb-2">{faq.q}</h3>
                <p className="text-gray-600">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
