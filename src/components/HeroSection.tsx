
import React from 'react';
import { Button } from './ui/button';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <div className="relative bg-embroidery-cream">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="order-2 md:order-1">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-embroidery-navy">
              Beautiful Custom <br />
              <span className="text-embroidery-rose">Embroidery</span>
            </h1>
            <p className="text-lg mb-8 text-gray-700">
              Transform your clothes, linens, and gifts with our handcrafted embroidery services. We bring your ideas to life with precision and care.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild className="bg-embroidery-rose hover:bg-pink-400 text-white px-8 py-6">
                <Link to="/products">Browse Products</Link>
              </Button>
              <Button asChild variant="outline" className="border-embroidery-navy text-embroidery-navy hover:bg-embroidery-navy hover:text-white px-8 py-6">
                <Link to="/services">Our Services</Link>
              </Button>
            </div>
          </div>
          <div className="order-1 md:order-2">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1582562124811-c09040d0a901"
                alt="Embroidery Art"
                className="rounded-lg shadow-lg w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-embroidery-rose/20 to-embroidery-lavender/20 rounded-lg"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
