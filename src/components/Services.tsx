import { Dumbbell, TrendingDown, UserCheck, Heart, Zap } from 'lucide-react';
import { useInView } from '../hooks/useInView';

const services = [
  {
    icon: Dumbbell,
    title: 'Strength Training',
    description: 'Build raw power with our heavy-duty free weights, racks, and progressive overload programs designed by competition-level lifters.',
    tag: 'Most Popular',
  },
  {
    icon: TrendingDown,
    title: 'Weight Loss',
    description: 'Structured fat-burning programs combining HIIT, nutrition coaching, and accountability tracking to melt away excess weight for good.',
    tag: null,
  },
  {
    icon: UserCheck,
    title: 'Personal Training',
    description: 'One-on-one sessions with certified trainers who build customized plans around your goals, body type, and schedule.',
    tag: 'Premium',
  },
  {
    icon: Heart,
    title: 'Cardio & Conditioning',
    description: 'Elevate your endurance and athletic performance with heart-pumping classes, treadmills, rowers, and assault bikes.',
    tag: null,
  },
  {
    icon: Zap,
    title: 'Body Transformation',
    description: 'Our signature 12-week transformation program — complete body recomposition with training, nutrition, and weekly check-ins.',
    tag: 'Signature',
  },
];

export function Services() {
  const { ref, isInView } = useInView();

  return (
    <section id="services" className="relative bg-brand-black section-padding overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-brand-gray-light to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-brand-gray-light to-transparent" />
      <div className="absolute top-40 left-10 w-96 h-96 bg-brand-red/3 rounded-full blur-3xl" />

      <div ref={ref} className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className={`text-center mb-16 ${isInView ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <span className="text-brand-red font-bold text-sm uppercase tracking-[0.3em]">Our Services</span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white mt-3">
            TRAIN WITH PURPOSE<span className="text-brand-red">.</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto mt-6 leading-relaxed">
            Whether you're building muscle, burning fat, or preparing for competition — we've got the tools, trainers, and programs to get you there.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className={`card-hover relative bg-brand-dark border border-brand-gray-light rounded-lg p-8 group overflow-hidden ${
                  index === 4 ? 'md:col-span-2 lg:col-span-1' : ''
                } ${isInView ? 'animate-fade-in-up' : 'opacity-0'}`}
                style={{ animationDelay: `${(index + 1) * 0.12}s` }}
              >
                {/* Hover gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-brand-red/0 to-brand-red/0 group-hover:from-brand-red/5 group-hover:to-transparent transition-all duration-500 rounded-lg" />

                {/* Tag */}
                {service.tag && (
                  <div className="absolute top-4 right-4">
                    <span className="bg-brand-red/20 text-brand-red text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full border border-brand-red/30">
                      {service.tag}
                    </span>
                  </div>
                )}

                <div className="relative z-10">
                  <div className="inline-flex items-center justify-center w-14 h-14 bg-brand-gray border border-brand-gray-light rounded-lg mb-6 transition-all duration-300 group-hover:bg-brand-red group-hover:border-brand-red group-hover:shadow-lg group-hover:shadow-red-900/30">
                    <Icon className="w-6 h-6 text-brand-red transition-colors duration-300 group-hover:text-white" />
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3 tracking-tight">{service.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{service.description}</p>

                  <div className="mt-6 flex items-center gap-2 text-brand-red font-semibold text-sm uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                    Learn More
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
