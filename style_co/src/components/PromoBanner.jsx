import { Button } from './ui/button';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export function PromoBanner() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="relative h-[400px] rounded-2xl overflow-hidden"
    >
      <img
        src="https://images.unsplash.com/photo-1650737736263-67daef292284?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbG90aGluZyUyMHNhbGUlMjBkaXNjb3VudHxlbnwxfHx8fDE3NjM1NTMxNDN8MA&ixlib=rb-4.1.0&q=80&w=1080"
        alt="Sale"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/40" />
      
      <div className="relative h-full flex items-center">
        <div className="container px-4">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="max-w-lg text-white"
          >
            <div className="inline-block bg-red-500 text-white px-3 py-1 rounded-full text-sm mb-4">
              Limited Time Offer
            </div>
            <h2 className="text-5xl mb-4">Season Sale</h2>
            <p className="text-xl mb-6 text-white/90">
              Up to 50% off on selected items. Don't miss out!
            </p>
            <Button size="lg" className="bg-white text-black hover:bg-white/90">
              Shop Sale
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}