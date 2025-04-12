'use client';

import React from 'react';

export default function Home() {
  return (
    <div className="antialiased p-4 md:p-8">
      <header className="flex justify-between items-center mb-8 md:mb-12">
        <div className="text-base font-bold crt-text-glow">hashslash</div>
        <nav>
          <a href="https://hsl.sh">hsl.sh</a>
        </nav>
      </header>

      <main>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          <div className="crt-border">
            <h2 className="crt-text-glow">WORKSHOP:00 Vibe-coding</h2>
            <h3>Воркшоп</h3>
            <p>
              Первый открытый воркшоп для тех, кто хочет понять, как работает AI и
              почему он не страшный, а мощный инструмент. Подходит для начинающих,
              подростков и всех, кто «выпал» из технологического контекста.
            </p>
            <br></br>
            <a href="#">🔗 Трансляция в телеграмме</a>
          </div>
          <div className="crt-border">
            <h2 className="crt-text-glow">Генеративное искусство</h2>
            <h3>Воркшоп</h3>
            <p>
              Воркшоп для тех, кто хочет создавать крутое искусство при помощи нейросетей.
            </p>
            <br></br>
            <a href="#">🔗 Узнать подробнее</a>
          </div>
        </div>
      </main>

      <footer className="mt-12 pt-4 border-t border-gray-700 text-center text-xs opacity-50">
        <p>&copy; 2025 hashslash.</p>
      </footer>
    </div>
  );
}
