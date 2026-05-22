import Link from "next/link";
import { Reveal } from "../components/Reveal";
import { concepts } from "../lib/concepts";

export const metadata = {
  title: "Selected Concepts | Gino Diblasi",
  description:
    "Selected brand and web experience concepts by Gino Diblasi.",
};

export default function ConceptsPage() {
  return (
    <main className="min-h-screen px-5 py-6 sm:px-8 lg:px-12">
      <nav className="mx-auto flex max-w-7xl items-center justify-between border-b border-espresso/10 pb-5 text-sm text-charcoal/68">
        <Link href="/" className="font-serif text-2xl text-charcoal">
          Gino Diblasi
        </Link>
        <Link href="/" className="transition hover:text-charcoal">
          Home
        </Link>
      </nav>

      <section className="mx-auto max-w-7xl py-20 lg:py-28">
        <Reveal className="max-w-4xl">
          <p className="editorial-eyebrow text-espresso/70">Selected Concepts</p>
          <h1 className="mt-5 font-serif text-[clamp(3.7rem,10vw,9.2rem)] leading-[0.88] text-charcoal">
            Brand worlds with mood, texture, and intention.
          </h1>
        </Reveal>

        <div className="mt-16 grid gap-6">
          {concepts.map((concept) => (
            <Reveal key={concept.slug}>
              <article className="group grid overflow-hidden soft-panel lg:grid-cols-[.9fr_1.1fr]">
                <div
                  className={`${concept.imageClass} min-h-[28rem] transition duration-700 group-hover:scale-[1.02]`}
                />
                <div className="flex flex-col justify-between p-7 sm:p-10 lg:p-12">
                  <div>
                    <p className="editorial-eyebrow text-espresso/70">
                      {concept.category}
                    </p>
                    <h2 className="mt-5 font-serif text-6xl leading-none text-charcoal md:text-8xl">
                      {concept.title}
                    </h2>
                    <p className="mt-7 max-w-2xl text-lg leading-8 text-charcoal/62">
                      {concept.description}
                    </p>
                  </div>
                  <Link
                    href={`/concepts/${concept.slug}`}
                    className="mt-10 inline-flex w-fit border border-espresso/20 px-7 py-4 text-sm font-semibold uppercase tracking-[0.16em] text-charcoal transition hover:border-charcoal hover:bg-charcoal hover:text-crema"
                  >
                    View Concept
                  </Link>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>
    </main>
  );
}
