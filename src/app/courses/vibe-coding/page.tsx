'use client';

import React from 'react';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import Section from '../../../components/Section';

const VibeCodingPage = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-3xl md:text-4xl font-mono mb-6">
            Вайбкодинг: запусти MVP за 4 недели, генерируя код через ИИ
          </h1>
          <p className="text-lg max-w-3xl mx-auto mb-12 text-gray-600">
            Ты — предприниматель, дизайнер или начинающий разработчик, которому нужно быстро проверить идею. Вместо месяцев ручного кодинга ты за 30 дней освоишь метод вайбкодинга — управление ИИ‑помощниками простыми текстовыми инструкциями. Результат — готовый прототип, который можно показать инвесторам или первым клиентам.
          </p>
        </div>

        <section className="my-12">
          <h2 className="text-2xl crt-text-glow mb-6">$ cat ./для_кого_курс.txt</h2>
          <div className="crt-border p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-bold mb-3">Кому подходит</h3>
                <ul className="space-y-3">
                  <li className="flex"><span className="mr-2">→</span> Предпринимателям</li>
                  <li className="flex"><span className="mr-2">→</span> Дизайнерам</li>
                  <li className="flex"><span className="mr-2">→</span> Новичкам в программировании</li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold mb-3">Что получишь</h3>
                <ul className="space-y-3">
                  <li className="flex"><span className="mr-2">→</span> Быстрый запуск продукта без отдела разработки</li>
                  <li className="flex"><span className="mr-2">→</span> Перевод макетов в работающий фронт за часы, а не недели</li>
                  <li className="flex"><span className="mr-2">→</span> Пошаговый ввод без «сухого» синтаксиса</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        
        <section className="my-12">
          <h2 className="text-2xl crt-text-glow mb-6">$ ls ./формат_и_программа</h2>
          <div className="crt-border p-6">
            <div className="mb-6">
              <p className="mb-2"><span className="opacity-75">Длительность:</span> 4 недели / 20 коротких уроков + 4 живых стрима‑разбора</p>
              <p><span className="opacity-75">Формат:</span> видео + практические задания + поддержка в закрытом Telegram‑чате</p>
            </div>
            
            <h3 className="font-bold mb-3">Что внутри:</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
              <div className="crt-border p-4">
                <h4 className="text-lg mb-2 crt-text-glow">Неделя 1</h4>
                <p className="text-sm opacity-80">Основы вайбкодинга: как «разговаривать» с ИИ, чтобы он писал код.</p>
              </div>
              <div className="crt-border p-4">
                <h4 className="text-lg mb-2 crt-text-glow">Неделя 2</h4>
                <p className="text-sm opacity-80">Скелет MVP: генерация базового приложения (аутентификация, БД, UI).</p>
              </div>
              <div className="crt-border p-4">
                <h4 className="text-lg mb-2 crt-text-glow">Неделя 3</h4>
                <p className="text-sm opacity-80">Интеграции: платежи, чат‑боты, API‑сервисы (без углубления в стек).</p>
              </div>
              <div className="crt-border p-4">
                <h4 className="text-lg mb-2 crt-text-glow">Неделя 4</h4>
                <p className="text-sm opacity-80">Шлифовка и деплой: оптимизация, публикация, сбор обратной связи.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="my-12">
          <h2 className="text-2xl crt-text-glow mb-6">$ cat ./что_ты_забираешь.txt</h2>
          <div className="crt-border p-6">
            <ul className="space-y-4">
              <li className="flex">
                <span className="mr-2">✓</span>
                <span>Рабочий прототип твоей идеи (код + деплой)</span>
              </li>
              <li className="flex">
                <span className="mr-2">✓</span>
                <span>Библиотеку промтов и чек‑листы: повторяй на новых проектах</span>
              </li>
              <li className="flex">
                <span className="mr-2">✓</span>
                <span>Закрытый чат единомышленников с быстрыми ответами на вопросы</span>
              </li>
              <li className="flex">
                <span className="mr-2">✓</span>
                <span>Записи всех стримов и обновления без доплат</span>
              </li>
            </ul>
          </div>
        </section>

        <section className="my-12">
          <h2 className="text-2xl crt-text-glow mb-6">$ ls ./тарифы</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="crt-border p-6">
              <h3 className="text-xl mb-4 crt-text-glow">Standard</h3>
              <p className="mb-6">Полный курс, чат, доступ 6 мес.</p>
              <p className="text-xl mb-2">≈ 3000 ₽ / 70 $</p>
            </div>
            <div className="crt-border p-6">
              <h3 className="text-xl mb-4 crt-text-glow">Pro</h3>
              <p className="mb-6">Всё из Standard + персональный разбор MVP (1 × 30 мин)</p>
              <p className="text-xl mb-2">≈ 15 000 ₽ / 190 $</p>
            </div>
          </div>
          <p className="text-sm mt-3 opacity-75">* Оплата картой / криптой. Возврат без вопросов в течение 14 дней после старта.</p>
        </section>

        <section className="my-12">
          <h2 className="text-2xl crt-text-glow mb-6">$ cat ./бонусы.txt</h2>
          <div className="crt-border p-6">
            <h3 className="font-bold mb-4">Бонусы при оплате до ‹дата старта›</h3>
            <ul className="space-y-3">
              <li className="flex">
                <span className="mr-2">+</span>
                <span>Шаблон «Идеальный промт для генерации UI» (PDF)</span>
              </li>
              <li className="flex">
                <span className="mr-2">+</span>
                <span>Скидка 20 % на следующий курс Hashslash</span>
              </li>
              <li className="flex">
                <span className="mr-2">+</span>
                <span>Чек‑лист «10 ошибок при работе с LLM и как их избежать»</span>
              </li>
            </ul>
          </div>
        </section>

        <section className="my-12">
          <h2 className="text-2xl crt-text-glow mb-6">$ cat ./faq.txt</h2>
          <div className="crt-border p-6">
            <div className="space-y-4">
              <div>
                <h3 className="font-bold">Нужен ли опыт в коде?</h3>
                <p>Нет, достаточно базового понимания веб‑приложений.</p>
              </div>
              <div>
                <h3 className="font-bold">Как проходят стримы?</h3>
                <p>YouTube Live + запись в личном кабинете.</p>
              </div>
              <div>
                <h3 className="font-bold">Если не успею вовремя?</h3>
                <p>Доступ к материалам остаётся 6 месяцев.</p>
              </div>
              <div>
                <h3 className="font-bold">Есть ли поддержка?</h3>
                <p>Да, чат отвечает в течение 24 часов.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="my-16 text-center">
          <h2 className="text-2xl crt-text-glow mb-6">Готов превратить идею в продукт?</h2>
          <p className="mb-6">Нажми «Записаться» и получи письмо‑инструкцию в течение 5 минут.</p>
          <a href="#" className="crt-border px-8 py-4 crt-text-glow hover:bg-gray-900 transition-colors text-lg">
            Записаться на курс
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

export default VibeCodingPage;
