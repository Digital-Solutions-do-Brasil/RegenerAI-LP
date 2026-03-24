import Image from 'next/image';
import Header from '../../components/Header';

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
          
          <div className="relative z-10 text-center px-6 max-w-[1200px] mx-auto">
            <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-[56px] font-extrabold text-white leading-snug drop-shadow-lg">
              A transição para a Agricultura Regenerativa já é uma realidade. O Brasil já tem centenas de experiências regenerativas acontecendo.
            </h1>
          </div>
        </section>

        {/* TEXTO INFORMATIVO ABAIXO DA IMAGEM */}
        <section className="pt-8 lg:pt-12 pb-16 lg:pb-24 px-8 lg:px-12 xl:px-20 w-full max-w-none mx-auto text-left text-gray-800">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 xl:gap-20 text-lg md:text-xl lg:text-2xl leading-relaxed font-medium">
            
            {/* Coluna 1 */}
            <div className="space-y-6 lg:space-y-8 lg:pr-10">
              <p className="font-extrabold text-gray-900 whitespace-nowrap">Mas elas estão:</p>
              <ul className="space-y-4 text-gray-600 pl-4 lg:pl-6 border-l-4 border-emerald-500 font-semibold xl:whitespace-nowrap">
                <li>• Espalhadas em relatos de grupos de WhatsApp</li>
                <li>• Perdidas em anotações individuais</li>
                <li>• Restritas a conversas pontuais</li>
              </ul>
            </div>
            
            {/* Coluna 2 */}
            <div className="space-y-6 lg:space-y-8 lg:pr-10">
              <ul className="space-y-4 text-gray-600 font-semibold xl:whitespace-nowrap">
                <li>• O problema principal não é falta de conhecimento técnico.</li>
                <li className="font-extrabold text-emerald-700">• É o acesso a esse conhecimento.</li>
              </ul>
            </div>

            {/* Coluna 3 */}
            <div className="space-y-6 lg:space-y-8">
              <p>
                É a ausência de uma infraestrutura que<br className="hidden lg:block"/>
                transforme experiências individuais em<br className="hidden lg:block"/>
                conhecimento e inteligência coletiva.<br className="hidden lg:block"/>
                Sem isso, a transição permanece<br className="hidden lg:block"/>
                fragmentada e não evolui.
              </p>
            </div>

          </div>

          <div className="mt-16 lg:mt-20 p-10 lg:p-16 xl:p-20 bg-gray-50 rounded-3xl border border-gray-100 text-center shadow-sm w-full max-w-[1400px] mx-auto">
            <p className="font-extrabold text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-emerald-700 italic">
              RegenerAI: “Nossos dados, nosso solo, nosso futuro, transformando experiências em inteligência coletiva”
            </p>
          </div>
        </section>

      </main>
    </div>
  );
}