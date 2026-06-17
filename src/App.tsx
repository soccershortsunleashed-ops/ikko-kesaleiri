import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Story from "./components/Story";
import Gallery from "./components/Gallery";
import Reviews from "./components/Reviews";
import Farewell from "./components/Farewell";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Story />
        <Gallery />
        <Reviews />
        <Farewell />
      </main>
      <Footer />
    </>
  );
}
