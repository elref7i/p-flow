import HeroSection from "../../../components/LandingComponents/HeroSection";
import FeaturesSection from "../../../components/LandingComponents/FeaturesSection";
import HowItWorksSection from "../../../components/LandingComponents/HowItWorksSection";
import TestimonialsSection from "../../../components/LandingComponents/TestimonialsSection";
import ContactSection from "../../../components/LandingComponents/ContactSection";
import Footer from "../../../components/LandingComponents/Footer";
import StatisticsSection from "../../../components/LandingComponents/StatisticsSection";
import ScrollToTop from "../../../components/LandingComponents/ScrollToTop";
import NavbarLanding from "../../../components/LandingComponents/NavbarLanding";
import { Box } from "@mui/material";
import { Helmet } from "react-helmet";

const LandingPage = () => {
  return (
    <>
      <Helmet>
        <title>Landing Page</title>
        <meta
          name="description"
          content="Landing page for our application"
        />
        <meta
          property="og:title"
          content="Landing Page"
        />
        <meta
          property="og:description"
          content="Landing page for our application"
        />
        <meta
          property="og:type"
          content="website"
        />
      </Helmet>

      <NavbarLanding />
      <Box component={"main"}>
        <HeroSection />
        <FeaturesSection />
        <HowItWorksSection />
        <StatisticsSection />
        <TestimonialsSection />
        <ContactSection />
      </Box>
      <Footer />
      <ScrollToTop />
    </>
  );
};

export default LandingPage;
