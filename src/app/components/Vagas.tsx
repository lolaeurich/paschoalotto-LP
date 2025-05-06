'use client';

import { useState } from "react";

export default function Vagas() {
  const [mostrarMais, setMostrarMais] = useState(false);

  const vagas = [
    {
      cidade: "Bauru",
      bolsa: "R$ 600,00 + Auxílio Transporte + VL de R$ 154,00",
      expediente:
        "Segunda a sexta-feira das 08:00 às 14:00 ou das 14:00 às 20:00",
      funcoes:
        "Os profissionais realizarão atividades administrativas vinculadas à operação, tais como envio de WhatsApp, e-mails, atendimento ao cliente.",
    },
    {
      cidade: "Marília",
      bolsa: "R$ 600,00 + Auxílio Transporte + VL de R$ 154,00",
      expediente:
        "Segunda a sexta-feira das 08:00 às 14:00 ou das 14:00 às 20:00",
      funcoes:
        "Os profissionais realizarão atividades administrativas vinculadas à operação, tais como envio de WhatsApp, e-mails, atendimento ao cliente.",
    },
    {
      cidade: "Agudos",
      bolsa: "R$ 600,00 + Auxílio Transporte + VL R$ 154,00 + Day off",
      expediente:
        "Segunda a sexta-feira das 08:00 às 14:00 ou das 14:00 às 20:00",
      funcoes:
        "Os profissionais realizarão atividades administrativas vinculadas à operação, tais como envio de WhatsApp, e-mails, atendimento ao cliente.",
    },
    {
      cidade: "Ribeirão Preto",
      bolsa: "R$ 800,00 + Auxílio Transporte + VL de R$ 154,00",
      expediente:
        "Segunda a sexta-feira das 08:00 às 14:00 ou das 14:00 às 20:00",
      funcoes:
        "Os profissionais realizarão atividades administrativas vinculadas à operação, tais como envio de WhatsApp, e-mails, atendimento ao cliente.",
    },
    {
      cidade: "Lins",
      bolsa: "R$ 600,00 + VT + VL R$ 100,00",
      expediente:
        "Segunda a sexta, das 08:00 às 14:00 ou 14:00 às 20:00",
      funcoes:
        "Realizar a cobrança de valores devidos a pessoas físicas/jurídicas, atualizar cadastro, cumprir prazos e metas definidos pelo departamento, participar de ações nos processos...",
    },
  ];

  return (
    <section id="vagas" className="w-full pt-28 pb-[3.75rem] bg-white">
      <div className="mx-auto px-[13.44%] w-full">

            <h2 className="text-left mb-12 font-inter">
              <span className="block font-bold text-[#22244E] text-[1.375rem] leading-[1.1rem] md:text-[2.75rem] md:leading-[1.5rem]">
                Nossas
              </span>

              <span className="block font-bold font-inter text-[#0051FA] text-[3.75rem] leading-[3.5rem] md:text-[7.5rem] md:leading-[5rem]">
                vagas
              </span>
            </h2>

            <div className="flex flex-wrap justify-start xl:justify-between gap-y-14 gap-x-8">
              {vagas.map((vaga, index) => {
                const isHiddenMobile = index >= 2 && !mostrarMais;
                return (
                  <div
                    key={index}
                    className={`relative bg-[#F4F4F4] rounded-[25px] p-6 pt-8 pb-14 shadow-md text-left w-full max-w-full ${
                      index === 4 ? "xl:basis-[48%] xl:mx-auto" : "xl:basis-[48%]"
                    } ${isHiddenMobile ? "hidden xl:block" : ""}`}
                  >
                    <div className="flex items-center gap-4 mb-4">
                      <img
                        src="/mala.png"
                        alt="Ícone de mala"
                        className="w-[32px] h-[30px] md:w-[54px] md:h-[50px] object-contain"
                      />
                      <h3 className="text-[#0051FA] font-inter text-[1.75rem] md:text-[2.375rem] leading-[2.25rem] font-bold font-inter">
                        {vaga.cidade}
                      </h3>
                    </div>

                    <p className="text-[#002C8B] font-inter text-sm md:text-[1.125rem] leading-[1.375rem] tracking-[0.05em] font-bold">
                      <strong>Expediente:</strong>{" "}
                      <span className="font-normal">{vaga.expediente}</span>
                    </p>

                    <hr className="border-t border-[#D9D9D9] my-2" />

                    <p className="text-[#002C8B] font-inter text-sm md:text-[1.125rem] leading-[1.375rem] tracking-[0.05em] font-bold">
                      <strong>Bolsa:</strong>{" "}
                      <span className="font-normal">{vaga.bolsa}</span>
                    </p>

                    <hr className="border-t border-[#D9D9D9] my-2" />

                    <p className="text-[#002C8B] font-inter text-sm md:text-[1.125rem] leading-[1.375rem] tracking-[0.05em] font-bold">
                      <strong>Funções:</strong>{" "}
                      <span className="font-normal">{vaga.funcoes}</span>
                    </p>

                    <a
                      href="https://paschoalotto.gupy.io/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="absolute font-inter bottom-[-20px] left-1/2 transform -translate-x-1/2 inline-block bg-[#0051FA] text-white font-semibold text-sm md:text-base w-[200px] md:w-[260px] text-center py-2 rounded-full shadow-md hover:bg-blue-700 transition"
                    >
                      Quero me candidatar
                    </a>
                  </div>
                );
              })}
            </div>

            <div className="mt-10 flex justify-center xl:hidden">
              <button
                onClick={() => setMostrarMais(!mostrarMais)}
                className="flex font-inter items-center gap-2 bg-[#EAF1FF] text-[#0051FA] font-semibold px-5 py-2 rounded-full transition hover:bg-[#d5e6ff]"
              >
                {mostrarMais ? "Ver menos" : "Ver mais"}
                <span
                  className={`transform transition-transform duration-300 ${
                    mostrarMais ? "rotate-180" : ""
                  }`}
                >
                  ▼
                </span>
              </button>
            </div>
      </div>
    </section>
  );
}
