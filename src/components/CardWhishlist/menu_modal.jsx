/* eslint-disable react/prop-types */
import { Box, Button, CircularProgress, Stack } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { useThemeConstants } from "../../lib/constants/theme.constant";
import { useEffect, useRef } from "react";
import { grey } from "@mui/material/colors";
import { useNavigate } from "react-router-dom";
import { useDeleteInventoryWishlist } from "../../lib/hooks/usewishlist.action";
import { useTypeContext } from "../../context/UserType.context";
import { DeleteForeverOutlined } from "@mui/icons-material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

export default function MoreAction({ anchorEl, setAnchorEl, id }) {
  //Context
  const { token } = useTypeContext();

  //Navigations
  const navigate = useNavigate();

  //Mutaions
  const { isLoading, mutate, isSuccess } = useDeleteInventoryWishlist();

  //themes
  const { textSecondary } = useThemeConstants();

  //Functions
  const handleClick = () => {
    setAnchorEl(!anchorEl);
  };

  const handleViewProfile = () => navigate(`/pharmacy/inventoryprofile/${id}`);

  const menuRef = useRef(null);
  console.log("menuRef", menuRef.current);

  // 🔁 Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = () => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
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
            onClick={handleViewProfile}
          >
            View Profile
          </Button>
          <Button
            variant="outlined"
            color="error"
            cursor="pointer"
            disabled={isLoading}
            startIcon={
              isLoading ? (
                <CircularProgress
                  color="inherit"
                  size={20}
                />
              ) : isSuccess ? (
                <CheckCircleIcon
                  color="success"
                  size={20}
                />
              ) : (
                <DeleteForeverOutlined />
              )
            }
            onClick={() => {
              mutate({ token, id });
            }}
          >
            Delete
          </Button>
        </Stack>
      )}
    </Box>
  );
}
