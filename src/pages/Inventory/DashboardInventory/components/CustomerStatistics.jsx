/* eslint-disable react/prop-types */
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
import { useThemeConstants } from "../../../../lib/constants/theme.constant";
import CardDashboardSkeleton from "../../../../components/Common/Loading/card_dashboard_skeleton";
import CategoryIcon from "@mui/icons-material/Category";
const CustomerStatistics = ({ isLoading, dataInfo }) => {
  //Themes
  const { badgeBackground, textPrimary } = useThemeConstants();
  const theme = useTheme();

  if (isLoading) return <CardDashboardSkeleton />;
  const { categoriesStats } = dataInfo;

  return (
    <Card
      sx={{
        height: "100%",
        background: badgeBackground,
        boxShadow: 7,
        ":hover": {
          boxShadow: 6,
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
              color: theme.palette.primary.main,
              mr: 2,
            }}
          >
            <CategoryIcon />
          </Box>
          <Typography variant="h3">Categoires Statistics</Typography>
        </Box>

        <Typography
          variant="h5"
          sx={{ fontWeight: "bold", color: theme.palette.primary.main, mb: 2 }}
        >
          {categoriesStats.length >= 0
            ? categoriesStats[0]?.nearExpirationCount.toLocaleString()
            : "0"}
        </Typography>

        <Box sx={{ height: 300, mt: 4 }}>
          <ResponsiveContainer
            width="100%"
            height="100%"
          >
            <BarChart
              data={categoriesStats}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid
                strokeDasharray="6 6"
                vertical={false}
                stroke={textPrimary}
              />
              <XAxis
                dataKey="categoryName"
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
                formatter={(totalStockInCategory) => [
                  totalStockInCategory.toLocaleString(),
                  "Stock in category",
                ]}
                labelFormatter={(label) => `Category name: ${label}`}
              />
              <Bar
                dataKey="totalStockInCategory"
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
