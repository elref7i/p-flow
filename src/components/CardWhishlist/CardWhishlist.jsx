import { Box, Card, CardContent, Chip, Stack, Typography } from "@mui/material";
import { Phone, Room } from "@mui/icons-material";
import { useThemeConstants } from "../../lib/constants/theme.constant";
import MoreAction from "./menu_modal";
import { useState } from "react";

export default function WishlistCard() {
  const [anchorEl, setAnchorEl] = useState(false);
  // Theme constants - you can adjust these based on your theme
  // const themeConstants = {
  //   textPrimary: "#1a1a1a",
  //   textSecondary: "#666666",
  //   buttonBackground: "#f5f5f5",
  //   buttonHover: "#e0e0e0",
  //   buttonText: "#333333",
  //   success: "#4caf50",
  //   cardDetailsBackground: "#f9f9f9",
  // };

  const {
    textPrimary,
    textSecondary,
    cardDetailsBackground,
    success,
    typography,
    background,
    cardBackground,
  } = useThemeConstants();

  return (
    <Card
      sx={{
        borderRadius: "10px",
        boxShadow: 1,
        overflow: "initial",
        position: "relative",
        backgroundColor: cardBackground,
      }}
    >
      <MoreAction
        anchorEl={anchorEl}
        setAnchorEl={setAnchorEl}
      />
      <CardContent sx={{ p: 2 }}>
        <Stack
          direction="row"
          spacing={2}
        >
          {/* Image */}
          <Box
            component="img"
            src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
            alt="Inventory Image"
            sx={{
              width: 80,
              height: 80,
              borderRadius: "15px",
              objectFit: "cover",
            }}
          />

          {/* Content */}
          <Stack
            spacing={1}
            sx={{ minWidth: 0 }}
          >
            {/* Header with name and price */}
            <Stack
              direction="row"
              alignItems="center"
              spacing={1}
            >
              <Typography
                variant="subtitle1"
                sx={{
                  color: textPrimary,
                  fontWeight: typography.h4.fontWeight,
                  fontSize: typography.h4.fontSize,
                  lineHeight: typography.h4.lineHeight,
                  whiteSpace: "nowrap",
                }}
              >
                Ahmed Refai
              </Typography>

              <Chip
                label={
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    1000
                    <Box
                      component="span"
                      sx={{ fontSize: "0.7rem", ml: 0.3 }}
                    >
                      EGP
                    </Box>
                  </Box>
                }
                size="small"
                sx={{
                  bgcolor: cardDetailsBackground,
                  color: success,
                  fontWeight: 500,
                  height: "auto",
                  py: 0.5,
                }}
              />
            </Stack>

            {/* Location */}
            <Stack
              direction="row"
              alignItems="center"
              spacing={1}
              sx={{ color: textSecondary }}
            >
              <Room
                fontSize="small"
                sx={{ fontSize: 16 }}
              />
              <Typography
                variant="body2"
                sx={{
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap",
                }}
              >
                {"inventory.governorate"}, {"inventory.city"}
              </Typography>
            </Stack>

            {/* Phone */}
            <Stack
              direction="row"
              alignItems="center"
              spacing={1}
              sx={{ color: textSecondary }}
            >
              <Phone
                fontSize="small"
                sx={{ fontSize: 16 }}
              />
              <Typography variant="body2">+201007890938</Typography>
            </Stack>
          </Stack>
        </Stack>
      </CardContent>
    </Card>
  );
}
