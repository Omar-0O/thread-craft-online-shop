
import React from 'react';
import Layout from '../components/Layout';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Instagram, Facebook, Mail, Phone } from 'lucide-react';
import { useToast } from '../hooks/use-toast';

const ContactPage = () => {
  const { toast } = useToast();
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent",
      description: "We've received your message and will get back to you soon!",
      duration: 5000,
    });
    // Reset form (would typically be handled with form state)
    (e.target as HTMLFormElement).reset();
  };

  return (
    <Layout>
      {/* Hero Section */}
      <div className="bg-embroidery-lavender/30 py-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-embroidery-navy mb-4">Contact Us</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We'd love to hear from you. Reach out with any questions or to request a quote for your embroidery project.
          </p>
        </div>
      </div>

      {/* Contact Information and Form */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Information */}
          <div>
            <h2 className="text-2xl font-bold text-embroidery-navy mb-6 font-playfair">Get In Touch</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Phone className="text-embroidery-rose mr-2" size={20} />
                    <h3 className="font-medium text-lg">Phone</h3>
                  </div>
                  <p className="text-gray-600">(123) 456-7890</p>
                  <p className="text-gray-500 text-sm mt-1">Mon-Fri, 9am to 5pm</p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Mail className="text-embroidery-rose mr-2" size={20} />
                    <h3 className="font-medium text-lg">Email</h3>
                  </div>
                  <p className="text-gray-600">info@stitchperfect.com</p>
                  <p className="text-gray-500 text-sm mt-1">We respond within 24 hours</p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Facebook className="text-embroidery-rose mr-2" size={20} />
                    <h3 className="font-medium text-lg">Facebook</h3>
                  </div>
                  <p className="text-gray-600">@StitchPerfect</p>
                  <p className="text-gray-500 text-sm mt-1">Message us on Facebook</p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Instagram className="text-embroidery-rose mr-2" size={20} />
                    <h3 className="font-medium text-lg">Instagram</h3>
                  </div>
                  <p className="text-gray-600">@StitchPerfect</p>
                  <p className="text-gray-500 text-sm mt-1">Follow us for latest designs</p>
                </CardContent>
              </Card>
            </div>

            <div>
              <h3 className="font-medium text-lg mb-2">Location</h3>
              <p className="text-gray-600 mb-4">
                123 Embroidery Lane<br />
                Stitchville, ST 12345
              </p>
              <div className="aspect-video bg-gray-200 rounded-lg">
                {/* This would be replaced with an actual map */}
                <div className="w-full h-full flex items-center justify-center text-gray-400">
                  Map would be displayed here
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h2 className="text-2xl font-bold text-embroidery-navy mb-6 font-playfair">Send Us a Message</h2>
            
            <Card>
              <CardContent className="p-6">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium text-gray-700">
                        Your Name
                      </label>
                      <Input id="name" required placeholder="Enter your name" />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium text-gray-700">
                        Your Email
                      </label>
                      <Input id="email" type="email" required placeholder="Enter your email" />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-medium text-gray-700">
                      Phone Number
                    </label>
                    <Input id="phone" placeholder="Enter your phone number (optional)" />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium text-gray-700">
                      Subject
                    </label>
                    <Input id="subject" required placeholder="What is this regarding?" />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium text-gray-700">
                      Message
                    </label>
                    <Textarea id="message" required placeholder="Tell us about your project or inquiry" className="min-h-[150px]" />
                  </div>
                  
                  <Button type="submit" className="w-full bg-embroidery-rose hover:bg-pink-400 text-white">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Custom Order Form */}
      <div className="bg-embroidery-cream py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-embroidery-navy mb-4 font-playfair">Request a Custom Order</h2>
              <p className="text-gray-600">
                Need something special? Fill out our custom order form and we'll get back to you with a quote.
              </p>
            </div>
            
            <Card>
              <CardContent className="p-6">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="custom-name" className="text-sm font-medium text-gray-700">
                        Your Name
                      </label>
                      <Input id="custom-name" required placeholder="Enter your name" />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="custom-email" className="text-sm font-medium text-gray-700">
                        Your Email
                      </label>
                      <Input id="custom-email" type="email" required placeholder="Enter your email" />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="custom-phone" className="text-sm font-medium text-gray-700">
                      Phone Number
                    </label>
                    <Input id="custom-phone" placeholder="Enter your phone number" />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="product-type" className="text-sm font-medium text-gray-700">
                      Product Type
                    </label>
                    <Input id="product-type" required placeholder="What item would you like embroidered?" />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="quantity" className="text-sm font-medium text-gray-700">
                      Quantity
                    </label>
                    <Input id="quantity" type="number" min="1" required placeholder="How many items do you need?" />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="design-description" className="text-sm font-medium text-gray-700">
                      Design Description
                    </label>
                    <Textarea id="design-description" required placeholder="Describe the design you'd like embroidered" className="min-h-[100px]" />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="additional-info" className="text-sm font-medium text-gray-700">
                      Additional Information
                    </label>
                    <Textarea id="additional-info" placeholder="Any other details we should know?" />
                  </div>
                  
                  <Button type="submit" className="w-full bg-embroidery-rose hover:bg-pink-400 text-white">
                    Request Quote
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ContactPage;
