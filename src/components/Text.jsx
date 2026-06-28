import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

// Register the hook plugin
gsap.registerPlugin(useGSAP);

export default function TextRotator() {
  const container = useRef(null);
  const words = ['product design', 'motion design', 'development'];

  useGSAP(() => {
    const wordElements = container.current.querySelectorAll('.animated-word');
    const tl = gsap.timeline({ repeat: -1 });

    wordElements.forEach((word) => {
      tl.fromTo(word, 
        { 
          y: "100%", 
          opacity: 0 
        },
        { 
          y: "0%", 
          opacity: 1, 
          duration: 0.5, 
          ease: "power3.out" 
        }
      )
      .to(word, 
        { 
          y: "-100%", 
          opacity: 0, 
          duration: 0.5, 
          ease: "power3.in",
          delay: 2 // Time the word stays static
        }
      );
    });
  }, { scope: container }); // Scope ensures GSAP only looks inside this component

  return (

    <h2 className="text-4xl font-bold text-[#111424]">
    Work with the world’s best in{' '}
    <span ref={container} className="relative inline-block overflow-hidden h-[1.2em] align-top vertical-align-top">
        {words.map((word, index) => (
        <span 
        key={index} 
        className="animated-word absolute left-0 top-0 text-[#ff007f] whitespace-nowrap opacity-0"
        >
        {word}
      </span>
    ))}
    </span>
    </h2>
  );
}