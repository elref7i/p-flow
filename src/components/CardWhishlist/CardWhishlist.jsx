import { Box, Grid2, IconButton, Stack, Typography } from "@mui/material";
import { useThemeConstants } from "../../lib/constants/theme.constant";
import { Phone } from "@mui/icons-material";
import RoomIcon from "@mui/icons-material/Room";
import MoreAction from "./menu_modal";
import { useState } from "react";

export default function CardWhishlist() {
  //states
  const [anchorEl, setAnchorEl] = useState(false);

  //Themes
  const {
    typography,
    textPrimary,
    buttonBackground,
    buttonHover,
    buttonText,
    cardDetailsBackground,
    success,
    textSecondary,
  } = useThemeConstants();

  return (
    <Grid2
      sx={{
        display: "flex",
        alignItems: "start",
        gap: 3,
        boxShadow: 1,
        borderRadius: "20px",
        px: "5px",
        py: "20px",
        position: "relative",
      }}
      size={{ xs: 12, md: 6 }}
      item
    >
      <MoreAction
        anchorEl={anchorEl}
        setAnchorEl={setAnchorEl}
      />
      <Box
        component={"img"}
        sx={{
          width: "100px",
          height: "100px",
          objectFit: "cover",
          borderRadius: "10px",
        }}
        alt="Inventory Image"
        src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
      ></Box>
      <Stack>
        <Stack
          direction={"row"}
          gap={2}
          mb={2}
          alignItems={"center"}
          component={"header"}
        >
          <Typography
            variant="h1"
            sx={{ color: textPrimary }}
            textTransform={"capitalize"}
          >
            Ahmed Refai
          </Typography>
          <Typography
            variant="h5"
            sx={{
              background: cardDetailsBackground,
              borderRadius: "50%",
              width: "45px",
              height: "45px",
              color: success,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              fontWeight: typography.h6.fontWeight,
              fontSize: typography.h6.fontSize,
              lineHeight: typography.h6.lineHeight,
              boxShadow: 1,
            }}
          >
            1000
            {/* {inventory.minimumOrderValue.toLocaleString()}{" "} */}
            <Box
              component={"span"}
              sx={{ fontSize: "13px" }}
            >
              EGP
            </Box>
          </Typography>
        </Stack>
        <Box sx={{ flexGrow: 1, color: textSecondary }}>
          <Stack spacing={1.5}>
            <Stack
              alignItems="start"
              gap={2}
              justifyContent={"center"}
            >
              <Stack
                direction={"row"}
                alignItems="center"
                gap={2}
              >
                <IconButton
                  size="small"
                  sx={{
                    bgcolor: buttonBackground,
                    color: buttonText,
                    "&:hover": {
                      background: buttonHover,
                    },
                  }}
                >
                  <RoomIcon fontSize="small" />
                </IconButton>
                <Typography
                  variant="body1"
                  fontWeight={500}
                >
                  {"inventory.governorate"}, {"inventory.city"}
                </Typography>
              </Stack>
              <Stack
                alignItems={"center"}
                direction={"row"}
                gap={2}
                title="Phone Number"
              >
                <IconButton
                  size="small"
                  sx={{
                    background: buttonBackground,
                    color: buttonText,
                    "&:hover": {
                      background: buttonHover,
                    },
                  }}
                >
                  <Phone fontSize="small" />
                </IconButton>
                <Typography>+201007890938</Typography>
              </Stack>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Grid2>
  );
}
