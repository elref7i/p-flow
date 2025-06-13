/* eslint-disable react/prop-types */
"use client";
import { IconButton, useTheme, Zoom, Box } from "@mui/material";
import LightModeSharpIcon from "@mui/icons-material/LightModeSharp";
import ModeNightIcon from "@mui/icons-material/ModeNight";
import { motion } from "framer-motion";

const ThemeToggle = ({ toggleTheme }) => {
  const theme = useTheme();
  const isDarkMode = theme.palette.mode === "dark";

  return (
    <Box
      sx={{
        position: "fixed",
        right: 10,
        top: { xs: 80, sm: 80 },
        zIndex: 1000,
      }}
    >
      <Zoom in={true}>
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <IconButton
            onClick={toggleTheme}
            aria-label="toggle theme"
            sx={{
              backgroundColor: theme.palette.background.paper,
              color: isDarkMode ? "primary.light" : "primary.main",
              boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
              width: 40,
              height: 40,
              "&:hover": {
                backgroundColor: isDarkMode
                  ? "rgba(66, 165, 245, 0.1)"
                  : "rgba(25, 118, 210, 0.1)",
              },
              transition: "all 0.3s ease",
              border: isDarkMode
                ? "2px solid rgba(66, 165, 245, 0.3)"
                : "2px solid rgba(25, 118, 210, 0.3)",
            }}
          >
            {isDarkMode ? (
              <LightModeSharpIcon
                fontSize="medium"
                sx={{
                  color: "#FFC107",
                  filter: "drop-shadow(0 0 2px rgba(255, 193, 7, 0.5))",
                }}
              />
            ) : (
              <ModeNightIcon
                fontSize="medium"
                sx={{
                  color: "#1976D2",
                  filter: "drop-shadow(0 0 2px rgba(25, 118, 210, 0.5))",
                }}
              />
            )}
          </IconButton>
        </motion.div>
      </Zoom>
    </Box>
  );
};

export default ThemeToggle;
