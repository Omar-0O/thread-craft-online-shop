
import React from 'react';
import { Button } from './ui/button';
import { Link } from 'react-router-dom';

const CallToAction = () => {
  return (
    <section className="py-16 bg-embroidery-navy text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-playfair mb-4">
            جاهز لإنشاء شيء مميز؟
          </h2>
          <p className="text-lg text-gray-300 mb-8">
            دعنا نحول أفكار التطريز الخاصة بك إلى واقع. اتصل بنا اليوم للحصول على عرض سعر مخصص أو لمناقشة مشروعك.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild className="bg-embroidery-rose hover:bg-pink-400 text-white px-8 py-6">
              <Link to="/contact">تواصل معنا</Link>
            </Button>
            <Button asChild variant="outline" className="border-white text-white hover:bg-white hover:text-embroidery-navy px-8 py-6">
              <Link to="/services">خدماتنا</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
