/* eslint-disable react/prop-types */
import { Box, Typography, Grid } from "@mui/material";
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
          spacing={4}
          component={motion.div}
          py={2}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {payload.map((drug) => (
            <Grid
              item
              xs={12}
              sm={4}
              key={drug._id}
              component={motion.div}
              variants={itemVariants}
            >
              <DrugCard
                dataInfo={drug}
                checkPage={false}
                offer={true}
              />
            </Grid>
          ))}
        </Grid>
      )}

      {activeTab === 1 && (
        <Box sx={{ textAlign: "center", py: 2 }}>
          <Grid
            container
            spacing={4}
            component={motion.div}
            pt={2}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {payload.map((drug) => (
              <Grid
                item
                xs={12}
                sm={4}
                key={drug._id}
                component={motion.div}
                variants={itemVariants}
              >
                <DrugCard
                  dataInfo={drug}
                  checkPage={false}
                  offer={true}
                />
              </Grid>
            ))}
          </Grid>
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
