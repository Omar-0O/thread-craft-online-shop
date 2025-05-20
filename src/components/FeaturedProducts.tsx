
import React from 'react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { Link } from 'react-router-dom';

interface Product {
  id: string;
  name: string;
  description: string;
  image: string;
  price: number;
  category: string;
}

const FEATURED_PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Personalized Hand Towels',
    description: 'Luxurious cotton towels with custom monogram embroidery.',
    image: 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9',
    price: 24.99,
    category: 'linens'
  },
  {
    id: '2',
    name: 'Embroidered Baby Onesie',
    description: 'Soft cotton onesie with custom name and design.',
    image: 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9',
    price: 19.99,
    category: 'clothes'
  },
  {
    id: '3',
    name: 'Custom Logo Polo Shirts',
    description: 'Premium quality polo shirts with your business logo.',
    image: 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9',
    price: 34.99,
    category: 'clothes'
  },
  {
    id: '4',
    name: 'Embroidered Throw Pillow',
    description: 'Decorative pillow with custom embroidery design.',
    image: 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9',
    price: 29.99,
    category: 'gifts'
  }
];

const FeaturedProducts = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-embroidery-navy mb-4">
            Our Featured Products
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our most popular embroidered items, handcrafted with care and attention to detail.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {FEATURED_PRODUCTS.map((product) => (
            <Card key={product.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="h-48 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <CardContent className="p-4">
                <div className="mb-4">
                  <h3 className="font-playfair text-lg font-medium text-embroidery-navy">{product.name}</h3>
                  <p className="text-gray-500 text-sm">{product.description}</p>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-medium text-embroidery-navy">${product.price.toFixed(2)}</span>
                  <Button asChild size="sm" className="bg-embroidery-rose hover:bg-pink-400 text-white">
                    <Link to={`/products/${product.id}`}>View</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-10">
          <Button asChild variant="outline" className="border-embroidery-navy text-embroidery-navy hover:bg-embroidery-navy hover:text-white">
            <Link to="/products">View All Products</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
