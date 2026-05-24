import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CTASection from '@/components/CTASection';
import ScrollReveal from '@/components/ScrollReveal';

export const metadata = {
  title: "Case Studies — Industries We Transform",
  description: "Real results across law firms, wholesale, mobile phone importers, and e-commerce. See how Mivan Global Suite transforms business operations with proven systems.",
  keywords: ["case studies", "digital transformation results", "e-commerce success", "law firm automation", "wholesale management results"],
  openGraph: { title: "Case Studies — Mivan Global Suite", description: "Real systems delivering real outcomes across law firms, wholesale, mobile imports, and e-commerce.", url: "https://mivn-globel-website.vercel.app/case-studies" },
};

const useCases = [
  {
    industry: 'Law Firms',
    sub: 'Reducing admin & chasing clients',
    badge: 'Onboarding',
    badgeColor: 'bg-violet-100 text-violet-700',
    icon: '⚖️',
    accentColor: 'from-violet-600 to-violet-800',
    features: ['AUTOMATED CLIENT INTAKE','DOCUMENT CHASE WORKFLOWS','CASE STATUS UPDATES','APPOINTMENT SCHEDULING'],
    href: '/industries/law-firms',
  },
  {
    industry: 'Wholesale & Importers',
    sub: 'B2B ordering & inventory',
    badge: 'Conversion',
    badgeColor: 'bg-teal-100 text-teal-700',
    icon: '📦',
    accentColor: 'from-teal-600 to-teal-800',
    features: ['24/7 B2B ORDERING PORTAL','REAL-TIME STOCK SYNC','AUTOMATED INVOICING','SMART REORDER PROMPTS'],
    href: '/industries/wholesale-importers',
  },
  {
    industry: 'Mobile Phone Importers',
    sub: 'RMA, IMEI, & Speed',
    badge: 'Operations',
    badgeColor: 'bg-cyan-100 text-cyan-700',
    icon: '📱',
    accentColor: 'from-cyan-600 to-cyan-800',
    features: ['UNIFIED RMA PORTAL','WHATSAPP STOCK BLASTS','IMEI TRACKING INTEGRATION','MARGINAL VAT HANDLING'],
    href: '/industries/mobile-phone-importers',
  },
  {
    industry: 'E-commerce Operators',
    sub: 'Multi-channel & Profit',
    badge: 'Growth',
    badgeColor: 'bg-blue-100 text-blue-700',
    icon: '🏪',
    accentColor: 'from-blue-600 to-blue-800',
    features: ['CENTRALIZED ORDER HUB','AI CUSTOMER SUPPORT','PROFITABILITY DASHBOARDS','REVIEW GENERATION'],
    href: '/industries/ecommerce-operators',
  },
];

const methodology = [
  { icon: '🔄', tag: 'AUTOMATION', tagColor: 'bg-blue-100 text-blue-700', title: 'FULL-FUNNEL AUTOMATION', highlight: 'SYSTEMS THAT SCALE YOUR BUSINESS', desc: 'Automating your entire journey from click to close. Every touchpoint streamlined, every lead captured, every sale tracked.' },
  { icon: '🧩', tag: 'INFRASTRUCTURE', tagColor: 'bg-violet-100 text-violet-700', title: 'CUSTOM INFRASTRUCTURE', highlight: null, desc: 'Bespoke software built specifically for your workflow. No generic tools — just clean systems designed around how your business actually operates.' },
  { icon: '📊', tag: 'ANALYTICS', tagColor: 'bg-teal-100 text-teal-700', title: 'REAL-TIME ANALYTICS', highlight: null, desc: 'Live dashboards tracking every penny of spend. See profit, loss, and performance data in real-time so you can make fast, confident decisions.' },
  { icon: '⚡', tag: 'DEPLOYMENT', tagColor: 'bg-orange-100 text-orange-700', title: 'RAPID DEPLOYMENT', highlight: null, desc: "Launching your new operating system in days. We move fast without cutting corners — your business can't afford to wait months for results." },
];

