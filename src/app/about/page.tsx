import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col bg-slate-950 font-sans text-slate-200">
      <Navbar />
      <main className="flex-grow">
        <section className="relative overflow-hidden border-b border-white/5 py-20 bg-slate-900/50">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-bold tracking-tighter text-white sm:text-5xl">
              About MineTeck
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-400">
              A systems engineering company designing permit-proven mineral recovery architecture.
            </p>
          </div>
        </section>

        <section className="py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
             <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
                <div className="space-y-12">
                   <div>
                      <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500 mb-4">Philosophy</h3>
                      <p className="text-2xl font-bold text-white leading-tight">
                        We prioritize engineering clarity, regulatory compliance, and operational safety over promotion.
                      </p>
                   </div>
                   
                   <div>
                     <h3 className="text-lg font-bold text-white border-l-2 border-slate-700 pl-4 mb-4">Engineering First</h3>
                     <p className="text-slate-400 leading-relaxed">
                       MineTeck was established to solve specific metallurgical inefficiencies in legacy mining. Our approach is rooted in industrial chemistry and mechanical engineering, ensuring that every deployment is technically sound and environmentally defensible.
                     </p>
                   </div>

                   <div>
                     <h3 className="text-lg font-bold text-white border-l-2 border-slate-700 pl-4 mb-4">Safety Culture</h3>
                     <p className="text-slate-400 leading-relaxed">
                       Our safety protocols meet global industrial standards. By automating chemical handling and containing processes within closed modules, we minimize operator risk.
                     </p>
                   </div>
                </div>

                <div className="glass-panel p-8">
                   <h3 className="text-lg font-bold text-white mb-8">Technical Leadership</h3>
                   <div className="space-y-8">
                      {[
                        { title: 'Chief Technology Officer', desc: 'PhD in Industrial Metallurgy. Specialist in non-toxic lixiviants.' },
                        { title: 'Head of Systems Engineering', desc: 'Expert in modular process plant architecture.' },
                        { title: 'Director of Environmental Compliance', desc: 'Former regulatory auditor for ZLD systems.' }
                      ].map((leader) => (
                        <div key={leader.title} className="flex flex-col">
                           <span className="font-bold text-white">{leader.title}</span>
                           <span className="text-sm text-slate-400">{leader.desc}</span>
                        </div>
                      ))}
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
