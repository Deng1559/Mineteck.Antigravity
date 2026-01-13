import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function EnvironmentalPage() {
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
              Environmental Controls
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-400">
              Tier-1 engineering controls for dust, air, and waste management, designed to meet or exceed the strictest global regulatory standards.
            </p>
          </div>
        </section>

        <section className="py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
              <div className="glass-panel p-8">
                <h3 className="text-lg font-bold text-white mb-4">Dust Control</h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  Negative pressure containment in all crushing and grinding modules. High-efficiency baghouses and misting systems preventing fugitive dust emissions.
                </p>
              </div>
              <div className="glass-panel p-8">
                <h3 className="text-lg font-bold text-white mb-4">Air Quality</h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  Scrubbers and active carbon filters treat all off-gasses. Continuous emission monitoring systems (CEMS) ensure real-time compliance reporting.
                </p>
              </div>
              <div className="glass-panel p-8">
                <h3 className="text-lg font-bold text-white mb-4">Water Protection</h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  Double-lined containment, leak detection sensors, and the ZLD closed-loop architecture essentially eliminate the risk of groundwater contamination.
                </p>
              </div>
              <div className="glass-panel p-8">
               <h3 className="text-lg font-bold text-white mb-4">Waste Elimination</h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  Dry-stackable benign tailings. By removing toxic reagents from the chemistry, the final waste product is chemically stable and suitable for backfill.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
