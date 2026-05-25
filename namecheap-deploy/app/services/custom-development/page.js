import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CTASection from '@/components/CTASection';
import ScrollReveal from '@/components/ScrollReveal';

export const metadata = {
  title: "Custom Software Development UK | Mivan Global Ltd",
  description: "Mivan Global Ltd builds bespoke B2B portals, inventory systems, warranty platforms, business dashboards, and staff tools — software designed around how your business actually works.",
  keywords: ["custom software development UK", "B2B portal development", "inventory management system", "business dashboard", "custom system UK", "Mivan Global Ltd"],
  openGraph: { title: "Custom Software Development — Mivan Global Ltd", description: "Software built around how your business actually works. Bespoke portals, systems, and dashboards.", url: "https://mivn-globel-website.vercel.app/services/custom-development" },
};

const steps = [
  { num: '01', title: 'DISCOVERY & SCOPING', desc: 'We map your current workflow, identify where things break down, and define exactly what needs to be built to solve the actual problem.' },
  { num: '02', title: 'DESIGN & BUILD', desc: 'We build your system in stages with regular check-ins so you can see progress, give feedback, and adjust as needed before full delivery.' },
  { num: '03', title: 'INTEGRATION & LAUNCH', desc: 'We connect your new system to the tools you already use — whether that is accounting software, e-commerce platforms, or existing databases.' },
  { num: '04', title: 'SUPPORT & UPDATES', desc: 'We stay involved after launch to fix issues, add features, and make sure the system keeps working as your business grows and changes.' },
];

