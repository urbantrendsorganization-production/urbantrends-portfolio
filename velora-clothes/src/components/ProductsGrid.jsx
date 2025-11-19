import React from 'react'
import ProductCard from './ProductsCard.jsx'

const products = [
  {
      id: 1,
      name: "Tech Utility Jacket",
      price: 189,
      image: "https://images.unsplash.com/photo-1650612717712-c753daaa58f7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxibGFjayUyMHRlY2glMjBqYWNrZXR8ZW58MXx8fHwxNzYzNDgwNjE1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      id: 2,
      name: "Urban Hoodie Pro",
      price: 129,
      image: "https://images.unsplash.com/photo-1760126130341-fa58ff0750eb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHJlZXR3ZWFyJTIwaG9vZGllJTIwdXJiYW58ZW58MXx8fHwxNzYzNDYyNzgxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      id: 3,
      name: "Minimal Sneakers X1",
      price: 159,
      image: "https://images.unsplash.com/photo-1620989928625-08536e746255?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwc25lYWtlcnN8ZW58MXx8fHwxNzYzNDA5Nzg0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      soldOut: true,
    },
    {
      id: 4,
      name: "Cargo Tech Pants",
      price: 149,
      image: "https://images.unsplash.com/photo-1761797560485-3484d5e17ca9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNoJTIwY2FyZ28lMjBwYW50c3xlbnwxfHx8fDE3NjM0ODA2MTZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      id: 5,
      name: "Urban Tech Backpack",
      price: 199,
      image: "https://images.unsplash.com/photo-1572981879732-88842f0a8260?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBiYWNrcGFjayUyMHVyYmFufGVufDF8fHx8MTc2MzQ4MDYxNnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      id: 6,
      name: "Essential Tee",
      price: 59,
      image: "https://images.unsplash.com/photo-1542219550-b1b13a6a29eb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsJTIwdC1zaGlydHxlbnwxfHx8fDE3NjM0ODA2MTd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      id: 7,
      name: "Techwear Vest",
      price: 139,
      image: "https://images.unsplash.com/photo-1646178071012-7bf3efe0ddfa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxibGFjayUyMHRlY2h3ZWFyJTIwb3V0Zml0fGVufDF8fHx8MTc2MzQ4MDYxN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      id: 8,
      name: "Urban Windbreaker",
      price: 119,
      image: "https://images.unsplash.com/photo-1653671737835-9a37660610c2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmdXR1cmlzdGljJTIwc3RyZWV0d2VhciUyMG1vZGVsfGVufDF8fHx8MTc2MzQ4MDYxNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
];

function ProductsGrid() {
  return (
    <section className="py-16 md:py-20 bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl text-white mb-4">
            Top <span className="text-[#FF6B6B]">Products</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Handpicked essentials that define contemporary elegance
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              name={product.name}
              price={product.price}
              image={product.image}
              soldOut={product.soldOut}
            />
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="border-2 border-[#FF6B6B] text-[#FF6B6B] px-8 py-3 rounded-full hover:bg-gradient-to-r hover:from-[#FF6B6B] hover:to-[#FF8A5B] hover:text-white transition-all">
            View All Products
          </button>
        </div>
      </div>
    </section>
  )
}

export default ProductsGrid