const sectors = [
  { year: '2025', sector: 'DIRECT-TO-CONSUMER', desc: 'Scaling ad spend on Meta & TikTok while automating customer support tickets and shipping notifications.', points: ['High-Volume Ad Testing','Automated Order Tracking','Abandoned Cart Recovery'], color: 'border-blue-500', yearColor: 'text-blue-400', dotColor: 'bg-blue-500' },
  { year: '2024', sector: 'LEGAL & FINANCE', desc: 'Replacing manual client intake forms with automated pipelines that qualify leads before you ever speak to them.', points: ['Automated Document Collection','Client Portal Integration','Secure Data Handling'], color: 'border-violet-500', yearColor: 'text-violet-400', dotColor: 'bg-violet-500' },
  { year: '2023', sector: 'SOLAR & HOME IMPROVEMENT', desc: 'Managing field sales teams and automating appointment reminders to reduce "no-show" rates by 80%.', points: ['Geo-Fencing Leads','SMS Appointment Reminders','Field Team Dispatching'], color: 'border-orange-500', yearColor: 'text-orange-400', dotColor: 'bg-orange-500' },
  { year: '2022', sector: 'PRIVATE HEALTHCARE', desc: 'Eliminate "No-Shows" and fill your calendar on autopilot. We build systems that confirm appointments and turn happy patients into 5-star Google reviews.', points: ['Strong Engagement Results','Missed-Call Text Back','Automated Review Generation'], color: 'border-teal-500', yearColor: 'text-teal-400', dotColor: 'bg-teal-500' },
];

