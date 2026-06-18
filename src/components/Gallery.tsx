import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const photos = [
  {
    src: "/assets/leiri-opettajat.avif",
    caption: "Leirin sydän — opettajat ja ohjaajat",
  },
  {
    src: "/assets/koko-porukka.avif",
    caption: "Koko porukka koolla",
  },
  {
    src: "/assets/laituri-jarvi.avif",
    caption: "Hetki laiturilla järven rannalla",
  },
  {
    src: "/assets/leiri-luonto.avif",
    caption: "Punkaharjun kukkiva kesä",
  },
  {
    src: "/assets/pihapelit-koyenveto.avif",
    caption: "Pihapelit ja yhteishenki",
  },
  {
    src: "/assets/kasityopaja.avif",
    caption: "Käsityöpajassa",
  },
  {
    src: "/assets/iltanuotio.avif",
    caption: "Iltanuotion äärellä",
  },
  {
    src: "/assets/makkaranpaisto.avif",
    caption: "Makkaranpaisto nuotiolla",
  },
  {
    src: "/assets/taidepaja.avif",
    caption: "Taidepaja täydessä vauhdissa",
  },
  {
    src: "/assets/luova-puuha.avif",
    caption: "Luovaa puuhaa yhdessä",
  },
  {
    src: "/assets/palkintojenjako.avif",
    caption: "Palkintojenjako — ansaitut mitalit",
  },
  {
    src: "/assets/saapuminen.avif",
    caption: "Saapuminen leirille — matkalaukut valmiina",
  },
  {
    src: "/assets/paarakennus.avif",
    caption: "Leirin lämmin päärakennus",
  },
  {
    src: "/assets/paarakennus-aula.avif",
    caption: "Päärakennuksen tunnelmallinen aula",
  },
  {
    src: "/assets/majoitushuone.avif",
    caption: "Kodikas majoitushuone",
  },
  {
    src: "/assets/oppitunti.avif",
    caption: "Oppitunti suomen kielen parissa",
  },
  {
    src: "/assets/ruokasali.avif",
    caption: "Yhteinen ruokahetki salissa",
  },
  {
    src: "/assets/noutopoyta.avif",
    caption: "Maukasta ruokaa noutopöydästä",
  },
  {
    src: "/assets/taikinan-teko.avif",
    caption: "Lettutaikina valmistumassa",
  },
  {
    src: "/assets/lettuja-keittiossa.avif",
    caption: "Lettuja paistamassa yhdessä",
  },
  {
    src: "/assets/lettujen-paisto.avif",
    caption: "Oma lettu kääntyy pannulla",
  },
  {
    src: "/assets/keittiossa-yhdessa.avif",
    caption: "Keittiössä hyvällä mielellä",
  },
  {
    src: "/assets/kangaspuut.avif",
    caption: "Kangaspuiden ääressä",
  },
  {
    src: "/assets/kangaskassit.avif",
    caption: "Itse koristellut kangaskassit",
  },
  {
    src: "/assets/kangaskassit-2.avif",
    caption: "Kassit täynnä omia kuvioita",
  },
  {
    src: "/assets/ulkopelit.avif",
    caption: "Ulkopelit pihanurmella",
  },
  {
    src: "/assets/lautapelit.avif",
    caption: "Lautapelejä ja hyvää juttua",
  },
  {
    src: "/assets/ryhmatoiminta.avif",
    caption: "Yhteistä puuhaa salissa",
  },
  {
    src: "/assets/uintia-jarvessa.avif",
    caption: "Uintia kirkkaassa järvessä",
  },
  {
    src: "/assets/makkaranpaisto-rannalla.avif",
    caption: "Makkaranpaisto järven rannalla",
  },
  {
    src: "/assets/polku-laiturille.avif",
    caption: "Polku laiturille koivujen lomitse",
  },
  {
    src: "/assets/museovierailu.avif",
    caption: "Vierailu museossa",
  },
  {
    src: "/assets/retki-kaupungilla.avif",
    caption: "Retkellä kaupungilla",
  },
  {
    src: "/assets/ryhma-patsaalla.avif",
    caption: "Ryhmäkuva patsaan luona",
  },
  {
    src: "/assets/olavinlinna-jarvelta.avif",
    caption: "Olavinlinna järven takaa",
  },
  {
    src: "/assets/ryhmakuva-linna.avif",
    caption: "Koko porukka Olavinlinnan edessä",
  },
];

const N = photos.length;

// Cards within this distance from the centre are rendered; the rest are parked.
const WINDOW = 2;

// Shortest signed distance from the active card on the circular ring (-5..5).
function ringOffset(index: number, active: number) {
  let o = ((index - active) % N + N) % N;
  if (o > N / 2) o -= N;
  return o;
}

