import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CTASection from '@/components/CTASection';
import ScrollReveal from '@/components/ScrollReveal';

export const metadata = {
  title: "Custom Software Development — B2B Portals & Mobile Apps",
  description: "Bespoke B2B ordering portals, inventory management systems, warranty platforms, business dashboards, and staff mobile apps built around your exact workflow.",
  keywords: ["custom software development", "B2B portal development", "inventory management system", "mobile app development", "business dashboard", "custom ERP"],
  openGraph: { title: "Custom Software Development — Mivan Global Suite", description: "Bespoke B2B portals, inventory systems, and mobile apps built for your exact workflow.", url: "https://mivn-globel-website.vercel.app/services/custom-development" },
};

const steps = [
  { num: '01', title: 'DISCOVERY & ARCHITECTURE', desc: 'We start by auditing your current friction points to create a technical specification. We define exactly what needs to be built to solve your specific business problem.' },
  { num: '02', title: 'AGILE DEVELOPMENT', desc: 'Our team builds your custom portal or app in 2-week sprints. This gives you regular visibility on progress and allows us to adapt features quickly if your needs change.' },
  { num: '03', title: 'INTEGRATION & LAUNCH', desc: "We don't just write code; we connect it. We integrate your new software with your existing stack (ERP, Xero, Shopify, or WMS) to ensure data flows seamlessly." },
  { num: '04', title: 'SUPPORT & SCALING', desc: 'Software isn\'t "finished" at launch. We provide ongoing server management, bug fixes, and feature updates to ensure your system scales as your company grows.' },
];

