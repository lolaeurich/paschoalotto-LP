'use client'

import { useState } from 'react'
import { FormInput, FormTextarea, FormCheckbox } from './FormComponents'

export default function PaschoaloverSection() {
  const [accepted, setAccepted] = useState(false)
  const [touched, setTouched] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setTouched(true)
    if (!accepted) return
  }

  return (
    <section className="w-full bg-cinza-paschoalover px-[13.44%] pt-20 md:pt-40 pb-10">
      <div className="max-w-6xl mx-auto">
        <div className="mb-10 md:mb-16">
          <p className="font-inter font-bold text-azul-escuro text-[clamp(1.75rem,2.2vw,2.75rem)] leading-tight">
            Orgulho de ser
          </p>
          <h2 className="font-inter font-bold text-azul-principal text-[clamp(2.8rem,9vw,7.5rem)] leading-[0.9]">
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

        <div id="form" className="text-center mb-24 md:mb-32">
          <p className="font-inter font-bold text-azul-escuro text-[clamp(1.75rem,4vw,2.75rem)] leading-tight">
            Vem fazer parte da
          </p>
          <h3 className="font-inter font-bold text-azul-principal text-[clamp(3rem,10vw,7.5rem)] leading-[0.9] mb-10">
            nossa equipe
          </h3>

          <form onSubmit={handleSubmit} className="max-w-4xl mx-auto space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormInput
                type="text"
                placeholder="Nome"
                className="md:col-span-2"
              />
              <FormInput
                type="text"
                placeholder="Telefone"
              />
              <FormInput
                type="email"
                placeholder="E-mail"
              />
            </div>

            <FormTextarea placeholder="Mensagem" />

            <FormCheckbox
              checked={accepted}
              onChange={() => setAccepted(!accepted)}
              onBlur={() => setTouched(true)}
              touched={touched}
              accepted={accepted}
            >
              <span>
                Concordo com os{' '}
                <a href="#" className="underline">
                  termos de uso
                </a>{' '}
                e{' '}
                <a href="#" className="underline">
                  política de privacidade
                </a>.
              </span>
            </FormCheckbox>

            <button
              type="submit"
              className="bg-azul-principal hover:bg-azul-hover text-white font-semibold w-[140px] sm:w-[185px] h-[42px] rounded-full transition-colors mx-auto flex justify-center items-center gap-2"
            >
              Enviar
              <img
                src="/botao-form.svg"
                alt="Flecha"
              />
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
