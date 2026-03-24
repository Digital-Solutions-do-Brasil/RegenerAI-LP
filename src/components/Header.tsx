import Link from 'next/link';
import { Search, MessageCircle } from 'lucide-react';
import Image from 'next/image';

export default function Header() {
  return (
    <header className="absolute top-0 w-full z-50 bg-white shadow-sm">
      <div className="w-full px-6 lg:px-12 xl:px-24 h-24 lg:h-32 xl:h-40 flex items-center justify-between">
        <Link href="/" className="relative flex shrink-0 items-center w-[200px] h-[50px] lg:w-[320px] lg:h-[80px] xl:w-[420px] xl:h-[110px]">
          <Image src="/assets/logo.png" alt="RegenerAI Logo" fill className="object-contain object-left scale-[1.6] lg:scale-[2.2] xl:scale-[3.2] origin-left" />
        </Link>
        <div className="hidden lg:flex flex-1 items-center justify-end gap-6 xl:gap-10">
          <nav className="flex items-center gap-6 xl:gap-10 text-lg xl:text-xl font-bold text-gray-600 whitespace-nowrap">
            <Link href="#inicio" className="hover:text-emerald-600 transition-colors">Início</Link>
            <Link href="#sobre" className="hover:text-emerald-600 transition-colors">Sobre nós</Link>
            <Link href="#blog" className="hover:text-emerald-600 transition-colors">Blog</Link>
            <Link href="#contato" className="hover:text-emerald-600 transition-colors">Contato</Link>
          </nav>
          <button className="text-gray-400 hover:text-emerald-600 transition-colors ml-4">
            <Search className="w-6 h-6" />
          </button>
          <Link
            href="#atendimento"
            className="flex items-center gap-2 xl:gap-3 rounded-full border border-emerald-500/50 bg-emerald-50/30 px-6 xl:px-8 py-2 xl:py-3 text-lg xl:text-xl font-bold text-emerald-700 hover:bg-emerald-50 hover:border-emerald-500 transition-all whitespace-nowrap"
          >
            <MessageCircle className="w-5 h-5 xl:w-6 xl:h-6" />
            Atendimento Profissional
          </Link>
        </div>
      </div>
    </header>
  );
}