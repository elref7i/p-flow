import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import { useThemeConstants } from "../../../lib/constants/theme.constant";

export default function LoadingSpinner() {
  //Temes
  const { textLink } = useThemeConstants();

  return (
    <Box
      sx={{
        display: "flex",
      }}
    >
      <CircularProgress color={textLink} />
    </Box>
  );
}
