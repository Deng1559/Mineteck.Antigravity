import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function CompliancePage() {
  return (
    <div className="flex min-h-screen flex-col bg-slate-950 font-sans text-slate-200">
      <Navbar />
      <main className="flex-grow">
        <section className="border-b border-white/5 py-20 bg-slate-900/50">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-bold tracking-tighter text-white sm:text-5xl">
              Environmental & Regulatory Framework
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-400">
              MineTeck systems are designed for permitting, not retrofitted to it. We provide regulators with a predictable, safe, and easily auditable processing environment validated through rigorous standard testing protocols.
            </p>
          </div>
        </section>

        <section className="py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
             <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4 mb-20">
              {[
                { title: 'Design for Permitting', desc: 'Pre-engineered compliance with global effluent standards. Architecture supports rapid environmental impact assessment.' },
                { title: 'Non-Toxic Validation', desc: 'Process chemistry eliminates cyanide and strong acids, ensuring benign residual output.' },
                { title: 'Zero Liquid Discharge', desc: 'Closed-loop water balance prevents effluent discharge, simplifying water quality permitting.' },
                { title: 'Reporting Readiness', desc: 'Automated generation of compliance data for automated regulatory reporting.' },
              ].map((item) => (
                <div key={item.title} className="glass-panel p-8">
                   <div className="h-1 w-8 bg-slate-500 mb-6" />
                   <h3 className="text-lg font-bold text-white mb-4">{item.title}</h3>
                   <p className="text-sm text-slate-400 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
              <div className="glass-panel p-10">
                <h3 className="text-xl font-bold text-white mb-6">Testing & Validation Protocols</h3>
                <p className="text-slate-400 mb-8 text-sm">
                  MineTeck residuals and process waters undergo standard regulatory leachability and toxicity testing to confirm stability.
                </p>
                <ul className="space-y-4">
                  {[
                    { code: 'TCLP', name: 'Toxicity Characteristic Leaching Procedure' },
                    { code: 'SPLP', name: 'Synthetic Precipitation Leaching Procedure' },
                    { code: 'WET', name: 'Waste Extraction Test' },
                    { code: 'ABA', name: 'Acid Based Accounting (Net Neutralizer)' }
                  ].map((proto) => (
                    <li key={proto.code} className="flex border-b border-slate-800 pb-3 last:border-0 last:pb-0">
                      <span className="w-20 font-mono text-sm font-bold text-white">{proto.code}</span>
                      <span className="text-sm text-slate-400">{proto.name}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-12">
                 <div>
                   <h3 className="text-xl font-bold text-white mb-4">Operational Safety Compliance</h3>
                   <div className="p-6 border border-slate-800 bg-slate-900/30">
                      <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-2">MSHA / OSHA Standards</h4>
                      <p className="text-sm text-slate-400 leading-relaxed">
                        All modular units are engineered to meet or exceed Mine Safety and Health Administration (MSHA) and Occupational Safety and Health Administration (OSHA) exposure limits.
                      </p>
                      <ul className="mt-4 space-y-2 text-sm text-slate-500">
                        <li>• Automated chemical handling (No direct contact)</li>
                        <li>• Dust containment systems (Silica/PM10 compliance)</li>
                        <li>• Noise dampening enclosures</li>
                      </ul>
                   </div>
                 </div>

                 <div className="rounded-sm bg-slate-900 border border-slate-800 p-8">
                    <h3 className="text-lg font-bold text-white mb-4">Regulator Support</h3>
                    <p className="text-slate-400 text-sm mb-6">
                      We provide technical staff to assist agency review teams in understanding the ZLD and non-toxic architecture, accelerating the permitting timeline.
                    </p>
                    <Link href="/contact" className="btn-industrial w-full text-center">
                       Request Compliance Data
                    </Link>
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
