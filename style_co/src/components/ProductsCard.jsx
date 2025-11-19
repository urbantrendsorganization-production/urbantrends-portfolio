import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Heart, Eye, Plus } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { cn } from '@/lib/utils'
import { products } from '@/data/products'

function ProductsCard({ product, isWishlisted, onToggleWishlist, onAddToCart, onQuickView }) {
    const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <Card 
        className="group overflow-hidden border-0 shadow-none"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <CardContent className="p-0">
          <div className="relative overflow-hidden rounded-lg aspect-[3/4] bg-muted">
            <motion.img
              src={products.image}
              alt={products.name}
              className="object-cover w-full h-full"
              animate={{ scale: isHovered ? 1.08 : 1 }}
              transition={{ duration: 0.4 }}
            />
            
            {/* Overlay with gradient */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0"
              initial={{ opacity: 0 }}
              animate={{ opacity: isHovered ? 1 : 0 }}
              transition={{ duration: 0.3 }}
            />

            {/* Wishlist Button */}
            <Button
              variant="ghost"
              size="icon"
              className={`absolute top-2 right-2 bg-white/90 hover:bg-white backdrop-blur-sm transition-all ${
                isWishlisted ? 'text-red-500' : ''
              }`}
              onClick={(e) => {
                e.stopPropagation();
                // onToggleWishlist(products.id);
              }}
            >
              <motion.div
                animate={{ scale: isWishlisted ? [1, 1.3, 1] : 1 }}
                transition={{ duration: 0.3 }}
              >
                <Heart className={`h-4 w-4 ${isWishlisted ? 'fill-current' : ''}`} />
              </motion.div>
            </Button>

            {/* Action Buttons */}
            <motion.div
              className="absolute bottom-4 left-4 right-4 flex gap-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 20 }}
              transition={{ duration: 0.3 }}
            >
              <Button
                size="sm"
                className="flex-1"
                onClick={(e) => {
                  e.stopPropagation();
                  onQuickView(product);
                }}
              >
                <Eye className="h-4 w-4 mr-2" />
                Quick View
              </Button>
              <Button
                size="icon"
                onClick={(e) => {
                  e.stopPropagation();
                  onAddToCart(product);
                }}
              >
                <Plus className="h-4 w-4" />
              </Button>
            </motion.div>
          </div>
          
          <div className="mt-4 space-y-1">
            <h3 className="text-sm">{products.name}</h3>
            <p className="text-sm text-muted-foreground">{products.category}</p>
            {/* <p className="text-sm">${products.price.toFixed(2)}</p> */}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}

export default ProductsCard