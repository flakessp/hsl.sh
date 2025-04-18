'use client';

import React from 'react';

export default function Home() {
  return (
    <div className="antialiased p-4 md:p-8">
      <header className="flex flex-col items-start mb-8 md:mb-12">
        <div className="text-base font-bold crt-text-glow">hashslash</div>
        <p className="mt-2 text-sm opacity-75">
          hashslash / хешслеш / ХСЛ Ш — это комьюнити для тех, кто хочет разузнать про современные технологии, и научиться
          использовать их как творческий инструмент.
        </p>
      </header>

      <main>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 md:gap-6">
          <div className="crt-border">
            <h2 className="crt-text-glow">Vibe-coding</h2>
            <h3>WORKSHOP</h3>
            <p>
              Открытый воркшоп для тех, кто хочет понять, как работает AI и почему он не страшный, а мощный
              инструмент. Подходит для начинающих, подростков и всех, кто «выпал» из технологического контекста.
            </p>
            <br></br>
            <a href="https://t.me/internet_tet_a_tet">🔗 Зарегистрироваться</a>
          </div>
          <div className="crt-border">
            <h2 className="crt-text-glow">Генеративное искусство</h2>
            <h3>Воркшоп</h3>
            <p>Программа для тех, кто хочет создавать цифровое искусство с помощью кода и выкладывать его в блокчейн.</p>
            <br></br>
            <a href="https://t.me/internet_tet_a_tet">🔗 Узнать подробнее</a>
          </div>
        </div>
      </main>

      <footer className="mt-12 pt-4 border-t border-gray-700 text-center text-xs opacity-50">
        <p>&copy; 2025 hashslash.</p>
      </footer>
    </div>
  );
}
