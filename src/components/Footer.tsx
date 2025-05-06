import React from 'react';

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-gray-200 pt-8 pb-6 text-gray-500">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="mb-6 md:mb-0 text-center md:text-left">
          <div className="text-xl font-mono mb-2">
            <span className="mr-1">#</span>
            <span>хешслеш</span>
          </div>
          <div className="text-sm">Школа цифровых ремёсел для создания проектов с помощью AI-инструментов</div>
        </div>
        <div className="flex flex-col md:flex-row items-center gap-6 text-sm">
          <a href="/privacy" className="hover:text-black">Политика конфиденциальности</a>
          <a href="/terms" className="hover:text-black">Условия использования</a>
        </div>
      </div>
      <div className="text-xs text-center opacity-60 mt-6">&copy; {new Date().getFullYear()} HashSlash. Все права защищены.</div>
    </footer>
  );
}
