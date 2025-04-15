"use client";

/* eslint-disable react-refresh/only-export-components */
import { createTheme, ThemeProvider, useMediaQuery } from "@mui/material";
import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { getDesignTokens } from "../theme";

const ThemeContext = createContext(0);

// eslint-disable-next-line react/prop-types
export default function ThemeModeProvider({ children }) {
  const [mode, setMode] = useState(localStorage.getItem("mode") || "light");
  const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

  // Check if screen is large (lg)
  const isLargeScreen = useMediaQuery(theme.breakpoints.up("lg"));
  const isMediumScreen = useMediaQuery(theme.breakpoints.down("lg"));

  // Initialize open state based on screen size
  const [open, setOpen] = useState(isLargeScreen);

  // Update sidebar state when screen size changes
  useEffect(() => {
    if (isLargeScreen) {
      setOpen(true);
    } else if (isMediumScreen && open) {
      setOpen(false);
    }
  }, [isLargeScreen, isMediumScreen]);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    // Only allow closing on medium screens
    if (!isLargeScreen) {
      setOpen(false);
    }
  };

  // Toggle function for the menu icon
  const toggleDrawer = () => {
    if (!isLargeScreen) {
      setOpen(!open);
    }
  };

  return (
    <ThemeContext.Provider
      value={{
        mode,
        setMode,
        handleDrawerClose,
        handleDrawerOpen,
        toggleDrawer,
        open,
        setOpen,
        isLargeScreen,
        isMediumScreen,
      }}
    >
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
}

export function useThemeContext() {
  return useContext(ThemeContext);
}
