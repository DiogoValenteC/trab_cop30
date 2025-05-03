
import Layout from '@/components/Layout';
import Hero from '@/components/home/Hero';
import AboutSection from '@/components/home/AboutSection';
import ObjectivesSection from '@/components/home/ObjectivesSection';
import NewsSection from '@/components/home/NewsSection';
import CtaSection from '@/components/home/CtaSection';

const Index = () => {
  return (
    <Layout>
      <Hero />
      <AboutSection />
      <ObjectivesSection />
      <NewsSection />
      <CtaSection />
    </Layout>
  );
};

export default Index;
