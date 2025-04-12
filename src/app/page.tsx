
import React from 'react';

export default function Home() {
  return (
    <div className="antialiased p-4 md:p-8">
      <header className="flex justify-between items-center mb-8 md:mb-12">
        <div className="text-base font-bold crt-text-glow">
          hashslash
        </div>
        <nav>
          <a href="https://hsl.sh">hsl.sh</a>
        </nav>
      </header>

      <main>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          <div className="crt-border">
            <h2 className="crt-text-glow">🔥 Ближайшее событие</h2>
            <p>WORKSHOP:00 – Vibe-coding + интро в AI</p>
            <p>📅 Дата трансляции: [Укажите дату и время]</p>
            <p>📍 Онлайн (ссылка появится перед началом)</p>
            <p>Тип: Воркшоп</p>
            <p>
              Первый открытый воркшоп для тех, кто хочет понять, как работает AI и
              почему он не страшный, а мощный инструмент. Подходит для начинающих,
              подростков и всех, кто «выпал» из технологического контекста.
            </p>
            <a href="#">🔗 Зарегистрироваться</a>
          </div>
        </div>
      </main>

      <footer className="mt-12 pt-4 border-t border-gray-700 text-center text-xs opacity-50">
        <p>&copy; 2025 hashslash.</p>
        <p class="mt-1">// вы находитесь в режиме ЭЛТ, переключиться в режим ЖК?</p>
      </footer>
    </div>
  );
}
