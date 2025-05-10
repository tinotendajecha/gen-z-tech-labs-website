"use client"

import { useState, useEffect } from 'react';
import { Zap } from 'lucide-react';
import { cn } from '@/lib/utils';

const InitialLoader = () => {
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    
    return () => clearTimeout(timer);
  }, []);
  
  return (
    <div 
      className={cn(
        "fixed inset-0 flex flex-col items-center justify-center bg-white dark:bg-[#0A0F2C] z-[9999] transition-opacity duration-500",
        isLoading ? "opacity-100" : "opacity-0 pointer-events-none"
      )}
    >
      <div className="relative flex items-center justify-center">
        <Zap className="h-16 w-16 text-[#FFD700] dark:text-[#FFB300] animate-pulse" />
        <div className="absolute inset-0 border-4 border-t-[#00C853] dark:border-t-[#00E676] border-r-transparent border-b-transparent border-l-transparent rounded-full animate-spin"></div>
      </div>
      <div className="mt-6 overflow-hidden">
        <div className="relative w-48 h-1 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-[#FFD700] dark:from-[#FFB300] via-[#00C853] dark:via-[#00E676] to-[#001F3F] dark:to-[#0A0F2C] animate-loader-progress rounded-full"></div>
        </div>
      </div>
      <p className="mt-4 text-sm text-gray-500 dark:text-gray-400 animate-pulse">
        Loading awesome digital experiences...
      </p>
    </div>
  );
};

export default InitialLoader;