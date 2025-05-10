"use client"

import { useState } from 'react';
import Link from 'next/link';
import { useTheme } from 'next-themes';
import { Moon, Sun, Zap } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MobileNav = ({ isOpen, onClose }: MobileNavProps) => {
  const { theme, setTheme } = useTheme();
  
  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };
  
  const handleLinkClick = () => {
    onClose();
    document.body.style.overflow = 'auto';
  };

  return (
    <div 
      className={cn(
        'fixed inset-0 bg-white dark:bg-[#0A0F2C] flex flex-col z-40 transition-transform duration-500 ease-in-out transform md:hidden',
        isOpen ? 'translate-x-0' : 'translate-x-full'
      )}
    >
      <div className="flex items-center justify-between p-4 border-b dark:border-slate-800">
        <Link 
          href="/"
          className="flex items-center gap-2 font-bold text-xl"
          onClick={handleLinkClick}
        >
          <Zap className="h-6 w-6 text-[#FFD700] dark:text-[#FFB300]" />
          <span className="font-inter font-bold">GZT<span className="text-[#00C853] dark:text-[#00E676]">Labs</span></span>
        </Link>
        
        <Button 
          variant="ghost"
          size="icon"
          onClick={toggleTheme}
          className="rounded-full"
        >
          <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </div>
      
      <nav className="flex flex-col p-6 space-y-6 flex-1">
        <Link 
          href="#services" 
          className="text-2xl font-medium py-2 border-b dark:border-slate-800"
          onClick={handleLinkClick}
        >
          Services
        </Link>
        <Link 
          href="#why-choose-us" 
          className="text-2xl font-medium py-2 border-b dark:border-slate-800"
          onClick={handleLinkClick}
        >
          Why Choose Us
        </Link>
        <Link 
          href="#portfolio" 
          className="text-2xl font-medium py-2 border-b dark:border-slate-800"
          onClick={handleLinkClick}
        >
          Portfolio
        </Link>
        <Link 
          href="#testimonials" 
          className="text-2xl font-medium py-2 border-b dark:border-slate-800"
          onClick={handleLinkClick}
        >
          Testimonials
        </Link>
        <Link 
          href="#contact" 
          className="text-2xl font-medium py-2 border-b dark:border-slate-800"
          onClick={handleLinkClick}
        >
          Contact
        </Link>
      </nav>
      
      <div className="p-6">
        <Button 
          className="w-full bg-[#00C853] hover:bg-[#00AC49] dark:bg-[#00E676] dark:hover:bg-[#00C853] text-white rounded-full py-6"
          asChild
        >
          <Link href="#contact" onClick={handleLinkClick}>Get a Free Quote</Link>
        </Button>
      </div>
    </div>
  );
};