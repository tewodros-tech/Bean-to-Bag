import { Link } from "react-router-dom";
import { Coffee, Heart, Target, TrendingUp, Globe, CheckCircle, Star } from "lucide-react";

export default function About() {
  return (
    <div className="bg-coffee-50">
      {/* HERO */}
      <section className="relative h-[85vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/images/ethiopia-coffee.jpg')" }} />
          <div className="absolute inset-0 bg-gradient-to-b from-coffee-950/60 via-coffee-950/80 to-coffee-950" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-5 lg:px-10 w-full">
          <div className="max-w-4xl">
            <span className="text-xs tracking-[0.3em] uppercase text-coffee-300 font-medium mb-6 block">About Bean to Bag</span>
            <h1 className="font-serif text-7xl md:text-8xl lg:text-[8rem] font-medium text-white leading-[0.9] mb-8">
              From farm<br/>
              <span className="italic text-coffee-300">to your cup.</span>
            </h1>
            <p className="text-xl text-white/80 max-w-2xl leading-relaxed">
              We are a specialty coffee roasting brand focused on producing high-quality Ethiopian Arabica coffee, supporting smallholder farmers and maintaining full traceability.
            </p>
          </div>
        </div>
      </section>

      {/* INTRO - SPLIT */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-5 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <span className="text-xs tracking-[0.3em] uppercase text-coffee-500 font-medium">Who We Are</span>
              <h2 className="font-serif text-5xl md:text-6xl text-coffee-950 mt-4 mb-8 leading-tight">
                Dedicated to quality, <span className="italic">committed to origin.</span>
              </h2>
              <div className="space-y-6 text-lg text-coffee-700/85 leading-relaxed">
                <p>
                  Bean to Bag Coffee is a specialty coffee roasting brand focused on producing high-quality Ethiopian Arabica coffee. The company sources premium green coffee beans from Ethiopian highland farmers, roasts them in small batches, and packages them in premium bags for sale to consumers, cafés, offices, and retailers.
                </p>
                <p>
                  The name Bean to Bag represents the full coffee journey: Coffee Bean → Roasting → Packaging → Customer. The company initially operates as a small-scale roasting business, producing 100–200 kg of roasted coffee per month, with a long-term vision of expanding production and controlling the coffee supply chain.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-6">
                <div className="aspect-[3/4] rounded-[2rem] overflow-hidden">
                  <img src="/images/about-coffee.jpg" alt="Coffee farmer" className="w-full h-full object-cover" />
                </div>
                <div className="p-6 bg-coffee-950 text-white rounded-[2rem]">
                  <Coffee className="w-8 h-8 text-coffee-300 mb-3" />
                  <div className="font-serif text-2xl mb-1">Small Batch</div>
                  <div className="text-sm text-white/70">Roasted with precision</div>
                </div>
              </div>
              <div className="space-y-6 pt-12">
                <div className="p-6 bg-coffee-100 rounded-[2rem]">
                  <Globe className="w-8 h-8 text-coffee-700 mb-3" />
                  <div className="font-serif text-2xl text-coffee-950 mb-1">Ethiopian Origin</div>
                  <div className="text-sm text-coffee-700/80">Highland Arabica</div>
                </div>
                <div className="aspect-[3/4] rounded-[2rem] overflow-hidden">
                  <img src="/images/ceremony.jpg" alt="Coffee ceremony" className="w-full h-full object-cover" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* VISION & MISSION */}
      <section className="py-32 bg-coffee-950 text-white">
        <div className="max-w-7xl mx-auto px-5 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-20">
            <div className="p-12 bg-gradient-to-br from-coffee-900 to-coffee-800 rounded-[3rem] border border-coffee-700/50">
              <Target className="w-12 h-12 text-coffee-300 mb-6" />
              <h3 className="font-serif text-4xl mb-6">Our Vision</h3>
              <p className="text-lg text-white/80 leading-relaxed">
                To build a recognized Ethiopian coffee brand that delivers premium roasted coffee while maintaining full traceability from farm to final product.
              </p>
            </div>
            <div className="p-12 bg-gradient-to-br from-coffee-800 to-coffee-900 rounded-[3rem] border border-coffee-700/50">
              <Heart className="w-12 h-12 text-coffee-300 mb-6" />
              <h3 className="font-serif text-4xl mb-6">Our Mission</h3>
              <p className="text-lg text-white/80 leading-relaxed">
                To provide customers with freshly roasted Ethiopian Arabica coffee that reflects the unique flavors of Ethiopia's highland coffee regions while supporting small-scale farmers and maintaining high quality standards.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* COFFEE QUALITY - DETAILED */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-5 lg:px-10">
          <div className="max-w-3xl mx-auto text-center mb-20">
            <span className="text-xs tracking-[0.3em] uppercase text-coffee-500 font-medium">Quality & Origin</span>
            <h2 className="font-serif text-5xl md:text-6xl text-coffee-950 mt-4 mb-6">Premium Arabica, Perfectly Grown</h2>
            <p className="text-lg text-coffee-700/80">
              All Bean to Bag Coffee products are made from 100% Coffea Arabica beans, cultivated with care in Ethiopia's highlands.
            </p>
          </div>
          <div className="grid lg:grid-cols-3 gap-8 mb-20">
            {[
              { title: "Altitude", value: "1,900–2,200m", desc: "High altitude growing conditions" },
              { title: "Farming", value: "Garden Farms", desc: "Traditional smallholder cultivation" },
              { title: "Shade", value: "Natural", desc: "Grown under natural shade trees" },
            ].map((item) => (
              <div key={item.title} className="text-center p-10 bg-coffee-50 rounded-[2rem]">
                <div className="font-serif text-5xl text-coffee-700 mb-3">{item.value}</div>
                <div className="font-medium text-coffee-950 mb-2">{item.title}</div>
                <div className="text-sm text-coffee-600">{item.desc}</div>
              </div>
            ))}
          </div>
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="aspect-[4/3] rounded-[3rem] overflow-hidden">
              <img src="/images/ethiopia-coffee.jpg" alt="Highland farms" className="w-full h-full object-cover" />
            </div>
            <div>
              <h3 className="font-serif text-4xl text-coffee-950 mb-6">Flavor Characteristics</h3>
              <p className="text-lg text-coffee-700/85 mb-8 leading-relaxed">
                The beans are grown under natural shade in cool highland climates with fertile soil and balanced seasonal rainfall. These conditions allow coffee cherries to mature slowly, producing refined and complex flavor profiles.
              </p>
              <div className="space-y-4">
                {[
                  "Elegant floral aromas",
                  "Bright and lively acidity",
                  "Citrus and ripe fruit notes",
                  "Smooth and clean finish",
                ].map((flavor) => (
                  <div key={flavor} className="flex items-center gap-4 p-4 bg-coffee-50 rounded-2xl">
                    <Star className="w-5 h-5 text-coffee-600 shrink-0" />
                    <span className="text-coffee-900 font-medium">{flavor}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PRODUCT LINE */}
      <section className="py-32 bg-coffee-100">
        <div className="max-w-7xl mx-auto px-5 lg:px-10">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-xs tracking-[0.3em] uppercase text-coffee-500 font-medium">Product Line</span>
            <h2 className="font-serif text-5xl md:text-6xl text-coffee-950 mt-4">Four Core Products</h2>
          </div>
          <div className="space-y-16">
            {[
              {
                num: "01",
                name: "Caskara",
                type: "Dried Coffee Cherry",
                desc: "Made from the dried skin of coffee cherries. It produces a naturally sweet and fruity beverage with delicate floral notes.",
                profile: ["Fruity", "Sweet", "Floral"],
                color: "orange",
              },
              {
                num: "02",
                name: "Qalid’s Choice",
                type: "House Blend – Ground Coffee",
                desc: "Our signature house blend designed for everyday coffee enjoyment. The medium-dark roast creates a balanced cup with smooth body and chocolate notes.",
                profile: ["Balanced", "Smooth", "Chocolate"],
                color: "amber",
              },
              {
                num: "03",
                name: "Chemina",
                type: "Whole Bean Coffee",
                desc: "Offers a bold coffee experience with a rich body and deep cocoa notes. The medium-dark roast is ideal for espresso and milk-based coffee drinks.",
                profile: ["Bold", "Cocoa", "Smooth"],
                color: "neutral",
              },
              {
                num: "04",
                name: "Origin Green",
                type: "Raw Green Coffee Beans",
                desc: "Raw green coffee beans for home roasters, cafés, and coffee enthusiasts who want to control their own roast profile.",
                profile: ["Raw", "Unroasted", "Fresh"],
                color: "green",
              },
            ].map((product, i) => (
              <div key={product.name} className={`grid lg:grid-cols-2 gap-16 items-center ${i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""}`}>
                <div className={`aspect-[4/3] rounded-[3rem] bg-gradient-to-br ${
                  product.color === "orange" ? "from-orange-400 to-amber-600" :
                  product.color === "amber" ? "from-amber-600 to-coffee-700" :
                  product.color === "neutral" ? "from-neutral-800 to-black" :
                  "from-green-600 to-emerald-700"
                } flex items-center justify-center text-white`}>
                  <div className="text-center p-12">
                    <div className="text-6xl font-serif mb-4">{product.num}</div>
                    <div className="text-2xl font-medium">{product.name}</div>
                  </div>
                </div>
                <div className={i % 2 === 1 ? "lg:pr-12" : "lg:pl-12"}>
                  <div className="text-xs uppercase tracking-wider text-coffee-500 mb-3">{product.type}</div>
                  <h3 className="font-serif text-4xl text-coffee-950 mb-4">{product.name}</h3>
                  <p className="text-lg text-coffee-700/85 leading-relaxed mb-6">{product.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {product.profile.map((p) => (
                      <span key={p} className="px-4 py-2 bg-white rounded-full text-sm font-medium text-coffee-900">{p}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PACKAGING & SIZES */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-5 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <span className="text-xs tracking-[0.3em] uppercase text-coffee-500 font-medium">Packaging</span>
              <h2 className="font-serif text-5xl text-coffee-950 mt-4 mb-8">Premium Protection</h2>
              <div className="space-y-4 mb-10">
                {[
                  "One-way degassing valve",
                  "Zip-lock resealable top",
                  "Matte finish packaging",
                  "Professional label design",
                ].map((feature) => (
                  <div key={feature} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-coffee-600" />
                    <span className="text-coffee-800">{feature}</span>
                  </div>
                ))}
              </div>
              <div className="p-8 bg-coffee-50 rounded-3xl">
                <h4 className="font-serif text-2xl text-coffee-950 mb-4">Each Bag Includes</h4>
                <div className="grid grid-cols-2 gap-3 text-sm text-coffee-700">
                  {["Brand name", "Product name", "Roast level", "Net weight", "Roast date", "Batch number", "Brewing recommendation", "Barcode"].map((item) => (
                    <div key={item} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-coffee-600 rounded-full" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="space-y-8">
              <div className="p-10 bg-coffee-950 text-white rounded-[3rem]">
                <h4 className="font-serif text-3xl mb-6">Roasted Coffee Sizes</h4>
                <div className="flex gap-4">
                  {["250g", "500g", "1kg"].map((size) => (
                    <div key={size} className="px-6 py-3 bg-white/10 rounded-full font-medium">{size}</div>
                  ))}
                </div>
              </div>
              <div className="p-10 bg-coffee-100 rounded-[3rem]">
                <h4 className="font-serif text-3xl text-coffee-950 mb-6">Green Coffee Sizes</h4>
                <div className="flex gap-4">
                  {["500g", "1kg", "5kg"].map((size) => (
                    <div key={size} className="px-6 py-3 bg-coffee-900 text-white rounded-full font-medium">{size}</div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* GROWTH PLAN */}
      <section className="py-32 bg-coffee-950 text-white">
        <div className="max-w-7xl mx-auto px-5 lg:px-10">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-xs tracking-[0.3em] uppercase text-coffee-400 font-medium">Future Vision</span>
            <h2 className="font-serif text-5xl md:text-6xl mt-4">Long-Term Growth</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                year: "Year 1",
                goals: ["Establish brand", "Reach 200 kg monthly sales", "Build café partnerships"],
              },
              {
                year: "Year 2",
                goals: ["Increase production to 500 kg/month", "Expand retail distribution", "Strengthen supply chain"],
              },
              {
                year: "Year 3",
                goals: ["Open small retail shop", "Begin exporting", "Control processing"],
              },
            ].map((phase) => (
              <div key={phase.year} className="p-10 bg-white/5 backdrop-blur-sm rounded-[2rem] border border-white/10">
                <div className="font-serif text-4xl text-coffee-300 mb-6">{phase.year}</div>
                <ul className="space-y-3">
                  {phase.goals.map((goal) => (
                    <li key={goal} className="flex items-start gap-3 text-white/80">
                      <TrendingUp className="w-4 h-4 text-coffee-400 mt-1 shrink-0" />
                      <span>{goal}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 bg-white">
        <div className="max-w-4xl mx-auto px-5 lg:px-10 text-center">
          <Coffee className="w-16 h-16 text-coffee-600 mx-auto mb-8" />
          <h2 className="font-serif text-5xl md:text-6xl text-coffee-950 mb-6">Experience Bean to Bag</h2>
          <p className="text-xl text-coffee-700/80 mb-12 max-w-2xl mx-auto">
            From our carefully sourced beans to your perfect cup, discover the complete coffee journey.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/shop" className="px-10 py-5 bg-coffee-900 hover:bg-coffee-700 text-white font-medium rounded-full transition-all">
              Shop Our Coffee
            </Link>
            <Link to="/contact" className="px-10 py-5 border-2 border-coffee-900 text-coffee-900 hover:bg-coffee-900 hover:text-white font-medium rounded-full transition-all">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
