import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function ProjectsPage() {
  const projects = [
    {
      name: 'Andean Modular Unit A1',
      location: 'Peru',
      status: 'Operational',
      modules: ['MRU', 'Electro-Winnowing'],
      type: 'Legacy Tailings',
    },
    {
      name: 'Nevada Reclamation Pilot',
      location: 'USA',
      status: 'Pilot',
      modules: ['MRU', 'ZLD'],
      type: 'Oxide Dump Ore',
    },
    {
      name: 'Kalgoorlie Feasibility',
      location: 'Australia',
      status: 'Planned',
      modules: ['Full Circuit', 'ZLD'],
      type: 'Tailings Retreatment',
    },
  ];

  return (
    <div className="flex min-h-screen flex-col bg-slate-950 font-sans text-slate-200">
      <Navbar />
      <main className="flex-grow">
        <section className="relative overflow-hidden border-b border-white/5 py-20 bg-slate-900/50">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-bold tracking-tighter text-white sm:text-5xl">
              Projects
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-400">
              Demonstrating commercial execution capability through deployed units and feasibility studies.
            </p>
          </div>
        </section>

        <section className="py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            {/* Table Header */}
            <div className="hidden md:grid grid-cols-5 gap-4 border-b border-slate-700 pb-4 text-xs font-semibold uppercase tracking-widest text-slate-500 mb-6">
              <div className="col-span-2">Project Name</div>
              <div>Location</div>
              <div>Status</div>
              <div>Modules Deployed</div>
            </div>

            {/* Project Rows */}
            <div className="space-y-4">
              {projects.map((project) => (
                <div key={project.name} className="group grid grid-cols-1 md:grid-cols-5 gap-4 rounded-sm border border-slate-800 bg-slate-900/30 p-6 transition-all hover:bg-slate-800 hover:border-slate-600">
                  <div className="col-span-2">
                    <h3 className="text-lg font-bold text-white mb-1 group-hover:text-blue-200 transition-colors">{project.name}</h3>
                    <div className="text-xs text-slate-500 uppercase tracking-wider">{project.type}</div>
                  </div>
                  <div className="flex items-center text-slate-400">
                    <span className="md:hidden text-xs font-semibold uppercase tracking-widest text-slate-500 mr-2">Location:</span>
                    {project.location}
                  </div>
                  <div className="flex items-center">
                     <span className="md:hidden text-xs font-semibold uppercase tracking-widest text-slate-500 mr-2">Status:</span>
                     <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border
                       ${project.status === 'Operational' ? 'bg-green-900/30 text-green-400 border-green-800' :
                         project.status === 'Pilot' ? 'bg-blue-900/30 text-blue-400 border-blue-800' :
                         'bg-slate-800 text-slate-400 border-slate-700'}`}>
                       {project.status}
                     </span>
                  </div>
                  <div className="flex flex-wrap gap-2 items-center">
                    <span className="md:hidden text-xs font-semibold uppercase tracking-widest text-slate-500 mr-2">Modules:</span>
                    {project.modules.map((mod) => (
                      <span key={mod} className="text-xs text-slate-300 bg-slate-800 px-2 py-1 rounded">{mod}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
