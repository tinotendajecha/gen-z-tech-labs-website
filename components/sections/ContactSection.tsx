"use client"

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Send, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "We'll get back to you as soon as possible.",
      });
      setIsSubmitting(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: '',
      });
    }, 1500);
  };

  return (
    <section className="py-20 bg-gray-50 dark:bg-[#090D24]" id="contact">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Get In <span className="text-[#00C853] dark:text-[#00E676]">Touch</span>
            </h2>

            <p className="text-gray-600 dark:text-gray-300 text-lg">
              Have a project in mind? Contact us today for a free consultation and quote.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="bg-white dark:bg-[#0F1635] rounded-2xl p-8 shadow-lg h-full">
              <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#00C853]/10 dark:bg-[#00E676]/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="h-5 w-5 text-[#00C853] dark:text-[#00E676]" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">Phone</p>
                    <div className='flex flex-col gap-1'>
                      <a
                        href="tel:+263784625172"
                        className="text-lg font-medium hover:text-[#00C853] dark:hover:text-[#00E676] transition-colors"
                      >
                        +263 78 462 5172
                      </a>
                      <a
                        href="tel:+263776531418"
                        className="text-lg font-medium hover:text-[#00C853] dark:hover:text-[#00E676] transition-colors"
                      >
                        +263 77 653 1418
                      </a>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#00C853]/10 dark:bg-[#00E676]/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="h-5 w-5 text-[#00C853] dark:text-[#00E676]" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">Email</p>
                    <a
                      href="mailto:sales@genztechlabs.com"
                      className="text-lg font-medium hover:text-[#00C853] dark:hover:text-[#00E676] transition-colors"
                    >
                      sales@genztechlabs.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#00C853]/10 dark:bg-[#00E676]/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-5 w-5 text-[#00C853] dark:text-[#00E676]" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">Address</p>
                    <p className="text-lg font-medium">
                      Harare, Zimbabwe
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-10">
                <p className="font-medium mb-4">Prefer WhatsApp?</p>
                <Button
                  className="w-full bg-green-600 hover:bg-green-700 text-white rounded-full flex items-center justify-center gap-2 py-6"
                  asChild
                >
                  <a
                    href="https://wa.me/263784625172"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MessageCircle className="h-5 w-5" />
                    <span>Chat on WhatsApp</span>
                  </a>
                </Button>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="bg-white dark:bg-[#0F1635] rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-semibold mb-6">Send us a message</h3>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-1">
                    Your Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    required
                    className="w-full rounded-lg"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-1">
                    Email Address
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    required
                    className="w-full rounded-lg"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium mb-1">
                    Phone Number
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+263 7X XXX XXXX"
                    className="w-full rounded-lg"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-1">
                    Your Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your project..."
                    required
                    className="w-full rounded-lg min-h-[120px]"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-[#00C853] hover:bg-[#00AC49] dark:bg-[#00E676] dark:hover:bg-[#00C853] text-white font-medium rounded-full py-6"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <div className="flex items-center gap-2">
                      <div className="h-4 w-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      <span>Sending...</span>
                    </div>
                  ) : (
                    <div className="flex items-center gap-2">
                      <Send className="h-4 w-4" />
                      <span>Send Message</span>
                    </div>
                  )}
                </Button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;