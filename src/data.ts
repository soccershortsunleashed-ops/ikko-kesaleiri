export type Review = {
  id: number;
  text: string;
  author: string;
  emoji: string;
  tone: "orange" | "grape" | "amber" | "berry";
};

/* Vanhempien aidot palautteet leiristä — mukana sekä suomen- että venäjänkielisiä viestejä. */
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
    text: "Спасибо вам огромное за организацию лагеря и теплую атмосферу, которую чувствуешь даже издалека! Хорошего и теплого вам лета!",
    author: "Родитель участника",
    emoji: "💛",
    tone: "berry",
  },
  {
    id: 3,
    text: "Haluan koko sydämestäni kiittää järjestäjiä, ohjaajia ja opettajia rikkaasta ja mielenkiintoisesta ajasta lastemme kanssa! Kiitos työstänne!",
    author: "Leiriläisen vanhempi",
    emoji: "💛",
    tone: "amber",
  },
  {
    id: 4,
    text: "От всей души хочу выразить благодарность организаторам, вожатым и педагогам за насыщенное, интересное проведенное время с нашими детьми! Спасибо за ваш труд!",
    author: "Родитель участника",
    emoji: "❤️",
    tone: "orange",
  },
  {
    id: 5,
    text: "Lapset ovat tosi tyytyväisiä, täynnä elämyksiä ja sanovat haluavansa tulla uudelleen. Heistä siellä oli niin kaunista, ja he jakoivat kanssamme kuvia — tuntui kuin olisimme olleet siellä mukana.",
    author: "Leiriläisen vanhempi",
    emoji: "😍",
    tone: "grape",
  },
  {
    id: 6,
    text: "Спасибо большое организаторам и участникам лагеря! Дети очень довольны, полны впечатлений и говорят, что хотели бы остаться еще. И место там очень красивое. Спасибо и за то, что делились с нами фото — мы как будто были с вами вместе.",
    author: "Родитель участника",
    emoji: "📸",
    tone: "amber",
  },
  {
    id: 7,
    text: "Kiitos kaikille leirin tekemiseen osallistuneille! Suuri kiitos vastuullisesta, monipuolisesta otteesta ja lasten huolenpidosta.",
    author: "Leiriläisen vanhempi",
    emoji: "❤️",
    tone: "berry",
  },
  {
    id: 8,
    text: "Благодарю всех причастных за организацию отдыха для наших детей! Огромное спасибо за ответственный разноплановый подход и заботу о детях!",
    author: "Родитель участника",
    emoji: "🌸",
    tone: "grape",
  },
  {
    id: 9,
    text: "Valtava kiitos kaikille ohjaajille ja kasvattajille! Uskon, ettei se ollut helppoa, mutta onnistuitte 200-prosenttisesti. Ette vain viettäneet aikaa lasten kanssa, vaan annoitte heille tunteenne, kokemuksenne ja ammattitaitonne!",
    author: "Leiriläisen vanhempi",
    emoji: "👏",
    tone: "grape",
  },
  {
    id: 10,
    text: "Благодарность с моей стороны: отличная организационная программа, красивое место и отличные педагоги. Хорошего всем лета!",
    author: "Родитель участника",
    emoji: "🧡",
    tone: "orange",
  },
  {
    id: 11,
    text: "Kiitos teille kaikesta. Ammattitaitoista työtä lasten parissa. Autoitte meitä peittämään positiivisuudella aiemman ikävän kokemuksen. Hyvää kesää ja uusiin tapaamisiin!",
    author: "Leiriläisen vanhempi",
    emoji: "🌷",
    tone: "orange",
  },
  {
    id: 12,
    text: "Мы с дочерью обе волновались, как все будет, потому что она поехала в лагерь в первый раз и никого не знала, но все вышло просто прекрасно. Огромное спасибо вам за этот позитивный опыт! Хорошего лета всем!",
    author: "Родитель участника",
    emoji: "🌷",
    tone: "berry",
  },
  {
    id: 13,
    text: "Kiitos näin ihanasta leiristä! Polina on aivan haltioissaan. Hän kysyy: ”saanko jäädä sinne asumaan?” — haluaa jo takaisin!",
    author: "Polinan vanhempi",
    emoji: "😆",
    tone: "amber",
  },
  {
    id: 14,
    text: "Большое спасибо организаторам за такой чудесный лагерь! Наши дети в восторге, не хотели уезжать. Отличная программа, игры, блинчики, новые друзья! С погодой повезло. Дети нам, родителям, провели экскурсию по Олавинлинне, поскольку они там теперь все знают. Спасибо еще раз!",
    author: "Родитель участника",
    emoji: "🥞",
    tone: "orange",
  },
  {
    id: 15,
    text: "Haluan kiittää leirin järjestäjiä ja opettajia upeasta työstä ja lasten huolenpidosta. Kiitos lämpimästä ja ystävällisestä ilmapiiristä!",
    author: "Leiriläisen vanhempi",
    emoji: "🤍",
    tone: "berry",
  },
  {
    id: 16,
    text: "Yhdyn esitettyihin kiitoksiin koko sydämestäni — odotamme jo innolla seuraavia leirejä!",
    author: "Leiriläisen vanhempi",
    emoji: "✨",
    tone: "grape",
  },
  {
    id: 17,
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
