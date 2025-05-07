import React from 'react';

interface CourseCardProps {
  title: string;
  description: string;
  details: string[];
  href: string;
}

export default function CourseCard({ title, description, details, href }: CourseCardProps) {
  return (
    <a href={href} className="border border-gray-200 p-6 hover:bg-gray-50 transition-all block">
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <div className="text-sm text-gray-500 mb-2">{description}</div>
      <ul className="text-sm text-gray-600 mb-3 space-y-1">
        {details.map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </ul>
      <span className="text-gray-700 hover:text-black font-semibold">Подробнее о курсе →</span>
    </a>
  );
}
