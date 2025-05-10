import React from 'react';

interface CourseCardProps {
  title: string;
  description: string;
  details: string[];
  href: string;
  buttonText?: string;
}

export default function CourseCard({ title, description, details, href, buttonText = 'Подробнее о курсе →' }: CourseCardProps) {
  return (
    <a href={href} className="border border-gray-200 p-6 hover:bg-gray-50 transition-all block">
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <div className="text-sm text-gray-500 mb-2">{description}</div>
      <ul className="text-sm text-gray-600 mb-3 space-y-1">
        {details.map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </ul>
      {buttonText.includes('Button') ? (
        <div className="inline-block px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-800 font-semibold rounded transition-colors">
          {buttonText.replace('<Button>', '').replace('</Button>', '')}
        </div>
      ) : (
        <span className="text-gray-700 hover:text-black font-semibold">{buttonText}</span>
      )}
    </a>
  );
}
