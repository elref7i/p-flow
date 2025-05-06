/* eslint-disable react/prop-types */
import { Box, Card, CardContent, Chip, Stack, Typography } from "@mui/material";
import { Phone, Room } from "@mui/icons-material";
import { useThemeConstants } from "../../lib/constants/theme.constant";
import MoreAction from "./menu_modal";
import { useState } from "react";

export default function WishlistCard({ inventory }) {
  //States
  const [anchorEl, setAnchorEl] = useState(false);

  //Mutations

  //Themes
  const {
    textPrimary,
    textSecondary,
    cardDetailsBackground,
    success,
    typography,
    cardBackground,
  } = useThemeConstants();

  //Data
  const {
    name,
    phone,
    profileImage,
    city,
    governorate,
    minimumOrderValue,
    _id: id,
  } = inventory;

  return (
    <Card
      sx={{
        borderRadius: "10px",
        boxShadow: 5,
        overflow: "initial",
        position: "relative",
        width: "100%",
        backgroundColor: cardBackground,
      }}
    >
      <MoreAction
        id={id}
        anchorEl={anchorEl}
        setAnchorEl={setAnchorEl}
      />
      <CardContent sx={{ p: 2 }}>
        <Stack
          direction="row"
          spacing={2}
        >
          <Box
            component="img"
            src={profileImage}
            alt={name}
            sx={{
              width: 70,
              height: 70,
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
                  textTransform: "capitalize",
                  color: textPrimary,
                  fontWeight: typography.h6.fontWeight,
                  fontSize: typography.h6.fontSize,
                  lineHeight: typography.h6.lineHeight,
                  whiteSpace: "nowrap",
                }}
              >
                {name}
              </Typography>

              <Chip
                label={
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      flexWrap: "wrap",
                      fontWeight: "bold",
                      fontStyle: "italic",
                    }}
                  >
                    {minimumOrderValue}
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
                {governorate}, {city}
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
              <Typography variant="body2">{phone}</Typography>
            </Stack>
          </Stack>
        </Stack>
      </CardContent>
    </Card>
  );
}
