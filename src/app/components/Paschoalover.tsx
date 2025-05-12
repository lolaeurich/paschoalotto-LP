'use client'

import { useState } from 'react'

export default function PaschoaloverSection() {
  const [accepted, setAccepted] = useState(false)
  const [touched, setTouched] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setTouched(true)
    if (!accepted) return
  }

  return (
    <section className="w-full bg-[#F9F9F9] px-[13.44%] pt-14 pb-10">
      <div className="max-w-6xl mx-auto">
        
        <div className="mb-10 md:mb-16">
          <p className="font-inter font-bold text-[#22244E] text-[clamp(1.5rem,2.2vw,2.75rem)] leading-tight">
            Orgulho de ser
          </p>
          <h2 className="font-inter font-bold text-[#0051FA] text-[clamp(2.8rem,9vw,7.5rem)] leading-[0.9]">
            #paschoalover
          </h2>
        </div>

        <div className="mb-20 md:mb-32 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="md:col-span-2">
            <img
              src="/lovers-1.jpg"
              alt="Colaboradores em grupo"
              className="w-full h-full object-cover shadow-sm"
            />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-1 gap-4">
            <img
              src="/lovers-2.png"
              alt="Foto escritório"
              className="w-full h-full object-cover shadow-sm"
            />
            <img
              src="/lovers-3.png"
              alt="Foto área de lazer"
              className="w-full h-full object-cover shadow-sm"
            />
          </div>
        </div>

        <div id='form' className="text-center mb-24 md:mb-32">
        <p className="font-inter font-bold text-[#22244E] text-[clamp(1.5rem,4vw,2.75rem)] leading-tight">
          Vem fazer parte da
        </p>
        <h3 className="font-inter font-bold text-[#0051FA] text-[clamp(3rem,10vw,7.5rem)] leading-[0.9] mb-10">
          nossa equipe
        </h3>

          <form onSubmit={handleSubmit} className="max-w-4xl mx-auto space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Nome"
                className="w-full md:col-span-2 px-4 py-3 rounded-2xl bg-[#E5E5E5] text-[#4C4C4C] placeholder:text-[#4C4C4C] font-inter italic font-medium text-base tracking-[0.02em] outline-none"
              />
              <input
                type="text"
                placeholder="Telefone"
                className="w-full px-4 py-3 rounded-2xl bg-[#E5E5E5] text-[#4C4C4C] placeholder:text-[#4C4C4C] font-inter italic font-medium text-base tracking-[0.02em] outline-none"
              />
              <input
                type="email"
                placeholder="E-mail"
                className="w-full px-4 py-3 rounded-2xl bg-[#E5E5E5] text-[#4C4C4C] placeholder:text-[#4C4C4C] font-inter italic font-medium text-base tracking-[0.02em] outline-none"
              />
            </div>

            <textarea
              placeholder="Mensagem"
              className="w-full h-40 px-4 py-3 rounded-2xl bg-[#E5E5E5] text-[#4C4C4C] placeholder:text-[#4C4C4C] font-inter italic font-medium text-base tracking-[0.02em] outline-none resize-none"
            />

            <div className="flex flex-col items-center text-center">
              <label
                className={`flex items-center justify-center gap-2 font-inter italic font-medium text-base tracking-[0.02em] ${
                  touched && !accepted ? 'text-red-600' : 'text-[#4C4C4C]'
                }`}
              >
              <input
                type="checkbox"
                checked={accepted}
                onChange={() => setAccepted(!accepted)}
                onBlur={() => setTouched(true)}
                className={`w-5 h-5 rounded-sm accent-green-600 bg-[#E5E5E5] ${
                  touched && !accepted ? 'border-2 border-red-600' : ''
                }`}
                required
              />

                <span>
                  Concordo com os <a href="#" className="">termos de uso</a> e <a href="#" className="">política de privacidade</a>.
                </span>
              </label>
              {touched && !accepted && (
                <span className="text-red-600 mt-1 text-sm">
                  Você precisa aceitar os termos para continuar.
                </span>
              )}
            </div>

            <button
              type="submit"
              className="bg-[#0051FA] hover:bg-[#003ec7] text-white font-semibold w-full sm:w-[185px] h-[42px] rounded-full transition-colors"
            >
              Enviar &gt;
            </button>

          </form>
        </div>
      </div>
    </section>
  )
}
