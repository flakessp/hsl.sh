'use client';

import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
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
        <div className="mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl mx-auto">
            <CourseCard
              title="Вайб-кодинг: от идеи до запуска"
              description="4 недели практических занятий"
              details={[]}
              href="/courses/vibe-coding"
            />
            <CourseCard
              title="ChatGPT: основы работы"
              description="Быстрый старт для начинающих"
              details={[]}
              href="/courses/chatgpt"
            />
          </div>
        </div>
      
      <Section id="courses" title="Наши курсы">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <CourseCard
            title="Вайб-кодинг: от идеи до запуска"
            description="4 недели, 20 уроков"
            details={["Онлайн-трансляции, практические задания и поддержка кураторов", "Генерация кода и запуск MVP с помощью AI", "Стоимость: от 70$ (базовый), 190$ (PRO)"]}
            href="/courses/vibe-coding"
          />
          <CourseCard
            title="ChatGPT: основы работы"
            description="1 неделя, 5 уроков"
            details={["Эффективные промты, практическое применение GPT", "Видеоуроки и удобные чек-листы", "Стоимость: 35$"]}
            href="/courses/chatgpt"
          />
        </div>
      </Section>
      
      <Section id="about" title="О проекте" className="pt-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="border border-gray-200 p-6">
            <h3 className="font-bold">Практическая направленность</h3>
            <p className="my-4 text-gray-600">Только реальные задачи и полезные проекты. Без теории ради теории. Запускайте MVP в реальных условиях.</p>
          </div>
          <div className="border border-gray-200 p-6">
            <h3 className="font-bold">Активное сообщество</h3>
            <p className="my-4 text-gray-600">Telegram-чат, живое общение и помощь в реальном времени. Вместе мы сильнее.</p>
          </div>
          <div className="border border-gray-200 p-6">
            <h3 className="font-bold">Открытость знаний</h3>
            <p className="my-4 text-gray-600">Бесплатные материалы и открытые ресурсы на GitHub. Делимся знаниями и опытом со всеми.</p>
          </div>
        </div>
      </Section>
      
      {/* Testimonials Section */}
      <section className="my-16">
        <h2 className="crt-text-glow mb-8">$ grep feedback ./user-reviews</h2>
          
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="crt-border">
            <p className="mb-4">«Научился создавать прототипы за часы вместо дней. AI полностью изменил мой подход к разработке»</p>
            <p>— Алексей К.</p>
          </div>
              
          <div className="crt-border">
            <p className="mb-4">«Наконец-то смогла перевести свои дизайн-идеи в рабочий код без посредников. Это магия!»</p>
            <p>— Мария Д.</p>
          </div>
              
          <div className="crt-border">
            <p className="mb-4">«Запустил MVP менее чем за неделю. Сообщество и поддержка неоценимы»</p>
            <p>— Павел М.</p>
          </div>
        </div>
            
        <div className="mt-12 crt-border p-6">
          <pre className="crt-text-glow text-xs">
{`Статистика:
- Студентов: 1 000+
- Завершаемость курсов: 80%
- Рейтинг: 4.9/5`}
          </pre>
        </div>
      </section>
      
      {/* Blog Section */}
      <section id="blog" className="my-16">
        <h2 className="crt-text-glow mb-8">$ ls ./resources</h2>
          
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="crt-border">
            <h3 className="crt-text-glow">Основы промт-инжиниринга</h3>
            <p className="my-4">Как эффективно общаться с AI, чтобы получить качественный рабочий код</p>
            <a href="/blog/prompt-engineering" className="crt-text-glow">» Читать статью</a>
          </div>
            
          <div className="crt-border">
            <h3 className="crt-text-glow">5 инструментов для AI в 2025</h3>
            <p className="my-4">Обзор самых полезных помощников для генеративного кодинга</p>
            <a href="/blog/ai-dev-tools" className="crt-text-glow">» Читать статью</a>
          </div>
            
          <div className="crt-border">
            <h3 className="crt-text-glow">От идеи до MVP за 48 часов</h3>
            <p className="my-4">Реальный кейс создания проекта с нуля при помощи AI</p>
            <a href="/blog/mvp-48-hours" className="crt-text-glow">» Читать статью</a>
          </div>
        </div>
          
        <div className="text-center mt-8">
          <a href="/blog" className="crt-text-glow">» Все статьи</a>
        </div>
      </section>
      
      {/* Newsletter Section */}
      <section id="community" className="my-16 pt-8">
        <h2 className="mb-8 text-xl font-bold">Сообщество</h2>
          
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="border border-gray-200 p-6">
            <h3 className="font-bold">Telegram</h3>
            <p className="my-4 text-gray-600">Присоединяйтесь к нашему сообществу в Telegram. Обсуждайте курсы, делитесь опытом, находите единомышленников.</p>
            <a href="https://t.me/hashslash_community" className="text-gray-700 hover:text-black">Вступить в чат →</a>
          </div>
            
          <div className="border border-gray-200 p-6">
            <h3 className="font-bold">GitHub</h3>
            <p className="my-4 text-gray-600">Доступ к открытым материалам, исходному коду примеров и шаблонам для создания собственных проектов.</p>
            <a href="https://github.com/hashslash-academy" className="text-gray-700 hover:text-black">Открыть репозиторий →</a>
          </div>
        </div>
      </section>
      
      <section className="my-16 pt-8">
        <h2 className="mb-8 text-xl font-bold">Присоединяйтесь к нам</h2>
          
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-lg mb-8 text-gray-600">Присоединяйтесь к нашему сообществу прямо сейчас и начните создавать потрясающие проекты с помощью ИИ.</p>
            
          <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-6">
            <a href="https://t.me/hashslash_community" className="border border-gray-200 px-8 py-4 text-center hover:bg-gray-50 transition-all">
              Telegram-чат
            </a>
              
            <a href="/courses/vibe-coding" className="border border-gray-200 px-8 py-4 text-center hover:bg-gray-50 transition-all">
              Записаться на курс
            </a>
          </div>
        </div>
      </section>
      
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
              <li><a href="https://t.me/hashslash_community" className="text-gray-600 hover:text-black">Telegram</a></li>
              <li><a href="mailto:hello@hsl.sh" className="text-gray-600 hover:text-black">hello@hsl.sh</a></li>
            </ul>
          </div>
        </div>
          
        <div className="mt-8 pt-8 border-t border-gray-200 text-sm text-gray-500 text-center">
          &copy; 2023-2024 HashSlash. Все права защищены.
        </div>
      </footer>
    </main>
  </div>
  );
}
