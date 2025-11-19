import React, { useState } from 'react'
import ProductsCard from './ProductsCard';
import { products } from '@/data/products';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Heart, Plus, Minus } from 'lucide-react'
import { Badge } from '@/components/ui/badge'

function ProductsDialog({ isOpen, onClose, product, isWishlisted, onToggleWishlist, onAddToCart }) {
    const [selectedSize, setSelectedSize] = useState;
  const [selectedColor, setSelectedColor] = useState;

  const [quantity, setQuantity] = useState(1);

  if (!products) return null;

  const handleAddToCart = () => {
    if (selectedSize && selectedColor) {
      onAddToCart(products, selectedSize, selectedColor, quantity);
      setSelectedSize('');
      setSelectedColor('');
      setQuantity(1);
      onClose();
    }
  };
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogDescription className="sr-only">
          Product details for {product.name}
        </DialogDescription>
        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            className="relative aspect-[3/4] overflow-hidden rounded-lg bg-muted"
          >
            <img
              src={product.image}
              alt={product.name}
              className="object-cover w-full h-full"
            />
            <Button
              variant="ghost"
              size="icon"
              className={`absolute top-4 right-4 bg-white/90 hover:bg-white backdrop-blur-sm ${
                isWishlisted ? 'text-red-500' : ''
              }`}
              onClick={() => onToggleWishlist(product.id)}
            >
              <Heart className={`h-5 w-5 ${isWishlisted ? 'fill-current' : ''}`} />
            </Button>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="flex flex-col gap-6"
          >
            <DialogHeader>
              <Badge className="w-fit mb-2">{product.category}</Badge>
              <DialogTitle className="text-3xl">{product.name}</DialogTitle>
              <p className="text-3xl">${product.price.toFixed(2)}</p>
            </DialogHeader>

            <p className="text-muted-foreground">{product.description}</p>

            <div className="space-y-4">
              <div>
                <p className="text-sm mb-3">Select Size</p>
                <div className="flex flex-wrap gap-2">
                  {product.sizes.map((size) => (
                    <motion.div
                      key={size}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Badge
                        variant={selectedSize === size ? 'default' : 'outline'}
                        className="cursor-pointer px-4 py-2 text-sm"
                        onClick={() => setSelectedSize(size)}
                      >
                        {size}
                      </Badge>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div>
                <p className="text-sm mb-3">Select Color</p>
                <div className="flex flex-wrap gap-2">
                  {product.colors.map((color) => (
                    <motion.div
                      key={color}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Badge
                        variant={selectedColor === color ? 'default' : 'outline'}
                        className="cursor-pointer px-4 py-2 text-sm"
                        onClick={() => setSelectedColor(color)}
                      >
                        {color}
                      </Badge>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div>
                <p className="text-sm mb-3">Quantity</p>
                <div className="flex items-center gap-3">
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  >
                    <Minus className="h-4 w-4" />
                  </Button>
                  <span className="text-lg w-12 text-center">{quantity}</span>
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => setQuantity(quantity + 1)}
                  >
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>

            <Button
              size="lg"
              className="w-full mt-auto"
              onClick={handleAddToCart}
              disabled={!selectedSize || !selectedColor}
            >
              Add to Cart - ${(product.price * quantity).toFixed(2)}
            </Button>
          </motion.div>
        </div>
      </DialogContent>
    </Dialog>
  )
}

export default ProductsDialog