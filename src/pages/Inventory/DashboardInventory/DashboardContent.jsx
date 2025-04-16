"use client";
import { Container, Grid } from "@mui/material";
import { motion } from "framer-motion";
import SalesOverview from "./components/SalesOverview";
import PurchaseOverview from "./components/PurchaseOverview";
import InventoryOverview from "./components/InventoryOverview";
import UsersOverview from "./components/UsersOverview";
import StockOverview from "./components/StockOverview";
import SalesStatistics from "./components/SalesStatistics";
import CustomerStatistics from "./components/CustomerStatistics";

const DashboardContent = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
      },
    },
  };

  return (
    <Container
      maxWidth="xl"
      // sx={{ py: 1, bgcolor: "red" }}
    >
      {/* <Box sx={{ mb: 4, display: "flex", alignItems: "center" }}>
        <Box
          component="div"
          sx={{
            backgroundColor: theme.palette.primary.main,
            borderRadius: 1,
            width: 32,
            height: 32,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            mr: 2,
          }}
        >
          <Box
            component="div"
            sx={{
              backgroundColor: "white",
              borderRadius: 0.5,
              width: 16,
              height: 16,
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)",
              gridTemplateRows: "repeat(2, 1fr)",
              gap: 0.5,
              p: 0.5,
            }}
          >
            <Box
              sx={{
                backgroundColor: theme.palette.primary.main,
                borderRadius: 0.2,
                width: 4,
                height: 4,
              }}
            />
            <Box
              sx={{
                backgroundColor: theme.palette.primary.main,
                borderRadius: 0.2,
                width: 4,
                height: 4,
              }}
            />
            <Box
              sx={{
                backgroundColor: theme.palette.primary.main,
                borderRadius: 0.2,
                width: 4,
                height: 4,
              }}
            />
            <Box
              sx={{
                backgroundColor: theme.palette.primary.main,
                borderRadius: 0.2,
                width: 4,
                height: 4,
              }}
            />
          </Box>
        </Box>
        <Typography
          variant="h5"
          component="h1"
        >
          Dashboard
        </Typography>
      </Box> */}

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <Grid
          container
          spacing={3}
        >
          {/* Sales Overview */}
          <Grid
            item
            xs={12}
            lg={6}
          >
            <motion.div variants={itemVariants}>
              <SalesOverview />
            </motion.div>
          </Grid>

          {/* Purchase Overview */}
          <Grid
            item
            xs={12}
            lg={6}
          >
            <motion.div variants={itemVariants}>
              <PurchaseOverview />
            </motion.div>
          </Grid>

          {/* Inventory Overview */}
          <Grid
            item
            xs={12}
            md={6}
            lg={3}
          >
            <motion.div variants={itemVariants}>
              <InventoryOverview />
            </motion.div>
          </Grid>

          {/* Users Overview */}
          <Grid
            item
            xs={12}
            md={6}
            lg={3}
          >
            <motion.div variants={itemVariants}>
              <UsersOverview />
            </motion.div>
          </Grid>

          {/* Stock Overview */}
          <Grid
            item
            xs={12}
            lg={6}
          >
            <motion.div variants={itemVariants}>
              <StockOverview />
            </motion.div>
          </Grid>

          {/* Sales Statistics */}
          <Grid
            item
            xs={12}
            lg={6}
          >
            <motion.div variants={itemVariants}>
              <SalesStatistics />
            </motion.div>
          </Grid>

          {/* Customer Statistics */}
          <Grid
            item
            xs={12}
            lg={6}
          >
            <motion.div variants={itemVariants}>
              <CustomerStatistics />
            </motion.div>
          </Grid>
        </Grid>
      </motion.div>
    </Container>
  );
};

export default DashboardContent;
