import { Dumbbell } from 'lucide-react';

export function Footer() {
  return (
    <footer className="relative bg-brand-black border-t border-brand-gray-light">
      {/* CTA Banner */}
      <div className="gradient-red py-12 sm:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight mb-4">
            STOP WAITING. START TRAINING.
          </h3>
          <p className="text-red-100 text-lg mb-8 max-w-xl mx-auto">
            Join APEX Fitness today and get your first week free. No contracts. No excuses.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center justify-center bg-white text-brand-red font-bold text-sm uppercase tracking-wider px-10 py-4 rounded-sm hover:bg-gray-100 transition-all duration-300 hover:scale-105 hover:shadow-xl"
          >
            Claim Your Free Trial
          </a>
        </div>
      </div>

      {/* Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {/* Logo */}
          <div className="text-center md:text-left">
            <a href="#home" className="inline-flex items-center gap-2">
              <Dumbbell className="w-6 h-6 text-brand-red" />
              <span className="text-xl font-black tracking-tighter text-white">
                APEX<span className="text-brand-red">.</span>
              </span>
            </a>
            <p className="text-gray-500 text-sm mt-3">
              Forging champions since 2019.
            </p>
          </div>

          {/* Links */}
          <div className="flex justify-center gap-6">
            {['Home', 'About', 'Services', 'Gallery', 'Contact'].map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase().replace(' ', '')}`}
                className="text-gray-500 text-sm hover:text-brand-red transition-colors duration-200"
              >
                {link}
              </a>
            ))}
          </div>

          {/* Social */}
          <div className="flex justify-center md:justify-end gap-3">
            {['IG', 'FB', 'YT', 'TW'].map((social) => (
              <a
                key={social}
                href="#"
                className="w-10 h-10 bg-brand-gray border border-brand-gray-light rounded flex items-center justify-center text-gray-400 text-xs font-bold hover:bg-brand-red hover:border-brand-red hover:text-white transition-all duration-300"
              >
                {social}
              </a>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 pt-8 border-t border-brand-gray-light flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-gray-600 text-xs">
            © 2024 APEX Fitness. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-gray-600 text-xs hover:text-gray-400 transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-600 text-xs hover:text-gray-400 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
