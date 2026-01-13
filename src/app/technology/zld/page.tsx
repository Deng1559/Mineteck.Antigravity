import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function ZLDPage() {
  return (
    <div className="flex min-h-screen flex-col bg-slate-950 font-sans text-slate-200">
      <Navbar />
      <main className="flex-grow">
        <section className="border-b border-white/5 py-20 bg-slate-900/50">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
             <div className="mb-8">
              <Link href="/technology" className="text-xs font-semibold uppercase tracking-widest text-slate-500 hover:text-white transition-colors">
                ← Back to Tech Stack
              </Link>
            </div>
            <h1 className="text-4xl font-bold tracking-tighter text-white sm:text-5xl">
              Zero Liquid Discharge (ZLD)
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-400">
              A closed-loop water handling system ensuring absolute containment, minimizing freshwater draw and eliminating liquid tailing discharge.
            </p>
          </div>
        </section>

        <section className="py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
              <div className="space-y-12">
                <div>
                  <h3 className="text-lg font-bold text-white border-l-2 border-slate-700 pl-4">Closed-Loop Water Handling</h3>
                  <p className="mt-4 text-slate-400 leading-relaxed">
                    Process water is continuously recycled through a series of filtration and treatment steps. Unlike evaporation ponds which lose water to the atmosphere, the MineTeck system captures and re-injects water back into the circuit, drastically reducing the operational water footprint.
                  </p>
                </div>
                 <div className="glass-panel p-8">
                   <h4 className="text-sm font-semibold uppercase tracking-widest text-slate-500 mb-6">System Schematic</h4>
                   <div className="space-y-3 text-sm text-slate-300">
                     <div className="flex justify-between border-b border-slate-800 pb-2">
                       <span>Filtrate Return</span>
                       <span>→ Reuse in Leaching</span>
                     </div>
                     <div className="flex justify-between border-b border-slate-800 pb-2">
                       <span>Wash Water</span>
                       <span>→ Clarification & Recycle</span>
                     </div>
                     <div className="flex justify-between border-b border-slate-800 pb-2">
                       <span>Evaporative Loss</span>
                       <span>Minimal (&lt;5%)</span>
                     </div>
                   </div>
                 </div>
              </div>
              
              <div className="space-y-12">
                <div>
                  <h3 className="text-lg font-bold text-white border-l-2 border-slate-700 pl-4">Environmental Advantage</h3>
                  <ul className="mt-6 space-y-4">
                    {[
                      'Elimination of tailings dams and associated failure risks.',
                      'No potential for acid rock drainage (ARD) into groundwater.',
                      'Massive reduction in freshwater withdrawal requirements.',
                      'Protection of local aquifers and downstream ecosystems.'
                    ].map((item) => (
                      <li key={item} className="flex items-start">
                        <span className="text-green-500 mr-3">✔</span>
                        <span className="text-slate-400">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                   <h3 className="text-lg font-bold text-white border-l-2 border-slate-700 pl-4">Regulatory Implications</h3>
                   <p className="mt-4 text-slate-400 leading-relaxed">
                     ZLD architecture fast-tracks permitting in water-scarce or environmentally sensitive jurisdictions. By removing the risk of effluent discharge, the burden of environmental impact assessment is significantly lowered.
                   </p>
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
