import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function TechnologyPage() {
  const technologies = [
    {
      id: 'mru',
      title: 'Mobile Research Unit (MRU)',
      desc: 'The backbone of our validation process. A 7-trailer modular system for on-site metallurgical fingerprinting.',
      href: '/technology/mru',
    },
    {
      id: 'electro-winnowing',
      title: 'Electro-Winnowing Platform',
      desc: 'Proprietary non-chemical process stage for high-efficiency metal recovery and separation.',
      href: '/technology/electro-winnowing',
    },
    {
      id: 'zld',
      title: 'Zero Liquid Discharge (ZLD)',
      desc: 'Closed-loop water handling system ensuring no liquid waste leaves the processing circuit.',
      href: '/technology/zld',
    },
    {
      id: 'separation',
      title: 'Material Separation',
      desc: 'Advanced mechanical and electro-separation techniques for complex feedstock variability.',
      href: '/technology/separation',
    },
    {
      id: 'environmental',
      title: 'Environmental Controls',
      desc: 'Comprehensive dust, air, and waste elimination systems designed for regulatory compliance.',
      href: '/technology/environmental',
    },
  ];

  return (
    <div className="flex min-h-screen flex-col bg-slate-950 font-sans text-slate-200">
      <Navbar />
      <main className="flex-grow">
        <section className="relative overflow-hidden border-b border-white/5 py-20 bg-slate-900/50">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-bold tracking-tighter text-white sm:text-5xl">
              Technology Stack
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-400">
              A systems engineering approach to mineral recovery. MineTeck requires no cyanides, mercury, or strong acids, and operates under strict Zero Liquid Discharge (ZLD) principles.
            </p>
          </div>
        </section>

        <section className="py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-16 rounded-sm bg-slate-900/30 border border-slate-800 p-8">
               <h2 className="text-lg font-bold text-white mb-4">System-Level Overview</h2>
               <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                 <div>
                   <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-500 mb-2">Modular Architecture</h3>
                   <p className="text-sm text-slate-400">Standardized units designed for transport, rapid assembly, and scalable throughput.</p>
                 </div>
                 <div>
                   <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-500 mb-2">Validation-First</h3>
                   <p className="text-sm text-slate-400">De-risking projects through on-site piloting with the MRU before capital commitment.</p>
                 </div>
                 <div>
                   <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-500 mb-2">Permit-Conscious</h3>
                   <p className="text-sm text-slate-400">Engineering controls designed specifically to meet global environmental standards.</p>
                 </div>
               </div>
            </div>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {technologies.map((tech) => (
                <Link key={tech.id} href={tech.href} className="group flex flex-col justify-between rounded-sm border border-slate-800 bg-slate-900/50 p-8 transition-all hover:border-slate-600 hover:bg-slate-800">
                  <div>
                    <h2 className="text-xl font-bold text-white group-hover:text-blue-200 transition-colors">{tech.title}</h2>
                    <p className="mt-4 text-sm leading-relaxed text-slate-400">{tech.desc}</p>
                  </div>
                  <div className="mt-8 flex items-center text-xs font-semibold uppercase tracking-widest text-slate-500 group-hover:text-white transition-colors">
                    View Module Details <span className="ml-2">→</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
