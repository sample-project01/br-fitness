import { Target, Users, Trophy, Flame } from 'lucide-react';
import { useInView } from '../hooks/useInView';

const features = [
  {
    icon: Target,
    title: 'Results-Driven',
    description: 'Every program is designed to deliver measurable, real-world results you can see and feel.',
  },
  {
    icon: Users,
    title: 'Strong Community',
    description: 'Train alongside like-minded individuals who push each other to be better every single day.',
  },
  {
    icon: Trophy,
    title: 'Elite Trainers',
    description: 'Our certified professionals bring years of competitive and coaching experience to your corner.',
  },
  {
    icon: Flame,
    title: 'Iron Discipline',
    description: 'We cultivate mental toughness and consistency — the real foundations of lasting transformation.',
  },
];

export function About() {
  const { ref, isInView } = useInView();

  return (
    <section id="about" className="relative bg-dark-gradient section-padding overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-brand-red/30 to-transparent" />
      <div className="absolute top-20 right-10 w-72 h-72 bg-brand-red/5 rounded-full blur-3xl" />

      <div ref={ref} className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className={`text-center mb-16 ${isInView ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <span className="text-brand-red font-bold text-sm uppercase tracking-[0.3em]">About Us</span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white mt-3">
            MORE THAN A GYM<span className="text-brand-red">.</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto mt-6 leading-relaxed">
            BR Fitness isn't just a place to work out — it's where champions are forged. Built for those who refuse to settle, 
            our state-of-the-art facility and world-class training team are committed to one thing: <strong className="text-white">your transformation.</strong>
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className={`card-hover bg-brand-gray/50 border border-brand-gray-light rounded-lg p-8 text-center group ${
                  isInView ? 'animate-fade-in-up' : 'opacity-0'
                }`}
                style={{ animationDelay: `${(index + 1) * 0.15}s` }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-brand-red/10 border border-brand-red/20 rounded-lg mb-6 transition-all duration-300 group-hover:bg-brand-red group-hover:border-brand-red group-hover:scale-110">
                  <Icon className="w-7 h-7 text-brand-red transition-colors duration-300 group-hover:text-white" />
                </div>
                <h3 className="text-lg font-bold text-white mb-3 uppercase tracking-wide">{feature.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{feature.description}</p>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className={`text-center mt-14 ${isInView ? 'animate-fade-in-up delay-600' : 'opacity-0'}`}>
          <a
            href="#services"
            className="inline-flex items-center gap-2 text-brand-red font-bold text-sm uppercase tracking-wider hover:text-brand-red-light transition-colors group"
          >
            See What We Offer
            <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
