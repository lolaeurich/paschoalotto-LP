export default function Hero() {
  return (
    <section className="relative w-full min-h-screen flex flex-col md:flex-row items-center justify-center bg-gradient-to-b from-white to-[#d8deed] overflow-hidden pt-0 pb-0">
      <div className="z-10 flex flex-col items-center px-6 sm:px-8 md:items-start justify-start text-center md:text-left w-full pt-4 md:pt-8 lg:px-[10%] xl:px-[13.44%]">
        <img
          src="/logo.png"
          alt="Logo Paschoalotto"
          className="w-[200px] sm:w-[220px] md:w-[240px] xl:w-[320px] h-auto mb-4 -ml-4 sm:-ml-4 md:-ml-3 xl:-ml-4"
        />

        <h2
          className="font-bold text-[#22244E] mb-2 font-inter"
          style={{
            fontSize: 'clamp(1.25rem, 2.5vw, 2.5rem)',
            lineHeight: '1.2', 
          }}
        >
          Venha trabalhar em uma das
        </h2>

        <h1
          className="font-bold text-[#0051FA] font-inter"
          style={{
            fontSize: 'clamp(2.5rem, 5vw, 6.5rem)',
            lineHeight: '1.1', 
          }}
        >
          melhores <br /> empresas
        </h1>

        <p
          className="mt-4 font-bold text-[#22244E] font-inter"
          style={{
            fontSize: 'clamp(1.25rem, 2.5vw, 2.5rem)',
            lineHeight: '1.2', 
          }}
        >
          de atendimento do Brasil!
        </p>

        <a
          href="#vagas"
          className="mt-6 inline-flex items-center justify-center bg-[#0051FA] text-white font-inter font-bold text-sm sm:text-base md:text-lg px-4 sm:px-6 md:px-8 py-2 sm:py-2.5 md:py-3 rounded-full hover:bg-blue-600 transition tracking-[0.05em]"
        >
          Ver vagas
          <img
            src="/botao.png"
            alt="Seta"
            className="ml-2 w-[14px] h-[8px] md:w-[15px] md:h-[10px]"
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
