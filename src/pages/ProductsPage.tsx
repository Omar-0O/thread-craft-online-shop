
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';

interface Product {
  id: string;
  name: string;
  description: string;
  image: string;
  price: number;
  category: string;
}

const PRODUCTS: Product[] = [
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
  },
  {
    id: '5',
    name: 'Custom Embroidered Cap',
    description: 'Classic cap with your custom embroidery design.',
    image: 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9',
    price: 17.99,
    category: 'clothes'
  },
  {
    id: '6',
    name: 'Monogrammed Napkin Set',
    description: 'Set of 4 elegant napkins with custom monograms.',
    image: 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9',
    price: 32.99,
    category: 'linens'
  },
  {
    id: '7',
    name: 'Personalized Tote Bag',
    description: 'Sturdy canvas tote with custom embroidered design.',
    image: 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9',
    price: 27.99,
    category: 'gifts'
  },
  {
    id: '8',
    name: 'Custom Embroidered Bathrobe',
    description: 'Luxurious terry cloth bathrobe with monogram.',
    image: 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9',
    price: 59.99,
    category: 'linens'
  }
];

const CATEGORIES = [
  { id: 'all', name: 'All Products' },
  { id: 'clothes', name: 'Clothes' },
  { id: 'linens', name: 'Linens' },
  { id: 'gifts', name: 'Gifts' }
];

const ProductsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredProducts = selectedCategory === 'all'
    ? PRODUCTS
    : PRODUCTS.filter(product => product.category === selectedCategory);

  return (
    <Layout>
      {/* Hero Section */}
      <div className="bg-embroidery-lavender/30 py-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-embroidery-navy mb-4">Our Products</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Browse our selection of custom embroidery products. Each item can be personalized to your specifications.
          </p>
        </div>
      </div>

      {/* Product Listing */}
      <div className="container mx-auto px-4 py-12">
        {/* Category Filter */}
        <div className="mb-8 flex flex-wrap gap-2 justify-center">
          {CATEGORIES.map((category) => (
            <Button
              key={category.id}
              variant={selectedCategory === category.id ? "default" : "outline"}
              className={selectedCategory === category.id 
                ? "bg-embroidery-rose hover:bg-pink-400 border-embroidery-rose" 
                : "border-embroidery-navy text-embroidery-navy hover:bg-embroidery-navy hover:text-white"
              }
              onClick={() => setSelectedCategory(category.id)}
            >
              {category.name}
            </Button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
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

        {/* Empty State */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <h3 className="text-lg font-medium text-gray-700 mb-2">No products found</h3>
            <p className="text-gray-500">Try selecting a different category or check back later.</p>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default ProductsPage;
