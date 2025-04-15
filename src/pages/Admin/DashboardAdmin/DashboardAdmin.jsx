"use client";

import { Helmet } from "react-helmet";
import { Box, Typography, Grid, Button } from "@mui/material";
import {
  Refresh as RefreshIcon,
  FileDownload as ExportIcon,
} from "@mui/icons-material";
import { styled, alpha } from "@mui/material/styles";
import MetricCards from "./components/metric-cards";
import CashflowChart from "./components/cashflow-chart";
import IncomeBreakdown from "./components/income-breakdown";
import TransactionHistory from "./components/transaction-history";

const MainContent = styled(Box)(({ theme }) => ({
  flexGrow: 1,
  maxWidth: "lg",
  mx: "auto",
  backgroundColor: alpha(theme.palette.primary.light, 0.03),
  minHeight: "100vh",
}));

export default function DashboardAdmin() {
  return (
    <>
      <Helmet>
        <title>Pharmacy Admin Dashboard</title>
        <meta
          name="description"
          content="Admin panel to manage pharmacy inventory, transactions, and analytics."
        />
        <meta
          name="keywords"
          content="pharmacy, admin, dashboard, management, inventory, transactions, analytics"
        />
      </Helmet>

      <Box
        sx={{ display: "flex" }}
        container="lg"
      >
        {/* Main Content */}
        <MainContent>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              mb: 3,
            }}
          >
            <Typography
              variant="h5"
              fontWeight="bold"
            >
              Dashboard
            </Typography>
            <Box sx={{ display: "flex", gap: 1 }}>
              <Button
                variant="outlined"
                startIcon={<RefreshIcon />}
                size="small"
              >
                Refresh Data
              </Button>
              <Button
                variant="contained"
                startIcon={<ExportIcon />}
                size="small"
              >
                Export
              </Button>
            </Box>
          </Box>

          {/* Metrics Cards */}
          <MetricCards />

          {/* Charts Section */}
          <Grid
            container
            spacing={3}
            sx={{ mb: 3 }}
          >
            {/* Cashflow Chart */}
            <Grid
              item
              xs={12}
              md={8}
            >
              <CashflowChart />
            </Grid>

            {/* Income Breakdown */}
            <Grid
              item
              xs={12}
              md={4}
            >
              <IncomeBreakdown />
            </Grid>
          </Grid>

          {/* Transaction History */}
          <TransactionHistory />
        </MainContent>
      </Box>
    </>
  );
}
