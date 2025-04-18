/* eslint-disable react/prop-types */
"use client";

import { Box, Typography, Grid } from "@mui/material";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import InventoryIcon from "@mui/icons-material/Inventory";
import { motion } from "framer-motion";
import DrugCard from "../../../../components/PharmacyComonents/DrugCard/DrugCard";

const TabContent = ({
  activeTab,
  dataInfo: payload,
  containerVariants,
  itemVariants,
}) => {
  return (
    <>
      {activeTab === 0 && (
        <Grid
          container
          spacing={2}
          component={motion.div}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {payload.map((drug) => (
            <Grid
              item
              xs={12}
              sm={6}
              key={drug._id}
              component={motion.div}
              variants={itemVariants}
            >
              <DrugCard
                dataInfo={drug}
                checkPage={false}
              />
            </Grid>
          ))}
        </Grid>
      )}

      {activeTab === 1 && (
        <Box sx={{ textAlign: "center", py: 6 }}>
          <LocalOfferIcon
            sx={{
              fontSize: 60,
              color: "text.secondary",
              mb: 2,
            }}
          />
          <Typography
            variant="h6"
            color="text.secondary"
          >
            No Current Offers
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
          >
            Check back later for special promotions and discounts
          </Typography>
        </Box>
      )}

      {activeTab === 2 && (
        <Box sx={{ textAlign: "center", py: 6 }}>
          <InventoryIcon
            sx={{ fontSize: 60, color: "text.secondary", mb: 2 }}
          />
          <Typography
            variant="h6"
            color="text.secondary"
          >
            Inventory Statistics
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
          >
            This feature is coming soon
          </Typography>
        </Box>
      )}
    </>
  );
};

export default TabContent;
