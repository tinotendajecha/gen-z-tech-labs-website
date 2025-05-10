"use client"

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const FloatingCta = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsVisible(scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed z-40 bottom-5 right-5 flex flex-col gap-3">
      <div 
        className={`transition-transform duration-500 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}
      >
        <Button 
          className="rounded-full shadow-lg animate-pulse-shadow bg-[#00C853] hover:bg-[#009E45] dark:bg-[#00E676] dark:hover:bg-[#00C064] text-white"
          asChild
        >
          <Link href="#contact">
            Book a Free Consult
          </Link>
        </Button>
      </div>
      
      <div className="animate-pulse-shadow">
        <Button 
          className="rounded-full shadow-lg bg-green-600 dark:bg-green-500 hover:bg-green-700 dark:hover:bg-green-600 h-12 w-12 p-0"
          asChild
        >
          <Link 
            href="https://wa.me/263784625172" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="Chat on WhatsApp"
          >
            <MessageCircle className="h-6 w-6" />
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default FloatingCta;