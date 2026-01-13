import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col bg-slate-950 font-sans text-slate-200">
      <Navbar />
      
      <main className="flex-grow">
        {/* HERO SECTION */}
        <section className="relative overflow-hidden border-b border-white/5 py-24 lg:py-32">
          <div className="industrial-grid absolute inset-0 opacity-20" />
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
              <div>
                <h1 className="text-4xl font-bold tracking-tighter text-white sm:text-6xl">
                  Zero-Waste Mineral <br /> Recovery Technology
                </h1>
                <p className="mt-6 text-lg leading-relaxed text-slate-400">
                  Proprietary systems for recovering precious and critical metals without cyanide, acids, or liquid discharge.
                </p>
                <ul className="mt-8 space-y-3">
                  {['Modular, scalable deployment', 'Closed-loop processing', 'Designed for regulatory approval', 'Applicable to multiple feedstocks'].map((bullet) => (
                    <li key={bullet} className="flex items-center space-x-3 text-sm text-slate-300">
                      <div className="h-1 w-4 bg-slate-600" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-10 flex flex-wrap gap-4">
                  <Link href="/technology" className="btn-industrial">
                    Explore the Technology
                  </Link>
                  <Link href="/applications" className="btn-industrial-outline">
                    View Applications
                  </Link>
                </div>
              </div>
              <div className="relative aspect-square overflow-hidden rounded-sm border border-slate-800 bg-slate-900/50 p-4">
                <Image
                  src="/mru_schematic_hero.png"
                  alt="MineTeck MRU Schematic"
                  fill
                  className="object-contain opacity-80"
                />
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 1: THE TECHNOLOGY PROBLEM */}
        <section className="border-b border-white/5 py-24 sm:py-32 bg-slate-950/50">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:text-center">
              <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">The Problem</h2>
              <p className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Legacy Metallurgy Deficits
              </p>
            </div>
            <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
              {[
                { title: 'Legacy Toxicity', desc: 'Mining is historically toxic and waste-intensive. Conventional metallurgy creates multi-generational environmental liabilities.' },
                { title: 'Permitting Barriers', desc: 'Tailings dams, acid drainage, and effluent discharge create significant regulatory hurdles for new projects.' },
                { title: 'Operational Rigidity', desc: 'The industry requires clean, modular, and recoverable systems to survive tightening global environmental standards.' },
              ].map((item) => (
                <div key={item.title} className="glass-panel p-8">
                  <h3 className="text-lg font-bold text-white">{item.title}</h3>
                  <p className="mt-4 text-sm leading-relaxed text-slate-400">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 2: THE MINETECK SOLUTION */}
        <section className="py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
              <div>
                <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">The Solution</h2>
                <h3 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                  MineTeck Zero-Waste Architecture
                </h3>
                <p className="mt-6 text-lg leading-relaxed text-slate-400">
                  A modular processing platform designed for regulatory engagement and pilot-to-scale validation.
                </p>
                <div className="mt-10 space-y-6">
                  {[
                    'Zero-Waste Processing Architecture',
                    'Non-toxic recovery chemistry',
                    'Zero Liquid Discharge (ZLD) Principles',
                    'Modular deployment units (MRU)'
                  ].map((benefit) => (
                    <div key={benefit} className="flex items-center space-x-4 border-l-2 border-slate-800 pl-6">
                      <span className="text-sm font-medium text-slate-300">{benefit}</span>
                    </div>
                  ))}
                </div>
                <p className="mt-8 text-xs italic text-slate-500">
                  Note: Detailed chemistry and algorithms remain proprietary.
                </p>
              </div>
              <div className="rounded-sm border border-slate-800 bg-slate-900 h-[400px] flex items-center justify-center relative overflow-hidden text-balance">
                <div className="industrial-grid absolute inset-0 opacity-10" />
                <span className="text-xs uppercase tracking-widest text-slate-600 px-12 text-center leading-relaxed">System Architecture Diagram: Closed-Loop Zero-Waste Recovery Platform</span>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 3: TECHNOLOGY STACK (ENTRY POINT) */}
        <section className="border-t border-white/5 py-24 sm:py-32 bg-slate-900/20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex items-end justify-between">
              <div>
                <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">Infrastructure</h2>
                <h3 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">Technology Stack</h3>
              </div>
              <Link href="/technology" className="text-sm font-medium text-slate-400 hover:text-white transition-colors">
                View Full Stack →
              </Link>
            </div>
            <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
              {[
                'Mobile Research Unit (MRU)',
                'Electro-Winnowing Platform',
                'Zero Liquid Discharge (ZLD)',
                'Material Separation & Concentration',
                'Environmental Controls'
              ].map((tech) => (
                <Link key={tech} href="/technology" className="glass-panel group p-6 transition-all hover:bg-slate-800/80 hover:border-slate-700">
                  <div className="h-2 w-2 bg-slate-600 transition-colors group-hover:bg-slate-400" />
                  <h4 className="mt-4 text-sm font-bold leading-tight text-white">{tech}</h4>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 4: APPLICATION DOMAINS */}
        <section className="py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:text-center text-balance">
              <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">Versatility</h2>
              <p className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Application Domains
              </p>
              <p className="mt-4 text-slate-400">
                MineTeck’s technology platform is designed for diverse feedstock environments without requiring site-specific chemical redesign.
              </p>
            </div>
            <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {[
                { title: 'Legacy Mine Reclamation', desc: 'Remediating orphaned sites and reducing environmental risk via metal recovery.' },
                { title: 'Tailings & Dump Ore Processing', desc: 'Extracting value from low-grade materials previously considered waste.' },
                { title: 'Urban / Secondary Feedstocks', desc: 'Reference-level capability for electronics and industrial waste stream processing.' },
                { title: 'Multi-metal Recovery', desc: 'Simultaneous capture of multiple precious and critical metals in one pass.' },
              ].map((app) => (
                <Link key={app.title} href="/applications" className="group block border-l border-slate-800 p-8 transition-all hover:border-slate-400">
                  <h4 className="text-lg font-bold text-white transition-colors group-hover:text-slate-200">{app.title}</h4>
                  <p className="mt-4 text-sm leading-relaxed text-slate-500">{app.desc}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 5: OPERATING MODEL & TRUST */}
        <section className="border-y border-white/5 py-24 sm:py-32 bg-slate-900/40">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
              <div>
                <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">Operation</h2>
                <h3 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">Operating Model</h3>
                <ul className="mt-10 space-y-6">
                  {[
                    'Site-based deployment for immediate impact.',
                    'SPV-compatible architecture for flexible financing.',
                    'Designed for third-party ownership or JV-ready structures.',
                    'Operator-led or licensed models for global scale.'
                  ].map((item) => (
                    <li key={item} className="flex space-x-4 text-sm text-slate-400">
                      <span className="text-slate-600">»</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="glass-panel p-10">
                <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">Governance</h2>
                <h3 className="mt-4 text-2xl font-bold tracking-tight text-white">Trust & Compliance</h3>
                <div className="mt-8 grid grid-cols-2 gap-x-8 gap-y-6">
                  {['Environmental controls', 'Safety systems', 'Regulatory readiness', 'Auditability by design'].map((item) => (
                    <div key={item} className="flex items-center space-x-3 text-xs font-medium uppercase tracking-wider text-slate-300">
                      <div className="h-1 w-1 bg-slate-500" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-10">
                  <Link href="/compliance" className="btn-industrial w-full">
                    Environmental & Compliance Framework
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
