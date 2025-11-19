import { motion } from 'framer-motion';
import { Button } from './ui/button';
import React from 'react';

export function BrandStory() {
  return (
    <section className="py-16">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative h-[500px] rounded-2xl overflow-hidden"
        >
          <img
            src="https://images.unsplash.com/photo-1729487151777-b4be9098ecbb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXNoaW9uJTIwc3RvcmUlMjBpbnRlcmlvcnxlbnwxfHx8fDE3NjM0OTE1NzF8MA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Our Story"
            className="h-full w-full object-cover"
          />
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="space-y-6"
        >
          <div className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">
            Our Story
          </div>
          <h2 className="text-4xl">Crafting Style Since 2020</h2>
          <p className="text-muted-foreground">
            We believe that fashion is more than just clothing—it's a form of self-expression. 
            Our mission is to provide high-quality, sustainable fashion that empowers you to 
            look and feel your best.
          </p>
          <p className="text-muted-foreground">
            Every piece in our collection is carefully curated with attention to detail, 
            quality craftsmanship, and timeless design. We work directly with ethical 
            manufacturers to ensure fair practices and sustainable production.
          </p>
          <Button size="lg">
            Learn More About Us
          </Button>
        </motion.div>
      </div>
    </section>
  );
}