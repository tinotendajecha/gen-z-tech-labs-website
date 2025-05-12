"use client"

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useTheme } from 'next-themes';
import { cn } from '@/lib/utils';
import { Menu, X, Moon, Sun, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { MobileNav } from '@/components/layout/MobileNav';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    document.body.style.overflow = isMenuOpen ? 'auto' : 'hidden';
  };

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <header 
      className={cn(
        'fixed top-0 left-0 w-full z-50 transition-all duration-300',
        isScrolled 
          ? 'bg-white/90 dark:bg-[#0A0F2C]/90 backdrop-blur-md shadow-sm py-3' 
          : 'bg-transparent py-5'
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="relative z-10 flex items-center gap-2 font-bold text-xl">
            <Zap className="h-6 w-6 text-[#FFD700] dark:text-[#FFB300]" />
            <span className="font-inter font-bold">Gen Z Tech <span className="text-[#00C853] dark:text-[#00E676]">Labs</span></span>
          </Link>
          
          <div className="hidden md:flex items-center gap-8">
            <nav className="flex items-center gap-6">
              <Link 
                href="#services" 
                className="text-sm font-medium hover:text-[#00C853] dark:hover:text-[#00E676] transition-colors"
              >
                Services
              </Link>
              <Link 
                href="#why-choose-us" 
                className="text-sm font-medium hover:text-[#00C853] dark:hover:text-[#00E676] transition-colors"
              >
                Why Us
              </Link>
              {/* <Link 
                href="#portfolio" 
                className="text-sm font-medium hover:text-[#00C853] dark:hover:text-[#00E676] transition-colors"
              >
                Portfolio
              </Link> */}
              {/* <Link 
                href="#testimonials" 
                className="text-sm font-medium hover:text-[#00C853] dark:hover:text-[#00E676] transition-colors"
              >
                Testimonials
              </Link> */}
              <Link 
                href="#contact" 
                className="text-sm font-medium hover:text-[#00C853] dark:hover:text-[#00E676] transition-colors"
              >
                Contact
              </Link>
            </nav>
            
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
            
            <Button 
              className="bg-[#00C853] hover:bg-[#00AC49] dark:bg-[#00E676] dark:hover:bg-[#00C853] text-white rounded-full"
              asChild
            >
              <Link href="#contact">Get a Free Quote</Link>
            </Button>
          </div>
          
          <button 
            className="relative z-10 md:hidden flex items-center justify-center"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>
      
      <MobileNav isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </header>
  );
};

export default Header;