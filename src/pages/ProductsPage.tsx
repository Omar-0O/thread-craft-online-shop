
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
  },
  {
    id: '5',
    name: 'قبعة مطرزة مخصصة',
    description: 'قبعة كلاسيكية مع تصميم تطريز مخصص.',
    image: 'https://images.unsplash.com/photo-1521369909029-2afed882baee?auto=format&fit=crop&q=80',
    price: 17.99,
    category: 'clothes'
  },
  {
    id: '6',
    name: 'طقم مناديل مطرزة',
    description: 'مجموعة من 4 مناديل أنيقة مع مونوغرامات مخصصة.',
    image: 'https://images.unsplash.com/photo-1606333395857-f5069964519a?auto=format&fit=crop&q=80',
    price: 32.99,
    category: 'linens'
  },
  {
    id: '7',
    name: 'حقيبة مخصصة',
    description: 'حقيبة قماشية متينة مع تصميم مطرز مخصص.',
    image: 'https://images.unsplash.com/photo-1594223274512-ad4803739b7c?auto=format&fit=crop&q=80',
    price: 27.99,
    category: 'gifts'
  },
  {
    id: '8',
    name: 'روب استحمام مطرز',
    description: 'روب استحمام فاخر من نسيج التيري مع مونوغرام.',
    image: 'https://images.unsplash.com/photo-1605488686056-7714692352e7?auto=format&fit=crop&q=80',
    price: 59.99,
    category: 'linens'
  }
];

const CATEGORIES = [
  { id: 'all', name: 'جميع المنتجات' },
  { id: 'clothes', name: 'ملابس' },
  { id: 'linens', name: 'مفروشات' },
  { id: 'gifts', name: 'هدايا' }
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
          <h1 className="text-4xl font-bold text-embroidery-navy mb-4">منتجاتنا</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            تصفح مجموعتنا من منتجات التطريز المخصصة. يمكن تخصيص كل عنصر وفقًا لمواصفاتك.
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
                  <span className="font-medium text-embroidery-navy">{product.price.toFixed(2)} ر.س</span>
                  <Button asChild size="sm" className="bg-embroidery-rose hover:bg-pink-400 text-white">
                    <Link to={`/products/${product.id}`}>عرض</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Empty State */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <h3 className="text-lg font-medium text-gray-700 mb-2">لم يتم العثور على منتجات</h3>
            <p className="text-gray-500">حاول تحديد فئة مختلفة أو تحقق مرة أخرى لاحقًا.</p>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default ProductsPage;
