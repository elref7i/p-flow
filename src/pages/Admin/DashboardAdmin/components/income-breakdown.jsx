import { useState } from "react";
import {
  Box,
  Typography,
  Paper,
  FormControl,
  Select,
  MenuItem,
  IconButton,
} from "@mui/material";
import {
  MoreVert as MoreVertIcon,
  KeyboardArrowRight as ArrowRightIcon,
} from "@mui/icons-material";
import { styled } from "@mui/material/styles";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";
import { useThemeConstants } from "../../../../lib/constants/theme.constant";

const SeeDetailLink = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  fontSize: "0.8rem",
  color: theme.palette.primary.main,
  cursor: "pointer",
  "& svg": {
    fontSize: "1rem",
  },
}));

// Mock data
const incomeBreakdownData = [
  { name: "Prescription", value: 52, color: "#6366F1" },
  { name: "OTC Drugs", value: 20, color: "#60A5FA" },
  { name: "Medical Supplies", value: 15, color: "#10B981" },
  { name: "Supplements", value: 13, color: "#F97316" },
];

export default function IncomeBreakdown() {
  const [incomeBreakdownPeriod, setIncomeBreakdownPeriod] =
    useState("December");

  const { backgroundLowered } = useThemeConstants();

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
        <Typography variant="h6">Income Breakdown</Typography>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <FormControl
            size="small"
            variant="outlined"
            sx={{ minWidth: 120 }}
          >
            <Select
              value={incomeBreakdownPeriod}
              onChange={(e) => setIncomeBreakdownPeriod(e.target.value)}
              displayEmpty
              inputProps={{ "aria-label": "Without label" }}
            >
              <MenuItem value="December">December</MenuItem>
              <MenuItem value="November">November</MenuItem>
              <MenuItem value="October">October</MenuItem>
              <MenuItem value="Q4 2023">Q4 2023</MenuItem>
            </Select>
          </FormControl>
          <IconButton size="small">
            <MoreVertIcon fontSize="small" />
          </IconButton>
        </Box>
      </Box>

      <Box sx={{ display: "flex", flexDirection: "column", height: "100%" }}>
        <Box sx={{ height: 180, display: "flex", justifyContent: "center" }}>
          <ResponsiveContainer
            width="100%"
            height="100%"
          >
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
                  <Cell
                    key={`cell-${index}`}
                    fill={entry.color}
                  />
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
                  <Box
                    component="span"
                    sx={{ fontWeight: "bold", mr: 0.5 }}
                  >
                    {item.value}%
                  </Box>
                  {item.name}
                </Typography>
              </Box>
              <Typography variant="body2">
                ${((39419.76 * item.value) / 100).toFixed(2)}
              </Typography>
              <SeeDetailLink>
                See Detail <ArrowRightIcon />
              </SeeDetailLink>
            </Box>
          ))}
        </Box>
      </Box>
    </Paper>
  );
}
