"use client"

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { 
  Figma, 
  FileCode2, 
  Cpu, 
  Database, 
  Layers, 
  Zap, 
  BarChart2, 
  MessagesSquare 
} from 'lucide-react';

interface TechItem {
  name: string;
  icon: React.ReactNode;
}

const techStack: TechItem[] = [
  {
    name: "Next.js",
    icon: <FileCode2 className="h-8 w-8" />,
  },
  {
    name: "Figma",
    icon: <Figma className="h-8 w-8" />,
  },
  {
    name: "Meta Ads",
    icon: <BarChart2 className="h-8 w-8" />,
  },
  {
    name: "AI Solutions",
    icon: <Cpu className="h-8 w-8" />,
  },
  {
    name: "Supabase",
    icon: <Database className="h-8 w-8" />,
  },
  {
    name: "Zapier",
    icon: <Zap className="h-8 w-8" />,
  },
  {
    name: "React Native",
    icon: <Layers className="h-8 w-8" />,
  },
  {
    name: "WhatsApp API",
    icon: <MessagesSquare className="h-8 w-8" />,
  }
];

const TechStackSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });
  
  return (
    <section 
      ref={sectionRef}
      className="py-16 bg-[#001F3F] dark:bg-[#060A1C] text-white"
      id="tech-stack"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Tech We <span className="text-[#FFD700] dark:text-[#FFB300]">Use</span>
            </h2>
            
            <p className="text-gray-300 dark:text-gray-400 text-lg">
              We leverage cutting-edge technologies to build powerful, scalable digital solutions.
            </p>
          </motion.div>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10 max-w-4xl mx-auto">
          {techStack.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-[#052A53] dark:bg-[#0F1635] rounded-xl p-6 text-center flex flex-col items-center hover:bg-[#073569] dark:hover:bg-[#161F4A] transition-colors"
            >
              <div className="w-16 h-16 rounded-full bg-[#001F3F]/40 dark:bg-[#0A0F2C]/40 flex items-center justify-center mb-4 text-[#00C853] dark:text-[#00E676]">
                {tech.icon}
              </div>
              <h3 className="font-medium">{tech.name}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStackSection;