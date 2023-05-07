import React, { useState, useRef, useEffect } from 'react';
import './Section7.css';

const Section7 = () => {
  const [opacity, setOpacity] = useState(0);
  const sectionRef = useRef(null);

  useEffect(() => {
    const currentRef = sectionRef.current;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setOpacity(entry.intersectionRatio);
        });
      },
      { threshold: new Array(101).fill(0).map((_, i) => i * 0.01) },
    );

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <div ref={sectionRef} className="Section7">
      <div className="bg-image" style={{ opacity: opacity }}></div>
    </div>
  );
};

export default Section7;
