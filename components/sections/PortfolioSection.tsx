"use client"

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

interface PortfolioItem {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
}

const portfolioItems: PortfolioItem[] = [
  {
    id: 1,
    title: "Smart Recruit",
    category: "Web Application",
    image: "https://images.pexels.com/photos/3182759/pexels-photo-3182759.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    description: "An AI-powered recruitment platform"
  },
  {
    id: 2,
    title: "Municipal Services Portal",
    category: "Web Design",
    image: "https://images.pexels.com/photos/110469/pexels-photo-110469.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    description: "Digital services portal for local government"
  },
  {
    id: 3,
    title: "Content Streaming App",
    category: "Mobile App",
    image: "https://images.pexels.com/photos/1092671/pexels-photo-1092671.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    description: "Video streaming platform with e-commerce"
  },
  {
    id: 4,
    title: "EduMentor LMS",
    category: "Web Application",
    image: "https://images.pexels.com/photos/256502/pexels-photo-256502.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    description: "Learning management system for schools"
  },
  {
    id: 5,
    title: "FarmTrack",
    category: "Mobile App",
    image: "https://images.pexels.com/photos/440731/pexels-photo-440731.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    description: "Farm management and analytics platform"
  },
  {
    id: 6,
    title: "FixIt App",
    category: "Mobile App",
    image: "https://images.pexels.com/photos/1181622/pexels-photo-1181622.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    description: "On-demand home repair service platform"
  }
];

const categories = ["All", "Web Design", "Web Application", "Mobile App"];

const PortfolioSection = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);
  
  const filteredItems = activeCategory === "All" 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeCategory);
    
  return (
    <section className="py-20 bg-gray-50 dark:bg-[#090D24]" id="portfolio">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Our <span className="text-[#00C853] dark:text-[#00E676]">Portfolio</span>
            </h2>
            
            <p className="text-gray-600 dark:text-gray-300 text-lg">
              Browse through our recent projects and see how we've helped businesses transform their digital presence.
            </p>
          </motion.div>
        </div>
        
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          {categories.map((category, index) => (
            <motion.button
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                activeCategory === category
                  ? "bg-[#001F3F] dark:bg-[#FFB300] text-white"
                  : "bg-white dark:bg-[#0F1635] text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-[#1A2547]"
              }`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </motion.button>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="portfolio-item rounded-xl overflow-hidden shadow-lg"
              onMouseEnter={() => setHoveredItem(item.id)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              <div className="relative aspect-[4/3]">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-500 ease-in-out"
                  style={{ 
                    transform: hoveredItem === item.id ? 'scale(1.05)' : 'scale(1)'
                  }}
                />
                
                <div className="portfolio-item-overlay flex flex-col justify-center items-center p-6 text-center">
                  <span className="text-[#FFD700] dark:text-[#FFB300] text-sm font-medium mb-2">
                    {item.category}
                  </span>
                  <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-gray-200 mb-4">{item.description}</p>
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-white/20 transition-all hover:bg-white/40">
                    <ExternalLink className="h-5 w-5 text-white" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;