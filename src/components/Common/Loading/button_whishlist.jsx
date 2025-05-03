/* eslint-disable react/prop-types */
import AddCircleOutlineTwoToneIcon from "@mui/icons-material/AddCircleOutlineTwoTone";
import { IconButton } from "@mui/material";
import { useThemeConstants } from "../../../lib/constants/theme.constant";

// هبعت لسه function

export default function ButtonWhishlist({ check }) {
  //Themes
  const { buttonBackground, buttonHover, buttonText } = useThemeConstants();

  return (
    <IconButton
      size="large"
      // onClick={handleWishlistToggle}
      sx={{
        position: "absolute",
        top: check ? 40 : 10,
        right: 10,
        zIndex: 10,
        bgcolor: buttonBackground,
        color: buttonText,
        "&:hover": {
          bgcolor: buttonHover,
        },
      }}
    >
      <AddCircleOutlineTwoToneIcon sx={{ color: "error" }} />
      {/* {inWishlist ? <Favorite sx={{ color: error }} /> : <FavoriteBorder sx={{ color: textPrimary }} />} */}
    </IconButton>
  );
}