export default function Gallery() {
  const [active, setActive] = useState(0);
  const [zoomed, setZoomed] = useState<number | null>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const [stageW, setStageW] = useState(0);

  // Measure the stage so every transform can be expressed in real pixels.
  useLayoutEffect(() => {
    const el = stageRef.current;
    if (!el) return;
    const update = () => setStageW(el.clientWidth);
    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  const paginate = useCallback((dir: number) => {
    setActive((a) => (a + dir + N) % N);
  }, []);

  // Keyboard: arrows page the carousel, or step the lightbox when open; Esc closes.
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (zoomed !== null) {
        if (e.key === "Escape") setZoomed(null);
        else if (e.key === "ArrowLeft") setZoomed((z) => (z! - 1 + N) % N);
        else if (e.key === "ArrowRight") setZoomed((z) => (z! + 1) % N);
        return;
      }
      if (e.key === "ArrowLeft") paginate(-1);
      else if (e.key === "ArrowRight") paginate(1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [paginate, zoomed]);

  // Lock background scroll while the lightbox is open.
  useEffect(() => {
    document.body.style.overflow = zoomed !== null ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [zoomed]);

  // Responsive card geometry derived from the measured stage width.
  const isCompact = stageW > 0 && stageW < 640;
  const cardW = stageW
    ? isCompact
      ? Math.min(stageW * 0.74, 340)
      : Math.min(stageW * 0.46, 500)
    : 420;
  const cardH = cardW * 0.78;
  const gap = cardW * (isCompact ? 0.52 : 0.62);

  return (
    <section id="kuvat" className="bg-summer overflow-hidden py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-3 flex items-center gap-3">
          <span className="accent-rule h-px w-10" />
          <span className="font-head text-xs uppercase tracking-[0.3em] text-orange">
            Hetkiä leiriltä
          </span>
        </div>
        <h2 className="mb-10 max-w-3xl font-display text-4xl leading-tight text-ink md:text-6xl">
          Kuvat kertovat <span className="text-gradient italic">enemmän kuin sanat</span>
        </h2>

        {/* 3D stage */}
        <motion.div
          ref={stageRef}
          className="relative mx-auto w-full cursor-grab touch-pan-y select-none active:cursor-grabbing"
          style={{ height: cardH + 64, perspective: 1500 }}
          onPanEnd={(_, info) => {
            if (info.offset.x < -60 || info.velocity.x < -300) paginate(1);
            else if (info.offset.x > 60 || info.velocity.x > 300) paginate(-1);
          }}
        >
          <div
            className="absolute inset-0"
            style={{ transformStyle: "preserve-3d" }}
          >
            {photos.map((p, i) => {
              const offset = ringOffset(i, active);
              const visible = Math.abs(offset) <= WINDOW;
              const isCenter = offset === 0;
              return (
                <motion.figure
                  key={p.src}
                  onClick={() => {
                    if (isCenter) setZoomed(i);
                    else if (visible) setActive(i);
                  }}
                  whileTap={
                    isCenter
                      ? { scale: 0.94, rotateZ: i % 2 === 0 ? -5 : 5 }
                      : undefined
                  }
                  className="absolute left-1/2 top-1/2 overflow-hidden rounded-[1.75rem] border border-white/60 shadow-warm"
                  style={{
                    width: cardW,
                    height: cardH,
                    marginLeft: -cardW / 2,
                    marginTop: -cardH / 2,
                    zIndex: 100 - Math.abs(offset),
                    cursor: isCenter ? "zoom-in" : visible ? "pointer" : "default",
                    pointerEvents: visible ? "auto" : "none",
                    transformStyle: "preserve-3d",
                  }}
                  animate={{
                    x: offset * gap,
                    z: -Math.abs(offset) * 220,
                    rotateY: Math.max(-48, Math.min(48, -offset * 40)),
                    scale: isCenter ? 1 : 0.86,
                    opacity: visible ? 1 : 0,
                  }}
                  transition={{ type: "spring", stiffness: 220, damping: 28, mass: 0.9 }}
                >
                  <img
                    src={p.src}
                    alt={p.caption}
                    draggable={false}
                    loading={Math.abs(offset) <= 1 ? "eager" : "lazy"}
                    className="block h-full w-full object-cover object-top"
                  />
                  {/* Darken side cards so the centre pops */}
                  <motion.div
                    className="pointer-events-none absolute inset-0 bg-grape-deep"
                    animate={{ opacity: isCenter ? 0 : 0.42 }}
                    transition={{ duration: 0.4 }}
                  />
                  {/* Caption only on the focused photo */}
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-grape-deep/80 via-transparent to-transparent" />
                  <motion.figcaption
                    className="absolute inset-x-0 bottom-0 p-5 font-head text-sm uppercase tracking-[0.1em] text-white"
                    animate={{ opacity: isCenter ? 1 : 0, y: isCenter ? 0 : 12 }}
                    transition={{ duration: 0.45 }}
                  >
                    {p.caption}
                  </motion.figcaption>
                </motion.figure>
              );
            })}
          </div>

          {/* Prev / next controls */}
          <button
            type="button"
            aria-label="Edellinen kuva"
            onClick={() => paginate(-1)}
            className="absolute left-2 top-1/2 z-[200] grid h-12 w-12 -translate-y-1/2 place-items-center rounded-full border border-white/70 bg-cream/80 text-ink shadow-bubble backdrop-blur transition hover:scale-110 hover:bg-cream md:left-4"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>
          <button
            type="button"
            aria-label="Seuraava kuva"
            onClick={() => paginate(1)}
            className="absolute right-2 top-1/2 z-[200] grid h-12 w-12 -translate-y-1/2 place-items-center rounded-full border border-white/70 bg-cream/80 text-ink shadow-bubble backdrop-blur transition hover:scale-110 hover:bg-cream md:right-4"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 6l6 6-6 6" />
            </svg>
          </button>
        </motion.div>

        {/* Counter + dots */}
        <div className="mt-8 flex flex-col items-center gap-4">
          <div className="font-head text-sm uppercase tracking-[0.2em] text-grape-deep">
            <AnimatePresence mode="popLayout">
              <motion.span
                key={active}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.3 }}
                className="inline-block tabular-nums"
              >
                {String(active + 1).padStart(2, "0")}
              </motion.span>
            </AnimatePresence>
            <span className="mx-1 text-orange">/</span>
            <span className="tabular-nums text-ink/50">{String(N).padStart(2, "0")}</span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-2.5">
            {photos.map((p, i) => (
              <button
                key={p.src}
                type="button"
                aria-label={`Siirry kuvaan ${i + 1}`}
                onClick={() => setActive(i)}
                className="h-2.5 rounded-full transition-all duration-300"
                style={{
                  width: i === active ? 28 : 10,
                  background: i === active ? "#EC6A0E" : "rgba(42,26,16,0.2)",
                }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Enlarged lightbox — tilts in and zooms on open / swap */}
      <AnimatePresence>
        {zoomed !== null && (
          <motion.div
            className="fixed inset-0 z-[300] flex items-center justify-center bg-grape-deep/80 p-5 backdrop-blur-md sm:p-10"
            style={{ perspective: 1600 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={() => setZoomed(null)}
          >
            <button
              type="button"
              aria-label="Sulje"
              onClick={() => setZoomed(null)}
              className="absolute right-4 top-4 z-10 grid h-12 w-12 place-items-center rounded-full border border-white/40 bg-white/10 text-white transition hover:scale-110 hover:bg-white/20"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 6 6 18M6 6l12 12" />
              </svg>
            </button>

            <button
              type="button"
              aria-label="Edellinen kuva"
              onClick={(e) => {
                e.stopPropagation();
                setZoomed((z) => (z! - 1 + N) % N);
              }}
              className="absolute left-3 top-1/2 z-10 grid h-12 w-12 -translate-y-1/2 place-items-center rounded-full border border-white/40 bg-white/10 text-white transition hover:scale-110 hover:bg-white/20 sm:left-6"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>
            <button
              type="button"
              aria-label="Seuraava kuva"
              onClick={(e) => {
                e.stopPropagation();
                setZoomed((z) => (z! + 1) % N);
              }}
              className="absolute right-3 top-1/2 z-10 grid h-12 w-12 -translate-y-1/2 place-items-center rounded-full border border-white/40 bg-white/10 text-white transition hover:scale-110 hover:bg-white/20 sm:right-6"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 6l6 6-6 6" />
              </svg>
            </button>

            <AnimatePresence mode="wait">
              <motion.figure
                key={zoomed}
                className="relative max-h-[85vh] max-w-[92vw] overflow-hidden rounded-[2rem] border border-white/60 shadow-warm"
                style={{ transformStyle: "preserve-3d" }}
                initial={{ opacity: 0, scale: 0.7, rotateZ: zoomed % 2 === 0 ? -9 : 9, y: 28 }}
                animate={{ opacity: 1, scale: 1, rotateZ: 0, y: 0 }}
                exit={{ opacity: 0, scale: 0.82, rotateZ: zoomed % 2 === 0 ? 7 : -7 }}
                transition={{ type: "spring", stiffness: 200, damping: 20, mass: 0.9 }}
                onClick={(e) => e.stopPropagation()}
              >
                <img
                  src={photos[zoomed].src}
                  alt={photos[zoomed].caption}
                  draggable={false}
                  className="block max-h-[85vh] w-auto max-w-[92vw] object-contain"
                />
                <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-grape-deep/80 to-transparent p-6">
                  <figcaption className="font-head text-sm uppercase tracking-[0.12em] text-white sm:text-base">
                    {photos[zoomed].caption}
                  </figcaption>
                </div>
              </motion.figure>
            </AnimatePresence>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
