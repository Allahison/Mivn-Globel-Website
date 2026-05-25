'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CTASection from '@/components/CTASection';
import ScrollReveal from '@/components/ScrollReveal';

const faqs = [
  {
    q: 'What does Mivan Global Ltd do?',
    a: 'Mivan Global Ltd helps businesses automate operations, manage e-commerce workflows, build custom software, create CRM systems, deploy AI agents, and connect stock, sales, customers, and reporting into smarter digital systems. We are a UK-based digital operations partner — not just a website agency.',
  },
  {
    q: 'Do you only build websites?',
    a: 'No. We build websites, but our main focus is business systems, automation, CRM workflows, e-commerce operations, custom portals, stock systems, AI agents, and integrations. Websites are one part of what we do.',
  },
  {
    q: 'Can you automate WhatsApp follow-ups?',
    a: 'Yes. We can build WhatsApp, SMS, and email workflows for lead follow-up, appointment reminders, customer updates, booking confirmations, and internal team notifications.',
  },
  {
    q: 'Can you connect my stock system with marketplaces?',
    a: 'Yes. We can help connect stock, products, and orders across websites, marketplaces, CRMs, and internal systems depending on your current setup and tools.',
  },
  {
    q: 'Do you work with TikTok Shop, eBay, Amazon, and WooCommerce?',
    a: 'Yes. We understand marketplace operations and can help with listings, stock sync, dispatch workflows, customer support, reporting, and account performance across TikTok Shop, eBay, Amazon, WooCommerce, and Shopify.',
  },
  {
    q: 'What is the dropshipping inventory network?',
    a: 'It is a system that allows wholesalers to make selected live inventory available to approved dropshippers and online sellers, while keeping control of pricing, stock, fulfilment, and product data. Dropshippers can list products across eBay, TikTok Shop, Amazon, WooCommerce, and Shopify without buying stock upfront.',
  },
  {
    q: 'Can you build a B2B ordering portal?',
    a: 'Yes. We can build trade portals where wholesale customers can browse products, view live stock, access account-specific pricing, place orders, and manage account information — replacing phone orders and manual stock checks.',
  },
  {
    q: 'Can you build custom software around our workflow?',
    a: 'Yes. We start by mapping your current process, then design and build software, dashboards, portals, or integrations around your actual business workflow. No generic templates — everything is built around how your business operates.',
  },
  {
    q: 'Do you build AI agents for businesses?',
    a: 'Yes. Mivan Global Ltd can help businesses deploy AI agents and digital assistants for lead qualification, customer support, admin automation, e-commerce replies, reporting summaries, and internal workflows. Our AI agents are connected to real business systems, not just basic chatbots.',
  },
  {
    q: 'Are your AI agents just chatbots?',
    a: 'No. We focus on practical AI assistants that can connect with CRM systems, websites, WhatsApp workflows, documents, customer enquiries, and business processes. AI assistants should support your team, reduce repetitive work, and escalate important conversations to humans where needed.',
  },
  {
    q: 'Can an AI assistant handle WhatsApp enquiries?',
    a: 'Yes. Depending on the setup and platform rules, AI can help respond to WhatsApp enquiries, ask qualification questions, collect details, and hand over to your team when needed.',
  },
  {
    q: 'Can AI agents update my CRM?',
    a: 'Yes. AI agents can be designed to collect structured information and trigger CRM workflows such as creating leads, updating pipeline stages, sending notifications, and booking appointments.',
  },
  {
    q: 'Do you provide ongoing support?',
    a: 'Yes. We can support, maintain, improve, and expand the systems we build depending on the service agreement. We do not disappear after launch.',
  },
  {
    q: 'Do you work with UK businesses?',
    a: 'Yes. Mivan Global Ltd is UK-based and works with UK businesses — especially SMEs, wholesalers, e-commerce sellers, law firms, mobile phone importers, and service businesses.',
  },
  {
    q: 'How do we start?',
    a: 'You can contact us by WhatsApp on 07878 044342, by phone on 020 4634 6212, by email at support@mivanglobal.co.uk, or through the contact form on this website. We will review your current workflow and suggest the best approach.',
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
          <div className="absolute inset-0 opacity-5 pointer-events-none">
            <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-blue-500 rounded-full blur-3xl" />
          </div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="hero-anim-1 text-blue-400 text-xs font-bold uppercase tracking-[0.3em] mb-4">Mivan Global Ltd &middot; FAQs</p>
            <h1 className="hero-anim-2 text-5xl md:text-6xl font-black leading-none mb-5 tracking-tight">
              FREQUENTLY ASKED
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                QUESTIONS.
              </span>
            </h1>
            <p className="hero-anim-3 text-gray-400 text-lg max-w-xl mx-auto">
              Everything you need to know about working with Mivan Global Ltd.
            </p>
          </div>
        </section>

        {/* ── MAIN FAQ ACCORDION ── */}
        <section className="bg-gray-50 py-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
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
          desc="Contact us directly and we will respond within 24 hours with a clear, practical answer."
          primaryLabel="WhatsApp: 07878 044342"
          primaryHref="https://wa.me/447878044342"
          secondaryLabel="Contact Us"
          secondaryHref="/contact"
          accent="blue"
        />

      </main>
      <Footer />
    </>
  );
}
