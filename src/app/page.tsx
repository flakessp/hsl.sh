
import React from 'react';

export default function Home() {
  return (
    <div className="antialiased p-4 md:p-8">
      <header className="flex justify-between items-center mb-8 md:mb-12">
        <div className="text-base font-bold crt-text-glow">
          hashslash <span className="text-xs opacity-75">AI</span>
        </div>
        <nav>
          <a href="#event">событие</a>
          <a href="https://hsl.sh">hsl.sh</a>
        </nav>
      </header>

      <main>
        <div id="event" className="mb-8 md:mb-12 crt-text-glow max-w-3xl text-sm md:text-base">
          <h2 className="pixel-font-display">
            🔥 Ближайшее событие
          </h2>
          <p>
            WORKSHOP:00 – Vibe-coding + интро в AI
          </p>
          <p>
            📅 Дата трансляции: [Укажите дату и время]
          </p>
          <p>
            📍 Онлайн (ссылка появится перед началом)
          </p>
          <p>
            Первый открытый воркшоп для тех, кто хочет понять, как работает AI и почему он не страшный, а мощный инструмент.
            Подходит для начинающих, подростков и всех, кто «выпал» из технологического контекста.
          </p>
          <p className="mt-4">
            <a href="#">🔗 Зарегистрироваться</a>
          </p>
        </div>
      </main>

      <footer className="mt-12 pt-4 border-t border-gray-700 text-center text-xs opacity-50">
        <p>&copy; 2025 hashslash.</p>
        <p className="mt-1"><a href="#">подписаться на новости »</a></p>
      </footer>
    </div>
  );
}

