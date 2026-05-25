import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CTASection from '@/components/CTASection';
import ScrollReveal from '@/components/ScrollReveal';

export const metadata = {
  title: "CRM & Automation for Service Businesses UK | Mivan Global Ltd",
  description: "Mivan Global Ltd helps service businesses capture enquiries, respond faster, automate follow-ups, book appointments, collect payments, and manage customer communication from one CRM system.",
  keywords: ["service business CRM UK", "booking automation", "WhatsApp automation service business", "lead generation service business UK", "Mivan Global Ltd"],
  openGraph: { title: "Service Businesses — Mivan Global Ltd", description: "Turn leads into bookings with CRM automation, WhatsApp workflows, and booking funnels built for service businesses.", url: "https://mivn-globel-website.vercel.app/industries/service-businesses" },
};

const solutions = [
  { icon: '📝', title: 'Website Lead Forms', desc: 'Capture enquiries from your website and send them directly into your CRM pipeline.' },
  { icon: '📅', title: 'Booking Calendars', desc: 'Allow customers to book appointments or consultations automatically with reminders.' },
  { icon: '💬', title: 'WhatsApp Automation', desc: 'Send instant replies, qualification questions, and reminders through WhatsApp workflows.' },
  { icon: '📞', title: 'Missed Call Text Back', desc: 'Send an automatic SMS or WhatsApp when a call is missed — so no lead goes without a response.' },
  { icon: '📋', title: 'Quote Request Workflows', desc: 'Automate quote collection, approval, follow-up, and conversion workflows.' },
  { icon: '🔔', title: 'Follow-Up Campaigns', desc: 'Send automated sequences to warm leads who have not yet booked or responded.' },
  { icon: '💳', title: 'Payment Links', desc: 'Send payment links automatically after booking or service completion.' },
  { icon: '⭐', title: 'Review Requests', desc: 'Automatically request reviews from happy customers to build your online reputation.' },
  { icon: '📊', title: 'Reporting Dashboard', desc: 'See lead sources, conversion rates, booked appointments, and revenue in one clear view.' },
];

const bestFor = [
  'Consultants', 'Agencies', 'Clinics & Healthcare', 'Training Providers',
  'Trades & Home Services', 'Repair Businesses', 'Local Service Companies', 'Professional Service Providers',
];

export default function ServiceBusinesses() {
  return (
    <>
      <Navbar />
      <main>

        {/* ── HERO ── */}
        <section className="relative bg-gray-950 text-white overflow-hidden">
          <div className="absolute inset-0">
            <Image src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1600&q=60" alt="" fill sizes="100vw" className="object-cover opacity-40" />
            <div className="absolute inset-0 bg-gradient-to-r from-gray-950/90 via-gray-950/70 to-gray-950/40" />
          </div>
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[80vh] items-center gap-12 py-20">
              <div>
                <p className="hero-anim-1 text-blue-400 text-xs font-bold uppercase tracking-[0.3em] mb-4">Service Businesses &middot; Mivan Global Ltd</p>
                <h1 className="hero-anim-2 text-5xl md:text-6xl xl:text-7xl font-black leading-none mb-6 tracking-tight">
                  TURN LEADS INTO BOOKINGS
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">WITH AUTOMATION.</span>
                </h1>
                <p className="hero-anim-3 text-gray-400 text-lg leading-relaxed max-w-xl mb-10">
                  Mivan Global Ltd helps service businesses capture enquiries, respond faster, automate follow-ups,
                  book appointments, collect payments, and manage customer communication from one CRM system.
                </p>
                <div className="hero-anim-4 flex flex-wrap gap-4">
                  <Link href="/contact" className="bg-blue-600 hover:bg-blue-500 text-white font-bold px-8 py-4 rounded-xl text-sm transition-all shadow-lg shadow-blue-600/20">Automate My Service Business</Link>
                  <Link href="/contact" className="border border-white/20 hover:border-white/50 text-white font-semibold px-8 py-4 rounded-xl text-sm transition-all">Build My Booking Funnel</Link>
                </div>
              </div>
              <div className="hero-anim-img relative hidden lg:block">
                <div className="relative rounded-2xl overflow-hidden h-[520px] shadow-2xl">
                  <Image src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=900&q=85" alt="Service business team and customer management" fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" priority />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-950/60 via-transparent to-transparent" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── BEST FOR ── */}
        <section className="bg-gray-50 py-16 border-t border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollReveal className="mb-8 text-center">
              <p className="text-blue-600 text-xs font-bold uppercase tracking-[0.3em]">Best For These Businesses</p>
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

        {/* ── SOLUTIONS ── */}
        <section className="bg-white py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollReveal className="mb-14">
              <p className="text-blue-600 text-xs font-bold uppercase tracking-[0.3em] mb-3">What We Build For You</p>
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 leading-tight">SYSTEMS THAT FILL<span className="block">YOUR DIARY.</span></h2>
            </ScrollReveal>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {solutions.map((s, i) => (
                <ScrollReveal key={s.title} delay={i * 80}>
                  <div className="border border-gray-200 rounded-2xl p-6 hover:border-blue-300 hover:bg-gray-50 transition-all duration-300 group h-full flex items-start gap-4">
                    <span className="text-2xl flex-shrink-0">{s.icon}</span>
                    <div>
                      <h3 className="text-gray-900 font-black text-base mb-1 group-hover:text-blue-600 transition-colors">{s.title}</h3>
                      <p className="text-gray-500 text-sm leading-relaxed">{s.desc}</p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* ── HOW IT WORKS ── */}
        <section className="bg-gray-50 py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollReveal className="mb-14 text-center">
              <p className="text-blue-600 text-xs font-bold uppercase tracking-[0.3em] mb-3">The Result</p>
              <h2 className="text-4xl font-black text-gray-900">YOUR BUSINESS RESPONDS FASTER,<span className="block text-gray-500">BOOKS MORE, AND WASTES LESS TIME.</span></h2>
            </ScrollReveal>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
              {[
                { icon: '⚡', title: 'Instant Response', desc: 'Every enquiry gets an immediate automated response — so your business never feels slow or unresponsive.' },
                { icon: '📅', title: 'Automatic Bookings', desc: 'Customers book themselves into your calendar without phone calls or back-and-forth messages.' },
                { icon: '🔄', title: 'Consistent Follow-Up', desc: 'Every lead is followed up automatically until they book, decline, or are marked as closed.' },
              ].map((item, i) => (
                <ScrollReveal key={item.title} delay={i * 100}>
                  <div className="bg-white border border-gray-200 rounded-2xl p-8 text-center hover:border-blue-300 hover:shadow-md transition-all duration-300 group">
                    <div className="text-4xl mb-5">{item.icon}</div>
                    <h3 className="text-gray-900 font-black text-xl mb-3 group-hover:text-blue-600 transition-colors">{item.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        <CTASection
          eyebrow="Ready to Automate?"
          heading="TURN ENQUIRIES INTO BOOKINGS AUTOMATICALLY."
          desc="Let's build a CRM and booking automation system that fills your diary without manual effort."
          primaryLabel="Automate My Service Business"
          primaryHref="/contact"
          secondaryLabel="Book a Free Consultation"
          secondaryHref="/contact"
          accent="blue"
        />

      </main>
      <Footer />
    </>
  );
}
