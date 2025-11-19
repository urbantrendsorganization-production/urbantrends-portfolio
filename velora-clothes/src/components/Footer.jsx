import { Instagram, Twitter, Facebook, Youtube, Mail } from "lucide-react";
import React from "react";


function Footer() {
  return (
    <footer className="bg-black border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <div>
            <h3 className="text-white mb-4">
              VELO<span className="text-[#FF6B6B]">RA</span>
            </h3>
            <p className="text-gray-400 mb-6">
              Redefining contemporary fashion with timeless elegance and premium craftsmanship.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-gray-900 flex items-center justify-center text-gray-400 hover:bg-gradient-to-br hover:from-[#FF6B6B] hover:to-[#FF8A5B] hover:text-white transition-all"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-gray-900 flex items-center justify-center text-gray-400 hover:bg-gradient-to-br hover:from-[#FF6B6B] hover:to-[#FF8A5B] hover:text-white transition-all"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-gray-900 flex items-center justify-center text-gray-400 hover:bg-gradient-to-br hover:from-[#FF6B6B] hover:to-[#FF8A5B] hover:text-white transition-all"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-gray-900 flex items-center justify-center text-gray-400 hover:bg-gradient-to-br hover:from-[#FF6B6B] hover:to-[#FF8A5B] hover:text-white transition-all"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Shop Links */}
          <div>
            <h4 className="text-white mb-4">Shop</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-400 hover:text-[#FF6B6B] transition-colors">
                  New Arrivals
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-[#FF6B6B] transition-colors">
                  Streetwear
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-[#FF6B6B] transition-colors">
                  Techwear
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-[#FF6B6B] transition-colors">
                  Accessories
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-[#FF6B6B] transition-colors">
                  Sale
                </a>
              </li>
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h4 className="text-white mb-4">Support</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-400 hover:text-[#FF6B6B] transition-colors">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-[#FF6B6B] transition-colors">
                  Shipping & Returns
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-[#FF6B6B] transition-colors">
                  Size Guide
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-[#FF6B6B] transition-colors">
                  FAQs
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-[#FF6B6B] transition-colors">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-white mb-4">Stay Updated</h4>
            <p className="text-gray-400 mb-4">
              Subscribe to get special offers and exclusive drops
            </p>
            <div className="flex flex-col gap-3">
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 bg-gray-900 text-white px-4 py-2 rounded-full border border-gray-800 focus:border-[#FF6B6B] outline-none transition-colors"
                />
              </div>
              <button className="bg-gradient-to-r from-[#FF6B6B] to-[#FF8A5B] text-white px-6 py-2 rounded-full hover:shadow-lg transition-all flex items-center justify-center gap-2">
                <Mail className="w-4 h-4" />
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">
              © 2025 Velora. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-gray-500 hover:text-[#FF6B6B] transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-gray-500 hover:text-[#FF6B6B] transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-500 hover:text-[#FF6B6B] transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
