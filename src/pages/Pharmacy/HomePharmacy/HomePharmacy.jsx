import { Box } from "@mui/material";
import { Helmet } from "react-helmet";
import HeroSection from "./_components/HeroSection";
import InventorySection from "./_components/InventorySection";
import CategorySection from "./_components/CategorySection";
import ServicesSection from "./_components/services-section";
import FrequentMedicinesSection from "./_components/frequent-medicines-section";
import PromotionsSection from "./_components/promotions-section";
import SearchSection from "./_components/search-section";
import FooterSection from "./_components/footer-section";

export default function HomePharmacy() {
  return (
    <>
      <Helmet>
        <title>Pharmacy Home</title>
        <meta
          name="description"
          content="Welcome to our online pharmacy. Find and order medicines with ease."
        />
        <meta
          name="keywords"
          content="pharmacy, medicine, healthcare, prescription, drugs, online pharmacy"
        />
      </Helmet>

      <Box component={"main"}>
        <HeroSection />
        <SearchSection />
        <ServicesSection />
        <CategorySection />
        <PromotionsSection />
        <FrequentMedicinesSection />
        <InventorySection />
        <FooterSection />
      </Box>
    </>
  );
}
