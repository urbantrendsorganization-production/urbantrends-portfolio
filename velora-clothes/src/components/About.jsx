import React from 'react'
import ImageWithFallback from './figma/ImageWithFallback'

function About() {
    const collections = [
    {
      name: 'Urban Vibes',
      image: 'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1cmJhbiUyMHN0cmVldHdlYXJ8ZW58MXx8fHwxNzYzNDgwNjE1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      itemCount: 24,
    },
    {
      name: 'Nature Walks',
      image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvdXRkb29yJTIwc3RyZWV0d2VhcnxlbnwxfHx8MTc2MzQ4MDYxNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      itemCount: 18,
    },
    {
      name: 'Evening Elegance',
      image: 'https://images.unsplash.com/photo-1521334884684-d80222895322?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxldmVuaW5nJTIwc3RyZWV0d2VhcnxlbnwxfHx8MTc2MzQ4MDYxNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      itemCount: 30,
    },
    {
      name: 'Sporty Chic',
      image: 'https://images.unsplash.com/photo-1518609878373-06d740f60d8b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcG9ydHklMjBzdHJlZXR3ZWFyfGVufDF8fHx8MTc2MzQ4MDYxNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      itemCount: 15,
    },
  ];
  return (
    <section className="py-16 md:py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl text-white mb-4">
            Featured <span className="text-[#FF6B6B]">Collections</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Explore our curated collections designed for the modern lifestyle
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {collections.map((collection) => (
            <div
              key={collection.name}
              className="group relative h-80 overflow-hidden rounded-lg cursor-pointer"
            >
              <ImageWithFallback
                src={collection.image}
                alt={collection.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
              <div className="absolute inset-0 bg-[#FF6B6B]/0 group-hover:bg-[#FF6B6B]/10 transition-colors duration-300"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-white text-xl mb-1">{collection.name}</h3>
                <p className="text-gray-400 text-sm">{collection.itemCount} items</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default About