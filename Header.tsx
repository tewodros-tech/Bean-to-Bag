import { Link, NavLink, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { Menu, X, Coffee, MessageCircle } from "lucide-react";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navItems = [
    { to: "/", label: "Home" },
    { to: "/about", label: "Get to know us" },
    { to: "/shop", label: "Shop" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-coffee-950/95 backdrop-blur-md shadow-lg py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 lg:px-10 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2.5 group">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-coffee-400 to-coffee-700 flex items-center justify-center shadow-md group-hover:scale-105 transition-transform">
            <Coffee className="w-5 h-5 text-coffee-50" strokeWidth={2.2} />
          </div>
          <div className="flex flex-col leading-none">
            <span className="font-serif text-2xl font-semibold text-coffee-50 tracking-wide">
              Bean to Bag
            </span>
            <span className="text-[10px] uppercase tracking-[0.25em] text-coffee-300/90 mt-0.5">
              Specialty Coffee
            </span>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `px-5 py-2 text-sm font-medium tracking-wide rounded-full transition-all duration-300 ${
                  isActive
                    ? "text-coffee-50 bg-coffee-700/60"
                    : "text-coffee-100/90 hover:text-coffee-50 hover:bg-coffee-800/40"
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <a
            href="https://wa.me/251114701239"
            target="_blank"
            rel="noopener noreferrer"
            className="text-coffee-100 hover:text-white transition-colors"
          >
            <MessageCircle className="w-5 h-5" />
          </a>
          <Link
            to="/shop"
            className="px-6 py-2.5 bg-coffee-500 hover:bg-coffee-400 text-coffee-50 text-sm font-medium rounded-full transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5"
          >
            Order Now
          </Link>
        </div>

        <button
          aria-label="Toggle menu"
          onClick={() => setOpen(!open)}
          className="lg:hidden text-coffee-50 p-2"
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden bg-coffee-950/98 backdrop-blur-md border-t border-coffee-800/40 animate-fade-in">
          <nav className="px-5 py-6 flex flex-col gap-1">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  `px-4 py-3 text-base font-medium rounded-lg transition-colors ${
                    isActive
                      ? "text-coffee-50 bg-coffee-800/60"
                      : "text-coffee-100/90 hover:text-coffee-50 hover:bg-coffee-800/40"
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
            <Link
              to="/shop"
              className="mt-3 px-4 py-3 bg-coffee-500 text-coffee-50 text-base font-medium rounded-lg text-center"
            >
              Order Now
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
