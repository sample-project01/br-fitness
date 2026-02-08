import { useState } from 'react';
import { MapPin, Phone, Clock, Send, CheckCircle } from 'lucide-react';
import { useInView } from '../hooks/useInView';

export function Contact() {
  const { ref, isInView } = useInView();
  const [formState, setFormState] = useState({ name: '', phone: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormState({ name: '', phone: '', message: '' });
    }, 3000);
  };

  return (
    <section id="contact" className="relative bg-brand-black section-padding overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-brand-gray-light to-transparent" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-brand-red/5 rounded-full blur-3xl" />

      <div ref={ref} className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className={`text-center mb-16 ${isInView ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <span className="text-brand-red font-bold text-sm uppercase tracking-[0.3em]">Contact Us</span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white mt-3">
            READY TO START<span className="text-brand-red">?</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto mt-6 leading-relaxed">
            Drop us a message or visit our facility. Your transformation starts with a single step.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className={`${isInView ? 'animate-slide-in-left' : 'opacity-0'}`}>
            <div className="bg-brand-dark border border-brand-gray-light rounded-lg p-8">
              <h3 className="text-2xl font-bold text-white mb-2">Send Us a Message</h3>
              <p className="text-gray-400 text-sm mb-8">Fill in the form and we'll get back to you within 24 hours.</p>

              {submitted ? (
                <div className="flex flex-col items-center justify-center py-12 animate-fade-in">
                  <CheckCircle className="w-16 h-16 text-green-500 mb-4" />
                  <h4 className="text-xl font-bold text-white mb-2">Message Sent!</h4>
                  <p className="text-gray-400 text-sm">We'll be in touch soon. Get ready to crush it.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label htmlFor="name" className="block text-xs font-bold uppercase tracking-wider text-gray-400 mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      className="w-full bg-brand-gray border border-brand-gray-light rounded-sm px-4 py-3.5 text-white text-sm placeholder-gray-500 focus:outline-none focus:border-brand-red focus:ring-1 focus:ring-brand-red transition-all duration-300"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-xs font-bold uppercase tracking-wider text-gray-400 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      required
                      value={formState.phone}
                      onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                      className="w-full bg-brand-gray border border-brand-gray-light rounded-sm px-4 py-3.5 text-white text-sm placeholder-gray-500 focus:outline-none focus:border-brand-red focus:ring-1 focus:ring-brand-red transition-all duration-300"
                      placeholder="+1 (555) 000-0000"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-xs font-bold uppercase tracking-wider text-gray-400 mb-2">
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      required
                      rows={4}
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      className="w-full bg-brand-gray border border-brand-gray-light rounded-sm px-4 py-3.5 text-white text-sm placeholder-gray-500 focus:outline-none focus:border-brand-red focus:ring-1 focus:ring-brand-red transition-all duration-300 resize-none"
                      placeholder="I'm interested in personal training..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full gradient-red gradient-red-hover text-white font-bold text-sm uppercase tracking-wider px-8 py-4 rounded-sm transition-all duration-300 hover:shadow-lg hover:shadow-red-900/40 hover:scale-[1.02] flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Contact Info */}
          <div className={`space-y-6 ${isInView ? 'animate-slide-in-right' : 'opacity-0'}`}>
            {/* Info Cards */}
            <div className="bg-brand-dark border border-brand-gray-light rounded-lg p-8 card-hover">
              <div className="flex items-start gap-5">
                <div className="flex-shrink-0 w-12 h-12 bg-brand-red/10 border border-brand-red/20 rounded-lg flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-brand-red" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white mb-1">Our Location</h4>
                  <p className="text-gray-400 text-sm leading-relaxed">
                     RQH7+6JV, Tehsili, Poddar Colony, <br />
                    Sagar, Madhya Pradesh 470001
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-brand-dark border border-brand-gray-light rounded-lg p-8 card-hover">
              <div className="flex items-start gap-5">
                <div className="flex-shrink-0 w-12 h-12 bg-brand-red/10 border border-brand-red/20 rounded-lg flex items-center justify-center">
                  <Phone className="w-5 h-5 text-brand-red" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white mb-1">Call Us</h4>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Main: (555) 123-4567<br />
                    WhatsApp: (555) 987-6543
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-brand-dark border border-brand-gray-light rounded-lg p-8 card-hover">
              <div className="flex items-start gap-5">
                <div className="flex-shrink-0 w-12 h-12 bg-brand-red/10 border border-brand-red/20 rounded-lg flex items-center justify-center">
                  <Clock className="w-5 h-5 text-brand-red" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white mb-1">Working Hours</h4>
                  <div className="text-gray-400 text-sm leading-relaxed space-y-1">
                    <div className="flex justify-between gap-8">
                      <span>Monday – Friday</span>
                      <span className="text-white font-semibold">5:00 AM – 11:00 PM</span>
                    </div>
                    <div className="flex justify-between gap-8">
                      <span>Saturday</span>
                      <span className="text-white font-semibold">6:00 AM – 10:00 PM</span>
                    </div>
                    <div className="flex justify-between gap-8">
                      <span>Sunday</span>
                      <span className="text-white font-semibold">7:00 AM – 8:00 PM</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Map placeholder */}
            <div className="bg-brand-dark border border-brand-gray-light rounded-lg overflow-hidden h-48 relative">
             
              {/* Decorative grid for map feel */}
              <div className="absolute inset-0 " style={{
                backgroundImage: `linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)`,
                backgroundSize: '40px 40px',
              }} >
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d632.8852250875092!2d78.76394271735404!3d23.82786606116902!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3978d10038131c3b%3A0x545faff59b9b1f3d!2sBR%20fitness%20Tehsili%2C%20Sagar!5e0!3m2!1sen!2sin!4v1770443965067!5m2!1sen!2sin" width="100%" height="450" style={{border:0}}  loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
