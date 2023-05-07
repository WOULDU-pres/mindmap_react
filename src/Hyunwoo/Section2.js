import React, { useState, useRef, useEffect } from 'react';
import './Section2.css';

const Section2 = () => {
  const [opacity, setOpacity] = useState(0);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setOpacity(entry.intersectionRatio);
        });
      },
      { threshold: new Array(101).fill(0).map((_, i) => i * 0.01) },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div ref={sectionRef} className="Section2">
      <div className="bg-image" style={{ opacity: opacity }}></div>
    </div>
  );
};

export default Section2;
