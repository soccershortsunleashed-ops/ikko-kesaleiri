import { useEffect, useState } from "react";

const links = [
  { label: "Leiri", href: "#tarina" },
  { label: "Kuvat", href: "#kuvat" },
  { label: "Palautteet", href: "#palautteet" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4 md:pt-5">
      <nav
        className={`flex w-full max-w-5xl items-center justify-between rounded-full border px-3 py-2 transition-all duration-300 md:px-4 ${
          scrolled
            ? "border-orange/15 bg-white/85 shadow-warm backdrop-blur-md"
            : "border-white/40 bg-white/55 backdrop-blur-sm"
        }`}
      >
        <a href="#top" className="flex items-center gap-2 pl-1">
          <img
            src="/assets/ikkologo_orans_36.png"
            alt="IKKO"
            className="h-6 w-auto md:h-7"
          />
          <span className="hidden font-head text-[11px] font-500 uppercase tracking-[0.18em] text-ink/55 sm:inline">
            Itä-Karjalan Kansanopisto
          </span>
        </a>

        <div className="flex items-center gap-1">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="rounded-full px-3 py-1.5 font-head text-xs uppercase tracking-[0.12em] text-ink/70 transition-colors hover:bg-orange/10 hover:text-orange sm:text-sm"
            >
              {l.label}
            </a>
          ))}
          <a
            href="https://www.ikko.fi/lasten-ja-nuorten-kesaleiri/"
            target="_blank"
            rel="noreferrer"
            className="ml-1 hidden items-center gap-1 rounded-full bg-gradient-to-r from-orange to-grape px-4 py-2 font-head text-xs uppercase tracking-[0.14em] text-white shadow-sm transition-transform hover:scale-105 sm:inline-flex"
          >
            Seuraava leiri ↗
          </a>
        </div>
      </nav>
    </header>
  );
}
