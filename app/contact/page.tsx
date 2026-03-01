import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'

export default function ContactPage() {
  return (
    <main>
      {/* Hero */}
      <section className="py-24 bg-gradient-to-br from-saas-teal to-saas-tealLight">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="font-serif text-6xl font-semibold mb-6">Get in Touch</h1>
          <p className="text-xl text-gray-700">
            Ready to transform your healthcare operations?
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Form */}
            <div>
              <h2 className="font-serif text-3xl mb-8">Schedule a Demo</h2>
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-saas-teal focus:border-transparent"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-saas-teal focus:border-transparent"
                  />
                </div>
                <div>
                  <label htmlFor="organization" className="block text-sm font-medium mb-2">
                    Organization *
                  </label>
                  <input
                    type="text"
                    id="organization"
                    name="organization"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-saas-teal focus:border-transparent"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-saas-teal focus:border-transparent"
                  />
                </div>
                <Button variant="primary" className="w-full" type="submit">
                  Request Demo
                </Button>
              </form>
            </div>

            {/* Contact Info */}
            <div>
              <h2 className="font-serif text-3xl mb-8">Contact Information</h2>
              <div className="space-y-6">
                <Card>
                  <h3 className="font-semibold mb-2">Email</h3>
                  <a href="mailto:hello@admin.ai" className="text-saas-teal hover:underline">
                    hello@admin.ai
                  </a>
                </Card>
                <Card>
                  <h3 className="font-semibold mb-2">Response Time</h3>
                  <p className="text-gray-600">We typically respond within 24 hours</p>
                </Card>
                <Card>
                  <h3 className="font-semibold mb-2">Office Hours</h3>
                  <p className="text-gray-600">Monday - Friday: 9:00 AM - 6:00 PM EST</p>
                </Card>
              </div>

              <div className="mt-12">
                <h3 className="font-serif text-2xl mb-4">Careers</h3>
                <p className="text-gray-600 mb-4">
                  Interested in joining our team? We're always looking for talented individuals
                  passionate about healthcare and AI.
                </p>
                <a href="mailto:careers@admin.ai" className="text-saas-teal hover:underline font-medium">
                  View open positions →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
