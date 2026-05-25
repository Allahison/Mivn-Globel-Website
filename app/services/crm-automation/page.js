import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CTASection from '@/components/CTASection';
import ScrollReveal from '@/components/ScrollReveal';

export const metadata = {
  title: "CRM & WhatsApp Automation Services UK | Mivan Global Ltd",
  description: "Mivan Global Ltd builds CRM automation, WhatsApp workflows, booking systems, follow-up campaigns, and sales pipelines for UK businesses. Turn enquiries into customers automatically.",
  keywords: ["CRM automation UK", "WhatsApp automation", "lead follow-up automation", "booking system UK", "sales pipeline CRM", "Mivan Global Ltd"],
  openGraph: { title: "CRM & Automation Services UK — Mivan Global Ltd", description: "Build CRM pipelines, WhatsApp automation, booking funnels, lead follow-ups, and sales workflows.", url: "https://mivn-globel-website.vercel.app/services/crm-automation" },
};

const features = [
  { tag: 'LEADS', tagColor: 'bg-blue-100 text-blue-700', icon: '🎯', title: 'Lead Capture Funnels', desc: 'Capture enquiries from landing pages, forms, Meta ads, Google ads, WhatsApp, and website chat — and send them straight into your CRM pipeline.' },
  { tag: 'WHATSAPP', tagColor: 'bg-green-100 text-green-700', icon: '💬', title: 'WhatsApp Automation', desc: 'Send instant replies, qualification questions, appointment reminders, and follow-up messages through structured WhatsApp workflows.' },
  { tag: 'PIPELINE', tagColor: 'bg-violet-100 text-violet-700', icon: '📊', title: 'Sales Pipelines', desc: 'Track every lead from new enquiry through consultation, quote, follow-up, won, or lost. Full visibility on every opportunity.' },
  { tag: 'BOOKING', tagColor: 'bg-teal-100 text-teal-700', icon: '📅', title: 'Booking Calendars', desc: 'Allow customers to book appointments or consultations automatically — with confirmation messages and reminders sent without manual effort.' },
  { tag: 'ALERTS', tagColor: 'bg-orange-100 text-orange-700', icon: '🔔', title: 'Internal Notifications', desc: 'Notify your team instantly when a lead comes in, a customer replies, or an appointment is booked — no more checking manually.' },
  { tag: 'REVIEWS', tagColor: 'bg-yellow-100 text-yellow-700', icon: '⭐', title: 'Review Requests', desc: 'Automatically request reviews after successful service completion to build consistent positive reputation across Google and other platforms.' },
  { tag: 'MISSED CALLS', tagColor: 'bg-red-100 text-red-700', icon: '📞', title: 'Missed Call Text Back', desc: 'Send an automatic SMS or WhatsApp message when a call is missed — so no lead goes without a response.' },
  { tag: 'REPORTING', tagColor: 'bg-blue-100 text-blue-700', icon: '📈', title: 'Reporting Dashboard', desc: 'See lead sources, conversion rates, booked calls, follow-up activity, and campaign performance in one clear view.' },
];

const bestFor = [
  'Law Firms', 'Consultants', 'Agencies', 'Clinics & Healthcare',
  'Training Providers', 'Local Service Businesses', 'B2B Companies', 'Sales Teams',
];

