
import React from 'react';
import { Card, CardContent } from './ui/card';

interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}

const SERVICES: Service[] = [
  {
    id: '1',
    title: 'تطريز ملابس مخصصة',
    description: 'إضافة تصاميم شخصية، أسماء، أو شعارات على أي قطعة ملابس.',
    icon: '👕'
  },
  {
    id: '2',
    title: 'مفروشات منزلية',
    description: 'إضفاء طابع شخصي على مناشفك، أغطية السرير، المناديل، وغيرها من المنسوجات المنزلية.',
    icon: '🏠'
  },
  {
    id: '3',
    title: 'تصميم شعارات الشركات',
    description: 'تطريز متناسق وعالي الجودة لملابس عملك التجاري والبضائع الترويجية.',
    icon: '💼'
  },
  {
    id: '4',
    title: 'تخصيص الهدايا',
    description: 'تحويل العناصر العادية إلى هدايا ذات معنى ومخصصة.',
    icon: '🎁'
  }
];

const ServicesSection = () => {
  return (
    <section className="py-16 bg-embroidery-lavender/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-embroidery-navy mb-4">
            خدمات التطريز لدينا
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            من الملابس المخصصة إلى المفروشات المنزلية والعلامات التجارية للشركات، نقدم مجموعة متنوعة من خدمات التطريز لتلبية احتياجاتك.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((service) => (
            <Card key={service.id} className="hover:shadow-lg transition-shadow duration-300 border-none bg-white">
              <CardContent className="p-6 text-center">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="font-playfair text-xl font-medium text-embroidery-navy mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
