import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import { Badge, Box, Stack, Typography } from "@mui/material";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import { Notifications as NotificationsIcon } from "@mui/icons-material";
import { useThemeConstants } from "../../lib/constants/theme.constant";

export default function NotificationsModal() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  // Themes
  const {
    textPrimary,
    textSecondary,
    textTertiary,
    textLink,
    background,
    gradientNavy,
    cardBackground,
    cardHoverBackground,
  } = useThemeConstants();

  // Functions
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <React.Fragment>
      <IconButton
        onClick={handleClick}
        color="inherit"
      >
        <Badge
          badgeContent={17}
          color="error"
        >
          <NotificationsIcon />
        </Badge>
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        slotProps={{
          paper: {
            elevation: 8,
            sx: {
              background: background,
              py: 1,
              overflow: "visible",
              filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
              mt: 1.5,
              "& .MuiAvatar-root": {
                width: 32,
                height: 32,
                ml: -0.5,
                mr: 1,
              },
              "&::before": {
                content: '""',
                display: "block",
                position: "absolute",
                top: 0,
                right: 14,
                width: 10,
                height: 10,
                background: gradientNavy,
                transform: "translateY(-50%) rotate(45deg)",
                zIndex: 0,
              },
              "& .MuiMenuItem-root:hover": {
                backgroundColor: "transparent",
              },
            },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <MenuItem>
          <Box>
            <Typography
              variant="h6"
              color={textPrimary}
              mb={0.5}
            >
              Notifications
            </Typography>
            <Typography
              variant="body2"
              color={textTertiary}
            >
              You have 2 unread messages
            </Typography>
          </Box>
        </MenuItem>
        <Divider />
        <MenuItem sx={{ p: 0 }}>
          <Box sx={{ width: "100%" }}>
            <Typography
              pl={"16px"}
              pb={0.5}
              variant="h6"
              color={textLink}
              mb={0.5}
            >
              New
            </Typography>

            {/* Messages */}
            <Stack
              spacing={1}
              pb={2}
            >
              <Stack
                py={2}
                px={2}
                direction="row"
                gap={1}
                justifyContent="center"
                alignItems={"center"}
                sx={{
                  boxShadow: 8,
                  background: cardBackground,
                  borderRadius: 1,
                  ":hover": { background: cardHoverBackground, boxShadow: 7 },
                }}
              >
                {/* Avatar */}
                <Avatar
                  alt="Remy Sharp"
                  src="/static/images/avatar/1.jpg"
                  sx={{ width: 56, height: 56 }}
                />

                {/* Content Message */}
                <Box>
                  {/* message user */}
                  <Typography>Ahmed khled mohmed refai</Typography>

                  <Stack
                    direction={"row"}
                    gap={0.5}
                    sx={{ color: textTertiary }}
                    alignItems="center"
                  >
                    <AccessTimeIcon fontSize={"small"} />
                    <Typography
                      variant="body2"
                      color={textSecondary}
                      component={"span"}
                    >
                      2 years
                    </Typography>
                  </Stack>
                </Box>
              </Stack>
            </Stack>
          </Box>
        </MenuItem>
        <MenuItem sx={{ p: 0 }}>
          <Box sx={{ width: "100%" }}>
            <Typography
              pl={"16px"}
              pb={0.5}
              variant="h6"
              color={textLink}
              mb={0.5}
            >
              Before that
            </Typography>

            {/* Messages */}
            <Stack spacing={1}>
              <Stack
                py={2}
                px={2}
                direction="row"
                gap={1}
                justifyContent="center"
                alignItems={"center"}
                sx={{
                  boxShadow: 1,
                  background: "transparent",
                  borderRadius: 1,
                  ":hover": { background: cardHoverBackground },
                }}
              >
                {/* Avatar */}
                <Avatar
                  alt="Remy Sharp"
                  src="/static/images/avatar/1.jpg"
                  sx={{ width: 56, height: 56 }}
                />

                {/* Content Message */}
                <Box>
                  {/* message user */}
                  <Typography>Ahmed khled mohmed refai</Typography>

                  <Stack
                    direction={"row"}
                    gap={0.5}
                    sx={{ color: textTertiary }}
                    alignItems="center"
                  >
                    <AccessTimeIcon fontSize={"small"} />
                    <Typography
                      variant="body2"
                      color={textSecondary}
                      component={"span"}
                    >
                      2 years
                    </Typography>
                  </Stack>
                </Box>
              </Stack>
              <Stack
                py={2}
                px={2}
                direction="row"
                gap={1}
                justifyContent="center"
                alignItems={"center"}
                sx={{
                  boxShadow: 1,
                  background: "transparent",
                  borderRadius: 1,
                  ":hover": { background: cardHoverBackground },
                }}
              >
                {/* Avatar */}
                <Avatar
                  alt="Remy Sharp"
                  src="/static/images/avatar/1.jpg"
                  sx={{ width: 56, height: 56 }}
                />

                {/* Content Message */}
                <Box>
                  {/* message user */}
                  <Typography>Ahmed khled mohmed refai</Typography>

                  <Stack
                    direction={"row"}
                    gap={0.5}
                    sx={{ color: textTertiary }}
                    alignItems="center"
                  >
                    <AccessTimeIcon fontSize={"small"} />
                    <Typography
                      variant="body2"
                      color={textSecondary}
                      component={"span"}
                    >
                      2 years
                    </Typography>
                  </Stack>
                </Box>
              </Stack>
            </Stack>
          </Box>
        </MenuItem>
      </Menu>
    </React.Fragment>
  );
}
