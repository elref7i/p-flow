import { Helmet } from "react-helmet";
import { Box, Grid } from "@mui/material";

import { styled } from "@mui/material/styles";
import CashflowChart from "./components/cashflow-chart";
import { useThemeConstants } from "../../../lib/constants/theme.constant";
import TopInventories from "./components/TopInventories";
import UsersStatistics from "./components/UsersStatistics";
import TopCards from "./components/TopCards";

const MainContent = styled(Box)(({ theme }) => ({
  flexGrow: 1,
  maxWidth: "lg",
  mx: "auto",
  minHeight: "100vh",
  width: "100%",
  [theme.breakpoints.down("sm")]: {
    minHeight: "auto",
  },
}));

export default function DashboardAdmin() {
  const { dashboardBackground } = useThemeConstants();
  return (
    <>
      <Helmet>
        <title>Admin Dashboard</title>
        <meta
          name="description"
          content="Admin panel to manage pharmacy, inventory, transactions, and analytics."
        />
        <meta
          name="keywords"
          content="pharmacy, admin, dashboard, management, inventory, transactions, analytics"
        />
      </Helmet>

      <Box
        sx={{
          display: "flex",
          bgcolor: dashboardBackground,
          p: { xs: 1, sm: 1.5, md: 2 },
          borderRadius: { xs: 1, sm: 2 },
          boxShadow: { xs: 4, sm: 8 },
          minHeight: { xs: "auto", sm: "100vh" },
        }}
        container="lg"
      >
        {/* Main Content */}
        <MainContent>
          {/* Metrics Cards */}
          <Box sx={{ mb: { xs: 2, sm: 3 } }}>
            <TopCards />
          </Box>

          {/* Charts Section */}
          <Grid
            container
            spacing={{ xs: 2, sm: 3 }}
            sx={{ mb: { xs: 2, sm: 3 } }}
          >
            {/* Cashflow Chart */}
            <Grid item xs={12} lg={8}>
              <CashflowChart />
            </Grid>

            {/* Income Breakdown */}
            <Grid item xs={12} lg={4}>
              <UsersStatistics />
            </Grid>
          </Grid>

          {/* Transaction History */}
          <Box>
            <TopInventories />
          </Box>
        </MainContent>
      </Box>
    </>
  );
}
