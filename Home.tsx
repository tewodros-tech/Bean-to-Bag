import { Link } from "react-router-dom";
import { ArrowRight, Award, Sparkles, Zap, Coffee, Leaf, Globe, Heart, Star, Check, ChevronRight, Package, TrendingUp, Users, MapPin, Phone, Mail } from "lucide-react";

export default function Home() {
  return (
    <div className="bg-coffee-50 overflow-x-hidden">
      {/* HERO - SPECTACULAR FULL SCREEN */}
      <section className="relative h-[100vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-cover bg-center scale-105 parallax" style={{ backgroundImage: "url('/images/hero-coffee.jpg')" }} />
          <div className="absolute inset-0 bg-gradient-to-r from-coffee-950 via-coffee-950/90 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-coffee-950 via-transparent to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-coffee-950/60" />
        </div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 right-20 w-32 h-32 rounded-full bg-coffee-500/20 blur-3xl animate-float" />
        <div className="absolute bottom-40 left-20 w-40 h-40 rounded-full bg-amber-500/20 blur-3xl animate-float animation-delay-400" />
        
        <div className="relative z-10 max-w-[1600px] mx-auto px-6 lg:px-12 w-full">
          <div className="max-w-6xl">
            <div className="inline-flex items-center gap-4 px-6 py-3 rounded-full glass mb-12 animate-fade-in group hover:bg-white/15 transition-all">
              <div className="w-2 h-2 rounded-full bg-coffee-400 animate-pulse" />
              <span className="text-sm tracking-[0.3em] uppercase text-white/95 font-semibold">Premium Ethiopian Specialty Coffee</span>
              <Sparkles className="w-4 h-4 text-coffee-300 group-hover:rotate-180 transition-transform duration-700" />
            </div>
            
            <h1 className="font-serif text-[clamp(5rem,14vw,12rem)] font-medium text-white leading-[0.8] mb-12 animate-fade-in-up text-shadow-lg">
              From Bean<br/>
              <span className="italic text-coffee-300 relative inline-block">
                to Bag
                <div className="absolute -bottom-4 left-0 w-full h-1 bg-gradient-to-r from-coffee-400 to-transparent" />
              </span>
            </h1>
            
            <p className="text-2xl md:text-3xl lg:text-4xl text-white/90 leading-relaxed mb-16 max-w-4xl font-light animate-fade-in-up animation-delay-200 text-shadow">
              Carefully sourced Ethiopian Arabica coffee roasted to a balanced <span className="text-coffee-300 font-medium">medium-dark profile</span> for a rich and smooth cup.
            </p>
            
            <div className="flex flex-wrap gap-6 animate-fade-in-up animation-delay-400">
              <Link to="/shop" className="group relative px-14 py-7 bg-gradient-to-r from-coffee-500 to-coffee-600 hover:from-coffee-400 hover:to-coffee-500 text-white font-bold text-xl rounded-full transition-all duration-700 shadow-2xl hover:shadow-coffee-500/50 hover:-translate-y-3 flex items-center gap-4 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                <span className="relative">Explore Coffee</span>
                <ArrowRight className="w-7 h-7 group-hover:translate-x-3 transition-transform relative" />
              </Link>
              <Link to="/shop" className="group px-14 py-7 bg-white/10 hover:bg-white/20 text-white font-bold text-xl rounded-full backdrop-blur-2xl border-2 border-white/40 transition-all hover:-translate-y-3 hover:border-white/60 hover:shadow-2xl">
                Shop Coffee
              </Link>
            </div>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 text-white/80 animate-bounce">
          <span className="text-xs uppercase tracking-[0.4em] font-semibold">Scroll to Explore</span>
          <div className="w-8 h-12 rounded-full border-2 border-white/40 flex justify-center pt-2">
            <div className="w-1 h-3 bg-white/60 rounded-full animate-pulse" />
          </div>
        </div>
      </section>

      {/* BRAND STATS - SPECTACULAR */}
      <section className="relative py-32 bg-coffee-950 text-white overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "radial-gradient(circle at 2px 2px, white 1.5px, transparent 0)", backgroundSize: "80px 80px" }} />
        </div>
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-coffee-600/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-amber-600/20 rounded-full blur-[120px]" />
        
        <div className="relative max-w-[1600px] mx-auto px-6 lg:px-12">
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { icon: Globe, value: "1,900–2,200m", label: "Altitude Grown", sublabel: "Highland farms" },
              { icon: Heart, value: "100%", label: "Arabica Beans", sublabel: "Pure quality" },
              { icon: Award, value: "Medium-Dark", label: "Roast Level", sublabel: "Balanced profile" },
              { icon: Package, value: "Small Batch", label: "Fresh Roasted", sublabel: "Peak freshness" },
            ].map((item, i) => (
              <div key={i} className="group relative">
                <div className="absolute inset-0 bg-gradient-to-br from-coffee-800 to-coffee-900 rounded-[2.5rem] transform group-hover:scale-105 transition-transform duration-700" />
                <div className="relative p-10 text-center">
                  <div className="w-24 h-24 rounded-[2rem] bg-gradient-to-br from-coffee-600 to-coffee-700 flex items-center justify-center mx-auto mb-8 group-hover:rotate-12 transition-transform duration-700 shadow-2xl">
                    <item.icon className="w-12 h-12 text-coffee-200" />
                  </div>
                  <div className="font-serif text-4xl text-coffee-300 mb-3">{item.value}</div>
                  <div className="text-xl font-semibold mb-2">{item.label}</div>
                  <div className="text-white/50 text-sm">{item.sublabel}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* THE JOURNEY - SPECTACULAR ALTERNATING */}
      <section className="py-40 bg-white relative overflow-hidden">
        <div className="absolute top-40 -right-40 w-[600px] h-[600px] bg-coffee-100 rounded-full blur-[150px] opacity-60" />
        <div className="absolute bottom-40 -left-40 w-[600px] h-[600px] bg-amber-100 rounded-full blur-[150px] opacity-60" />
        
        <div className="relative max-w-[1600px] mx-auto px-6 lg:px-12">
          <div className="max-w-5xl mx-auto text-center mb-40">
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-coffee-100 rounded-full text-sm font-bold text-coffee-800 mb-8">
              <div className="w-2 h-2 rounded-full bg-coffee-600 animate-pulse" />
              THE COMPLETE JOURNEY
            </div>
            <h2 className="font-serif text-[clamp(4rem,10vw,8rem)] text-coffee-950 leading-[0.9] mb-10">
              Bean to Bag <br/>
              <span className="italic text-coffee-600">Represents Everything</span>
            </h2>
            <p className="text-2xl text-coffee-700/80 leading-relaxed max-w-3xl mx-auto">
              From carefully sourced Ethiopian green beans to freshly roasted and professionally packaged coffee delivered to customers.
            </p>
          </div>

          {/* STEP 1 */}
          <div className="grid lg:grid-cols-2 gap-24 items-center mb-48">
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-br from-coffee-400 to-amber-500 rounded-[4rem] blur-2xl opacity-20 group-hover:opacity-40 transition-opacity" />
              <div className="relative aspect-[4/5] rounded-[4rem] overflow-hidden shadow-[0_0_80px_rgba(0,0,0,0.3)]">
                <img src="/images/about-coffee.jpg" alt="Coffee farmer" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
                <div className="absolute inset-0 bg-gradient-to-t from-coffee-950/60 via-transparent to-transparent" />
              </div>
              <div className="absolute -bottom-16 -right-16 bg-gradient-to-br from-coffee-600 via-coffee-700 to-coffee-800 text-white p-12 rounded-[3rem] shadow-[0_0_60px_rgba(0,0,0,0.4)] max-w-[380px] backdrop-blur-xl">
                <div className="text-8xl font-serif mb-4 text-coffee-300">01</div>
                <div className="font-serif text-3xl mb-3">Sourcing</div>
                <div className="text-white/80 text-lg">Direct from smallholder farmers in Ethiopian highlands</div>
              </div>
            </div>
            <div className="lg:pl-20">
              <div className="inline-flex items-center gap-3 px-5 py-2.5 bg-coffee-100 rounded-full text-sm font-bold text-coffee-800 mb-10">
                <MapPin className="w-4 h-4" />
                Ethiopian Highlands • 1,900–2,200m
              </div>
              <h3 className="font-serif text-[clamp(3rem,6vw,4.5rem)] text-coffee-950 mb-10 leading-[1.1]">
                Cultivated by <br/>
                <span className="italic text-coffee-700">Small-Scale Farmers</span>
              </h3>
              <div className="space-y-8 text-xl text-coffee-700/90 leading-relaxed mb-12">
                <p>
                  Our coffee is cultivated by small-scale farmers in traditional garden farms at <strong className="text-coffee-950 font-semibold">1,900–2,200 meters above sea level</strong>.
                </p>
                <p>
                  The cool highland climate, natural shade trees, fertile soil, and balanced seasonal rainfall allow the coffee cherries to ripen slowly, developing refined and complex flavors.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {["Natural shade grown", "Slow ripening", "Hand-picked selection", "Traditional farms"].map((item) => (
                  <div key={item} className="group flex items-center gap-4 p-5 bg-gradient-to-r from-coffee-50 to-coffee-100 rounded-3xl hover:from-coffee-100 hover:to-coffee-200 transition-all">
                    <div className="w-10 h-10 rounded-2xl bg-coffee-900 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Check className="w-5 h-5 text-white" />
                    </div>
                    <span className="font-semibold text-coffee-950">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* STEP 2 */}
          <div className="grid lg:grid-cols-2 gap-24 items-center mb-48">
            <div className="lg:order-2 relative group">
              <div className="absolute -inset-4 bg-gradient-to-br from-amber-400 to-orange-500 rounded-[4rem] blur-2xl opacity-20 group-hover:opacity-40 transition-opacity" />
              <div className="relative aspect-[4/5] rounded-[4rem] overflow-hidden shadow-[0_0_80px_rgba(0,0,0,0.3)]">
                <img src="/images/ceremony.jpg" alt="Coffee ceremony" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
                <div className="absolute inset-0 bg-gradient-to-t from-coffee-950/60 via-transparent to-transparent" />
              </div>
              <div className="absolute -bottom-16 -left-16 bg-gradient-to-br from-amber-600 via-orange-700 to-amber-800 text-white p-12 rounded-[3rem] shadow-[0_0_60px_rgba(0,0,0,0.4)] max-w-[380px] backdrop-blur-xl">
                <div className="text-8xl font-serif mb-4 text-amber-300">02</div>
                <div className="font-serif text-3xl mb-3">Cup Profile</div>
                <div className="text-white/80 text-lg">Complex & refined flavors</div>
              </div>
            </div>
            <div className="lg:order-1 lg:pr-20">
              <h3 className="font-serif text-[clamp(3rem,6vw,4.5rem)] text-coffee-950 mb-10 leading-[1.1]">
                Refined & <br/>
                <span className="italic text-coffee-700">Complex Flavors</span>
              </h3>
              <p className="text-xl text-coffee-700/90 leading-relaxed mb-12">
                The unique growing conditions produce coffee with exceptional characteristics that represent the premium quality of Ethiopian high-altitude Arabica coffee.
              </p>
              <div className="space-y-5">
                {[
                  { icon: Star, label: "Floral aroma", desc: "Elegant and fragrant bouquet" },
                  { icon: Zap, label: "Bright acidity", desc: "Lively and vibrant character" },
                  { icon: Heart, label: "Citrus and fruit notes", desc: "Complex flavor layers" },
                  { icon: Award, label: "Smooth clean finish", desc: "Refined aftertaste" },
                ].map((item) => (
                  <div key={item.label} className="group flex items-start gap-6 p-7 bg-gradient-to-r from-coffee-50 to-transparent rounded-[2rem] hover:from-coffee-100 hover:shadow-xl transition-all">
                    <div className="w-16 h-16 rounded-3xl bg-gradient-to-br from-coffee-900 to-coffee-800 flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:rotate-6 transition-transform shadow-xl">
                      <item.icon className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <div className="font-serif text-2xl text-coffee-950 mb-2">{item.label}</div>
                      <div className="text-coffee-600 text-lg">{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* STEP 3 */}
          <div className="grid lg:grid-cols-2 gap-24 items-center mb-48">
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-br from-neutral-600 to-black rounded-[4rem] blur-2xl opacity-20 group-hover:opacity-40 transition-opacity" />
              <div className="relative aspect-[4/5] rounded-[4rem] overflow-hidden shadow-[0_0_80px_rgba(0,0,0,0.3)]">
                <img src="/images/roasting.jpg" alt="Roasting" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              </div>
              <div className="absolute -bottom-16 -right-16 bg-gradient-to-br from-neutral-800 via-black to-neutral-900 text-white p-12 rounded-[3rem] shadow-[0_0_60px_rgba(0,0,0,0.4)] max-w-[380px] backdrop-blur-xl">
                <div className="text-8xl font-serif mb-4 text-neutral-300">03</div>
                <div className="font-serif text-3xl mb-3">Roast Profile</div>
                <div className="text-white/80 text-lg">Medium-dark perfection</div>
              </div>
            </div>
            <div className="lg:pl-20">
              <h3 className="font-serif text-[clamp(3rem,6vw,4.5rem)] text-coffee-950 mb-10 leading-[1.1]">
                Medium-Dark <br/>
                <span className="italic text-coffee-700">Roast Level</span>
              </h3>
              <p className="text-xl text-coffee-700/90 leading-relaxed mb-12">
                All roasted coffees from Bean to Bag are roasted to a Medium-Dark roast level. This roast level provides balanced acidity, full body, rich chocolate and cocoa notes, and a smooth finish.
              </p>
              <div className="grid grid-cols-2 gap-5 mb-12">
                {[
                  { label: "Acidity", value: "Balanced", icon: Zap, color: "from-blue-600 to-cyan-600" },
                  { label: "Body", value: "Full", icon: Coffee, color: "from-amber-600 to-orange-600" },
                  { label: "Notes", value: "Chocolate & Cocoa", icon: Star, color: "from-coffee-700 to-coffee-900" },
                  { label: "Finish", value: "Smooth", icon: Award, color: "from-green-600 to-emerald-600" },
                ].map((item) => (
                  <div key={item.label} className="group relative">
                    <div className={`absolute inset-0 bg-gradient-to-br ${item.color} rounded-3xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity`} />
                    <div className="relative p-7 bg-gradient-to-br from-coffee-950 to-coffee-900 text-white rounded-3xl">
                      <item.icon className="w-7 h-7 text-coffee-300 mb-4" />
                      <div className="text-xs uppercase tracking-wider text-coffee-400 mb-2 font-semibold">{item.label}</div>
                      <div className="font-serif text-2xl">{item.value}</div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="p-8 bg-gradient-to-r from-coffee-100 to-amber-100 rounded-[2rem]">
                <div className="font-bold text-coffee-950 mb-4 text-lg">Perfect for:</div>
                <div className="flex flex-wrap gap-3">
                  {["Jebena brewing", "Espresso", "Macchiato", "French press", "Milk-based drinks"].map((method) => (
                    <span key={method} className="px-5 py-2.5 bg-white rounded-full text-sm font-bold text-coffee-900 shadow-md">{method}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* STEP 4 */}
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <div className="lg:order-2 relative group">
              <div className="absolute -inset-4 bg-gradient-to-br from-coffee-500 to-amber-600 rounded-[4rem] blur-2xl opacity-20 group-hover:opacity-40 transition-opacity" />
              <div className="relative aspect-[4/5] rounded-[4rem] overflow-hidden bg-gradient-to-br from-coffee-200 via-coffee-300 to-coffee-400 shadow-[0_0_80px_rgba(0,0,0,0.3)] flex items-center justify-center">
                <div className="text-center p-20">
                  <div className="w-32 h-32 rounded-full bg-gradient-to-br from-coffee-800 to-coffee-900 flex items-center justify-center mx-auto mb-10 shadow-2xl">
                    <Package className="w-16 h-16 text-white" />
                  </div>
                  <div className="font-serif text-5xl text-coffee-950 mb-6">Premium Packaging</div>
                  <div className="text-coffee-800 text-xl">Professional & protective</div>
                </div>
              </div>
              <div className="absolute -bottom-16 -left-16 bg-gradient-to-br from-coffee-700 via-coffee-800 to-coffee-900 text-white p-12 rounded-[3rem] shadow-[0_0_60px_rgba(0,0,0,0.4)] max-w-[380px] backdrop-blur-xl">
                <div className="text-8xl font-serif mb-4 text-coffee-300">04</div>
                <div className="font-serif text-3xl mb-3">Packaging</div>
                <div className="text-white/80 text-lg">Premium protection</div>
              </div>
            </div>
            <div className="lg:order-1 lg:pr-20">
              <h3 className="font-serif text-[clamp(3rem,6vw,4.5rem)] text-coffee-950 mb-10 leading-[1.1]">
                Premium <br/>
                <span className="italic text-coffee-700">Packaging</span>
              </h3>
              <p className="text-xl text-coffee-700/90 leading-relaxed mb-12">
                We use premium stand-up coffee bags with one-way degassing valve, zip-lock resealable top, matte finish packaging, and professional label design.
              </p>
              <div className="space-y-4 mb-12">
                {[
                  "One-way degassing valve",
                  "Zip-lock resealable top",
                  "Matte finish packaging",
                  "Professional label design",
                ].map((feature) => (
                  <div key={feature} className="group flex items-center gap-5 p-6 bg-gradient-to-r from-coffee-50 to-coffee-100 rounded-3xl hover:from-coffee-100 hover:to-coffee-200 transition-all hover:shadow-xl">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-coffee-900 to-coffee-800 flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-transform shadow-lg">
                      <Check className="w-6 h-6 text-white" />
                    </div>
                    <span className="font-bold text-xl text-coffee-950">{feature}</span>
                  </div>
                ))}
              </div>
              <div className="flex gap-4">
                {["250g", "500g", "1kg"].map((size) => (
                  <div key={size} className="flex-1 text-center p-6 bg-gradient-to-br from-coffee-900 to-coffee-800 text-white rounded-3xl shadow-xl">
                    <div className="font-serif text-3xl mb-1">{size}</div>
                    <div className="text-xs text-coffee-300 uppercase tracking-wider font-semibold">Roasted</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PRODUCTS - SPECTACULAR GRID */}
      <section className="py-40 bg-coffee-950 text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "radial-gradient(circle at 2px 2px, white 1.5px, transparent 0)", backgroundSize: "100px 100px" }} />
        </div>
        <div className="absolute top-0 left-0 w-[800px] h-[800px] bg-coffee-700/10 rounded-full blur-[200px]" />
        <div className="absolute bottom-0 right-0 w-[800px] h-[800px] bg-amber-700/10 rounded-full blur-[200px]" />
        
        <div className="relative max-w-[1600px] mx-auto px-6 lg:px-12">
          <div className="text-center max-w-5xl mx-auto mb-32">
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-white/10 backdrop-blur-xl rounded-full text-sm font-bold text-coffee-300 mb-10 border border-white/20">
              <div className="w-2 h-2 rounded-full bg-coffee-400 animate-pulse" />
              OUR PRODUCTS
            </div>
            <h2 className="font-serif text-[clamp(4rem,10vw,8rem)] leading-[0.9] mb-10">
              Four Core <br/>
              <span className="italic text-coffee-300">Products</span>
            </h2>
            <p className="text-2xl text-white/70 leading-relaxed">
              Each product represents a different aspect of the Bean to Bag journey, from specialty beverages to raw beans for home roasters.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {[
              {
                name: "Caskara",
                type: "Dried Coffee Cherry",
                desc: "Made from the dried skin of coffee cherries. It produces a naturally sweet and fruity beverage with delicate floral notes.",
                taste: ["Fruity", "Sweet", "Floral"],
                color: "from-orange-500 via-amber-600 to-orange-700",
                packaging: "Orange",
                icon: Leaf,
                accent: "orange",
              },
              {
                name: "Qalid’s Choice",
                type: "House Blend – Ground Coffee",
                desc: "Our signature house blend designed for everyday coffee enjoyment. The medium-dark roast creates a balanced cup with smooth body and chocolate notes.",
                taste: ["Balanced", "Smooth", "Chocolate notes"],
                color: "from-amber-700 via-coffee-700 to-amber-800",
                packaging: "Warm brown",
                icon: Coffee,
                grind: ["Jebena", "French press", "Espresso"],
                accent: "amber",
              },
              {
                name: "Chemina",
                type: "Whole Bean Coffee",
                desc: "Offers a bold coffee experience with a rich body and deep cocoa notes. The medium-dark roast is ideal for espresso and milk-based coffee drinks.",
                taste: ["Bold body", "Cocoa notes", "Smooth finish"],
                color: "from-neutral-800 via-black to-neutral-900",
                packaging: "Black / dark gray",
                icon: Award,
                accent: "neutral",
              },
              {
                name: "Origin Green",
                type: "Raw Green Coffee Beans",
                desc: "Raw green coffee beans for home roasters, cafés, and coffee enthusiasts who want to roast their own beans.",
                taste: ["Natural", "Unroasted", "Fresh"],
                color: "from-green-700 via-emerald-700 to-green-800",
                packaging: "Natural kraft / green",
                icon: Package,
                target: ["Home roasters", "Cafés", "Coffee enthusiasts"],
                accent: "green",
              },
            ].map((product) => (
              <div key={product.name} className="group relative">
                <div className={`absolute -inset-1 bg-gradient-to-br ${product.color} rounded-[3rem] blur-2xl opacity-30 group-hover:opacity-60 transition-opacity`} />
                <div className="relative bg-coffee-950/90 backdrop-blur-2xl rounded-[3rem] p-14 border border-white/10 h-full flex flex-col overflow-hidden">
                  <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-white/5 to-transparent rounded-full blur-3xl" />
                  
                  <div className="flex items-start justify-between mb-10 relative">
                    <div className={`w-24 h-24 rounded-[2rem] bg-gradient-to-br ${product.color} flex items-center justify-center shadow-2xl group-hover:scale-110 group-hover:rotate-6 transition-transform duration-700`}>
                      <product.icon className="w-12 h-12 text-white" />
                    </div>
                    <div className="text-right">
                      <div className="text-xs uppercase tracking-wider text-coffee-400 mb-2 font-bold">Packaging</div>
                      <div className="text-sm font-semibold text-white bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm">{product.packaging}</div>
                    </div>
                  </div>
                  
                  <div className="text-xs uppercase tracking-wider text-coffee-400 mb-4 font-bold">{product.type}</div>
                  <h3 className="font-serif text-5xl mb-6">{product.name}</h3>
                  <p className="text-white/70 leading-relaxed text-lg mb-10 flex-1">{product.desc}</p>
                  
                  <div className="space-y-8">
                    <div>
                      <div className="text-xs uppercase tracking-wider text-coffee-400 mb-4 font-bold">Taste Profile</div>
                      <div className="flex flex-wrap gap-3">
                        {product.taste.map((t) => (
                          <span key={t} className="px-5 py-2.5 bg-white/10 backdrop-blur-sm rounded-full text-sm font-semibold border border-white/20">{t}</span>
                        ))}
                      </div>
                    </div>
                    {product.grind && (
                      <div>
                        <div className="text-xs uppercase tracking-wider text-coffee-400 mb-4 font-bold">Grind Options</div>
                        <div className="flex flex-wrap gap-3">
                          {product.grind.map((g) => (
                            <span key={g} className="px-4 py-2 bg-coffee-800 rounded-full text-xs font-semibold">{g}</span>
                          ))}
                        </div>
                      </div>
                    )}
                    {product.target && (
                      <div>
                        <div className="text-xs uppercase tracking-wider text-coffee-400 mb-4 font-bold">Target Customers</div>
                        <div className="flex flex-wrap gap-3">
                          {product.target.map((t) => (
                            <span key={t} className="px-4 py-2 bg-coffee-800 rounded-full text-xs font-semibold">{t}</span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                  
                  <Link to="/shop" className="mt-10 inline-flex items-center gap-3 text-coffee-300 hover:text-white font-bold text-lg group/link">
                    Explore Product <ChevronRight className="w-5 h-5 group-hover/link:translate-x-2 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PACKAGING SIZES - SPECTACULAR */}
      <section className="py-40 bg-white relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[1000px] bg-coffee-100 rounded-full blur-[200px] opacity-50" />
        
        <div className="relative max-w-[1600px] mx-auto px-6 lg:px-12">
          <div className="text-center max-w-4xl mx-auto mb-32">
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-coffee-100 rounded-full text-sm font-bold text-coffee-800 mb-10">
              <Package className="w-4 h-4" />
              PACKAGING SIZES
            </div>
            <h2 className="font-serif text-[clamp(4rem,9vw,7rem)] text-coffee-950 leading-[0.9] mb-10">
              Available in <br/>
              <span className="italic text-coffee-700">Multiple Sizes</span>
            </h2>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-br from-coffee-400 to-amber-500 rounded-[4rem] blur-3xl opacity-20 group-hover:opacity-40 transition-opacity" />
              <div className="relative bg-gradient-to-br from-coffee-50 to-white rounded-[4rem] p-16 shadow-[0_0_80px_rgba(0,0,0,0.15)] border border-coffee-200">
                <div className="w-20 h-20 rounded-[2rem] bg-gradient-to-br from-coffee-700 to-coffee-900 flex items-center justify-center mb-10 shadow-2xl">
                  <Package className="w-10 h-10 text-white" />
                </div>
                <h3 className="font-serif text-5xl text-coffee-950 mb-12">Roasted Coffee</h3>
                <div className="space-y-5">
                  {[
                    { size: "250 g", desc: "Perfect for trying", popular: false },
                    { size: "500 g", desc: "Most popular choice", popular: true },
                    { size: "1 kg", desc: "Best value option", popular: false },
                  ].map((item) => (
                    <div key={item.size} className={`group/item relative overflow-hidden rounded-[2rem] transition-all hover:scale-[1.02] ${item.popular ? "bg-gradient-to-r from-coffee-900 to-coffee-800 text-white shadow-2xl" : "bg-white border-2 border-coffee-200"}`}>
                      {item.popular && <div className="absolute top-0 right-0 w-32 h-32 bg-coffee-500/20 rounded-full blur-3xl" />}
                      <div className="relative flex items-center justify-between p-8">
                        <div>
                          <div className="font-serif text-4xl mb-2">{item.size}</div>
                          <div className={`text-sm ${item.popular ? "text-coffee-300" : "text-coffee-600"} font-medium`}>{item.desc}</div>
                        </div>
                        {item.popular && <div className="px-5 py-2 bg-coffee-500 rounded-full text-xs font-bold uppercase tracking-wider">Popular</div>}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-br from-green-400 to-emerald-500 rounded-[4rem] blur-3xl opacity-20 group-hover:opacity-40 transition-opacity" />
              <div className="relative bg-gradient-to-br from-green-50 to-white rounded-[4rem] p-16 shadow-[0_0_80px_rgba(0,0,0,0.15)] border border-green-200">
                <div className="w-20 h-20 rounded-[2rem] bg-gradient-to-br from-green-700 to-emerald-900 flex items-center justify-center mb-10 shadow-2xl">
                  <Leaf className="w-10 h-10 text-white" />
                </div>
                <h3 className="font-serif text-5xl text-coffee-950 mb-12">Green Coffee</h3>
                <div className="space-y-5">
                  {[
                    { size: "500 g", desc: "Sample size" },
                    { size: "1 kg", desc: "Home roasters" },
                    { size: "5 kg", desc: "Cafés & bulk" },
                  ].map((item) => (
                    <div key={item.size} className="group/item flex items-center justify-between p-8 bg-white rounded-[2rem] border-2 border-green-200 hover:border-green-400 hover:shadow-xl transition-all hover:scale-[1.02]">
                      <div>
                        <div className="font-serif text-4xl text-green-900 mb-2">{item.size}</div>
                        <div className="text-sm text-green-700 font-medium">{item.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BUSINESS VISION - SPECTACULAR */}
      <section className="py-40 bg-coffee-950 text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-coffee-950 via-coffee-900 to-coffee-950" />
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-coffee-700 to-transparent" />
        </div>
        <div className="absolute top-20 left-20 w-96 h-96 bg-coffee-600/10 rounded-full blur-[150px]" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-amber-600/10 rounded-full blur-[150px]" />
        
        <div className="relative max-w-[1600px] mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <div>
              <div className="inline-flex items-center gap-3 px-6 py-3 bg-white/10 backdrop-blur-xl rounded-full text-sm font-bold text-coffee-300 mb-10 border border-white/20">
                <TrendingUp className="w-4 h-4" />
                BUSINESS VISION
              </div>
              <h2 className="font-serif text-[clamp(3rem,7vw,5.5rem)] leading-[1.1] mb-10">
                Building a <br/>
                <span className="italic text-coffee-300">Recognized Brand</span>
              </h2>
              <p className="text-2xl text-white/80 leading-relaxed mb-16">
                To build a recognized Ethiopian coffee brand that delivers premium roasted coffee while maintaining full traceability from farm to final product.
              </p>
              
              <div className="space-y-8">
                {[
                  { year: "Year 1", goals: ["Establish brand", "Reach 200 kg monthly sales", "Build café partnerships"], color: "from-coffee-600 to-coffee-700" },
                  { year: "Year 2", goals: ["Increase to 500 kg/month", "Expand retail distribution"], color: "from-amber-600 to-orange-700" },
                  { year: "Year 3", goals: ["Open retail shop", "Begin exporting"], color: "from-green-600 to-emerald-700" },
                ].map((phase) => (
                  <div key={phase.year} className="group">
                    <div className="flex gap-8 items-start">
                      <div className={`w-32 shrink-0`}>
                        <div className={`font-serif text-3xl bg-gradient-to-r ${phase.color} bg-clip-text text-transparent`}>{phase.year}</div>
                      </div>
                      <div className="flex-1 space-y-3">
                        {phase.goals.map((goal) => (
                          <div key={goal} className="flex items-center gap-4 group/goal">
                            <div className="w-2 h-2 rounded-full bg-coffee-500 group-hover/goal:scale-150 transition-transform" />
                            <span className="text-lg text-white/80 group-hover/goal:text-white transition-colors">{goal}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute -inset-8 bg-gradient-to-br from-coffee-600/20 to-amber-600/20 rounded-[4rem] blur-3xl" />
              <div className="relative aspect-square rounded-[4rem] overflow-hidden shadow-[0_0_100px_rgba(0,0,0,0.5)]">
                <img src="/images/cafe-interior.jpg" alt="Coffee shop" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-coffee-950/80 via-transparent to-transparent" />
              </div>
              <div className="absolute -bottom-12 -left-12 bg-gradient-to-br from-coffee-600 to-coffee-800 p-10 rounded-[2.5rem] shadow-[0_0_60px_rgba(0,0,0,0.5)] backdrop-blur-xl border border-white/10">
                <Users className="w-12 h-12 text-coffee-300 mb-4" />
                <div className="font-serif text-4xl text-white mb-2">100–200 kg</div>
                <div className="text-white/70">Monthly production</div>
              </div>
              <div className="absolute -top-12 -right-12 bg-gradient-to-br from-amber-600 to-orange-700 p-8 rounded-[2rem] shadow-[0_0_60px_rgba(0,0,0,0.5)] backdrop-blur-xl border border-white/10">
                <TrendingUp className="w-10 h-10 text-white mb-3" />
                <div className="font-serif text-2xl text-white">Growing</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA - SPECTACULAR */}
      <section className="py-40 bg-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1200px] bg-gradient-to-br from-coffee-100 via-amber-100 to-coffee-100 rounded-full blur-[200px] opacity-60" />
        </div>
        
        <div className="relative max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="bg-gradient-to-br from-coffee-950 via-coffee-900 to-coffee-950 rounded-[5rem] p-20 lg:p-32 text-white relative overflow-hidden shadow-[0_0_100px_rgba(0,0,0,0.3)]">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0" style={{ backgroundImage: "radial-gradient(circle at 2px 2px, white 1.5px, transparent 0)", backgroundSize: "50px 50px" }} />
            </div>
            <div className="absolute top-0 right-0 w-96 h-96 bg-coffee-600/20 rounded-full blur-[150px]" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-600/20 rounded-full blur-[150px]" />
            
            <div className="relative max-w-5xl mx-auto text-center">
              <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-gradient-to-br from-coffee-500 to-coffee-600 mb-12 shadow-2xl">
                <Coffee className="w-12 h-12 text-white" />
              </div>
              
              <h2 className="font-serif text-[clamp(3rem,8vw,6rem)] leading-[1.1] mb-10">
                Ready to Experience <br/>
                <span className="italic text-coffee-300">Bean to Bag?</span>
              </h2>
              
              <p className="text-2xl md:text-3xl text-white/80 mb-20 max-w-3xl mx-auto leading-relaxed">
                From carefully sourced beans to your perfect cup. Contact us for orders, wholesale inquiries, or partnerships.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center mb-20">
                <Link to="/shop" className="group relative px-16 py-8 bg-gradient-to-r from-coffee-500 to-coffee-600 hover:from-coffee-400 hover:to-coffee-500 text-white font-bold text-xl rounded-full transition-all shadow-[0_0_60px_rgba(184,118,47,0.5)] hover:shadow-[0_0_80px_rgba(184,118,47,0.7)] hover:-translate-y-2 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                  <span className="relative flex items-center gap-4">
                    Shop Our Coffee
                    <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
                  </span>
                </Link>
                <Link to="/contact" className="px-16 py-8 bg-white/10 hover:bg-white/20 text-white font-bold text-xl rounded-full backdrop-blur-2xl border-2 border-white/30 transition-all hover:-translate-y-2 hover:border-white/50 hover:shadow-2xl">
                  Get in Touch
                </Link>
              </div>
              
              <div className="flex flex-wrap justify-center gap-12 text-white/60">
                <a href="https://wa.me/251114701239" className="group flex items-center gap-3 hover:text-white transition-colors">
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div className="text-left">
                    <div className="text-xs uppercase tracking-wider">WhatsApp</div>
                    <div className="font-semibold">+251 114 701239</div>
                  </div>
                </a>
                <a href="mailto:sales@beantobagcoffee.com" className="group flex items-center gap-3 hover:text-white transition-colors">
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="text-left">
                    <div className="text-xs uppercase tracking-wider">Email</div>
                    <div className="font-semibold">sales@beantobagcoffee.com</div>
                  </div>
                </a>
                <div className="flex items-center gap-4">
                  {["IG", "FB", "X"].map((s, i) => (
                    <a key={i} href="#" className="w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all hover:scale-110 hover:rotate-12 font-bold text-sm">
                      {s}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
