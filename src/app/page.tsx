import Image from 'next/image';
import Header from '../components/Header';
import AcompanharSection from '../components/AcompanharSection';

const features = [
  { icon: 'Prancheta 1.svg', title: 'Inteligência\ncoletiva' },
  { icon: 'Prancheta 2.svg', title: 'Tecnologia\nque conecta' },
  { icon: 'Prancheta 3.svg', title: 'Dados a serviço\ndo Agricultor' },
  { icon: 'Prancheta 4.svg', title: 'Impacto\nRegenerativo' },
  { icon: 'Prancheta 5.svg', title: 'Inovação\nTransformadora' },
];

export default function LandingPage() {
  return (
    <div className="bg-white text-gray-900 min-h-screen font-sans">
      <Header />

      <main className="w-full">

        {/* ===================== INÍCIO ===================== */}
        <section id="inicio" className="relative w-full h-[50vh] lg:h-[60vh] xl:h-[70vh] min-h-[400px] max-h-[850px] flex flex-col items-center justify-center">
          <Image
            src="/assets/hero-landscape.png"
            alt="Plantação ao pôr do sol - RegenerAI"
            fill
            sizes="100vw"
            quality={100}
            className="object-cover"
            priority
          />
          <div className="relative z-10 text-center px-4 w-full flex flex-col items-center">
            <h1 className="text-5xl md:text-6xl lg:text-[72px] xl:text-[84px] lg:leading-tight font-extrabold text-white mb-2 lg:mb-4 drop-shadow-lg">
              Nossos dados, nosso solo e nosso futuro
            </h1>
            <p className="text-xl md:text-3xl lg:text-4xl xl:text-5xl text-white/95 font-medium drop-shadow-md mt-1 lg:mt-3">
              Transformando experiências em inteligência coletiva
            </p>
          </div>
        </section>

        {/* REGENERAI É */}
        <section className="py-12 lg:py-16 xl:py-24 px-6 max-w-[1600px] mx-auto text-center">
          <p className="text-xl md:text-2xl lg:text-3xl font-medium text-gray-500 mb-2 lg:mb-4">
            E se ninguém precisasse começar do zero.
          </p>
          <h2 className="text-2xl lg:text-3xl xl:text-4xl font-extrabold text-gray-900 mb-10 lg:mb-16">
            RegenerAI é:
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 lg:gap-10 xl:gap-14">
            {features.map((item, i) => (
              <div key={i} className="flex flex-col items-center text-center gap-3 lg:gap-5 xl:gap-6">
                <div className="relative w-16 h-16 md:w-20 md:h-20 lg:w-28 lg:h-28 xl:w-36 xl:h-36">
                  <Image
                    src={`/assets/${item.icon}`}
                    alt={item.title.replace('\n', ' ')}
                    fill
                    className="object-contain"
                  />
                </div>
                <h3 className="text-sm md:text-base lg:text-lg xl:text-xl font-bold text-gray-900 whitespace-pre-line leading-tight">
                  {item.title}
                </h3>
              </div>
            ))}
          </div>
        </section>

        {/* ===================== SOBRE NÓS ===================== */}
        <section id="sobre-nos" className="relative w-full h-[50vh] lg:h-[60vh] xl:h-[70vh] min-h-[400px] max-h-[850px] flex flex-col items-center justify-center">
          <Image
            src="/assets/Homem-trabalhando-v2.jpeg"
            alt="Agricultor colhendo café no campo"
            fill
            sizes="100vw"
            quality={100}
            className="object-cover"
          />
          {/* Leve escurecimento para leitura do texto */}
          <div className="absolute inset-0 bg-black/40" />

          <div className="relative z-10 text-center px-6 max-w-[1200px] mx-auto space-y-4">
            <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-[56px] font-extrabold text-white leading-snug drop-shadow-lg">
              A transição para a Agricultura Regenerativa já é uma realidade.
            </h2>
            <p className="text-xl sm:text-2xl lg:text-3xl text-gray-200 font-semibold drop-shadow-md">
              O Brasil já tem centenas de experiências regenerativas acontecendo.
            </p>
          </div>
        </section>

        {/* TEXTO INFORMATIVO */}
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
              RegenerAI: &ldquo;Nossos dados, nosso solo, nosso futuro, transformando experiências em inteligência coletiva&rdquo;
            </p>
          </div>
        </section>

        {/* ===================== ACOMPANHAR + FORMULÁRIO ===================== */}
        <AcompanharSection />

      </main>
    </div>
  );
}