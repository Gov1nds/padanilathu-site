import Container from "../components/Container.jsx";
import SectionHeading from "../components/SectionHeading.jsx";
import ImageCard from "../components/ImageCard.jsx";
import { PrimaryButton, SecondaryButton } from "../components/Buttons.jsx";
import { heroStats, services, outdoorWorks, insights } from "../content/siteData.js";
import CountUp from "../components/CountUp.jsx";


export default function Home() {
  return (
    <div>
    {/* HERO (PGI dark glass style) */}
<section className="relative overflow-hidden border-b border-white/10 bg-[#05070b]">
  {/* Background image (mobile + desktop) */}
  <div className="absolute inset-0">
    <div
      className="
        absolute inset-0
        bg-[url('/images/hero-bg-mobile.jpg')] bg-cover bg-center
        sm:bg-[url('/images/hero-bg.jpg')]
      "
    />
  </div>

  <Container className="relative py-14 sm:py-20">
    {/* top glow */}
    <div className="pointer-events-none absolute -top-24 left-1/2 h-56 w-[52rem] -translate-x-1/2 rounded-full bg-emerald-500/10 blur-3xl" />

    <div className="grid items-stretch gap-8 lg:grid-cols-2">
      {/* LEFT GLASS CARD */}
      <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.06] shadow-2xl backdrop-blur-xl">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_20%,rgba(16,185,129,0.18),transparent_55%),radial-gradient(circle_at_80%_80%,rgba(34,197,94,0.10),transparent_60%)]" />
        <div className="relative p-7 sm:p-10">
          <p className="text-xs font-semibold tracking-wide text-white/70 hero-anim-1">
            Outdoor Development & Landscaping
          </p>

          <h1 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-5xl hero-anim-2">
            Turning your vision into reality
            <span className="block text-emerald-300">
              with expert guidance at every step.
            </span>
          </h1>

          <p className="mt-5 max-w-xl text-sm leading-relaxed text-white/70 hero-anim-3">
            Our expertise lies in premium outdoor and landscape development, integrating sustainable design, green architectural principles, and quality execution to create resilient, eco-conscious environments
          </p>

          <div className="mt-7 flex flex-wrap gap-3 hero-anim-4">
            <div className="hero-cta">
              <PrimaryButton to="/contact">Talk to us</PrimaryButton>
            </div>
            <SecondaryButton to="/services">Explore services</SecondaryButton>
          </div>

          <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4 hero-anim-4">
            {heroStats.map((h) => (
              <div
                key={h.label}
                className="rounded-2xl border border-white/10 bg-black/20 p-4 backdrop-blur-md"
              >
                <div className="text-lg font-semibold text-white">{h.kpi}</div>
                <div className="mt-1 text-xs text-white/60">{h.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* RIGHT GLASS CARD */}
      <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.06] shadow-2xl backdrop-blur-xl">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_15%,rgba(16,185,129,0.20),transparent_55%),radial-gradient(circle_at_80%_75%,rgba(34,197,94,0.14),transparent_60%)]" />
        <div className="relative p-7 sm:p-10">
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-300/20 bg-emerald-400/10 px-4 py-2 text-xs font-semibold text-emerald-100">
            <span className="h-2 w-2 rounded-full bg-emerald-300 animate-pulse" />
            Green Today, Greener Tomorrow
          </div>

          <h3 className="mt-4 text-2xl font-semibold leading-tight text-white sm:text-3xl">
            Lowering footprints
            <span className="block text-emerald-300">Raising standards</span>
          </h3>

          <p className="mt-3 text-sm leading-relaxed text-white/70">
  “The vision of Padanilath: joining nature with technology in vibrantly inclusive ways to create a world that truly blooms.”
</p>


          <div className="mt-7 grid gap-4 sm:grid-cols-3">
            <div className="rounded-2xl border border-white/10 bg-black/20 p-5 backdrop-blur-md transition hover:border-emerald-300/30">
              <div className="text-xs text-white/60">Plants installed</div>
              <div className="mt-1 text-xl font-semibold text-emerald-300">
                <CountUp value={100000} suffix="+" format="indian" />
              </div>
              <div className="mt-1 text-xs text-white/55">Across projects</div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-black/20 p-5 backdrop-blur-md transition hover:border-emerald-300/30">
              <div className="text-xs text-white/60">CO₂ reduced</div>
              <div className="mt-1 text-xl font-semibold text-emerald-300">
                <CountUp value={250} suffix="+ t" format="number" />
              </div>
              <div className="mt-1 text-xs text-white/55">Estimated savings</div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-black/20 p-5 backdrop-blur-md transition hover:border-emerald-300/30">
              <div className="text-xs text-white/60">Carbon footprint</div>
              <div className="mt-1 text-xl font-semibold text-emerald-300">
                <CountUp value={35} suffix="%" format="number" />
              </div>
              <div className="mt-1 text-xs text-white/55">Reduction goal</div>
            </div>
          </div>

          <div className="mt-7 h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent" />
        </div>
      </div>
    </div>
  </Container>
</section>


      {/* SERVICES */}
      <section>
        <Container className="py-14">
          <SectionHeading
            eyebrow="What we do"
            title="Outdoor execution that stays clean and durable"
            desc="Drainage-first planning, strong material choices, sharp finishing, and smooth site coordination."
          />
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {services.slice(0, 3).map((s) => (
              <ImageCard
                key={s.title}
                title={s.title}
                desc={s.desc}
                image={s.image}
                to="/services"
              />
            ))}
          </div>
          <div className="mt-6">
            <SecondaryButton to="/services">View all services</SecondaryButton>
          </div>
        </Container>
      </section>

      {/* OUTDOOR WORKS */}
      <section className="border-y border-white/10 bg-black/20">
        <Container className="py-14">
          <SectionHeading
            eyebrow="Outdoor works"
            title="Specialized in outdoor construction & site development"
            desc="Outdoor works require careful planning—drainage, durability, material choices and long-term maintenance."
          />
          <div className="mt-8 grid gap-6 md:grid-cols-4">
            {outdoorWorks.map((o) => (
              <ImageCard
                key={o.title}
                title={o.title}
                desc={o.desc}
                image={o.image}
                to="/outdoor-works"
              />
            ))}
          </div>
        </Container>
      </section>
{/* TESTIMONIALS SECTION */}
<section className="border-b border-white/10 bg-black/20">
  <Container className="py-14">
    <SectionHeading
      eyebrow="Testimonials"
      title="What our clients say about working with Padanilath"
      desc="Real feedback from project owners and collaborators who trusted us with their Landscaping and outdoor works."
    />

    <div className="mt-10 flex justify-center">
  <div className="w-full max-w-4xl overflow-hidden rounded-3xl bg-white/5 ring-1 ring-white/10 shadow-soft">
    <img
      src="/images/testimonials.jpg"
      alt="Client testimonials and reviews"
      className="w-full h-auto object-contain"
    />
  </div>
</div>

  </Container>
</section>
      {/* INSIGHTS */}
      <section>
        <Container className="py-14">
          <SectionHeading
            eyebrow="Insights"
            title="Field-tested insights for clients and contractors"
            desc="Short reads on budgeting, delivery, quality and outdoor work planning."
          />
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {insights.map((i) => (
              <ImageCard
                key={i.slug}
                title={i.title}
                desc={i.excerpt}
                image={i.image}
                to={`/insights/${i.slug}`}
                tag={i.category}
              />
            ))}
          </div>
          <div className="mt-6">
            <SecondaryButton to="/insights">Browse all insights</SecondaryButton>
          </div>
        </Container>
      </section>

      {/* CTA (dark) */}
      <section className="border-t border-white/10 bg-black/30">
        <Container className="py-14">
          <div className="grid gap-8 rounded-3xl bg-white/5 p-8 ring-1 ring-white/10 md:grid-cols-2 md:items-center">
            <div>
              <h3 className="text-2xl font-semibold">Ready to start your next project?</h3>
              <p className="mt-3 text-sm leading-relaxed text-white/70">
                Share your project scope, location and timeline. We’ll respond with a clear approach and what we can take ownership of.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 md:justify-end">
              <PrimaryButton to="/contact">Contact sales</PrimaryButton>
              <SecondaryButton to="/about">Learn about Padanilath</SecondaryButton>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}