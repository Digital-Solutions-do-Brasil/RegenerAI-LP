import Image from 'next/image';
import Header from '../components/Header';

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
      
      <main className="pt-24 lg:pt-28"> {/* Header fixo */}
        
        {/* HERO */}
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
          {/* Apenas a imagem, sem nenhum overlay */}\n          <div className="relative z-10 text-center px-4 w-full flex flex-col items-center">
            <h1 className="text-5xl md:text-6xl lg:text-[72px] xl:text-[84px] lg:leading-tight font-extrabold text-white mb-2 lg:mb-4 drop-shadow-lg">
              Nossos dados, nosso solo e nosso futuro
            </h1>
            <p className="text-xl md:text-3xl lg:text-4xl xl:text-5xl text-white/95 font-medium drop-shadow-md mt-1 lg:mt-3">
              Transformando experiências em inteligência coletiva
            </p>
          </div>

          {/* Slider Dots */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            <div className="w-6 h-2 rounded-full bg-orange-500"></div>
            <div className="w-2 h-2 rounded-full bg-white/70"></div>
            <div className="w-2 h-2 rounded-full bg-white/70"></div>
            <div className="w-2 h-2 rounded-full bg-white/70"></div>
            <div className="w-2 h-2 rounded-full bg-white/70"></div>
          </div>
        </section>

        {/* REGENERAI É */}
        <section id="sobre" className="py-12 lg:py-16 xl:py-24 px-6 max-w-[1600px] mx-auto text-center">
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

      </main>
    </div>
  );
}