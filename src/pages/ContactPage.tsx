
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
      title: "تم إرسال الرسالة",
      description: "لقد تلقينا رسالتك وسنتواصل معك قريباً!",
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
          <h1 className="text-4xl font-bold text-embroidery-navy mb-4">اتصل بنا</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            يسعدنا التواصل معك. تواصل معنا لأي استفسارات أو لطلب عرض سعر لمشروع التطريز الخاص بك.
          </p>
        </div>
      </div>

      {/* Contact Information and Form */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Information */}
          <div>
            <h2 className="text-2xl font-bold text-embroidery-navy mb-6 font-playfair">تواصل معنا</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Phone className="text-embroidery-rose ml-2" size={20} />
                    <h3 className="font-medium text-lg">الهاتف</h3>
                  </div>
                  <p className="text-gray-600">٠١٢٣٤٥٦٧٨٩</p>
                  <p className="text-gray-500 text-sm mt-1">من الأحد إلى الخميس، ٩ ص - ٥ م</p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Mail className="text-embroidery-rose ml-2" size={20} />
                    <h3 className="font-medium text-lg">البريد الإلكتروني</h3>
                  </div>
                  <p className="text-gray-600">info@fantaztriz.com</p>
                  <p className="text-gray-500 text-sm mt-1">نرد خلال ٢٤ ساعة</p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Facebook className="text-embroidery-rose ml-2" size={20} />
                    <h3 className="font-medium text-lg">فيسبوك</h3>
                  </div>
                  <p className="text-gray-600">@FanTaztriz</p>
                  <p className="text-gray-500 text-sm mt-1">راسلنا على فيسبوك</p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Instagram className="text-embroidery-rose ml-2" size={20} />
                    <h3 className="font-medium text-lg">انستغرام</h3>
                  </div>
                  <p className="text-gray-600">@FanTaztriz</p>
                  <p className="text-gray-500 text-sm mt-1">تابعنا لأحدث التصاميم</p>
                </CardContent>
              </Card>
            </div>

            <div>
              <h3 className="font-medium text-lg mb-2">الموقع</h3>
              <p className="text-gray-600 mb-4">
                شارع التطريز ١٢٣<br />
                الرياض، المملكة العربية السعودية
              </p>
              <div className="aspect-video bg-gray-200 rounded-lg">
                {/* This would be replaced with an actual map */}
                <div className="w-full h-full flex items-center justify-center text-gray-400">
                  سيتم عرض الخريطة هنا
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h2 className="text-2xl font-bold text-embroidery-navy mb-6 font-playfair">أرسل لنا رسالة</h2>
            
            <Card>
              <CardContent className="p-6">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium text-gray-700">
                        الاسم
                      </label>
                      <Input id="name" required placeholder="أدخل اسمك" />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium text-gray-700">
                        البريد الإلكتروني
                      </label>
                      <Input id="email" type="email" required placeholder="أدخل بريدك الإلكتروني" />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-medium text-gray-700">
                      رقم الهاتف
                    </label>
                    <Input id="phone" placeholder="أدخل رقم هاتفك (اختياري)" />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium text-gray-700">
                      الموضوع
                    </label>
                    <Input id="subject" required placeholder="بخصوص ماذا هذه الرسالة؟" />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium text-gray-700">
                      الرسالة
                    </label>
                    <Textarea id="message" required placeholder="أخبرنا عن مشروعك أو استفسارك" className="min-h-[150px]" />
                  </div>
                  
                  <Button type="submit" className="w-full bg-embroidery-rose hover:bg-pink-400 text-white">
                    إرسال الرسالة
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
              <h2 className="text-3xl font-bold text-embroidery-navy mb-4 font-playfair">طلب تطريز مخصص</h2>
              <p className="text-gray-600">
                تحتاج إلى شيء خاص؟ املأ نموذج الطلب المخصص وسنعود إليك بعرض سعر.
              </p>
            </div>
            
            <Card>
              <CardContent className="p-6">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="custom-name" className="text-sm font-medium text-gray-700">
                        الاسم
                      </label>
                      <Input id="custom-name" required placeholder="أدخل اسمك" />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="custom-email" className="text-sm font-medium text-gray-700">
                        البريد الإلكتروني
                      </label>
                      <Input id="custom-email" type="email" required placeholder="أدخل بريدك الإلكتروني" />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="custom-phone" className="text-sm font-medium text-gray-700">
                      رقم الهاتف
                    </label>
                    <Input id="custom-phone" placeholder="أدخل رقم هاتفك" />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="product-type" className="text-sm font-medium text-gray-700">
                      نوع المنتج
                    </label>
                    <Input id="product-type" required placeholder="ما هو المنتج الذي ترغب في تطريزه؟" />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="quantity" className="text-sm font-medium text-gray-700">
                      الكمية
                    </label>
                    <Input id="quantity" type="number" min="1" required placeholder="كم عدد القطع التي تحتاجها؟" />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="design-description" className="text-sm font-medium text-gray-700">
                      وصف التصميم
                    </label>
                    <Textarea id="design-description" required placeholder="صف التصميم الذي ترغب في تطريزه" className="min-h-[100px]" />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="additional-info" className="text-sm font-medium text-gray-700">
                      معلومات إضافية
                    </label>
                    <Textarea id="additional-info" placeholder="أي تفاصيل أخرى يجب أن نعرفها؟" />
                  </div>
                  
                  <Button type="submit" className="w-full bg-embroidery-rose hover:bg-pink-400 text-white">
                    طلب عرض سعر
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
