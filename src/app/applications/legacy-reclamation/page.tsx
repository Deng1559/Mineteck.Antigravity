import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function LegacyReclamationPage() {
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
              Legacy Mine Reclamation
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-400">
              Transforming environmental liabilities into assets. Remediating orphaned sites and reducing long-term risk via economic metal recovery.
            </p>
          </div>
        </section>

        <section className="py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
              <div className="space-y-12">
                <div>
                  <h3 className="text-lg font-bold text-white border-l-2 border-slate-700 pl-4">Orphaned Sites & Liabilities</h3>
                  <p className="mt-4 text-slate-400 leading-relaxed">
                    Thousands of abandoned mine sites globally pose significant environmental hazards. Traditional reclamation is a cost center for governments and communities. MineTeck provides a technology solution that funds the cleanup through the recovery of residual metals.
                  </p>
                </div>
                <div>
                   <h3 className="text-lg font-bold text-white border-l-2 border-slate-700 pl-4">Tailings Remediation</h3>
                   <p className="mt-4 text-slate-400 leading-relaxed">
                     We re-process historical tailings, removing the heavy metals and sulfides that cause acid mine drainage. The resulting waste product is benign, stackable, and suitable for permanent encapsulation or vegetation.
                   </p>
                </div>
              </div>
              
              <div className="space-y-12">
                <div className="glass-panel p-8">
                  <h3 className="text-lg font-bold text-white mb-6">Environmental Risk Reduction</h3>
                  <ul className="space-y-4">
                     {[
                       'Stabilization of reactive sulfides.',
                       'Removal of dissolved heavy metals from site water.',
                       'Physical consolidation of dispersed waste.',
                       'Restoration of site to pre-mining baseline conditions.'
                     ].map((item) => (
                       <li key={item} className="flex items-start text-sm text-slate-300">
                         <span className="text-slate-500 mr-3">►</span>
                         {item}
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
