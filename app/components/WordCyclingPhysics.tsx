'use client';

import { useState, useEffect, useRef, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Matter from 'matter-js';

const wordPairs = [
  ["Сайты", "Продукты"],
  ["Телеграм боты", "Приложения"],
  ["Искусство", "Инсталляции"],
  ["Образовательные программы", "Воркшопы"],
  ["Концепции", "Прототипы"],
  ["Дизайн", "Код"]
];

const fontClasses = [
  'font-playfair',
  'font-roboto-slab',
  'font-merriweather',
  'font-lora',
  'font-crimson',
  'font-source-serif',
  'font-pt-serif',
  'font-libre-baskerville',
  'font-eb-garamond',
  'font-cormorant-garamond'
];

const getRandomFont = () => {
  return fontClasses[Math.floor(Math.random() * fontClasses.length)];
};

interface FallingWord {
  domElement: HTMLDivElement;
  physicsBody: Matter.Body;
}

export default function WordCyclingPhysics() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sceneRef = useRef<HTMLDivElement>(null);
  const engineRef = useRef<Matter.Engine | null>(null);
  const runnerRef = useRef<Matter.Runner | null>(null);
  const fallingWordsRef = useRef<FallingWord[]>([]);
  const animationFrameRef = useRef<number | null>(null);
  const selectedBodyRef = useRef<Matter.Body | null>(null);
  const mousePositionsRef = useRef<{ x: number; y: number; time: number }[]>([]);
  
  // Generate random fonts for each word in the current pair
  const randomFonts = useMemo(() => {
    const font1 = getRandomFont();
    let font2 = getRandomFont();
    // Ensure the fonts are different
    while (font2 === font1) {
      font2 = getRandomFont();
    }
    return {
      word1: font1,
      word2: font2
    };
  }, [currentIndex]);

  const word1Ref = useRef<HTMLSpanElement>(null);
  const andRef = useRef<HTMLSpanElement>(null);
  const word2Ref = useRef<HTMLSpanElement>(null);

  const dropWord = (text: string, originalElement: HTMLElement | null) => {
    if (!sceneRef.current || !engineRef.current || !originalElement) return;

    const rect = originalElement.getBoundingClientRect();
    const initialX = rect.left + rect.width / 2;
    const initialY = rect.top + rect.height / 2;

    const wordDiv = document.createElement('div');
    wordDiv.textContent = text;
    const randomFont = getRandomFont();
    wordDiv.className = `falling-text absolute text-xl md:text-3xl text-white p-1 select-none whitespace-nowrap will-change-transform ${randomFont}`;
    sceneRef.current.appendChild(wordDiv);

    const wordWidth = wordDiv.offsetWidth;
    const wordHeight = wordDiv.offsetHeight;

    const physicsBody = Matter.Bodies.rectangle(
      initialX,
      initialY,
      wordWidth,
      wordHeight,
      {
        restitution: 0.5,
        friction: 0.1,
        frictionAir: 0.01,
        angle: (Math.random() - 0.5) * 0.2
      }
    );

    Matter.Composite.add(engineRef.current.world, physicsBody);

    const fallingWord: FallingWord = { domElement: wordDiv, physicsBody };
    fallingWordsRef.current.push(fallingWord);

    setTimeout(() => {
      const index = fallingWordsRef.current.indexOf(fallingWord);
      if (index > -1) {
        fallingWordsRef.current.splice(index, 1);
        Matter.Composite.remove(engineRef.current!.world, physicsBody);
        wordDiv.remove();
      }
    }, 30000);
  };

  const syncDOMWithPhysics = () => {
    fallingWordsRef.current.forEach(({ domElement, physicsBody }) => {
      const { x, y } = physicsBody.position;
      const angle = physicsBody.angle;
      domElement.style.transform = `translate(${x - domElement.offsetWidth / 2}px, ${y - domElement.offsetHeight / 2}px) rotate(${angle}rad)`;
    });
    animationFrameRef.current = requestAnimationFrame(syncDOMWithPhysics);
  };

  const handleInteractionStart = (e: MouseEvent | TouchEvent) => {
    if (!engineRef.current || !sceneRef.current) return;

    e.preventDefault();
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;

    const bodies = Matter.Composite.allBodies(engineRef.current.world);
    const foundBodies = Matter.Query.point(bodies, { x: clientX, y: clientY });

    if (foundBodies.length > 0 && !foundBodies[0].isStatic) {
      selectedBodyRef.current = foundBodies[0];
      Matter.Body.setStatic(selectedBodyRef.current, true);
      mousePositionsRef.current = [{ x: clientX, y: clientY, time: Date.now() }];

      const handleMove = (e: MouseEvent | TouchEvent) => {
        if (!selectedBodyRef.current) return;
        e.preventDefault();

        const moveX = 'touches' in e ? e.touches[0].clientX : e.clientX;
        const moveY = 'touches' in e ? e.touches[0].clientY : e.clientY;

        Matter.Body.setPosition(selectedBodyRef.current, { x: moveX, y: moveY });

        mousePositionsRef.current.push({ x: moveX, y: moveY, time: Date.now() });
        if (mousePositionsRef.current.length > 5) {
          mousePositionsRef.current.shift();
        }
      };

      const handleEnd = () => {
        if (!selectedBodyRef.current) return;

        Matter.Body.setStatic(selectedBodyRef.current, false);

        if (mousePositionsRef.current.length >= 2) {
          const recent = mousePositionsRef.current[mousePositionsRef.current.length - 1];
          const previous = mousePositionsRef.current[0];
          const dt = recent.time - previous.time;

          if (dt > 0) {
            const vx = Math.min(Math.max((recent.x - previous.x) / dt * 10, -15), 15);
            const vy = Math.min(Math.max((recent.y - previous.y) / dt * 10, -15), 15);
            Matter.Body.setVelocity(selectedBodyRef.current, { x: vx, y: vy });
            Matter.Body.setAngularVelocity(selectedBodyRef.current, (Math.random() - 0.5) * 0.1);
          }
        }

        selectedBodyRef.current = null;
        document.removeEventListener('mousemove', handleMove);
        document.removeEventListener('mouseup', handleEnd);
        document.removeEventListener('touchmove', handleMove);
        document.removeEventListener('touchend', handleEnd);
      };

      document.addEventListener('mousemove', handleMove);
      document.addEventListener('mouseup', handleEnd);
      document.addEventListener('touchmove', handleMove);
      document.addEventListener('touchend', handleEnd);
    }
  };

  useEffect(() => {
    const engine = Matter.Engine.create({ gravity: { y: 0.7 } });
    engineRef.current = engine;

    const ground = Matter.Bodies.rectangle(
      window.innerWidth / 2,
      window.innerHeight + 50,
      window.innerWidth * 2,
      100,
      { isStatic: true }
    );
    Matter.Composite.add(engine.world, ground);

    const runner = Matter.Runner.create();
    runnerRef.current = runner;
    Matter.Runner.run(runner, engine);

    animationFrameRef.current = requestAnimationFrame(syncDOMWithPhysics);

    const handleResize = () => {
      Matter.Body.setPosition(ground, {
        x: window.innerWidth / 2,
        y: window.innerHeight + 50
      });
      Matter.Body.setVertices(ground, [
        { x: -window.innerWidth, y: -50 },
        { x: window.innerWidth * 2, y: -50 },
        { x: window.innerWidth * 2, y: 50 },
        { x: -window.innerWidth, y: 50 }
      ]);
    };

    window.addEventListener('resize', handleResize);

    const intervalId = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % wordPairs.length);
    }, 6000); // Increased from 4000ms to 6000ms

    return () => {
      clearInterval(intervalId);
      window.removeEventListener('resize', handleResize);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      if (runnerRef.current) {
        Matter.Runner.stop(runnerRef.current);
      }
      if (engineRef.current) {
        Matter.Engine.clear(engineRef.current);
      }
      fallingWordsRef.current.forEach(({ domElement }) => {
        domElement.remove();
      });
      fallingWordsRef.current = [];
    };
  }, []);

  useEffect(() => {
    if (sceneRef.current) {
      sceneRef.current.addEventListener('mousedown', handleInteractionStart);
      sceneRef.current.addEventListener('touchstart', handleInteractionStart);

      return () => {
        if (sceneRef.current) {
          sceneRef.current.removeEventListener('mousedown', handleInteractionStart);
          sceneRef.current.removeEventListener('touchstart', handleInteractionStart);
        }
      };
    }
  }, []);

  useEffect(() => {
    // Wait longer before dropping words to prevent overlap
    const timer = setTimeout(() => {
      if (word1Ref.current) dropWord(wordPairs[(currentIndex - 1 + wordPairs.length) % wordPairs.length][0], word1Ref.current);
      // "и" doesn't fall, it just disappears
      if (word2Ref.current) dropWord(wordPairs[(currentIndex - 1 + wordPairs.length) % wordPairs.length][1], word2Ref.current);
    }, 100); // Reduced from 300ms to drop sooner after transition starts

    return () => clearTimeout(timer);
  }, [currentIndex]);

  const wordAnimationVariants = {
    initial: { opacity: 0, scale: 0.9 },
    animate: (delay: number) => ({
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, delay: delay + 0.5 } // Added delay to prevent overlap
    }),
    exit: { opacity: 1, transition: { duration: 0 } } // Words stay visible when exiting
  };
  
  const andAnimationVariants = {
    initial: { opacity: 0, scale: 0.9 },
    animate: (delay: number) => ({
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, delay: delay + 0.5 } // Added delay to sync with words
    }),
    exit: { opacity: 0, transition: { duration: 0.3 } } // "и" fades out
  };

  return (
    <>
      <div ref={sceneRef} className="scene absolute inset-0 cursor-pointer z-10" />
      
      {/* Logo in upper left corner */}
      <div className="absolute top-8 left-8 z-30 text-2xl md:text-3xl font-anonymous-pro font-bold text-white">
        хсл щ
      </div>
      
      <div className="relative z-20 flex flex-col items-center justify-center min-h-screen pointer-events-none">
        <div className="text-3xl md:text-5xl mb-4 font-anonymous-pro">Мы делаем</div>
        
        <div className="flex items-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={`word1-${currentIndex}`}
              variants={wordAnimationVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              custom={0}
            >
              <span ref={word1Ref} className={`inline-block text-xl md:text-3xl ${randomFonts.word1}`}>
                {wordPairs[currentIndex][0]}
              </span>
            </motion.div>
          </AnimatePresence>

          <AnimatePresence mode="wait">
            <motion.div
              key={`and-${currentIndex}`}
              variants={andAnimationVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              custom={0.2}
            >
              <span ref={andRef} className="inline-block px-2 text-xl md:text-3xl">
                и
              </span>
            </motion.div>
          </AnimatePresence>

          <AnimatePresence mode="wait">
            <motion.div
              key={`word2-${currentIndex}`}
              variants={wordAnimationVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              custom={0.4}
            >
              <span ref={word2Ref} className={`inline-block text-xl md:text-3xl ${randomFonts.word2}`}>
                {wordPairs[currentIndex][1]}
              </span>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </>
  );
}