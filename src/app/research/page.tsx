import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function ResearchPage() {
  return (
    <div className="flex min-h-screen flex-col bg-slate-950 font-sans text-slate-200">
      <Navbar />
      <main className="flex-grow">
        <section className="border-b border-white/5 py-20 bg-slate-900/50">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-bold tracking-tighter text-white sm:text-5xl">
              R&D & Innovation
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-400">
              Long-term defensibility through continuous improvement. Our R&D focuses on modular iteration and feedstock adaptability.
            </p>
          </div>
        </section>

        <section className="py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
               <div>
                  <h3 className="text-xl font-bold text-white mb-6">Innovation Roadmap</h3>
                  <div className="space-y-8 border-l border-slate-800 pl-8 relative">
                     {[
                       { title: 'Continuous Improvement', desc: 'Iterative refinement of separation algorithms based on live field data.' },
                       { title: 'Feedstock Adaptability', desc: 'Expanding the range of processable materials including complex refractory ores.' },
                       { title: 'Modular Iteration', desc: 'Engineering next-generation modules for higher throughput-to-footprint ratios.' }
                     ].map((item, index) => (
                       <div key={item.title} className="relative">
                         <div className="absolute -left-[37px] top-1.5 h-4 w-4 rounded-full border-2 border-slate-700 bg-slate-950" />
                         <h4 className="text-lg font-bold text-white">{item.title}</h4>
                         <p className="mt-2 text-slate-400">{item.desc}</p>
                       </div>
                     ))}
                  </div>
               </div>

               <div className="glass-panel p-8">
                 <h3 className="text-lg font-bold text-white mb-6">Academic Collaboration</h3>
                 <p className="text-slate-400 leading-relaxed mb-8">
                   MineTeck collaborates with leading universities and metallurgical research institutes to independently validate our recovery curves and long-term environmental performance.
                 </p>
                 <div className="border border-slate-800 bg-slate-950 p-6 text-center">
                    <span className="text-slate-600 text-xs uppercase tracking-widest">Academic Partners Placeholder</span>
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
