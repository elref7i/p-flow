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

export default function StepStatus({ status }) {
  //Themes
  const theme = useTheme();

  //Variables
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  // Steps for order process
  const steps = ["Pending", "Confirmed", "Processing", "Shipped", "Delivered"];

  return (
    <Box sx={{ p: 3, bgcolor: "#f8f9fa" }}>
      <Stepper
        activeStep={getActiveStep(status)}
        alternativeLabel={!isMobile}
        orientation={isMobile ? "vertical" : "horizontal"}
        sx={{ mb: 2 }}
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
