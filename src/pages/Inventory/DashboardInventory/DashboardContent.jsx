/* eslint-disable no-undef */
import { Container, Grid } from "@mui/material";
import { motion } from "framer-motion";
import SalesOverview from "./components/SalesOverview";
import PurchaseOverview from "./components/PurchaseOverview";
import InventoryOverview from "./components/InventoryOverview";
import StockOverview from "./components/StockOverview";
import SalesStatistics from "./components/SalesStatistics";
import CustomerStatistics from "./components/CustomerStatistics";
import { useStatisticsInventory } from "../../../lib/hooks/useinventory.action";
import { useTypeContext } from "../../../context/UserType.context";

const DashboardContent = () => {
  //Context
  const { token } = useTypeContext();

  //Queries
  const { data, isLoading } = useStatisticsInventory({ token });

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
              <SalesOverview
                dataInfo={data}
                isLoading={isLoading}
              />
            </motion.div>
          </Grid>
          {/* Purchase Overview */}
          <Grid
            item
            xs={12}
            lg={6}
          >
            <motion.div variants={itemVariants}>
              <PurchaseOverview
                dataInfo={data}
                isLoading={isLoading}
              />
            </motion.div>
          </Grid>
          {/* Inventory Overview */}
          <Grid
            item
            xs={12}
            md={6}
            lg={6}
          >
            <motion.div variants={itemVariants}>
              <InventoryOverview
                dataInfo={data}
                isLoading={isLoading}
              />
            </motion.div>
          </Grid>

          {/* Stock Overview */}
          <Grid
            item
            xs={12}
            lg={6}
          >
            <motion.div variants={itemVariants}>
              <StockOverview
                dataInfo={data}
                isLoading={isLoading}
              />
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
              {data && data.categoriesStats.length > 0 && (
                <CustomerStatistics
                  dataInfo={data}
                  isLoading={isLoading}
                />
              )}
            </motion.div>
          </Grid>
        </Grid>
      </motion.div>
    </Container>
  );
};

export default DashboardContent;
