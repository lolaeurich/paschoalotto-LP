import Subtitulo from "./Subtitulos";
import Titulo from "./Titulos";

export default function Hero() {
  return (
    <section className="relative w-full min-h-screen md:min-h-[800px] max-h-[800px] flex flex-col md:flex-row items-center bg-gradient-to-b from-white to-hero-gradiente overflow-hidden pt-0 pb-0">
      <div className="z-10 flex flex-col items-center md:items-start justify-start w-full pt-4 md:pt-8 lg:px-[13%] px-[13.44%] gap-y-[10px] md:gap-y-0">
  <img
    src="/logo.png"
    alt="Logo Paschoalotto"
    className="w-[200px] sm:w-[220px] md:w-[240px] xl:w-[320px] h-auto sm:mb-2 md:mb-4 -ml-4 sm:-ml-4 md:-ml-3 xl:-ml-4"
  />

  <Subtitulo>
    Venha trabalhar em uma das
  </Subtitulo>

  <Titulo>
    melhores <br /> empresas
  </Titulo>

  <Subtitulo className="mt-4">
    de atendimento do Brasil!
  </Subtitulo>

        <a
          href="#vagas"
          className="mt-6 inline-flex items-center justify-center bg-azul-principal text-white font-inter font-bold text-sm sm:text-base md:text-lg px-4 sm:px-6 md:px-8 py-2 sm:py-2.5 md:py-3 rounded-full hover:bg-blue-600 transition tracking-[0.05em]"
        >
          Ver vagas
          <img
            src="/botao.png"
            alt="Seta"
            className="ml-2 mt-1 w-[14px] h-[8px] md:w-[15px] md:h-[10px]"
          />
        </a>
      </div>

      <div className="md:hidden absolute bottom-0 right-0 w-full h-[50%] z-0">
        <img
          src="/hero.png"
          alt="Hero Image"
          className="w-full h-full object-contain object-bottom"
        />
      </div>

      <div className="hidden md:block absolute bottom-0 right-[13.44%] max-w-[400px] xl:max-w-[500px] h-full z-0">
        <img
          src="/hero.png"
          alt="Hero Image"
          className="w-full h-full object-contain object-bottom"
        />
      </div>
    </section>
  );
}
