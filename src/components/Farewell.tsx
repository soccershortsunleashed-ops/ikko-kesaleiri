import { motion } from "framer-motion";

export default function Farewell() {
  return (
    <section className="bg-summer px-6 py-20 md:py-28">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        className="relative mx-auto max-w-4xl overflow-hidden rounded-[2.5rem] border border-orange/15 bg-gradient-to-br from-orange via-orange-soft to-grape p-10 text-center shadow-warm md:p-16"
      >
        <span className="pointer-events-none absolute -right-6 -top-8 select-none text-[10rem] leading-none text-white/15">
          ☀
        </span>

        <p className="font-head text-xs uppercase tracking-[0.3em] text-white/80">
          Ohjelman johtajan tervehdys
        </p>

        <p className="mx-auto mt-6 max-w-3xl font-display text-3xl leading-snug text-white md:text-5xl md:leading-tight">
          Vuoro on päättynyt, ja kaikki sujui loistavasti. Toivotamme kaikille
          aurinkoisia kesäpäiviä — ja tapaamisiin taas ensi kerralla! 🌞
        </p>

        <div className="mx-auto mt-9 h-px w-16 bg-white/40" />
        <p className="mt-5 font-display text-2xl italic text-white md:text-3xl">
          Nadezhda Plotnikova
        </p>
        <p className="mt-1 font-head text-xs uppercase tracking-[0.2em] text-white/80">
          Kurssin johtaja
        </p>
      </motion.div>
    </section>
  );
}
