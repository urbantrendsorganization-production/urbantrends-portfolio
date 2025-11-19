import { Truck, RefreshCw, Shield, Headphones } from 'lucide-react';
import { motion } from 'framer-motion';
import React from 'react';

const benefits = [
  {
    icon: Truck,
    title: 'Free Shipping',
    description: 'On orders over $100'
  },
  {
    icon: RefreshCw,
    title: 'Easy Returns',
    description: '30-day return policy'
  },
  {
    icon: Shield,
    title: 'Secure Payment',
    description: '100% secure transactions'
  },
  {
    icon: Headphones,
    title: '24/7 Support',
    description: 'Dedicated customer service'
  }
];

export function BenefitsSection() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-12">
      {benefits.map((benefit, index) => (
        <motion.div
          key={benefit.title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1, duration: 0.5 }}
          className="flex flex-col items-center text-center gap-3"
        >
          <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
            <benefit.icon className="h-6 w-6 text-primary" />
          </div>
          <div>
            <h3 className="text-sm mb-1">{benefit.title}</h3>
            <p className="text-xs text-muted-foreground">{benefit.description}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
