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
    <section className="w-full bg-white py-24 md:py-36 px-8 md:px-20 relative">
      <div className="relative max-w-5xl mx-auto">

        <h2 className="mb-24 md:mb-32 relative z-10 pl-0 sm:pl-[5%] md:pl-0">
          <span className="block font-bold text-[#22244E] text-lg md:text-[2.75rem] leading-tight">
            #Paschoalovers
          </span>
          <span className="block font-bold text-[#0051FA]
            text-[2.5rem] sm:text-[3.5rem] md:text-[4.5rem] lg:text-[6rem] xl:text-[7.5rem]
            leading-[0.8] break-words">
            depoimentos
          </span>
        </h2>

        <img
          src="/aspas-um.png"
          alt="Aspas de abertura"
          className="absolute top-[52%] left-[10%] w-[120px] h-[100px] md:w-[184px] md:h-[163px] -translate-y-1/2 z-0"
        />
        <img
          src="/aspas-dois.png"
          alt="Aspas de fechamento"
          className="absolute bottom-[8%] right-[10%] w-[120px] h-[100px] md:w-[184px] md:h-[163px] z-0"
        />

        <div className="relative z-10 flex items-center justify-center min-h-[240px] md:min-h-[280px]">
          <button
            onClick={handlePrev}
            className="absolute -left-6 md:-left-2 top-1/2 -translate-y-[47%] z-20"
          >
          <img
            src="/depo-left.png"
            alt="Anterior"
            className="w-4 h-8 sm:w-[clamp(16px,5vw,38.5px)] sm:h-[clamp(50px,9vw,114.5px)]"
          />
          </button>

          <div className="flex flex-col items-center text-center max-w-2xl mx-auto px-4 mt-12 md:mt-0">
            <blockquote className="italic text-[#0039A6] text-base md:text-lg leading-relaxed">
              {texto}
            </blockquote>
            <div className="h-px w-64 bg-[#D9D9D9] mt-12 mb-4" />
              <p className="font-bold text-[#0039A6] text-sm md:text-base">{nome}</p>
              <p className="text-[#0039A6] text-xs md:text-sm">{cargo}</p>
            </div>


          <button
            onClick={handleNext}
            className="absolute -right-6 md:-right-2 top-1/2 -translate-y-[47%] z-20"
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
