"use client"

import { useRef } from 'react';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import { CheckCircle } from 'lucide-react';

const WhyChooseUsSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };
  
  const reasons = [
    {
      title: "Local Advantage",
      description: "We understand the Zimbabwean market and culture, enabling us to create solutions that resonate with local audiences."
    },
    {
      title: "Expert Team",
      description: "Our team consists of skilled developers, designers, and marketers who use cutting-edge technologies like AI and Next.js."
    },
    {
      title: "Custom Solutions",
      description: "We create beautiful custom builds tailored to your specific needs, not generic templates that look like everyone else's."
    },
    {
      title: "Data-Driven Approach",
      description: "Our strategies are based on analytics and market research to ensure measurable results for your business."
    },
    {
      title: "Ongoing Support",
      description: "We provide continuous support and maintenance to ensure your digital assets remain effective and up-to-date."
    },
    {
      title: "Affordable Excellence",
      description: "Premium digital solutions at competitive rates, providing excellent ROI for businesses of all sizes."
    }
  ];
  
  return (
    <section className="py-20 bg-white dark:bg-[#0A0F2C]" id="why-choose-us" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-[#FFD700] to-[#00C853] dark:from-[#FFB300] dark:to-[#00E676] opacity-30 blur-lg rounded-xl"></div>
              <div className="relative bg-white dark:bg-[#0F1635] p-2 rounded-xl">
                <Image 
                  src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                  alt="Our team at work"
                  width={600}
                  height={400}
                  className="w-full h-auto rounded-lg object-cover"
                />
              </div>
              
              <div className="absolute top-[20%] -right-6 md:-right-12 bg-white dark:bg-[#121A42] p-4 rounded-lg shadow-xl">
                <div className="flex items-center gap-3">
                  <div className="h-12 w-12 rounded-full bg-[#00C853]/20 dark:bg-[#00E676]/20 flex items-center justify-center">
                    <span className="text-[#00C853] dark:text-[#00E676] font-bold">24/7</span>
                  </div>
                  <div>
                    <p className="font-medium">Support</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Always available</p>
                  </div>
                </div>
              </div>
              
              <div className="absolute -bottom-6 -left-6 md:-left-12 bg-white dark:bg-[#121A42] p-4 rounded-lg shadow-xl">
                <div className="flex items-center gap-3">
                  <div className="h-12 w-12 rounded-full bg-[#FFD700]/20 dark:bg-[#FFB300]/20 flex items-center justify-center">
                    <span className="text-[#FFD700] dark:text-[#FFB300] font-bold">100%</span>
                  </div>
                  <div>
                    <p className="font-medium">Satisfaction</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Guaranteed</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="order-1 lg:order-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Why <span className="text-[#00C853] dark:text-[#00E676]">Choose</span> Us
              </h2>
              
              <p className="text-gray-600 dark:text-gray-300 text-lg mb-8">
                At Gen Z Tech Labs, we combine local expertise with global standards to deliver digital solutions that drive real business growth.
              </p>
            </motion.div>
            
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="grid gap-4"
            >
              {reasons.map((reason, index) => (
                <motion.div 
                  key={index}
                  variants={itemVariants}
                  className="flex gap-4"
                >
                  <CheckCircle className="h-6 w-6 flex-shrink-0 text-[#00C853] dark:text-[#00E676]" />
                  <div>
                    <h3 className="font-semibold mb-1">{reason.title}</h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">{reason.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;