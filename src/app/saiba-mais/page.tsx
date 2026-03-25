import Image from 'next/image';
import Header from '../../components/Header';
import { ArrowRight } from 'lucide-react';

export default function SaibaMaisPage() {
  return (
    <div className="bg-white text-gray-900 min-h-screen font-sans">
      <Header />
      
      <main className="pt-24 lg:pt-28">
        
        {/* HERO - HOMEM TRABALHANDO */}
        <section className="relative w-full h-[50vh] lg:h-[60vh] xl:h-[70vh] min-h-[400px] max-h-[850px] flex flex-col items-center justify-center">
          <Image
            src="/assets/Homem-trabalhando.png"
            alt="Homem trabalhando no campo"
            fill
            sizes="100vw"
            quality={100}
            className="object-cover"
            priority
          />
          {/* Leve escurecimento para leitura do texto */}
          <div className="absolute inset-0 bg-black/40" />
          
          <div className="relative z-10 text-center px-6 max-w-[1200px] mx-auto space-y-6">
            <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-[56px] font-extrabold text-white leading-snug drop-shadow-lg">
              A transição para a Agricultura Regenerativa já é uma realidade. O Brasil já tem centenas de experiências regenerativas acontecendo.
            </h1>
          </div>
        </section>

        {/* TEXTO INFORMATIVO ABAIXO DA IMAGEM */}
        <section className="pt-6 lg:pt-8 pb-10 lg:pb-12 px-6 lg:px-12 xl:px-24 w-full text-left text-gray-800">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 xl:gap-28 text-lg md:text-xl lg:text-2xl leading-relaxed font-medium w-full">
            
            {/* Coluna 1 */}
            <div className="lg:w-1/2 space-y-4 lg:space-y-6">
              <p className="font-extrabold text-gray-900">Mas elas estão:</p>
              <ul className="space-y-3 text-gray-600 pl-4 lg:pl-6 border-l-4 border-emerald-500 font-semibold">
                <li>• Espalhadas em relatos de grupos de WhatsApp</li>
                <li>• Perdidas em anotações individuais</li>
                <li>• Restritas a conversas pontuais</li>
              </ul>
            </div>
            
     {/* Coluna 2 */}
            <div className="lg:w-1/2 space-y-4 lg:space-y-6">
              <p className="font-extrabold text-gray-900">O problema principal não é falta de conhecimento técnico:</p>
              <ul className="space-y-3 text-gray-600 pl-4 lg:pl-6 border-l-4 border-emerald-500 font-semibold">
                <li>• É o acesso a esse conhecimento.</li>
                <li>• É a ausência de uma infraestrutura que transforme experiências individuais em conhecimento e inteligência coletiva.</li>
                <li>• Sem isso, a transição permanece fragmentada e não evolui.</li>
              </ul>
            </div>

          </div>

          <div className="mt-8 lg:mt-10 p-8 lg:p-10 xl:p-12 bg-gray-50 rounded-3xl border border-gray-100 text-center shadow-sm w-full">
            <p className="font-extrabold text-2xl md:text-3xl lg:text-4xl xl:text-[40px] text-emerald-700 italic">
              RegenerAI: “Nossos dados, nosso solo, nosso futuro, transformando experiências em inteligência coletiva”
            </p>
          </div>
        </section>

      </main>
    </div>
  );
}