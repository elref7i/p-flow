/* eslint-disable react/prop-types */
import {
  Box,
  Step,
  StepLabel,
  Stepper,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { getActiveStep } from "../utils/status_functions";
import { useThemeConstants } from "../../../../lib/constants/theme.constant";

export default function StepStatus({ status }) {
  //Themes
  const theme = useTheme();
  const {
    textPrimary,
    textSecondary,
    textTertiary,
    textInverted,
    textDisabled,
    textLink,
    textSuccess,
    textWarning,
    textError,
    buttonText,
    buttonTextDisabled,
    gradientBlue,
    gradientNavy,
    gradientChart,
    gradientPurple,
    gradientGreen,
    cardBackground,
    cardHoverBackground,
    cardActiveBackground,
    cardDetailsBackground,
    cartBackground,
    paperBackground,
    sidebarBackground,
    headerBackground,
    footerBackground,
    tooltipBackground,
    badgeBackground,
    background,
    backgroundElevated,
    backgroundLowered,
    backgroundBlue,
    buttonBackground,
    buttonHoverBackground,
    buttonActiveBackground,
    buttonDisabledBackground,
    buttonHover,
    primary,
    authBackground,
    secondary,
    auth,
    error,
    warning,
    success,
    info,
  } = useThemeConstants();

  //Variables
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  // Steps for order process
  const steps = ["Pending", "Confirmed", "Processing", "Shipped", "Delivered"];

  return (
    <Box
      sx={{
        p: 3,
        background: theme.palette.mode === "dark" ? authBackground : background,
        boxShadow: 9,
      }}
    >
      <Stepper
        activeStep={getActiveStep(status)}
        alternativeLabel={!isMobile}
        orientation={isMobile ? "vertical" : "horizontal"}
      >
        {steps.map((label, index) => (
          <Step key={label}>
            <StepLabel
              StepIconProps={{
                sx: {
                  color: index <= getActiveStep(status) ? "#5E5ADB" : undefined,
                },
              }}
            >
              {label}
            </StepLabel>
          </Step>
        ))}
      </Stepper>
    </Box>
  );
}
