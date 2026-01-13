import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="mt-auto border-t border-white/5 bg-slate-950 py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-4">
          <div className="col-span-2">
            <span className="text-xl font-bold tracking-tighter text-white">MINETECK</span>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-slate-500">
              Proprietary zero-waste mineral recovery systems. Engineering-led technology platform for modular, scalable deployment.
            </p>
          </div>
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-white">Resources</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link href="/technology" className="text-sm text-slate-500 hover:text-white transition-colors">
                  Technology Stack
                </Link>
              </li>
              <li>
                <Link href="/compliance" className="text-sm text-slate-500 hover:text-white transition-colors">
                  Regulatory Framework
                </Link>
              </li>
              <li>
                <Link href="/projects" className="text-sm text-slate-500 hover:text-white transition-colors">
                  Operational Projects
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-white">Legal</h3>
            <ul className="mt-4 space-y-2 text-sm text-slate-500">
              <li>Legal Notice</li>
              <li>IP & Patent Notice</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-white/5 pt-8 text-center text-[10px] font-medium uppercase tracking-widest text-slate-600">
          © {new Date().getFullYear()} MineTeck Technology Platform. All rights reserved. 
          <span className="ml-4">Investor Portal (Qualified Investors Only)</span>
        </div>
      </div>
    </footer>
  );
}
