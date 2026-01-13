import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function SeparationPage() {
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
              Material Separation & Concentration
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-400">
              Advanced mechanical and electro-separation techniques enabling the processing of complex, low-grade, and variable feedstocks.
            </p>
          </div>
        </section>

        <section className="py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
              <div className="space-y-12">
                <div>
                  <h3 className="text-lg font-bold text-white border-l-2 border-slate-700 pl-4">Mechanical & Electro-Separation</h3>
                  <p className="mt-4 text-slate-400 leading-relaxed">
                    Integration of density-based gravity separation with advanced electrostatic sorting allows MineTeck to pre-concentrate ore before it enters the chemical processing stage. This reduces mass load, energy usage, and reagent consumption.
                  </p>
                </div>
                <div>
                   <h3 className="text-lg font-bold text-white border-l-2 border-slate-700 pl-4">Concentrate Preparation</h3>
                   <p className="mt-4 text-slate-400 leading-relaxed">
                     Feedstock is conditioned to optimal particle size and chemical reactivity. Our automated control systems adjust grinding and classification parameters in real-time to maintain steady-state throughput despite variability in input material hardness or grade.
                   </p>
                </div>
              </div>
              
              <div className="space-y-12">
                <div>
                  <h3 className="text-lg font-bold text-white border-l-2 border-slate-700 pl-4">Feedstock Variability Handling</h3>
                  <p className="mt-4 text-slate-400 leading-relaxed mb-6">
                    Designed to handle diverse input streams without retooling:
                  </p>
                   <div className="grid grid-cols-1 gap-4">
                     {[
                       { type: 'Run-of-Mine Ore', note: 'Standard crushing & screening circuit' },
                       { type: 'Tailings & Slurry', note: 'Direct feed hydro-cycloning' },
                       { type: 'Dump Material', note: 'Agglomeration and heap processing' },
                       { type: 'E-Waste / Urban', note: 'Hammer milling & separation (Reference)' }
                     ].map((feed) => (
                       <div key={feed.type} className="flex justify-between items-center p-4 border border-slate-800 bg-slate-900/30">
                         <span className="font-semibold text-white">{feed.type}</span>
                         <span className="text-xs uppercase tracking-wider text-slate-500">{feed.note}</span>
                       </div>
                     ))}
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
