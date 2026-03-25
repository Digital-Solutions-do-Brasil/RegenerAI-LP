import Link from 'next/link';
import { Search } from 'lucide-react';
import Image from 'next/image';

export default function Header() {
  return (
    <header className="absolute top-0 w-full z-50 bg-white shadow-sm">
      <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-24 py-4 lg:py-0 flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="relative flex shrink-0 items-center w-[160px] h-[40px] sm:w-[200px] sm:h-[50px] lg:w-[320px] lg:h-[80px] xl:w-[420px] xl:h-[110px]">
            <Image src="/assets/logo.png" alt="RegenerAI Logo" fill className="object-contain object-left scale-[1.2] sm:scale-[1.6] lg:scale-[2.2] xl:scale-[3.2] origin-left" />
          </Link>
          <div className="flex items-center gap-3">
            <button className="hidden lg:inline-flex text-gray-400 hover:text-emerald-600 transition-colors">
              <Search className="w-6 h-6" />
            </button>
            <a
              href="https://wa.me/5521975300698"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-emerald-500/50 bg-emerald-50/30 px-4 sm:px-5 lg:px-6 py-2 text-sm sm:text-base lg:text-lg font-bold text-emerald-700 hover:bg-emerald-50 hover:border-emerald-500 transition-all"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 sm:w-5 sm:h-5 text-[#25D366]">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
              </svg>
              Contato
            </a>
          </div>
        </div>
        <nav className="flex flex-wrap items-center gap-4 sm:gap-6 text-sm sm:text-base lg:text-lg font-bold text-gray-600 whitespace-nowrap">
          <Link href="/" className="hover:text-emerald-600 transition-colors">Início</Link>
          <Link href="/saiba-mais" className="hover:text-emerald-600 transition-colors">Sobre nós</Link>
          <Link href="/acompanhar" className="hover:text-emerald-600 transition-colors">Acompanhar</Link>
        </nav>
      </div>
    </header>
  );
}
