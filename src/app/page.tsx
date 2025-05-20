import Depoimentos from "./components/sections/Depoimentos";
import Footer from "./components/sections/Footer";
import Hero from "./components/sections/Hero";
import Paschoalover from "./components/sections/Paschoalover";
import Vagas from "./components/sections/Vagas";

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
