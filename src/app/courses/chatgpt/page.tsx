'use client';

import React from 'react';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import Section from '../../../components/Section';

const ChatGptCoursePage = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-3xl md:text-4xl font-mono mb-6">
            ChatGPT: основы работы
          </h1>
          <p className="text-lg max-w-3xl mx-auto mb-12 text-gray-600">
            Освойте самый популярный AI-ассистент для решения повседневных и рабочих задач.
          </p>
        </div>

        <Section title="О курсе">
          <div className="border border-gray-200 p-6">
            <p className="mb-4 text-gray-600">
              Этот курс предназначен для тех, кто хочет быстро и эффективно научиться использовать ChatGPT. Вы узнаете, как правильно формулировать запросы, получать нужную информацию, генерировать текст, код и многое другое.
            </p>
            <p className="mb-4 text-gray-600">
              Мы разберем практические кейсы применения ChatGPT в работе, учебе и личной жизни. По окончании курса вы сможете уверенно использовать ChatGPT для повышения своей продуктивности.
            </p>
            <div className="text-xs text-gray-500 mt-4">
              <div>Продолжительность: 1 неделя</div>
              <div>Формат: Видеоуроки, практические упражнения, доступ к базе знаний</div>
              <div>Стоимость: 35$</div>
            </div>
          </div>
        </Section>
        <Section title="Программа и темы">
          <div className="border border-gray-200 p-6">
            <ul className="list-disc list-inside text-gray-600">
              <li>Знакомство с ChatGPT: интерфейс и базовые возможности.</li>
              <li>Искусство промптинга: как задавать вопросы, чтобы получать точные ответы.</li>
              <li>Генерация текста: статьи, письма, посты для соцсетей.</li>
              <li>ChatGPT для программистов: генерация и отладка кода, объяснение алгоритмов.</li>
              <li>Использование ChatGPT для обучения и исследований.</li>
              <li>Креативное применение: идеи, сценарии, стихи.</li>
              <li>Ограничения и этические аспекты использования AI.</li>
            </ul>
          </div>
        </Section>

        <Section title="Готовы стать мастером ChatGPT?">
          <div className="text-center">
            <a href="#" className="border border-gray-200 px-8 py-4 rounded hover:bg-gray-50 transition-colors text-lg font-semibold">
              Записаться на курс «ChatGPT: основы работы»
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

export default ChatGptCoursePage;
