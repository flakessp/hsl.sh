import React from 'react';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white border-b border-gray-200 p-4">
      <div className="flex justify-between items-center max-w-6xl mx-auto">
        <div className="text-xl font-mono">
          <span className="mr-1">#</span>
          <Link href="/" className="hover:underline focus:underline outline-none">
            <span>хешслеш</span>
          </Link>
        </div>
        <nav className="hidden md:flex items-center space-x-6">
          <a href="#courses" className="transition-all">Курсы</a>
          <a href="#community" className="transition-all">Сообщество</a>
          <a href="#about" className="transition-all">О проекте</a>
        </nav>
        <a href="https://t.me/hashslash_community" className="border border-gray-200 px-4 py-1 transition-all hover:bg-gray-50">
          Вступить в чат
        </a>
      </div>
    </header>
  );
}
