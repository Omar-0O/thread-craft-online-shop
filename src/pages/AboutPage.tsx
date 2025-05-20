
import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';
import { Button } from '../components/ui/button';

const AboutPage = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <div className="bg-embroidery-lavender/30 py-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-embroidery-navy mb-4">About Stitch Perfect</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Get to know our story, our team, and our passion for embroidery.
          </p>
        </div>
      </div>

      {/* Our Story */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-4xl mx-auto">
          <div>
            <h2 className="text-3xl font-bold text-embroidery-navy mb-4 font-playfair">Our Story</h2>
            <p className="text-gray-600 mb-4">
              Stitch Perfect was founded in 2010 by Emma Johnson, a textile artist with a passion for embroidery and personalized creations. What started as a small home-based business has grown into a trusted embroidery service with a dedicated team of skilled craftspeople.
            </p>
            <p className="text-gray-600 mb-4">
              Over the years, we've had the privilege of working with hundreds of individuals and businesses, bringing their embroidery visions to life. From wedding gifts to corporate branding, we take pride in creating high-quality, personalized items that exceed our customers' expectations.
            </p>
            <p className="text-gray-600">
              Today, Stitch Perfect continues to combine traditional embroidery techniques with modern technology to deliver exceptional results on a wide range of products.
            </p>
          </div>
          <div className="rounded-lg overflow-hidden shadow-lg">
            <img
              src="https://images.unsplash.com/photo-1721322800607-8c38375eef04"
              alt="Our embroidery studio"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Our Values */}
      <div className="bg-embroidery-cream py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-embroidery-navy mb-6 text-center font-playfair">Our Values</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
                  <span className="text-3xl">🧵</span>
                </div>
                <h3 className="text-xl font-medium text-embroidery-navy mb-2">Quality</h3>
                <p className="text-gray-600">We're committed to using premium materials and maintaining the highest standards in our work.</p>
              </div>
              
              <div className="text-center">
                <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
                  <span className="text-3xl">🎨</span>
                </div>
                <h3 className="text-xl font-medium text-embroidery-navy mb-2">Creativity</h3>
                <p className="text-gray-600">We bring artistic vision and creative solutions to every project we undertake.</p>
              </div>
              
              <div className="text-center">
                <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
                  <span className="text-3xl">👥</span>
                </div>
                <h3 className="text-xl font-medium text-embroidery-navy mb-2">Service</h3>
                <p className="text-gray-600">We prioritize customer satisfaction and personalized attention in everything we do.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Meet Our Team */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-embroidery-navy mb-6 text-center font-playfair">Meet Our Team</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="rounded-full overflow-hidden w-32 h-32 mx-auto mb-4">
                <img
                  src="https://images.unsplash.com/photo-1721322800607-8c38375eef04"
                  alt="Emma Johnson"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-medium text-embroidery-navy mb-1">Emma Johnson</h3>
              <p className="text-embroidery-rose mb-2">Founder & Lead Designer</p>
              <p className="text-gray-600 text-sm">Emma has over 15 years of experience in textile arts and embroidery design.</p>
            </div>
            
            <div className="text-center">
              <div className="rounded-full overflow-hidden w-32 h-32 mx-auto mb-4">
                <img
                  src="https://images.unsplash.com/photo-1721322800607-8c38375eef04"
                  alt="Michael Rodriguez"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-medium text-embroidery-navy mb-1">Michael Rodriguez</h3>
              <p className="text-embroidery-rose mb-2">Production Manager</p>
              <p className="text-gray-600 text-sm">Michael ensures that every order is completed with precision and on time.</p>
            </div>
            
            <div className="text-center">
              <div className="rounded-full overflow-hidden w-32 h-32 mx-auto mb-4">
                <img
                  src="https://images.unsplash.com/photo-1721322800607-8c38375eef04"
                  alt="Sarah Kim"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-medium text-embroidery-navy mb-1">Sarah Kim</h3>
              <p className="text-embroidery-rose mb-2">Customer Relations</p>
              <p className="text-gray-600 text-sm">Sarah is dedicated to providing excellent service and support to our clients.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-embroidery-navy text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4 font-playfair">Ready to Work With Us?</h2>
          <p className="text-gray-300 max-w-2xl mx-auto mb-6">
            We'd love to discuss your embroidery needs and how we can help bring your ideas to life.
          </p>
          <Button asChild className="bg-embroidery-rose hover:bg-pink-400 text-white px-8 py-6">
            <Link to="/contact">Contact Us Today</Link>
          </Button>
        </div>
      </div>
    </Layout>
  );
};

export default AboutPage;
