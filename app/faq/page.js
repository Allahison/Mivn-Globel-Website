'use client';

import { useState } from 'react';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CTASection from '@/components/CTASection';
import ScrollReveal from '@/components/ScrollReveal';

const categories = [
  {
    icon: '🤖',
    title: 'AI Marketing Guide',
    count: 34,
    desc: 'Learn AI strategies to improve your business marketing performance.',
    color: 'from-blue-600 to-blue-800',
    glow: 'group-hover:shadow-blue-500/20',
  },
  {
    icon: '⚡',
    title: 'Automation Workflow',
    count: 27,
    desc: 'Configure automated workflows to save time and increase efficiency.',
    color: 'from-violet-600 to-violet-800',
    glow: 'group-hover:shadow-violet-500/20',
  },
  {
    icon: '📊',
    title: 'Analytics & Reports',
    count: 45,
    desc: 'Track marketing metrics to measure performance and identify growth.',
    color: 'from-teal-600 to-teal-800',
    glow: 'group-hover:shadow-teal-500/20',
  },
  {
    icon: '🚀',
    title: 'Campaigns Growth',
    count: 52,
    desc: 'Enhance advertising and boost engagement with AI insights.',
    color: 'from-orange-500 to-orange-700',
    glow: 'group-hover:shadow-orange-500/20',
  },
  {
    icon: '🔗',
    title: 'Integration Tools',
    count: 91,
    desc: 'Connect seamlessly with preferred marketing and CRM systems.',
    color: 'from-cyan-600 to-cyan-800',
    glow: 'group-hover:shadow-cyan-500/20',
  },
  {
    icon: '💳',
    title: 'Pricing Plans Guide',
    count: 73,
    desc: 'Explore costs, subscription options, and included features for business.',
    color: 'from-rose-600 to-rose-800',
    glow: 'group-hover:shadow-rose-500/20',
  },
];

const faqs = [
  {
    q: 'What is Mivan Global Suite?',
    a: 'Mivan Global Suite is an end-to-end digital operations company. We manage e-commerce marketplaces (Amazon, eBay, TikTok Shop), build custom software and B2B portals, deploy AI agents, and integrate all your business systems into a single, unified operating model — so you can scale without the manual overhead.',
  },
  {
    q: 'Do you implement the system for us?',
    a: 'Yes — fully. We don\'t hand you a manual and leave. Our team handles the entire implementation: auditing your current processes, configuring the Suite, building custom tools, integrating your existing data, and training your staff. We go live together and stay on to support you post-launch.',
  },
  {
    q: 'Do you do paid social marketing?',
    a: 'Yes. We plan and manage paid campaigns across Facebook, Instagram, TikTok, and Google. Our approach is data-driven — every campaign is tied to measurable KPIs such as ROAS, CPL, and conversion rate. We also run strategic promotions like lightning deals and multi-buy offers on marketplaces.',
  },
  {
    q: 'Do you manage E-commerce marketplaces?',
    a: 'Absolutely. Marketplace management is one of our core services. We handle listing optimisation, real-time inventory sync across Amazon, eBay, and TikTok Shop, dispatch performance monitoring, customer support, returns handling, and strategic promotions — all from a centralised operation.',
  },
  {
    q: 'Do you build custom software or apps?',
    a: 'Yes. Our development team builds bespoke B2B ordering portals, warehouse management systems, warranty platforms, business dashboards, staff mobile apps, and full end-to-end operating systems. Everything is built around your exact workflow — no off-the-shelf compromises.',
  },
  {
    q: 'Do you deploy AI Agents?',
    a: 'Yes. We design and deploy AI agents that automate repetitive tasks across your business — from customer support and lead qualification to inventory forecasting and reporting. Our AI implementations are practical, integrated into your existing stack, and built to deliver measurable ROI from day one.',
  },
  {
    q: 'Can you integrate with my existing systems?',
    a: 'Yes. We build deep integrations with ERP platforms, Xero (accounting), Shopify, WooCommerce, WMS, POS systems, and CRMs. Our goal is to eliminate manual data entry entirely — your systems should talk to each other automatically, in real time.',
  },
  {
    q: 'What happens after the launch?',
    a: 'We don\'t disappear post-launch. We provide 24/7 system monitoring, proactive bug fixes, performance reporting, and continuous feature updates. As your business grows, we scale the infrastructure with you — adding new integrations, launching on new marketplaces, and optimising existing workflows on an ongoing basis.',
  },
];

