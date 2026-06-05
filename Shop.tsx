import { useState } from "react";
import { Link } from "react-router-dom";
import { ShoppingBag, ChevronDown, Check, Coffee, Leaf, Package, Award } from "lucide-react";

type Origin = {
  name: string;
  type: string;
  notes: string[];
  roast: string;
  body: string;
  packaging: string;
  price: string;
  color: string;
  description: string;
  details: string[];
  brewing: string[];
};

const origins: Origin[] = [
  {
    name: "Caskara",
    type: "Dried Coffee Cherry",
    notes: ["Fruity", "Sweet", "Floral"],
    roast: "N/A (Dried)",
    body: "Light & Refreshing",
    packaging: "Orange",
    price: "Contact for Pricing",
    color: "from-orange-500 to-amber-600",
    description: "Caskara is made from the dried skin of coffee cherries. It produces a naturally sweet and fruity beverage with delicate floral notes.",
    details: [
      "Made from dried coffee cherry husks",
      "Naturally caffeine-free option",
      "Can be brewed hot or cold",
      "Sustainable use of coffee byproduct",
    ],
    brewing: ["Hot infusion", "Cold brew", "Tea-style brewing"],
  },
  {
    name: "Qalid’s Choice",
    type: "House Blend – Ground Coffee",
    notes: ["Balanced", "Smooth", "Chocolate"],
    roast: "Medium-Dark Roast",
    body: "Medium, Smooth",
    packaging: "Warm Brown",
    price: "Contact for Pricing",
    color: "from-amber-700 to-coffee-800",
    description: "Qalid’s Choice is our signature house blend designed for everyday coffee enjoyment. The medium-dark roast creates a balanced cup with smooth body and chocolate notes.",
    details: [
      "Signature house blend",
      "Perfect for daily drinking",
      "Available in multiple grind sizes",
      "Consistent quality batch after batch",
    ],
    brewing: ["Jebena", "French Press", "Espresso"],
  },
  {
    name: "Chemina",
    type: "Whole Bean Coffee",
    notes: ["Bold", "Cocoa", "Smooth"],
    roast: "Medium-Dark Roast",
    body: "Bold & Full",
    packaging: "Black / Dark Gray",
    price: "Contact for Pricing",
    color: "from-neutral-800 to-black",
    description: "Chemina offers a bold coffee experience with a rich body and deep cocoa notes. The medium-dark roast is ideal for espresso and milk-based coffee drinks.",
    details: [
      "Whole bean for maximum freshness",
      "Bold flavor profile",
      "Excellent for espresso",
      "Pairs well with milk",
    ],
    brewing: ["Espresso", "Macchiato", "Milk drinks"],
  },
  {
    name: "Origin Green",
    type: "Raw Green Coffee Beans",
    notes: ["Natural", "Unroasted", "Fresh"],
    roast: "Unroasted",
    body: "N/A",
    packaging: "Natural Kraft / Green",
    price: "Contact for Pricing",
    color: "from-green-700 to-emerald-800",
    description: "Origin Green is our raw green coffee beans, perfect for home roasters, cafés, and coffee enthusiasts who want to roast their own beans and control their own profile.",
    details: [
      "100% raw Arabica beans",
      "Ideal for home roasting",
      "Available in bulk sizes",
      "Traceable to source farms",
    ],
    brewing: ["Home roasting", "Café supply", "Sample roasting"],
  },
];

