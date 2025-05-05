/* eslint-disable react/prop-types */
import { Box, Button, Stack } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { useThemeConstants } from "../../lib/constants/theme.constant";
import { useEffect, useRef } from "react";
import { grey } from "@mui/material/colors";
export default function MoreAction({ anchorEl, setAnchorEl }) {
  //themes
  const { textSecondary, cartBackground, background } = useThemeConstants();

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
    const handleClickOutside = () => {
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
            zIndex: 1000,
            position: "absolute",
            top: 40,
            right: 0,
            p: 1,
            background: grey[100],
            borderRadius: "5px",
            boxShadow: 1,
          }}
        >
          <Button
            variant="outlined"
            onClick={handleClose}
          >
            View Profile
          </Button>
          <Button
            variant="outlined"
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
