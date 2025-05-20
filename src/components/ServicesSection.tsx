
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
    title: 'Custom Clothing Embroidery',
    description: 'Add personalized designs, names, or logos to any clothing item.',
    icon: '👕'
  },
  {
    id: '2',
    title: 'Home Linens',
    description: 'Personalize your towels, bedding, napkins, and other home textiles.',
    icon: '🏠'
  },
  {
    id: '3',
    title: 'Corporate Branding',
    description: 'Consistent, high-quality embroidery for your business apparel and merchandise.',
    icon: '💼'
  },
  {
    id: '4',
    title: 'Gift Personalization',
    description: 'Transform ordinary items into meaningful, personalized gifts.',
    icon: '🎁'
  }
];

const ServicesSection = () => {
  return (
    <section className="py-16 bg-embroidery-lavender/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-embroidery-navy mb-4">
            Our Embroidery Services
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            From custom clothing to home linens and corporate branding, we offer a variety of embroidery services to meet your needs.
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