const solutions = [
  { tag: 'B2B', tagColor: 'bg-green-100 text-green-700', title: 'B2B Ordering Portals', desc: 'Self-service portals that allow your wholesale customers to view live stock, place orders, and download invoices without contacting your team.', image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=600&q=75' },
  { tag: 'INVENTORY', tagColor: 'bg-blue-100 text-blue-700', title: 'Inventory Systems', desc: 'Custom stock management tools that track products, movements, and locations in a way that fits your actual warehouse or storage setup.', image: 'https://images.unsplash.com/photo-1553413077-190dd305871c?w=600&q=75' },
  { tag: 'WARRANTY', tagColor: 'bg-violet-100 text-violet-700', title: 'Warranty & Repair Platforms', desc: 'Systems for managing warranty claims, repair requests, and returns — with status tracking and customer communication built in.', image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&q=75' },
  { tag: 'REPORTING', tagColor: 'bg-teal-100 text-teal-700', title: 'Business Dashboards', desc: 'Reporting dashboards that pull data from your existing tools and present it clearly — stock, orders, revenue, and key metrics in one view.', image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=75' },
  { tag: 'INTEGRATION', tagColor: 'bg-orange-100 text-orange-700', title: 'System Integrations', desc: 'Connections between tools that do not talk to each other — linking your website, accounting software, marketplace, or CRM to reduce manual data entry.', image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&q=75' },
  { tag: 'TOOLS', tagColor: 'bg-red-100 text-red-700', title: 'Staff & Internal Tools', desc: 'Simple apps and tools built for your team — whether for scanning stock, updating job status, or managing tasks in the field.', image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&q=75' },
];

const principles = [
  { icon: '🎯', title: 'Built Around Your Workflow', desc: 'We do not apply a generic template. We design the system around how your business actually operates, not around what is easiest to build.', points: ['Custom logic for your process', 'No unnecessary features', 'Fits how your team works'] },
  { icon: '🔗', title: 'Connected to Your Tools', desc: 'We build systems that work alongside the tools you already use — connecting data rather than replacing everything at once.', points: ['Accounting & invoicing integration', 'E-commerce platform connection', 'API-based data sync'] },
  { icon: '📊', title: 'Clear Reporting', desc: 'Every system we build includes reporting so you can see what is happening — without needing to export data into spreadsheets manually.', points: ['Real-time dashboards', 'Role-based access', 'Exportable reports'] },
  { icon: '🛠️', title: 'Ongoing Support', desc: 'We stay involved after launch. If something needs fixing or a new feature is needed as your business grows, we are available to help.', points: ['Post-launch maintenance', 'Feature updates', 'System monitoring'] },
];

export default function CustomDevelopment() {
  return (
    <>
      <Navbar />
      <main>

        {/* ── HERO ── */}
        <section className="relative bg-gray-950 text-white overflow-hidden">
          <div className="absolute inset-0">
            <Image src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=1600&q=60" alt="" fill sizes="100vw" className="object-cover opacity-40" />
            <div className="absolute inset-0 bg-gradient-to-r from-gray-950/90 via-gray-950/70 to-gray-950/40" />
          </div>
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[85vh] items-center gap-12 py-20">
              <div>
                <p className="hero-anim-1 text-violet-400 text-xs font-bold uppercase tracking-[0.3em] mb-4">Custom Development &middot; Mivan Global Ltd</p>
                <h1 className="hero-anim-2 text-5xl md:text-6xl xl:text-7xl font-black leading-none mb-6 tracking-tight">
                  SOFTWARE BUILT AROUND
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-blue-400">HOW YOUR BUSINESS WORKS.</span>
                </h1>
                <p className="hero-anim-3 text-gray-400 text-lg leading-relaxed max-w-xl mb-10">
                  Off-the-shelf software rarely fits perfectly. We design and build custom B2B portals, inventory systems,
                  warranty platforms, and business dashboards that match your actual operational workflow.
                </p>
                <div className="hero-anim-4 flex flex-wrap gap-4">
                  <Link href="/contact" className="bg-violet-600 hover:bg-violet-500 text-white font-bold px-8 py-4 rounded-xl text-sm transition-all shadow-lg shadow-violet-600/20">Discuss Your Project</Link>
                  <Link href="/case-studies" className="border border-white/20 hover:border-white/50 text-white font-semibold px-8 py-4 rounded-xl text-sm transition-all">View Case Studies</Link>
                </div>
              </div>
              <div className="hero-anim-img relative hidden lg:block">
                <div className="relative rounded-2xl overflow-hidden h-[560px] shadow-2xl">
                  <Image src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=900&q=85" alt="Custom software development" fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" priority />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-950/60 via-transparent to-transparent" />
                  <div className="absolute bottom-6 left-6 bg-violet-600/90 backdrop-blur-md border border-violet-500/30 rounded-xl px-5 py-4">
                    <div className="text-white font-black text-xl">Built for Your Business</div>
                    <div className="text-violet-200 text-xs font-semibold uppercase tracking-widest mt-1">Not a Generic Template</div>
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

        {/* ── SOFTWARE WE BUILD ── */}
        <section className="bg-white py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollReveal className="mb-14">
              <p className="text-violet-600 text-xs font-bold uppercase tracking-[0.3em] mb-3">What We Build</p>
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
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* ── HOW WE WORK ── */}
        <section className="bg-gray-50 py-24 relative overflow-hidden">
          <div className="absolute inset-0 opacity-5 pointer-events-none">
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-violet-500 rounded-full blur-3xl" />
          </div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <ScrollReveal>
                  <p className="text-violet-600 text-xs font-bold uppercase tracking-[0.3em] mb-3">How We Approach It</p>
                  <h2 className="text-4xl md:text-5xl font-black text-gray-900 leading-tight mb-4">PRINCIPLES WE BUILD<span className="block text-gray-500">EVERY SYSTEM AROUND.</span></h2>
                  <p className="text-gray-600 text-lg mb-8">Every system we build starts with understanding your workflow first — not proposing a solution before we understand the problem.</p>
                </ScrollReveal>
                <div className="grid grid-cols-1 gap-5">
                  {principles.map((p, i) => (
                    <ScrollReveal key={p.title} delay={i * 100}>
                      <div className="border border-gray-200 rounded-2xl p-6 hover:border-violet-300 hover:bg-white transition-all duration-300 group flex gap-4">
                        <div className="text-2xl flex-shrink-0">{p.icon}</div>
                        <div>
                          <h3 className="text-gray-900 font-black text-base mb-1 group-hover:text-violet-600 transition-colors">{p.title}</h3>
                          <p className="text-gray-500 text-xs leading-relaxed mb-3">{p.desc}</p>
                          <div className="flex flex-wrap gap-x-4 gap-y-1">
                            {p.points.map((pt) => (
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
              <ScrollReveal className="relative hidden lg:block">
                <div className="relative rounded-2xl overflow-hidden h-[600px] shadow-2xl">
                  <Image src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=900&q=85" alt="Software development process" fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-950/70 via-transparent to-transparent" />
                  <div className="absolute bottom-6 left-6 bg-violet-600/90 backdrop-blur-md rounded-xl px-5 py-4 border border-violet-500/30">
                    <div className="text-white font-black text-sm uppercase tracking-widest">Full IP Ownership</div>
                    <div className="text-violet-200 text-xs mt-1">Your system, your asset</div>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        <CTASection
          heading="HAVE A WORKFLOW PROBLEM WE CAN SOLVE?"
          desc="Tell us what is not working in your current process. We will design a system that fixes it — without unnecessary complexity."
          primaryLabel="Discuss Your Project"
          primaryHref="/contact"
          secondaryLabel="View Case Studies"
          secondaryHref="/case-studies"
          accent="violet"
        />

      </main>
      <Footer />
    </>
  );
}
