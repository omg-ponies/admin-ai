import { Card } from '@/components/ui/Card'
import Link from 'next/link'

export default function BlogPage() {
  const posts = [
    {
      title: 'The Future of Healthcare Coordination',
      date: 'March 1, 2026',
      category: 'Industry Insights',
      excerpt: 'How AI is transforming patient care coordination and what it means for healthcare providers.',
    },
    {
      title: 'Reducing Administrative Burden with AI',
      date: 'February 15, 2026',
      category: 'Product Updates',
      excerpt: 'Our latest features help healthcare teams focus on patients, not paperwork.',
    },
    {
      title: 'HIPAA Compliance in the Age of AI',
      date: 'February 1, 2026',
      category: 'Security',
      excerpt: 'How we ensure patient data security and regulatory compliance with autonomous systems.',
    },
  ]

  return (
    <main>
      {/* Hero */}
      <section className="py-24 bg-saas-text text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="font-serif text-6xl font-semibold mb-6">Blog</h1>
          <p className="text-xl text-gray-300">
            Insights on healthcare AI and autonomous coordination
          </p>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            {posts.map((post) => (
              <Card key={post.title} hover className="flex flex-col h-full">
                <div className="text-xs font-semibold text-saas-teal uppercase tracking-wide mb-2">
                  {post.category}
                </div>
                <h3 className="font-serif text-xl mb-2">{post.title}</h3>
                <p className="text-sm text-gray-500 mb-4">{post.date}</p>
                <p className="text-gray-600 mb-4 flex-grow">{post.excerpt}</p>
                <Link href="#" className="text-saas-text font-medium hover:underline">
                  Read more →
                </Link>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-24 bg-saas-gray">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-serif text-4xl text-center mb-16">Categories</h2>
          <div className="flex flex-wrap gap-4 justify-center">
            {['All Posts', 'Industry Insights', 'Product Updates', 'Security', 'Case Studies', 'Engineering'].map((cat) => (
              <Link
                key={cat}
                href="#"
                className="px-6 py-3 bg-white rounded-full hover:bg-saas-text hover:text-white transition-colors"
              >
                {cat}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
