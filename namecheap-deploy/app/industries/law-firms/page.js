import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CTASection from '@/components/CTASection';
import ScrollReveal from '@/components/ScrollReveal';

export const metadata = {
  title: "CRM & Automation for Law Firms UK | Mivan Global Ltd",
  description: "Mivan Global Ltd helps law firms capture leads, automate follow-ups, book consultations, collect client details, send reminders, and manage client communication through CRM automation.",
  keywords: ["law firm CRM UK", "legal lead generation", "consultation booking law firm", "law firm automation", "client intake automation", "Mivan Global Ltd"],
  openGraph: { title: "Law Firms — Mivan Global Ltd", description: "More enquiries, faster follow-up, less admin. CRM and automation workflows for law firms.", url: "https://mivn-globel-website.vercel.app/industries/law-firms" },
};

const solutions = [
  { icon: '🎯', title: 'Lead Generation Funnels', desc: 'Capture enquiries from paid ads, website forms, and referral sources into a structured CRM pipeline.' },
  { icon: '💳', title: 'Paid Consultation Booking', desc: 'Allow prospective clients to book and pay for initial consultations online, automatically.' },
  { icon: '📝', title: 'Client Intake Forms', desc: 'Collect structured client information before the first call — saving time and improving preparation.' },
  { icon: '💬', title: 'WhatsApp & SMS Reminders', desc: 'Send automatic appointment reminders, follow-ups, and document request messages to clients.' },
  { icon: '📞', title: 'Missed Call Follow-Up', desc: 'Send an automatic SMS or WhatsApp when a call is missed — so no enquiry is left without a response.' },
  { icon: '📋', title: 'Document Request Workflows', desc: 'Automate document collection requests and chase outstanding items without manual effort.' },
  { icon: '🔔', title: 'Internal Team Notifications', desc: 'Notify your team when a new enquiry arrives, a client books, or a document is submitted.' },
  { icon: '📊', title: 'Pipeline Tracking', desc: 'Track every enquiry from first contact through consultation, engagement, and case status.' },
  { icon: '⭐', title: 'Review Requests', desc: 'Automatically request reviews after successful case completion to build your online reputation.' },
];

export default function LawFirms() {
  return (
    <>
      <Navbar />
      <main>

        {/* ── HERO ── */}
        <section className="relative bg-gray-950 text-white overflow-hidden">
          <div className="absolute inset-0">
            <Image src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=1600&q=60" alt="" fill sizes="100vw" className="object-cover opacity-40" />
            <div className="absolute inset-0 bg-gradient-to-r from-gray-950/90 via-gray-950/70 to-gray-950/40" />
          </div>
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[80vh] items-center gap-12 py-20">
              <div>
                <p className="hero-anim-1 text-blue-400 text-xs font-bold uppercase tracking-[0.3em] mb-4">Law Firms &middot; Mivan Global Ltd</p>
                <h1 className="hero-anim-2 text-5xl md:text-6xl xl:text-7xl font-black leading-none mb-6 tracking-tight">
                  MORE ENQUIRIES.
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">FASTER FOLLOW-UP.</span>
                  <span className="block text-white/80 text-4xl md:text-5xl mt-1">LESS ADMIN.</span>
                </h1>
                <p className="hero-anim-3 text-gray-400 text-lg leading-relaxed max-w-xl mb-10">
                  Mivan Global Ltd helps law firms capture leads, automate follow-ups, book consultations,
                  collect client details, send reminders, and manage client communication through practical
                  CRM and automation workflows.
                </p>
                <div className="hero-anim-4 flex flex-wrap gap-4">
                  <Link href="/contact" className="bg-blue-600 hover:bg-blue-500 text-white font-bold px-8 py-4 rounded-xl text-sm transition-all shadow-lg shadow-blue-600/20">Automate Client Intake</Link>
                  <Link href="/contact" className="border border-white/20 hover:border-white/50 text-white font-semibold px-8 py-4 rounded-xl text-sm transition-all">Build a Legal Lead Funnel</Link>
                </div>
              </div>
              <div className="hero-anim-img relative hidden lg:block">
                <div className="relative rounded-2xl overflow-hidden h-[520px] shadow-2xl">
                  <Image src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=900&q=85" alt="Law firm digital operations and client management" fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" priority />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-950/60 via-transparent to-transparent" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── SOLUTIONS ── */}
        <section className="bg-white py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollReveal className="mb-14">
              <p className="text-blue-600 text-xs font-bold uppercase tracking-[0.3em] mb-3">What We Build</p>
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 leading-tight">HOW WE HELP<span className="block">LAW FIRMS.</span></h2>
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

        {/* ── RESULT ── */}
        <section className="bg-gray-50 py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollReveal className="mb-12 text-center">
              <p className="text-blue-600 text-xs font-bold uppercase tracking-[0.3em] mb-3">The Outcome</p>
              <h2 className="text-4xl font-black text-gray-900">YOUR FIRM RESPONDS FASTER AND<span className="block text-gray-500">CONVERTS MORE ENQUIRIES.</span></h2>
            </ScrollReveal>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
              {[
                { icon: '⚡', title: 'Instant Lead Response', desc: 'Every enquiry receives an immediate automated response — so potential clients feel attended to from the first contact.' },
                { icon: '📅', title: 'Automated Consultations', desc: 'Clients book and pay for consultations online without waiting for a callback or admin availability.' },
                { icon: '📊', title: 'Clear Pipeline Visibility', desc: 'See every enquiry, its status, and the next required action — without relying on memory or spreadsheets.' },
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
          eyebrow="Ready to Modernise?"
          heading="AUTOMATE YOUR LAW FIRM'S CLIENT JOURNEY."
          desc="Let's build a lead capture, booking, and follow-up system that brings in more clients with less manual work."
          primaryLabel="Automate Client Intake"
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
