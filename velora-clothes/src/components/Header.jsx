import React, { useState } from 'react'
import { Search, ShoppingCart, User, Menu, X } from "lucide-react";

function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);


    return (
        <nav className="sticky top-0 z-50 bg-gray-950/95 backdrop-blur-sm border-b border-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <div className="flex-shrink-0">
                        <h1 className="text-white tracking-tight">
                            VELO<span className="text-[#FF6B6B]">RA</span>
                        </h1>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-8">
                        <a href="#" className="text-gray-300 hover:text-[#FF6B6B] transition-colors">
                            New Arrivals
                        </a>
                        <a href="#" className="text-gray-300 hover:text-[#FF6B6B] transition-colors">
                            Collections
                        </a>
                        <a href="#" className="text-gray-300 hover:text-[#FF6B6B] transition-colors">
                            Sale
                        </a>
                        <a href="#" className="text-gray-300 hover:text-[#FF6B6B] transition-colors">
                            About
                        </a>
                    </div>

                    {/* Search, Cart, User */}
                    <div className="flex items-center space-x-4">
                        {/* Search Bar - Hidden on mobile */}
                        <div className="hidden lg:flex items-center bg-gray-900 rounded-full px-4 py-2 border border-gray-800">
                            <Search className="w-4 h-4 text-gray-400 mr-2" />
                            <input
                                type="text"
                                placeholder="Search products..."
                                className="bg-transparent text-white text-sm outline-none w-48"
                            />
                        </div>

                        {/* Icons */}
                        <button className="text-gray-300 hover:text-[#FF6B6B] transition-colors lg:hidden">
                            <Search className="w-5 h-5" />
                        </button>
                        <button className="text-gray-300 hover:text-[#FF6B6B] transition-colors relative">
                            <ShoppingCart className="w-5 h-5" />
                            <span className="absolute -top-2 -right-2 bg-[#FF6B6B] text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                                3
                            </span>
                        </button>
                        <button className="text-gray-300 hover:text-[#FF6B6B] transition-colors">
                            <User className="w-5 h-5" />
                        </button>

                        {/* Mobile menu button */}
                        <button
                            className="md:hidden text-gray-300 hover:text-[#FF6B6B] transition-colors"
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        >
                            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>
                </div>

                {/* Mobile Navigation */}
                {mobileMenuOpen && (
                    <div className="md:hidden py-4 border-t border-gray-800">
                        <div className="flex text-center flex-col space-y-3">
                            <a href="#" className="text-gray-300 hover:text-[#FF6B6B] transition-colors">
                                New Arrivals
                            </a>
                            <a href="#" className="text-gray-300 hover:text-[#FF6B6B] transition-colors">
                                Collections
                            </a>
                            <a href="#" className="text-gray-300 hover:text-[#FF6B6B] transition-colors">
                                Sale
                            </a>
                            <a href="#" className="text-gray-300 hover:text-[#FF6B6B] transition-colors">
                                About
                            </a>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    )
}

export default Header