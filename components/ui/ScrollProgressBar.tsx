"use client"

import { useEffect, useState } from 'react';

const ScrollProgressBar = () => {
  const [scrollPercentage, setScrollPercentage] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = (window.scrollY / scrollHeight) * 100;
      setScrollPercentage(scrolled);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 z-50 w-full h-1 bg-transparent">
      <div 
        className="h-full bg-gradient-to-r from-[#FFD700] via-[#00C853] to-[#001F3F] dark:from-[#FFB300] dark:via-[#00E676] dark:to-[#0A0F2C]"
        style={{ width: `${scrollPercentage}%` }}
      />
    </div>
  );
};

export default ScrollProgressBar;