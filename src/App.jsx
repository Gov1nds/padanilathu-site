import React from "react";

/* ---------------------------------------------------------
   Padanilathu — Premium Minimal Edition (Updated Final)
   - Centered minimal hero (A1)
   - Soft typography (T1)
   - Soft dark gradient overlay (H1)
   - Nav includes Articles & News + big Get Started bubble
   - "Premium Material Sourcing" renamed to "Material Sourcing"
   - Clean, professional card and layout styles
----------------------------------------------------------*/

/* Simple image component with graceful fallback */
const SmartImage = ({ src, alt, className }) => (
  <img
    src={src}
    alt={alt}
    className={className}
    onError={(e) => (e.currentTarget.style.display = "none")}
  />
);

/* --- Content data --- */
const services = [
  {
    id: 1,
    title: "Net-Zero & Passive Design",
    desc: "Ultra-efficient envelopes, natural cooling and daylight optimisation.",
    img: "/images/service1.png",
  },
  {
    id: 2,
    title: "AI Smart Home & Office",
    desc: "Intelligent automation, predictive energy systems and ambient controls.",
    img: "/images/service2.png",
  },
  {
    id: 3,
    title: "Material Sourcing",
    desc: "Sustainable local materials: Kerala stone, low-VOC finishes.",
    img: "/images/service3.png",
  },
  {
    id: 4,
    title: "Full Project Lifecycle",
    desc: "Concept → design → build → QA → handover, with rigorous quality checks.",
    img: "/images/service4.png",
  },
];

const projects = [
  {
    id: 1,
    title: "Net-Zero Corporate HQ",
    category: "Green Office",
    desc: "AI-driven climate systems and passive solar architecture.",
    img: "/images/project1.png",
  },
  {
    id: 2,
    title: "High-Efficiency Residence",
    category: "Residential",
    desc: "Natural ventilation + smart material choices.",
    img: "/images/project2.png",
  },
  {
    id: 3,
    title: "Sustainable Café Renovation",
    category: "Commercial",
    desc: "Geothermal cooling and daylight-led layout.",
    img: "/images/project3.png",
  },
  {
    id: 4,
    title: "Coastal Eco-Retreat",
    category: "Hospitality",
    desc: "Low-impact foundations and native planting.",
    img: "/images/project4.png",
  },
  {
    id: 5,
    title: "Garden & Hardscape Design",
    category: "Landscape",
    desc: "Kerala stone pathways and fruit-integrated gardens.",
    img: "/images/project5.png",
  },
  {
    id: 6,
    title: "Automation Pilot Plant",
    category: "Industrial",
    desc: "Robotics + predictive maintenance facility.",
    img: "/images/project6.png",
  },
];

const articles = [
  {
    id: "a1",
    title: "Sustainability in Modern Construction",
    excerpt:
      "Lifecycle thinking reduces operational costs and emissions. Passive measures plus durable materials are the highest ROI for long-term performance.",
  },
  {
    id: "a2",
    title: "AI in Homes: Everyday Benefits",
    excerpt:
      "Localized AI hubs optimize comfort, predict failures and reduce energy use—saving money while improving wellbeing.",
  },
  {
    id: "a3",
    title: "Designing Resilient Eco-Resorts",
    excerpt:
      "Low-impact foundations, native planting, and passive cooling protect fragile coastal and forest ecosystems while offering guest comfort.",
  },
];

const news = [
  {
    id: "n1",
    date: "2025-09-15",
    title: "Partnership: AI Energy Management Firm",
    excerpt:
      "We teamed up with a leader in predictive energy systems to enhance residential and commercial projects.",
  },
  {
    id: "n2",
    date: "2025-10-01",
    title: "Corporate HQ Structural Completion",
    excerpt: "Structural phase complete; systems integration now underway.",
  },
  {
    id: "n3",
    date: "2025-12-01",
    title: "Christmas Offer: Energy Audits",
    excerpt:
      "Holiday special — discounted Net-Zero feasibility audits and consultation packages for small businesses.",
  },
];

/* --- Inline theme CSS for immediate preview --- */
const theme = `
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&family=Poppins:wght@600;700&display=swap');

  :root {
    --accent: #059669;
    --primary: #0B2545;
    --muted: #6B7280;
  }
  body { font-family: 'Inter', system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif; background: #ffffff; color: #0f172a; }
  h1,h2,h3 { font-family: 'Poppins', sans-serif; }
  .nav-item { font-size: 16px; font-weight: 600; color: #0f172a; transition: color .18s ease; }
  .nav-item:hover { color: var(--accent); }
  .cta-bubble { background: linear-gradient(180deg,var(--accent), #04784f); color: white; padding: 10px 20px; border-radius: 999px; font-weight:700; box-shadow: 0 6px 20px rgba(5,102,70,0.12); }
  .card { border: 1px solid rgba(15,23,42,0.06); border-radius: 12px; background: white; overflow: hidden; transition: box-shadow .18s ease, transform .18s ease; }
  .card:hover { box-shadow: 0 12px 40px rgba(2,6,23,0.06); transform: translateY(-4px); }
`;

