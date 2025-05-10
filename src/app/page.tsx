'use client';

import React from 'react';
import Header from '../components/Header';
import Section from '../components/Section';
import CourseCard from '../components/CourseCard';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />

      <main className="pt-20 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-3xl md:text-4xl font-mono mb-6">
            Создавайте сайты и приложения за минуты с помощью ИИ
          </h1>
          <p className="text-lg max-w-3xl mx-auto mb-12 text-gray-600">
            Школа цифровых ремёсел для дизайнеров, предпринимателей и начинающих разработчиков, которые хотят запускать проекты с помощью AI-инструментов
          </p>
        </div>
        <section className="mb-20">
          <h2 className="mb-8 text-xl font-bold">Ближайшие программы</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="border border-gray-200 p-6">
              <h3 className="font-bold">Вайб-кодинг: от идеи до MVP</h3>
              <p className="my-4 text-gray-600">4 недели • 14 live-сессий • поддержка менторов</p>
              <p className="my-2 text-gray-600">– Генерируем код с LLM</p>
              <p className="my-2 text-gray-600">– Старт 14 мая</p>
              <a href="/courses/vibe-coding" className="text-gray-700 hover:text-black">Узнать программу →</a>
            </div>
            <div className="border border-gray-200 p-6">
              <h3 className="font-bold">ChatGPT для новичков</h3>
              <p className="my-4 text-gray-600">1 неделя • 6 занятий • практика промтов</p>
              <a href="/courses/chatgpt" className="text-gray-700 hover:text-black">Смотреть детали →</a>
            </div>
          </div>
        </section>
      

      <Section id="about" title="Почему вам зайдёт HashSlash" className="pt-8">
        <div className="space-y-4">
          <p className="text-gray-700">• <strong>Практика, а не теория.</strong> 80 % времени — код и тесты, 20 % — разбор ошибок.</p>
          <p className="text-gray-700">• <strong>MVP за недели.</strong> Методика вайб-кодинга позволяет собрать прототип уже на 1-й неделе.</p>
          <p className="text-gray-700">• <strong>Менторы онлайн 24/7.</strong> Ответы в чате в среднем за 15 минут.</p>
          <p className="text-gray-700">• <strong>Комьюнити на долгосрок.</strong></p>
        </div>
      </Section>
      
      
      
      {/* Newsletter Section */}
      <section id="community" className="my-16 pt-8">
        <h2 className="mb-8 text-xl font-bold">Сообщество</h2>
          
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="border border-gray-200 p-6">
            <h3 className="font-bold">Telegram</h3>
            <p className="my-4 text-gray-600">Присоединяйтесь к нашему сообществу в Telegram. Обсуждайте курсы, делитесь опытом, находите единомышленников.</p>
            <a href="https://t.me/hashslash_chat" className="text-gray-700 hover:text-black">Вступить в чат →</a>
          </div>
            
          <div className="border border-gray-200 p-6">
            <h3 className="font-bold">GitHub</h3>
            <p className="my-4 text-gray-600">Доступ к открытым материалам, исходному коду примеров и шаблонам для создания собственных проектов.</p>
            <a href="https://github.com/hashslash-academy" className="text-gray-700 hover:text-black">Открыть репозиторий →</a>
          </div>
        </div>
      </section>
      
      {/* Link block removed */}
      
      <footer className="pt-8 pb-16 border-t border-gray-200">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4">#хешслеш</h3>
            <p className="mb-4 text-gray-600">Современная школа цифровых ремёсел, которая учит создавать и запускать проекты с помощью искусственного интеллекта.</p>
          </div>
            
          <div>
            <h3 className="font-bold mb-4">Ссылки</h3>
            <ul className="space-y-2">
              <li><a href="#courses" className="text-gray-600 hover:text-black">Курсы</a></li>
              <li><a href="#community" className="text-gray-600 hover:text-black">Сообщество</a></li>
              <li><a href="#about" className="text-gray-600 hover:text-black">О проекте</a></li>
            </ul>
          </div>
            
          <div>
            <h3 className="font-bold mb-4">Контакты</h3>
            <ul className="space-y-2">
              <li><a href="https://t.me/hashslash_chat" className="text-gray-600 hover:text-black">Telegram</a></li>
              <li><a href="mailto:hello@hsl.sh" className="text-gray-600 hover:text-black">hello@hsl.sh</a></li>
            </ul>
          </div>
        </div>
          
        <div className="mt-8 pt-8 border-t border-gray-200 text-sm text-gray-500 text-center">
          &copy; 2025 HashSlash
        </div>
      </footer>
    </main>
  </div>
  );
}
