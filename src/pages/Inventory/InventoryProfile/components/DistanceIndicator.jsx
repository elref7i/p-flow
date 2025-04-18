/* eslint-disable react/prop-types */
import {
  Box,
  Typography,
  LinearProgress,
  useTheme,
  alpha,
} from "@mui/material";
import { formatNumber } from "../../../../lib/utils/formateNumber";

const DistanceIndicator = ({ distance }) => {
  const theme = useTheme();

  // Determine distance color based on distance in km
  const getDistanceColor = (distance) => {
    if (distance < 5) return theme.palette.primary.main; // Blue for close
    if (distance < 10) return theme.palette.warning.main; // Yellow for medium
    return theme.palette.error.main; // Red for far
  };

  // Calculate progress value (0-100) based on distance
  // Assuming max distance is 20km
  const getDistanceProgress = (distance) => {
    const maxDistance = 20;
    return Math.min(100, (distance / maxDistance) * 100);
  };

  const distanceColor = getDistanceColor(distance);
  const distanceProgress = getDistanceProgress(distance);

  return (
    <Box sx={{ mb: 2 }}>
      <Box sx={{ display: "flex", justifyContent: "space-between", mb: 0.5 }}>
        <Typography
          variant="caption"
          color="text.secondary"
        >
          Distance
        </Typography>
        <Typography
          variant="caption"
          fontWeight="medium"
          sx={{ color: distanceColor }}
        >
          {formatNumber(distance)} km
        </Typography>
      </Box>
      <LinearProgress
        variant="determinate"
        value={distanceProgress}
        sx={{
          height: 6,
          borderRadius: 3,
          bgcolor: alpha(distanceColor, 0.1),
          "& .MuiLinearProgress-bar": {
            bgcolor: distanceColor,
          },
        }}
      />
    </Box>
  );
};

export default DistanceIndicator;
