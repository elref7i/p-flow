import HeroSection from '../../../components/LandingComponents/HeroSection';
import FeaturesSection from '../../../components/LandingComponents/FeaturesSection';
import HowItWorksSection from '../../../components/LandingComponents/HowItWorksSection';
import TestimonialsSection from '../../../components/LandingComponents/TestimonialsSection';
import ContactSection from '../../../components/LandingComponents/ContactSection';
import Footer from '../../../components/LandingComponents/Footer';
import StatisticsSection from '../../../components/LandingComponents/StatisticsSection';
import ScrollToTop from '../../../components/LandingComponents/ScrollToTop';

const LandingPage = () => {
  return (
    <>
      <HeroSection />
      <FeaturesSection />
      <HowItWorksSection />
      <StatisticsSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
      <ScrollToTop />
    </>
  );
};

export default LandingPage;
