import { useState, useEffect } from 'react';
import { Menu, X, Dumbbell } from 'lucide-react';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About Us', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Contact Us', href: '#contact' },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? ' backdrop-blur-xs shadow-lg shadow-black/30 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2 group">
            <div className="relative">
              <Dumbbell className="w-8 h-8 text-brand-red transition-transform duration-300 group-hover:rotate-12" />
            </div>
            <span className="text-2xl font-black tracking-wide text-white spa">
              BR FITNESS<span className="text-brand-red">.</span>
            </span>
          </a>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="relative px-4 py-2 text-sm font-semibold uppercase tracking-wider text-gray-300 hover:text-white transition-colors duration-300 group"
              >
                {link.label}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-brand-red transition-all duration-300 group-hover:w-3/4" />
              </a>
            ))}
          </div>

          {/* CTA Button Desktop */}
          <a
            href="#contact"
            className="hidden md:inline-flex gradient-red gradient-red-hover text-white font-bold text-sm uppercase tracking-wider px-6 py-2.5 rounded-sm transition-all duration-300 hover:shadow-lg hover:shadow-red-900/40"
          >
            Join Now
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white p-2 hover:text-brand-red transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${
            isOpen ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="bg-brand-dark/95 backdrop-blur-md rounded-lg border border-brand-gray-light p-4 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-4 py-3 text-sm font-semibold uppercase tracking-wider text-gray-300 hover:text-white hover:bg-brand-gray-light rounded transition-all duration-200"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="block text-center gradient-red text-white font-bold text-sm uppercase tracking-wider px-6 py-3 rounded mt-3"
            >
              Join Now
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
