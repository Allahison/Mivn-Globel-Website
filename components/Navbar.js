'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const navItems = [
  {
    label: 'Services',
    href: '/services',
    dropdown: [
      { label: 'E-commerce Operations', href: '/services/ecommerce-operations' },
      { label: 'Custom Development', href: '/services/custom-development' },
    ],
  },
  {
    label: 'Industries',
    href: '/industries',
    dropdown: [
      { label: 'Law Firms', href: '/industries/law-firms' },
      { label: 'Wholesale & Importers', href: '/industries/wholesale-importers' },
      { label: 'E-commerce Operators', href: '/industries/ecommerce-operators' },
      { label: 'Mobile Phone Importers', href: '/industries/mobile-phone-importers' },
    ],
  },
  { label: 'Case Studies', href: '/case-studies' },
  {
    label: 'Company',
    href: '/about',
    dropdown: [
      { label: 'About Us', href: '/about' },
      { label: 'FAQ', href: '/faq' },
    ],
  },
];

function DropdownMenu({ items }) {
  return (
    <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-xl shadow-2xl border border-gray-100 overflow-hidden z-50 animate-fadeIn">
      {items.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className="block px-5 py-3 text-sm text-gray-700 hover:bg-blue-600 hover:text-white transition-colors duration-200 font-medium"
        >
          {item.label}
        </Link>
      ))}
    </div>
  );
}

function NavItem({ item, transparent }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  const timeoutRef = useRef(null);

  const handleMouseEnter = () => {
    clearTimeout(timeoutRef.current);
    setOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setOpen(false), 150);
  };

  useEffect(() => {
    return () => clearTimeout(timeoutRef.current);
  }, []);

  const linkCls = transparent
    ? 'text-white/90 hover:text-white font-semibold text-sm transition-colors duration-200 px-1 py-2'
    : 'text-gray-700 hover:text-blue-600 font-semibold text-sm transition-colors duration-200 px-1 py-2';

  if (!item.dropdown) {
    return (
      <Link href={item.href} className={linkCls}>
        {item.label}
      </Link>
    );
  }

  return (
    <div
      ref={ref}
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button className={`flex items-center gap-1 cursor-pointer ${linkCls}`}>
        {item.label}
        <svg
          className={`w-4 h-4 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {open && <DropdownMenu items={item.dropdown} />}
    </div>
  );
}

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const transparent = !scrolled;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100'
          : 'bg-transparent border-b border-white/10'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18 py-3">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 relative flex-shrink-0">
              <Image src="/logo.png" alt="Mivan Global Logo" fill sizes="40px" className="object-contain" />
            </div>
            <div>
              <span className={`font-bold text-lg leading-tight block transition-colors duration-300 ${transparent ? 'text-white' : 'text-gray-900'}`}>
                Mivan Global
              </span>
              <span className={`text-xs font-semibold tracking-widest uppercase transition-colors duration-300 ${transparent ? 'text-blue-300' : 'text-blue-600'}`}>
                Suite
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <NavItem key={item.label} item={item} transparent={transparent} />
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link
              href="/contact"
              className={`text-sm font-semibold px-5 py-2.5 rounded-lg transition-all duration-300 ${
                transparent
                  ? 'bg-white/15 hover:bg-white/25 text-white border border-white/30 backdrop-blur-sm'
                  : 'bg-blue-600 hover:bg-blue-700 text-white shadow-md'
              }`}
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden p-2 rounded-lg transition-colors duration-300 ${
              transparent ? 'text-white hover:bg-white/10' : 'text-gray-600 hover:bg-gray-100'
            }`}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-4 pb-4">
          {navItems.map((item) => (
            <div key={item.label} className="py-1">
              {item.dropdown ? (
                <>
                  <button
                    onClick={() => setMobileExpanded(mobileExpanded === item.label ? null : item.label)}
                    className="w-full flex items-center justify-between py-2.5 text-sm font-semibold text-gray-700"
                  >
                    {item.label}
                    <svg
                      className={`w-4 h-4 transition-transform ${mobileExpanded === item.label ? 'rotate-180' : ''}`}
                      fill="none" stroke="currentColor" viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {mobileExpanded === item.label && (
                    <div className="pl-4 border-l-2 border-blue-600 mt-1 space-y-1">
                      {item.dropdown.map((sub) => (
                        <Link
                          key={sub.href}
                          href={sub.href}
                          onClick={() => setMobileOpen(false)}
                          className="block py-2 text-sm text-gray-600 hover:text-blue-600 font-medium"
                        >
                          {sub.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <Link
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="block py-2.5 text-sm font-semibold text-gray-700 hover:text-blue-600"
                >
                  {item.label}
                </Link>
              )}
            </div>
          ))}
          <Link
            href="/contact"
            onClick={() => setMobileOpen(false)}
            className="block mt-3 bg-blue-600 text-white text-sm font-semibold px-5 py-2.5 rounded-lg text-center"
          >
            Get Started
          </Link>
        </div>
      )}
    </nav>
  );
}
