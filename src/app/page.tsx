
import React from 'react';

export default function Home() {
  return (
    <div className="antialiased p-4 md:p-8">
      <header className="flex justify-between items-center mb-8 md:mb-12">
        <div className="text-base font-bold crt-text-glow">
          ВАЙБ КОДИНГ <span className="text-xs opacity-75">AI</span>
        </div>
        <nav>
          <a href="#about">о_курсе</a>
          <a href="#program">программа</a>
          <a href="#contact">контакты</a>
        </nav>
      </header>

      <main>
        <div className="mb-8 md:mb-12 crt-text-glow max-w-3xl text-sm md:text-base">
          <p>
            Вайб Кодинг — это экспериментальная школа, где технология используется для критического мышления и эстетических исследований. Мы поддерживаем междисциплинарное изучение искусства, кода, железа и критической теории. Это место для обучения и разучивания.
          </p>
          <p className="mt-2"><a href="#about">узнайте больше о нас здесь</a>.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">

          <div id="about" className="crt-border">
            <h2 className="crt-text-glow">обучаем:</h2>
            <ul>
              <li>генерации изображений и текстов</li>
              <li>нейронным сетям и алгоритмам</li>
              <li>творческому кодингу</li>
              <li>интерактивным инсталляциям</li>
            </ul>
          </div>

          <div id="formats" className="crt-border">
            <h2 className="crt-text-glow">форматы:</h2>
            <p>a) курсы</p>
            <p>b) воркшопы</p>
            <p>c) чтение (материалы)</p>
            <p>d) код-песочница</p>
          </div>

          <div id="why-us" className="crt-border">
            <h2 className="crt-text-glow">почему мы:</h2>
            <ul>
              <li>современные модели ИИ</li>
              <li>проекты на практике</li>
              <li>комьюнити и малые группы</li>
              <li>сертификаты по специализациям</li>
              <li>интересные и полные проекты</li>
            </ul>
          </div>

          <div id="program" className="crt-border">
            <h2 className="crt-text-glow">программа:</h2>
            <p>Подробная программа скоро появится.</p>
            <p className="text-xs opacity-75 mt-2">// Ожидаемые темы: Python, Основы ИИ, Генеративное искусство, Интерактивные системы.</p>
            <p className="mt-4"><a href="#contact">узнать подробнее »</a></p>
            <p className="mt-2"><a href="#">расписание (скоро) »</a></p>
          </div>

          <div id="teachers" className="crt-border">
            <h2 className="crt-text-glow">преподаватели:</h2>
            <div>
              <h3 className="text-sm font-bold">ИМЯ ФАМИЛИЯ 1</h3>
              <p className="text-xs opacity-75">// Эксперт по генеративному ИИ</p>
            </div>
            <div className="mt-3">
              <h3 className="text-sm font-bold">ИМЯ ФАМИЛИЯ 2</h3>
              <p className="text-xs opacity-75">// Специалист по интерактивным системам</p>
            </div>
            <div className="mt-3">
              <h3 className="text-sm font-bold">ИМЯ ФАМИЛИЯ 3</h3>
              <p className="text-xs opacity-75">// Мастер креативного кодинга</p>
            </div>
          </div>

          <div id="contact" className="crt-border">
            <h2 className="crt-text-glow">контакты:</h2>
            <p>EMAIL: <a href="mailto:info@vibecoding.ai">info@vibecoding.ai</a></p>
            <p>TEL: <a href="tel:+70001234567">+7(000)123-45-67</a></p>
            <p>LOCATION: Онлайн / Город</p>
            <p className="mt-4"><a href="#">подписаться на новости »</a></p>
          </div>

        </div>
      </main>

      <footer className="mt-12 pt-4 border-t border-gray-700 text-center text-xs opacity-50">
        <p>&copy; 2025 ВАЙБ КОДИНГ.</p>
        <p className="mt-1">// вы находитесь в режиме ЭЛТ, переключиться в режим ЖК?</p>
      </footer>
    </div>
  );
}
