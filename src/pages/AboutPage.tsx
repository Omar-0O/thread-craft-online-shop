
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
          <h1 className="text-4xl font-bold text-embroidery-navy mb-4">عن فن التطريز</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            تعرف على قصتنا، وفريقنا، وشغفنا بالتطريز.
          </p>
        </div>
      </div>

      {/* Our Story */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-4xl mx-auto">
          <div>
            <h2 className="text-3xl font-bold text-embroidery-navy mb-4 font-playfair">قصتنا</h2>
            <p className="text-gray-600 mb-4">
              تأسست شركة فن التطريز في عام 2010 على يد أميرة الخالدي، وهي فنانة في مجال النسيج وشغوفة بالتطريز والإبداعات المخصصة. ما بدأ كمشروع صغير في المنزل تطور إلى خدمة تطريز موثوقة مع فريق متخصص من الحرفيين الماهرين.
            </p>
            <p className="text-gray-600 mb-4">
              على مر السنين، كان لنا شرف العمل مع مئات الأفراد والشركات، لتحويل رؤى التطريز الخاصة بهم إلى حقيقة. من هدايا الزفاف إلى العلامات التجارية للشركات، نحن نفخر بإنشاء عناصر مخصصة عالية الجودة تفوق توقعات عملائنا.
            </p>
            <p className="text-gray-600">
              اليوم، تواصل شركة فن التطريز الجمع بين تقنيات التطريز التقليدية والتكنولوجيا الحديثة لتقديم نتائج استثنائية على مجموعة واسعة من المنتجات.
            </p>
          </div>
          <div className="rounded-lg overflow-hidden shadow-lg">
            <img
              src="https://images.unsplash.com/photo-1721322800607-8c38375eef04"
              alt="استوديو التطريز الخاص بنا"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Our Values */}
      <div className="bg-embroidery-cream py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-embroidery-navy mb-6 text-center font-playfair">قيمنا</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
                  <span className="text-3xl">🧵</span>
                </div>
                <h3 className="text-xl font-medium text-embroidery-navy mb-2">الجودة</h3>
                <p className="text-gray-600">نحن ملتزمون باستخدام مواد ممتازة والحفاظ على أعلى المعايير في عملنا.</p>
              </div>
              
              <div className="text-center">
                <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
                  <span className="text-3xl">🎨</span>
                </div>
                <h3 className="text-xl font-medium text-embroidery-navy mb-2">الإبداع</h3>
                <p className="text-gray-600">نضيف رؤية فنية وحلول إبداعية لكل مشروع نتولاه.</p>
              </div>
              
              <div className="text-center">
                <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
                  <span className="text-3xl">👥</span>
                </div>
                <h3 className="text-xl font-medium text-embroidery-navy mb-2">الخدمة</h3>
                <p className="text-gray-600">نعطي الأولوية لرضا العملاء والاهتمام الشخصي في كل ما نقوم به.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Meet Our Team */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-embroidery-navy mb-6 text-center font-playfair">تعرف على فريقنا</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="rounded-full overflow-hidden w-32 h-32 mx-auto mb-4">
                <img
                  src="https://images.unsplash.com/photo-1721322800607-8c38375eef04"
                  alt="أميرة الخالدي"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-medium text-embroidery-navy mb-1">أميرة الخالدي</h3>
              <p className="text-embroidery-rose mb-2">المؤسسة ومصممة رئيسية</p>
              <p className="text-gray-600 text-sm">تمتلك أميرة خبرة أكثر من 15 عامًا في فنون النسيج وتصميم التطريز.</p>
            </div>
            
            <div className="text-center">
              <div className="rounded-full overflow-hidden w-32 h-32 mx-auto mb-4">
                <img
                  src="https://images.unsplash.com/photo-1721322800607-8c38375eef04"
                  alt="ياسر العتيبي"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-medium text-embroidery-navy mb-1">ياسر العتيبي</h3>
              <p className="text-embroidery-rose mb-2">مدير الإنتاج</p>
              <p className="text-gray-600 text-sm">يضمن ياسر أن كل طلب يتم إنجازه بدقة وفي الوقت المحدد.</p>
            </div>
            
            <div className="text-center">
              <div className="rounded-full overflow-hidden w-32 h-32 mx-auto mb-4">
                <img
                  src="https://images.unsplash.com/photo-1721322800607-8c38375eef04"
                  alt="لينا القحطاني"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-medium text-embroidery-navy mb-1">لينا القحطاني</h3>
              <p className="text-embroidery-rose mb-2">علاقات العملاء</p>
              <p className="text-gray-600 text-sm">لينا مكرسة لتقديم خدمة ودعم ممتاز لعملائنا.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-embroidery-navy text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4 font-playfair">هل أنت مستعد للعمل معنا؟</h2>
          <p className="text-gray-300 max-w-2xl mx-auto mb-6">
            سنكون سعداء بمناقشة احتياجات التطريز الخاصة بك وكيف يمكننا مساعدتك في تحويل أفكارك إلى واقع.
          </p>
          <Button asChild className="bg-embroidery-rose hover:bg-pink-400 text-white px-8 py-6">
            <Link to="/contact">اتصل بنا اليوم</Link>
          </Button>
        </div>
      </div>
    </Layout>
  );
};

export default AboutPage;
