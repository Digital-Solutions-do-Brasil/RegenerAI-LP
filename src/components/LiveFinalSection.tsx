'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function LiveFinalSection() {
  const [showForm, setShowForm] = useState(false);

  return (
    <>
      <section className="relative w-full py-20 lg:py-32 flex flex-col items-center justify-center overflow-hidden">
        {/* Imagem de Fundo */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/assets/Fundo Live.png"
            alt="Fundo Live"
            fill
            sizes="100vw"
            quality={100}
            className="object-cover"
          />
          {/* Fallback de cor caso precise escurecer a imagem (ajuste conforme necessário) */}
          <div className="absolute inset-0 bg-[#0B2C24]/80" />
        </div>

        <div className="relative z-10 container mx-auto px-4 sm:px-6 max-w-5xl flex flex-col items-center text-center space-y-12">
          {/* Textos Superiores */}
          <div className="space-y-6 text-white font-bold text-xl sm:text-2xl md:text-3xl max-w-3xl leading-snug">
            <p>
              Participe da nossa live de lançamento e venha<br className="hidden md:block"/> conhecer tudo o que estamos construindo.
            </p>
            <p>
              Entre também no nosso grupo de WhatsApp e faça<br className="hidden md:block"/> parte dessa rede desde o início.
            </p>
          </div>

          {/* Card Principal */}
          <div className="bg-[#D3DDD3] rounded-3xl p-8 sm:p-12 w-full max-w-4xl shadow-2xl flex flex-col items-center text-center space-y-8 relative">
            <div className="space-y-4">
              <p className="text-[#34664A] font-bold tracking-widest text-sm sm:text-base uppercase">
                Evento Exclusivo
              </p>
              <h2 className="text-[#205135] text-2xl sm:text-3xl md:text-4xl font-extrabold leading-tight">
                Como vencer a dependência,<br className="hidden md:block"/> os altos riscos e a baixa rentabilidade com a<br className="hidden md:block"/> Agricultura Tropical Regenerativa
              </h2>
            </div>

            {/* Tag de Data/Hora */}
            <div className="bg-[#8BAF96] text-white font-medium px-6 py-2 rounded-full text-base sm:text-lg shadow-sm">
              06 de Maio às 9h
            </div>

            {/* Botões */}
            <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 w-full justify-center pt-2">
              <button
                onClick={() => setShowForm(true)}
                className="w-full sm:w-auto bg-[#14472A] hover:bg-[#0F351F] text-white font-bold text-lg px-8 py-3.5 rounded-full transition-colors shadow-lg cursor-pointer"
              >
                Quero Participar
              </button>
              
              <a
                href="https://chat.whatsapp.com/KRYn2ixYKAJ2xmDYq1qLl6"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto flex items-center justify-center gap-2 bg-[#DCE6DC] hover:bg-white text-[#205135] font-bold text-lg px-8 py-3.5 rounded-full transition-colors shadow-md border border-[#8BAF96]/30"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-[#25D366]" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
                </svg>
                Me lembre no WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* MODAL POPUP */}
      {showForm && (
        <div className="fixed inset-0 z-[99999] flex items-center justify-center bg-black/70 p-4 sm:p-6 backdrop-blur-sm pointer-events-auto">
          <div className="relative w-full max-w-4xl bg-white border border-gray-100 rounded-3xl shadow-2xl p-6 sm:p-8 lg:p-12 space-y-6 lg:space-y-8 overflow-y-auto max-h-[90vh]">
            <button
              onClick={() => setShowForm(false)}
              className="absolute top-4 right-6 sm:top-6 sm:right-8 text-sm text-gray-400 hover:text-gray-600 transition-colors cursor-pointer"
            >
              fechar ✕
            </button>

            <div className="space-y-3 mt-4 sm:mt-0 text-left">
              <p className="text-emerald-500 font-semibold tracking-[0.2em] uppercase text-xs sm:text-sm">EVENTO EXCLUSIVO</p>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-gray-900 leading-tight">
                Como vencer a dependência, os altos riscos e a baixa rentabilidade com a Agricultura Tropical Regenerativa
              </h2>
            </div>

            <form action="https://formsubmit.co/regenerai@gaasbrasil.com.br" method="POST" className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 text-left">
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
                Compartilhe sua estória com a gente.
                <textarea
                  name="observacoes"
                  placeholder="Conte um pouco sobre sua fazenda, desafios ou interesses..."
                  className="w-full rounded-xl sm:rounded-2xl border border-gray-200 bg-gray-50 px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base text-gray-900 focus:outline-none focus:ring-2 focus:ring-emerald-400 min-h-[100px] sm:min-h-[140px]"
                />
              </div>

              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_subject" value="Inscrição - Live RegenerAI" />
              <input type="hidden" name="_cc" value="vladimir@digitalsolutions4y.com" />

              <div className="md:col-span-2 flex flex-col sm:flex-row justify-end items-center gap-4 mt-2">
                <button
                  type="submit"
                  className="w-full sm:w-auto inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 rounded-full bg-emerald-500 text-white font-semibold text-base sm:text-lg shadow-lg hover:bg-emerald-400 transition cursor-pointer"
                >
                  Enviar
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}