export default function CRMAutomation() {
  return (
    <>
      <Navbar />
      <main>

        {/* ── HERO ── */}
        <section className="relative bg-gray-950 text-white overflow-hidden">
          <div className="absolute inset-0">
            <Image src="https://images.unsplash.com/photo-1553775282-20af80779df7?w=1600&q=60" alt="" fill sizes="100vw" className="object-cover opacity-40" />
            <div className="absolute inset-0 bg-gradient-to-r from-gray-950/90 via-gray-950/70 to-gray-950/40" />
          </div>
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[85vh] items-center gap-12 py-20">
              <div>
                <p className="hero-anim-1 text-blue-400 text-xs font-bold uppercase tracking-[0.3em] mb-4">CRM & Automation &middot; Mivan Global Ltd</p>
                <h1 className="hero-anim-2 text-5xl md:text-6xl xl:text-7xl font-black leading-none mb-6 tracking-tight">
                  TURN ENQUIRIES INTO
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">CUSTOMERS AUTOMATICALLY.</span>
                </h1>
                <p className="hero-anim-3 text-gray-400 text-lg leading-relaxed max-w-xl mb-10">
                  We build CRM systems and automation workflows that capture leads, follow up instantly, book appointments,
                  send WhatsApp/SMS/email reminders, notify your team, and track every opportunity from first contact to final sale.
                </p>
                <div className="hero-anim-4 flex flex-wrap gap-4">
                  <Link href="/contact" className="bg-blue-600 hover:bg-blue-500 text-white font-bold px-8 py-4 rounded-xl text-sm transition-all shadow-lg shadow-blue-600/20">Build My Automation System</Link>
                  <Link href="/contact" className="border border-white/20 hover:border-white/50 text-white font-semibold px-8 py-4 rounded-xl text-sm transition-all">Book a Free CRM Audit</Link>
                </div>
              </div>
              <div className="hero-anim-img relative hidden lg:block">
                <div className="relative rounded-2xl overflow-hidden h-[540px] shadow-2xl">
                  <Image src="https://images.unsplash.com/photo-1553775282-20af80779df7?w=900&q=85" alt="CRM automation and lead management" fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" priority />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-950/60 via-transparent to-transparent" />
                  <div className="absolute bottom-6 left-6 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl px-5 py-4">
                    <div className="text-white font-black text-xl">CRM + WhatsApp</div>
                    <div className="text-gray-300 text-xs font-semibold uppercase tracking-widest mt-1">Automated Lead Workflows</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── FEATURES ── */}
        <section className="bg-white py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollReveal className="mb-14">
              <p className="text-blue-600 text-xs font-bold uppercase tracking-[0.3em] mb-3">What We Build</p>
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 leading-tight">EVERYTHING IN YOUR<span className="block">CRM SYSTEM.</span></h2>
            </ScrollReveal>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
              {features.map((f, i) => (
                <ScrollReveal key={f.title} delay={i * 80}>
                  <div className="border border-gray-200 rounded-2xl p-6 hover:border-blue-300 hover:bg-gray-50 transition-all duration-300 group h-full flex flex-col">
                    <div className="text-3xl mb-4">{f.icon}</div>
                    <span className={`inline-block text-[10px] font-black uppercase tracking-[0.25em] px-2 py-0.5 rounded mb-3 w-fit ${f.tagColor}`}>{f.tag}</span>
                    <h3 className="text-gray-900 font-black text-base mb-2 group-hover:text-blue-600 transition-colors">{f.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed flex-1">{f.desc}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* ── BEST FOR ── */}
        <section className="bg-gray-50 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollReveal className="mb-10 text-center">
              <p className="text-blue-600 text-xs font-bold uppercase tracking-[0.3em] mb-3">Who This Is For</p>
              <h2 className="text-3xl md:text-4xl font-black text-gray-900">BEST FOR THESE BUSINESSES.</h2>
            </ScrollReveal>
            <ScrollReveal>
              <div className="flex flex-wrap justify-center gap-3">
                {bestFor.map((b) => (
                  <span key={b} className="bg-white border border-gray-200 text-gray-700 font-bold px-6 py-3 rounded-xl text-sm hover:border-blue-400 hover:text-blue-600 transition-colors shadow-sm">
                    {b}
                  </span>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* ── HOW IT WORKS ── */}
        <section className="bg-white py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <ScrollReveal>
                <p className="text-blue-600 text-xs font-bold uppercase tracking-[0.3em] mb-4">How It Works</p>
                <h2 className="text-4xl font-black text-gray-900 leading-tight mb-6">STOP FOLLOWING UP<span className="block text-gray-500">MANUALLY.</span></h2>
                <p className="text-gray-600 text-lg leading-relaxed mb-8">
                  Most businesses lose leads because follow-ups are slow, inconsistent, or simply forgotten. A well-built
                  CRM and automation system means every lead gets an instant response, every appointment gets a reminder,
                  and every opportunity is tracked — without any manual effort from your team.
                </p>
                <div className="space-y-4">
                  {[
                    { num: '01', title: 'Lead Comes In', desc: 'From your website, WhatsApp, form, or ad campaign.' },
                    { num: '02', title: 'Instant Response', desc: 'Automated message sent within seconds to acknowledge the enquiry.' },
                    { num: '03', title: 'Qualification', desc: 'AI or workflow asks the right questions and collects key details.' },
                    { num: '04', title: 'Booked & Notified', desc: 'Appointment booked automatically. Your team is notified immediately.' },
                  ].map((step, i) => (
                    <ScrollReveal key={step.num} delay={i * 80}>
                      <div className="flex items-start gap-4 border border-gray-200 rounded-xl p-5 hover:border-blue-300 transition-all group">
                        <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center font-black text-white text-sm flex-shrink-0">{step.num}</div>
                        <div>
                          <h4 className="text-gray-900 font-black text-sm uppercase tracking-wide mb-1 group-hover:text-blue-600 transition-colors">{step.title}</h4>
                          <p className="text-gray-500 text-sm">{step.desc}</p>
                        </div>
                      </div>
                    </ScrollReveal>
                  ))}
                </div>
              </ScrollReveal>
              <ScrollReveal direction="right" className="relative hidden lg:block">
                <div className="relative rounded-2xl overflow-hidden h-[500px] shadow-2xl">
                  <Image src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=900&q=85" alt="CRM pipeline and automation workflow" fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-950/60 via-transparent to-transparent" />
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        <CTASection
          eyebrow="Ready to Automate?"
          heading="STILL FOLLOWING UP WITH LEADS MANUALLY?"
          desc="Let's build a CRM and automation workflow that responds faster, books more appointments, and keeps every lead organised."
          primaryLabel="Build My CRM Workflow"
          primaryHref="/contact"
          secondaryLabel="Book a Free Audit"
          secondaryHref="/contact"
          accent="blue"
        />

      </main>
      <Footer />
    </>
  );
}
