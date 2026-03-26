'use client';

import { useState, useRef } from 'react';
import Image from 'next/image';

export default function AcompanharSection() {
  const [showForm, setShowForm] = useState(false);
  const formRef = useRef<HTMLDivElement>(null);

  const handleOpenForm = () => {
    setShowForm(true);
    setTimeout(() => {
      formRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 100);
  };

  return (
    <>
      {/* HERO ACOMPANHAR */}
      <section id="acompanhar" className="relative w-full py-16 lg:py-20 min-h-[50vh] lg:min-h-[60vh] flex flex-col items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <Image
            src="/assets/Mulher-com-tablet.png"
            alt="Produtora segurando um tablet no campo"
            fill
            sizes="100vw"
            quality={100}
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/10" />
        </div>

        <div className="relative z-10 text-center px-4 sm:px-6 max-w-4xl space-y-4 sm:space-y-6 text-white">
          <p className="text-xs sm:text-sm uppercase tracking-[0.2em] sm:tracking-[0.3em] text-white">Agricultura regenerativa colaborativa</p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[56px] font-extrabold leading-tight drop-shadow-md">
            E se ninguém mais precisasse começar do zero?
          </h2>
          <p className="text-base sm:text-xl md:text-2xl lg:text-3xl font-medium leading-relaxed max-w-3xl mx-auto drop-shadow-md">
            E se as experiências reais de campo se transformassem em memória coletiva estruturada? E se o que funcionou (ou não funcionou) em uma fazenda ajudasse outra a tomar decisões mais seguras e assertivas?
          </p>
        </div>

        {/* Botão Quero Acompanhar */}
        <div className="relative z-10 mt-8 sm:mt-10">
          <button
            onClick={handleOpenForm}
            className="inline-flex items-center justify-center px-8 sm:px-10 py-3.5 sm:py-4 rounded-full bg-emerald-500 text-white font-semibold text-base sm:text-lg shadow-lg hover:bg-emerald-400 transition"
          >
            Quero acompanhar
          </button>
        </div>
      </section>

      {/* FORMULÁRIO (INICIALMENTE OCULTO) */}
      {showForm && (
        <section id="formulario" ref={formRef} className="relative z-10 w-full bg-gray-50 py-12 px-4 sm:px-6 lg:px-12 xl:px-20">
          <div className="relative max-w-6xl mx-auto bg-white border border-gray-100 rounded-3xl shadow-2xl p-6 sm:p-8 lg:p-12 space-y-8 lg:space-y-10">
            {/* Botão Fechar */}
            <button
              onClick={() => setShowForm(false)}
              className="absolute top-4 right-6 sm:top-6 sm:right-8 text-sm text-gray-400 hover:text-gray-600 transition-colors"
            >
              fechar ✕
            </button>

            <div className="space-y-3 mt-4 sm:mt-0">
                <p className="text-emerald-500 font-semibold tracking-[0.2em] uppercase text-xs sm:text-sm">Fique por dentro</p>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-gray-900">
                Quero acompanhar
              </h2>
            </div>

            <form action="https://formsubmit.co/regenerai@gaasbrasil.com.br" method="POST" className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              <label className="md:col-span-2 flex flex-col gap-1.5 sm:gap-2 text-xs sm:text-sm font-semibold text-gray-700">
                Nome
                <input
                  type="text"
                  name="nome"
                  required
                  placeholder="Seu nome completo"
                  className="w-full rounded-xl sm:rounded-2xl border border-gray-200 bg-gray-50 px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base text-gray-900 focus:outline-none focus:ring-2 focus:ring-emerald-400"
                />
              </label>

              <label className="flex flex-col gap-1.5 sm:gap-2 text-xs sm:text-sm font-semibold text-gray-700">
                E-mail
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="seu@email.com"
                  className="w-full rounded-xl sm:rounded-2xl border border-gray-200 bg-gray-50 px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base text-gray-900 focus:outline-none focus:ring-2 focus:ring-emerald-400"
                />
              </label>

              <label className="flex flex-col gap-1.5 sm:gap-2 text-xs sm:text-sm font-semibold text-gray-700">
                WhatsApp
                <input
                  type="tel"
                  name="whatsapp"
                  required
                  placeholder="(00) 00000-0000"
                  className="w-full rounded-xl sm:rounded-2xl border border-gray-200 bg-gray-50 px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base text-gray-900 focus:outline-none focus:ring-2 focus:ring-emerald-400"
                />
              </label>

              <div className="md:col-span-2 flex flex-col gap-1.5 sm:gap-2 text-xs sm:text-sm font-semibold text-gray-700">
                Observações
                <textarea
                  name="observacoes"
                  placeholder="Conte um pouco sobre sua fazenda, desafios ou interesses..."
                  className="w-full rounded-xl sm:rounded-2xl border border-gray-200 bg-gray-50 px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base text-gray-900 focus:outline-none focus:ring-2 focus:ring-emerald-400 min-h-[100px] sm:min-h-[140px]"
                />
              </div>

              {/* Redirecionamento e Configurações Ocultas do FormSubmit */}
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_subject" value="Novo Contato - RegenerAI" />
              <input type="hidden" name="_cc" value="vladimir@digitalsolutions4y.com" />

              <div className="md:col-span-2 flex justify-end mt-2">
                <button
                  type="submit"
                  className="w-full md:w-auto inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 rounded-full bg-emerald-500 text-white font-semibold text-base sm:text-lg shadow-lg hover:bg-emerald-400 transition"
                >
                  Enviar
                </button>
              </div>
            </form>
          </div>
        </section>
      )}
    </>
  );
}
