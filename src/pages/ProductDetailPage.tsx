
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Layout from '../components/Layout';
import { Button } from '../components/ui/button';

interface Product {
  id: string;
  name: string;
  description: string;
  image: string;
  price: number;
  category: string;
  details?: string;
  options?: string[];
}

const PRODUCTS: Record<string, Product> = {
  '1': {
    id: '1',
    name: 'مناشف مخصصة',
    description: 'مناشف قطنية فاخرة مع تطريز مونوغرام مخصص.',
    image: 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9',
    price: 24.99,
    category: 'linens',
    details: 'مناشف اليد الفاخرة الخاصة بنا مصنوعة من القطن المصري 100٪ لنعومة وامتصاص مثاليين. يمكن تخصيص كل منشفة بالمونوغرام أو الاسم أو التصميم المخصص الخاص بك بمجموعة متنوعة من ألوان الخيوط.',
    options: ['نمط المونوغرام (كلاسيكي، حديث، سكريبت)', 'اختيار لون الخيط', 'مجموعة من 2 أو 4 أو 6 مناشف']
  },
  '2': {
    id: '2',
    name: 'ملابس أطفال مطرزة',
    description: 'ملابس قطنية ناعمة للأطفال مع اسم وتصميم مخصص.',
    image: 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9',
    price: 19.99,
    category: 'clothes',
    details: 'ملابس الأطفال اللطيفة هذه مصنوعة من القطن الناعم غير المسبب للحساسية واللطيف على بشرة الطفل. متوفرة بمقاسات 0-3 أشهر، 3-6 أشهر، و 6-12 شهرًا. يمكن تخصيصها باسم الطفل أو تاريخ الميلاد أو تصميم لطيف.',
    options: ['خيارات المقاسات', 'خيارات الألوان (أبيض، أزرق فاتح، وردي فاتح)', 'اختيار الخط للاسم']
  },
};

const ProductDetailPage = () => {
  const { productId } = useParams<{ productId: string }>();
  const product = PRODUCTS[productId || ''] || PRODUCTS['1']; // Fallback to product 1 if not found

  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <div className="mb-4">
          <Link to="/products" className="text-embroidery-rose hover:underline">
            ← العودة إلى المنتجات
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Product Image */}
          <div className="rounded-lg overflow-hidden shadow-lg">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Product Details */}
          <div>
            <h1 className="text-3xl font-bold text-embroidery-navy mb-2">{product.name}</h1>
            <p className="text-2xl text-embroidery-rose mb-4">{product.price.toFixed(2)} ر.س</p>
            <p className="text-gray-600 mb-6">{product.description}</p>
            
            {product.details && (
              <div className="mb-6">
                <h2 className="font-bold text-lg mb-2">تفاصيل المنتج</h2>
                <p className="text-gray-600">{product.details}</p>
              </div>
            )}

            {product.options && product.options.length > 0 && (
              <div className="mb-6">
                <h2 className="font-bold text-lg mb-2">خيارات التخصيص</h2>
                <ul className="list-disc pr-5 text-gray-600">
                  {product.options.map((option, index) => (
                    <li key={index}>{option}</li>
                  ))}
                </ul>
              </div>
            )}

            <div className="space-y-4">
              <Button asChild className="w-full bg-embroidery-rose hover:bg-pink-400 text-white py-6">
                <Link to="/contact">طلب عرض سعر</Link>
              </Button>
              <Button asChild variant="outline" className="w-full border-embroidery-navy text-embroidery-navy hover:bg-embroidery-navy hover:text-white py-6">
                <Link to="/services">تعرف على عملية التطريز لدينا</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ProductDetailPage;
