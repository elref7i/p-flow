import { Box, useMediaQuery, useTheme } from "@mui/material";
import { motion } from "framer-motion";
import DashboardContent from "./DashboardContent";
// import DashboardContent from "./DashboardContent";

const DashboardInventory = () => {
  //Themes
  const theme = useTheme();

  //Variables
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
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
  );
};

export default DashboardInventory;
