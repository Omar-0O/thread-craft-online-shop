
import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Mail, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-embroidery-navy text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="font-playfair text-xl font-medium mb-4">Stitch Perfect</h3>
            <p className="mb-4 text-gray-300">
              Quality embroidery services for all your clothing and linen needs. Custom designs with personal touch.
            </p>
            <div className="flex space-x-4">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-embroidery-rose">
                <Instagram size={20} />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-embroidery-rose">
                <Facebook size={20} />
              </a>
              <a href="mailto:info@stitchperfect.com" className="text-white hover:text-embroidery-rose">
                <Mail size={20} />
              </a>
              <a href="tel:+1234567890" className="text-white hover:text-embroidery-rose">
                <Phone size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-playfair text-xl font-medium mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-embroidery-rose transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-gray-300 hover:text-embroidery-rose transition-colors">
                  Products
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-embroidery-rose transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-embroidery-rose transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-embroidery-rose transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-playfair text-xl font-medium mb-4">Contact Us</h3>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-center gap-2">
                <Phone size={16} /> (123) 456-7890
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} /> info@stitchperfect.com
              </li>
              <li>123 Embroidery Lane</li>
              <li>Stitchville, ST 12345</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-6 text-sm text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Stitch Perfect. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
