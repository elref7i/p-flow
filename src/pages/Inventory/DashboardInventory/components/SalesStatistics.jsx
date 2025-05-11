import { Box, Card, CardContent, Typography, useTheme } from "@mui/material";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { BarChart as ChartIcon } from "@mui/icons-material";
import { useThemeConstants } from "../../../../lib/constants/theme.constant";

const SalesStatistics = () => {
  const {
    textWarning,
    textSecondary,
    gradientChart,
    textPrimary,
    paperBackground,
  } = useThemeConstants();

  const data = [
    { name: "JAN", value: 30000 },
    { name: "FEB", value: 35000 },
    { name: "MAR", value: 45000 },
    { name: "APR", value: 40000 },
    { name: "MAY", value: 50000 },
    { name: "JUN", value: 65000 },
    { name: "JUL", value: 67347 },
    { name: "AUG", value: 60000 },
    { name: "SEP", value: 65000 },
  ];

  return (
    <Card
      sx={{
        height: "100%",
        background: gradientChart,
        color: textPrimary,
        boxShadow: 9,
        ":hover": {
          boxShadow: 8,
        },
      }}
    >
      <CardContent>
        <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: "50%",
              width: 36,
              height: 36,
              backgroundColor: "rgba(76, 175, 80, 0.1)",
              color: textPrimary,
              mr: 2,
            }}
          >
            <ChartIcon />
          </Box>
          <Typography variant="h3">Sales Statistics</Typography>
        </Box>

        <Typography
          variant="h5"
          sx={{ fontWeight: "bold", color: textWarning, mb: 2 }}
        >
          ${data[6].value.toLocaleString()}
        </Typography>

        <Box sx={{ height: 300, mt: 4 }}>
          <ResponsiveContainer
            width="100%"
            height="100%"
          >
            <LineChart
              data={data}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid
                strokeDasharray="3 3"
                vertical={false}
                stroke={textPrimary}
              />
              <XAxis
                dataKey="name"
                axisLine={false}
                tickLine={false}
                tick={{ fill: textSecondary, fontSize: 12 }}
              />
              <YAxis hide={true} />
              <Tooltip
                contentStyle={{
                  backgroundColor: paperBackground,
                  border: "none",
                  borderRadius: 8,
                  boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
                }}
                formatter={(value) => [`$${value.toLocaleString()}`, "Sales"]}
                labelFormatter={(label) => `Month: ${label}`}
              />
              <Line
                type="monotone"
                dataKey="value"
                stroke={textPrimary}
                strokeWidth={3}
                dot={false}
                activeDot={{
                  r: 8,
                  fill: textPrimary,
                  strokeWidth: 4,
                  stroke: paperBackground,
                }}
              />
            </LineChart>
          </ResponsiveContainer>
        </Box>
      </CardContent>
    </Card>
  );
};

export default SalesStatistics;
