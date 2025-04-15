"use client";
import { Box, Card, CardContent, Typography, useTheme } from "@mui/material";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { People } from "@mui/icons-material";

const CustomerStatistics = () => {
  const theme = useTheme();

  const data = [
    { name: "JAN", value: 800 },
    { name: "FEB", value: 700 },
    { name: "MAR", value: 1200 },
    { name: "APR", value: 900 },
    { name: "MAY", value: 500 },
    { name: "JUN", value: 800 },
    { name: "JUL", value: 1377 },
    { name: "AUG", value: 1300 },
    { name: "SEP", value: 1100 },
  ];

  return (
    <Card sx={{ height: "100%" }}>
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
              color: theme.palette.primary.main,
              mr: 2,
            }}
          >
            <People />
          </Box>
          <Typography variant="h6">Customer Statistics</Typography>
        </Box>

        <Typography
          variant="h5"
          sx={{ fontWeight: "bold", color: theme.palette.primary.main, mb: 2 }}
        >
          {data[6].value.toLocaleString()}
        </Typography>

        <Box sx={{ height: 300, mt: 4 }}>
          <ResponsiveContainer
            width="100%"
            height="100%"
          >
            <BarChart
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
                stroke="#f0f0f0"
              />
              <XAxis
                dataKey="name"
                axisLine={false}
                tickLine={false}
                tick={{ fill: theme.palette.text.secondary, fontSize: 12 }}
              />
              <YAxis hide={true} />
              <Tooltip
                contentStyle={{
                  backgroundColor: theme.palette.background.paper,
                  border: "none",
                  borderRadius: 8,
                  boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
                }}
                formatter={(value) => [value.toLocaleString(), "Customers"]}
                labelFormatter={(label) => `Month: ${label}`}
              />
              <Bar
                dataKey="value"
                fill={theme.palette.primary.main}
                radius={[4, 4, 0, 0]}
                barSize={30}
              />
            </BarChart>
          </ResponsiveContainer>
        </Box>
      </CardContent>
    </Card>
  );
};

export default CustomerStatistics;
