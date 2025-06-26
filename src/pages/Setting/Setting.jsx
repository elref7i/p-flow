import { useState } from "react";
import {
  Stack,
  Paper,
  Tabs,
  Tab,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import Profile from "./Profile";
import ChangePassword from "./ChangePassword";
import EmailUser from "./EmailUser";
import { useTypeContext } from "../../context/UserType.context";
import DeactivateAcount from "./DeactivateAcount";
import { useThemeConstants } from "../../lib/constants/theme.constant";
import MinimumOrderValue from "./MinimumOrderValue";
import { Helmet } from "react-helmet";

export default function Setting() {
  //States
  const [tabIndex, setTabIndex] = useState(0);

  //Context
  const { userData, role } = useTypeContext();

  //Themes
  const theme = useTheme();
  const {
    cardBackground,
    headerBackground,
    transitionDurationShortest,
    borderFocus,
    borderHover,
    textPrimary,
    transitionDurationComplex,
    textLink,
  } = useThemeConstants();

  // Varabiles
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));

  //Functions
  const handleTabChange = (event, newIndex) => {
    setTabIndex(newIndex);
  };

  return (
    <>
      <Helmet>
        <title>Setting</title>
        <meta
          name="description"
          content="Manage your profile, email, password, and account settings in the P-Flow pharmacy system."
        />
        <meta
          name="keywords"
          content="account settings, profile management, change password, email update, deactivate account, P-Flow"
        />
        <meta property="og:title" content="Settings | P-Flow System" />
        <meta
          property="og:description"
          content="Update your personal information, change password, or deactivate your pharmacy account in P-Flow."
        />
        <meta property="og:type" content="website" />
      </Helmet>

      <Stack
        maxWidth={"lg"}
        mx={"auto"}
        direction={{ sm: "column", md: "row" }}
        gap={4}
      >
        {/* Sidebar */}
        <Paper
          sx={{
            p: 2,
            background: headerBackground,
            borderRadius: 2,
            boxShadow: 3,
            position: "sticky",
            border: `1px solid ${borderHover}`,
            top: 60,
            transition: transitionDurationComplex,
            height: "fit-content",
            ":hover": {
              boxShadow: 8,
              borderColor: borderFocus,
            },
          }}
        >
          <Tabs
            orientation={isSmallScreen ? "horizontal" : "vertical"}
            value={tabIndex}
            onChange={handleTabChange}
            sx={{
              borderRight: 1,
              borderColor: "divider",
              "& .MuiTabs-indicator": {
                backgroundColor: textLink,
              },
            }}
          >
            <Tab
              label="Profile"
              sx={{
                color: textPrimary,
                "&.Mui-selected": {
                  color: textLink,
                },
                textTransform: "capitalize",
              }}
            />
            <Tab
              label="Change Password"
              sx={{
                color: theme.palette.text.primary,
                "&.Mui-selected": {
                  color: textLink,
                },
                textTransform: "capitalize",
              }}
            />

            <Tab
              label="Email"
              sx={{
                color: theme.palette.text.primary,
                "&.Mui-selected": {
                  color: textLink,
                },
                textTransform: "capitalize",
              }}
            />
            <Tab
              label="deactivate your account"
              sx={{
                color: theme.palette.text.primary,
                "&.Mui-selected": {
                  color: textLink,
                },
                textTransform: "capitalize",
              }}
            />
            {role === "inventory" && (
              <Tab
                label="Minimum Order Value"
                sx={{
                  color: theme.palette.text.primary,
                  "&.Mui-selected": {
                    color: textLink,
                  },
                  textTransform: "capitalize",
                }}
              />
            )}
          </Tabs>
        </Paper>

        {/* Content */}
        <Paper
          sx={{
            flex: 1,
            p: 4,
            borderRadius: 2,
            background: cardBackground,
            boxShadow: 8,
            border: `1px solid ${borderFocus}`,

            transition: transitionDurationShortest,
            ":hover": {
              boxShadow: 4,
              borderColor: borderHover,
            },
          }}
        >
          {tabIndex === 0 && <Profile userData={userData} />}
          {tabIndex === 1 && <ChangePassword />}
          {tabIndex === 2 && <EmailUser userData={userData} />}
          {tabIndex === 3 && <DeactivateAcount />}
          {tabIndex === 4 && <MinimumOrderValue userData={userData} />}
        </Paper>
      </Stack>
    </>
  );
}
