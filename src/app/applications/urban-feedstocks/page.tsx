import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function UrbanFeedstocksPage() {
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
              Secondary / Urban Feedstocks
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-400">
              Reference-level capabilities for electronics and industrial waste stream processing.
            </p>
          </div>
        </section>

        <section className="py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
              <div className="space-y-12">
                <div>
                  <h3 className="text-lg font-bold text-white border-l-2 border-slate-700 pl-4">Overview</h3>
                  <p className="mt-4 text-slate-400 leading-relaxed">
                    While our primary focus is industrial mineral recovery, the MineTeck platform is chemically compatible with high-grade secondary feedstocks, including e-waste and industrial catalysts.
                  </p>
                </div>
                
                <div className="p-6 border border-slate-800 bg-slate-900/30">
                  <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-2">Note on ESG & Consumer Applications</h4>
                  <p className="text-sm text-slate-500 leading-relaxed">
                    For information regarding consumer recycling programs, circular economy initiatives, and ESG storytelling related to urban mining, please refer to our dedicated microsite.
                  </p>
                  <div className="mt-6">
                    <a href="#" className="btn-industrial-outline text-xs">
                      Visit Green Gold™ Microsite (External)
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="flex items-center justify-center border border-slate-800 bg-slate-900/20 h-64 lg:h-auto">
                 <span className="text-slate-600 text-sm uppercase tracking-widest">Reference Section Only</span>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
