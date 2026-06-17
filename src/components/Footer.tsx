export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-grape-deep text-cream">
      {/* Marquee ribbon */}
      <div className="overflow-hidden border-y border-white/10 py-4">
        <div className="marquee-x flex w-max whitespace-nowrap font-display text-3xl italic text-orange-soft/90 md:text-5xl">
          {Array.from({ length: 12 }).map((_, i) => (
            <span key={i} className="flex items-center gap-6 pr-6">
              Kiitos kesästä 2026 <span className="text-cream/40">·</span>
            </span>
          ))}
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <img
              src="/assets/ikkologo_orans_36.png"
              alt="IKKO"
              className="h-8 w-auto brightness-0 invert"
            />
            <p className="mt-5 max-w-sm text-cream/70">
              Itä-Karjalan Kansanopisto — lämmin oppimisen koti Punkaharjulla jo
              yli sadan vuoden ajan. Nähdään seuraavalla leirillä! 🧡
            </p>
            <a
              href="mailto:satu.lotjonen@ikko.fi?subject=Kes%C3%A4leiri"
              className="mt-7 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-orange to-orange-soft px-6 py-3 font-head text-sm uppercase tracking-[0.14em] text-grape-deep transition-transform hover:scale-105"
            >
              Ilmoittaudu seuraavalle leirille ↗
            </a>
          </div>

          <div className="text-sm text-cream/75">
            <h3 className="mb-4 font-head text-xs uppercase tracking-[0.2em] text-orange-soft">
              Yhteystiedot
            </h3>
            <p className="leading-relaxed">
              Valoniementie 32
              <br />
              58450 Punkaharju
            </p>
            <p className="mt-3">Toimisto: 044 772 1200</p>
            <a
              href="mailto:ita-karjalan.kansanopisto@ikko.fi"
              className="mt-1 block break-all hover:text-orange-soft"
            >
              ita-karjalan.kansanopisto@ikko.fi
            </a>
          </div>

          <div className="text-sm text-cream/75">
            <h3 className="mb-4 font-head text-xs uppercase tracking-[0.2em] text-orange-soft">
              Leirin yhteyshenkilö
            </h3>
            <p>Satu Lötjönen, rehtori</p>
            <p className="mt-1">044 772 1277</p>
            <a
              href="mailto:satu.lotjonen@ikko.fi"
              className="mt-1 block break-all hover:text-orange-soft"
            >
              satu.lotjonen@ikko.fi
            </a>
            <div className="mt-5 flex gap-3">
              <a
                href="https://www.facebook.com/oppivakansanopisto"
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-white/20 px-4 py-1.5 font-head text-xs uppercase tracking-[0.12em] transition-colors hover:border-orange-soft hover:text-orange-soft"
              >
                Facebook
              </a>
              <a
                href="https://www.instagram.com/oppivakansanopisto"
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-white/20 px-4 py-1.5 font-head text-xs uppercase tracking-[0.12em] transition-colors hover:border-orange-soft hover:text-orange-soft"
              >
                Instagram
              </a>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 text-xs text-cream/50 md:flex-row">
          <span>Itä-Karjalan Kansanopisto © 2026</span>
          <span className="flex items-center gap-2">
            <span className="h-2 w-2 animate-pulse rounded-full bg-orange-soft" />
            Tehty kiitollisena leirin osallistujille
          </span>
        </div>
      </div>
    </footer>
  );
}
