import { useInView } from '../hooks/useInView';

const galleryImages = [
  {
    title: 'Heavy Lifting Zone',
    category: 'Strength Area',
    color: 'from-red-900/80',
    img:"img-1.jpg"
  },
  {
    title: 'Cardio Floor',
    category: 'Conditioning',
    color: 'from-gray-900/80',
    img:'img-2.jpg'
  },
  {
    title: 'Training Floor',
    category: 'Main Area',
    color: 'from-red-800/80',
   img:'img-3.jpg'
  },
  {
    title: 'Boxing Ring',
    category: 'Combat Zone',
    color: 'from-brand-black/80',
    img:'img-4.jpg'
  },
  {
    title: 'Locker Rooms',
    category: 'Amenities',
    color: 'from-gray-800/80',
    img:'img-5.jpg'
  },
  {
    title: 'Functional Zone',
    category: 'CrossFit Area',
    color: 'from-red-900/80',
   img:'img-6.jpg'
  },
];

export function Gallery() {
  const { ref, isInView } = useInView();

  return (
    <section id="gallery" className="relative bg-dark-gradient section-padding overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-brand-red/30 to-transparent" />

      <div ref={ref} className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className={`text-center mb-16 ${isInView ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <span className="text-brand-red font-bold text-sm uppercase tracking-[0.3em]">Gallery</span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white mt-3">
            OUR SPACE<span className="text-brand-red">.</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto mt-6 leading-relaxed">
            20,000 sq ft of premium equipment, purpose-built zones, and an atmosphere that demands your best.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {galleryImages.map((image, index) => (
            <div
              key={image.title}
              className={`relative group rounded-lg overflow-hidden cursor-pointer aspect-[4/3] ${
                index === 0 ? 'sm:col-span-2 lg:col-span-1 lg:row-span-2 lg:aspect-auto' : ''
              } ${isInView ? 'animate-fade-in-up' : 'opacity-0'}`}
              style={{ animationDelay: `${(index + 1) * 0.1}s` }}
            >
              {/* Background with gym pattern */}
              <div className="absolute inset-0 bg-brand-gray">
                <div className={`absolute inset-0 bg-linear-to-t ${image.color} to-brand-dark`} />
                <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
                  <img src={image.img} alt=""  className='object-cover w-full h-full opacity-70'/>
                </div>
                {/* Subtle texture */}
                <div className="absolute inset-0" style={{
                  backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.03) 1px, transparent 0)`,
                  backgroundSize: '20px 20px',
                }} />
              </div>

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-brand-red/0 group-hover:bg-brand-red/80 transition-all duration-500 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0 text-center px-4">
                  <div className="text-xs font-bold uppercase tracking-widest text-red-200 mb-2">{image.category}</div>
                  <div className="text-xl font-black text-white">{image.title}</div>
                </div>
              </div>

              {/* Bottom label (always visible) */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 group-hover:opacity-0 transition-opacity duration-300">
                <div className="text-xs font-semibold uppercase tracking-widest text-gray-400">{image.category}</div>
                <div className="text-sm font-bold text-white mt-1">{image.title}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
