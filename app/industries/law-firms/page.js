import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CTASection from '@/components/CTASection';
import ScrollReveal from '@/components/ScrollReveal';

export const metadata = {
  title: "Digital Solutions for Law Firms — Client Portals & Automation",
  description: "Automate client intake, case management, document workflows, and billing for law firms. Custom legal tech built to SRA/Bar Association compliance standards.",
  keywords: ["law firm software", "legal practice management", "client intake automation", "case management system", "legal tech", "law firm digital transformation"],
  openGraph: { title: "Digital Solutions for Law Firms — Mivan Global Suite", description: "Automate client intake, case management, and billing. Custom legal tech for modern law firms.", url: "https://mivn-globel-website.vercel.app/industries/law-firms" },
};

const highlights = [
  { num: '01', title: 'HIGH-VALUE CLIENT SYSTEMS', desc: 'Move beyond referrals. We implement automated lead generation systems that target high-net-worth individuals and corporate clients, ensuring a steady pipeline of qualified cases.' },
  { num: '02', title: 'PRACTICE AUTOMATION', desc: 'Eliminate billable hours wasted on admin. We automate document drafting, case filing workflows, and deadline reminders so your associates can focus on the law.' },
  { num: '03', title: 'DATA SECURITY & ETHICS', desc: 'Client confidentiality is paramount. We deploy bank-grade encryption and compliance protocols to ensure your firm meets all SRA/Bar Association standards for data protection.' },
  { num: '04', title: 'FIRM INTELLIGENCE', desc: 'Run your firm like a business. Our dashboards give partners real-time visibility into utilization rates, realization rates, and case profitability, driving smarter growth decisions.' },
];

