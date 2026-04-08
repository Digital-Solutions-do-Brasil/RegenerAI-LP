'use client';

import { useState } from 'react';

export default function LiveCard() {
  const [showForm, setShowForm] = useState(false);

  return (
    <>
      <div className="absolute bottom-6 right-6 z-50">
        <div className="bg-white rounded-2xl shadow-xl p-4 w-64 flex flex-col gap-3">
          <div className="flex items-center justify-between">
            <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0H3" />
              </svg>
            </div>
            <span className="text-[10px] font-bold text-white bg-emerald-500 px-2 py-0.5 rounded-full uppercase tracking-wide">Ao Vivo</span>
          </div>
          <div>
            <p className="font-bold text-gray-900 text-base leading-tight">Live de Lançamento</p>
            <div className="flex items-center gap-1 mt-1 text-gray-500 text-sm">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
              </svg>
              <span>06 de Maio às 9h</span>
            </div>
          </div>
        </div>
      </div>

      {/* MODAL POPUP (EXCLUSIVO PARA A LIVE) */}
      {showForm && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 p-4 sm:p-6 backdrop-blur-sm">
          <div className="relative w-full max-w-4xl bg-white border border-gray-100 rounded-3xl shadow-2xl p-6 sm:p-8 lg:p-12 space-y-6 lg:space-y-8 overflow-y-auto max-h-[90vh]">
            {/* Botão Fechar */}
            <button
              onClick={() => setShowForm(false)}
              className="absolute top-4 right-6 sm:top-6 sm:right-8 text-sm text-gray-400 hover:text-gray-600 transition-colors"
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
                Observações
                <textarea
                  name="observacoes"
                  placeholder="Conte um pouco sobre sua fazenda, desafios ou interesses..."
                  className="w-full rounded-xl sm:rounded-2xl border border-gray-200 bg-gray-50 px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base text-gray-900 focus:outline-none focus:ring-2 focus:ring-emerald-400 min-h-[100px] sm:min-h-[140px]"
                />
              </div>

              {/* Redirecionamento e Configurações Ocultas do FormSubmit */}
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_subject" value="Inscrição - Live RegenerAI" />
              <input type="hidden" name="_cc" value="vladimir@digitalsolutions4y.com" />

              <div className="md:col-span-2 flex flex-col sm:flex-row justify-end items-center gap-4 mt-2">
                <a
                  href="https://chat.whatsapp.com/KRYn2ixYKAJ2xmDYq1qLl6"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto flex items-center justify-center gap-2 border border-gray-200 hover:bg-gray-50 text-gray-700 font-medium text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 rounded-full transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-emerald-500" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.122 1.532 5.859L.057 23.286a.75.75 0 00.921.921l5.427-1.475A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.9 0-3.68-.497-5.22-1.368l-.374-.215-3.878 1.053 1.053-3.878-.215-.374A9.953 9.953 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
                  </svg>
                  Me lembre no WhatsApp
                </a>
                <button
                  type="submit"
                  className="w-full sm:w-auto inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 rounded-full bg-emerald-500 text-white font-semibold text-base sm:text-lg shadow-lg hover:bg-emerald-400 transition"
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