import Link from 'next/link';
import { Zap, Facebook, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#001F3F] dark:bg-[#060A1C] text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <Zap className="h-6 w-6 text-[#FFD700] dark:text-[#FFB300]" />
              <span className="font-inter font-bold text-xl">GZT<span className="text-[#00C853] dark:text-[#00E676]">Labs</span></span>
            </div>
            <p className="text-gray-300 dark:text-gray-400 mb-6">
              Smart solutions for a digital world. We design and build beautiful digital experiences for businesses in Harare and beyond.
            </p>
            <div className="flex space-x-4">
              <Link href="https://facebook.com/gzt.solutions" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <Facebook className="h-5 w-5 text-gray-300 hover:text-[#FFD700] dark:hover:text-[#FFB300] transition-colors" />
              </Link>
              <Link href="https://instagram.com/gztl.solutions" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <Instagram className="h-5 w-5 text-gray-300 hover:text-[#FFD700] dark:hover:text-[#FFB300] transition-colors" />
              </Link>
              <Link href="https://linkedin.com/company/gen-z-tech-labs" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5 text-gray-300 hover:text-[#FFD700] dark:hover:text-[#FFB300] transition-colors" />
              </Link>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-6">Services</h3>
            <ul className="space-y-3">
              <li>
                <Link href="#digital-marketing" className="text-gray-300 dark:text-gray-400 hover:text-[#00C853] dark:hover:text-[#00E676] transition-colors">
                  Digital Marketing
                </Link>
              </li>
              <li>
                <Link href="#branding-strategy" className="text-gray-300 dark:text-gray-400 hover:text-[#00C853] dark:hover:text-[#00E676] transition-colors">
                  Branding Strategy
                </Link>
              </li>
              <li>
                <Link href="#seo-campaigns" className="text-gray-300 dark:text-gray-400 hover:text-[#00C853] dark:hover:text-[#00E676] transition-colors">
                  SEO Campaigns
                </Link>
              </li>
              <li>
                <Link href="#mobile-application" className="text-gray-300 dark:text-gray-400 hover:text-[#00C853] dark:hover:text-[#00E676] transition-colors">
                  Mobile Application
                </Link>
              </li>
              <li>
                <Link href="#website-design" className="text-gray-300 dark:text-gray-400 hover:text-[#00C853] dark:hover:text-[#00E676] transition-colors">
                  Website Design
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="#home" className="text-gray-300 dark:text-gray-400 hover:text-[#00C853] dark:hover:text-[#00E676] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-gray-300 dark:text-gray-400 hover:text-[#00C853] dark:hover:text-[#00E676] transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="#portfolio" className="text-gray-300 dark:text-gray-400 hover:text-[#00C853] dark:hover:text-[#00E676] transition-colors">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="#why-choose-us" className="text-gray-300 dark:text-gray-400 hover:text-[#00C853] dark:hover:text-[#00E676] transition-colors">
                  Why Choose Us
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-gray-300 dark:text-gray-400 hover:text-[#00C853] dark:hover:text-[#00E676] transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-6">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-[#00C853] dark:text-[#00E676] mt-0.5" />
                <Link href="tel:+263784625172" className="text-gray-300 dark:text-gray-400 hover:text-white transition-colors">
                  +263 78 462 5172
                </Link>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-[#00C853] dark:text-[#00E676] mt-0.5" />
                <Link href="mailto:sales@genztechlabs.com" className="text-gray-300 dark:text-gray-400 hover:text-white transition-colors">
                  sales@genztechlabs.com
                </Link>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-[#00C853] dark:text-[#00E676] mt-0.5" />
                <span className="text-gray-300 dark:text-gray-400">
                  Harare, Zimbabwe
                </span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} Gen Z Tech Labs. All rights reserved.
          </p>
          <p className="text-gray-500 text-sm mt-2">
            Made with 💛 in Harare, Zimbabwe.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;