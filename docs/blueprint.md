# **App Name**: VibeCoding AI

## Core Features:

- Content Rendering: Display course information, formats, and teacher bios in a CRT-style interface.
- Smooth Scrolling: Implement smooth scrolling navigation to different sections of the page.
- Newsletter Signup: Allow users to sign up for a newsletter to stay updated on course schedules and news.

## Style Guidelines:

- Primary color: Black (#000000) for background.
- Secondary color: Light gray (#E0E0E0) for text.
- Accent color: Teal (#008080) for interactive elements.
- Monospace font (IBM Plex Mono) for code-like readability.
- Pixel font (Press Start 2P) for display titles.
- Simple, outlined icons to maintain the retro aesthetic.
- Grid-based layout for structured content presentation.
- Subtle glow effects to simulate a CRT monitor.

## Original User Request:
у меня есть черновик сайта 
<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ВАЙБ КОДИНГ - Курсы Программирования на Основе ИИ</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;700&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap" rel="stylesheet">

    <style>
        /* Основные стили в стиле CRT монитора */
        body {
            background-color: #000000; /* Черный фон */
            color: #E0E0E0; /* Светло-серый текст (чуть темнее) */
            font-family: 'IBM Plex Mono', monospace; /* Чистый моноширинный шрифт */
            font-size: 0.9rem; /* Уменьшенный размер текста (было 1rem) */
            line-height: 1.6;
        }

        /* Эффект свечения для текста с легким фиолетово-синим оттенком */
        .crt-text-glow {
            color: #FFFFFF; /* Белый для яркости */
            /* Обновлен text-shadow с оттенком */
            text-shadow: 0 0 6px rgba(190, 190, 255, 0.6), /* Легкий фиолетово-синий ореол */
                         0 0 8px rgba(220, 220, 255, 0.4); /* Более светлый ореол */
        }

        /* Стили для рамок блоков с оттенком */
        .crt-border {
            border: 1px solid rgba(200, 200, 230, 0.5); /* Полупрозрачная рамка с оттенком */
            padding: 1.5rem; /* 24px */
             /* Обновлен box-shadow с оттенком */
            box-shadow: 0 0 8px rgba(190, 190, 255, 0.3) !important; /* Свечение рамки */
            transition: background-color 0.3s ease; /* Плавность при наведении */
        }
        .crt-border:hover {
            background-color: rgba(190, 190, 255, 0.05); /* Легкая подсветка при наведении */
        }

        /* Ссылки */
        a {
            color: #E0E0E0;
            text-decoration: underline;
            text-decoration-color: rgba(200, 200, 230, 0.5);
            transition: color 0.3s ease, text-decoration-color 0.3s ease;
        }
        a:hover {
            color: #FFFFFF;
            text-decoration-color: #FFFFFF;
            /* Добавляем свечение ссылке при наведении */
            text-shadow: 0 0 6px rgba(190, 190, 255, 0.6);
        }

        /* Убираем все скругления */
        * {
            border-radius: 0 !important;
        }
         /* Убираем лишние тени от Tailwind */
        * {
             box-shadow: none !important; /* Сначала убираем все тени */
        }
        /* Переопределяем box-shadow только для .crt-border */
        .crt-border {
             /* Используем !important здесь, чтобы переопределить Tailwind */
             box-shadow: 0 0 8px rgba(190, 190, 255, 0.3) !important;
        }


        /* Заголовки */
         h1, h2, h3 {
             font-weight: 700; /* Делаем заголовки жирнее */
             margin-bottom: 1rem;
             margin-top: 0; /* Убираем верхний отступ по умолчанию */
             color: #FFFFFF; /* Белый цвет для заголовков */
         }
         /* Размеры заголовков немного уменьшены пропорционально основному тексту */
         h1 { font-size: 1.35rem; }
         h2 { font-size: 1.15rem; }
         h3 { font-size: 1.0rem; }

        /* Стиль для акцентного заголовка (если нужен) */
        .pixel-font-display {
             font-family: 'Press Start 2P', cursive;
             font-size: 1.8rem; /* Уменьшен */
             line-height: 1.2;
             margin-bottom: 1.5rem;
        }

        /* Навигация */
        header nav a {
            text-decoration: none;
            margin-left: 1.5rem; /* Отступ между ссылками */
            font-size: 0.8rem; /* Уменьшен */
        }
        header nav a:hover {
            text-decoration: underline;
        }

        /* Стилизация списков */
        ul {
            list-style: none;
            padding-left: 0;
        }
        ul li {
            text-transform: none; /* Гарантирует отсутствие принудительного регистра */
        }
        ul li::before {
            content: "» "; /* Маркер списка */
            color: rgba(200, 200, 230, 0.6); /* Оттенок маркера */
            margin-right: 0.5rem;
        }

    </style>
</head>
<body class="antialiased p-4 md:p-8">

    <header class="flex justify-between items-center mb-8 md:mb-12">
        <div class="text-base font-bold crt-text-glow">
            ВАЙБ КОДИНГ <span class="text-xs opacity-75">AI</span>
        </div>
        <nav>
            <a href="#about">о_курсе</a>
            <a href="#program">программа</a>
            <a href="#contact">контакты</a>
            </nav>
    </header>

    <main>
        <div class="mb-8 md:mb-12 crt-text-glow max-w-3xl text-sm md:text-base">
            <p>
                Вайб Кодинг — это экспериментальная школа, где технология используется для критического мышления и эстетических исследований. Мы поддерживаем междисциплинарное изучение искусства, кода, железа и критической теории. Это место для обучения и разучивания.
            </p>
             <p class="mt-2"><a href="#about">узнайте больше о нас здесь</a>.</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">

            <div id="about" class="crt-border">
                <h2 class="crt-text-glow">обучаем:</h2>
                <ul>
                    {/* Текст в списке начинается со строчной буквы */}
                    <li>генерации изображений и текстов</li>
                    <li>нейронным сетям и алгоритмам</li>
                    <li>творческому кодингу</li>
                    <li>интерактивным инсталляциям</li>
                </ul>
            </div>

            <div id="formats" class="crt-border">
                 <h2 class="crt-text-glow">форматы:</h2>
                 {/* Текст начинается со строчной буквы */}
                 <p>a) курсы</p>
                 <p>b) воркшопы</p>
                 <p>c) чтение (материалы)</p>
                 <p>d) код-песочница</p>
            </div>

            <div id="why-us" class="crt-border">
                 <h2 class="crt-text-glow">почему мы:</h2>
                 <ul>
                      {/* Текст в списке начинается со строчной буквы */}
                     <li>современные модели ИИ</li>
                     <li>проекты на практике</li>
                     <li>комьюнити и малые группы</li>
                     <li>сертификаты по специализациям</li>
                     <li>интересные и полные проекты</li>
                 </ul>
            </div>

            <div id="program" class="crt-border">
                <h2 class="crt-text-glow">программа:</h2>
                <p>Подробная программа скоро появится.</p>
                <p class="text-xs opacity-75 mt-2">// Ожидаемые темы: Python, Основы ИИ, Генеративное искусство, Интерактивные системы.</p>
                 <p class="mt-4"><a href="#contact">узнать подробнее »</a></p>
                 <p class="mt-2"><a href="#">расписание (скоро) »</a></p>
            </div>

            <div id="teachers" class="crt-border">
                 <h2 class="crt-text-glow">преподаватели:</h2>
                 <div>
                     {/* Имена оставлены с заглавной для читаемости */}
                     <h3 class="text-sm font-bold">ИМЯ ФАМИЛИЯ 1</h3>
                     <p class="text-xs opacity-75">// Эксперт по генеративному ИИ</p>
                 </div>
                  <div class="mt-3">
                     <h3 class="text-sm font-bold">ИМЯ ФАМИЛИЯ 2</h3>
                     <p class="text-xs opacity-75">// Специалист по интерактивным системам</p>
                 </div>
                  <div class="mt-3">
                     <h3 class="text-sm font-bold">ИМЯ ФАМИЛИЯ 3</h3>
                     <p class="text-xs opacity-75">// Мастер креативного кодинга</p>
                 </div>
            </div>

             <div id="contact" class="crt-border">
                <h2 class="crt-text-glow">контакты:</h2>
                <p>EMAIL: <a href="mailto:info@vibecoding.ai">info@vibecoding.ai</a></p>
                <p>TEL: <a href="tel:+70001234567">+7(000)123-45-67</a></p>
                <p>LOCATION: Онлайн / Город</p>
                 <p class="mt-4"><a href="#">подписаться на новости »</a></p>
            </div>

        </div>
    </main>

    <footer class="mt-12 pt-4 border-t border-gray-700 text-center text-xs opacity-50">
        <p>&copy; 2025 ВАЙБ КОДИНГ.</p>
        <p class="mt-1">// вы находитесь в режиме ЭЛТ, переключиться в режим ЖК?</p>
    </footer>

    <script>
        // Плавная прокрутка
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const targetId = this.getAttribute('href');
                // Проверяем, существует ли элемент, прежде чем пытаться прокрутить
                try {
                    const targetElement = document.querySelector(targetId);
                    if (targetElement) {
                         // Можно добавить небольшой отступ сверху
                         const offsetTop = targetElement.offsetTop - 30; // 30px отступ
                         window.scrollTo({
                             top: offsetTop,
                             behavior: 'smooth'
                         });
                    } else {
                        console.warn(`Элемент с ID "${targetId}" не найден.`);
                    }
                } catch (error) {
                     // Перехватываем возможные ошибки в селекторе
                     console.error(`Ошибка при поиске элемента для "${targetId}":`, error);
                }
            });
        });
    </script>

</body>
</html>
 

помоги из этого сделать мне сайт моей школы hashslash
  