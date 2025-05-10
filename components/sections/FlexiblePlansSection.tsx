"use client"

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { MessageSquare } from 'lucide-react';

const FlexiblePlansSection = () => {
  return (
    <section className="py-20 bg-white dark:bg-[#0A0F2C]" id="flexible-plans">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Get Started With <span className="text-[#00C853] dark:text-[#00E676]">Flexible Plans</span>
            </h2>
            <p className="text-gray-600 dark:text-gray-300 text-lg max-w-2xl mx-auto">
              We believe in helping small businesses grow — without the pressure of paying everything upfront.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-10 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-[#FFD700]/10 dark:bg-[#FFB300]/10 rounded-2xl p-8"
            >
              <div className="mb-6">
                <span className="inline-block px-4 py-1 bg-[#FFD700] dark:bg-[#FFB300] text-[#001F3F] dark:text-[#0A0F2C] rounded-full text-sm font-medium mb-4">
                  Special Promo
                </span>
                <h3 className="text-2xl font-bold mb-2">
                  Pay as low as $40/month
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Perfect for startups, boutiques, and side hustles ready to go digital.
                </p>
              </div>

              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#00C853] dark:bg-[#00E676]" />
                  <span>Split your website or digital service package into monthly payments</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#00C853] dark:bg-[#00E676]" />
                  <span>No extra fees. No surprises.</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#00C853] dark:bg-[#00E676]" />
                  <span>3-month payment plans available</span>
                </li>
              </ul>

              <Button 
                className="w-full bg-[#00C853] hover:bg-[#00AC49] dark:bg-[#00E676] dark:hover:bg-[#00C853] text-white rounded-full py-6"
                asChild
              >
                <Link 
                  href="https://wa.me/263784625172?text=Hi!%20I'm%20interested%20in%20the%20flexible%20payment%20plan%20for%20my%20business."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2"
                >
                  <MessageSquare className="h-5 w-5" />
                  <span>Book Your Free Consult</span>
                </Link>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white dark:bg-[#0F1635] rounded-2xl p-8 shadow-lg"
            >
              <div className="flex items-start gap-6 mb-6">
                <div className="w-20 h-20 rounded-full overflow-hidden flex-shrink-0">
                  <Image
                    src="https://images.pexels.com/photos/3771839/pexels-photo-3771839.jpeg"
                    alt="Martha M."
                    width={80}
                    height={80}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-1">Martha's Kitchen</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Local Catering Brand</p>
                </div>
              </div>

              <blockquote className="text-gray-600 dark:text-gray-300 mb-6">
                "We wanted to get a proper website but weren't ready to pay $300+ upfront. Gen Z Tech Labs gave us a flexible $40/month payment plan. Within a week, our new website was up and customers started booking online. The process was super smooth, and now we feel legit!"
              </blockquote>

              <div className="flex items-center gap-2">
                <span className="font-medium">Martha M.</span>
                <span className="text-gray-500 dark:text-gray-400">Founder</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FlexiblePlansSection;