import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { reviews, type Review } from "../data";

const toneStyles: Record<Review["tone"], string> = {
  orange: "from-orange/12 to-orange/5 border-orange/25",
  grape: "from-grape/12 to-grape/5 border-grape/25",
  amber: "from-orange-soft/15 to-orange-soft/5 border-orange-soft/30",
  berry: "from-berry/10 to-berry/5 border-berry/25",
};

const toneDot: Record<Review["tone"], string> = {
  orange: "bg-orange",
  grape: "bg-grape",
  amber: "bg-orange-soft",
  berry: "bg-berry",
};

const rotations = ["-3deg", "2deg", "-1.5deg", "3deg", "-2deg", "1.5deg"];

export default function Reviews() {
  const [active, setActive] = useState<Review | null>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setActive(null);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <section id="palautteet" className="relative bg-cream py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-3 flex items-center gap-3">
          <span className="accent-rule h-px w-10" />
          <span className="font-head text-xs uppercase tracking-[0.3em] text-grape">
            Vanhempien sanoin
          </span>
        </div>
        <h2 className="max-w-3xl font-display text-4xl leading-tight text-ink md:text-6xl">
          Kiitokset, jotka <span className="text-gradient italic">lämmittivät meitä</span>
        </h2>
        <p className="mt-5 max-w-xl text-ink/60">
          Vie kursori kuplan päälle — se nousee keskelle ruutua, jotta jokainen
          sana näkyy. Nämä viestit saapuivat leirin jälkeen lasten vanhemmilta.
        </p>

        {/* Bubble cloud */}
        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {reviews.map((r, i) => (
            <div key={r.id} className="flex">
              <motion.button
                layoutId={`bubble-${r.id}`}
                onMouseEnter={() => setActive(r)}
                onFocus={() => setActive(r)}
                onClick={() => setActive(r)}
                style={{ rotate: rotations[i % rotations.length] }}
                whileHover={{ scale: 1.04, rotate: 0 }}
                transition={{ type: "spring", stiffness: 300, damping: 26 }}
                className={`relative w-full cursor-pointer rounded-[1.75rem] rounded-bl-md border bg-gradient-to-br ${toneStyles[r.tone]} p-6 text-left shadow-bubble backdrop-blur-sm`}
              >
                <motion.div layout="position" className="flex items-start gap-3">
                  <span className="text-2xl leading-none">{r.emoji}</span>
                  <p className="line-clamp-4 text-[15px] leading-relaxed text-ink/80">
                    {r.text}
                  </p>
                </motion.div>
                <motion.div
                  layout="position"
                  className="mt-4 flex items-center gap-2"
                >
                  <span className={`h-2 w-2 rounded-full ${toneDot[r.tone]}`} />
                  <span className="font-head text-[11px] uppercase tracking-[0.14em] text-ink/55">
                    {r.author}
                  </span>
                </motion.div>
              </motion.button>
            </div>
          ))}
        </div>
      </div>

      {/* Zoomed overlay */}
      <AnimatePresence>
        {active && (
          <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center p-5"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActive(null)}
          >
            <div className="absolute inset-0 bg-grape-deep/35 backdrop-blur-md" />

            <motion.div
              layoutId={`bubble-${active.id}`}
              onClick={(e) => e.stopPropagation()}
              onMouseLeave={() => setActive(null)}
              transition={{ type: "spring", stiffness: 220, damping: 28 }}
              className={`relative z-10 w-[min(92vw,720px)] rounded-[2.5rem] rounded-bl-xl border bg-gradient-to-br ${toneStyles[active.tone]} bg-cream/95 p-9 shadow-warm md:p-14`}
            >
              <button
                onClick={() => setActive(null)}
                aria-label="Sulje"
                className="absolute right-5 top-5 flex h-9 w-9 items-center justify-center rounded-full bg-white/70 font-head text-ink/60 transition-colors hover:bg-white hover:text-orange"
              >
                ✕
              </button>

              <motion.div layout="position" className="text-5xl md:text-6xl">
                {active.emoji}
              </motion.div>
              <motion.p
                layout="position"
                className="mt-6 font-display text-2xl leading-snug text-ink md:text-4xl md:leading-tight"
              >
                {active.text}
              </motion.p>
              <motion.div
                layout="position"
                className="mt-8 flex items-center gap-3"
              >
                <span className={`h-2.5 w-2.5 rounded-full ${toneDot[active.tone]}`} />
                <span className="font-head text-sm uppercase tracking-[0.16em] text-ink/60">
                  {active.author}
                </span>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
