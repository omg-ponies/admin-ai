import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'

export default function ForClinicsPage() {
  return (
    <main>
      {/* Hero */}
      <section className="py-24 bg-gradient-to-br from-saas-teal to-saas-tealLight">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="font-serif text-6xl font-semibold mb-6">For Clinics</h1>
          <p className="text-xl text-gray-700">
            Transform your operations with autonomous coordination
          </p>
        </div>
      </section>

      {/* Before/After */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="font-serif text-4xl text-center mb-16">The Transformation</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="font-serif text-2xl mb-6 text-red-600">Before Admin.ai</h3>
              <ul className="space-y-4">
                <li className="flex gap-3">
                  <span className="text-red-500">✗</span>
                  <span className="text-gray-600">Manual referral processing taking 2-3 days</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-red-500">✗</span>
                  <span className="text-gray-600">Staff spending 60% of time on coordination</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-red-500">✗</span>
                  <span className="text-gray-600">Patient satisfaction scores below 70%</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-red-500">✗</span>
                  <span className="text-gray-600">Revenue leakage from missed appointments</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-serif text-2xl mb-6 text-green-600">After Admin.ai</h3>
              <ul className="space-y-4">
                <li className="flex gap-3">
                  <span className="text-green-500">✓</span>
                  <span className="text-gray-600">Referrals processed in under 5 minutes</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-green-500">✓</span>
                  <span className="text-gray-600">Staff focus on high-value patient care</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-green-500">✓</span>
                  <span className="text-gray-600">Patient satisfaction increased to 95%+</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-green-500">✓</span>
                  <span className="text-gray-600">30% increase in patient volume capacity</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ROI */}
      <section className="py-24 bg-saas-gray">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-serif text-4xl text-center mb-16">Return on Investment</h2>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="text-center">
              <div className="text-5xl font-bold text-saas-text mb-2">3-6</div>
              <div className="text-gray-600">months to positive ROI</div>
            </Card>
            <Card className="text-center">
              <div className="text-5xl font-bold text-saas-text mb-2">40%</div>
              <div className="text-gray-600">reduction in admin costs</div>
            </Card>
            <Card className="text-center">
              <div className="text-5xl font-bold text-saas-text mb-2">95%+</div>
              <div className="text-gray-600">patient satisfaction</div>
            </Card>
          </div>
          <div className="text-center">
            <Button variant="primary" size="lg" href="/contact">Calculate Your ROI</Button>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-serif text-4xl text-center mb-16">Case Studies</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { org: 'Metro Health Network', result: '50% faster patient intake, 2x referral capacity' },
              { org: 'Community Care Clinic', result: '35% cost reduction, 98% patient satisfaction' },
            ].map((study) => (
              <Card key={study.org} hover>
                <h3 className="font-serif text-xl mb-3">{study.org}</h3>
                <p className="text-gray-600">{study.result}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
