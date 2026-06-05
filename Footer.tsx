import { Link } from "react-router-dom";
import { Coffee, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-coffee-950 text-coffee-100">
      <div className="max-w-7xl mx-auto px-5 lg:px-10 pt-20 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <Link to="/" className="flex items-center gap-2.5 mb-5">
              <div className="w-11 h-11 rounded-full bg-gradient-to-br from-coffee-400 to-coffee-700 flex items-center justify-center shadow-md">
                <Coffee className="w-5 h-5 text-coffee-50" strokeWidth={2.2} />
              </div>
              <div className="flex flex-col leading-none">
                <span className="font-serif text-2xl font-semibold text-coffee-50">
                  Caffeol
                </span>
                <span className="text-[10px] uppercase tracking-[0.25em] text-coffee-300/90 mt-0.5">
                  Coffee
                </span>
              </div>
            </Link>
            <p className="text-coffee-200/70 text-sm leading-relaxed mb-6">
              Bean to Bag represents the complete coffee journey — from carefully
              sourced Ethiopian Arabica beans to freshly roasted premium coffee.
            </p>
            <div className="flex gap-3">
              {["IG", "FB", "X", "IN"].map((s) => (
                <a
                  key={s}
                  href="#"
                  className="w-9 h-9 rounded-full bg-coffee-800/60 hover:bg-coffee-600 flex items-center justify-center transition-all duration-300 hover:-translate-y-0.5 text-[11px] font-semibold"
                  aria-label="Social link"
                >
                  {s}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-serif text-lg font-semibold text-coffee-50 mb-5">
              Quick Links
            </h4>
            <ul className="space-y-3 text-sm">
              {[
                { to: "/", label: "Home" },
                { to: "/about", label: "Get to know us" },
                { to: "/shop", label: "Shop" },
                { to: "/contact", label: "Contact" },
              ].map((item) => (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    className="text-coffee-200/70 hover:text-coffee-50 transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-lg font-semibold text-coffee-50 mb-5">
              Coffee Origins
            </h4>
            <ul className="space-y-3 text-sm">
              {["Yirgacheffe", "Sidamo", "Harrar", "Limu", "Jimma"].map((c) => (
                <li key={c}>
                  <Link
                    to="/shop"
                    className="text-coffee-200/70 hover:text-coffee-50 transition-colors"
                  >
                    {c}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-lg font-semibold text-coffee-50 mb-5">
              Contact
            </h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin size={16} className="mt-0.5 text-coffee-400 shrink-0" />
                <span className="text-coffee-200/70">
                  Kera Workers Promise Bldg.
                  <br />
                  Addis Ababa, Ethiopia
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Phone size={16} className="mt-0.5 text-coffee-400 shrink-0" />
                <a
                  href="https://wa.me/251114701239"
                  className="text-coffee-200/70 hover:text-coffee-50 transition-colors"
                >
                  WhatsApp: +251 114 701239
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={16} className="mt-0.5 text-coffee-400 shrink-0" />
                <a
                  href="mailto:sales@caffeolcoffee.com"
                  className="text-coffee-200/70 hover:text-coffee-50 transition-colors break-all"
                >
                  sales@caffeolcoffee.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 pt-8 border-t border-coffee-800/50 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-coffee-300/60">
            © {new Date().getFullYear()} Caffeol Coffee. All rights reserved.
          </p>
          <p className="text-sm text-coffee-300/60">
            Crafted with care from Ethiopia to the world.
          </p>
        </div>
      </div>
    </footer>
  );
}
