import * as React from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import IconButton from "@mui/material/IconButton";
import { Box, Stack, Typography } from "@mui/material";
import { useThemeConstants } from "../../lib/constants/theme.constant";
import Message from "./components/message";
import NotificationHeader from "./components/notification-header";
import NotificationBage from "./components/notification-bage.";
import {
  useCountNotif,
  useGetAllMeNotifications,
} from "../../lib/hooks/notifications.actions";
import { useTypeContext } from "../../context/UserType.context";
import InfiniteScroll from "react-infinite-scroll-component";
import DrugCardSkeleton from "../Common/Loading/DrugCardSkeleton";
import NotificationAction from "./components/notification-action";

export default function NotificationsModal() {
  // State
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  //Context
  const { token } = useTypeContext();

  // Themes
  const {
    background,
    backgroundBlueSoft,
    textSecondary,
    textPrimary,
    fetchNextPage,
    hasNextPage,
    backgroundBlue,
  } = useThemeConstants();

  // Functions
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  //Queries
  const { data: payload, isLoading } = useGetAllMeNotifications({ token });

  const { data: payloadCount, isLoading: isLoadingCount } = useCountNotif({
    token,
  });

  // Flatten the data from all pages
  const flattenedNotifications =
    payload?.pages.flatMap((page) => page.data || []) || [];

  // Total Items
  const totalItems =
    payload?.pages.reduce((total, page) => {
      return total + (page.data?.length || 0);
    }, 0) || 0;

  return (
    <>
      <IconButton
        onClick={handleClick}
        sx={{ color: textPrimary }}
      >
        {/* Count  */}
        <NotificationBage
          dataInfo={payloadCount}
          isLoading={isLoadingCount}
        />
      </IconButton>
      <Menu
        onClose={handleClose}
        disableScrollLock
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        slotProps={{
          paper: {
            elevation: 8,
            sx: {
              pt: 0,
              background: background,
              overflow: "visible",
              filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
              mt: 1,
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
                background: backgroundBlueSoft,
                transform: "translateY(-50%) rotate(45deg)",
                zIndex: 0,
              },
            },
          },
          list: {
            sx: {
              pt: 0,
              pb: 1,
            },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <MenuItem
          sx={{
            background: backgroundBlue,
            py: 2,
            boxShadow: 4,
            borderRadius: "0px 0px  10px 10px",
            mb: 2,
            ":hover": {
              boxShadow: 6,
              background: backgroundBlue,
            },
          }}
        >
          <Stack
            width={"100%"}
            direction={"row"}
            justifyContent={"space-between"}
          >
            <NotificationHeader
              count={payloadCount && payloadCount.data.unreadCount}
            />
            <NotificationAction
              result={totalItems}
              count={payloadCount && payloadCount.data.unreadCount}
            />
          </Stack>
        </MenuItem>

        <MenuItem
          disableRipple
          sx={{
            p: 0,
            mb: 2,
            ":hover": {
              background: "transparent",
            },
          }}
        >
          <Box sx={{ width: "100%" }}>
            <Typography
              pl={"16px"}
              pb={0.5}
              variant="h5"
              color={textSecondary}
              mb={0.5}
            >
              New
            </Typography>

            {/* Messages */}
            <Stack
              spacing={1}
              pb={2}
              sx={{ minHeight: "200px", overflow: "auto", maxHeight: "400px" }}
            >
              {!isLoading ? (
                <InfiniteScroll
                  dataLength={totalItems}
                  next={fetchNextPage}
                  hasMore={hasNextPage}
                  loader={<DrugCardSkeleton count={3} />}
                  endMessage={
                    <p style={{ textAlign: "center", padding: "20px" }}>
                      <b>You have seen all notifications</b>
                    </p>
                  }
                  scrollThreshold={0.8}
                  style={{ overflow: "hidden" }}
                >
                  {flattenedNotifications.map((notification) => (
                    <Message
                      key={notification._id}
                      dataInfo={notification}
                    />
                  ))}
                </InfiniteScroll>
              ) : (
                <p>loading</p>
              )}
            </Stack>
          </Box>
        </MenuItem>
      </Menu>
    </>
  );
}
