import { Helmet } from "react-helmet";
import { Box, Grid } from "@mui/material";

import { styled } from "@mui/material/styles";
import CashflowChart from "./components/cashflow-chart";
import { useThemeConstants } from "../../../lib/constants/theme.constant";
import TopInventories from "./components/TopInventories";
import UsersStatistics from "./components/UsersStatistics";
import TopCards from "./components/TopCards";

const MainContent = styled(Box)(() => ({
  flexGrow: 1,
  maxWidth: "lg",
  mx: "auto",
  minHeight: "100vh",
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
          p: 1.5,
          borderRadius: 2,
          boxShadow: 8,
        }}
        container="lg"
      >
        {/* Main Content */}
        <MainContent>
          {/* Metrics Cards */}
          <TopCards />

          {/* Charts Section */}
          <Grid container spacing={3} sx={{ mb: 3 }}>
            {/* Cashflow Chart */}
            <Grid item xs={12} md={8}>
              <CashflowChart />
            </Grid>

            {/* Income Breakdown */}
            <Grid item xs={12} md={4}>
              <UsersStatistics />
            </Grid>
          </Grid>

          {/* Transaction History */}
          <TopInventories />
        </MainContent>
      </Box>
    </>
  );
}
