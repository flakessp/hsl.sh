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

        <Section title="Для кого курс">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 border border-gray-200 p-6">
            <div>
              <h3 className="font-bold mb-3">Кому подходит</h3>
              <ul className="space-y-3 text-gray-600">
                <li>Предпринимателям</li>
                <li>Дизайнерам</li>
                <li>Новичкам в программировании</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-3">Что получишь</h3>
              <ul className="space-y-3 text-gray-600">
                <li>Быстрый запуск продукта без отдела разработки</li>
                <li>Перевод макетов в работающий фронт за часы, а не недели</li>
                <li>Пошаговый ввод без «сухого» синтаксиса</li>
              </ul>
            </div>
          </div>
        </Section>
        
        <Section title="Формат и программа">
          <div className="border border-gray-200 p-6 mb-6">
            <p className="mb-2 text-gray-600"><b>Длительность:</b> 4 недели / 20 коротких уроков + 4 живых стрима‑разбора</p>
            <p className="text-gray-600"><b>Формат:</b> видео + практические задания + поддержка в закрытом Telegram‑чате</p>
          </div>
          <h3 className="font-bold mb-3">Что внутри:</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
            <div className="border border-gray-200 p-4">
              <h4 className="text-lg mb-2">Неделя 1</h4>
              <p className="text-sm text-gray-600">Основы вайбкодинга: как «разговаривать» с ИИ, чтобы он писал код.</p>
            </div>
            <div className="border border-gray-200 p-4">
              <h4 className="text-lg mb-2">Неделя 2</h4>
              <p className="text-sm text-gray-600">Скелет MVP: генерация базового приложения (аутентификация, БД, UI).</p>
            </div>
            <div className="border border-gray-200 p-4">
              <h4 className="text-lg mb-2">Неделя 3</h4>
              <p className="text-sm text-gray-600">Интеграции: платежи, чат‑боты, API‑сервисы (без углубления в стек).</p>
            </div>
            <div className="border border-gray-200 p-4">
              <h4 className="text-lg mb-2">Неделя 4</h4>
              <p className="text-sm text-gray-600">Шлифовка и деплой: оптимизация, публикация, сбор обратной связи.</p>
            </div>
          </div>
        </Section>

        <Section title="Что ты забираешь после курса">
          <div className="border border-gray-200 p-6">
            <ul className="space-y-4 text-gray-600">
              <li>Рабочий прототип твоей идеи (код + деплой)</li>
              <li>Библиотеку промтов и чек‑листы: повторяй на новых проектах</li>
              <li>Закрытый чат единомышленников с быстрыми ответами на вопросы</li>
              <li>Записи всех стримов и обновления без доплат</li>
            </ul>
          </div>
        </Section>

        <Section title="Тарифы">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border border-gray-200 p-6">
              <h3 className="text-xl mb-4">Standard</h3>
              <p className="mb-6 text-gray-600">Полный курс, чат, доступ 6 мес.</p>
              <p className="text-xl mb-2">≈ 3000 ₽ / 70 $</p>
            </div>
            <div className="border border-gray-200 p-6">
              <h3 className="text-xl mb-4">Pro</h3>
              <p className="mb-6 text-gray-600">Всё из Standard + персональный разбор MVP (1 × 30 мин)</p>
              <p className="text-xl mb-2">≈ 15 000 ₽ / 190 $</p>
            </div>
          </div>
          <p className="text-sm mt-3 text-gray-500">* Оплата картой / криптой. Возврат без вопросов в течение 14 дней после старта.</p>
        </Section>

        <Section title="Бонусы при оплате до ‹дата старта›">
          <div className="border border-gray-200 p-6">
            <ul className="space-y-3 text-gray-600">
              <li>Шаблон «Идеальный промт для генерации UI» (PDF)</li>
              <li>Скидка 20 % на следующий курс Hashslash</li>
              <li>Чек‑лист «10 ошибок при работе с LLM и как их избежать»</li>
            </ul>
          </div>
        </Section>

        <Section title="Часто задаваемые вопросы">
          <div className="border border-gray-200 p-6">
            <div className="space-y-4 text-gray-600">
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
        </Section>

        <Section title="Готов превратить идею в продукт?">
          <div className="text-center">
            <p className="mb-6 text-gray-600">Нажми «Записаться» и получи письмо‑инструкцию в течение 5 минут.</p>
            <a href="#" className="border border-gray-200 px-8 py-4 rounded hover:bg-gray-50 transition-colors text-lg font-semibold">
              Записаться на курс
            </a>
          </div>
        </Section>

        <div className="text-center my-12">
          <a href="/" className="text-gray-700 hover:text-black">&lt;&lt; Вернуться на главную</a>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default VibeCodingPage;
