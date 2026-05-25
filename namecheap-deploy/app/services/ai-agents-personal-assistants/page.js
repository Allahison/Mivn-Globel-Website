import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CTASection from '@/components/CTASection';
import ScrollReveal from '@/components/ScrollReveal';

export const metadata = {
  title: "AI Agents & Business Personal Assistants UK | Mivan Global Ltd",
  description: "Mivan Global Ltd deploys AI agents and business personal assistants for lead qualification, customer support, admin automation, reporting, CRM workflows, and e-commerce operations.",
  keywords: ["AI agents UK", "AI business assistant", "WhatsApp AI", "lead qualification AI", "AI customer support", "CRM AI automation", "Mivan Global Ltd"],
  openGraph: { title: "AI Agents & Personal Assistants — Mivan Global Ltd", description: "Deploy AI assistants that qualify leads, support customers, reduce admin, and connect with your real business systems.", url: "https://mivn-globel-website.vercel.app/services/ai-agents-personal-assistants" },
};

const useCases = [
  {
    tag: 'LEADS', tagColor: 'bg-blue-100 text-blue-700', icon: '🎯',
    title: 'AI Lead Qualification Assistant',
    desc: 'An AI agent that speaks to new leads, asks qualification questions, understands what the customer needs, collects key details, and sends qualified leads into your CRM pipeline.',
    points: ['Website leads', 'WhatsApp enquiries', 'Meta ad leads', 'Service enquiries', 'Consultation requests', 'B2B trade enquiries'],
  },
  {
    tag: 'SUPPORT', tagColor: 'bg-green-100 text-green-700', icon: '💬',
    title: 'AI Customer Support Assistant',
    desc: 'An AI assistant that answers common customer questions, guides users to the right service, collects order details, explains information, and escalates complex issues to your team.',
    points: ['FAQs', 'Order enquiries', 'Delivery questions', 'Return guidance', 'Product information', 'Team escalation'],
  },
  {
    tag: 'PERSONAL', tagColor: 'bg-violet-100 text-violet-700', icon: '🧠',
    title: 'AI Personal Assistant for Owners',
    desc: 'A digital personal assistant that helps business owners manage tasks, summarise updates, prepare reports, organise follow-ups, draft replies, and highlight important business activity.',
    points: ['Daily business summaries', 'Sales updates', 'Task reminders', 'Email drafting', 'Meeting notes', 'Performance summaries'],
  },
  {
    tag: 'E-COMMERCE', tagColor: 'bg-orange-100 text-orange-700', icon: '🛒',
    title: 'AI E-commerce Operations Assistant',
    desc: 'An AI assistant that supports marketplace operations by helping with product descriptions, customer replies, return responses, review management, listing checks, and operational summaries.',
    points: ['TikTok Shop replies', 'eBay customer support', 'Product listing drafts', 'Return response drafts', 'Review request workflows', 'Performance summaries'],
  },
  {
    tag: 'WHOLESALE', tagColor: 'bg-teal-100 text-teal-700', icon: '📦',
    title: 'AI Wholesale Assistant',
    desc: 'An AI assistant for wholesalers that helps customers find products, check stock availability, explain trade pricing, collect order requests, and summarise account activity.',
    points: ['Product search', 'Stock enquiry handling', 'Trade customer support', 'Order request collection', 'Short-date stock promotion', 'Account summaries'],
  },
  {
    tag: 'KNOWLEDGE', tagColor: 'bg-gray-100 text-gray-700', icon: '📚',
    title: 'AI Document & Knowledge Assistant',
    desc: 'A secure AI assistant trained on approved company documents, FAQs, policies, product information, and internal knowledge so staff and customers get faster answers.',
    points: ['Internal knowledge base', 'Staff training support', 'Policy search', 'Product data questions', 'Service process guidance', 'Customer help centre'],
  },
];

const features = [
  'AI website chat assistants',
  'AI WhatsApp assistants',
  'AI CRM assistants',
  'AI lead qualification',
  'AI customer support',
  'AI personal assistant for business owners',
  'AI reporting summaries',
  'AI product description generation',
  'AI email and message drafting',
  'AI workflow triggers',
  'AI document search',
  'AI knowledge base assistant',
  'Human handover workflows',
  'CRM pipeline updates',
  'Appointment booking support',
  'Internal team notifications',
];

