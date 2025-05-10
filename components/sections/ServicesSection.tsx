"use client"

import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Smartphone, 
  Globe, 
  Rocket, 
  Award, 
  BarChart, 
  MessageSquareCode, 
  Bot, 
  Workflow 
} from 'lucide-react';
import { cn } from '@/lib/utils';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  className?: string;
}

const ServiceCard = ({ icon, title, description, className }: ServiceCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={cn(
        "service-card relative rounded-xl p-6 md:p-8 overflow-hidden bg-white dark:bg-[#0F1635] border border-gray-100 dark:border-[#1A2547] shadow-sm hover:shadow-xl transition-all duration-300",
        className
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div 
        className={cn(
          "absolute -right-20 -bottom-20 w-40 h-40 rounded-full bg-[#00C853]/10 dark:bg-[#00E676]/5 transition-transform duration-300",
          isHovered ? "scale-150" : "scale-100"
        )} 
      />
      
      <div className="relative z-10">
        <div className="w-14 h-14 rounded-xl bg-[#FFD700]/20 dark:bg-[#FFB300]/10 flex items-center justify-center mb-6 text-[#001F3F] dark:text-[#FFB300]">
          {icon}
        </div>
        
        <h3 className="text-xl font-semibold mb-3">{title}</h3>
        
        <p className="text-gray-600 dark:text-gray-300">{description}</p>
      </div>
    </motion.div>
  );
};

const ServicesSection = () => {
  return (
    <section className="bg-gray-50 dark:bg-[#090D24] py-20" id="services">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Services that <span className="text-[#00C853] dark:text-[#00E676]">Propel</span> Your Business
            </h2>
            
            <p className="text-gray-600 dark:text-gray-300 text-lg">
              We offer end-to-end digital solutions to help your business thrive in the digital landscape. Our services are tailored to meet your unique needs.
            </p>
          </motion.div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          <ServiceCard 
            icon={<Globe className="h-8 w-8" />}
            title="Website Design" 
            description="Beautiful, functional websites that convert visitors into customers. Mobile-responsive and SEO-optimized."
          />
          
          <ServiceCard 
            icon={<Smartphone className="h-8 w-8" />}
            title="Mobile Applications" 
            description="Cross-platform mobile apps with intuitive UI/UX design. Native-like performance for Android and iOS devices."
          />
          
          <ServiceCard 
            icon={<Rocket className="h-8 w-8" />}
            title="Digital Marketing" 
            description="Strategic online marketing campaigns across social media, email, and search engines to increase visibility."
          />
          
          <ServiceCard 
            icon={<Award className="h-8 w-8" />}
            title="Branding Strategy" 
            description="Comprehensive branding including logo design, brand guidelines, and messaging that resonates with your audience."
          />
          
          <ServiceCard 
            icon={<BarChart className="h-8 w-8" />}
            title="SEO Campaigns" 
            description="Data-driven SEO strategies to boost your search engine rankings and drive organic traffic to your website."
          />
          
          <ServiceCard 
            icon={<MessageSquareCode className="h-8 w-8" />}
            title="WhatsApp Chatbots" 
            description="Automated WhatsApp chatbots to engage with your customers, answer questions, and provide 24/7 support."
          />
          
          <ServiceCard 
            icon={<Bot className="h-8 w-8" />}
            title="AI Integration" 
            description="Implementing AI solutions to automate tasks, generate insights, and enhance customer experiences."
          />
          
          <ServiceCard 
            icon={<Workflow className="h-8 w-8" />}
            title="Operations Automation" 
            description="Streamline your business operations with custom automation solutions, reducing costs and improving efficiency."
          />
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;