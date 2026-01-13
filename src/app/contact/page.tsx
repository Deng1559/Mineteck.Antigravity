import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function ContactPage() {
  return (
    <div className="flex min-h-screen flex-col bg-slate-950 font-sans text-slate-200">
      <Navbar />
      <main className="flex-grow">
        <section className="relative overflow-hidden border-b border-white/5 py-20 bg-slate-900/50">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-bold tracking-tighter text-white sm:text-5xl">
              Contact MineTeck
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-400">
              Connect with our engineering and deployment teams.
            </p>
          </div>
        </section>

        <section className="py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
             <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
                <div>
                   <form className="space-y-6">
                      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                        <div>
                          <label htmlFor="first-name" className="block text-sm font-medium text-slate-300">First Name</label>
                          <input type="text" id="first-name" className="mt-2 block w-full rounded-sm border-slate-700 bg-slate-900 text-white placeholder-slate-500 focus:border-slate-500 focus:ring-slate-500 sm:text-sm p-3" />
                        </div>
                        <div>
                          <label htmlFor="last-name" className="block text-sm font-medium text-slate-300">Last Name</label>
                          <input type="text" id="last-name" className="mt-2 block w-full rounded-sm border-slate-700 bg-slate-900 text-white placeholder-slate-500 focus:border-slate-500 focus:ring-slate-500 sm:text-sm p-3" />
                        </div>
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-slate-300">Email Address</label>
                        <input type="email" id="email" className="mt-2 block w-full rounded-sm border-slate-700 bg-slate-900 text-white placeholder-slate-500 focus:border-slate-500 focus:ring-slate-500 sm:text-sm p-3" />
                      </div>
                      <div>
                        <label htmlFor="inquiry-type" className="block text-sm font-medium text-slate-300">Inquiry Type</label>
                        <select id="inquiry-type" className="mt-2 block w-full rounded-sm border-slate-700 bg-slate-900 text-white focus:border-slate-500 focus:ring-slate-500 sm:text-sm p-3">
                           <option>Technology Inquiry</option>
                           <option>Project / Asset Assessment</option>
                           <option>Regulatory / Compliance</option>
                           <option>Other</option>
                        </select>
                      </div>
                      <div>
                        <label htmlFor="message" className="block text-sm font-medium text-slate-300">Message</label>
                        <textarea id="message" rows={4} className="mt-2 block w-full rounded-sm border-slate-700 bg-slate-900 text-white placeholder-slate-500 focus:border-slate-500 focus:ring-slate-500 sm:text-sm p-3"></textarea>
                      </div>
                      <div>
                        <button type="submit" className="btn-industrial w-full justify-center">
                          Send Message
                        </button>
                      </div>
                   </form>
                </div>

                <div className="space-y-12">
                   <div className="glass-panel p-8">
                     <h3 className="text-lg font-bold text-white mb-4">Direct Inquiries</h3>
                     <div className="space-y-4 text-sm text-slate-400">
                        <p><span className="font-bold text-white block">General Inquiries:</span> info@mineteck.com</p>
                        <p><span className="font-bold text-white block">Engineering Team:</span> engineering@mineteck.com</p>
                     </div>
                   </div>

                   <div className="border border-slate-800 bg-slate-900/30 p-8">
                     <h3 className="text-sm font-bold text-white mb-2 uppercase tracking-wider">Investor Relations</h3>
                     <p className="text-sm text-slate-500 mb-4">
                       MineTeck does not handle investment inquiries directly. Please visit the Investor Portal.
                     </p>
                     <a href="#" className="btn-industrial-outline w-full justify-center text-xs">
                       Go to Investor Portal (External)
                     </a>
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
