import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import React from 'react';

const categories = [
  {
    name: 'Men',
    image: 'https://images.unsplash.com/photo-1617127365659-c47fa864d8bc?w=600',
    gradient: 'from-blue-500/20 to-purple-500/20'
  },
  {
    name: 'Women',
    image: 'https://images.unsplash.com/photo-1581044777550-4cfa60707c03?w=600',
    gradient: 'from-pink-500/20 to-rose-500/20'
  },
  {
    name: 'Accessories',
    image: 'https://images.unsplash.com/photo-1523293182086-7651a899d37f?w=600',
    gradient: 'from-amber-500/20 to-orange-500/20'
  }
];

export function FeaturedCategories() {
  return (
    <div className="grid md:grid-cols-3 gap-6">
      {categories.map((category, index) => (
        <motion.div
          key={category.name}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1, duration: 0.5 }}
          className="group relative h-[300px] overflow-hidden rounded-2xl cursor-pointer"
        >
          <img
            src={category.image}
            alt={category.name}
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className={`absolute inset-0 bg-gradient-to-br ${category.gradient} group-hover:opacity-70 transition-opacity`} />
          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors" />
          
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
            <h3 className="text-3xl mb-2">{category.name}</h3>
            <motion.div
              className="flex items-center gap-2 text-sm opacity-0 group-hover:opacity-100"
              initial={{ x: -10 }}
              whileHover={{ x: 0 }}
            >
              Shop Now
              <ArrowRight className="h-4 w-4" />
            </motion.div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}