function FAQItem({ q, a, index }) {
  const [open, setOpen] = useState(false);
  return (
    <div className={`border-b border-gray-100 last:border-0 transition-all duration-200 ${open ? 'bg-gray-50' : 'bg-white hover:bg-gray-50/50'}`}>
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-8 py-5 text-left gap-6"
      >
        <div className="flex items-center gap-4 flex-1 min-w-0">
          <span className="text-xs font-black text-gray-300 w-5 flex-shrink-0">
            {String(index + 1).padStart(2, '0')}
          </span>
          <span className="font-bold text-gray-900 text-base">{q}</span>
        </div>
        <div className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 transition-all duration-200 ${open ? 'bg-blue-600' : 'bg-gray-100'}`}>
          <svg
            className={`w-4 h-4 transition-transform duration-200 ${open ? 'rotate-45 text-white' : 'text-gray-500'}`}
            fill="none" stroke="currentColor" viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 4v16m8-8H4" />
          </svg>
        </div>
      </button>
      {open && (
        <div className="px-8 pb-6">
          <div className="pl-9">
            <p className="text-gray-600 text-sm leading-relaxed">{a}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default function FAQ() {
  return (
    <>
      <Navbar />
      <main>

        {/* ── HERO ── */}
        <section className="bg-gray-950 text-white py-20 relative overflow-hidden">
          <div className="absolute inset-0">
            <Image src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1600&q=60" alt="" fill sizes="100vw" className="object-cover opacity-55" />
            <div className="absolute inset-0 bg-gradient-to-br from-gray-950/75 via-gray-950/55 to-gray-950/25" />
          </div>
          <div className="absolute inset-0 opacity-5 pointer-events-none">
            <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-blue-500 rounded-full blur-3xl" />
          </div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="hero-anim-1 text-blue-400 text-xs font-bold uppercase tracking-[0.3em] mb-4">Company · FAQs</p>
            <h1 className="hero-anim-2 text-5xl md:text-6xl font-black leading-none mb-5 tracking-tight">
              FREQUENTLY ASKED
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                QUESTIONS.
              </span>
            </h1>
            <p className="hero-anim-3 text-gray-400 text-lg max-w-xl mx-auto">
              Everything you need to know about working with Mivan Global Suite.
            </p>
          </div>
        </section>

        {/* ── CATEGORY CARDS ── */}
        <section className="bg-gray-50 py-20 border-t border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {categories.map((cat, i) => (
                <ScrollReveal key={cat.title} delay={i * 80}>
                  <div className={`group relative rounded-2xl overflow-hidden cursor-pointer border border-white/10 hover:border-white/20 transition-all duration-300 hover:shadow-2xl ${cat.glow}`}>
                    <div className={`absolute inset-0 bg-gradient-to-br ${cat.color} opacity-90`} />
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300 bg-white" />
                    <div className="relative p-7">
                      <div className="flex items-start justify-between mb-5">
                        <span className="text-4xl">{cat.icon}</span>
                        <div className="text-right">
                          <div className="text-white font-black text-3xl leading-none">{cat.count}</div>
                          <div className="text-white/60 text-xs font-semibold uppercase tracking-wider">+</div>
                          <div className="text-white/60 text-xs font-semibold uppercase tracking-wider mt-0.5">Questions</div>
                        </div>
                      </div>
                      <h3 className="text-white font-black text-lg mb-2 leading-snug">{cat.title}</h3>
                      <p className="text-white/70 text-sm leading-relaxed mb-5">{cat.desc}</p>
                      <button className="text-white text-xs font-black uppercase tracking-widest flex items-center gap-1.5 group-hover:gap-3 transition-all duration-200">
                        Read more
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* ── MAIN FAQ ACCORDION ── */}
        <section className="bg-gray-50 py-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollReveal className="text-center mb-14">
              <p className="text-blue-600 text-xs font-bold uppercase tracking-[0.3em] mb-3">All Questions</p>
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 leading-tight">
                NEED HELP
                <span className="block">UNDERSTANDING?</span>
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden divide-y divide-gray-100">
                {faqs.map((item, i) => (
                  <FAQItem key={item.q} q={item.q} a={item.a} index={i} />
                ))}
              </div>
            </ScrollReveal>
          </div>
        </section>

        <CTASection
          heading="STILL HAVE QUESTIONS?"
          desc="Our team responds within 24 hours. No bots, no scripts — just real answers."
          primaryLabel="Contact Us Directly"
          primaryHref="/contact"
          secondaryLabel="View Our Services"
          secondaryHref="/services/ecommerce-operations"
          accent="blue"
        />

      </main>
      <Footer />
    </>
  );
}
