export type Review = {
  id: number;
  text: string;
  author: string;
  emoji: string;
  tone: "orange" | "grape" | "amber" | "berry";
};

/* Vanhempien aidot palautteet leiristä — käännetty lämpimästi suomeksi. */
export const reviews: Review[] = [
  {
    id: 1,
    text: "Suuri kiitos leirin järjestämisestä ja lämpimästä ilmapiiristä, jonka aisti jopa kaukaa! Hyvää ja lämmintä kesää teille!",
    author: "Leiriläisen vanhempi",
    emoji: "☀️",
    tone: "orange",
  },
  {
    id: 2,
    text: "Haluan koko sydämestäni kiittää järjestäjiä, ohjaajia ja opettajia rikkaasta ja mielenkiintoisesta ajasta lastemme kanssa! Kiitos työstänne!",
    author: "Leiriläisen vanhempi",
    emoji: "💛",
    tone: "amber",
  },
  {
    id: 3,
    text: "Lapset ovat tosi tyytyväisiä, täynnä elämyksiä ja sanovat haluavansa tulla uudelleen. Heistä siellä oli niin kaunista, ja he jakoivat kanssamme kuvia — tuntui kuin olisimme olleet siellä mukana.",
    author: "Leiriläisen vanhempi",
    emoji: "😍",
    tone: "grape",
  },
  {
    id: 4,
    text: "Kiitos kaikille leirin tekemiseen osallistuneille! Suuri kiitos vastuullisesta, monipuolisesta otteesta ja lasten huolenpidosta.",
    author: "Leiriläisen vanhempi",
    emoji: "❤️",
    tone: "berry",
  },
  {
    id: 5,
    text: "Valtava kiitos kaikille ohjaajille ja kasvattajille! Uskon, ettei se ollut helppoa, mutta onnistuitte 200-prosenttisesti. Ette vain viettäneet aikaa lasten kanssa, vaan annoitte heille tunteenne, kokemuksenne ja ammattitaitonne!",
    author: "Leiriläisen vanhempi",
    emoji: "👏",
    tone: "grape",
  },
  {
    id: 6,
    text: "Kiitos teille kaikesta. Ammattitaitoista työtä lasten parissa. Autoitte meitä peittämään positiivisuudella aiemman ikävän kokemuksen. Hyvää kesää ja uusiin tapaamisiin!",
    author: "Leiriläisen vanhempi",
    emoji: "🌷",
    tone: "orange",
  },
  {
    id: 7,
    text: "Kiitos näin ihanasta leiristä! Polina on aivan haltioissaan. Hän kysyy: ”saanko jäädä sinne asumaan?” — haluaa jo takaisin!",
    author: "Polinan vanhempi",
    emoji: "😆",
    tone: "amber",
  },
  {
    id: 8,
    text: "Haluan kiittää leirin järjestäjiä ja opettajia upeasta työstä ja lasten huolenpidosta. Kiitos lämpimästä ja ystävällisestä ilmapiiristä!",
    author: "Leiriläisen vanhempi",
    emoji: "🤍",
    tone: "berry",
  },
  {
    id: 9,
    text: "Yhdyn esitettyihin kiitoksiin koko sydämestäni — odotamme jo innolla seuraavia leirejä!",
    author: "Leiriläisen vanhempi",
    emoji: "✨",
    tone: "grape",
  },
  {
    id: 10,
    text: "Kiitos järjestäjille ja kaikille osallistujille! Hyvää kesää aivan jokaiselle!",
    author: "Leiriläisen vanhempi",
    emoji: "🌞",
    tone: "orange",
  },
];

/* Lyhyet poiminnat hero-osion liukuviin kupliin. */
export const snippets: string[] = [
  "”Lapset haluavat heti takaisin!” 😍",
  "”Kiitos lämpimästä ilmapiiristä” 💛",
  "”Onnistuitte 200-prosenttisesti” 👏",
  "”Täynnä elämyksiä” ✨",
  "”Saanko jäädä sinne asumaan?” 😆",
  "”Hyvää kesää teille!” ☀️",
  "”Ammattitaitoista työtä” 🌷",
  "”Odotamme jo seuraavaa leiriä” 🤍",
  "”Tuntui kuin olisimme olleet mukana” 📸",
  "”Uusiin tapaamisiin!” 🧡",
];

export const stats = [
  { value: "2", label: "Leiriviikkoa" },
  { value: "10–16", label: "Vuotiaita leiriläisiä" },
  { value: "15 h", label: "Ohjaajien sydäntä joka päivä" },
  { value: "∞", label: "Uutta ystävyyttä" },
];
