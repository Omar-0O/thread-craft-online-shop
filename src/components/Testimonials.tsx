
import React from 'react';
import { Card, CardContent } from './ui/card';

interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
}

const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Sarah Johnson',
    role: 'Regular Customer',
    content: 'The quality of embroidery is outstanding! I ordered custom towels for my wedding and they turned out beautifully. Will definitely order again.'
  },
  {
    id: '2',
    name: 'Michael Rodriguez',
    role: 'Business Owner',
    content: 'We\'ve been using Stitch Perfect for our company polo shirts for over a year now. The consistency and attention to detail is impressive.'
  },
  {
    id: '3',
    name: 'Emily Thompson',
    role: 'Interior Designer',
    content: 'Their custom embroidered pillows are a game-changer for my design projects. The craftsmanship is superior to anything else I\'ve found.'
  }
];

const Testimonials = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-embroidery-navy mb-4">
            What Our Customers Say
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our satisfied customers have to say about our work.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((testimonial) => (
            <Card key={testimonial.id} className="hover:shadow-lg transition-shadow duration-300 bg-embroidery-cream">
              <CardContent className="p-6">
                <div className="mb-4">
                  <svg className="h-8 w-8 text-embroidery-rose" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
                    <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                  </svg>
                </div>
                <p className="text-gray-700 mb-4">{testimonial.content}</p>
                <div>
                  <p className="font-medium text-embroidery-navy">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
