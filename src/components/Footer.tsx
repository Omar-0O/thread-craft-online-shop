
import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Mail, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-embroidery-navy text-white pt-12 pb-6" dir="rtl">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="font-playfair text-xl font-medium mb-4">نعمة للمفروشات</h3>
            <p className="mb-4 text-gray-300">
              خدمات تطريز عالية الجودة لجميع احتياجات الملابس والمفروشات. تصاميم مخصصة بلمسة شخصية.
            </p>
            <div className="flex space-x-4">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-embroidery-rose">
                <Instagram size={20} />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-embroidery-rose">
                <Facebook size={20} />
              </a>
              <a href="mailto:info@neamafurnishings.com" className="text-white hover:text-embroidery-rose">
                <Mail size={20} />
              </a>
              <a href="tel:+20123456789" className="text-white hover:text-embroidery-rose">
                <Phone size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-playfair text-xl font-medium mb-4">روابط سريعة</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-embroidery-rose transition-colors">
                  الرئيسية
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-gray-300 hover:text-embroidery-rose transition-colors">
                  المنتجات
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-embroidery-rose transition-colors">
                  الخدمات
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-embroidery-rose transition-colors">
                  من نحن
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-embroidery-rose transition-colors">
                  اتصل بنا
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-playfair text-xl font-medium mb-4">اتصل بنا</h3>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-center gap-2">
                <Phone size={16} /> ٠١٢٣٤٥٦٧٨٩
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} /> info@neamafurnishings.com
              </li>
              <li>شارع التطريز ١٢٣</li>
              <li>القاهرة، مصر</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-6 text-sm text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} نعمة للمفروشات. جميع الحقوق محفوظة.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
