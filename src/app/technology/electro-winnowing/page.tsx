import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function ElectroWinnowingPage() {
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
              Electro-Winnowing Platform
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-400">
              A proprietary, non-chemical process stage driving high-efficiency metal recovery and separation without toxic reagents.
            </p>
          </div>
        </section>

        <section className="py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
              <div className="space-y-12">
                <div>
                  <h3 className="text-lg font-bold text-white border-l-2 border-slate-700 pl-4">The Process</h3>
                  <p className="mt-4 text-slate-400 leading-relaxed">
                    Unlike traditional electrowinning which often relies on aggressive acid mists, MineTeck's Electro-Winnowing utilizes advanced electrolytic cells designed to selectively target specific metal ions. This allows for the direct plating of high-purity metals from the pregnant solution.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white border-l-2 border-slate-700 pl-4">Efficiency Metrics</h3>
                  <p className="mt-2 text-xs italic text-slate-500">Note: Figures based on pilot validation data.</p>
                  <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2">
                    <div className="bg-slate-900/50 p-6 border border-slate-800">
                      <div className="text-3xl font-bold text-white">High</div>
                      <div className="mt-1 text-sm text-slate-400">Selectivity Ratio</div>
                    </div>
                    <div className="bg-slate-900/50 p-6 border border-slate-800">
                      <div className="text-3xl font-bold text-white">Low</div>
                      <div className="mt-1 text-sm text-slate-400">Energy Consumption</div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="space-y-12">
                 <div>
                  <h3 className="text-lg font-bold text-white border-l-2 border-slate-700 pl-4">Output Types</h3>
                   <ul className="mt-6 grid grid-cols-1 gap-4">
                    {['Gold (Au) Cathode', 'Silver (Ag) Precipitate', 'Copper (Cu) Sheet', 'Critical Mineral Concentrates'].map((item) => (
                      <li key={item} className="flex items-center p-4 bg-slate-900/30 border border-slate-800">
                        <div className="h-2 w-2 bg-slate-500 mr-4 rounded-full" />
                        <span className="text-slate-300">{item}</span>
                      </li>
                    ))}
                  </ul>
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
