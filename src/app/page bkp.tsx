import Image from 'next/image';
import Header from '../components/Header';
import AcompanharSection from '../components/AcompanharSection';
import LiveCard from '../components/LiveCard';
import LiveFinalSection from '../components/LiveFinalSection';

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
          <div className="absolute inset-0 z-0">
            <Image
              src="/assets/hero-landscape.png"
              alt="Plantação ao pôr do sol - RegenerAI"
              fill
              sizes="100vw"
              quality={100}
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-black/20" />
          </div>
          <div className="relative z-10 text-center px-4 w-full flex flex-col items-center pointer-events-none">
            <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-[56px] leading-snug font-extrabold text-white mb-2 lg:mb-4 drop-shadow-lg">
              Nossos dados, nosso solo e nosso futuro!
            </h1>
            <p className="text-xl sm:text-2xl lg:text-3xl text-white/95 font-semibold drop-shadow-md mt-1 lg:mt-3">
              Transformando experiências em inteligência coletiva
            </p>
          </div>

          {/* Card de Live de Lançamento */}
          <LiveCard />
        </section>

        {/* REGENERAI É */}
        <section className="py-12 lg:py-16 xl:py-24 px-6 max-w-[1600px] mx-auto text-center">
          <p className="text-xl md:text-2xl lg:text-3xl font-medium text-gray-500 mb-6 lg:mb-8">
            E se fosse possível reduzir custos e aumentar a resiliência enquanto regeneramos nosso maior patrimônio: o solo?
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

        {/* ===================== INTELIGÊNCIA COLETIVA ===================== */}
        <section className="relative w-full h-[50vh] lg:h-[60vh] xl:h-[70vh] min-h-[400px] max-h-[850px] flex flex-col items-center justify-center">
          <Image
            src="/assets/LP-4.png"
            alt="Experiências que viram inteligência coletiva"
            fill
            sizes="100vw"
            quality={100}
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
          <div className="relative z-10 text-center px-6 max-w-[1200px] mx-auto space-y-4">
            <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-[56px] font-extrabold text-white leading-snug drop-shadow-lg">
              Experiências que viram inteligência coletiva, de agricultor para agricultor
            </h2>
            <p className="text-xl sm:text-2xl lg:text-3xl text-gray-200 font-semibold drop-shadow-md">
              O RegenerAI nasce para transformar a vivência do agricultor em conhecimento vivo, útil e compartilhado.
            </p>
          </div>
        </section>

        {/* TEXTO INTELIGÊNCIA COLETIVA */}
        <section className="pt-6 lg:pt-8 pb-10 lg:pb-12 px-6 lg:px-12 xl:px-24 w-full text-left text-gray-800">
          <div className="text-lg md:text-xl lg:text-2xl leading-relaxed font-medium text-gray-600 space-y-4">
            <p>
              Mais do que uma IA, é uma inteligência coletiva feita para valorizar a prática, confrontá-la com a ciência e devolver ao campo respostas que realmente fazem sentido.
            </p>
            <p>
              Enquanto outras IAs entregam informação genérica, o RegenerAI parte da realidade de quem produz.
              Ele organiza o que acontece na lavoura, conecta experiências reais com evidências científicas e ajuda a construir decisões mais seguras, mais humanas e mais regenerativas.
            </p>
            <p>
              Criado pela GAAS, o RegenerAI tem um compromisso claro: os dados pertencem ao agricultor.
              Não vendemos insumos.
              Não comercializamos informações.
              Nosso propósito é fortalecer a autonomia de quem está na linha de frente da produção e ampliar o valor gerado por cada experiência de campo.
            </p>
          </div>

          <div className="mt-10 lg:mt-14">
            <p className="font-extrabold text-gray-900 text-lg md:text-xl lg:text-2xl mb-6">O que o RegenerAI entrega:</p>
            <ul className="space-y-3 text-gray-600 pl-4 lg:pl-6 border-l-4 border-emerald-500 font-semibold text-lg md:text-xl lg:text-2xl leading-relaxed">
              <li>• Conhecimento construído no campo, com base na prática real</li>
              <li>• Ciência aplicada à realidade do produtor, sem distância da vida concreta</li>
              <li>• Mais soberania, com dados sob controle de quem produz</li>
              <li>• Menos tentativa e erro, com decisões mais consistentes</li>
              <li>• Tecnologia sem viés comercial, focada em gerar valor</li>
              <li>• Inovação regenerativa, com impacto positivo para o solo, o sistema e o futuro</li>
            </ul>
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
              </ul>
            </div>

          </div>

          <div className="mt-8 lg:mt-10 text-center">
            <p className="text-lg md:text-xl lg:text-2xl font-semibold text-gray-800">
              Sem isso, a transição permanece fragmentada e não evolui.
            </p>
          </div>

          <div className="mt-8 lg:mt-10 p-8 lg:p-10 xl:p-12 bg-gray-50 rounded-3xl border border-gray-100 text-center shadow-sm w-full">
            <p className="font-extrabold text-2xl md:text-3xl lg:text-4xl xl:text-[38px] text-emerald-700">
              RegenerAI
            </p>
            <p className="font-extrabold text-xl md:text-2xl lg:text-3xl xl:text-[32px] text-emerald-700 italic mt-2">
              &ldquo;Nossos dados, nosso solo, nosso futuro, transformando experiências em inteligência coletiva&rdquo;
            </p>
          </div>

          <div className="mt-10 lg:mt-14 text-lg md:text-xl lg:text-2xl leading-relaxed font-medium text-gray-600 space-y-4">
            <p>
              O RegenerAI é uma iniciativa do GAAS (Grupo Associado de Agricultura Sustentável) para transformar a experiência do campo em inteligência coletiva a serviço da agricultura regenerativa.
            </p>
            <p>
              Nascido da troca entre agricultores, o GAAS existe para unir prática e ciência na construção de soluções mais sustentáveis, rentáveis e autônomas. Com o RegenerAI, esse compromisso ganha escala: sistematizamos o conhecimento gerado no campo, confrontamos com a ciência e devolvemos ao agricultor aprendizado útil para decidir melhor.
            </p>
            <p>
              Aqui, os dados pertencem ao agricultor. Aqui, a experiência de quem produz tem valor. Aqui, a ciência amplia o saber do campo.
            </p>
          </div>

          <div className="mt-10 lg:mt-12">
            <a
              href="/assets/Manifesto RegenerAI.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-lg lg:text-xl px-10 py-4 rounded-2xl shadow-md transition-colors duration-200"
            >
              Nossos compromissos
            </a>
          </div>
        </section>

        {/* ===================== ACOMPANHAR + FORMULÁRIO ===================== */}
        <AcompanharSection />

        {/* ===================== SESSÃO FINAL DA LIVE ===================== */}
        <LiveFinalSection />

      </main>
    </div>
  );
}