import React, { useEffect, useState } from "react";

export default function App() {
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    // Pause hero video on small screens to save bandwidth
    const check = () => {
      const video = document.querySelector("section#home video");
      if (!video) return;
      if (window.innerWidth < 700) {
        video.pause();
        video.style.display = "none";
      } else {
        video.style.display = "";
        video.play().catch(() => {});
      }
    };
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  return (
    <>
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/70 backdrop-blur-sm border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            <a href="#home" className="flex items-center gap-3">
              <div
                className="w-9 h-9 rounded-md"
                style={{ background: "var(--pad-green, #6FA56F)" }}
              />
              <div className="font-poppins font-semibold text-lg text-slate-900">
                Padanilathu
              </div>
              <div className="ml-3 text-sm text-slate-500">Since 2008</div>
            </a>

            <nav className="hidden md:flex items-center gap-6 text-sm text-slate-600">
              <a href="#sectors" className="hover:text-slate-900">
                Sectors
              </a>
              <a href="#services" className="hover:text-slate-900">
                Services
              </a>
              <a href="#projects" className="hover:text-slate-900">
                Projects
              </a>
              <a href="#insights" className="hover:text-slate-900">
                Insights
              </a>
              <a href="#news" className="hover:text-slate-900">
                News
              </a>
              <a href="#about" className="hover:text-slate-900">
                About
              </a>
              <a href="#careers" className="hover:text-slate-900">
                Careers
              </a>
              <a
                href="#contact"
                className="inline-flex items-center bg-[var(--pad-green,#6FA56F)] hover:bg-[var(--pad-green-dark,#507953)] text-white text-sm font-semibold px-4 py-2 rounded-md"
              >
                Contact
              </a>
            </nav>

            <div className="md:hidden">
              <button
                id="mobileToggle"
                aria-label="Open menu"
                className="p-2 rounded-md border"
                onClick={() => setMobileOpen((s) => !s)}
              >
                ☰
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile nav */}
      <div
        id="mobileNav"
        className={
          "md:hidden fixed inset-x-4 top-20 z-40 bg-white rounded-md shadow-lg p-4 transform transition-all " +
          (mobileOpen ? "block" : "hidden")
        }
      >
        <div className="flex flex-col gap-3 text-slate-700">
          <a href="#sectors" onClick={() => setMobileOpen(false)}>
            Sectors
          </a>
          <a href="#services" onClick={() => setMobileOpen(false)}>
            Services
          </a>
          <a href="#projects" onClick={() => setMobileOpen(false)}>
            Projects
          </a>
          <a href="#insights" onClick={() => setMobileOpen(false)}>
            Insights
          </a>
          <a href="#news" onClick={() => setMobileOpen(false)}>
            News
          </a>
          <a href="#about" onClick={() => setMobileOpen(false)}>
            About
          </a>
          <a href="#careers" onClick={() => setMobileOpen(false)}>
            Careers
          </a>
          <a
            href="#contact"
            className="mt-2 inline-flex items-center bg-[var(--pad-green,#6FA56F)] hover:bg-[var(--pad-green-dark,#507953)] text-white text-sm font-semibold px-4 py-2 rounded-md"
            onClick={() => setMobileOpen(false)}
          >
            Contact
          </a>
        </div>
      </div>

      {/* HERO */}
      <section id="home" className="relative h-screen min-h-[640px]">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          poster="/images/hero1.jpg"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="/videos/hero1.mp4" type="video/mp4" />
          <source src="/videos/hero1.webm" type="video/webm" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/36" />

        <div className="relative z-20 max-w-7xl mx-auto px-6 h-full flex items-center">
          <div className="text-white max-w-3xl">
            <h1 className="font-poppins text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
              Designing Enduring, High-Quality Outdoor Spaces for Kerala
            </h1>
            <p className="mt-4 text-lg md:text-xl text-white/90">
              Landscape architecture, natural stone paving, exterior design and 3D
              visualization — delivered statewide with a focus on Ernakulam.
            </p>

            <div className="mt-6 flex flex-wrap gap-4 items-center">
              <a
                href="#services"
                className="inline-flex items-center bg-white text-[var(--pad-green,#6FA56F)] font-semibold px-4 py-2 rounded-md shadow-sm"
              >
                Explore Services
              </a>
              <a
                href="#projects"
                className="inline-flex items-center border border-white/30 text-white px-4 py-2 rounded-md"
              >
                View Projects
              </a>
            </div>

            <div className="mt-8 flex gap-6 flex-wrap">
              <div className="bg-white/10 rounded-lg p-3 min-w-[180px]">
                <div className="text-2xl font-semibold">500+</div>
                <div className="text-sm text-white/80">Completed Sites</div>
              </div>
              <div className="bg-white/10 rounded-lg p-3 min-w-[180px]">
                <div className="text-2xl font-semibold">17+</div>
                <div className="text-sm text-white/80">Years of Experience</div>
              </div>
              <div className="bg-white/10 rounded-lg p-3 min-w-[220px]">
                <div className="text-2xl font-semibold">Integrated</div>
                <div className="text-sm text-white/80">Design–Build Delivery</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <main className="relative max-w-7xl mx-auto px-6 -mt-24 pb-24">
        {/* Sectors */}
        <section
          id="sectors"
          className="bg-white rounded-xl shadow-sm p-8"
          aria-label="Sectors"
        >
          <div className="flex items-start justify-between">
            <div>
              <h2 className="text-2xl font-poppins font-semibold">Sectors</h2>
              <p className="mt-2 text-sm text-slate-600">
                We create outdoor environments across multiple sectors and
                project sizes.
              </p>
            </div>
            <div className="hidden md:flex gap-3">
              <a href="#sectors" className="text-sm text-slate-500">
                Explore all
              </a>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <a
              href="#sector-residential"
              className="relative block rounded-lg overflow-hidden h-44 bg-cover bg-center"
              style={{ backgroundImage: "url('/images/sector_residential.jpg')" }}
              aria-label="Residential sector"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              <div className="absolute bottom-4 left-4 text-white font-semibold">
                Residential
              </div>
            </a>

            <a
              href="#sector-commercial"
              className="relative block rounded-lg overflow-hidden h-44 bg-cover bg-center"
              style={{ backgroundImage: "url('/images/sector_commercial.jpg')" }}
              aria-label="Commercial sector"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              <div className="absolute bottom-4 left-4 text-white font-semibold">
                Commercial
              </div>
            </a>

            <a
              href="#sector-hospitality"
              className="relative block rounded-lg overflow-hidden h-44 bg-cover bg-center"
              style={{ backgroundImage: "url('/images/sector_hospitality.jpg')" }}
              aria-label="Hospitality sector"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              <div className="absolute bottom-4 left-4 text-white font-semibold">
                Hospitality
              </div>
            </a>

            <a
              href="#sector-public"
              className="relative block rounded-lg overflow-hidden h-44 bg-cover bg-center"
              style={{ backgroundImage: "url('/images/sector_public.jpg')" }}
              aria-label="Public and recreational sector"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              <div className="absolute bottom-4 left-4 text-white font-semibold">
                Public & Recreational
              </div>
            </a>

            <a
              href="#sector-institutional"
              className="relative block rounded-lg overflow-hidden h-44 bg-cover bg-center"
              style={{
                backgroundImage: "url('/images/sector_institutional.jpg')",
              }}
              aria-label="Institutional sector"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              <div className="absolute bottom-4 left-4 text-white font-semibold">
                Institutional
              </div>
            </a>

            <a
              href="#sector-developers"
              className="relative block rounded-lg overflow-hidden h-44 bg-cover bg-center"
              style={{ backgroundImage: "url('/images/sector_developers.jpg')" }}
              aria-label="Real estate and developers"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              <div className="absolute bottom-4 left-4 text-white font-semibold">
                Real Estate & Developers
              </div>
            </a>

            <a
              href="#sector-industrial"
              className="relative block rounded-lg overflow-hidden h-44 bg-cover bg-center"
              style={{ backgroundImage: "url('/images/sector_industrial.jpg')" }}
              aria-label="Industrial sector"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              <div className="absolute bottom-4 left-4 text-white font-semibold">
                Industrial
              </div>
            </a>
          </div>
        </section>

        {/* Services */}
        <section id="services" className="mt-8">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-poppins font-semibold">Services</h2>
              <p className="mt-2 text-sm text-slate-600">
                Complete expertise from concept and 3D visualization to
                construction and maintenance.
              </p>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                src: "/images/service_landscape.jpg",
                alt: "Landscaping and Gardening",
                title: "Landscaping and Gardening",
                desc:
                  "Master planning, gardens, lawns, vertical & terrace gardens, irrigation and maintenance.",
              },
              {
                src: "/images/service_stonepaving.jpg",
                alt: "Natural stone paving and hardscaping",
                title: "Natural Stone Paving and Hardscaping",
                desc:
                  "Courtyards, driveways, patios, interlock and long-lasting outdoor flooring solutions.",
              },
              {
                src: "/images/service_exterior.jpg",
                alt: "Exterior architecture and 3D design",
                title: "Exterior Architecture and 3D Design",
                desc:
                  "Façade design, pergolas, 3D renders, material boards and construction drawings.",
              },
              {
                src: "/images/service_waterfeatures.jpg",
                alt: "Water features",
                title: "Water Features",
                desc:
                  "Fountains, waterfalls, ponds and eco-circulating systems with lighting and filtration.",
              },
              {
                src: "/images/service_playgrounds.jpg",
                alt: "Playgrounds and sports areas",
                title: "Playgrounds and Sports Areas",
                desc:
                  "Children's play zones, tennis and badminton courts, jogging tracks and outdoor gyms.",
              },
              {
                src: "/images/service_commercial.jpg",
                alt: "Commercial and resort landscaping",
                title: "Commercial and Resort Landscaping",
                desc:
                  "Hospitality exteriors, resort pathways, poolside landscapes, and corporate open areas.",
              },
              {
                src: "/images/service_renovation.jpg",
                alt: "Renovation and maintenance",
                title: "Renovation and Maintenance",
                desc:
                  "Garden restoration, re-paving, seasonal care and annual maintenance packages.",
              },
              {
                src: "/images/service_consulting.jpg",
                alt: "Outdoor space consulting",
                title: "Outdoor Space Consulting",
                desc:
                  "Site assessment, budgeting, material selection, BOQs and supervision.",
              },
              {
                src: "/images/service_sustainability.jpg",
                alt: "Sustainable outdoor solutions",
                title: "Sustainable Outdoor Solutions",
                desc:
                  "Native planting, rainwater integration, low-water irrigation and solar-ready lighting.",
              },
            ].map((s) => (
              <article key={s.title} className="bg-white rounded-lg shadow-sm overflow-hidden">
                <img src={s.src} alt={s.alt} className="w-full h-44 object-cover" />
                <div className="p-4">
                  <h3 className="font-semibold">{s.title}</h3>
                  <p className="mt-2 text-sm text-slate-600">{s.desc}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Projects */}
        <section id="projects" className="mt-10">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-poppins font-semibold">Featured Projects</h2>
              <p className="mt-2 text-sm text-slate-600">
                Selected work across Kerala — courtyards, resorts, cafés and residential gardens.
              </p>
            </div>
            <a href="#projects" className="text-sm text-slate-500">
              View all projects →
            </a>
          </div>

          <div className="mt-6 flex gap-6 overflow-x-auto pb-4">
            {[
              {
                src: "/images/project1_1.jpg",
                alt: "Natural stone courtyard — Ernakulam",
                title: "Natural Stone Courtyard — Ernakulam",
                desc: "Durable paving and courtyard seating area.",
              },
              {
                src: "/images/project2_1.jpg",
                alt: "Tropical waterfall garden — Kottayam",
                title: "Tropical Waterfall Garden — Kottayam",
                desc: "Integrated water feature with native planting palette.",
              },
              {
                src: "/images/project3_1.jpg",
                alt: "Café exterior seating — Kochi",
                title: "Café Exterior Ambience — Kochi",
                desc: "Outdoor dining & lighting design.",
              },
              {
                src: "/images/project4_1.jpg",
                alt: "Resort pathway — Alappuzha",
                title: "Resort Pathway & Plantation — Alappuzha",
                desc: "Pathways and atmospheric lighting.",
              },
            ].map((p) => (
              <article key={p.title} className="min-w-[320px] bg-white rounded-lg shadow-sm overflow-hidden">
                <img src={p.src} alt={p.alt} className="w-full h-44 object-cover" />
                <div className="p-4">
                  <h3 className="font-semibold">{p.title}</h3>
                  <p className="mt-2 text-sm text-slate-600">{p.desc}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Our Process */}
        <section id="process" className="mt-10 bg-white rounded-xl p-6 shadow-sm">
          <h2 className="text-2xl font-poppins font-semibold">Our Process</h2>
          <p className="mt-2 text-sm text-slate-600">A simple, transparent workflow for every project.</p>

          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            <div className="p-4 border rounded-md text-sm text-slate-700">
              <div className="font-semibold">1. Site Consultation</div>
              <div className="text-slate-500 mt-1 text-sm">On-site study and brief development</div>
            </div>
            <div className="p-4 border rounded-md">
              <div className="font-semibold">2. 3D Design & Planning</div>
              <div className="text-slate-500 mt-1 text-sm">Photoreal renders and design approval</div>
            </div>
            <div className="p-4 border rounded-md">
              <div className="font-semibold">3. Material & Budget</div>
              <div className="text-slate-500 mt-1 text-sm">BOQs, sample boards and cost planning</div>
            </div>
            <div className="p-4 border rounded-md">
              <div className="font-semibold">4. Execution & Quality</div>
              <div className="text-slate-500 mt-1 text-sm">Site supervision and finishing standards</div>
            </div>
            <div className="p-4 border rounded-md">
              <div className="font-semibold">5. Handover & Maintenance</div>
              <div className="text-slate-500 mt-1 text-sm">Warranty, training and AMC plans</div>
            </div>
          </div>
        </section>

        {/* Insights */}
        <section id="insights" className="mt-10">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-poppins font-semibold">Insights</h2>
              <p className="mt-2 text-sm text-slate-600">Thought leadership and practical guides from our team.</p>
            </div>
            <a href="#insights" className="text-sm text-slate-500">
              View all insights →
            </a>
          </div>

          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <article className="bg-white rounded-lg shadow-sm p-4">
              <h3 className="font-semibold">Designing Climate-Responsive Landscapes for Kerala</h3>
              <p className="mt-2 text-sm text-slate-600">How heat, humidity and soil influence planning and plant selection.</p>
            </article>

            <article className="bg-white rounded-lg shadow-sm p-4">
              <h3 className="font-semibold">The Role of Native Plants in Sustainable Outdoor Design</h3>
              <p className="mt-2 text-sm text-slate-600">Why native flora reduces maintenance and supports biodiversity.</p>
            </article>

            <article className="bg-white rounded-lg shadow-sm p-4">
              <h3 className="font-semibold">Natural Stone vs Interlock: Choosing the Right Paving Material</h3>
              <p className="mt-2 text-sm text-slate-600">A practical guide to material selection for long term performance.</p>
            </article>
          </div>
        </section>

        {/* News */}
        <section id="news" className="mt-10">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-poppins font-semibold">News</h2>
              <p className="mt-2 text-sm text-slate-600">Company announcements, milestones and project updates.</p>
            </div>
            <a href="#news" className="text-sm text-slate-500">
              View all news →
            </a>
          </div>

          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <article className="bg-white rounded-lg shadow-sm p-4">
              <h3 className="font-semibold">Celebrating 17+ Years of padanilathu</h3>
              <p className="mt-2 text-sm text-slate-600">From 2008 to 2025 — our journey shaping Kerala’s outdoor spaces.</p>
            </article>

            <article className="bg-white rounded-lg shadow-sm p-4">
              <h3 className="font-semibold">500+ Completed Sites Milestone</h3>
              <p className="mt-2 text-sm text-slate-600">A major delivery milestone across residential and commercial sectors.</p>
            </article>

            <article className="bg-white rounded-lg shadow-sm p-4">
              <h3 className="font-semibold">New Regional Focus: Ernakulam</h3>
              <p className="mt-2 text-sm text-slate-600">Expanding operations and quicker response times across Ernakulam district.</p>
            </article>
          </div>
        </section>

        {/* About */}
        <section id="about" className="mt-10 bg-white rounded-xl p-6 shadow-sm">
          <h2 className="text-2xl font-poppins font-semibold">About padanilathu</h2>
          <p className="mt-3 text-sm text-slate-600">Since 2008,
            padanilathu has delivered aesthetic, sustainable outdoor spaces across Kerala. We combine design sensibility with durable materials and a client-focused execution model.
          </p>

          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div>
              <h4 className="font-semibold">Mission</h4>
              <p className="mt-2 text-sm text-slate-600">To design beautiful, sustainable and functional outdoor spaces that enhance lifestyle and property value.</p>
            </div>

            <div>
              <h4 className="font-semibold">Vision</h4>
              <p className="mt-2 text-sm text-slate-600">To be Kerala's most trusted outdoor design partner for homes, businesses, and public spaces.</p>
            </div>

            <div>
              <h4 className="font-semibold">Values</h4>
              <p className="mt-2 text-sm text-slate-600">Creativity · Sustainability · Craftsmanship · Transparency</p>
            </div>
          </div>
        </section>

        {/* Careers */}
        <section id="careers" className="mt-10">
          <h2 className="text-2xl font-poppins font-semibold">Careers</h2>
          <p className="mt-2 text-sm text-slate-600">Join padanilathu — we hire designers, engineers, horticulturists and technicians for projects across Kerala.</p>

          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg shadow-sm p-4">
              <h4 className="font-semibold">Landscape Architect / Designer</h4>
              <p className="mt-1 text-sm text-slate-600">Experience: 2–6 years. Location: Ernakulam. Apply with CV & portfolio.</p>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-4">
              <h4 className="font-semibold">Site Supervisor / Foreman</h4>
              <p className="mt-1 text-sm text-slate-600">Experience: 3+ years. Supervise site teams, ensure quality delivery.</p>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-4">
              <h4 className="font-semibold">Horticulturist / Plant Specialist</h4>
              <p className="mt-1 text-sm text-slate-600">Plant selection, soil & irrigation planning. Apply with references.</p>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-4">
              <h4 className="font-semibold">3D Visualization Intern</h4>
              <p className="mt-1 text-sm text-slate-600">Assist in renders and CAD drawings. Portfolio required.</p>
            </div>
          </div>

          <div className="mt-6">
            <a href="#contact" className="inline-flex items-center bg-[var(--pad-green,#6FA56F)] hover:bg-[var(--pad-green-dark,#507953)] text-white text-sm font-semibold px-4 py-2 rounded-md">Apply Now</a>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="mt-10 bg-white rounded-xl p-6 shadow-sm">
          <h2 className="text-2xl font-poppins font-semibold">Contact</h2>
          <p className="mt-2 text-sm text-slate-600">Request a free site visit and estimate. We serve all of Kerala with a strong presence in Ernakulam.</p>

          <div className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div>
              <p className="text-sm text-slate-600">Quick contact</p>
              <ul className="mt-4 space-y-3 text-sm text-slate-700">
                <li><strong>Phone:</strong> <a className="text-slate-600" href="tel:+91-XXXXXXXXXX">+91-XXXXXXXXXX</a></li>
                <li><strong>Email:</strong> <a className="text-slate-600" href="mailto:hello@padanilathu.com">hello@padanilathu.com</a></li>
                <li><strong>Service area:</strong> All Kerala — focus Ernakulam</li>
              </ul>

              <div className="mt-6 rounded-md overflow-hidden">
                <img src="/images/about_office.jpg" alt="Padanilathu office" className="w-full h-56 object-cover" />
              </div>
            </div>

            <form id="contactForm" className="space-y-3" onSubmit={(e) => { e.preventDefault(); alert("Form submitted — connect backend to process."); }}>
              <input type="text" name="name" required placeholder="Full name" className="w-full p-3 rounded-md border border-slate-200" />
              <input type="tel" name="phone" required placeholder="Phone" className="w-full p-3 rounded-md border border-slate-200" />
              <input type="email" name="email" placeholder="Email (optional)" className="w-full p-3 rounded-md border border-slate-200" />
              <select name="service" className="w-full p-3 rounded-md border border-slate-200">
                <option>Service required</option>
                <option>Landscaping</option>
                <option>Stone paving</option>
                <option>3D design</option>
                <option>Maintenance</option>
              </select>
              <textarea name="message" rows="4" placeholder="Project brief (optional)" className="w-full p-3 rounded-md border border-slate-200" />
              <button type="submit" className="inline-flex items-center bg-[var(--pad-green,#6FA56F)] hover:bg-[var(--pad-green-dark,#507953)] text-white text-sm font-semibold px-4 py-2 rounded-md">Request Site Visit</button>
            </form>
          </div>
        </section>
      </main>

      <footer className="bg-white border-t border-slate-100 mt-16">
        <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="font-poppins font-semibold text-lg">Padanilathu</div>
            <div className="mt-2 text-sm text-slate-600">Transforming Kerala’s outdoor environments since 2008.</div>
            <div className="mt-2 text-sm text-slate-600">17+ Years · 500+ Completed Sites</div>

            <div className="mt-4 flex gap-3">
              <a href="#" aria-label="Instagram" className="w-9 h-9 rounded-md border flex items-center justify-center text-slate-700 hover:bg-[var(--pad-green)] hover:text-white">
                {/* Instagram */}
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.2"/><circle cx="12" cy="12" r="3.2" stroke="currentColor" strokeWidth="1.2"/><circle cx="17.5" cy="6.5" r="0.7" fill="currentColor"/></svg>
              </a>

              <a href="#" aria-label="Facebook" className="w-9 h-9 rounded-md border flex items-center justify-center text-slate-700 hover:bg-[var(--pad-green)] hover:text-white">
                {/* Facebook */}
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="3" y="3" width="18" height="18" rx="3" stroke="currentColor" strokeWidth="1.2"/><path d="M15 8h-1.4c-1 0-1.1.5-1.1 1.1V10h2.5l-.4 2.3H12.5v5H10v-5H8.8V10H10v-1.6C10 6.9 10.9 6 12.6 6H15v2z" fill="currentColor"/></svg>
              </a>
            </div>
          </div>

          <div>
            <div className="font-semibold">Navigation</div>
            <ul className="mt-3 space-y-2 text-sm text-slate-600">
              <li><a href="#sectors">Sectors</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#insights">Insights</a></li>
              <li><a href="#news">News</a></li>
              <li><a href="#careers">Careers</a></li>
            </ul>
          </div>

          <div>
            <div className="font-semibold">Contact</div>
            <div className="mt-3 text-sm text-slate-600">
              Phone: <a href="tel:+91-XXXXXXXXXX" className="text-slate-700">+91-XXXXXXXXXX</a><br />
              Email: <a href="mailto:hello@padanilathu.com" className="text-slate-700">hello@padanilathu.com</a><br />
              Service area: All Kerala — focus Ernakulam
            </div>
          </div>

          <div>
            <div className="font-semibold">Quick Links</div>
            <ul className="mt-3 space-y-2 text-sm text-slate-600">
              <li><a href="#contact">Request a Free Site Visit</a></li>
              <li><a href="#">Download Company Profile (PDF)</a></li>
              <li><a href="#">Privacy Policy</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-100 py-4">
          <div className="max-w-7xl mx-auto px-6 text-center text-sm text-slate-500">© 2025 Pad​anilathu. All rights reserved.</div>
        </div>
      </footer>
    </>
  );
}
