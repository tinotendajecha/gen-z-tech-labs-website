"use client"

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface Testimonial {
  id: number;
  name: string;
  position: string;
  company: string;
  image: string;
  quote: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Moyo",
    position: "CEO",
    company: "TechFin Solutions",
    image: "https://images.pexels.com/photos/1520760/pexels-photo-1520760.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    quote: "Gen Z Tech Labs transformed our online presence completely. Their team delivered a stunning website that perfectly captures our brand essence. The results have been incredible - our leads have increased by 70% since launch!"
  },
  {
    id: 2,
    name: "Michael Ndlovu",
    position: "Marketing Director",
    company: "Rapid Retail",
    image: "https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    quote: "Working with Gen Z Tech Labs has been nothing short of amazing. Their strategic approach to our digital marketing campaigns has significantly increased our online visibility and customer engagement. Highly recommended!"
  },
  {
    id: 3,
    name: "Tendai Makoni",
    position: "Operations Manager",
    company: "ZimFresh Farms",
    image: "https://images.pexels.com/photos/1181391/pexels-photo-1181391.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    quote: "The FarmTrack app developed by Gen Z Tech Labs has revolutionized how we manage our agricultural operations. The attention to detail and understanding of our specific needs was impressive. A truly valuable partnership."
  }
];

const TestimonialsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };
  
  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };
  
  return (
    <section className="py-20 bg-white dark:bg-[#0A0F2C]" id="testimonials">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              What Our <span className="text-[#00C853] dark:text-[#00E676]">Clients</span> Say
            </h2>
            
            <p className="text-gray-600 dark:text-gray-300 text-lg">
              Don't just take our word for it. Here's what our clients have to say about working with us.
            </p>
          </motion.div>
        </div>
        
        <div className="relative max-w-4xl mx-auto">
          <div className="absolute -z-10 top-0 left-1/2 transform -translate-x-1/2 w-64 h-64 bg-[#FFD700]/10 dark:bg-[#FFB300]/5 rounded-full blur-3xl"></div>
          
          <div className="relative overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="w-full flex-shrink-0 p-4"
                >
                  <div className="bg-gray-50 dark:bg-[#0F1635] rounded-2xl p-8 md:p-10 shadow-lg">
                    <div className="flex flex-col md:flex-row gap-6 md:gap-10 items-center">
                      <div className="w-24 h-24 md:w-32 md:h-32 relative rounded-full overflow-hidden flex-shrink-0 border-4 border-white dark:border-[#1A2547] shadow-md">
                        <Image
                          src={testimonial.image}
                          alt={testimonial.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      
                      <div className="text-center md:text-left">
                        <Quote className="h-10 w-10 text-[#FFD700]/30 dark:text-[#FFB300]/20 mx-auto md:mx-0 mb-4" />
                        <p className="text-gray-600 dark:text-gray-300 italic mb-6">
                          "{testimonial.quote}"
                        </p>
                        
                        <div>
                          <h4 className="text-lg font-semibold">{testimonial.name}</h4>
                          <p className="text-sm text-gray-500 dark:text-gray-400">
                            {testimonial.position}, {testimonial.company}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="flex justify-center mt-10 gap-4">
            <Button
              variant="outline"
              size="icon"
              className="rounded-full border-[#001F3F] dark:border-[#FFB300] text-[#001F3F] dark:text-[#FFB300]"
              onClick={prevTestimonial}
            >
              <ChevronLeft className="h-5 w-5" />
              <span className="sr-only">Previous testimonial</span>
            </Button>
            
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full transition-all ${
                    activeIndex === index
                      ? "bg-[#00C853] dark:bg-[#00E676] scale-125"
                      : "bg-gray-300 dark:bg-gray-600"
                  }`}
                  onClick={() => setActiveIndex(index)}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            
            <Button
              variant="outline"
              size="icon"
              className="rounded-full border-[#001F3F] dark:border-[#FFB300] text-[#001F3F] dark:text-[#FFB300]"
              onClick={nextTestimonial}
            >
              <ChevronRight className="h-5 w-5" />
              <span className="sr-only">Next testimonial</span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;