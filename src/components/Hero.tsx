import { motion } from "framer-motion";
import { snippets } from "../data";

function MarqueeColumn({
  items,
  dir,
  dur,
  className = "",
}: {
  items: string[];
  dir: "up" | "down";
  dur: number;
  className?: string;
}) {
  const doubled = [...items, ...items];
  return (
    <div className={`pointer-events-none overflow-hidden ${className}`}>
      <div
        className={dir === "up" ? "marquee-up" : "marquee-down"}
        style={{ ["--dur" as string]: `${dur}s` }}
      >
        {doubled.map((t, i) => (
          <div
            key={i}
            className="mb-4 rounded-2xl rounded-bl-md border border-orange/10 bg-white/80 px-4 py-3 text-sm text-ink/75 shadow-bubble backdrop-blur-sm"
          >
            {t}
          </div>
        ))}
      </div>
    </div>
  );
}

const fade = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay: 0.15 * i, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function Hero() {
  const colA = snippets.slice(0, 5);
  const colB = snippets.slice(5);

  return (
    <section id="top" className="bg-summer relative min-h-screen overflow-hidden">
      {/* Floating scrolling messages — left & right columns */}
      <div className="absolute inset-0 z-0">
        <MarqueeColumn
          items={colA}
          dir="up"
          dur={34}
          className="absolute left-[-2%] top-0 hidden h-full w-72 -rotate-3 opacity-70 lg:block"
        />
        <MarqueeColumn
          items={colB}
          dir="down"
          dur={40}
          className="absolute right-[-2%] top-0 hidden h-full w-72 rotate-3 opacity-70 lg:block"
        />
      </div>

      {/* gentle wash to keep text readable over columns */}
      <div className="absolute inset-0 z-[1] bg-gradient-to-b from-cream/30 via-cream/10 to-cream/60" />

      <div className="relative z-10 mx-auto flex min-h-screen max-w-4xl flex-col items-center justify-center px-6 pt-28 pb-24 text-center">
        <motion.p
          custom={0}
          initial="hidden"
          animate="show"
          variants={fade}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-orange/20 bg-white/70 px-4 py-1.5 font-head text-[11px] uppercase tracking-[0.3em] text-orange backdrop-blur-sm"
        >
          Punkaharju · Kesä 2026
        </motion.p>

        <motion.h1
          custom={1}
          initial="hidden"
          animate="show"
          variants={fade}
          className="font-display text-5xl leading-[0.95] tracking-tight text-ink md:text-7xl lg:text-8xl"
        >
          Kesäleiri, jota
          <br />
          <span className="text-gradient italic">emme unohda</span>
        </motion.h1>

        <motion.p
          custom={2}
          initial="hidden"
          animate="show"
          variants={fade}
          className="mt-7 max-w-xl text-base text-ink/70 md:text-lg"
        >
          Kaksi viikkoa naurua, uusia ystäviä, venäjän kieltä ja Punkaharjun
          valoa. Tämä leiri on jo ohi — mutta sen lämpö jäi tänne. Kiitos, että
          olitte mukana. 🧡
        </motion.p>

        <motion.div
          custom={3}
          initial="hidden"
          animate="show"
          variants={fade}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="#palautteet"
            className="rounded-full bg-gradient-to-r from-orange to-grape px-7 py-3.5 font-head text-sm uppercase tracking-[0.14em] text-white shadow-warm transition-transform hover:scale-105"
          >
            Lue palautteet
          </a>
          <a
            href="#kuvat"
            className="rounded-full border-2 border-orange/30 bg-white/70 px-7 py-3.5 font-head text-sm uppercase tracking-[0.14em] text-ink transition-colors hover:border-orange hover:text-orange"
          >
            Katso kuvat
          </a>
        </motion.div>
      </div>

      {/* scroll hint */}
      <div className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2">
        <span className="font-head text-[10px] uppercase tracking-[0.3em] text-ink/50">
          Vieritä
        </span>
        <span className="relative block h-10 w-px overflow-hidden bg-ink/20">
          <span className="scroll-hint accent-rule absolute inset-x-0 top-0 block h-4" />
        </span>
      </div>
    </section>
  );
}
