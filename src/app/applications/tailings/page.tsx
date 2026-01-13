import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function TailingsPage() {
  return (
    <div className="flex min-h-screen flex-col bg-slate-950 font-sans text-slate-200">
      <Navbar />
      <main className="flex-grow">
        <section className="border-b border-white/5 py-20 bg-slate-900/50">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
             <div className="mb-8">
              <Link href="/applications" className="text-xs font-semibold uppercase tracking-widest text-slate-500 hover:text-white transition-colors">
                ← Back to Applications
              </Link>
            </div>
            <h1 className="text-4xl font-bold tracking-tighter text-white sm:text-5xl">
              Tailings & Dump Ore
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-400">
              Unlocking value from low-grade materials. Our modular deployment model fundamentally changes the economics of reprocessing waste.
            </p>
          </div>
        </section>

        <section className="py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
              <div className="space-y-12">
                <div>
                  <h3 className="text-lg font-bold text-white border-l-2 border-slate-700 pl-4">Low-Grade Material Economics</h3>
                  <p className="mt-4 text-slate-400 leading-relaxed">
                    Legacy concentrators were often inefficient, leaving significant value in the tailings. MineTeck’s high-efficiency recovery processes combined with low CAPEX modular units make reprocessing these low-grade deposits profitable, even at lower metal prices.
                  </p>
                </div>
              </div>
              
              <div className="space-y-12">
                <div className="glass-panel p-8">
                  <h3 className="text-lg font-bold text-white mb-6">Modular Deployment Advantages</h3>
                  <div className="grid grid-cols-1 gap-4">
                     <div className="border-b border-slate-800 pb-4">
                       <h4 className="text-sm font-semibold text-slate-300">No Civil Works</h4>
                       <p className="mt-1 text-xs text-slate-500">Units deployed on skids/trailers, avoiding permanent foundations.</p>
                     </div>
                     <div className="border-b border-slate-800 pb-4">
                       <h4 className="text-sm font-semibold text-slate-300">Scale on Demand</h4>
                       <p className="mt-1 text-xs text-slate-500">Start with one circuit, add modules as cash flow allows.</p>
                     </div>
                     <div>
                       <h4 className="text-sm font-semibold text-slate-300">Asset Mobility</h4>
                       <p className="mt-1 text-xs text-slate-500">Relocate to new dump sites once local resource is depleted.</p>
                     </div>
                  </div>
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
