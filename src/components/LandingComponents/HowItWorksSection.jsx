import { useState } from "react";
import {
  Box,
  Container,
  Typography,
  Stepper,
  Step,
  StepLabel,
  StepContent,
  Button,
  Paper,
  Grid,
  Card,
  CardContent,
  Avatar,
  Divider,
  useTheme,
} from "@mui/material";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { howItWorksSteps } from "./constants/howItWorksSteps";
import { useThemeConstants } from "../../lib/constants/theme.constant";

const HowItWorksSection = () => {
  const theme = useTheme();
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepClick = (step) => {
    setActiveStep(step);
  };

  const { cardBackground } = useThemeConstants();

  return (
    <Box
      id="how-it-works"
      sx={{
        py: { xs: 10, md: 16 },
        bgcolor: theme.palette.background.default,
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background elements */}
      <Box
        sx={{
          position: "absolute",
          top: "30%",
          right: "10%",
          width: "300px",
          height: "300px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(25, 118, 210, 0.05) 0%, rgba(25, 118, 210, 0) 70%)",
          zIndex: 0,
        }}
      />
      <Box
        sx={{
          position: "absolute",
          bottom: "20%",
          left: "5%",
          width: "400px",
          height: "400px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(0, 188, 212, 0.05) 0%, rgba(0, 188, 212, 0) 70%)",
          zIndex: 0,
        }}
      />

      <Container
        maxWidth="lg"
        sx={{ position: "relative", zIndex: 1 }}
      >
        <Box sx={{ textAlign: "center", mb: 8 }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Typography
              variant="overline"
              component="div"
              sx={{
                color: "primary.main",
                fontWeight: 600,
                letterSpacing: 1,
                mb: 2,
              }}
            >
              HOW IT WORKS
            </Typography>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <Typography
              variant="h3"
              component="h2"
              gutterBottom
              sx={{
                fontWeight: 700,
                background: "linear-gradient(45deg, #1565c0 30%, #0097a7 90%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Simplify Your Pharmacy Operations
            </Typography>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Typography
              variant="h6"
              color="textSecondary"
              sx={{ maxWidth: 800, mx: "auto" }}
            >
              P-FLOW streamlines your workflow with an intuitive interface and
              powerful features.
            </Typography>
          </motion.div>
        </Box>

        <Grid
          container
          spacing={6}
        >
          <Grid
            item
            xs={12}
            md={5}
          >
            <Box sx={{ maxWidth: 400, mx: "auto" }}>
              <Stepper
                activeStep={activeStep}
                orientation="vertical"
              >
                {howItWorksSteps.map((step, index) => (
                  <Step
                    key={step.title}
                    completed={activeStep > index}
                  >
                    <StepLabel
                      onClick={() => handleStepClick(index)}
                      sx={{
                        cursor: "pointer",
                        "& .MuiStepLabel-iconContainer": {
                          "& .MuiStepIcon-root": {
                            color:
                              activeStep >= index ? "primary.main" : "grey.400",
                            width: 40,
                            height: 40,
                            transition: "all 0.3s ease",
                          },
                          "& .MuiStepIcon-text": {
                            fill: activeStep >= index ? "white" : "grey.700",
                            fontWeight: "bold",
                          },
                        },
                      }}
                    >
                      <Typography
                        variant="h6"
                        sx={{
                          fontWeight: activeStep === index ? 700 : 500,
                          color:
                            activeStep === index
                              ? "primary.main"
                              : "text.primary",
                        }}
                      >
                        {step.title}
                      </Typography>
                    </StepLabel>
                    <StepContent>
                      <Typography
                        variant="body1"
                        color="text.secondary"
                        paragraph
                      >
                        {step.description}
                      </Typography>
                      <Box sx={{ mb: 2 }}>
                        <div>
                          <Button
                            variant="contained"
                            onClick={handleNext}
                            sx={{ mt: 1, mr: 1 }}
                            endIcon={<KeyboardArrowRightIcon />}
                          >
                            {index === howItWorksSteps.length - 1
                              ? "Finish"
                              : "Continue"}
                          </Button>
                          <Button
                            disabled={index === 0}
                            onClick={handleBack}
                            sx={{ mt: 1, mr: 1 }}
                            startIcon={<KeyboardArrowLeftIcon />}
                          >
                            Back
                          </Button>
                        </div>
                      </Box>
                    </StepContent>
                  </Step>
                ))}
              </Stepper>

              {activeStep === howItWorksSteps.length && (
                <Paper
                  square
                  elevation={8}
                  sx={{ p: 3, borderRadius: 2, mt: 2 }}
                >
                  <Typography
                    variant="h6"
                    gutterBottom
                  >
                    All steps completed!
                  </Typography>
                  <Typography
                    variant="body1"
                    paragraph
                  >
                    You&apos;re now ready to revolutionize your pharmacy
                    operations with P-FLOW.
                  </Typography>
                  <Button
                    onClick={() => setActiveStep(0)}
                    sx={{ mt: 1, mr: 1 }}
                  >
                    Reset
                  </Button>
                  <Button
                    component={Link}
                    to={"/signup"}
                    variant="contained"
                    sx={{ mt: 1, mr: 1 }}
                  >
                    Get Started
                  </Button>
                </Paper>
              )}
            </Box>
          </Grid>

          <Grid
            item
            xs={12}
            md={7}
          >
            <motion.div
              key={activeStep}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
            >
              {activeStep < howItWorksSteps.length && (
                <Box>
                  <Box
                    sx={{
                      position: "relative",
                      "&::before": {
                        content: '""',
                        position: "absolute",
                        top: -15,
                        left: -15,
                        right: 15,
                        bottom: 15,
                        borderRadius: 4,
                        background:
                          "linear-gradient(45deg, rgba(25, 118, 210, 0.1) 0%, rgba(0, 188, 212, 0.1) 100%)",
                        zIndex: -1,
                      },
                    }}
                  >
                    <Paper
                      elevation={8}
                      sx={{
                        overflow: "hidden",
                        borderRadius: 4,
                        mb: 4,
                      }}
                    >
                      <Box
                        component="img"
                        src={howItWorksSteps[activeStep].image}
                        alt={howItWorksSteps[activeStep].title}
                        sx={{
                          width: "100%",
                          height: "auto",
                          display: "block",
                        }}
                      />
                    </Paper>
                  </Box>

                  <Grid
                    container
                    spacing={2}
                  >
                    {howItWorksSteps[activeStep].content.map(
                      (item, itemIndex) => (
                        <Grid
                          item
                          xs={12}
                          md={4}
                          key={itemIndex}
                        >
                          <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{
                              duration: 0.3,
                              delay: itemIndex * 0.1,
                            }}
                          >
                            <Card
                              sx={{
                                boxShadow: 8,
                                background: cardBackground,
                                height: "100%",
                                transition: "transform 0.3s, box-shadow 0.3s",
                                "&:hover": {
                                  transform: "translateY(-5px)",
                                  boxShadow: 7,
                                },
                              }}
                            >
                              <CardContent>
                                <Box
                                  sx={{
                                    display: "flex",
                                    alignItems: "center",
                                    mb: 2,
                                  }}
                                >
                                  <Avatar
                                    sx={{
                                      bgcolor: "primary.main",
                                      mr: 2,
                                      width: 40,
                                      height: 40,
                                      fontWeight: "bold",
                                    }}
                                  >
                                    {itemIndex + 1}
                                  </Avatar>
                                  <Typography
                                    variant="h6"
                                    component="h3"
                                    fontWeight={600}
                                  >
                                    {item.title}
                                  </Typography>
                                </Box>
                                <Divider sx={{ mb: 2 }} />
                                <Typography
                                  variant="body1"
                                  color="text.secondary"
                                >
                                  {item.description}
                                </Typography>
                              </CardContent>
                            </Card>
                          </motion.div>
                        </Grid>
                      )
                    )}
                  </Grid>
                </Box>
              )}
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default HowItWorksSection;
