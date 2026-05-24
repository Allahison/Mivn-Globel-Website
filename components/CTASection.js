import Link from 'next/link';

export default function CTASection({
  eyebrow,
  heading,
  desc,
  primaryLabel,
  primaryHref = '/contact',
  secondaryLabel,
  secondaryHref = '/case-studies',
  accent = 'blue',
}) {
  const glowLeft = accent === 'violet' ? 'bg-violet-200/60' : 'bg-blue-200/60';
  const glowRight = accent === 'violet' ? 'bg-blue-200/40' : 'bg-violet-200/40';
  const btnBg = accent === 'violet'
    ? 'bg-violet-600 hover:bg-violet-500 shadow-violet-600/20'
    : 'bg-blue-600 hover:bg-blue-500 shadow-blue-600/20';
  const eyebrowColor = accent === 'violet' ? 'text-violet-600' : 'text-blue-600';

  return (
    <section className="relative bg-gray-50 py-24 overflow-hidden border-t border-gray-100">

      {/* ── Decorative orbs ── */}
      <div className={`absolute -top-32 left-1/4 w-[500px] h-[500px] ${glowLeft} rounded-full blur-3xl pointer-events-none`} />
      <div className={`absolute -bottom-32 right-1/4 w-[400px] h-[400px] ${glowRight} rounded-full blur-3xl pointer-events-none`} />

      {/* ── Content ── */}
      <div className="relative max-w-4xl mx-auto px-4 text-center">
        {eyebrow && (
          <p className={`${eyebrowColor} text-xs font-bold uppercase tracking-[0.3em] mb-5`}>{eyebrow}</p>
        )}
        <h2 className="text-4xl md:text-6xl font-black text-gray-900 mb-5 uppercase tracking-tight leading-none">
          {heading}
        </h2>
        {desc && (
          <p className="text-gray-600 text-lg md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed">{desc}</p>
        )}
        <div className="flex flex-wrap gap-4 justify-center">
          <Link
            href={primaryHref}
            className={`${btnBg} text-white font-black px-10 py-4 rounded-xl text-sm transition-all shadow-lg uppercase tracking-wide`}
          >
            {primaryLabel}
          </Link>
          {secondaryLabel && (
            <Link
              href={secondaryHref}
              className="border-2 border-gray-300 hover:border-blue-400 hover:bg-blue-50 text-gray-700 font-bold px-10 py-4 rounded-xl text-sm transition-all"
            >
              {secondaryLabel}
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
