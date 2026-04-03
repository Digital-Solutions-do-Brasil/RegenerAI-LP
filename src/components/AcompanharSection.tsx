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
            src="/assets/campo-gaas.png"
            alt="Produtora segurando um tablet no campo"
            fill
            sizes="100vw"
            quality={100}
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>

        <div className="relative z-10 text-center px-4 sm:px-6 max-w-4xl space-y-4 sm:space-y-6 text-emerald-50">
          {/* <p className="text-xs sm:text-sm uppercase tracking-[0.2em] sm:tracking-[0.3em] text-emerald-100">Agricultura regenerativa colaborativa</p> */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[56px] font-extrabold leading-tight drop-shadow-md">
            Agora você tem uma rede ao seu lado!
          </h2>
          <div className="text-base sm:text-xl md:text-2xl lg:text-3xl font-medium leading-relaxed max-w-3xl mx-auto drop-shadow-md space-y-4 sm:space-y-6">
            <p>Unimos ciência e a experiência real dos agricultores, para te ajudar nas decisões e atender as necessidades da sua lavoura.</p>
            <p>Você não está mais sozinho!</p>
          </div>
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

      {/* TEXTO PÓS-HERO ACOMPANHAR */}
      <section className="pt-6 lg:pt-8 pb-10 lg:pb-12 px-6 lg:px-12 xl:px-24 w-full text-left text-gray-800">
        <div className="text-lg md:text-xl lg:text-2xl leading-relaxed font-medium text-gray-600 space-y-4">
          <p className="font-extrabold text-gray-900">Agora você tem uma rede ao seu lado!</p>
          <p>
            Unimos ciência e a experiência real dos agricultores, para te ajudar nas decisões e atender as necessidades da sua lavoura.
          </p>
          <p>
            Participe da nossa live de lançamento e venha conhecer tudo o que estamos construindo.
          </p>
          <p className="font-bold text-gray-900">06 de maio</p>
          <p>
            Tema: <span className="italic">&ldquo;Como vencer a dependência, os altos riscos e a baixa rentabilidade com a Agricultura Tropical Regenerativa.&rdquo;</span>
          </p>
          <p>
            Entre também no nosso grupo de WhatsApp e faça parte dessa rede desde o início.
          </p>
        </div>

        <div className="mt-10 lg:mt-12">
          <a
            href="https://chat.whatsapp.com/KRYn2ixYKAJ2xmDYq1qLl6"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-emerald-500 hover:bg-emerald-400 text-white font-bold text-lg lg:text-xl px-10 py-4 rounded-full shadow-lg transition-colors duration-200"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" className="w-6 h-6">
              <path d="M16 0C7.163 0 0 7.163 0 16c0 2.822.736 5.468 2.027 7.769L0 32l8.468-2.004A15.938 15.938 0 0 0 16 32c8.837 0 16-7.163 16-16S24.837 0 16 0zm0 29.333a13.27 13.27 0 0 1-6.77-1.856l-.485-.29-5.025 1.189 1.218-4.888-.317-.503A13.267 13.267 0 0 1 2.667 16C2.667 8.636 8.636 2.667 16 2.667S29.333 8.636 29.333 16 23.364 29.333 16 29.333zm7.27-9.815c-.398-.199-2.354-1.162-2.72-1.295-.365-.133-.63-.199-.896.199-.265.398-1.029 1.295-1.261 1.561-.232.265-.465.298-.863.1-.398-.199-1.681-.619-3.202-1.977-1.184-1.056-1.983-2.36-2.216-2.758-.232-.398-.025-.613.175-.811.18-.178.398-.465.597-.697.199-.232.265-.398.398-.664.133-.265.066-.497-.033-.696-.1-.199-.896-2.16-1.228-2.957-.323-.776-.651-.671-.896-.683l-.763-.013c-.265 0-.696.1-1.061.497-.365.398-1.394 1.362-1.394 3.322s1.427 3.854 1.627 4.12c.199.265 2.808 4.286 6.803 6.012.951.41 1.693.655 2.271.839.954.304 1.822.261 2.508.158.765-.114 2.354-.962 2.686-1.892.332-.93.332-1.727.232-1.892-.099-.166-.365-.265-.763-.464z"/>
            </svg>
            Entrar no grupo do WhatsApp
          </a>
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
