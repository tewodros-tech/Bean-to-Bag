import { useState } from "react";
import { Mail, Phone, MapPin, Send, Coffee, MessageCircle, Clock, ArrowRight, CheckCircle, Star, Award, Heart } from "lucide-react";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
    setForm({ name: "", email: "", phone: "", subject: "", message: "" });
  };

  return (
    <div className="bg-coffee-50">
      {/* HERO - SPECTACULAR */}
      <section className="relative h-[85vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-cover bg-center scale-105" style={{ backgroundImage: "url('/images/cafe-interior.jpg')" }} />
          <div className="absolute inset-0 bg-gradient-to-r from-coffee-950 via-coffee-950/95 to-coffee-950/80" />
          <div className="absolute inset-0 bg-gradient-to-t from-coffee-950 via-transparent to-transparent" />
        </div>
        
        <div className="absolute top-20 right-20 w-96 h-96 bg-coffee-600/20 rounded-full blur-[150px] animate-float" />
        
        <div className="relative z-10 max-w-[1600px] mx-auto px-6 lg:px-12 w-full">
          <div className="max-w-5xl">
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full glass mb-10">
              <MessageCircle className="w-4 h-4 text-coffee-300" />
              <span className="text-sm tracking-[0.3em] uppercase text-white/95 font-bold">Get in Touch</span>
            </div>
            <h1 className="font-serif text-[clamp(5rem,12vw,10rem)] font-medium text-white leading-[0.85] mb-10 text-shadow-lg">
              Let's <span className="italic text-coffee-300">Connect</span>
            </h1>
            <p className="text-2xl md:text-3xl text-white/85 leading-relaxed max-w-3xl">
              Have a question, wholesale inquiry, or want to place an order? We're here to help you experience Bean to Bag coffee.
            </p>
          </div>
        </div>
      </section>

      {/* QUICK CONTACT CARDS - SPECTACULAR */}
      <section className="relative -mt-32 z-20 pb-32">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Phone,
                title: "Call Us",
                value: "0913662154",
                subvalue: "Available 8AM - 8PM",
                color: "from-coffee-600 to-coffee-800",
                action: "tel:+251913662154",
              },
              {
                icon: MessageCircle,
                title: "WhatsApp",
                value: "0913662154",
                subvalue: "Instant messaging",
                color: "from-green-600 to-emerald-700",
                action: "https://wa.me/251913662154",
              },
              {
                icon: Send,
                title: "Telegram",
                value: "@beantobag",
                subvalue: "Quick responses",
                color: "from-blue-600 to-cyan-700",
                action: "https://t.me/beantobag",
              },
            ].map((contact, i) => (
              <a
                key={i}
                href={contact.action}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative"
              >
                <div className={`absolute -inset-1 bg-gradient-to-br ${contact.color} rounded-[3rem] blur-2xl opacity-30 group-hover:opacity-60 transition-opacity`} />
                <div className="relative bg-white rounded-[3rem] p-10 shadow-[0_0_80px_rgba(0,0,0,0.15)] border border-coffee-100 group-hover:-translate-y-2 transition-all duration-500">
                  <div className={`w-20 h-20 rounded-[1.5rem] bg-gradient-to-br ${contact.color} flex items-center justify-center mb-8 shadow-2xl group-hover:scale-110 group-hover:rotate-6 transition-transform duration-700`}>
                    <contact.icon className="w-10 h-10 text-white" />
                  </div>
                  <div className="text-sm uppercase tracking-wider text-coffee-500 font-bold mb-3">{contact.title}</div>
                  <div className="font-serif text-3xl text-coffee-950 mb-2">{contact.value}</div>
                  <div className="text-coffee-600">{contact.subvalue}</div>
                  <div className="mt-6 flex items-center gap-2 text-coffee-700 font-semibold group-hover:gap-4 transition-all">
                    Contact Now <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* MAIN CONTACT SECTION */}
      <section className="py-32 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-coffee-100 rounded-full blur-[200px] opacity-40" />
        
        <div className="relative max-w-[1600px] mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-24 items-start">
            {/* CONTACT FORM */}
            <div>
              <div className="inline-flex items-center gap-3 px-5 py-2.5 bg-coffee-100 rounded-full text-sm font-bold text-coffee-800 mb-10">
                <Mail className="w-4 h-4" />
                SEND US A MESSAGE
              </div>
              <h2 className="font-serif text-[clamp(3rem,6vw,4.5rem)] text-coffee-950 mb-8 leading-[1.1]">
                Let's Start a <span className="italic text-coffee-700">Conversation</span>
              </h2>
              <p className="text-xl text-coffee-700/80 mb-12 leading-relaxed">
                Whether you're interested in wholesale, have questions about our products, or want to place an order — we're here to help.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-coffee-900 mb-3 uppercase tracking-wider">Your Name</label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full px-6 py-5 rounded-3xl bg-coffee-50 border-2 border-coffee-200 focus:border-coffee-600 focus:outline-none text-coffee-900 text-lg transition-all"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-coffee-900 mb-3 uppercase tracking-wider">Phone Number</label>
                    <input
                      type="tel"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className="w-full px-6 py-5 rounded-3xl bg-coffee-50 border-2 border-coffee-200 focus:border-coffee-600 focus:outline-none text-coffee-900 text-lg transition-all"
                      placeholder="0913662154"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-bold text-coffee-900 mb-3 uppercase tracking-wider">Email Address</label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full px-6 py-5 rounded-3xl bg-coffee-50 border-2 border-coffee-200 focus:border-coffee-600 focus:outline-none text-coffee-900 text-lg transition-all"
                    placeholder="you@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-coffee-900 mb-3 uppercase tracking-wider">Subject</label>
                  <input
                    type="text"
                    required
                    value={form.subject}
                    onChange={(e) => setForm({ ...form, subject: e.target.value })}
                    className="w-full px-6 py-5 rounded-3xl bg-coffee-50 border-2 border-coffee-200 focus:border-coffee-600 focus:outline-none text-coffee-900 text-lg transition-all"
                    placeholder="Wholesale inquiry, order, etc."
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-coffee-900 mb-3 uppercase tracking-wider">Message</label>
                  <textarea
                    required
                    rows={6}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full px-6 py-5 rounded-3xl bg-coffee-50 border-2 border-coffee-200 focus:border-coffee-600 focus:outline-none text-coffee-900 text-lg resize-none transition-all"
                    placeholder="Tell us about your needs..."
                  />
                </div>
                <button
                  type="submit"
                  className="group relative w-full py-7 bg-gradient-to-r from-coffee-900 to-coffee-800 hover:from-coffee-800 hover:to-coffee-700 text-white font-bold text-xl rounded-full transition-all shadow-2xl hover:shadow-coffee-900/50 hover:-translate-y-1 overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                  <span className="relative flex items-center justify-center gap-3">
                    {submitted ? "Message Sent Successfully!" : "Send Message"}
                    <Send className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
                  </span>
                </button>
                {submitted && (
                  <div className="p-6 bg-green-50 border-2 border-green-200 rounded-3xl flex items-center gap-4">
                    <CheckCircle className="w-6 h-6 text-green-600 shrink-0" />
                    <p className="text-green-800 font-medium">Thank you! We'll get back to you within 24 hours.</p>
                  </div>
                )}
              </form>
            </div>

            {/* CONTACT INFO & MAP */}
            <div className="space-y-8">
              {/* OFFICE INFO */}
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-br from-coffee-600 to-amber-600 rounded-[3rem] blur-2xl opacity-20 group-hover:opacity-40 transition-opacity" />
                <div className="relative bg-gradient-to-br from-coffee-950 to-coffee-900 rounded-[3rem] p-12 text-white shadow-[0_0_80px_rgba(0,0,0,0.3)]">
                  <div className="flex items-center gap-4 mb-8">
                    <div className="w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-xl flex items-center justify-center">
                      <MapPin className="w-8 h-8 text-coffee-300" />
                    </div>
                    <div>
                      <div className="text-sm uppercase tracking-wider text-coffee-400 font-bold">Headquarters</div>
                      <div className="font-serif text-2xl">Addis Ababa, Ethiopia</div>
                    </div>
                  </div>
                  <div className="space-y-4 text-white/80">
                    <p className="text-lg leading-relaxed">
                      Bean to Bag Coffee is based in Addis Ababa, Ethiopia — the birthplace of coffee. We roast in small batches and distribute throughout the region.
                    </p>
                    <div className="pt-6 border-t border-white/20 space-y-3">
                      <div className="flex items-center gap-3">
                        <Phone className="w-5 h-5 text-coffee-300" />
                        <span className="font-semibold">+251 913 662 154</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Mail className="w-5 h-5 text-coffee-300" />
                        <span>sales@beantobagcoffee.com</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Clock className="w-5 h-5 text-coffee-300" />
                        <span>Mon - Sat: 8AM - 8PM</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* GOOGLE MAP */}
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-[3rem] blur-2xl opacity-20 group-hover:opacity-40 transition-opacity" />
                <div className="relative bg-white rounded-[3rem] overflow-hidden shadow-[0_0_80px_rgba(0,0,0,0.15)] border-2 border-coffee-100">
                  <div className="aspect-[4/3] relative">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126115.11712345678!2d38.685!3d9.005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b85cef5ab402d%3A0x8467b6b037a24d49!2sAddis%20Ababa%2C%20Ethiopia!5e0!3m2!1sen!2sus!4v1234567890"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      className="absolute inset-0"
                      title="Bean to Bag Location - Addis Ababa, Ethiopia"
                    />
                    <div className="absolute top-6 left-6 bg-white/95 backdrop-blur-xl px-6 py-4 rounded-2xl shadow-xl">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-coffee-900 flex items-center justify-center">
                          <MapPin className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <div className="font-bold text-coffee-950">Bean to Bag Coffee</div>
                          <div className="text-sm text-coffee-600">Addis Ababa, Ethiopia</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="p-8 bg-coffee-50">
                    <h4 className="font-serif text-2xl text-coffee-950 mb-3">Visit Our Roastery</h4>
                    <p className="text-coffee-700 mb-6">
                      Come see our small-batch roasting process in action. We'd love to show you how we bring Bean to Bag coffee from farm to cup.
                    </p>
                    <a
                      href="https://maps.google.com/?q=Addis+Ababa+Ethiopia"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-coffee-900 hover:bg-coffee-800 text-white font-semibold rounded-full transition-all"
                    >
                      Get Directions <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>

              {/* SOCIAL MEDIA */}
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-br from-purple-600 to-pink-600 rounded-[3rem] blur-2xl opacity-20 group-hover:opacity-40 transition-opacity" />
                <div className="relative bg-gradient-to-br from-coffee-100 to-amber-100 rounded-[3rem] p-10 border-2 border-coffee-200">
                  <h4 className="font-serif text-2xl text-coffee-950 mb-6">Follow Us</h4>
                  <p className="text-coffee-700 mb-8">
                    Stay updated with our latest roasts, brewing tips, and behind-the-scenes content.
                  </p>
                  <div className="flex gap-4">
                    {[
                      { name: "Instagram", icon: "IG", color: "from-purple-600 to-pink-600" },
                      { name: "Facebook", icon: "FB", color: "from-blue-600 to-blue-700" },
                      { name: "Twitter", icon: "X", color: "from-neutral-800 to-black" },
                    ].map((social) => (
                      <a
                        key={social.name}
                        href="#"
                        className={`group/social w-16 h-16 rounded-2xl bg-gradient-to-br ${social.color} flex items-center justify-center shadow-xl hover:scale-110 hover:rotate-6 transition-all`}
                      >
                        <span className="text-white font-bold">{social.icon}</span>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-32 bg-coffee-950 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{ backgroundImage: "radial-gradient(circle at 2px 2px, white 1.5px, transparent 0)", backgroundSize: "80px 80px" }} />
        </div>
        
        <div className="relative max-w-[1600px] mx-auto px-6 lg:px-12">
          <div className="text-center max-w-4xl mx-auto mb-20">
            <h2 className="font-serif text-[clamp(3rem,7vw,5rem)] mb-6">
              Why Choose <span className="italic text-coffee-300">Bean to Bag</span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Award,
                title: "Premium Quality",
                desc: "100% Arabica beans sourced from high-altitude farms at 1,900–2,200m",
              },
              {
                icon: Heart,
                title: "Smallholder Support",
                desc: "Direct partnerships with Ethiopian small-scale farmers",
              },
              {
                icon: Star,
                title: "Fresh Roasted",
                desc: "Small batch roasting 2-3 times per week for peak freshness",
              },
            ].map((item, i) => (
              <div key={i} className="group relative">
                <div className="absolute inset-0 bg-gradient-to-br from-coffee-800 to-coffee-900 rounded-[2.5rem] transform group-hover:scale-105 transition-transform duration-700" />
                <div className="relative p-10 text-center">
                  <div className="w-20 h-20 rounded-[1.5rem] bg-gradient-to-br from-coffee-600 to-coffee-700 flex items-center justify-center mx-auto mb-6 group-hover:rotate-12 transition-transform duration-700">
                    <item.icon className="w-10 h-10 text-coffee-200" />
                  </div>
                  <h3 className="font-serif text-2xl mb-4">{item.title}</h3>
                  <p className="text-white/70 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-32 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="bg-gradient-to-br from-coffee-900 via-coffee-800 to-coffee-900 rounded-[5rem] p-20 lg:p-32 text-white relative overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0" style={{ backgroundImage: "radial-gradient(circle at 2px 2px, white 1.5px, transparent 0)", backgroundSize: "50px 50px" }} />
            </div>
            
            <div className="relative max-w-4xl mx-auto text-center">
              <Coffee className="w-20 h-20 text-coffee-300 mx-auto mb-10" />
              <h2 className="font-serif text-[clamp(3rem,7vw,5rem)] mb-8">
                Ready to Order?
              </h2>
              <p className="text-2xl text-white/80 mb-16 max-w-2xl mx-auto">
                Contact us today via WhatsApp, Telegram, or phone. We deliver fresh roasted coffee throughout Addis Ababa and beyond.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <a
                  href="https://wa.me/251913662154"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group px-12 py-6 bg-green-600 hover:bg-green-500 text-white font-bold text-xl rounded-full transition-all shadow-2xl hover:shadow-green-600/50 hover:-translate-y-2 flex items-center justify-center gap-3"
                >
                  <MessageCircle className="w-6 h-6" />
                  WhatsApp Us
                </a>
                <a
                  href="tel:+251913662154"
                  className="px-12 py-6 bg-white/10 hover:bg-white/20 text-white font-bold text-xl rounded-full backdrop-blur-xl border-2 border-white/30 transition-all hover:-translate-y-2 flex items-center justify-center gap-3"
                >
                  <Phone className="w-6 h-6" />
                  Call Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
