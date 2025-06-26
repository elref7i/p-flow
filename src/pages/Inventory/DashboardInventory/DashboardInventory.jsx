import { Box, useMediaQuery, useTheme } from "@mui/material";
import { motion } from "framer-motion";
import DashboardContent from "./DashboardContent";
import { Helmet } from "react-helmet";

const DashboardInventory = () => {
  //Themes
  const theme = useTheme();

  //Variables
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <>
      <Helmet>
        <title>Inventory Dashboard</title>
        <meta
          name="description"
          content="Track, manage, and optimize your pharmacy inventory with the Inventory Dashboard from P-Flow."
        />
        <meta
          name="keywords"
          content="pharmacy inventory, inventory dashboard, p-flow, drug management, stock tracking"
        />
        <meta property="og:title" content="Inventory Dashboard | P-Flow" />
        <meta
          property="og:description"
          content="Track, manage, and optimize your pharmacy inventory with P-Flow's powerful dashboard."
        />
        <meta property="og:type" content="website" />
      </Helmet>
      <Box sx={{ display: "flex", width: "100%" }}>
        <Box
          component={motion.div}
          layout
          sx={{
            flexGrow: 1,
            transition: theme.transitions.create(["margin", "width"], {
              easing: theme.transitions.easing.sharp,
              duration: theme.transitions.duration.leavingScreen,
            }),
            marginLeft: 0,
            ...(isMobile && {
              transition: theme.transitions.create(["margin", "width"], {
                easing: theme.transitions.easing.easeOut,
                duration: theme.transitions.duration.enteringScreen,
              }),
            }),
          }}
        >
          <DashboardContent />
        </Box>
      </Box>
    </>
  );
};

export default DashboardInventory;