export default function AIAgents() {
  return (
    <>
      <Navbar />
      <main>

        {/* ── HERO ── */}
        <section className="relative bg-gray-950 text-white overflow-hidden">
          <div className="absolute inset-0">
            <Image src="https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=1600&q=60" alt="" fill sizes="100vw" className="object-cover opacity-40" />
            <div className="absolute inset-0 bg-gradient-to-r from-gray-950/90 via-gray-950/70 to-gray-950/40" />
          </div>
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[85vh] items-center gap-12 py-20">
              <div>
                <p className="hero-anim-1 text-violet-400 text-xs font-bold uppercase tracking-[0.3em] mb-4">AI Agents & Assistants &middot; Mivan Global Ltd</p>
                <h1 className="hero-anim-2 text-5xl md:text-6xl xl:text-7xl font-black leading-none mb-6 tracking-tight">
                  DEPLOY AI ASSISTANTS
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-blue-400">INSIDE YOUR BUSINESS.</span>
                </h1>
                <p className="hero-anim-3 text-gray-400 text-lg leading-relaxed max-w-xl mb-6">
                  Mivan Global Ltd helps businesses deploy AI agents and digital assistants that can answer enquiries,
                  qualify leads, support customers, summarise information, prepare reports, trigger CRM workflows,
                  and reduce repetitive admin work.
                </p>
                <p className="hero-anim-3 text-gray-500 text-base leading-relaxed max-w-xl mb-10">
                  AI is most powerful when it is connected to your real business systems. We do not just create basic chatbots.
                  We design practical AI assistants that work with your CRM, website, WhatsApp, documents, stock data, and internal workflows.
                </p>
                <div className="hero-anim-4 flex flex-wrap gap-4">
                  <Link href="/contact" className="bg-violet-600 hover:bg-violet-500 text-white font-bold px-8 py-4 rounded-xl text-sm transition-all shadow-lg shadow-violet-600/20">Deploy an AI Assistant</Link>
                  <Link href="/contact" className="border border-white/20 hover:border-white/50 text-white font-semibold px-8 py-4 rounded-xl text-sm transition-all">Discuss AI Automation</Link>
                </div>
              </div>
              <div className="hero-anim-img relative hidden lg:block">
                <div className="relative rounded-2xl overflow-hidden h-[560px] shadow-2xl">
                  <Image src="https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=900&q=85" alt="AI agents and business automation" fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" priority />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-950/60 via-transparent to-transparent" />
                  <div className="absolute bottom-6 left-6 bg-violet-600/90 backdrop-blur-md border border-violet-500/30 rounded-xl px-5 py-4">
                    <div className="text-white font-black text-xl">AI + Real Systems</div>
                    <div className="text-violet-200 text-xs font-semibold uppercase tracking-widest mt-1">Connected Workflows</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── USE CASES ── */}
        <section className="bg-white py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollReveal className="mb-14">
              <p className="text-violet-600 text-xs font-bold uppercase tracking-[0.3em] mb-3">AI Use Cases</p>
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 leading-tight">AI ASSISTANTS WE BUILD.</h2>
            </ScrollReveal>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
              {useCases.map((uc, i) => (
                <ScrollReveal key={uc.title} delay={i * 80}>
                  <div className="bg-white rounded-2xl border border-gray-100 hover:border-violet-200 hover:shadow-xl transition-all duration-300 group p-7 h-full flex flex-col">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-3xl">{uc.icon}</span>
                      <span className={`inline-block text-[10px] font-black uppercase tracking-[0.25em] px-2.5 py-1 rounded ${uc.tagColor}`}>{uc.tag}</span>
                    </div>
                    <h3 className="text-gray-900 font-black text-lg mb-3 group-hover:text-violet-600 transition-colors">{uc.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed mb-5 flex-1">{uc.desc}</p>
                    <div className="flex flex-wrap gap-1.5">
                      {uc.points.map((pt) => (
                        <span key={pt} className="text-[10px] bg-gray-100 text-gray-600 font-semibold px-2.5 py-1 rounded-lg">{pt}</span>
                      ))}
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* ── FEATURES LIST ── */}
        <section className="bg-gray-50 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollReveal className="mb-12 text-center">
              <p className="text-violet-600 text-xs font-bold uppercase tracking-[0.3em] mb-3">AI Capabilities</p>
              <h2 className="text-3xl md:text-4xl font-black text-gray-900">WHAT AI CAN DO FOR YOUR BUSINESS.</h2>
            </ScrollReveal>
            <ScrollReveal>
              <div className="flex flex-wrap justify-center gap-3">
                {features.map((f) => (
                  <span key={f} className="bg-white border border-gray-200 text-gray-700 font-semibold px-5 py-2.5 rounded-xl text-sm hover:border-violet-400 hover:text-violet-600 transition-colors shadow-sm">
                    {f}
                  </span>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* ── RESPONSIBLE AI ── */}
        <section className="bg-white py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollReveal>
              <div className="bg-gray-950 rounded-2xl p-10 text-white">
                <p className="text-violet-400 text-xs font-bold uppercase tracking-[0.3em] mb-3">Responsible AI</p>
                <h2 className="text-3xl font-black mb-5">AI SUPPORTS YOUR TEAM — IT DOES NOT REPLACE IT.</h2>
                <p className="text-gray-400 text-base leading-relaxed mb-6">
                  AI assistants should support your team, reduce repetitive work, and escalate important conversations
                  to humans where needed. We design all AI workflows with approval rules, access controls, and clear
                  human handover for sensitive or complex tasks.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                  {[
                    { icon: '✅', title: 'Human Handover', desc: 'Every AI workflow has a clear escalation path to your team for complex or sensitive conversations.' },
                    { icon: '🔐', title: 'Access Controls', desc: 'AI agents only access the data and systems they are specifically authorised to use.' },
                    { icon: '📋', title: 'Approval Rules', desc: 'High-value or sensitive actions require human approval before being executed.' },
                  ].map((item) => (
                    <div key={item.title} className="bg-white/5 rounded-xl p-5 border border-white/10">
                      <div className="text-2xl mb-3">{item.icon}</div>
                      <h4 className="text-white font-black text-sm mb-2">{item.title}</h4>
                      <p className="text-gray-500 text-xs leading-relaxed">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        <CTASection
          eyebrow="Ready for AI?"
          heading="DEPLOY AN AI ASSISTANT THAT WORKS WITH YOUR SYSTEMS."
          desc="Let's design a practical AI agent connected to your CRM, website, WhatsApp, and internal workflows."
          primaryLabel="Deploy an AI Assistant"
          primaryHref="/contact"
          secondaryLabel="Discuss AI Automation"
          secondaryHref="/contact"
          accent="violet"
        />

      </main>
      <Footer />
    </>
  );
}
