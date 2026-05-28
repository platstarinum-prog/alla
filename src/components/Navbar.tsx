import { Menu, X } from 'lucide-react';
import { useState } from 'react';

const navLinks = [
  { href: '#hero', label: 'Головна' },
  { href: '#about', label: 'Про мене' },
  { href: '#results', label: 'Результати' },
  { href: '#methods', label: 'Методична робота' },
  { href: '#contact', label: 'Контакти' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-uk-sky/20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#hero" className="text-xl font-bold text-uk-navy tracking-tight">
            Portfolio<span className="text-uk-red">.</span>
          </a>
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-uk-steel hover:text-uk-navy transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
          <button
            className="md:hidden p-2 text-uk-navy"
            onClick={() => setOpen(!open)}
            aria-label="Меню"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      {open && (
        <div className="md:hidden bg-white border-b border-uk-sky/20">
          <div className="px-4 py-4 space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="block text-sm font-medium text-uk-steel hover:text-uk-navy transition-colors"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
