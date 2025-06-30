import { useState } from "react";
import {
  Box,
  Typography,
  Paper,
  FormControl,
  Select,
  MenuItem,
} from "@mui/material";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { useThemeConstants } from "../../../../lib/constants/theme.constant";
import CashflowChartSkeleton from "../../../../components/Common/Loading/CashflowChartSkeleton";
import { useAdminStatstics } from "../../../../lib/hooks/use-admin";

// Mock data
const cashflowData = [
  { name: "May", income: 65000 },
  { name: "Jun", income: 45000 },
  { name: "Jul", income: 40000 },
  { name: "Aug", income: 30000 },
  { name: "Sep", income: 45000 },
  { name: "Oct", income: 70000 },
  { name: "Nov", income: 50000 },
  { name: "Dec", income: 65000 },
];

export default function CashflowChart() {
  const { gradientChart, chartBlue } = useThemeConstants();
  const [timeframe, setTimeframe] = useState("Last 6 Months");
  const { isLoading } = useAdminStatstics();

  if (isLoading) return <CashflowChartSkeleton />;

  return (
    <Paper
      elevation={0}
      sx={{
        p: 2,
        height: "100%",
        background: gradientChart,
        boxShadow: 8,
        "&:hover": { boxShadow: 9 },
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 2,
        }}
      >
        <Typography variant="h3">Cashflow</Typography>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <FormControl size="small" variant="outlined" sx={{ minWidth: 150 }}>
            <Select
              value={timeframe}
              onChange={(e) => setTimeframe(e.target.value)}
              displayEmpty
              inputProps={{ "aria-label": "Without label" }}
            >
              <MenuItem value="Last 6 Months">Last 6 Months</MenuItem>
              <MenuItem value="This Year">This Year</MenuItem>
              <MenuItem value="Last Year">Last Year</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </Box>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart
          data={cashflowData}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis dataKey="name" />
          <YAxis
            tickFormatter={(value) => `${value / 1000}k`}
            axisLine={false}
            tickLine={false}
          />
          <Tooltip
            formatter={(value) => [`${value.toLocaleString()}`, undefined]}
            labelFormatter={(label) => `Month: ${label}`}
          />
          <Legend />

          <Bar dataKey="income" fill={chartBlue} name="Income" />
          {/* <Bar dataKey="expense" fill={chartGray} name="Expense" /> */}
        </BarChart>
      </ResponsiveContainer>
    </Paper>
  );
}
