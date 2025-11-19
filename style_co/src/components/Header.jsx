import React from 'react'
import { Button } from '@/components/ui/button'
import { ShoppingCart, Search, Menu } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import logo from '../assets/logo.png'


function Header({ cartItemsCount, onCartClick }) {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-26 items-center justify-between px-4">
        <div className="flex items-center gap-6">
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-5 w-5" />
          </Button>
          <img src={logo} alt="STYLE CO. Logo" className="h-40 mt-4" />
          <nav className="hidden md:flex gap-6">
            <a href="#" className="text-sm hover:underline">New Arrivals</a>
            <a href="#" className="text-sm hover:underline">Men</a>
            <a href="#" className="text-sm hover:underline">Women</a>
            <a href="#" className="text-sm hover:underline">Sale</a>
          </nav>
        </div>
        
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon">
            <Search className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" className="relative" onClick={onCartClick}>
            <ShoppingCart className="h-5 w-5" />
            {cartItemsCount > 0 && (
              <Badge className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0">
                {cartItemsCount}
              </Badge>
            )}
          </Button>
        </div>
      </div>
    </header>
  )
}

export default Header