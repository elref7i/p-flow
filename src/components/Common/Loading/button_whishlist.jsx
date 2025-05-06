/* eslint-disable react/prop-types */
import AddCircleOutlineTwoToneIcon from "@mui/icons-material/AddCircleOutlineTwoTone";
import { IconButton } from "@mui/material";
import { useThemeConstants } from "../../../lib/constants/theme.constant";
import { useAddnventoryWishlist } from "../../../lib/hooks/usewishlist.action";
import { useTypeContext } from "../../../context/UserType.context";

// هبعت لسه function

export default function ButtonWhishlist({ check, id }) {
  //Context
  const { token } = useTypeContext();

  //Themes
  const { buttonBackground, buttonHover, buttonText } = useThemeConstants();

  //Mutations
  const { isLoading, isSuccess, mutate } = useAddnventoryWishlist();

  return (
    <IconButton
      size="large"
      onClick={() => {
        mutate({ token, id });
      }}
      disabled={isLoading}
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
