import Subtitulo from "./Subtitulos";
import Titulo from "./Titulos";

export default function Hero() {
  return (
    <section className="relative w-full min-h-screen md:min-h-[800px] max-h-[800px] flex flex-col md:flex-row items-center bg-gradient-to-b from-white to-hero-gradiente overflow-hidden pt-0 pb-0">
      <div className="z-10 flex flex-col items-center md:items-start justify-start w-full pt-4 md:pt-8 padding-lateral-hero gap-y-[10px] md:gap-y-0">
        <img src="/logo.png" alt="Logo Paschoalotto" className="hero-logo" />

        <Subtitulo>
          Venha trabalhar em uma das
        </Subtitulo>

        <Titulo>
          melhores <br /> empresas
        </Titulo>

        <Subtitulo className="mt-4">
          de atendimento do Brasil!
        </Subtitulo>

        <a href="#vagas" className="btn-ver-vagas">
          Ver vagas
          <img src="/botao.png" alt="Seta" className="btn-seta" />
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
