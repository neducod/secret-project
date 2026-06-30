import React, { useState, useEffect } from 'react';

const words = ['Create your profile', 'Browse client briefs', 'Offer your services', 'Share your work'];

export default function HeroText() {
    const [index, setIndex] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(false);

    useEffect(() => {
        // 1. Calculate a random interval between 500ms (1/2s) and 1200ms (~1s)
        const randomTime = Math.floor(Math.random() * (4000 - 500 + 1)) + 500;
    
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

return(
    <>
    <div className='max-w-xl w-full flex flex-col gap-6 md:gap-8 md:p-6 text-[#0d0d2c]'>
        <h1 className='text-left items-center text-2xl font-semibold max-w-xs'><span className='text-[#ff007f]'>
                <span 
                  className={`inline-block transform duration-300 ease-out transition-all ${
                    isTransitioning 
                      ? 'opacity-0 translate-y-2' 
                      : 'opacity-100 translate-y-0'
                  }`}>
                    {words[index]}
                  </span>
            </span> and get hired</h1>
    </div>
    </>
)
}