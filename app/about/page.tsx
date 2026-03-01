import { Card } from '@/components/ui/Card'

export default function AboutPage() {
  return (
    <main>
      {/* Hero */}
      <section className="py-24 bg-saas-text text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="font-serif text-6xl font-semibold mb-6">About Admin.ai</h1>
          <p className="text-xl text-gray-300">
            Building the future of autonomous healthcare coordination
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-serif text-4xl mb-8">Our Mission</h2>
          <p className="text-xl text-gray-600 leading-relaxed mb-6">
            We believe healthcare administration should be invisible, allowing providers to focus entirely
            on patient care. Our AI agents handle the complexity of coordination, scheduling, and
            documentation automatically.
          </p>
          <p className="text-xl text-gray-600 leading-relaxed">
            Founded in 2024, Admin.ai emerged from research in autonomous systems and healthcare operations.
            We partner with leading health systems to transform how care is coordinated.
          </p>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 bg-saas-gray">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-serif text-4xl text-center mb-16">Our Team</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { role: 'Engineering', desc: 'AI researchers and healthcare tech veterans' },
              { role: 'Clinical', desc: 'Physicians and nurses with frontline experience' },
              { role: 'Operations', desc: 'Healthcare administrators and system designers' },
            ].map((team) => (
              <Card key={team.role}>
                <h3 className="font-serif text-2xl mb-3">{team.role}</h3>
                <p className="text-gray-600">{team.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-serif text-4xl text-center mb-16">Our Values</h2>
          <div className="space-y-8">
            {[
              { title: 'Patient-First', desc: 'Every decision optimizes for patient outcomes and experience' },
              { title: 'Clinical Safety', desc: 'Medical-grade accuracy and compliance in every interaction' },
              { title: 'Provider Partnership', desc: 'Augmenting healthcare teams, never replacing them' },
            ].map((value) => (
              <div key={value.title} className="border-l-4 border-saas-teal pl-6">
                <h3 className="font-serif text-2xl mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
