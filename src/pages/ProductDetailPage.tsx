
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
    name: 'Personalized Hand Towels',
    description: 'Luxurious cotton towels with custom monogram embroidery.',
    image: 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9',
    price: 24.99,
    category: 'linens',
    details: 'Our premium hand towels are made from 100% Egyptian cotton for ultimate softness and absorbency. Each towel can be personalized with your monogram, name, or custom design in a variety of thread colors.',
    options: ['Monogram style (Classic, Modern, Script)', 'Thread color selection', 'Set of 2, 4, or 6 towels']
  },
  '2': {
    id: '2',
    name: 'Embroidered Baby Onesie',
    description: 'Soft cotton onesie with custom name and design.',
    image: 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9',
    price: 19.99,
    category: 'clothes',
    details: 'This adorable baby onesie is made from soft, hypoallergenic cotton that\'s gentle on baby\'s skin. Available in sizes 0-3 months, 3-6 months, and 6-12 months. Can be personalized with baby\'s name, birth date, or a cute design.',
    options: ['Size options', 'Color options (White, Baby Blue, Baby Pink)', 'Font selection for name']
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
            ← Back to Products
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
            <p className="text-2xl text-embroidery-rose mb-4">${product.price.toFixed(2)}</p>
            <p className="text-gray-600 mb-6">{product.description}</p>
            
            {product.details && (
              <div className="mb-6">
                <h2 className="font-bold text-lg mb-2">Product Details</h2>
                <p className="text-gray-600">{product.details}</p>
              </div>
            )}

            {product.options && product.options.length > 0 && (
              <div className="mb-6">
                <h2 className="font-bold text-lg mb-2">Customization Options</h2>
                <ul className="list-disc pl-5 text-gray-600">
                  {product.options.map((option, index) => (
                    <li key={index}>{option}</li>
                  ))}
                </ul>
              </div>
            )}

            <div className="space-y-4">
              <Button asChild className="w-full bg-embroidery-rose hover:bg-pink-400 text-white py-6">
                <Link to="/contact">Request a Quote</Link>
              </Button>
              <Button asChild variant="outline" className="w-full border-embroidery-navy text-embroidery-navy hover:bg-embroidery-navy hover:text-white py-6">
                <Link to="/services">Learn About Our Process</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ProductDetailPage;
