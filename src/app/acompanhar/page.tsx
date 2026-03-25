'use client';

import { useState } from 'react';
import Image from 'next/image';
import Header from '../../components/Header';

export default function AcompanharPage() {
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="bg-white text-gray-900 min-h-screen font-sans">
      <Header />

      <main className="pt-24 lg:pt-28">
        {/* HERO */}
        <section className="relative w-full h-[60vh] lg:h-[65vh] xl:h-[70vh] min-h-[420px] max-h-[860px] flex flex-col items-center justify-center overflow-hidden">
          <Image
            src="/assets/Mulher-com-tablet.png"
            alt="Produtora segurando um tablet no campo"
            fill
            sizes="100vw"
            quality={100}
            className="object-cover"
            priority
          />

          <div className="relative z-10 text-center px-6 max-w-4xl space-y-6 text-white">
            <p className="text-sm uppercase tracking-[0.3em] text-white">Agricultura regenerativa colaborativa</p>
            <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-[56px] font-extrabold leading-tight">
              E se ninguém mais precisasse começar do zero?
            </h1>
            <p className="text-xl md:text-2xl lg:text-3xl font-medium leading-relaxed">
              E se as experiências reais de campo se transformassem em memória coletiva estruturada? E se o que funcionou (ou não funcionou) em uma fazenda ajudasse outra a tomar decisões mais seguras e assertivas?
            </p>
            <button
              type="button"
              onClick={() => setShowForm(true)}
              className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-emerald-500 text-white font-semibold text-lg shadow-2xl hover:bg-emerald-400 transition"
            >
              Quero acompanhar
            </button>
          </div>
        </section>

        {/* FORM SECTION */}
        {showForm && (
          <section id="formulario" className="relative z-10 -mt-12 lg:-mt-20 pb-12 lg:pb-16 px-4 lg:px-12 xl:px-20">
            <div className="max-w-6xl mx-auto bg-white border border-gray-100 rounded-3xl shadow-2xl p-8 lg:p-12 space-y-10">
              <button
                type="button"
                className="absolute top-4 right-4 text-sm font-semibold text-gray-400 hover:text-gray-600"
                onClick={() => setShowForm(false)}
              >
                fechar ✕
              </button>
              <div className="space-y-3 mt-4">
                <p className="text-emerald-500 font-semibold tracking-[0.2em] uppercase text-sm">Fique por dentro</p>
              <h2 className="text-3xl lg:text-4xl font-black text-gray-900">
                Quero acompanhar
              </h2>
            </div>

            <form action="https://formsubmit.co/vladimir@digitalsolutions4y.com" method="POST" className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <label className="lg:col-span-2 flex flex-col gap-2 text-sm font-semibold text-gray-700">
                Nome
                <input
                  type="text"
                  name="nome"
                  required
                  placeholder="Seu nome completo"
                  className="w-full rounded-2xl border border-gray-200 bg-gray-50 px-4 py-3 text-base text-gray-900 focus:outline-none focus:ring-2 focus:ring-emerald-400"
                />
              </label>

              <label className="flex flex-col gap-2 text-sm font-semibold text-gray-700">
                E-mail
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="seu@email.com"
                  className="w-full rounded-2xl border border-gray-200 bg-gray-50 px-4 py-3 text-base text-gray-900 focus:outline-none focus:ring-2 focus:ring-emerald-400"
                />
              </label>

              <label className="flex flex-col gap-2 text-sm font-semibold text-gray-700">
                WhatsApp
                <input
                  type="tel"
                  name="whatsapp"
                  required
                  placeholder="(00) 00000-0000"
                  className="w-full rounded-2xl border border-gray-200 bg-gray-50 px-4 py-3 text-base text-gray-900 focus:outline-none focus:ring-2 focus:ring-emerald-400"
                />
              </label>

              <div className="lg:col-span-2 flex flex-col gap-2 text-sm font-semibold text-gray-700">
                Observações
                <textarea
                  name="observacoes"
                  placeholder="Conte um pouco sobre sua fazenda, desafios ou interesses..."
                  className="w-full rounded-2xl border border-gray-200 bg-gray-50 px-4 py-3 text-base text-gray-900 focus:outline-none focus:ring-2 focus:ring-emerald-400 min-h-[140px]"
                />
              </div>

              {/* Redirecionamento e Configurações Ocultas do FormSubmit */}
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_subject" value="Novo Contato - RegenerAI" />

              <div className="lg:col-span-2 flex justify-end">
                <button
                  type="submit"
                  className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-emerald-500 text-white font-semibold text-lg shadow-lg hover:bg-emerald-400 transition"
                >
                  Enviar
                </button>
              </div>
            </form>
          </div>
        </section>
        )}
      </main>
    </div>
  );
}
