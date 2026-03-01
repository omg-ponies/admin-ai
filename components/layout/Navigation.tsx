'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/how-it-works', label: 'How It Works' },
  { href: '/platform', label: 'Platform' },
  { href: '/for-clinics', label: 'For Clinics' },
  { href: '/about', label: 'About' },
  { href: '/pricing', label: 'Pricing' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'Contact' },
]

export function Navigation() {
  const pathname = usePathname()

  return (
    <nav className="glass border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <div className="w-7 h-7 grid grid-cols-2 gap-1">
              <span className="w-3 h-3 bg-saas-text rounded-full" />
              <span className="w-3 h-3 bg-saas-text rounded-full" />
              <span className="w-3 h-3 bg-saas-text rounded-full" />
              <span className="w-3 h-3 bg-saas-text rounded-full" />
            </div>
            <span className="font-serif text-xl font-semibold">Admin.ai</span>
          </Link>

          {/* Nav Links */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm font-medium transition-colors ${
                  pathname === item.href
                    ? 'text-saas-text'
                    : 'text-gray-600 hover:text-saas-text'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <Link
            href="/contact"
            className="px-4 py-2 bg-saas-text text-white rounded-lg font-medium text-sm hover:bg-black transition-colors"
          >
            Get Started
          </Link>
        </div>
      </div>
    </nav>
  )
}
