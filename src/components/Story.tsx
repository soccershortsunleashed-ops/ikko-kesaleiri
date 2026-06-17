import { motion } from "framer-motion";
import { stats } from "../data";

const reveal = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] } },
};

export default function Story() {
  return (
    <section id="tarina" className="relative bg-cream py-20 md:py-28">
      <div className="mx-auto max-w-5xl px-6">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={reveal}
          className="mb-3 flex items-center gap-3"
        >
          <span className="accent-rule h-px w-10" />
          <span className="font-head text-xs uppercase tracking-[0.3em] text-grape">
            Mitä leirillä tapahtui
          </span>
        </motion.div>

        <motion.h2
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={reveal}
          className="max-w-3xl font-display text-4xl leading-tight text-ink md:text-6xl"
        >
          Kaksi viikkoa, jotka <span className="text-gradient italic">muuttuivat tarinoiksi</span>
        </motion.h2>

        <motion.p
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={reveal}
          className="mt-6 max-w-2xl text-xl leading-relaxed text-ink/70 md:text-2xl"
        >
          Kesäkuussa Itä-Karjalan Kansanopiston piha Punkaharjulla heräsi eloon.
          Eri puolilta saapuneet, suomea ja venäjää puhuvat lapset kohtasivat
          toisensa ujosti ensimmäisenä aamuna — ja erosivat kahden viikon kuluttua
          parhaina ystävinä.
        </motion.p>

        <div className="mt-14 grid items-stretch gap-10 md:grid-cols-2 md:gap-14">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            variants={reveal}
            className="flex flex-col justify-center space-y-6 text-lg leading-relaxed text-ink/75"
          >
            <p>
              Päivät täyttyivät <strong className="text-ink">venäjän kielestä,
              matematiikasta ja kulttuurista</strong> — mutta mikään niistä ei
              tuntunut oppitunnilta. Oppiminen puettiin peleiksi, retkiksi ja
              yhteisiksi hetkiksi järven äärellä, niin että uudet sanat ja taidot
              tarttuivat kuin huomaamatta.
            </p>
            <p>
              Iltaisin opiston salit täyttyivät naurusta. Ohjaajat ja opettajat
              antoivat itsestään kaiken: pisimpinä päivinä jopa{" "}
              <strong className="text-ink">15 tuntia</strong>, oppilaitoksessa yötä
              myöten valvoen. Väsyneitä, mutta onnellisia — sillä juuri sellaiset
              hetket jäävät mieleen koko loppukesäksi.
            </p>
            <p>
              Kun bussit vihdoin lähtivät, mukaan jäi uusia ystävyyksiä, kameroihin
              satoja kuvia ja sydämiin lämpö, joka kantautui koteihin asti.
            </p>
            <p className="border-l-4 border-orange/40 pl-5 font-display text-2xl italic leading-snug text-grape">
              ”He jakoivat kanssamme kuvia — tuntui kuin olisimme olleet siellä
              mukana.”
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            variants={reveal}
            className="relative flex"
          >
            <div className="overflow-hidden rounded-[2rem] border border-orange/15 shadow-warm">
              <img
                src="/assets/leiri-opettajat.jpeg"
                alt="Leirin sydän — opettajat ja ohjaajat"
                className="h-full w-full object-cover object-top"
              />
            </div>
            <div className="absolute -bottom-5 -left-4 rotate-[-4deg] rounded-2xl rounded-bl-md bg-white px-5 py-3 font-head text-sm uppercase tracking-[0.12em] text-orange shadow-bubble">
              Punkaharju · kesäleiri 🌞
            </div>
          </motion.div>
        </div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="rounded-3xl border border-orange/10 bg-white/70 p-6 text-center shadow-bubble"
            >
              <div className="font-display text-4xl text-gradient md:text-5xl">
                {s.value}
              </div>
              <div className="mt-2 font-head text-[11px] uppercase tracking-[0.16em] text-ink/55">
                {s.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
