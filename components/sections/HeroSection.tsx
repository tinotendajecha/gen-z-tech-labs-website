"use client"

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ChevronRight, ExternalLink, Github, Twitter } from 'lucide-react';

const HeroSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!sectionRef.current) return;
      
      const { clientX, clientY } = e;
      const rect = sectionRef.current.getBoundingClientRect();
      
      const x = (clientX - rect.left) / rect.width;
      const y = (clientY - rect.top) / rect.height;
      
      const iconsEls = sectionRef.current.querySelectorAll('.floating-icon');
      iconsEls.forEach((icon, index) => {
        const speed = 1 + index * 0.5;
        const translateX = (x - 0.5) * speed * 30;
        const translateY = (y - 0.5) * speed * 30;
        
        (icon as HTMLElement).style.transform = `translate(${translateX}px, ${translateY}px)`;
      });
    };
    
    sectionRef.current?.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      sectionRef.current?.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="relative min-h-screen flex items-center overflow-hidden bg-white dark:bg-[#0A0F2C] pt-16"
      id="home"
    >
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 right-10 w-40 h-40 bg-[#FFD700]/20 dark:bg-[#FFB300]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-72 h-72 bg-[#00C853]/10 dark:bg-[#00E676]/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 z-10 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="relative"
          >
            <div className="absolute -z-10 inset-0">
              <div className="floating-icon absolute top-10 left-10 text-[#FFD700] dark:text-[#FFB300] opacity-20">
                <Twitter size={40} />
              </div>
              <div className="floating-icon absolute top-40 right-10 text-[#00C853] dark:text-[#00E676] opacity-20">
                <Github size={50} />
              </div>
              <div className="floating-icon absolute bottom-20 left-20 text-[#001F3F] dark:text-blue-500 opacity-20">
                <ExternalLink size={35} />
              </div>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              <span className="block">Accelerate Your</span>
              <span className="bg-gradient-to-r from-[#001F3F] via-[#00C853] to-[#FFD700] dark:from-[#0A0F2C] dark:via-[#00E676] dark:to-[#FFB300] text-transparent bg-clip-text animate-gradient-shift">
                Online Presence
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-xl">
              Smart solutions for a digital world. We build beautiful, functional digital experiences that elevate your brand and drive growth.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg"
                className="rounded-full bg-[#00C853] hover:bg-[#00AC49] dark:bg-[#00E676] dark:hover:bg-[#00C853] text-white font-medium px-8"
                asChild
              >
                <Link href="#contact">
                  Get a Free Quote <ChevronRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              
              <Button 
                variant="outline"
                size="lg"
                className="rounded-full border-[#001F3F] dark:border-[#FFB300] hover:bg-[#001F3F]/5 dark:hover:bg-[#FFB300]/10 text-[#001F3F] dark:text-[#FFB300] font-medium px-8"
                asChild
              >
                <Link href="#portfolio">
                  View Our Work
                </Link>
              </Button>
            </div>
            
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.2 }}
              className="mt-10 flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400"
            >
              <span className="w-10 h-[1px] bg-gray-300 dark:bg-gray-600"></span>
              <span>Trusted by businesses across Zimbabwe</span>
            </motion.div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <div className="absolute -inset-1 bg-gradient-to-r from-[#FFD700] via-[#00C853] to-[#001F3F] dark:from-[#FFB300] dark:via-[#00E676] dark:to-[#0A0F2C] opacity-50 blur"></div>
              <div className="relative">
                <Image 
                  src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" 
                  width={600} 
                  height={400} 
                  alt="Digital team working together"
                  className="rounded-xl object-cover"
                />
              </div>
            </div>
            
            <div className="absolute -bottom-6 -right-6 md:bottom-[20%] md:-right-10 bg-white dark:bg-[#121A42] p-4 rounded-lg shadow-xl animate-float">
              <div className="flex items-center gap-3">
                <div className="h-12 w-12 rounded-full bg-[#00C853]/20 dark:bg-[#00E676]/20 flex items-center justify-center">
                  <span className="text-[#00C853] dark:text-[#00E676] font-bold text-xl">+</span>
                </div>
                <div>
                  <p className="font-medium">100% Client Satisfaction</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Premium quality work</p>
                </div>
              </div>
            </div>
            
            <div className="absolute -top-6 -left-6 md:top-[20%] md:-left-10 bg-white dark:bg-[#121A42] p-4 rounded-lg shadow-xl animate-float-delay-1">
              <div className="flex items-center gap-3">
                <div className="h-12 w-12 rounded-full bg-[#FFD700]/20 dark:bg-[#FFB300]/20 flex items-center justify-center">
                  <span className="text-[#FFD700] dark:text-[#FFB300] font-bold text-xl">5</span>
                </div>
                <div>
                  <p className="font-medium">Years Experience</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">In digital solutions</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;