/* --- App component --- */
export default function App() {
  return (
    <div className="min-h-screen">
      <style>{theme}</style>

      {/* NAV */}
      <header className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-emerald-600 text-white rounded-md flex items-center justify-center font-semibold">P</div>
            <div className="text-lg font-semibold">Padanilathu</div>
          </div>

          <nav className="hidden md:flex items-center gap-6">
            <a className="nav-item" href="#services">Services</a>
            <a className="nav-item" href="#projects">Projects</a>
            <a className="nav-item" href="#articles">Articles</a>
            <a className="nav-item" href="#news">News</a>
            <a className="nav-item" href="#contact">Contact</a>

            <a className="ml-4 cta-bubble" href="#contact" aria-label="Get Started">Get Started</a>
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section id="hero" className="relative h-[80vh] flex items-center justify-center text-center">
        <SmartImage src="/images/hero-main.png" alt="Hero" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/45 to-black/20"></div>

        <div className="relative z-10 max-w-3xl px-6">
          <h1 className="text-white text-4xl md:text-5xl font-semibold leading-tight">
            Building a Sustainable Future Driven by Innovation
          </h1>

          <p className="text-white/90 text-lg md:text-xl mt-6 max-w-2xl mx-auto">
            We design and construct intelligent, high-efficiency structures, seamlessly merging advanced construction, AI integration, and Net-Zero sustainability.
          </p>

          <div className="mt-8 flex justify-center gap-4">
            <a href="#contact" className="bg-white text-emerald-600 px-6 py-3 rounded-full font-semibold shadow-sm">Request Proposal</a>
            <a href="#projects" className="border border-white/30 text-white px-6 py-3 rounded-full font-semibold">View Projects</a>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-semibold text-center mb-4">Our Core Expertise</h2>
          <p className="text-center text-gray-600 max-w-xl mx-auto mb-10">Clean, efficient and future-ready building solutions delivered end-to-end.</p>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {services.map((s) => (
              <div key={s.id} className="card">
                <SmartImage src={s.img} alt={s.title} className="w-full h-44 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-medium mb-2">{s.title}</h3>
                  <p className="text-gray-600 text-sm">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-3xl font-semibold">Featured Projects</h2>
            <a href="#news" className="text-sm text-emerald-600 font-semibold">See news</a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {projects.map((p) => (
              <div key={p.id} className="card">
                <SmartImage src={p.img} alt={p.title} className="w-full h-56 object-cover" />
                <div className="p-6">
                  <span className="inline-block bg-emerald-600 text-white text-xs px-2 py-1 rounded-full">{p.category}</span>
                  <h3 className="text-lg font-medium mt-3">{p.title}</h3>
                  <p className="text-gray-600 text-sm mt-2">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* INSIGHTS / BRIEF BELOW PROJECTS */}
          <div className="mt-12 p-6 bg-white border border-gray-100 rounded-xl">
            <h3 className="text-xl font-semibold mb-3">Insights — Brief from our engineering team</h3>
            <p className="text-gray-700 mb-4">We combine passive design and predictive AI to reduce operational energy and improve occupant wellbeing. Below are short insights you can apply to any project.</p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 bg-gray-50 rounded">
                <h4 className="font-semibold mb-2">Passive Design</h4>
                <p className="text-sm text-gray-600">Orientation, shading and insulation tuned to local climate reduce heating and cooling loads without always relying on technology.</p>
              </div>
              <div className="p-4 bg-gray-50 rounded">
                <h4 className="font-semibold mb-2">AI Predictive Systems</h4>
                <p className="text-sm text-gray-600">Sensor-driven controls anticipate faults and optimize comfort while lowering energy use and maintenance costs.</p>
              </div>
              <div className="p-4 bg-gray-50 rounded">
                <h4 className="font-semibold mb-2">Eco-Resort Strategies</h4>
                <p className="text-sm text-gray-600">Low-impact foundations and native planting minimize erosion and protect habitats while providing guest comfort.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ARTICLES */}
      <section id="articles" className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-semibold text-center mb-6">Articles & Insights</h2>
          <p className="text-center text-gray-600 mb-10 max-w-2xl mx-auto">Short expert pieces on sustainability, AI for everyday life, and resilient design for sensitive environments.</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {articles.map((a) => (
              <article key={a.id} className="card p-6">
                <h3 className="text-lg font-medium mb-2">{a.title}</h3>
                <p className="text-sm text-gray-700">{a.excerpt}</p>
                <a href="#contact" className="inline-block mt-4 text-emerald-600 font-semibold">Read More →</a>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* NEWS & UPDATES */}
      <section id="news" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-semibold text-center mb-6">News & Updates</h2>
          <p className="text-center text-gray-600 mb-8">Latest milestones, company news and seasonal updates.</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {news.map((n) => (
              <div key={n.id} className="card p-6">
                <span className="text-xs text-gray-500 block mb-2">{n.date}</span>
                <h3 className="font-medium text-lg mb-2">{n.title}</h3>
                <p className="text-sm text-gray-700">{n.excerpt}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-20">
        <div className="max-w-lg mx-auto px-6">
          <h2 className="text-3xl font-semibold text-center mb-6">Let’s Build Smarter Together</h2>

          <form className="bg-gray-50 border border-gray-100 rounded-xl p-8 space-y-4">
            <input type="text" placeholder="Your Name" className="w-full p-3 border rounded" required />
            <input type="email" placeholder="Your Email" className="w-full p-3 border rounded" required />
            <textarea placeholder="Tell us about your project..." rows="4" className="w-full p-3 border rounded" required />
            <button type="submit" className="w-full bg-emerald-600 text-white py-3 rounded font-semibold">Send Inquiry</button>
          </form>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-10 border-t border-gray-100 text-center text-gray-500">
        © 2025 Padanilathu. All rights reserved.
      </footer>
    </div>
  );
}
