import React from 'react';

interface SectionProps {
  id?: string;
  title: string;
  children: React.ReactNode;
  className?: string;
}

export default function Section({ id, title, children, className = '' }: SectionProps) {
  return (
    <section id={id} className={`my-16 ${className}`}>
      <h2 className="mb-8 text-xl font-bold">{title}</h2>
      {children}
    </section>
  );
}
