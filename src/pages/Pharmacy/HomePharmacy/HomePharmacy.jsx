import { Box } from "@mui/material";
import { Helmet } from "react-helmet";
import HeroSection from "./_components/HeroSection";
import InventorySection from "./_components/InventorySection";
import CategorySection from "./_components/CategorySection";

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
        <InventorySection />
        <CategorySection />
      </Box>
    </>
  );
}
