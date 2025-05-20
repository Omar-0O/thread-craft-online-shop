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
    image: 'https://images.unsplash.com/photo-1606333854273-60a4cdf35629?auto=format&fit=crop&q=80',
    price: 24.99,
    category: 'linens',
    details: 'مناشف اليد الفاخرة الخاصة بنا مصنوعة من القطن المصري 100٪ لنعومة وامتصاص مثاليين. يمكن تخصيص كل منشفة بالمونوغرام أو الاسم أو التصميم المخصص الخاص بك بمجموعة متنوعة من ألوان الخيوط.',
    options: ['نمط المونوغرام (كلاسيكي، حديث، سكريبت)', 'اختيار لون الخيط', 'مجموعة من 2 أو 4 أو 6 مناشف']
  },
  '2': {
    id: '2',
    name: 'ملابس أطفال مطرزة',
    description: 'ملابس قطنية ناعمة للأطفال مع اسم وتصميم مخصص.',
    image: 'https://images.unsplash.com/photo-1600369671236-e74451ea2681?auto=format&fit=crop&q=80',
    price: 19.99,
    category: 'clothes',
    details: 'ملابس الأطفال اللطيفة هذه مصنوعة من القطن الناعم غير المسبب للحساسية واللطيف على بشرة الطفل. متوفرة بمقاسات 0-3 أشهر، 3-6 أشهر، و 6-12 شهرًا. يمكن تخصيصها باسم الطفل أو تاريخ الميلاد أو تصميم لطيف.',
    options: ['خيارات المقاسات', 'خيارات الألوان (أبيض، أزرق فاتح، وردي فاتح)', 'اختيار الخط للاسم']
  },
  '3': {
    id: '3',
    name: 'قمصان بولو بشعار مخصص',
    description: 'قمصان بولو عالية الجودة مع شعار عملك التجاري.',
    image: 'https://images.unsplash.com/photo-1586363104862-3a5e2ab60d99?auto=format&fit=crop&q=80',
    price: 34.99,
    category: 'clothes',
    details: 'قمصان البولو الخاصة بنا مصنوعة من القطن عالي الجودة وتوفر مظهرًا احترافيًا لفريق عملك. يمكن تخصيص كل قميص بشعار شركتك المطرز أو اسمها، مثالية للموظفين أو الفعاليات التسويقية.',
    options: ['خيارات المقاسات (S، M， L， XL， XXL)', 'ألوان متعددة متاحة', 'خيارات موقع الشعار (الصدر، الكم، الظهر)']
  },
  '4': {
    id: '4',
    name: 'وسادة مطرزة',
    description: 'وسادة زخرفية مع تطريز مخصص لإضافة لمسة من الأناقة.',
    image: 'https://images.unsplash.com/photo-1613953317771-874bf36dacd6?auto=format&fit=crop&q=80',
    price: 29.99,
    category: 'gifts',
    details: 'الوسائد الزخرفية المطرزة لدينا تضيف لمسة من الأناقة إلى أي مساحة معيشة. مصنوعة من القماش عالي الجودة ومتوفرة في مجموعة متنوعة من الألوان، مثالية كهدية أو لتزيين منزلك.',
    options: ['أحجام متعددة متاحة', 'خيارات النسيج والألوان', 'تصاميم تطريز مخصصة أو جاهزة']
  },
  '5': {
    id: '5',
    name: 'قبعة مطرزة مخصصة',
    description: 'قبعة كلاسيكية مع تصميم تطريز مخصص.',
    image: 'https://images.unsplash.com/photo-1521369909029-2afed882baee?auto=format&fit=crop&q=80',
    price: 17.99,
    category: 'clothes',
    details: 'قبعاتنا المطرزة المخصصة مثالية للفرق الرياضية أو الشركات أو الهدايا الشخصية. مصنوعة من مواد متينة ومريحة، ويمكن تخصيصها بأي تصميم تفضله.',
    options: ['ألوان متعددة للقبعة', 'خيارات أسلوب التطريز', 'إمكانية إضافة نص أو شعار أو تصميم']
  },
  '6': {
    id: '6',
    name: 'طقم مناديل مطرزة',
    description: 'مجموعة من 4 مناديل أنيقة مع مونوغرامات مخصصة.',
    image: 'https://images.unsplash.com/photo-1606333395857-f5069964519a?auto=format&fit=crop&q=80',
    price: 32.99,
    category: 'linens',
    details: 'مجموعة المناديل المطرزة الأنيقة الخاصة بنا مصنوعة من القطن الناعم عالي الجودة. كل منديل مزين بمونوغرام مخصص أو تصميم من اختيارك. مثالية للمناسبات الخاصة أو كهدية راقية.',
    options: ['خيارات لون المنديل (أبيض، عاجي، رمادي فاتح)', 'أنماط المونوغرام المختلفة', 'إمكانية إضافة تواريخ أو أحرف أولى']
  },
  '7': {
    id: '7',
    name: 'حقيبة مخصصة',
    description: 'حقيبة قماشية متينة مع تصميم مطرز مخصص.',
    image: 'https://images.unsplash.com/photo-1594223274512-ad4803739b7c?auto=format&fit=crop&q=80',
    price: 27.99,
    category: 'gifts',
    details: 'حقائبنا القماشية المطرزة مصنوعة من قماش قطني سميك ومتين. مثالية للتسوق أو كحقائب هدايا أو للاستخدام اليومي. يمكن تخصيصها بأي تصميم أو شعار أو نص تفضله.',
    options: ['ألوان متعددة للحقيبة', 'خيارات حجم الحقيبة', 'تصاميم تطريز مختلفة']
  },
  '8': {
    id: '8',
    name: 'روب استحمام مطرز',
    description: 'روب استحمام فاخر من نسيج التيري مع مونوغرام.',
    image: 'https://images.unsplash.com/photo-1605488686056-7714692352e7?auto=format&fit=crop&q=80',
    price: 59.99,
    category: 'linens',
    details: 'أرواب الاستحمام الفاخرة لدينا مصنوعة من نسيج التيري عالي الجودة للحصول على تجربة ناعمة وماصة. كل روب يمكن تخصيصه بمونوغرام أنيق أو اسم كامل، مما يجعلها هدية مثالية أو إضافة أنيقة إلى الحمام الخاص بك.',
    options: ['خيارات المقاسات (S، M， L， XL)', 'ألوان متعددة متاحة', 'خيارات موقع التطريز وأسلوبه']
  }
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
            <p className="text-2xl text-embroidery-rose mb-4">{product.price.toFixed(2)} ج.م</p>
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
