import { Zap } from "lucide-react";
import React from "react";


export function Promobanner() {
  return (
    <section className="py-16 md:py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-[#FF6B6B] via-[#FF8A5B] to-[#FFB997] p-8 md:p-12">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: `repeating-linear-gradient(
                45deg,
                transparent,
                transparent 10px,
                rgba(0, 0, 0, 0.1) 10px,
                rgba(0, 0, 0, 0.1) 20px
              )`
            }}></div>
          </div>

          <div className="relative flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex-1 text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-2 mb-4">
                <Zap className="w-6 h-6 text-white fill-white" />
                <span className="text-white uppercase tracking-wider">Limited Edition</span>
              </div>
              <h2 className="text-3xl md:text-4xl text-white mb-3">
                Sunset Collection 2025
              </h2>
              <p className="text-white/90 text-lg mb-6 md:mb-0">
                Premium pieces inspired by golden hour. Exclusive designs, limited availability.
              </p>
            </div>
            <div className="flex-shrink-0">
              <button className="bg-white text-[#FF6B6B] px-8 py-4 rounded-full hover:bg-gray-100 transition-all shadow-xl">
                Shop Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}