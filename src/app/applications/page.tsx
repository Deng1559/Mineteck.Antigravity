import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function ApplicationsPage() {
  const applications = [
    {
      id: 'legacy',
      title: 'Legacy Mine Reclamation',
      desc: 'Orphaned sites, tailings remediation, and environmental risk reduction via metal recovery.',
      href: '/applications/legacy-reclamation',
    },
    {
      id: 'tailings',
      title: 'Tailings & Dump Ore',
      desc: 'Extracting value from low-grade materials using modular deployment.',
      href: '/applications/tailings',
    },
    {
      id: 'urban',
      title: 'Secondary / Urban Feedstocks',
      desc: 'Capabilities for processing electronics and industrial waste streams (Reference Only).',
      href: '/applications/urban-feedstocks',
    },
  ];

  return (
    <div className="flex min-h-screen flex-col bg-slate-950 font-sans text-slate-200">
      <Navbar />
      <main className="flex-grow">
        <section className="relative overflow-hidden border-b border-white/5 py-20 bg-slate-900/50">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-bold tracking-tighter text-white sm:text-5xl">
              Application Domains
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-400">
              MineTeck’s technology platform is designed for diverse feedstock environments. We explain where the technology applies, focusing on technical fit and environmental recovery.
            </p>
          </div>
        </section>

        <section className="py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
             <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
              {applications.map((app) => (
                <Link key={app.id} href={app.href} className="group flex flex-col justify-between rounded-sm border border-slate-800 bg-slate-900/50 p-8 transition-all hover:border-slate-600 hover:bg-slate-800">
                  <div>
                    <h2 className="text-xl font-bold text-white group-hover:text-blue-200 transition-colors">{app.title}</h2>
                    <p className="mt-4 text-sm leading-relaxed text-slate-400">{app.desc}</p>
                  </div>
                   <div className="mt-8 flex items-center text-xs font-semibold uppercase tracking-widest text-slate-500 group-hover:text-white transition-colors">
                    View Application <span className="ml-2">→</span>
                  </div>
                </Link>
              ))}
            </div>
             
             <div className="mt-16 rounded-sm border border-slate-800 p-8 bg-slate-900/20">
                <h3 className="text-lg font-bold text-white mb-4">Multi-metal Recovery Capabilities</h3>
                <p className="text-slate-400 leading-relaxed max-w-3xl">
                  Across all applications, our platform is optimized for the simultaneous recovery of precious metals (Au, Ag, PGM) and critical base metals (Cu, Ni, Co) in a single pass.
                </p>
             </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
