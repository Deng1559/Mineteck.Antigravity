import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function MRUPage() {
  return (
    <div className="flex min-h-screen flex-col bg-slate-950 font-sans text-slate-200">
      <Navbar />
      <main className="flex-grow">
        {/* Module Header */}
        <section className="border-b border-white/5 py-20 bg-slate-900/50">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
             <div className="mb-8">
              <Link href="/technology" className="text-xs font-semibold uppercase tracking-widest text-slate-500 hover:text-white transition-colors">
                ← Back to Tech Stack
              </Link>
            </div>
            <h1 className="text-4xl font-bold tracking-tighter text-white sm:text-5xl">
              Mobile Research Unit (MRU)
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-400">
              A site-deployable validation and recovery platform. The MRU is engineered to perform metallurgical fingerprinting and validate recoverability before commercial scale, radically reducing capital and permitting risk.
            </p>
          </div>
        </section>

        {/* Content Details */}
        <section className="py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
              <div className="space-y-12">
                <div>
                  <h3 className="text-lg font-bold text-white border-l-2 border-slate-700 pl-4">Purpose: Risk Reduction</h3>
                  <p className="mt-4 text-slate-400 leading-relaxed">
                    The MRU exists to bridge the gap between bench-scale testing and commercial plant construction. By deploying a complete processing circuit to the site, MineTeck validates the process chemistry and economics on real-world variability, ensuring data-driven investment decisions.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white border-l-2 border-slate-700 pl-4">7-Trailer Modular Architecture</h3>
                  <div className="mt-4 space-y-0.5">
                    {[
                      { num: '01', name: 'Material Intake & Characterization' },
                      { num: '02', name: 'Size Reduction & Conditioning' },
                      { num: '03-05', name: 'Extraction & Separation Circuits' },
                      { num: '06', name: 'Zero Liquid Discharge (ZLD) Module' },
                      { num: '07', name: 'Output Handling & Data Capture' }
                    ].map((module) => (
                      <div key={module.num} className="flex items-center p-3 bg-slate-900/30 border border-slate-800">
                         <span className="w-16 font-mono text-sm text-slate-500">{module.num}</span>
                         <span className="text-sm font-medium text-slate-300">{module.name}</span>
                      </div>
                    ))}
                  </div>
                  <p className="mt-6 text-xs italic text-slate-500 border-t border-slate-800 pt-4">
                    Note: Exact chemistry and algorithms remain proprietary and must not be disclosed.
                  </p>
                </div>
              </div>
              
              <div className="space-y-12">
                 <div className="glass-panel p-8">
                  <h3 className="text-sm font-semibold uppercase tracking-widest text-slate-500">Validation Capabilities</h3>
                  <div className="mt-6 space-y-4">
                     <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                       <span className="text-white">Deployment Type</span>
                       <span className="text-slate-400 font-mono">Temporary / Mobile</span>
                     </div>
                     <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                       <span className="text-white">Primary Function</span>
                       <span className="text-slate-400 font-mono">Pilot Validation</span>
                     </div>
                     <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                       <span className="text-white">Regulatory Status</span>
                       <span className="text-slate-400 font-mono">Permit-Proven</span>
                     </div>
                  </div>
                 </div>

                 <div>
                  <h3 className="text-lg font-bold text-white border-l-2 border-slate-700 pl-4">Regulatory Confidence</h3>
                  <p className="mt-4 text-slate-400 leading-relaxed">
                    The MRU demonstrates the safety of the process to local stakeholders. Its non-permanent nature and ZLD footprint allow regulators to observe the system's environmental performance firsthand, building trust for full-scale permitting.
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
