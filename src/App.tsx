import React, { useState, useEffect } from 'react';
import { Menu, X, Dumbbell, Users, Trophy, Flame, Target, Heart, Handshake } from 'lucide-react';

export default function GymLanding() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [formData, setFormData] = useState({ name: '', phone: '', message: '' });

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you! We will contact you soon.');
    setFormData({ name: '', phone: '', message: '' });
  };

  const services = [
    {
      icon: <Dumbbell className="w-12 h-12" />,
      title: 'Strength Training',
      description: 'Build raw power with our advanced equipment and expert coaching.'
    },
    {
      icon: <Flame className="w-12 h-12" />,
      title: 'Weight Loss',
      description: 'Burn fat and transform your body with science-backed programs.'
    },
    {
      icon: <Target className="w-12 h-12" />,
      title: 'Personal Training',
      description: 'One-on-one coaching tailored to your goals and performance level.'
    },
    {
      icon: <Heart className="w-12 h-12" />,
      title: 'Cardio & Conditioning',
      description: 'Explosive cardio sessions that push your limits and endurance.'
    },
    {
      icon: <Trophy className="w-12 h-12" />,
      title: 'Body Transformation',
      description: 'Complete physique overhaul with nutrition and training plans.'
    },
    {
      icon: <Users className="w-12 h-12" />,
      title: 'Group Classes',
      description: 'High-energy group workouts that build community and competition.'
    }
  ];

  const galleryImages = [
    'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&h=600&fit=crop',
    'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=800&h=600&fit=crop',
    'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&h=600&fit=crop',
    'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?w=800&h=600&fit=crop',
    'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=800&h=600&fit=crop',
    'https://images.unsplash.com/photo-1576678927484-cc907957088c?w=800&h=600&fit=crop'
  ];

  return (
    <div className="bg-black text-white font-sans">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Oswald:wght@400;600;700&family=Rajdhani:wght@400;500;600;700&display=swap');

       

        body {
          font-family: 'Rajdhani', sans-serif;
          overflow-x: hidden;
        }

        .font-bebas {
          font-family: 'Bebas Neue', cursive;
        }

        .font-oswald {
          font-family: 'Oswald', sans-serif;
        }

        .gradient-red {
          background: linear-gradient(135deg, #E31E24 0%, #C41E3A 100%);
        }

        .gradient-red-dark {
          background: linear-gradient(135deg, #C41E3A 0%, #8B0000 100%);
        }

        .text-shadow-hard {
          text-shadow: 3px 3px 0px rgba(0, 0, 0, 0.8);
        }

        .box-shadow-red {
          box-shadow: 0 10px 40px rgba(227, 30, 36, 0.3);
        }

        .hover-lift {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .hover-lift:hover {
          transform: translateY(-8px);
          box-shadow: 0 15px 50px rgba(227, 30, 36, 0.5);
        }

        .slide-in-left {
          animation: slideInLeft 0.8s ease-out;
        }

        .slide-in-right {
          animation: slideInRight 0.8s ease-out;
        }

        .fade-in-up {
          animation: fadeInUp 1s ease-out;
        }

        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-100px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(100px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(50px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .diagonal-split {
          clip-path: polygon(0 0, 100% 0, 100% 85%, 0 100%);
        }

        .bg-noise {
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.05'/%3E%3C/svg%3E");
        }

        .stripe-pattern {
          background-image: repeating-linear-gradient(
            45deg,
            transparent,
            transparent 10px,
            rgba(227, 30, 36, 0.05) 10px,
            rgba(227, 30, 36, 0.05) 20px
          );
        }

        .hero-overlay {
          background: linear-gradient(135deg, rgba(227, 30, 36, 0.7) 0%, rgba(10, 10, 10, 0.9) 100%);
        }

        .btn-primary {
          background: linear-gradient(135deg, #E31E24 0%, #C41E3A 100%);
          border: 2px solid transparent;
          position: relative;
          overflow: hidden;
          transition: all 0.4s ease;
        }

        .btn-primary::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
          transition: left 0.5s ease;
        }

        .btn-primary:hover::before {
          left: 100%;
        }

        .btn-primary:hover {
          transform: scale(1.05);
          box-shadow: 0 15px 40px rgba(227, 30, 36, 0.6);
        }

        .service-card {
          background: linear-gradient(145deg, #1A1A1A 0%, #0A0A0A 100%);
          border: 2px solid #2D2D2D;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
          overflow: hidden;
        }

        .service-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 3px;
          background: linear-gradient(90deg, #E31E24, #C41E3A);
          transition: left 0.5s ease;
        }

        .service-card:hover::before {
          left: 0;
        }

        .service-card:hover {
          border-color: #E31E24;
          transform: translateY(-10px) scale(1.02);
          box-shadow: 0 20px 60px rgba(227, 30, 36, 0.4);
        }

        .gallery-item {
          position: relative;
          overflow: hidden;
          cursor: pointer;
          transition: transform 0.4s ease;
        }

        .gallery-item::after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(135deg, rgba(227, 30, 36, 0.7), rgba(10, 10, 10, 0.8));
          opacity: 0;
          transition: opacity 0.4s ease;
        }

        .gallery-item:hover::after {
          opacity: 1;
        }

        .gallery-item:hover {
          transform: scale(1.05);
          z-index: 10;
        }

        .gallery-item img {
          transition: transform 0.4s ease;
        }

        .gallery-item:hover img {
          transform: scale(1.1);
        }

        input, textarea {
          background: #1A1A1A;
          border: 2px solid #2D2D2D;
          color: white;
          transition: all 0.3s ease;
        }

        input:focus, textarea:focus {
          outline: none;
          border-color: #E31E24;
          box-shadow: 0 0 20px rgba(227, 30, 36, 0.3);
        }

        .nav-link {
          position: relative;
          transition: color 0.3s ease;
        }

        .nav-link::after {
          content: '';
          position: absolute;
          bottom: -5px;
          left: 0;
          width: 0;
          height: 2px;
          background: #E31E24;
          transition: width 0.3s ease;
        }

        .nav-link:hover::after {
          width: 100%;
        }

        @media (max-width: 768px) {
          .hero-title {
            font-size: 3rem;
          }
        }
      `}</style>

      {/* Navbar */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'backdrop-blur-sm shadow-lg border-b-2 border-red-600' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="shrink-0">
              <h1 className="text-3xl font-bebas ">
                BR FITNESS  
              </h1>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {['Home', 'About Us', 'Services', 'Gallery', 'Contact Us'].map((item, index) => (
                <button
                  key={index}
                  onClick={() => scrollToSection(item.toLowerCase().replace(' ', '-'))}
                  className="nav-link text-white font-oswald text-lg font-semibold uppercase tracking-wide hover:text-red-500"
                >
                  {item}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-white hover:text-red-500 transition-colors"
              >
                {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-black border-t-2 border-red-600 shadow-xl">
            <div className="px-4 pt-4 pb-6 space-y-3">
              {['Home', 'About Us', 'Services', 'Gallery', 'Contact Us'].map((item, index) => (
                <button
                  key={index}
                  onClick={() => scrollToSection(item.toLowerCase().replace(' ', '-'))}
                  className="block w-full text-left text-white font-oswald text-xl font-semibold uppercase tracking-wide py-3 px-4 hover:bg-red-600 transition-all rounded"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1920&h=1080&fit=crop)',
          }}
        >
          <div className="absolute inset-0 hero-overlay"></div>
          <div className="absolute inset-0 bg-noise"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center slide-in-left">
          <h1 className="hero-title text-6xl sm:text-7xl md:text-8xl font-bebas text-white text-shadow-hard mb-6 leading-none">
           BEST FITNESS HUB IN<br />
            <span className="gradient-red text-white  px-5">SAGAR</span>
          </h1>
          <p className="text-xl sm:text-2xl font-oswald text-gray-200 mb-10 max-w-3xl mx-auto font-medium tracking-wide">
            Push beyond limits. Build discipline. Transform your body and dominate your life.
          </p>
          <button 
            onClick={() => window.location.href="https://wa.me/+916260564643" }
            className="btn-primary text-white font-oswald text-xl uppercase tracking-wider px-12 py-5 rounded-md font-bold shadow-2xl cursor-pointer"
          >
            CONNECT NOW VIA WHATSAPP <Handshake className='inline ml-1'/>
          </button>
          
        </div>

        {/* Decorative Element */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent"></div>
      </section>

      {/* About Us Section */}
      <section id="about-us" className="py-24 bg-black relative stripe-pattern">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Side - Image */}
            <div className="slide-in-left">
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=800&h=600&fit=crop" 
                  alt="Gym Interior"
                  className="w-full h-96 object-cover shadow-2xl border-4 border-red-600"
                />
                <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-red-600 opacity-20 -z-10"></div>
              </div>
            </div>

            {/* Right Side - Content */}
            <div className="slide-in-right">
              <h2 className="text-5xl sm:text-6xl font-bebas text-white mb-6 leading-tight">
                WHERE <span className="text-red-600">DISCIPLINE</span><br />MEETS RESULTS
              </h2>
              <p className="text-lg text-gray-300 mb-6 font-rajdhani leading-relaxed">
                At APEX Fitness, we don't do excuses. We build champions. Our state-of-the-art facility combines cutting-edge equipment with a community of driven individuals who refuse to settle for average.
              </p>
              <p className="text-lg text-gray-300 mb-6 font-rajdhani leading-relaxed">
                Led by certified professional trainers with decades of combined experience, we deliver personalized programs that guarantee results. Whether you're here to build strength, lose weight, or completely transform your physique, we have the expertise and environment to make it happen.
              </p>
              <div className="grid grid-cols-3 gap-6 mt-8">
                <div className="text-center">
                  <div className="text-4xl font-bebas text-red-600 mb-2">500+</div>
                  <div className="text-sm text-gray-400 font-oswald uppercase">Members</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bebas text-red-600 mb-2">15+</div>
                  <div className="text-sm text-gray-400 font-oswald uppercase">Trainers</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bebas text-red-600 mb-2">24/7</div>
                  <div className="text-sm text-gray-400 font-oswald uppercase">Access</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-gradient-to-b from-black to-gray-900 relative">
        <div className="absolute inset-0 bg-noise opacity-30"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16 fade-in-up">
            <h2 className="text-5xl sm:text-6xl font-bebas text-white mb-4">
              OUR <span className="text-red-600">PROGRAMS</span>
            </h2>
            <p className="text-xl text-gray-400 font-oswald uppercase tracking-wide">
              Elite Training For Every Goal
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={index}
                className="service-card p-8 rounded-none hover-lift"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-red-600 mb-4">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-oswald font-bold text-white mb-3 uppercase">
                  {service.title}
                </h3>
                <p className="text-gray-400 font-rajdhani text-lg">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl sm:text-6xl font-bebas text-white mb-4">
              THE <span className="text-red-600">BATTLEGROUND</span>
            </h2>
            <p className="text-xl text-gray-400 font-oswald uppercase tracking-wide">
              Where Champions Are Made
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((image, index) => (
              <div 
                key={index}
                className="gallery-item h-64 rounded-none shadow-xl"
              >
                <img 
                  src={image} 
                  alt={`Gym ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact-us" className="py-24 bg-gradient-to-b from-black to-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 stripe-pattern opacity-20"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-5xl sm:text-6xl font-bebas text-white mb-4">
              READY TO <span className="text-red-600">TRANSFORM?</span>
            </h2>
            <p className="text-xl text-gray-400 font-oswald uppercase tracking-wide">
              Take The First Step Today
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="fade-in-up">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <input
                    type="text"
                    placeholder="YOUR NAME"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    required
                    className="w-full px-6 py-4 rounded-none font-oswald text-lg uppercase tracking-wide"
                  />
                </div>
                <div>
                  <input
                    type="tel"
                    placeholder="YOUR PHONE"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    required
                    className="w-full px-6 py-4 rounded-none font-oswald text-lg uppercase tracking-wide"
                  />
                </div>
                <div>
                  <textarea
                    placeholder="YOUR MESSAGE"
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    required
                    rows="5"
                    className="w-full px-6 py-4 rounded-none font-oswald text-lg uppercase tracking-wide resize-none"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="btn-primary w-full text-white font-oswald text-xl uppercase tracking-wider px-8 py-5 rounded-none font-bold"
                >
                  Book Free Trial
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-8 fade-in-up">
              <div className="bg-gray-900 p-8 border-l-4 border-red-600">
                <h3 className="text-2xl font-oswald font-bold text-white mb-4 uppercase">Location</h3>
                <p className="text-gray-300 font-rajdhani text-lg">
                  123 Strength Avenue<br />
                  Downtown District<br />
                  Metro City, MC 10001
                </p>
              </div>

              <div className="bg-gray-900 p-8 border-l-4 border-red-600">
                <h3 className="text-2xl font-oswald font-bold text-white mb-4 uppercase">Contact</h3>
                <p className="text-gray-300 font-rajdhani text-lg mb-2">
                  Phone: (555) 123-4567
                </p>
                <p className="text-gray-300 font-rajdhani text-lg">
                  Email: info@apexfitness.com
                </p>
              </div>

              <div className="bg-gray-900 p-8 border-l-4 border-red-600">
                <h3 className="text-2xl font-oswald font-bold text-white mb-4 uppercase">Hours</h3>
                <div className="space-y-2 font-rajdhani text-lg">
                  <p className="text-gray-300">Monday - Friday: <span className="text-white font-semibold">5:00 AM - 11:00 PM</span></p>
                  <p className="text-gray-300">Saturday - Sunday: <span className="text-white font-semibold">6:00 AM - 10:00 PM</span></p>
                  <p className="text-red-600 font-oswald font-bold mt-4 uppercase">24/7 Access for Members</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t-2 border-red-600 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bebas text-white mb-2">APEX FITNESS</h2>
          <p className="text-gray-500 font-rajdhani">
            © 2024 APEX Fitness. All Rights Reserved. | Built For Champions.
          </p>
        </div>
      </footer>
    </div>
  );
}