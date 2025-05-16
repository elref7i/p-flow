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
  const { textPrimary, textSecondary, background, authBackground } =
    useThemeConstants();

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
                  fontSize: "30px",
                  color:
                    index <= getActiveStep(status)
                      ? textPrimary
                      : textSecondary,
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
