export default function Hero() {
  return (
    <section
      className="relative w-full min-h-screen bg-cover bg-[position:left] md:bg-center flex items-center justify-center"
      style={{ backgroundImage: "url('/hero.png')" }}
    >
      <div className="relative z-10 flex flex-col items-center justify-center md:items-start md:justify-start text-center md:text-left w-full px-6 sm:px-10 md:px-[13.44%] mx-auto">
        <img
          src="/logo.png"
          alt="Logo Paschoalotto"
          className="w-[250px] sm:w-[220px] md:w-[300px] h-auto mb-6 md:-ml-4"
        />

        <h2 className="font-bold text-[#22244E] mb-2 font-inter"
          style={{
            fontSize: 'clamp(2.2rem, 2.5vw, 2.75rem)',
            lineHeight: 'clamp(2rem, 3vw, 2.875rem)'
          }}
        >
          Venha trabalhar em uma das
        </h2>

        <h1
          className="font-bold text-[#0051FA] drop-shadow-lg font-inter"
          style={{
            fontSize: 'clamp(3.4rem, 7vw, 7.5rem)',
            lineHeight: 'clamp(2.25rem, 6vw, 6.25rem)'
          }}
        >
          melhores <br /> empresas
        </h1>

        <p
          className="mt-4 font-bold text-[#22244E] font-inter"
          style={{
            fontSize: 'clamp(2.2rem, 2.5vw, 2.75rem)',
            lineHeight: 'clamp(2rem, 3vw, 2.875rem)'
          }}
        >
          de atendimento do Brasil!
        </p>

        <a
          href="#vagas"
          className="mt-8 inline-flex items-center justify-center bg-[#0051FA] text-white font-inter font-bold text-base md:text-lg px-5 py-2 md:px-8 md:py-3 rounded-full hover:bg-blue-600 transition tracking-[0.05em]"
        >
          Ver vagas
          <img
            src="/botao.png"
            alt="Seta"
            className="ml-2 w-[16px] h-[8px] md:w-[15px] md:h-[10px]"
          />
        </a>

      </div>
    </section>
  );
}
