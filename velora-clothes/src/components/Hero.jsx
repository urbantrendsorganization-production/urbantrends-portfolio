import React from 'react'
import { ArrowRight } from 'lucide-react'
import ImageWithFallback from './figma/ImageWithFallback'


function Hero() {
  return (
    <div className="relative h-[600px] md:h-[700px] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1653671737835-9a37660610c2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmdXR1cmlzdGljJTIwc3RyZWV0d2VhciUyMG1vZGVsfGVufDF8fHx8MTc2MzQ4MDYxNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Hero Background"
          className="w-full h-full object-cover"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
        <div className="max-w-2xl">
          <h1 className="text-5xl sm:text-6xl md:text-7xl text-white mb-6">
            Elevate Your <span className="text-[#FF6B6B]">Style</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 mb-8 max-w-lg">
            Experience fashion that transcends trends. Curated collections that blend 
            timeless elegance with contemporary edge.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-gradient-to-r from-[#FF6B6B] to-[#FF8A5B] text-white px-8 py-3 rounded-full hover:shadow-lg hover:shadow-[#FF6B6B]/50 transition-all flex items-center justify-center gap-2 group">
              Shop Collection
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="border-2 border-[#FF6B6B] text-[#FF6B6B] px-8 py-3 rounded-full hover:bg-[#FF6B6B] hover:text-white transition-all flex items-center justify-center gap-2">
              Discover More
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero