import { ChevronDown } from 'lucide-react';

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-brand-black">
        {/* Grid pattern overlay */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
          }}
        />
        {/* Red gradient accent */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-red-900/20 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-brand-black to-transparent" />
        {/* Decorative red line */}
        <div className="absolute top-1/4 right-0 w-1 h-1/2 bg-gradient-to-b from-transparent via-brand-red to-transparent opacity-40" />
        {/* Large background number */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 text-[30rem] font-black text-white/2 leading-none select-none hidden lg:block pointer-events-none">
          BR
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center lg:text-left w-full mt-20">
        <div className="lg:max-w-3xl">
          {/* Tag */}
          <div className="animate-fade-in-up inline-flex items-center gap-2 bg-brand-red/10 border border-brand-red/30 rounded-full px-4 py-1.5 mb-5">
            <span className="w-2 h-2 bg-brand-red rounded-full animate-pulse" />
            <span className="text-xs font-semibold uppercase tracking-widest text-brand-red">
              Now Open — Limited Founding Memberships
            </span>
          </div>

          {/* Headline */}
          <h1 className="animate-fade-in-up delay-100 text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black leading-[0.9] tracking-tighter text-white mb-6">
            FORGE YOUR
            <br />
            <span className="text-gradient-red">STRONGEST</span>
            <br />
            SELF<span className="text-brand-red">.</span>
          </h1>

          {/* Subheadline */}
          <p className="animate-fade-in-up delay-200 text-lg sm:text-xl text-gray-400 max-w-xl mb-10 leading-relaxed lg:text-left text-center mx-auto lg:mx-0">
            Where discipline meets dedication. Transform your body, sharpen your mind, and push beyond every limit you thought you had.
          </p>

          {/* CTA Buttons */}
          <div className="animate-fade-in-up delay-300 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <a
              href="#contact"
              className="gradient-red gradient-red-hover animate-pulse-glow text-white font-bold text-base uppercase tracking-wider px-10 py-4 rounded-sm transition-all duration-300 hover:scale-105 inline-flex items-center justify-center gap-2"
            >
              Start Your Transformation
              <svg className="w-5 h-5" fill="none" viewBox="0 0 
               24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
            <a
              href="https://wa.me/916260564643?text=Hello%20I%20am%20interested"
              target='_blank'
              className="border-2 border-brand-gray-light text-white font-bold text-base uppercase tracking-wider px-10 py-4 rounded-sm transition-all duration-300 hover:border-brand-red hover:bg-brand-red/5 inline-flex items-center justify-center"
            >
              Chat On WhatsApp
            </a>
          </div>

          {/* Stats */}
          <div className="animate-fade-in-up delay-500 mt-16 flex flex-wrap gap-8 sm:gap-12 justify-center lg:justify-start">
            {[
              { number: '5000+', label: 'Active Members' },
              { number: '50+', label: 'Expert Trainers' },
              { number: '24/7', label: 'Gym Access' },
            ].map((stat) => (
              <div key={stat.label} className="text-center lg:text-left">
                <div className="text-3xl sm:text-4xl font-black text-white">{stat.number}</div>
                <div className="text-xs uppercase tracking-widest text-gray-500 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-6 h-6 text-gray-500" />
      </div>
    </section>
  );
}
