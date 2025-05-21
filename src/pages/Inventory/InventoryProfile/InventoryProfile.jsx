import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Button, Container } from "@mui/material";

import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Helmet } from "react-helmet";
import { motion, AnimatePresence } from "framer-motion";

// Import components
import { useDrugsSpecificInventory } from "../../../lib/hooks/useDrugAction";
import LoadingProfileSkeleton from "../../../components/Common/Loading/LoadingProfileSkeleton";
import ProfileTabs from "./_components/ProfileTabs";
import ProfileHeader from "./_components/ProfileHeader";
import TabContent from "./_components/TabContent";

const InventoryProfile = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState(0);

  //Queries
  const { isLoading, data: payload } = useDrugsSpecificInventory({
    drugId: id,
  });

  if (isLoading) return LoadingProfileSkeleton;
  console.log(payload.data.user);

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 10, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100 },
    },
  };

  return (
    <>
      <Helmet>
        <title>{payload.data.user.name} | Inventory Profile</title>
        <meta
          name="description"
          content={`View ${name}'s profile and available products.`}
        />
      </Helmet>

      <Container
        maxWidth="xl"
        component={motion.div}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        sx={{ py: 3 }}
      >
        {/* Profile Header */}
        <ProfileHeader
          totalProducts={payload.results}
          inventory={payload.data.user}
          containerVariants={containerVariants}
          itemVariants={itemVariants}
        />

        {/* Pharmacy Tabs */}
        <ProfileTabs
          activeTab={activeTab}
          handleTabChange={handleTabChange}
        />

        {/* Tab Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <TabContent
              activeTab={activeTab}
              dataInfo={payload.data.drugs}
              containerVariants={containerVariants}
              itemVariants={itemVariants}
            />
          </motion.div>
        </AnimatePresence>

        {/* Back Button */}
        <Button
          variant="text"
          color="primary"
          startIcon={<ArrowBackIcon />}
          sx={{
            mt: 4,
            textTransform: "none",
            fontWeight: "medium",
          }}
          onClick={() => navigate(-1)}
        >
          Back to Inventory List
        </Button>
      </Container>
    </>
  );
};

export default InventoryProfile;
