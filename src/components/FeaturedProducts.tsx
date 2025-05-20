
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
    name: 'مناشف مخصصة',
    description: 'مناشف قطنية فاخرة مع تطريز مونوغرام مخصص.',
    image: 'https://images.unsplash.com/photo-1606333854273-60a4cdf35629?auto=format&fit=crop&q=80',
    price: 24.99,
    category: 'linens'
  },
  {
    id: '2',
    name: 'ملابس أطفال مطرزة',
    description: 'ملابس قطنية ناعمة للأطفال مع اسم وتصميم مخصص.',
    image: 'https://images.unsplash.com/photo-1600369671236-e74451ea2681?auto=format&fit=crop&q=80',
    price: 19.99,
    category: 'clothes'
  },
  {
    id: '3',
    name: 'قمصان بولو بشعار مخصص',
    description: 'قمصان بولو عالية الجودة مع شعار عملك التجاري.',
    image: 'https://images.unsplash.com/photo-1586363104862-3a5e2ab60d99?auto=format&fit=crop&q=80',
    price: 34.99,
    category: 'clothes'
  },
  {
    id: '4',
    name: 'وسادة مطرزة',
    description: 'وسادة زخرفية مع تطريز مخصص لإضافة لمسة من الأناقة.',
    image: 'https://images.unsplash.com/photo-1613953317771-874bf36dacd6?auto=format&fit=crop&q=80',
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
            منتجاتنا المميزة
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            اكتشف أكثر منتجاتنا المطرزة شعبية، المصنوعة يدويًا بعناية واهتمام بالتفاصيل.
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
                  <span className="font-medium text-embroidery-navy">{product.price.toFixed(2)} ج.م</span>
                  <Button asChild size="sm" className="bg-embroidery-rose hover:bg-pink-400 text-white">
                    <Link to={`/products/${product.id}`}>عرض</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-10">
          <Button asChild variant="outline" className="border-embroidery-navy text-embroidery-navy hover:bg-embroidery-navy hover:text-white">
            <Link to="/products">عرض جميع المنتجات</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