export default function Shop() {
  const [filter, setFilter] = useState<string>("All");
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const filters = ["All", "Roasted", "Specialty"];
  const filtered =
    filter === "All"
      ? origins
      : filter === "Roasted"
      ? origins.filter((o) => o.name !== "Origin Green" && o.name !== "Caskara")
      : origins.filter((o) => o.name === "Caskara" || o.name === "Origin Green");

  return (
    <div className="bg-coffee-50">
      {/* HERO */}
      <section className="relative h-[70vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/images/roasting.jpg')" }} />
          <div className="absolute inset-0 bg-gradient-to-r from-coffee-950 via-coffee-950/90 to-coffee-950/70" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-5 lg:px-10 w-full">
          <div className="max-w-3xl">
            <span className="text-xs tracking-[0.3em] uppercase text-coffee-300 font-medium mb-6 block">Our Collection</span>
            <h1 className="font-serif text-7xl md:text-8xl font-medium text-white leading-[0.9] mb-8">
              Premium <span className="italic text-coffee-300">Selection</span>
            </h1>
            <p className="text-xl text-white/80 max-w-2xl">
              Four carefully curated products representing the complete Bean to Bag journey, from raw beans to specialty beverages.
            </p>
          </div>
        </div>
      </section>

      {/* PRODUCT GRID */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-5 lg:px-10">
          <div className="flex flex-wrap items-center justify-between gap-6 mb-16">
            <div>
              <h2 className="font-serif text-5xl text-coffee-950">Our Products</h2>
              <p className="text-coffee-700/80 mt-3">Each product crafted with care from Ethiopian highlands</p>
            </div>
            <div className="flex gap-2">
              {filters.map((f) => (
                <button
                  key={f}
                  onClick={() => setFilter(f)}
                  className={`px-6 py-3 text-sm font-medium rounded-full transition-all ${
                    filter === f
                      ? "bg-coffee-900 text-white"
                      : "bg-coffee-100 text-coffee-900 hover:bg-coffee-200"
                  }`}
                >
                  {f}
                </button>
              ))}
            </div>
          </div>
          <div className="space-y-24">
            {filtered.map((product, i) => (
              <div key={product.name} className={`grid lg:grid-cols-2 gap-16 items-center ${i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""}`}>
                <div className={`relative ${i % 2 === 1 ? "lg:pl-12" : "lg:pr-12"}`}>
                  <div className={`aspect-[4/3] rounded-[3rem] bg-gradient-to-br ${product.color} p-1`}>
                    <div className="w-full h-full bg-coffee-950 rounded-[2.8rem] flex items-center justify-center text-white p-12">
                      <div className="text-center">
                        <div className="w-24 h-24 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center mx-auto mb-6">
                          <Coffee className="w-12 h-12" />
                        </div>
                        <div className="font-serif text-5xl mb-3">{product.name}</div>
                        <div className="text-coffee-300">{product.type}</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-coffee-100 rounded-full text-xs uppercase tracking-wider text-coffee-700 font-medium mb-6">
                    <Package className="w-3.5 h-3.5" />
                    {product.packaging} Packaging
                  </div>
                  <h3 className="font-serif text-4xl md:text-5xl text-coffee-950 mb-4">{product.name}</h3>
                  <p className="text-lg text-coffee-700/85 leading-relaxed mb-8">{product.description}</p>
                  <div className="grid grid-cols-2 gap-4 mb-8">
                    <div className="p-5 bg-coffee-50 rounded-2xl">
                      <div className="text-xs uppercase tracking-wider text-coffee-500 mb-1">Roast Level</div>
                      <div className="font-medium text-coffee-950">{product.roast}</div>
                    </div>
                    <div className="p-5 bg-coffee-50 rounded-2xl">
                      <div className="text-xs uppercase tracking-wider text-coffee-500 mb-1">Body</div>
                      <div className="font-medium text-coffee-950">{product.body}</div>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-8">
                    {product.notes.map((n) => (
                      <span key={n} className="px-4 py-2 bg-coffee-900 text-white rounded-full text-sm">{n}</span>
                    ))}
                  </div>
                  <div className="mb-8">
                    <h4 className="font-medium text-coffee-950 mb-3">Key Features</h4>
                    <ul className="space-y-2">
                      {product.details.map((detail) => (
                        <li key={detail} className="flex items-start gap-3 text-coffee-700">
                          <Check className="w-4 h-4 text-coffee-600 mt-0.5 shrink-0" />
                          <span className="text-sm">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex items-center justify-between pt-6 border-t border-coffee-200">
                    <div>
                      <div className="text-xs uppercase tracking-wider text-coffee-500 mb-1">Pricing</div>
                      <div className="font-serif text-2xl text-coffee-950">{product.price}</div>
                    </div>
                    <button className="px-8 py-4 bg-coffee-900 hover:bg-coffee-700 text-white font-medium rounded-full transition-colors flex items-center gap-2">
                      <ShoppingBag className="w-4 h-4" />
                      Order Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PACKAGING SIZES */}
      <section className="py-32 bg-coffee-950 text-white">
        <div className="max-w-7xl mx-auto px-5 lg:px-10">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-xs tracking-[0.3em] uppercase text-coffee-400 font-medium">Available Sizes</span>
            <h2 className="font-serif text-5xl md:text-6xl mt-4">Packaging Options</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="p-12 bg-gradient-to-br from-coffee-900 to-coffee-800 rounded-[3rem] border border-coffee-700/50">
              <Package className="w-12 h-12 text-coffee-300 mb-6" />
              <h3 className="font-serif text-3xl mb-6">Roasted Coffee</h3>
              <div className="space-y-4">
                {[
                  { size: "250g", desc: "Perfect for trying new blends" },
                  { size: "500g", desc: "Ideal for regular drinkers" },
                  { size: "1kg", desc: "Best value for enthusiasts" },
                ].map((item) => (
                  <div key={item.size} className="flex items-center justify-between p-4 bg-white/5 rounded-2xl">
                    <span className="font-serif text-2xl">{item.size}</span>
                    <span className="text-sm text-white/70">{item.desc}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="p-12 bg-gradient-to-br from-coffee-800 to-coffee-900 rounded-[3rem] border border-coffee-700/50">
              <Leaf className="w-12 h-12 text-coffee-300 mb-6" />
              <h3 className="font-serif text-3xl mb-6">Green Coffee</h3>
              <div className="space-y-4">
                {[
                  { size: "500g", desc: "Sample size for testing" },
                  { size: "1kg", desc: "Home roaster favorite" },
                  { size: "5kg", desc: "Café and bulk orders" },
                ].map((item) => (
                  <div key={item.size} className="flex items-center justify-between p-4 bg-white/5 rounded-2xl">
                    <span className="font-serif text-2xl">{item.size}</span>
                    <span className="text-sm text-white/70">{item.desc}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-32 bg-white">
        <div className="max-w-4xl mx-auto px-5 lg:px-10">
          <div className="text-center mb-16">
            <span className="text-xs tracking-[0.3em] uppercase text-coffee-500 font-medium">FAQ</span>
            <h2 className="font-serif text-5xl text-coffee-950 mt-4">Common Questions</h2>
          </div>
          <div className="space-y-4">
            {[
              {
                q: "What is the roast level of your coffee?",
                a: "All our roasted coffees (Qalid's Choice and Chemina) are roasted to a Medium-Dark roast level. This provides balanced acidity, full body, rich chocolate and cocoa notes, and a smooth finish.",
              },
              {
                q: "What brewing methods work best?",
                a: "Our medium-dark roast profile is designed to work well for Jebena brewing, Espresso, Macchiato, French press, and milk-based drinks. Each product has specific brewing recommendations.",
              },
              {
                q: "Do you offer wholesale pricing?",
                a: "Yes, we supply cafés, offices, and retailers. Contact us for wholesale pricing and partnership opportunities. We offer flexible packaging sizes including 5kg bags for commercial use.",
              },
              {
                q: "What makes Caskara special?",
                a: "Caskara is made from the dried skin of coffee cherries, creating a naturally sweet and fruity beverage with delicate floral notes. It's a sustainable way to use the entire coffee cherry.",
              },
              {
                q: "Can I visit your roastery?",
                a: "We're based in Addis Ababa, Ethiopia. Contact us to arrange a visit and see our small-batch roasting process in action.",
              },
            ].map((f, i) => (
              <div key={i} className="border border-coffee-200 rounded-3xl overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-coffee-50 transition-colors"
                >
                  <span className="font-medium text-lg text-coffee-950 pr-8">{f.q}</span>
                  <ChevronDown className={`w-5 h-5 text-coffee-600 transition-transform shrink-0 ${openFaq === i ? "rotate-180" : ""}`} />
                </button>
                {openFaq === i && (
                  <div className="px-8 pb-6 text-coffee-700 leading-relaxed">
                    {f.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 bg-coffee-100">
        <div className="max-w-4xl mx-auto px-5 lg:px-10 text-center">
          <Award className="w-16 h-16 text-coffee-600 mx-auto mb-8" />
          <h2 className="font-serif text-5xl text-coffee-950 mb-6">Ready to Experience Bean to Bag?</h2>
          <p className="text-xl text-coffee-700/80 mb-12 max-w-2xl mx-auto">
            From raw beans to perfectly roasted coffee, discover the complete journey in every cup.
          </p>
          <Link to="/contact" className="inline-flex items-center gap-2 px-10 py-5 bg-coffee-900 hover:bg-coffee-700 text-white font-medium rounded-full transition-all">
            Place Your Order <ShoppingBag className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
