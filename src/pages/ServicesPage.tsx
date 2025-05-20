
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
    title: 'Custom Clothing Embroidery',
    description: 'Add personalized designs, names, or logos to any clothing item.',
    icon: '👕',
    details: 'Our clothing embroidery service is perfect for personalizing uniforms, workwear, gifts, and more. We can embroider on almost any type of garment, from t-shirts and polos to jackets and hats.',
    examples: ['Company uniforms with logos', 'Sports team apparel', 'Personalized gifts with names or special dates', 'Custom designs on jackets or hoodies']
  },
  {
    id: '2',
    title: 'Home Linens',
    description: 'Personalize your towels, bedding, napkins, and other home textiles.',
    icon: '🏠',
    details: 'Add a touch of elegance to your home with custom embroidered linens. Whether you\'re looking for monogrammed towels, personalized bedding, or custom napkins for your dining table, we can create beautiful designs that elevate your home decor.',
    examples: ['Monogrammed towel sets', 'Personalized bedding', 'Custom table linens and napkins', 'Decorative pillows with custom designs']
  },
  {
    id: '3',
    title: 'Corporate Branding',
    description: 'Consistent, high-quality embroidery for your business apparel and merchandise.',
    icon: '💼',
    details: 'Make your business stand out with professionally embroidered corporate apparel and merchandise. We work with businesses of all sizes to create consistent, high-quality branded items that represent your company with pride.',
    examples: ['Employee uniforms with company logo', 'Corporate gifts', 'Trade show merchandise', 'Customer-facing apparel']
  },
  {
    id: '4',
    title: 'Gift Personalization',
    description: 'Transform ordinary items into meaningful, personalized gifts.',
    icon: '🎁',
    details: 'Looking for a unique and thoughtful gift? Our gift personalization service lets you add names, dates, or special messages to a variety of items, creating one-of-a-kind presents for birthdays, weddings, anniversaries, and more.',
    examples: ['Wedding gifts with couple\'s names and date', 'Baby shower gifts with baby\'s name', 'Anniversary presents with special dates', 'Graduation gifts with school names or years']
  }
];

const ServicesPage = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <div className="bg-embroidery-lavender/30 py-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-embroidery-navy mb-4">Our Embroidery Services</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our range of professional embroidery services. We provide high-quality, customized embroidery for individuals and businesses alike.
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
                  <div className="text-4xl mr-4 mb-2 md:mb-0">{service.icon}</div>
                  <h2 className="font-playfair text-2xl font-medium text-embroidery-navy">{service.title}</h2>
                </div>
                <p className="text-gray-600 mb-4">{service.details}</p>
                
                <div className="mb-4">
                  <h3 className="text-lg font-medium text-embroidery-navy mb-2">Examples:</h3>
                  <ul className="list-disc pl-5 text-gray-600">
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
          <h2 className="text-3xl font-bold text-embroidery-navy mb-6 text-center">Our Process</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-embroidery-rose text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">1</div>
              <h3 className="font-playfair text-xl font-medium text-embroidery-navy mb-2">Consultation</h3>
              <p className="text-gray-600">We discuss your embroidery needs, design ideas, and project specifications.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-embroidery-rose text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">2</div>
              <h3 className="font-playfair text-xl font-medium text-embroidery-navy mb-2">Design</h3>
              <p className="text-gray-600">Our designers create a digital proof of your embroidery design for approval.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-embroidery-rose text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">3</div>
              <h3 className="font-playfair text-xl font-medium text-embroidery-navy mb-2">Production</h3>
              <p className="text-gray-600">Once approved, we carefully embroider your items with precision and care.</p>
            </div>
          </div>
          
          <div className="text-center">
            <Button asChild className="bg-embroidery-rose hover:bg-pink-400 text-white px-8 py-6">
              <Link to="/contact">Request a Quote</Link>
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ServicesPage;