const solutions = [
  { tag: 'SALES', tagColor: 'bg-green-100 text-green-700', title: 'B2B Ordering Portals', desc: 'Self-service portals that allow your wholesale clients to view live stock, place orders, and download invoices 24/7 without calling you.', image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=600&q=75' },
  { tag: 'LOGISTICS', tagColor: 'bg-blue-100 text-blue-700', title: 'Inventory & WMS', desc: 'Custom warehouse management tools that track stock movements, manage bin locations, and streamline picking/packing workflows.', image: 'https://images.unsplash.com/photo-1553413077-190dd305871c?w=600&q=75' },
  { tag: 'SUPPORT', tagColor: 'bg-purple-100 text-purple-700', title: 'Warranty Platforms', desc: 'Automated returns management systems that let customers book repairs, track status, and receive updates, reducing support calls.', image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&q=75' },
  { tag: 'DATA', tagColor: 'bg-teal-100 text-teal-700', title: 'Business Dashboards', desc: 'Unified dashboards that pull data from Xero, Shopify, and your ERP to give you a real-time view of profit, loss, and cash flow.', image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=75' },
  { tag: 'CONNECTIVITY', tagColor: 'bg-orange-100 text-orange-700', title: 'System Integrations', desc: 'We build bridges between your disconnected software (e.g., connecting your website to your accounting software) to eliminate manual data entry.', image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&q=75' },
  { tag: 'MOBILE', tagColor: 'bg-red-100 text-red-700', title: 'Staff Mobile Apps', desc: 'Native mobile apps for your field staff or warehouse team to scan barcodes, take photos, and update jobs on the go.', image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&q=75' },
];

const operatingSystems = [
  { icon: '🧠', title: 'Custom Operating Systems', desc: "We build proprietary, end-to-end operating systems tailored to your exact business logic, bypassing the limits of off-the-shelf software.", points: ['Full IP ownership', '"Source of Truth" centralization', 'Architected for 10x scaling'] },
  { icon: '🔗', title: 'Connectivity', desc: 'Seamlessly deploy the Mivan Global Suite alongside your custom builds, ensuring marketing, sales, and operations sync in real-time.', points: ['Deep ERP & POS integration', 'Automated cross-department workflows', 'Unified customer profiles'] },
  { icon: '🏗️', title: 'Enterprise-Grade Architecture', desc: 'Resilient cloud architecture built to handle complex B2B inventory, strict compliance, and massive transaction volumes without failure.', points: ['Bank-grade security', 'Zero-downtime deployment', 'High-volume data handling'] },
  { icon: '📊', title: "The Operator's Dashboard", desc: '"Command Center" dashboards that provide a real-time, consultant-level view of cash flow, inventory velocity, and funnel health.', points: ['Real-time P&L visualization', 'Role-specific KPI tracking', 'Executive decision data'] },
];

export default function CustomDevelopment() {
  return (
    <>
      <Navbar />
      <main>

        {/* ── HERO ── */}
        <section className="relative bg-gray-950 text-white overflow-hidden">
          <div className="absolute inset-0">
            <Image src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=1600&q=60" alt="" fill sizes="100vw" className="object-cover opacity-55" />
            <div className="absolute inset-0 bg-gradient-to-r from-gray-950/75 via-gray-950/55 to-gray-950/20" />
          </div>
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[85vh] items-center gap-12 py-20">
              <div>
                <p className="hero-anim-1 text-violet-400 text-xs font-bold uppercase tracking-[0.3em] mb-4">Custom Development · End-to-End Delivery</p>
                <h1 className="hero-anim-2 text-5xl md:text-6xl xl:text-7xl font-black leading-none mb-6 tracking-tight">
                  SOFTWARE BUILT FOR
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-blue-400">YOUR WORKFLOW.</span>
                </h1>
                <p className="hero-anim-3 text-gray-400 text-lg leading-relaxed max-w-xl mb-10">
                  Off-the-shelf software rarely fits perfectly. We design and build custom B2B portals,
                  inventory systems, and mobile apps that map exactly to your unique operational workflows.
                </p>
                <div className="hero-anim-4 flex flex-wrap gap-4">
                  <Link href="/contact" className="bg-violet-600 hover:bg-violet-500 text-white font-bold px-8 py-4 rounded-xl text-sm transition-all shadow-lg shadow-violet-600/20">Discuss Your Project</Link>
                  <Link href="/case-studies" className="border border-white/20 hover:border-white/50 text-white font-semibold px-8 py-4 rounded-xl text-sm transition-all">View Case Studies</Link>
                </div>
              </div>
              <div className="hero-anim-img relative hidden lg:block">
                <div className="relative rounded-2xl overflow-hidden h-[560px] shadow-2xl">
                  <Image src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=900&q=85" alt="Custom software development and coding" fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" priority />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-950/60 via-transparent to-transparent" />
                  <div className="absolute bottom-6 left-6 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl px-5 py-4">
                    <div className="text-white font-black text-xl">2-Week Sprints</div>
                    <div className="text-gray-300 text-xs font-semibold uppercase tracking-widest mt-1">Agile Delivery Process</div>
                  </div>
                </div>
                <div className="absolute -bottom-8 -right-8 w-56 h-56 bg-violet-600/10 rounded-full blur-3xl pointer-events-none" />
              </div>
            </div>
          </div>
        </section>

        {/* ── 4 STEPS ── */}
        <section className="bg-gray-50 py-20 border-t border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 divide-y md:divide-y-0 md:divide-x divide-gray-200 border border-gray-200 rounded-2xl overflow-hidden">
              {steps.map((s, i) => (
                <ScrollReveal key={s.num} delay={i * 100}>
                  <div className="p-8 hover:bg-gray-100 transition-colors duration-300 group h-full">
                    <div className="text-violet-500 font-black text-4xl mb-5 opacity-60 group-hover:opacity-100 transition-opacity">{s.num}.</div>
                    <h3 className="text-gray-900 font-bold text-sm uppercase tracking-widest mb-3">{s.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{s.desc}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* ── BESPOKE SOLUTIONS ── */}
        <section className="bg-white py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollReveal className="mb-14">
              <p className="text-violet-600 text-xs font-bold uppercase tracking-[0.3em] mb-3">Bespoke Solutions</p>
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 leading-tight">SOFTWARE WE BUILD.</h2>
            </ScrollReveal>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
              {solutions.map((sol, i) => (
                <ScrollReveal key={sol.title} delay={i * 80}>
                  <div className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl border border-gray-100 hover:border-violet-100 transition-all duration-300 flex flex-col h-full">
                    <div className="relative h-44 overflow-hidden">
                      <Image src={sol.image} alt={sol.title} fill sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" className="object-cover group-hover:scale-105 transition-transform duration-500" />
                      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-950/30" />
                      <span className={`absolute top-3 left-3 inline-block text-[10px] font-black uppercase tracking-[0.25em] px-2.5 py-1 rounded ${sol.tagColor}`}>{sol.tag}</span>
                    </div>
                    <div className="p-7 flex flex-col flex-1">
                      <h3 className="text-gray-900 font-black text-xl mb-2 group-hover:text-violet-600 transition-colors">{sol.title}</h3>
                      <p className="text-gray-500 text-sm leading-relaxed flex-1">{sol.desc}</p>
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

        {/* ── OPERATING SYSTEMS FOR GROWTH ── */}
        <section className="bg-gray-50 py-24 relative overflow-hidden">
          <div className="absolute inset-0 opacity-5 pointer-events-none">
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-violet-500 rounded-full blur-3xl" />
          </div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <ScrollReveal>
                  <p className="text-violet-600 text-xs font-bold uppercase tracking-[0.3em] mb-3">End-to-End Operating Systems</p>
                  <h2 className="text-4xl md:text-5xl font-black text-gray-900 leading-tight mb-4">OPERATING SYSTEMS<span className="block text-gray-500">FOR GROWTH.</span></h2>
                  <p className="text-gray-600 text-lg mb-8">We don&apos;t just build software; we engineer the &quot;central nervous system&quot; of your business.</p>
                </ScrollReveal>
                <div className="grid grid-cols-1 gap-5">
                  {operatingSystems.map((os, i) => (
                    <ScrollReveal key={os.title} delay={i * 100}>
                      <div className="border border-gray-200 rounded-2xl p-6 hover:border-violet-300 hover:bg-gray-50 transition-all duration-300 group flex gap-4">
                        <div className="text-2xl flex-shrink-0">{os.icon}</div>
                        <div>
                          <h3 className="text-gray-900 font-black text-base mb-1 group-hover:text-violet-600 transition-colors">{os.title}</h3>
                          <p className="text-gray-500 text-xs leading-relaxed mb-3">{os.desc}</p>
                          <div className="flex flex-wrap gap-2">
                            {os.points.map((pt) => (
                              <span key={pt} className="text-[10px] text-gray-600 flex items-center gap-1">
                                <span className="w-1 h-1 rounded-full bg-violet-500 inline-block" />{pt}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </ScrollReveal>
                  ))}
                </div>
              </div>
              <ScrollReveal direction="right" className="relative hidden lg:block">
                <div className="relative rounded-2xl overflow-hidden h-[600px] shadow-2xl">
                  <Image src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=900&q=85" alt="Enterprise software development" fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-950/70 via-transparent to-transparent" />
                  <div className="absolute bottom-6 left-6 bg-violet-600/90 backdrop-blur-md rounded-xl px-5 py-4 border border-violet-500/30">
                    <div className="text-white font-black text-sm uppercase tracking-widest">Full IP Ownership</div>
                    <div className="text-violet-200 text-xs mt-1">Your code, your asset</div>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        <CTASection
          heading="HAVE A PROJECT IN MIND?"
          desc="Tell us about your workflow challenge. We'll design the exact system to solve it."
          primaryLabel="Start the Conversation"
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
