import Link from 'next/link';

const primaryNav = [
  { name: 'Technology', href: '/technology' },
  { name: 'Applications', href: '/applications' },
  { name: 'Projects', href: '/projects' },
  { name: 'R&D', href: '/research' },
  { name: 'Environmental Compliance', href: '/compliance' },
  { name: 'Partners', href: '/partners' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
];

const secondaryNav = [
  { name: 'Investor Access', href: '#', external: true },
  { name: 'Capital & Development', href: '#', external: true },
];

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full border-b border-white/5 bg-slate-950/80 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <span className="text-xl font-bold tracking-tighter text-white">MINETECK</span>
            </Link>
          </div>
          
          <div className="hidden md:block">
            <div className="flex items-center space-x-6">
              {primaryNav.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-xs font-medium uppercase tracking-widest text-slate-400 transition-colors hover:text-white"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          <div className="hidden md:block">
            <div className="flex items-center space-x-4">
              {secondaryNav.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-[10px] font-semibold uppercase tracking-widest text-slate-500 transition-colors hover:text-slate-300 border border-slate-800 px-3 py-1 rounded-sm"
                >
                  {item.name} →
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
