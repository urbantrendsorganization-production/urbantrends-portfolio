import { Star } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { motion } from 'framer-motion';
import React from 'react';

const testimonials = [
  {
    name: 'Sarah Johnson',
    rating: 5,
    text: 'Amazing quality! The fabrics are premium and the fit is perfect. Will definitely shop here again.',
    image: 'https://images.unsplash.com/photo-1753161023962-665967602405?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXBweSUyMGN1c3RvbWVyJTIwc2hvcHBpbmd8ZW58MXx8fHwxNzYzNTQ4NzgwfDA&ixlib=rb-4.1.0&q=80&w=1080'
  },
  {
    name: 'Michael Chen',
    rating: 5,
    text: 'Best online shopping experience. Fast shipping and excellent customer service.',
    image: 'https://i.pravatar.cc/150?img=12'
  },
  {
    name: 'Emma Williams',
    rating: 5,
    text: 'Love the variety and style! Every piece I ordered exceeded my expectations.',
    image: 'https://i.pravatar.cc/150?img=45'
  }
];

export function TestimonialsSection() {
  return (
    <section className="py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl mb-2">What Our Customers Say</h2>
        <p className="text-muted-foreground">Join thousands of satisfied customers</p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-6">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={testimonial.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
          >
            <Card className="h-full">
              <CardContent className="p-6">
                <div className="flex gap-4 mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="h-12 w-12 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="text-sm">{testimonial.name}</h4>
                    <div className="flex gap-1 mt-1">
                      {Array.from({ length: testimonial.rating }).map((_, i) => (
                        <Star key={i} className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">{testimonial.text}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}