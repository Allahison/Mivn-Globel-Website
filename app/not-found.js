import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata = {
  title: "404 — Page Not Found",
  description: "The page you are looking for does not exist.",
};

export default function NotFound() {
  return (
    <>
      <Navbar />
      <main className="min-h-[80vh] bg-white flex items-center justify-center relative overflow-hidden px-4">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-100/60 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-violet-100/50 rounded-full blur-3xl pointer-events-none" />
        <div className="relative text-center max-w-xl mx-auto">
          <p className="text-blue-600 text-xs font-bold uppercase tracking-[0.3em] mb-4">Error 404</p>
          <h1 className="text-9xl md:text-[160px] font-black leading-none tracking-tighter select-none mb-2">
            <span className="text-gray-100">4</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400">0</span>
            <span className="text-gray-100">4</span>
          </h1>
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 leading-tight -mt-4 mb-4 uppercase tracking-tight">
            PAGE NOT FOUND.
          </h2>
          <p className="text-gray-500 text-lg mb-10 max-w-md mx-auto leading-relaxed">
            The page you are looking for doesn&apos;t exist or has been moved. Let&apos;s get you back on track.
          </p>
          <div className="flex flex-wrap gap-4 justify-center mb-10">
            <Link href="/" className="bg-blue-600 hover:bg-blue-500 text-white font-black px-8 py-4 rounded-xl text-sm transition-all shadow-lg shadow-blue-600/20 uppercase tracking-wide">
              Back to Home
            </Link>
            <Link href="/contact" className="border-2 border-gray-200 hover:border-blue-400 hover:bg-blue-50 text-gray-700 font-bold px-8 py-4 rounded-xl text-sm transition-all">
              Contact Us
            </Link>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {[
              { label: 'Services', href: '/services/ecommerce-operations' },
              { label: 'Industries', href: '/case-studies' },
              { label: 'About', href: '/about' },
              { label: 'FAQ', href: '/faq' },
            ].map((link) => (
              <Link key={link.label} href={link.href} className="border border-gray-100 hover:border-blue-200 hover:bg-blue-50 rounded-xl py-3 px-4 text-sm font-semibold text-gray-500 hover:text-blue-600 transition-all">
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
