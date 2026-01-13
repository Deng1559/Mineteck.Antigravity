import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function PartnersPage() {
  return (
    <div className="flex min-h-screen flex-col bg-slate-950 font-sans text-slate-200">
      <Navbar />
      <main className="flex-grow">
        <section className="border-b border-white/5 py-20 bg-slate-900/50">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-bold tracking-tighter text-white sm:text-5xl">
              Partners & Licensing
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-400">
              Enabling global deployment through verified operator and technology partnerships.
            </p>
          </div>
        </section>

        <section className="py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
               <div>
                  <h3 className="text-xl font-bold text-white mb-6">Engagement Models</h3>
                  <div className="space-y-6">
                    <div className="group border border-slate-800 p-6 hover:bg-slate-900/50 transition-colors">
                       <h4 className="text-lg font-bold text-white">Validation Partnerships</h4>
                       <p className="mt-2 text-slate-400 text-sm">Deploying the MRU to validate resource recoverability on legacy assets.</p>
                    </div>
                    <div className="group border border-slate-800 p-6 hover:bg-slate-900/50 transition-colors">
                       <h4 className="text-lg font-bold text-white">Operator Partnerships</h4>
                       <p className="mt-2 text-slate-400 text-sm">Certified operator program for engineering firms managing MineTeck plants.</p>
                    </div>
                    <div className="group border border-slate-800 p-6 hover:bg-slate-900/50 transition-colors">
                       <h4 className="text-lg font-bold text-white">Licensing Pathways</h4>
                       <p className="mt-2 text-slate-400 text-sm">Technology licensing available for specific jurisdictions and asset classes.</p>
                    </div>
                  </div>
               </div>

               <div className="flex items-center justify-center border border-slate-800 bg-slate-900/20 p-12">
                  <div className="text-center">
                    <h3 className="text-2xl font-bold text-white mb-6">Discuss Deployment</h3>
                    <p className="text-slate-400 mb-8 max-w-md mx-auto">
                      Engage with our engineering team regarding technology application for your site.
                    </p>
                    <Link href="/contact" className="btn-industrial">
                      Discuss Technology Deployment
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
