/* eslint-disable react/prop-types */
import { Box, Button, Stack } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { useThemeConstants } from "../../lib/constants/theme.constant";
import { useEffect, useRef } from "react";
export default function MoreAction({ anchorEl, setAnchorEl }) {
  //States

  //themes
  const { textSecondary, cartBackground } = useThemeConstants();

  //Functions
  const handleClick = () => {
    setAnchorEl(!anchorEl);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const menuRef = useRef(null);
  console.log("menuRef", menuRef.current);

  // 🔁 Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current) {
        setAnchorEl(false);
      }
    };

    if (anchorEl) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [anchorEl, setAnchorEl]);

  return (
    <Box>
      <MoreVertIcon
        onClick={handleClick}
        sx={{
          position: "absolute",
          top: 11,
          right: 3,
          cursor: "pointer",
          color: textSecondary,
        }}
      />
      {anchorEl && (
        <Stack
          ref={menuRef}
          gap={2}
          sx={{
            position: "absolute",
            top: 40,
            right: 0,
            p: 2,
            background: cartBackground,
            borderRadius: "5px",
            boxShadow: 3,
          }}
        >
          <Button
            variant="text"
            onClick={handleClose}
          >
            View Profile
          </Button>
          <Button
            variant="text"
            color="error"
            onClick={handleClose}
          >
            Delete
          </Button>
        </Stack>
      )}
    </Box>
  );
}
