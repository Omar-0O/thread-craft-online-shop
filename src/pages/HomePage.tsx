
import React from 'react';
import Layout from '../components/Layout';
import HeroSection from '../components/HeroSection';
import FeaturedProducts from '../components/FeaturedProducts';
import ServicesSection from '../components/ServicesSection';
import Testimonials from '../components/Testimonials';
import CallToAction from '../components/CallToAction';

const HomePage = () => {
  return (
    <Layout>
      <HeroSection />
      <FeaturedProducts />
      <ServicesSection />
      <Testimonials />
      <CallToAction />
    </Layout>
  );
};

export default HomePage;