export default function CaseStudies() {
  return (
    <>
      <Navbar />
      <main>

        {/* ── HERO ── */}
        <section className="bg-gray-950 text-white py-24 relative overflow-hidden">
          <div className="absolute inset-0">
            <Image src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1600&q=60" alt="" fill sizes="100vw" className="object-cover opacity-55" />
            <div className="absolute inset-0 bg-gradient-to-br from-gray-950/75 via-gray-950/55 to-gray-950/25" />
          </div>
          <div className="absolute inset-0 opacity-5 pointer-events-none">
            <div className="absolute top-0 left-1/4 w-[700px] h-[700px] bg-blue-500 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-violet-500 rounded-full blur-3xl" />
          </div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl">
              <p className="hero-anim-1 text-blue-400 text-xs font-bold uppercase tracking-[0.3em] mb-4">Use Cases</p>
              <h1 className="hero-anim-2 text-5xl md:text-7xl font-black leading-none mb-6 tracking-tight">
                INDUSTRIES WE
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">TRANSFORM.</span>
              </h1>
              <p className="hero-anim-3 text-gray-400 text-lg md:text-xl leading-relaxed max-w-2xl">
                Real systems delivering real outcomes — across law firms, wholesale, mobile imports, and e-commerce.
              </p>
            </div>
          </div>
        </section>

        {/* ── USE CASE CARDS ── */}
        <section className="bg-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollReveal className="mb-10 flex items-center justify-between flex-wrap gap-4">
              <div>
                <p className="text-blue-600 text-xs font-bold uppercase tracking-[0.3em] mb-2">All Use Cases</p>
                <h2 className="text-3xl md:text-4xl font-black text-gray-900">Industries We Serve</h2>
              </div>
            </ScrollReveal>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {useCases.map((uc, i) => (
                <ScrollReveal key={uc.industry} delay={i * 100}>
                  <Link
                    href={uc.href}
                    className="group relative rounded-2xl overflow-hidden border border-gray-100 hover:border-gray-200 hover:shadow-xl transition-all duration-300 bg-white block"
                  >
                    <div className={`h-1 w-full bg-gradient-to-r ${uc.accentColor}`} />
                    <div className="p-8">
                      <div className="flex items-start justify-between mb-6">
                        <div className="flex items-center gap-3">
                          <span className="text-3xl">{uc.icon}</span>
                          <div>
                            <h3 className="text-gray-900 font-black text-xl group-hover:text-blue-600 transition-colors leading-tight">{uc.industry}</h3>
                            <p className="text-gray-400 text-sm mt-0.5">{uc.sub}</p>
                          </div>
                        </div>
                        <span className={`inline-block text-[10px] font-black uppercase tracking-[0.2em] px-2.5 py-1 rounded flex-shrink-0 ${uc.badgeColor}`}>{uc.badge}</span>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {uc.features.map((f) => (
                          <span key={f} className="bg-gray-950 text-white text-[10px] font-black uppercase tracking-wider px-3 py-1.5 rounded-lg">{f}</span>
                        ))}
                      </div>
                      <div className="mt-6 text-blue-600 text-xs font-black uppercase tracking-widest flex items-center gap-1.5 group-hover:gap-3 transition-all duration-200">
                        View Solutions
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                  </Link>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* ── SUCCESS METHODOLOGY ── */}
        <section className="bg-gray-50 py-24 relative overflow-hidden">
          <div className="absolute inset-0 opacity-5 pointer-events-none">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500 rounded-full blur-3xl" />
          </div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollReveal className="mb-14">
              <p className="text-blue-600 text-xs font-bold uppercase tracking-[0.3em] mb-3">Success Methodology</p>
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 leading-tight">WHY OUR CLIENTS WIN.</h2>
              <p className="text-gray-500 text-lg mt-4 max-w-xl">
                It isn&apos;t magic; it&apos;s engineering. Here is the four-part foundation behind every successful case study we deliver.
              </p>
            </ScrollReveal>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {methodology.map((m, i) => (
                <ScrollReveal key={m.title} delay={i * 100}>
                  <div className="border border-gray-200 rounded-2xl p-8 hover:border-blue-300 hover:bg-gray-50 transition-all duration-300 group flex gap-5 h-full">
                    <div className="text-3xl flex-shrink-0 mt-1">{m.icon}</div>
                    <div className="flex-1">
                      <span className={`inline-block text-[10px] font-black uppercase tracking-[0.25em] px-2.5 py-1 rounded mb-3 ${m.tagColor}`}>{m.tag}</span>
                      <h3 className="text-gray-900 font-black text-lg mb-2 group-hover:text-blue-600 transition-colors">{m.title}</h3>
                      <p className="text-gray-500 text-sm leading-relaxed mb-4">{m.desc}</p>
                      {m.highlight && <div className="bg-blue-600 text-white text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded-lg w-fit">{m.highlight}</div>}
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* ── SECTORS TIMELINE ── */}
        <section className="bg-white py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollReveal className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
              <div>
                <p className="text-blue-600 text-xs font-bold uppercase tracking-[0.3em] mb-3">Sectors</p>
                <h2 className="text-4xl md:text-5xl font-black text-gray-900 leading-tight">
                  TRANSFORMING OPERATIONS
                  <span className="block text-gray-300">ACROSS EVERY INDUSTRY.</span>
                </h2>
              </div>
              <Link href="/contact" className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-black px-8 py-4 rounded-xl text-xs uppercase tracking-widest transition-all shadow-md flex-shrink-0">
                Start Scaling
              </Link>
            </ScrollReveal>
            <div className="relative">
              <div className="hidden md:block absolute left-[88px] top-5 bottom-5 w-px bg-gray-100" />
              <div className="space-y-6">
                {sectors.map((s, i) => (
                  <ScrollReveal key={s.year} delay={i * 100}>
                    <div className="group relative flex flex-col md:flex-row gap-6 md:gap-10">
                      <div className="flex items-start gap-4 flex-shrink-0 md:w-28">
                        <div className="flex flex-col items-center">
                          <div className={`w-3 h-3 rounded-full ${s.dotColor} mt-1.5 flex-shrink-0 relative z-10`} />
                        </div>
                        <span className={`font-black text-2xl leading-none ${s.yearColor}`}>{s.year}</span>
                      </div>
                      <div className={`flex-1 border-l-4 ${s.color} bg-gray-50 hover:bg-white rounded-r-2xl p-7 transition-all duration-300 hover:shadow-md`}>
                        <h3 className="font-black text-gray-900 text-xl uppercase tracking-wide group-hover:text-blue-600 transition-colors mb-3">{s.sector}</h3>
                        <p className="text-gray-500 text-sm leading-relaxed mb-5">{s.desc}</p>
                        <div className="flex flex-wrap gap-2">
                          {s.points.map((pt) => (
                            <span key={pt} className="bg-gray-900 text-white text-[10px] font-black uppercase tracking-wider px-3 py-1.5 rounded-lg">{pt}</span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </div>
        </section>

        <CTASection
          heading="YOUR SUCCESS STORY STARTS HERE"
          desc="Join our growing list of businesses transformed by Mivan Global Suite."
          primaryLabel="Get in Touch"
          primaryHref="/contact"
          secondaryLabel="View Industries"
          secondaryHref="/industries/law-firms"
          accent="blue"
        />

      </main>
      <Footer />
    </>
  );
}
