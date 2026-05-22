import Image from "next/image";
import Link from "next/link";
import { concepts } from "./lib/concepts";
import { liveSites } from "./lib/live-sites";
import { FadeIn, Reveal } from "./components/Reveal";

const philosophy = [
  "Visual direction before decoration",
  "Websites that clarify the brand",
  "Atmosphere that still converts",
];

const services = [
  {
    title: "Website Design & Build",
    description:
      "Custom responsive websites with strong visual direction, polished interaction, and clean front-end execution.",
  },
  {
    title: "Digital Brand Presence",
    description:
      "A sharper online look and feel through color, type, imagery, messaging, and the way the brand shows up on screen.",
  },
  {
    title: "Creative Refresh",
    description:
      "A focused makeover for brands that already exist but need to feel more premium, current, and memorable.",
  },
];

export default function Home() {
  return (
    <main className="overflow-hidden">
      <section className="film-grain relative px-5 py-6 sm:px-8 lg:px-12">
        <nav className="mx-auto flex max-w-7xl items-center justify-between border-b border-espresso/10 pb-5 text-sm text-charcoal/68">
          <Link href="/" className="font-serif text-2xl text-charcoal">
            Gino Diblasi
          </Link>
          <div className="hidden items-center gap-8 md:flex">
            <a href="#live-websites" className="transition hover:text-charcoal">
              Live Work
            </a>
            <a href="#services" className="transition hover:text-charcoal">
              Services
            </a>
            <Link href="/concepts" className="transition hover:text-charcoal">
              Concepts
            </Link>
            <a href="#philosophy" className="transition hover:text-charcoal">
              Philosophy
            </a>
            <a href="#contact" className="transition hover:text-charcoal">
              Contact
            </a>
          </div>
        </nav>

        <div className="mx-auto grid min-h-[calc(100vh-6rem)] max-w-7xl items-center gap-12 py-14 lg:grid-cols-[1fr_.74fr] lg:py-20">
          <FadeIn className="max-w-4xl">
            <p className="editorial-eyebrow mb-6 text-espresso/70">
              Web Design / Brand Presence
            </p>
            <h1 className="max-w-5xl font-serif text-[clamp(3.4rem,9vw,8.8rem)] leading-[0.9] text-charcoal">
              Cinematic websites and brand refreshes for local businesses.
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-8 text-charcoal/66 sm:text-xl">
              I design and build atmospheric digital experiences that help
              restaurants, hospitality spaces, lifestyle brands, and local
              services feel more premium, memorable, and alive online.
            </p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <a
                href="#live-websites"
                className="inline-flex items-center justify-center border border-charcoal bg-charcoal px-7 py-4 text-sm font-semibold uppercase tracking-[0.16em] text-crema transition hover:bg-transparent hover:text-charcoal"
              >
                View Live Work
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center border border-espresso/20 px-7 py-4 text-sm font-semibold uppercase tracking-[0.16em] text-charcoal transition hover:border-charcoal"
              >
                Start a Conversation
              </a>
            </div>
          </FadeIn>

          <Reveal className="hidden lg:block" delay={0.15}>
            <div className="relative ml-auto aspect-[4/5] w-full max-w-sm overflow-hidden shadow-[0_28px_80px_rgba(77,51,39,0.16)]">
              <div className="absolute inset-0 vera-image" />
            </div>
          </Reveal>
        </div>
      </section>

      <section id="live-websites" className="px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <Reveal className="mb-12 flex flex-col justify-between gap-6 border-b border-espresso/10 pb-8 md:flex-row md:items-end">
            <div>
              <p className="editorial-eyebrow text-espresso/70">Launched Work</p>
              <h2 className="mt-4 font-serif text-5xl text-charcoal md:text-7xl">
                Live Websites
              </h2>
            </div>
            <p className="max-w-md text-base leading-7 text-charcoal/58">
              Real websites that are published, active, and ready to visit.
            </p>
          </Reveal>

          {liveSites.length > 0 ? (
            <div className="grid gap-6 lg:grid-cols-2">
              {liveSites.map((site, index) => (
                <Reveal key={site.href} delay={index * 0.06}>
                  <article className="flex h-full flex-col overflow-hidden soft-panel">
                    <div className="relative aspect-[16/10] overflow-hidden border-b border-espresso/10 bg-charcoal/5">
                      <Image
                        src={site.image}
                        alt={`${site.title} website preview`}
                        fill
                        sizes="(min-width: 1024px) 50vw, 100vw"
                        className="object-cover object-top transition duration-700 hover:scale-[1.03]"
                      />
                    </div>
                    <div className="flex flex-1 flex-col justify-between p-7 sm:p-8">
                      <div>
                        <p className="editorial-eyebrow text-espresso/70">
                          {site.category}
                        </p>
                        <h3 className="mt-5 font-serif text-4xl leading-none text-charcoal sm:text-5xl">
                          {site.title}
                        </h3>
                        <p className="mt-5 text-base leading-8 text-charcoal/62">
                          {site.description}
                        </p>
                      </div>
                      <a
                        href={site.href}
                        target="_blank"
                        rel="noreferrer"
                        className="mt-10 inline-flex w-fit border border-espresso/20 px-6 py-3 text-xs font-semibold uppercase tracking-[0.16em] text-charcoal transition hover:border-charcoal hover:bg-charcoal hover:text-crema"
                      >
                        Open Site
                      </a>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          ) : (
            <Reveal>
              <div className="soft-panel p-8 sm:p-10">
                <p className="max-w-2xl text-lg leading-8 text-charcoal/62">
                  Add the live site names and URLs here, and this section will
                  turn into polished link cards for each launched website.
                </p>
              </div>
            </Reveal>
          )}
        </div>
      </section>

      <section id="services" className="bg-[#fffaf1]/55 px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <Reveal className="mb-12 max-w-4xl">
            <p className="editorial-eyebrow text-espresso/70">What I Shape</p>
            <h2 className="mt-5 font-serif text-5xl leading-[0.98] text-charcoal md:text-7xl">
              Not just a website. A more complete digital first impression.
            </h2>
          </Reveal>

          <div className="grid gap-4 lg:grid-cols-3">
            {services.map((service, index) => (
              <Reveal key={service.title} delay={index * 0.06}>
                <article className="h-full soft-panel p-7 sm:p-8">
                  <p className="font-serif text-4xl text-espresso/58">
                    0{index + 1}
                  </p>
                  <h3 className="mt-8 font-serif text-4xl leading-none text-charcoal">
                    {service.title}
                  </h3>
                  <p className="mt-5 text-base leading-8 text-charcoal/62">
                    {service.description}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <Reveal className="mb-12 flex flex-col justify-between gap-6 border-b border-espresso/10 pb-8 md:flex-row md:items-end">
            <div>
              <p className="editorial-eyebrow text-espresso/70">Concept Studies</p>
              <h2 className="mt-4 font-serif text-5xl text-charcoal md:text-7xl">
                Selected Concepts
              </h2>
            </div>
            <p className="max-w-md text-base leading-7 text-charcoal/58">
              Self-directed brand worlds and web experiences that explore mood,
              voice, imagery, and interface direction.
            </p>
          </Reveal>

          <div className="grid gap-8">
            {concepts.map((concept) => (
              <Reveal key={concept.slug}>
                <article className="group grid overflow-hidden soft-panel lg:grid-cols-[.9fr_1.1fr]">
                  <div
                    className={`${concept.imageClass} min-h-80 transition duration-700 group-hover:scale-[1.02]`}
                  />
                  <div className="flex flex-col justify-center p-7 sm:p-10 lg:p-14">
                    <div>
                      <p className="editorial-eyebrow text-espresso/70">
                        {concept.category}
                      </p>
                      <h3 className="mt-5 font-serif text-5xl leading-none text-charcoal sm:text-6xl">
                        {concept.title}
                      </h3>
                      <p className="mt-6 max-w-xl text-base leading-8 text-charcoal/62">
                        {concept.description}
                      </p>
                    </div>
                    <Link
                      href={`/concepts/${concept.slug}`}
                      className="mt-10 inline-flex w-fit items-center border border-espresso/20 px-6 py-3 text-xs font-semibold uppercase tracking-[0.16em] text-charcoal transition hover:border-charcoal hover:bg-charcoal hover:text-crema"
                    >
                      View Concept
                    </Link>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="philosophy" className="px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[.82fr_1.18fr]">
          <Reveal>
            <p className="editorial-eyebrow text-espresso/70">Design Philosophy</p>
            <h2 className="mt-5 font-serif text-5xl leading-[0.98] text-charcoal md:text-7xl">
              Make the first impression feel inevitable.
            </h2>
          </Reveal>
          <div className="grid gap-4">
            {philosophy.map((item, index) => (
              <Reveal key={item} delay={index * 0.08}>
                <div className="flex gap-6 border-t border-espresso/10 py-7">
                  <span className="font-serif text-3xl text-espresso/58">
                    0{index + 1}
                  </span>
                  <p className="font-serif text-3xl leading-tight text-charcoal sm:text-4xl">
                    {item}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_1fr] lg:items-center">
          <Reveal>
            <div className="studio-image aspect-[5/4] overflow-hidden shadow-[0_28px_80px_rgba(77,51,39,0.14)]" />
          </Reveal>
          <Reveal delay={0.12}>
            <p className="editorial-eyebrow text-espresso/70">About</p>
            <h2 className="mt-5 font-serif text-5xl leading-none text-charcoal md:text-7xl">
              I build the kind of online presence I wish more local brands had.
            </h2>
            <p className="mt-7 text-lg leading-8 text-charcoal/62">
              I’m Gino Diblasi, a designer and developer focused on websites
              that feel polished, atmospheric, and specific. I like helping
              restaurants, hospitality spaces, lifestyle brands, and local
              businesses sharpen how they show up online without losing the
              personality that made people care in the first place.
            </p>
          </Reveal>
        </div>
      </section>

      <section id="contact" className="px-5 pb-8 sm:px-8 lg:px-12">
        <Reveal>
          <div className="mx-auto max-w-7xl overflow-hidden bg-charcoal p-8 text-crema sm:p-12 lg:p-16">
            <p className="editorial-eyebrow text-brass">Contact CTA</p>
            <div className="mt-8 grid gap-10 lg:grid-cols-[1.1fr_.9fr] lg:items-end">
              <h2 className="font-serif text-5xl leading-none md:text-7xl">
                Let’s shape a digital atmosphere worth remembering.
              </h2>
              <div>
                <p className="text-lg leading-8 text-crema/66">
                  Available for website design, front-end builds, creative
                  refreshes, and premium digital presence for hospitality,
                  lifestyle, and neighborhood businesses.
                </p>
                <a
                  href="mailto:hello@ginodiblasi.com"
                  className="mt-8 inline-flex border border-crema bg-crema px-7 py-4 text-sm font-semibold uppercase tracking-[0.16em] text-charcoal transition hover:bg-transparent hover:text-crema"
                >
                  hello@ginodiblasi.com
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </section>
    </main>
  );
}
