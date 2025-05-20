
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from './ui/button';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <h1 className="font-playfair text-2xl font-bold text-embroidery-navy">
              Stitch Perfect
            </h1>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link to="/" className="text-gray-700 hover:text-embroidery-rose transition-colors">
              Home
            </Link>
            <Link to="/products" className="text-gray-700 hover:text-embroidery-rose transition-colors">
              Products
            </Link>
            <Link to="/services" className="text-gray-700 hover:text-embroidery-rose transition-colors">
              Services
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-embroidery-rose transition-colors">
              About Us
            </Link>
            <Link to="/contact">
              <Button className="bg-embroidery-rose hover:bg-pink-400 text-white">
                Contact Us
              </Button>
            </Link>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-embroidery-rose focus:outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4">
            <nav className="flex flex-col space-y-4">
              <Link
                to="/"
                className="text-gray-700 hover:text-embroidery-rose transition-colors py-2"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/products"
                className="text-gray-700 hover:text-embroidery-rose transition-colors py-2"
                onClick={() => setIsOpen(false)}
              >
                Products
              </Link>
              <Link
                to="/services"
                className="text-gray-700 hover:text-embroidery-rose transition-colors py-2"
                onClick={() => setIsOpen(false)}
              >
                Services
              </Link>
              <Link
                to="/about"
                className="text-gray-700 hover:text-embroidery-rose transition-colors py-2"
                onClick={() => setIsOpen(false)}
              >
                About Us
              </Link>
              <Link
                to="/contact"
                className="text-gray-700 hover:text-embroidery-rose transition-colors py-2"
                onClick={() => setIsOpen(false)}
              >
                Contact Us
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
