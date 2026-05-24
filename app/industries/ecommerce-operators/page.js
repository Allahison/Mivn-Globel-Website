import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CTASection from '@/components/CTASection';
import ScrollReveal from '@/components/ScrollReveal';

const solutions = [
  { tag: 'OPTIMISATION', tagColor: 'bg-blue-100 text-blue-700', title: 'Store Optimisation', desc: 'Conversion rate optimisation, A/B testing, and UX improvements for maximum revenue per visitor.', image: 'https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=600&q=75' },
  { tag: 'MARKETING', tagColor: 'bg-orange-100 text-orange-700', title: 'Performance Marketing', desc: 'Facebook, Google, and TikTok ad campaigns managed by certified professionals with proven ROAS.', image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=75' },
  { tag: 'SYNC', tagColor: 'bg-teal-100 text-teal-700', title: 'Inventory Sync', desc: 'Real-time sync across multiple sales channels — website, marketplace, and social commerce.', image: 'https://images.unsplash.com/photo-1553413077-190dd305871c?w=600&q=75' },
  { tag: 'REPUTATION', tagColor: 'bg-yellow-100 text-yellow-700', title: 'Reviews & Reputation', desc: 'Automated review collection and reputation management across all platforms and marketplaces.', image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=600&q=75' },
  { tag: 'RETURNS', tagColor: 'bg-violet-100 text-violet-700', title: 'Returns Management', desc: 'Smooth returns process that retains customers, reduces friction, and protects your margins.', image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&q=75' },
  { tag: 'CRM', tagColor: 'bg-green-100 text-green-700', title: 'Email & SMS Marketing', desc: 'Targeted campaigns that bring back past customers and boost repeat purchase rates significantly.', image: 'https://images.unsplash.com/photo-1553775282-20af80779df7?w=600&q=75' },
];

export default function EcommerceOperators() {
  return (
    <>
      <Navbar />
      <main>

        {/* ── HERO ── */}
        <section className="relative bg-gray-950 text-white overflow-hidden">
          <div className="absolute inset-0">
            <Image src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=1600&q=60" alt="" fill sizes="100vw" className="object-cover opacity-55" />
            <div className="absolute inset-0 bg-gradient-to-r from-gray-950/75 via-gray-950/55 to-gray-950/20" />
          </div>
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[85vh] items-center gap-12 py-20">
              <div>
                <p className="hero-anim-1 text-blue-400 text-xs font-bold uppercase tracking-[0.3em] mb-4">Industries · E-commerce Operators</p>
                <h1 className="hero-anim-2 text-5xl md:text-6xl xl:text-7xl font-black leading-none mb-6 tracking-tight">
                  BUILT FOR
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-blue-400">ONLINE SELLERS.</span>
                </h1>
                <p className="hero-anim-3 text-gray-400 text-lg leading-relaxed max-w-xl mb-10">
                  Whether you&apos;re just starting out or scaling to millions — we provide the operations,
                  marketing, and tech support to grow your online store profitably.
                </p>
                <div className="hero-anim-4 flex flex-wrap gap-4">
                  <Link href="/contact" className="bg-blue-600 hover:bg-blue-500 text-white font-bold px-8 py-4 rounded-xl text-sm transition-all shadow-lg shadow-blue-600/20">Talk to Us</Link>
                  <Link href="/case-studies" className="border border-white/20 hover:border-white/50 text-white font-semibold px-8 py-4 rounded-xl text-sm transition-all">View Case Studies</Link>
                </div>
              </div>
              <div className="hero-anim-img relative hidden lg:block">
                <div className="relative rounded-2xl overflow-hidden h-[560px] shadow-2xl">
                  <Image src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=900&q=85" alt="E-commerce online store operations" fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" priority />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-950/70 via-transparent to-transparent" />
                  <div className="absolute bottom-6 left-6 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl px-5 py-4">
                    <div className="text-white font-black text-xl">90 Days</div>
                    <div className="text-gray-300 text-xs font-semibold uppercase tracking-widest mt-1">To Measurable Growth</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── SOLUTIONS ── */}
        <section className="bg-white py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollReveal className="mb-14">
              <p className="text-blue-600 text-xs font-bold uppercase tracking-[0.3em] mb-3">Solutions</p>
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 leading-tight">GROW YOUR<span className="block">ONLINE BUSINESS.</span></h2>
            </ScrollReveal>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
              {solutions.map((s, i) => (
                <ScrollReveal key={s.title} delay={i * 80}>
                  <div className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl border border-gray-100 hover:border-blue-100 transition-all duration-300 flex flex-col h-full">
                    <div className="relative h-44 overflow-hidden">
                      <Image src={s.image} alt={s.title} fill sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" className="object-cover group-hover:scale-105 transition-transform duration-500" />
                      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-950/30" />
                      <span className={`absolute top-3 left-3 inline-block text-[10px] font-black uppercase tracking-[0.25em] px-2.5 py-1 rounded ${s.tagColor}`}>{s.tag}</span>
                    </div>
                    <div className="p-7 flex flex-col flex-1">
                      <h3 className="text-gray-900 font-black text-xl mb-2 group-hover:text-blue-600 transition-colors">{s.title}</h3>
                      <p className="text-gray-500 text-sm leading-relaxed flex-1">{s.desc}</p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        <CTASection
          heading="TAKE YOUR STORE TO THE NEXT LEVEL"
          desc="Partner with us and see measurable growth in 90 days."
          primaryLabel="Get Started"
          primaryHref="/contact"
          secondaryLabel="View Case Studies"
          secondaryHref="/case-studies"
          accent="blue"
        />

      </main>
      <Footer />
    </>
  );
}
