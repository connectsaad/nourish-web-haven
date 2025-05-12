
import Hero from '@/components/home/Hero';
import FeaturedProducts from '@/components/home/FeaturedProducts';
import WhyChooseUs from '@/components/home/WhyChooseUs';
import ProductBenefits from '@/components/home/ProductBenefits';
import ScienceSection from '@/components/home/ScienceSection';
import Testimonials from '@/components/home/Testimonials';
import HealthQuiz from '@/components/home/HealthQuiz';
import Newsletter from '@/components/home/Newsletter';

const Home = () => {
  return (
    <main>
      <Hero />
      <FeaturedProducts />
      <ProductBenefits />
      <WhyChooseUs />
      <ScienceSection />
      <Testimonials />
      <HealthQuiz />
      <Newsletter />
    </main>
  );
};

export default Home;
