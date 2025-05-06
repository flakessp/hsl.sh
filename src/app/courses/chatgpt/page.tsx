'use client';

import React from 'react';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import Section from '../../../components/Section';
import coursesData from '../../../data/coursesData.json'; // Import the JSON data

const ChatGptCoursePage = () => {
  const courseContent = coursesData.chatgpt; // Access the ChatGPT course content

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-3xl md:text-4xl font-mono mb-6">
            {courseContent.hero.title}
          </h1>
          <p className="text-lg max-w-3xl mx-auto mb-12 text-gray-600">
            {courseContent.hero.subtitle}
          </p>
        </div>

        <Section title={courseContent.about.title}>
          <div className="border border-gray-200 p-6">
            {courseContent.about.description.map((paragraph, index) => (
              <p key={index} className="mb-4 text-gray-600" dangerouslySetInnerHTML={{ __html: paragraph }} />
            ))}
            <div className="text-xs text-gray-500 mt-4">
              <div>Продолжительность: {courseContent.about.details.duration}</div>
              <div>Формат: {courseContent.about.details.format}</div>
              <div>Стоимость: {courseContent.about.details.price}</div>
            </div>
          </div>
        </Section>
        <Section title={courseContent.program.title}>
          <div className="border border-gray-200 p-6">
            <ul className="list-disc list-inside text-gray-600">
              {courseContent.program.items.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        </Section>

        <Section title={courseContent.cta.title}>
          <div className="text-center">
            <a href={courseContent.cta.link} className="border border-gray-200 px-8 py-4 rounded hover:bg-gray-50 transition-colors text-lg font-semibold">
              {courseContent.cta.buttonText}
            </a>
          </div>
        </Section>
        <div className="text-center my-12">
          <a href={courseContent.backLink.link} className="text-gray-700 hover:text-black">
            {courseContent.backLink.text}
          </a>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ChatGptCoursePage;
