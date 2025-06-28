import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Container } from "@mui/material";

import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Helmet } from "react-helmet";
import { motion, AnimatePresence } from "framer-motion";

// Import components
import {
  useInfiniteOwnDrugs,
  useOwnDrugs,
} from "../../../lib/hooks/useDrugAction";
import { useTypeContext } from "../../../context/UserType.context";
import ProfileHeader from "./_components/ProfileHeader";
import ProfileTabs from "./_components/ProfileTabs";
import TabContent from "./_components/TabContent";
import HeaderProfileSkeleton from "../../../components/Common/Loading/profile_headers_keleton";

const ProfileBase = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState(0);
  const { token } = useTypeContext();

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  const { data: payload, isLoading: LoadingHeader } = useOwnDrugs(token, {});

  const {
    data: InfiniteData,
    fetchNextPage,
    isLoading: LoadingOwnDrugs,
    hasNextPage,
    isFetched,
  } = useInfiniteOwnDrugs(token, { limit: 15 });
  console.log(InfiniteData);

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
        {!LoadingHeader && <title>{payload?.data?.user?.name} Profile</title>}
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
        {!LoadingHeader ? (
          <ProfileHeader
            totalProducts={payload.pagination}
            inventory={payload.data.user}
            containerVariants={containerVariants}
            itemVariants={itemVariants}
          />
        ) : (
          <HeaderProfileSkeleton />
        )}
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
              containerVariants={containerVariants}
              itemVariants={itemVariants}
              dataInfo={InfiniteData}
              LoadingOwnDrugs={LoadingOwnDrugs}
              hasNextPage={hasNextPage}
              isFetched={isFetched}
              fetchNextPage={fetchNextPage}
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

export default ProfileBase;
