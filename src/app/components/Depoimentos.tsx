'use client'

import { useEffect, useState } from 'react';

const depoimentos = [
  {
    texto: "Em 8 anos, cresci, aprendi e superei desafios, sempre cercado por pessoas que fazem a diferença. Tenho orgulho de fazer parte dessa história e contribuir para o futuro dessa empresa incrível.",
    nome: "Gabriel Navarro",
    cargo: "Supervisor",
  },
  {
    texto: "Aqui na Paschoalotto encontrei oportunidades para crescer profissionalmente e pessoalmente. Um ambiente acolhedor e cheio de desafios positivos.",
    nome: "Ana Silva",
    cargo: "Analista de RH",
  },
  {
    texto: "Sou muito grato por fazer parte de uma empresa que valoriza o colaborador e investe no nosso desenvolvimento todos os dias.",
    nome: "Carlos Mendes",
    cargo: "Coordenador Operacional",
  },
];

export default function Depoimentos() {
  const [index, setIndex] = useState(0);

  const handlePrev = () => {
    setIndex((prev) => (prev === 0 ? depoimentos.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setIndex((prev) => (prev === depoimentos.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 8000);
    return () => clearInterval(interval);
  }, [index]);

  const { texto, nome, cargo } = depoimentos[index];

  return (
    <section className="w-full bg-white pt-24 md:pt-36 pb-32 px-[13.44%] relative">
      <h2 className="mb-24 md:mb-32 relative z-10">
        <span className="block font-bold text-azul-escuro text-[1.75rem] md:text-[2.75rem] leading-tight">
          #Paschoalovers
        </span>
        <span className="block font-bold text-azul-principal
          text-[3rem] sm:text-[3.5rem] md:text-[4.5rem] lg:text-[6rem] xl:text-[7.5rem]
          leading-[0.8] break-words">
          depoimentos
        </span>
      </h2>

      <div className="relative mx-auto">
        <img
          src="/aspas-um.png"
          alt="Aspas de abertura"
          className="absolute top-[30%] left-[10%] w-[clamp(60px, 10vw, 100px)] h-[clamp(50px, 8vw, 100px)] -translate-y-[100%] z-0 sm:w-[clamp(80px, 12vw, 120px)] sm:h-[clamp(70px, 10vw, 120px)]"
        />
        <img
          src="/aspas-dois.png"
          alt="Aspas de fechamento"
          className="absolute bottom-[20%] right-[10%] w-[clamp(60px, 10vw, 100px)] h-[clamp(50px, 8vw, 100px)] z-0 sm:w-[clamp(80px, 12vw, 120px)] sm:h-[clamp(70px, 10vw, 120px)]"
        />

        <div className="relative z-10 flex items-center justify-center min-h-[240px] md:min-h-[280px]">
          <button
            onClick={handlePrev}
            className="absolute left-0 top-[calc(50%-3rem)] -translate-y-1/2 z-20 sm:left-4 sm:top-[calc(50%-2rem)]"
          >
            <img
              src="/depo-left.png"
              alt="Anterior"
              className="w-4 h-8 sm:w-[clamp(16px,5vw,38.5px)] sm:h-[clamp(50px,9vw,114.5px)]"
            />
          </button>

          <div className="flex flex-col items-center text-center max-w-2xl mx-auto px-4 mt-12 md:mt-0 sm:px-6 sm:mt-6">
            <blockquote className="italic text-azul-depoimentos text-base sm:text-lg lg:text-2xl leading-relaxed">
              {texto}
            </blockquote>
            <div className="h-px w-64 bg-cinza-principal mt-12 mb-4" />
            <p className="font-bold text-azul-depoimentos text-sm sm:text-lg lg:text-2xl">{nome}</p>
            <p className="font-light text-azul-depoimentos text-xs sm:text-base lg:text-2xl">{cargo}</p>
          </div>

          <button
            onClick={handleNext}
            className="absolute right-0 top-[calc(50%-3rem)] -translate-y-1/2 z-20 sm:right-4 sm:top-[calc(50%-2rem)]"
          >
            <img
              src="/depo-right.png"
              alt="Próximo"
              className="w-4 h-8 sm:w-[clamp(16px,5vw,38.5px)] sm:h-[clamp(50px,9vw,114.5px)]"
            />
          </button>
        </div>
      </div>
    </section>
  );
}
