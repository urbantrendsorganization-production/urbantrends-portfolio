import React from 'react'
import { Star } from 'lucide-react'


function Testimonials() {
    const testimonials = [
        {
      id: 1,
      name: "Alex Chen",
      role: "Fashion Enthusiast",
      comment: "Velora has completely transformed my wardrobe. The quality and style are unmatched. Every piece feels special.",
      rating: 5,
    },
    {
      id: 2,
      name: "Jordan Mitchell",
      role: "Fashion Blogger",
      comment: "Finally found a brand that truly understands elegant streetwear. The designs are timeless and the quality is exceptional.",
      rating: 5,
    },
    {
      id: 3,
      name: "Sam Rivera",
      role: "Creative Director",
      comment: "Velora is my go-to for sophisticated pieces that stand out. The attention to detail and craftsmanship is impressive.",
      rating: 5,
    },
    ]
  return (
    <section className="py-16 md:py-20 bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl text-white mb-4">
            What Our <span className="text-[#FF6B6B]">Customers Say</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Join thousands of satisfied customers who have elevated their style
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-gray-900 border border-gray-800 rounded-lg p-6 hover:border-[#FF6B6B] transition-all duration-300"
            >
              {/* Rating Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 text-[#FF6B6B] fill-[#FF6B6B]"
                  />
                ))}
              </div>

              {/* Comment */}
              <p className="text-gray-300 mb-6">
                "{testimonial.comment}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#FF6B6B] to-[#FF8A5B] flex items-center justify-center">
                  <span className="text-white">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <h4 className="text-white">{testimonial.name}</h4>
                  <p className="text-gray-500 text-sm">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials