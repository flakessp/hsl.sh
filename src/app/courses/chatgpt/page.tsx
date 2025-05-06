'use client';

import React from 'react';
import Link from 'next/link';

const ChatGptCoursePage = () => {
  return (
    <div className="min-h-screen bg-black">
      <header className="fixed top-0 left-0 right-0 z-50 bg-black bg-opacity-80 backdrop-blur-md p-4 flex justify-between items-center border-b border-gray-700">
        <Link href="/" legacyBehavior>
          <a className="text-xl crt-text-glow font-mono"># хешслеш</a>
        </Link>
        <nav className="hidden md:flex space-x-6">
          <Link href="/#courses" legacyBehavior><a className="hover:crt-text-glow transition-all">Курсы</a></Link>
          <Link href="/#community" legacyBehavior><a className="hover:crt-text-glow transition-all">Сообщество</a></Link>
          <Link href="/#about" legacyBehavior><a className="hover:crt-text-glow transition-all">О проекте</a></Link>
        </nav>
        <a href="https://t.me/hashslash_community" target="_blank" rel="noopener noreferrer" className="crt-border px-4 py-1 hover:crt-text-glow transition-all">
          Вступить в чат
        </a>
      </header>

      <main className="pt-20">
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-mono mb-4 crt-text-glow">
            ChatGPT: основы работы
          </h1>
          <p className="text-lg max-w-3xl mx-auto mb-12">
            Освойте самый популярный AI-ассистент для решения повседневных и рабочих задач.
          </p>
        </div>

        <section className="my-12">
          <h2 className="text-2xl crt-text-glow mb-6">$ cat ./course_details.txt</h2>
          <div className="crt-border p-6">
            <p className="mb-4">
              Этот курс предназначен для тех, кто хочет быстро и эффективно научиться использовать ChatGPT. Вы узнаете, как правильно формулировать запросы, получать нужную информацию, генерировать текст, код и многое другое.
            </p>
            <p className="mb-4">
              Мы разберем практические кейсы применения ChatGPT в работе, учебе и личной жизни. По окончании курса вы сможете уверенно использовать ChatGPT для повышения своей продуктивности.
            </p>
            <pre className="text-xs whitespace-pre-wrap">
{`Продолжительность: 1 неделя
Формат: Видеоуроки, практические упражнения, доступ к базе знаний
Стоимость: 35$`}
            </pre>
          </div>
        </section>
        
        <section className="my-12">
          <h2 className="text-2xl crt-text-glow mb-6">$ ls ./topics</h2>
          <div className="crt-border p-6">
            <ul className="list-disc list-inside opacity-80">
              <li>Знакомство с ChatGPT: интерфейс и базовые возможности.</li>
              <li>Искусство промптинга: как задавать вопросы, чтобы получать точные ответы.</li>
              <li>Генерация текста: статьи, письма, посты для соцсетей.</li>
              <li>ChatGPT для программистов: генерация и отладка кода, объяснение алгоритмов.</li>
              <li>Использование ChatGPT для обучения и исследований.</li>
              <li>Креативное применение: идеи, сценарии, стихи.</li>
              <li>Ограничения и этические аспекты использования AI.</li>
            </ul>
          </div>
        </section>

        <section className="my-16 text-center">
          <h2 className="text-2xl crt-text-glow mb-6">Готовы стать мастером ChatGPT?</h2>
          <a href="#" className="crt-border px-8 py-4 crt-text-glow hover:bg-gray-900 transition-colors text-lg">
            Записаться на курс «ChatGPT: основы работы»
          </a>
        </section>

        <section className="my-12 text-center">
            <Link href="/" legacyBehavior>
              <a className="crt-text-glow hover:text-white transition-colors">&lt;&lt; Вернуться на главную</a>
            </Link>
        </section>
      </main>

      <footer className="mt-16 pt-6 border-t border-gray-700">
        <div className="flex flex-col md:flex-row justify-between items-start mb-12">
          <div className="mb-8 md:mb-0">
            <div className="text-xl crt-text-glow font-mono mb-4">
              <span className="mr-1">#</span>
              <span>хешслеш</span>
            </div>
            <p className="text-sm opacity-75 max-w-xs">Школа цифровых ремёсел для создания проектов с помощью AI-инструментов</p>
          </div>

          <nav className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16">
            <div>
              <h4 className="font-bold mb-3">Курсы</h4>
              <ul className="space-y-2">
                <li><Link href="/courses/vibe-coding" legacyBehavior><a className="opacity-75 hover:opacity-100 transition-opacity">Вайб-кодинг</a></Link></li>
                <li><Link href="/courses/chatgpt" legacyBehavior><a className="opacity-75 hover:opacity-100 transition-opacity">ChatGPT</a></Link></li>
                <li><Link href="/courses/upcoming" legacyBehavior><a className="opacity-75 hover:opacity-100 transition-opacity">Будущие курсы</a></Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-3">Сообщество</h4>
              <ul className="space-y-2">
                <li><Link href="https://t.me/hashslash_community" legacyBehavior><a className="opacity-75 hover:opacity-100 transition-opacity">Telegram</a></Link></li>
                <li><Link href="/podcast" legacyBehavior><a className="opacity-75 hover:opacity-100 transition-opacity">Подкаст</a></Link></li>
                <li><Link href="/events" legacyBehavior><a className="opacity-75 hover:opacity-100 transition-opacity">События</a></Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-3">О проекте</h4>
              <ul className="space-y-2">
                <li><Link href="/about" legacyBehavior><a className="opacity-75 hover:opacity-100 transition-opacity">О нас</a></Link></li>
                <li><Link href="/blog" legacyBehavior><a className="opacity-75 hover:opacity-100 transition-opacity">Блог</a></Link></li>
                <li><Link href="https://github.com/hashslash" legacyBehavior><a className="opacity-75 hover:opacity-100 transition-opacity">GitHub</a></Link></li>
              </ul>
            </div>
          </nav>
        </div>
        
        <div className="pt-4 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center text-xs opacity-50">
          <p>&copy; {new Date().getFullYear()} HashSlash. Все права защищены.</p>
          <div className="flex space-x-4 mt-2 md:mt-0">
            <Link href="/privacy" legacyBehavior><a className="opacity-75 hover:opacity-100 transition-opacity">Политика конфиденциальности</a></Link>
            <Link href="/terms" legacyBehavior><a className="opacity-75 hover:opacity-100 transition-opacity">Условия использования</a></Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ChatGptCoursePage;
