import React, { useState, useEffect } from 'react';

const words = ['mobile design', 'web apps', 'branding', 'UX research'];

export default function HeroText() {
  const [index, setIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    // 1. Calculate a random interval between 500ms (1/2s) and 1200ms (~1s)
    const randomTime = Math.floor(Math.random() * (3000 - 500 + 1)) + 500;

    const timeout = setTimeout(() => {
      // 2. Start the fade-out phase slightly before changing the word
      setIsTransitioning(true);

      setTimeout(() => {
        setIndex((prevIndex) => (prevIndex + 1) % words.length);
        setIsTransitioning(false); // Fade back in with the new word
      }, 150); // Matches half of our transition duration below

    }, randomTime);

    return () => clearTimeout(timeout);
  }, [index]);

  return (
    <div className="flex min-h-[300px] items-center justify-center bg-white p-6">
      <h1 className="max-w-3xl text-left font-sans text-5xl font-extrabold tracking-tight text-[#0f0e17] sm:text-6xl md:text-7xl">
        Work with the world’s best in{' '}
        <span className="inline-block min-w-[280px] text-[#ff007f]">
          <span
            className={`inline-block transform duration-300 ease-out transition-all ${
              isTransitioning 
                ? 'opacity-0 translate-y-2' 
                : 'opacity-100 translate-y-0'
            }`}
          >
            {words[index]}
          </span>
        </span>
      </h1>
    </div>
  );
}