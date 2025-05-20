
import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';

interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  details: string;
  examples: string[];
}

const SERVICES: Service[] = [
  {
    id: '1',
    title: 'تطريز ملابس مخصصة',
    description: 'إضافة تصاميم شخصية، أسماء، أو شعارات على أي قطعة ملابس.',
    icon: '👕',
    details: 'خدمة تطريز الملابس لدينا مثالية لإضفاء طابع شخصي على الزي الرسمي، ملابس العمل، الهدايا، والمزيد. يمكننا التطريز على أي نوع من الملابس تقريبًا، من القمصان والبولو إلى الجاكيتات والقبعات.',
    examples: ['زي الشركات مع الشعارات', 'ملابس الفرق الرياضية', 'هدايا مخصصة بالأسماء أو تواريخ خاصة', 'تصاميم مخصصة على الجاكيتات أو الهوديز']
  },
  {
    id: '2',
    title: 'مفروشات منزلية',
    description: 'إضفاء طابع شخصي على مناشفك، أغطية السرير، المناديل، وغيرها من المنسوجات المنزلية.',
    icon: '🏠',
    details: 'أضف لمسة من الأناقة إلى منزلك مع المفروشات المنزلية المطرزة المخصصة. سواء كنت تبحث عن مناشف مزينة بالمونوغرام، أغطية سرير مخصصة، أو مناديل مخصصة لطاولة الطعام، يمكننا إنشاء تصاميم جميلة ترفع من مستوى ديكور منزلك.',
    examples: ['مجموعات مناشف بالمونوغرام', 'أغطية سرير مخصصة', 'مفارش طاولة ومناديل مخصصة', 'وسائد زخرفية بتصاميم مخصصة']
  },
  {
    id: '3',
    title: 'علامات تجارية للشركات',
    description: 'تطريز متناسق وعالي الجودة لملابس عملك التجاري والبضائع الترويجية.',
    icon: '💼',
    details: 'اجعل عملك التجاري يبرز مع ملابس وبضائع الشركات المطرزة احترافيًا. نحن نعمل مع الشركات من جميع الأحجام لإنشاء عناصر ذات علامات تجارية متناسقة وعالية الجودة تمثل شركتك بفخر.',
    examples: ['زي الموظفين مع شعار الشركة', 'هدايا الشركات', 'بضائع المعارض التجارية', 'ملابس للتعامل مع العملاء']
  },
  {
    id: '4',
    title: 'تخصيص الهدايا',
    description: 'تحويل العناصر العادية إلى هدايا ذات معنى ومخصصة.',
    icon: '🎁',
    details: 'تبحث عن هدية فريدة ومدروسة؟ تتيح لك خدمة تخصيص الهدايا لدينا إضافة أسماء أو تواريخ أو رسائل خاصة إلى مجموعة متنوعة من العناصر، مما يخلق هدايا فريدة من نوعها للمناسبات مثل أعياد الميلاد وحفلات الزفاف والذكرى السنوية والمزيد.',
    examples: ['هدايا الزفاف مع أسماء الزوجين والتاريخ', 'هدايا استقبال المولود مع اسم الطفل', 'هدايا الذكرى السنوية مع تواريخ خاصة', 'هدايا التخرج مع أسماء المدارس أو السنوات']
  }
];

const ServicesPage = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <div className="bg-embroidery-lavender/30 py-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-embroidery-navy mb-4">خدمات التطريز لدينا</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            اكتشف مجموعة خدمات التطريز الاحترافية لدينا. نقدم تطريزًا عالي الجودة ومخصصًا للأفراد والشركات على حد سواء.
          </p>
        </div>
      </div>

      {/* Services Section */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {SERVICES.map((service) => (
            <Card key={service.id} className="mb-8 overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row md:items-center mb-4">
                  <div className="text-4xl ml-4 mb-2 md:mb-0">{service.icon}</div>
                  <h2 className="font-playfair text-2xl font-medium text-embroidery-navy">{service.title}</h2>
                </div>
                <p className="text-gray-600 mb-4">{service.details}</p>
                
                <div className="mb-4">
                  <h3 className="text-lg font-medium text-embroidery-navy mb-2">أمثلة:</h3>
                  <ul className="list-disc pr-5 text-gray-600">
                    {service.examples.map((example, index) => (
                      <li key={index}>{example}</li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Process Section */}
        <div className="max-w-4xl mx-auto mt-12">
          <h2 className="text-3xl font-bold text-embroidery-navy mb-6 text-center">عملية العمل لدينا</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-embroidery-rose text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">١</div>
              <h3 className="font-playfair text-xl font-medium text-embroidery-navy mb-2">الاستشارة</h3>
              <p className="text-gray-600">نناقش احتياجات التطريز الخاصة بك، أفكار التصميم، ومواصفات المشروع.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-embroidery-rose text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">٢</div>
              <h3 className="font-playfair text-xl font-medium text-embroidery-navy mb-2">التصميم</h3>
              <p className="text-gray-600">يقوم مصممونا بإنشاء نموذج رقمي لتصميم التطريز الخاص بك للموافقة عليه.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-embroidery-rose text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">٣</div>
              <h3 className="font-playfair text-xl font-medium text-embroidery-navy mb-2">الإنتاج</h3>
              <p className="text-gray-600">بمجرد الموافقة، نقوم بتطريز عناصرك بعناية ودقة واهتمام.</p>
            </div>
          </div>
          
          <div className="text-center">
            <Button asChild className="bg-embroidery-rose hover:bg-pink-400 text-white px-8 py-6">
              <Link to="/contact">طلب عرض سعر</Link>
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ServicesPage;
