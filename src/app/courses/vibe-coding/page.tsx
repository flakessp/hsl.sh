'use client';

import React from 'react';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import Section from '../../../components/Section';
import coursesData from '../../../data/coursesData.json'; // Import the JSON data

const VibeCodingPage = () => {
  const courseContent = coursesData.vibeCoding; // Access the Vibe Coding course content

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

        <Section title={courseContent.forWhom.title}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 border border-gray-200 p-6">
            {courseContent.forWhom.columns.map((column, colIndex) => (
              <div key={colIndex}>
                <h3 className="font-bold mb-3">{column.title}</h3>
                <ul className="space-y-3 text-gray-600">
                  {column.items.map((item, itemIndex) => (
                    <li key={itemIndex}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Section>
        
        <Section title={courseContent.formatAndProgram.title}>
          <div className="border border-gray-200 p-6 mb-6">
            {courseContent.formatAndProgram.summary.map((paragraph, index) => (
              <p key={index} className="mb-2 text-gray-600" dangerouslySetInnerHTML={{ __html: paragraph }} />
            ))}
          </div>
          <h3 className="font-bold mb-3">{courseContent.formatAndProgram.weeklyBreakdownTitle}</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
            {courseContent.formatAndProgram.weeks.map((week, index) => (
              <div key={index} className="border border-gray-200 p-4">
                <h4 className="text-lg mb-2">{week.week}</h4>
                <p className="text-sm text-gray-600">{week.description}</p>
              </div>
            ))}
          </div>
        </Section>

        <Section title={courseContent.takeaways.title}>
          <div className="border border-gray-200 p-6">
            <ul className="space-y-4 text-gray-600">
              {courseContent.takeaways.items.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        </Section>

        <Section title={courseContent.tariffs.title}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {courseContent.tariffs.options.map((option, index) => (
              <div key={index} className="border border-gray-200 p-6">
                <h3 className="text-xl mb-4">{option.name}</h3>
                <p className="mb-6 text-gray-600">{option.description}</p>
                <p className="text-xl mb-2">{option.price}</p>
              </div>
            ))}
          </div>
          <p className="text-sm mt-3 text-gray-500">{courseContent.tariffs.note}</p>
        </Section>

        <Section title={courseContent.bonuses.title}>
          <div className="border border-gray-200 p-6">
            <ul className="space-y-3 text-gray-600">
              {courseContent.bonuses.items.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        </Section>

        <Section title={courseContent.faq.title}>
          <div className="border border-gray-200 p-6">
            <div className="space-y-4 text-gray-600">
              {courseContent.faq.questions.map((faqItem, index) => (
                <div key={index}>
                  <h3 className="font-bold">{faqItem.q}</h3>
                  <p>{faqItem.a}</p>
                </div>
              ))}
            </div>
          </div>
        </Section>

        <Section title={courseContent.cta.title}>
          <div className="text-center">
            <p className="mb-6 text-gray-600">{courseContent.cta.subtitle}</p>
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

export default VibeCodingPage;
