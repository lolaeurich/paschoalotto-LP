import Depoimentos from "./components/Depoimentos";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Paschoalover from "./components/Paschoalover";
import Vagas from "./components/Vagas";

export default function Home() {
  return (
    <>
      <Hero />
      <Vagas />
      <Depoimentos />
      <Paschoalover />
      <Footer />
    </>
  );
}
