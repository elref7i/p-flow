import { Box, Typography, Paper } from "@mui/material";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";
import { useThemeConstants } from "../../../../lib/constants/theme.constant";
import { useAdminStatstics } from "../../../../lib/hooks/useAdminAction";
import UserStatisticsSkeleton from "../../../../components/Common/Loading/UserStatisticsSkeleton";

export default function UsersStatistics() {
  const { backgroundLowered } = useThemeConstants();
  const { data: statistics, isLoading } = useAdminStatstics();

  // Mock data
  const incomeBreakdownData = [
    {
      name: "Total Users",
      value: statistics?.totalUsers,
      // color: "#F97316",
      color: "#10B981",
    },
    {
      name: "Verified Users",
      value: statistics?.verifiedUsers,
      color: "#6366F1",
    },
    {
      name: "Unverified Users",
      value: statistics?.unverifiedUsers,
      color: "#94a3b8",
    },
    { name: "Active Users", value: statistics?.activeUsers, color: "#60A5FA" },
    {
      name: "Inactive Users",
      value: statistics?.inactiveUsers,
      color: "#F97316",
    },
  ];

  if (isLoading) return <UserStatisticsSkeleton />;

  return (
    <Paper
      elevation={9}
      sx={{
        p: 2,
        height: "100%",
        background: backgroundLowered,
        "&:hover": { boxShadow: 8 },
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
        <Typography variant="h5">Users Statistics</Typography>
      </Box>

      <Box sx={{ display: "flex", flexDirection: "column", height: "100%" }}>
        <Box sx={{ height: 180, display: "flex", justifyContent: "center" }}>
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={incomeBreakdownData}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={80}
                paddingAngle={2}
                dataKey="value"
              >
                {incomeBreakdownData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip formatter={(value) => [`${value}%`, undefined]} />
            </PieChart>
          </ResponsiveContainer>
        </Box>

        <Box sx={{ mt: 2 }}>
          {incomeBreakdownData.map((item, index) => (
            <Box
              key={index}
              sx={{
                display: "flex",
                justifyContent: "space-between",
                mb: 1,
                alignItems: "center",
              }}
            >
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <Box
                  sx={{
                    width: 12,
                    height: 12,
                    borderRadius: "50%",
                    backgroundColor: item.color,
                    mr: 1,
                  }}
                />
                <Typography
                  variant="body2"
                  sx={{ display: "flex", alignItems: "center" }}
                >
                  {item.name}
                </Typography>
              </Box>
              <Typography variant="body2">{item.value}</Typography>
            </Box>
          ))}
        </Box>
      </Box>
    </Paper>
  );
}
