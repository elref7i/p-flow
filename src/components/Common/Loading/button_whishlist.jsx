/* eslint-disable react/prop-types */
import AddCircleOutlineTwoToneIcon from "@mui/icons-material/AddCircleOutlineTwoTone";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import { IconButton } from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import { useThemeConstants } from "../../../lib/constants/theme.constant";
import {
  useAddnventoryWishlist,
  useWishlist,
} from "../../../lib/hooks/usewishlist.action";
import { useTypeContext } from "../../../context/UserType.context";

export default function ButtonWhishlist({ check, id }) {
  const { token } = useTypeContext();
  const { buttonBackground, buttonHover, buttonText, success } =
    useThemeConstants();
  const { mutate } = useAddnventoryWishlist();
  const { data, isLoading } = useWishlist({ token });
  if (isLoading || !data || !Array.isArray(data.data)) return null;

  const isInWishlist = data.data.some((item) => item._id === id);

  return (
    <motion.div
      whileTap={{ scale: 0.85 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <IconButton
        size="large"
        onClick={() => {
          mutate({ token, id });
        }}
        disabled={check || isLoading}
        sx={{
          position: "absolute",
          top: 10,
          right: 10,
          zIndex: 10,
          bgcolor: buttonBackground,
          color: buttonText,
          "&:hover": {
            bgcolor: buttonHover,
          },
        }}
      >
        <AnimatePresence mode="wait" initial={false}>
          {isInWishlist ? (
            <CheckCircleOutlineIcon sx={{ color: success }} />
          ) : (
            <AddCircleOutlineTwoToneIcon sx={{ color: "error" }} />
          )}
        </AnimatePresence>
      </IconButton>
    </motion.div>
  );
}