const infrastructure = [
  { tag: 'INTAKE', tagColor: 'bg-violet-100 text-violet-700', title: 'Client Intake & Portals', desc: 'Secure, self-service portals that allow new clients to submit evidence, sign retainers, and track case status 24/7 — reducing unbillable phone calls.', image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600&q=75' },
  { tag: 'OPERATIONS', tagColor: 'bg-blue-100 text-blue-700', title: 'Advanced Case Management', desc: 'Custom workflows that track every case lifecycle, manage discovery deadlines, and automate document assembly, ensuring no filing is ever missed.', image: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?w=600&q=75' },
  { tag: 'COMPLIANCE', tagColor: 'bg-red-100 text-red-700', title: 'Risk & Compliance Tools', desc: 'Automated systems for conflict checks, KYC/AML verification, and GDPR data requests, protecting your firm from regulatory breaches and liability.', image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=600&q=75' },
  { tag: 'ANALYTICS', tagColor: 'bg-teal-100 text-teal-700', title: 'Firm Intelligence', desc: 'Unified dashboards pulling data from Clio, Xero, and time-tracking tools to give Partners a real-time view of realization rates, billable hours, and revenue.', image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=75' },
  { tag: 'CONNECTIVITY', tagColor: 'bg-orange-100 text-orange-700', title: 'Legal Tech Integrations', desc: 'We build bridges between your disconnected software (e.g., connecting your Court Calendar to Outlook or your CRM to your Case Management System).', image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&q=75' },
  { tag: 'MOBILE', tagColor: 'bg-green-100 text-green-700', title: 'Attorney Mobile Apps', desc: 'Secure mobile apps allowing associates to log billable hours from court, access case files securely, and communicate with clients while on the move.', image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&q=75' },
];

const operatingSystems = [
  { icon: '🧠', title: 'Custom Operating Systems', desc: "Proprietary, end-to-end operating systems tailored to your exact firm logic, bypassing the limits of off-the-shelf practice management software.", points: ['Full IP ownership', '"Source of Truth" centralization', 'Architected for 10x scaling'] },
  { icon: '🔗', title: 'Connectivity', desc: 'Seamlessly connect Mivan Global Suite alongside your existing tools, ensuring client intake, billing, and case management sync in real-time.', points: ['Deep ERP & POS integration', 'Automated cross-department workflows', 'Unified client profiles'] },
  { icon: '🏗️', title: 'Enterprise-Grade Architecture', desc: 'Resilient cloud infrastructure built for strict legal compliance, confidential data handling, and high document volumes without failure.', points: ['Bank-grade security', 'Zero-downtime deployment', 'SRA/Bar compliant data handling'] },
  { icon: '📊', title: "The Operator's Dashboard", desc: '"Command Center" dashboards that provide a real-time, partner-level view of utilization, realization rates, and firm profitability.', points: ['Real-time P&L visualization', 'Partner-level KPI tracking', 'Billable hours overview'] },
];

export default function LawFirms() {
  return (
    <>
      <Navbar />
      <main>

        {/* ── HERO ── Split */}
        <section className="relative bg-gray-950 text-white overflow-hidden">
          <div className="absolute inset-0">
            <Image src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=1600&q=60" alt="" fill sizes="100vw" className="object-cover opacity-55" />
            <div className="absolute inset-0 bg-gradient-to-r from-gray-950/75 via-gray-950/55 to-gray-950/20" />
          </div>
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[85vh] items-center gap-12 py-20">
              <div>
                <p className="hero-anim-1 text-violet-400 text-xs font-bold uppercase tracking-[0.3em] mb-4">Industries · Law Firms · Guidance</p>
                <h1 className="hero-anim-2 text-5xl md:text-6xl xl:text-7xl font-black leading-none mb-6 tracking-tight">
                  JUSTICE DRIVEN BY
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-blue-400">INNOVATION.</span>
                </h1>
                <p className="hero-anim-3 text-gray-400 text-lg leading-relaxed max-w-xl mb-10">
                  We empower law firms to modernize their practice. From case management to client acquisition,
                  we build the digital infrastructure that top-tier firms rely on.
                </p>
                <div className="hero-anim-4 flex flex-wrap gap-4">
                  <Link href="/contact" className="bg-violet-600 hover:bg-violet-500 text-white font-bold px-8 py-4 rounded-xl text-sm transition-all shadow-lg shadow-violet-600/20">Talk to Us</Link>
                  <Link href="/case-studies" className="border border-white/20 hover:border-white/50 text-white font-semibold px-8 py-4 rounded-xl text-sm transition-all">View Case Studies</Link>
                </div>
              </div>
              <div className="hero-anim-img relative hidden lg:block">
                <div className="relative rounded-2xl overflow-hidden h-[560px] shadow-2xl">
                  <Image src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=900&q=85" alt="Law firm legal practice" fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" priority />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-950/70 via-transparent to-transparent" />
                  <div className="absolute bottom-6 left-6 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl px-5 py-4">
                    <div className="text-white font-black text-xl">60% Less Admin</div>
                    <div className="text-gray-300 text-xs font-semibold uppercase tracking-widest mt-1">Average firm result</div>
                  </div>
                </div>
                <div className="absolute -bottom-8 -right-8 w-56 h-56 bg-violet-600/10 rounded-full blur-3xl pointer-events-none" />
              </div>
            </div>
          </div>
        </section>

        {/* ── HIGHLIGHTS ── */}
        <section className="bg-gray-50 py-20 border-t border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 divide-y md:divide-y-0 md:divide-x divide-gray-200 border border-gray-200 rounded-2xl overflow-hidden">
              {highlights.map((h, i) => (
                <ScrollReveal key={h.num} delay={i * 100}>
                  <div className="p-8 hover:bg-gray-100 transition-colors duration-300 group h-full">
                    <div className="text-violet-500 font-black text-4xl mb-5 opacity-60 group-hover:opacity-100 transition-opacity">{h.num}.</div>
                    <h3 className="text-gray-900 font-bold text-sm uppercase tracking-widest mb-3">{h.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{h.desc}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* ── INFRASTRUCTURE ── Cards with images */}
        <section className="bg-white py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollReveal className="mb-14">
              <p className="text-violet-600 text-xs font-bold uppercase tracking-[0.3em] mb-3">Bespoke Infrastructure</p>
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 leading-tight">BESPOKE LEGAL<span className="block">INFRASTRUCTURE.</span></h2>
            </ScrollReveal>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
              {infrastructure.map((item, i) => (
                <ScrollReveal key={item.title} delay={i * 80}>
                  <div className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl border border-gray-100 hover:border-violet-100 transition-all duration-300 flex flex-col h-full">
                    <div className="relative h-44 overflow-hidden">
                      <Image src={item.image} alt={item.title} fill sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" className="object-cover group-hover:scale-105 transition-transform duration-500" />
                      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-950/30" />
                      <span className={`absolute top-3 left-3 inline-block text-[10px] font-black uppercase tracking-[0.25em] px-2.5 py-1 rounded ${item.tagColor}`}>{item.tag}</span>
                    </div>
                    <div className="p-7 flex flex-col flex-1">
                      <h3 className="text-gray-900 font-black text-xl mb-2 group-hover:text-violet-600 transition-colors">{item.title}</h3>
                      <p className="text-gray-500 text-sm leading-relaxed flex-1">{item.desc}</p>
                      <button className="mt-5 text-violet-600 text-xs font-bold uppercase tracking-widest flex items-center gap-1.5 hover:gap-3 transition-all duration-200 w-fit">
                        View Details <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" /></svg>
                      </button>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* ── OPERATING SYSTEMS ── */}
        <section className="bg-gray-50 py-24 relative overflow-hidden">
          <div className="absolute inset-0 opacity-5 pointer-events-none">
            <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-violet-500 rounded-full blur-3xl" />
          </div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollReveal className="mb-14">
              <p className="text-violet-600 text-xs font-bold uppercase tracking-[0.3em] mb-3">End-to-End Operating Systems</p>
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 leading-tight">OPERATING SYSTEMS<span className="block text-gray-500">FOR GROWTH.</span></h2>
              <p className="text-gray-600 text-lg mt-5 max-w-2xl">We don&apos;t just build software; we engineer the &quot;central nervous system&quot; of your firm.</p>
            </ScrollReveal>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {operatingSystems.map((os, i) => (
                <ScrollReveal key={os.title} delay={i * 100}>
                  <div className="border border-gray-200 rounded-2xl p-8 hover:border-violet-300 hover:bg-gray-50 transition-all duration-300 group flex gap-5 h-full">
                    <div className="text-3xl flex-shrink-0 mt-1">{os.icon}</div>
                    <div>
                      <h3 className="text-gray-900 font-black text-lg mb-2 group-hover:text-violet-600 transition-colors">{os.title}</h3>
                      <p className="text-gray-600 text-sm leading-relaxed mb-4">{os.desc}</p>
                      <ul className="space-y-2">
                        {os.points.map((pt) => (<li key={pt} className="flex items-center gap-2 text-sm text-gray-600"><div className="w-1.5 h-1.5 rounded-full bg-violet-500 flex-shrink-0" />{pt}</li>))}
                      </ul>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        <CTASection
          heading="MODERNIZE YOUR LAW PRACTICE"
          desc="Get a free consultation and see how we can transform your firm's operations and growth."
          primaryLabel="Get Started"
          primaryHref="/contact"
          secondaryLabel="See Our Work"
          secondaryHref="/case-studies"
          accent="violet"
        />

      </main>
      <Footer />
    </>
  );
}
