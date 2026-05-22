import Link from "next/link";
import { notFound } from "next/navigation";
import { Reveal } from "../../components/Reveal";
import { concepts } from "../../lib/concepts";

type ConceptPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return concepts.map((concept) => ({
    slug: concept.slug,
  }));
}

export async function generateMetadata({ params }: ConceptPageProps) {
  const { slug } = await params;
  const concept = concepts.find((item) => item.slug === slug);

  if (!concept) {
    return {
      title: "Concept Not Found | Gino Diblasi",
    };
  }

  return {
    title: `${concept.title} Concept | Gino Diblasi`,
    description: concept.description,
  };
}

export default async function ConceptDetailPage({ params }: ConceptPageProps) {
  const { slug } = await params;
  const concept = concepts.find((item) => item.slug === slug);

  if (!concept) {
    notFound();
  }

  return (
    <main className="overflow-hidden">
      <section className="film-grain relative px-5 py-6 sm:px-8 lg:px-12">
        <nav className="mx-auto flex max-w-7xl items-center justify-between border-b border-espresso/10 pb-5 text-sm text-charcoal/68">
          <Link href="/" className="font-serif text-2xl text-charcoal">
            Gino Diblasi
          </Link>
          <Link href="/concepts" className="transition hover:text-charcoal">
            Selected Concepts
          </Link>
        </nav>

        <div className="mx-auto grid min-h-[calc(92vh-6rem)] max-w-7xl items-center gap-12 py-14 lg:grid-cols-[.95fr_1.05fr] lg:py-20">
          <Reveal className="max-w-3xl">
            <p className="editorial-eyebrow text-espresso/70">
              {concept.category}
            </p>
            <h1 className="mt-6 font-serif text-[clamp(4rem,11vw,10rem)] leading-[0.84] text-charcoal">
              {concept.title}
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-8 text-charcoal/66 sm:text-xl">
              {concept.description}
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <div
              className={`${concept.imageClass} min-h-[34rem] shadow-[0_28px_80px_rgba(77,51,39,0.16)]`}
            />
          </Reveal>
        </div>
      </section>

      <section className="px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[.8fr_1.2fr]">
          <Reveal>
            <p className="editorial-eyebrow text-espresso/70">Overview</p>
            <h2 className="mt-5 font-serif text-5xl leading-none text-charcoal md:text-7xl">
              {concept.overviewTitle}
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-xl leading-9 text-charcoal/62">
              {concept.overview}
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-[#fffaf1]/55 px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-3">
          <Reveal>
            <p className="editorial-eyebrow text-espresso/70">
              Visual Direction
            </p>
            <h2 className="mt-5 font-serif text-5xl leading-none text-charcoal">
              {concept.directionTitle}
            </h2>
          </Reveal>
          <Reveal className="lg:col-span-2" delay={0.1}>
            <div className="grid gap-5 sm:grid-cols-3">
              {concept.directionPoints.map((item) => (
                <div key={item} className="soft-panel p-6">
                  <p className="font-serif text-3xl text-charcoal">{item}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <Reveal className="mb-10">
            <p className="editorial-eyebrow text-espresso/70">Color Palette</p>
            <h2 className="mt-5 font-serif text-5xl text-charcoal md:text-7xl">
              {concept.paletteTitle}
            </h2>
          </Reveal>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {concept.palette.map((color) => (
              <Reveal key={color}>
                <div className="soft-panel p-4">
                  <div
                    className="aspect-[4/3] border border-espresso/10"
                    style={{ backgroundColor: color }}
                  />
                  <p className="mt-4 font-mono text-sm uppercase tracking-[0.12em] text-charcoal/56">
                    {color}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 pb-20 sm:px-8 lg:px-12 lg:pb-28">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1fr_1fr]">
          <Reveal>
            <div className="soft-panel p-7 sm:p-10">
              <p className="editorial-eyebrow text-espresso/70">Typography</p>
              <p className="mt-8 font-serif text-6xl leading-none text-charcoal md:text-8xl">
                {concept.typographyTitle}
              </p>
              <p className="mt-8 text-lg leading-8 text-charcoal/62">
                {concept.typographyDescription}
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div
              className={`${concept.imageClass} min-h-[32rem] shadow-[0_28px_80px_rgba(77,51,39,0.14)]`}
            />
          </Reveal>
        </div>
      </section>

      <section className="bg-charcoal px-5 py-20 text-crema sm:px-8 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <Reveal className="mb-10">
            <p className="editorial-eyebrow text-brass">Desktop Mockup</p>
            <h2 className="mt-5 font-serif text-5xl leading-none md:text-7xl">
              {concept.desktopTitle}
            </h2>
          </Reveal>
          <Reveal>
            <div className="rounded-sm border border-crema/10 bg-charcoal p-3 shadow-cinematic">
              <div className="flex gap-2 border-b border-crema/12 px-3 py-3">
                <span className="h-2.5 w-2.5 rounded-full bg-brass" />
                <span className="h-2.5 w-2.5 rounded-full bg-olive" />
                <span className="h-2.5 w-2.5 rounded-full bg-crema/70" />
              </div>
              <div className="grid min-h-[34rem] overflow-hidden bg-charcoal lg:grid-cols-[1.1fr_.9fr]">
                <div className="flex flex-col justify-end p-8 sm:p-12">
                  <p className="editorial-eyebrow text-brass">
                    {concept.title}
                  </p>
                  <p className="mt-6 font-serif text-6xl leading-none text-crema md:text-8xl">
                    {concept.typographyTitle}
                  </p>
                </div>
                <div className={`${concept.imageClass} min-h-96`} />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[.92fr_1.08fr] lg:items-center">
          <Reveal>
            <p className="editorial-eyebrow text-espresso/70">Mobile Mockup</p>
            <h2 className="mt-5 font-serif text-5xl leading-none text-charcoal md:text-7xl">
              {concept.mobileTitle}
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="mx-auto w-full max-w-sm rounded-[2rem] bg-charcoal p-4 shadow-[0_28px_80px_rgba(77,51,39,0.18)]">
              <div className="overflow-hidden rounded-[1.5rem] border border-crema/10 bg-charcoal">
                <div className={`${concept.imageClass} h-96`} />
                <div className="p-7">
                  <p className="editorial-eyebrow text-brass">
                    Concept Experience
                  </p>
                  <p className="mt-4 font-serif text-5xl leading-none text-crema">
                    {concept.title}
                  </p>
                  <button className="mt-7 w-full border border-crema bg-crema py-4 text-sm font-semibold uppercase tracking-[0.16em] text-charcoal">
                    Explore Concept
                  </button>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="px-5 pb-20 sm:px-8 lg:px-12 lg:pb-28">
        <div className="mx-auto max-w-7xl">
          <Reveal className="mb-10">
            <p className="editorial-eyebrow text-espresso/70">
              Brand / UX Notes
            </p>
            <h2 className="mt-5 font-serif text-5xl leading-none text-charcoal md:text-7xl">
              {concept.notesTitle}
            </h2>
          </Reveal>
          <div className="grid gap-4 lg:grid-cols-3">
            {concept.notes.map((note, index) => (
              <Reveal key={note} delay={index * 0.08}>
                <div className="h-full soft-panel p-7">
                  <p className="font-serif text-4xl text-espresso/58">
                    0{index + 1}
                  </p>
                  <p className="mt-8 text-lg leading-8 text-charcoal/62">
                    {note}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-12">
            <Link
              href="/concepts"
              className="inline-flex border border-espresso/20 px-7 py-4 text-sm font-semibold uppercase tracking-[0.16em] text-charcoal transition hover:border-charcoal hover:bg-charcoal hover:text-crema"
            >
              Back to Concepts
            </Link>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
