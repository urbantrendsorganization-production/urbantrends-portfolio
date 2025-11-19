import React, { useState } from 'react'
import Header from './components/Header'
import Carrousel from './components/Carrousel'
import { motion } from 'framer-motion'
import { FeaturedCategories } from './components/FeaturedCategories'
import { categories } from './data/products'
import { Button } from '@/components/ui/button'
import ProductsCard from './components/ProductsCard'
import { products } from './data/products'
import { BenefitsSection } from './components/BenefitsSections'
import { PromoBanner } from './components/PromoBanner'
import { BrandStory } from './components/BrandStory'
import { TestimonialsSection } from './components/TestimonialsSection'
import { NewsletterSection } from './components/NewsletterSection'
import { Toaster } from 'sonner'
import { Footer } from './components/Footer'

function App() {
  const [isProductDialogOpen, setIsProductDialogOpen] = useState(false);

  const openProductDialog = () => {
    setIsProductDialogOpen(true);
  };

  const closeProductDialog = () => {
    setIsProductDialogOpen(false);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="px-4 py-8">
        {/* center content and constrain width for responsiveness */}
        <div className="max-w-6xl mx-auto space-y-16">
          <Carrousel />

          <BenefitsSection />

          <PromoBanner />

          {/* featured categories */}
          <section>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center mb-8"
            >
              <h2 className="text-3xl mb-2">Shop by Category</h2>
              <p className="text-muted-foreground">Discover your perfect style</p>
            </motion.div>
            <FeaturedCategories />
          </section>

          {/* Products Section */}
          <section>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center mb-8"
            >
              <h2 className="text-3xl mb-2">Our Collection</h2>
              <p className="text-muted-foreground">Curated pieces for every occasion</p>
            </motion.div>
          </section>

          {/* Category Filter - centered and responsive */}
          <div className="flex flex-wrap justify-center gap-2 mb-8 overflow-x-auto pb-2">
            {categories.map((category) => (
              <motion.div
                key={category}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  variant="outline"
                  size="sm"
                  className="whitespace-nowrap text-sm sm:text-base"
                >
                  {category}
                </Button>
              </motion.div>
            ))}
          </div>

          {/* products grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {/* ProductCard components will go here */}
            {products.map((product) => (
              <ProductsCard key={product.id} product={product} onQuickView= {(product) => {openProductDialog();}} />
            ))}
          </div>

          <BrandStory />

          <TestimonialsSection />

          <NewsletterSection />

          <Footer />
          <Toaster />
        </div>
      </main>
    </div>
  )
}

export default App