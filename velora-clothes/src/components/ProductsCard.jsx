import React, { useState } from 'react'
import { ShoppingCart } from 'lucide-react'
import ImageWithFallback from './figma/ImageWithFallback'


function ProductsCard({ name, image, price, soldOut=false }) {
    const [isHovered, setIsHovered] = useState(false)
  return (
    <div
      className="group relative bg-gray-900 rounded-lg overflow-hidden border border-gray-800 hover:border-[#FF6B6B] transition-all duration-300"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Product Image */}
      <div className="relative aspect-square overflow-hidden bg-gray-800">
        <ImageWithFallback
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        
        {/* Sold Out Overlay */}
        {soldOut && (
          <div className="absolute inset-0 bg-black/80 flex items-center justify-center">
            <span className="text-white px-6 py-2 border-2 border-white rounded-full">
              SOLD OUT
            </span>
          </div>
        )}

        {/* Quick Add Button - Shows on Hover */}
        {!soldOut && (
          <div
            className={`absolute inset-x-0 bottom-0 p-4 transition-all duration-300 ${
              isHovered ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
            }`}
          >
            <button className="w-full bg-gradient-to-r from-[#FF6B6B] to-[#FF8A5B] text-white py-3 rounded-full hover:shadow-lg transition-all flex items-center justify-center gap-2 shadow-lg">
              <ShoppingCart className="w-4 h-4" />
              Quick Add
            </button>
          </div>
        )}
      </div>

      {/* Product Info */}
      <div className="p-4">
        <h3 className="text-white mb-2">{name}</h3>
        <div className="flex items-center justify-between">
          <span className="text-[#FF6B6B]">${price}</span>
          {!soldOut && (
            <button className="text-gray-400 hover:text-[#FF6B6B] transition-colors">
              <ShoppingCart className="w-5 h-5" />
            </button>
          )}
        </div>
      </div>

      {/* Glow effect on hover */}
      <div
        className={`absolute inset-0 pointer-events-none transition-opacity duration-300 ${
          isHovered && !soldOut ? "opacity-100" : "opacity-0"
        }`}
        style={{
          boxShadow: "inset 0 0 20px rgba(255, 107, 107, 0.2)",
        }}
      ></div>
    </div>
  )
}

export default ProductsCard