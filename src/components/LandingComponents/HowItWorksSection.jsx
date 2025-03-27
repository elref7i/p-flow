'use client';

import { useState } from 'react';
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
} from '@mui/material';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import { motion } from 'framer-motion';

const steps = [
  {
    title: 'Inventory Management',
    description: 'Easily track all medications and supplies in your pharmacy.',
    content: [
      {
        title: 'Add Products',
        description:
          'Add new medications to your inventory with detailed information including NDC, lot numbers, and expiration dates.',
      },
      {
        title: 'Track Stock Levels',
        description:
          'Monitor stock levels in real-time and receive alerts when inventory is running low.',
      },
      {
        title: 'Manage Expiration Dates',
        description:
          'Track expiration dates and receive notifications for products nearing expiration.',
      },
    ],
    image: '/placeholder.svg?height=720&width=1280&text=Inventory+Management',
  },
  {
    title: 'Order Processing',
    description: 'Streamline the order creation and fulfillment process.',
    content: [
      {
        title: 'Create Orders',
        description:
          'Quickly create new orders with an intuitive interface that suggests products based on customer history.',
      },
      {
        title: 'Process Payments',
        description:
          'Accept various payment methods and process transactions securely.',
      },
      {
        title: 'Fulfill Orders',
        description:
          'Track order status from creation to delivery with a comprehensive fulfillment workflow.',
      },
    ],
    image: '/placeholder.svg?height=720&width=1280&text=Order+Processing',
  },
  {
    title: 'Analytics & Reporting',
    description: "Gain insights into your pharmacy's performance.",
    content: [
      {
        title: 'Sales Reports',
        description:
          'Generate detailed sales reports to track revenue, popular products, and customer trends.',
      },
      {
        title: 'Inventory Analysis',
        description:
          'Analyze inventory turnover and identify slow-moving products to optimize stock levels.',
      },
      {
        title: 'Performance Metrics',
        description:
          "Monitor key performance indicators to measure and improve your pharmacy's efficiency.",
      },
    ],
    image: '/placeholder.svg?height=720&width=1280&text=Analytics+Reporting',
  },
];

const HowItWorksSection = () => {
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

  return (
    <Box
      id="how-it-works"
      sx={{
        py: { xs: 10, md: 16 },
        background: 'linear-gradient(180deg, #f5f9ff 0%, #ffffff 100%)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background elements */}
      <Box
        sx={{
          position: 'absolute',
          top: '30%',
          right: '10%',
          width: '300px',
          height: '300px',
          borderRadius: '50%',
          background:
            'radial-gradient(circle, rgba(25, 118, 210, 0.05) 0%, rgba(25, 118, 210, 0) 70%)',
          zIndex: 0,
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          bottom: '20%',
          left: '5%',
          width: '400px',
          height: '400px',
          borderRadius: '50%',
          background:
            'radial-gradient(circle, rgba(0, 188, 212, 0.05) 0%, rgba(0, 188, 212, 0) 70%)',
          zIndex: 0,
        }}
      />

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <Box sx={{ textAlign: 'center', mb: 8 }}>
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
                color: 'primary.main',
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
                background: 'linear-gradient(45deg, #1565c0 30%, #0097a7 90%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
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
              sx={{ maxWidth: 800, mx: 'auto' }}
            >
              P-FLOW streamlines your workflow with an intuitive interface and
              powerful features.
            </Typography>
          </motion.div>
        </Box>

        <Grid container spacing={6}>
          <Grid item xs={12} md={5}>
            <Box sx={{ maxWidth: 400, mx: 'auto' }}>
              <Stepper activeStep={activeStep} orientation="vertical">
                {steps.map((step, index) => (
                  <Step key={step.title} completed={activeStep > index}>
                    <StepLabel
                      onClick={() => handleStepClick(index)}
                      sx={{
                        cursor: 'pointer',
                        '& .MuiStepLabel-iconContainer': {
                          '& .MuiStepIcon-root': {
                            color:
                              activeStep >= index ? 'primary.main' : 'grey.400',
                            width: 40,
                            height: 40,
                            transition: 'all 0.3s ease',
                          },
                          '& .MuiStepIcon-text': {
                            fill: activeStep >= index ? 'white' : 'grey.700',
                            fontWeight: 'bold',
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
                              ? 'primary.main'
                              : 'text.primary',
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
                            {index === steps.length - 1 ? 'Finish' : 'Continue'}
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

              {activeStep === steps.length && (
                <Paper
                  square
                  elevation={0}
                  sx={{ p: 3, borderRadius: 2, mt: 2 }}
                >
                  <Typography variant="h6" gutterBottom>
                    All steps completed!
                  </Typography>
                  <Typography variant="body1" paragraph>
                    You&apos;re now ready to revolutionize your pharmacy
                    operations with P-FLOW.
                  </Typography>
                  <Button
                    onClick={() => setActiveStep(0)}
                    sx={{ mt: 1, mr: 1 }}
                  >
                    Reset
                  </Button>
                  <Button variant="contained" sx={{ mt: 1, mr: 1 }}>
                    Get Started
                  </Button>
                </Paper>
              )}
            </Box>
          </Grid>

          <Grid item xs={12} md={7}>
            <motion.div
              key={activeStep}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
            >
              {activeStep < steps.length && (
                <Box>
                  <Box
                    sx={{
                      position: 'relative',
                      '&::before': {
                        content: '""',
                        position: 'absolute',
                        top: -15,
                        left: -15,
                        right: 15,
                        bottom: 15,
                        borderRadius: 4,
                        background:
                          'linear-gradient(45deg, rgba(25, 118, 210, 0.1) 0%, rgba(0, 188, 212, 0.1) 100%)',
                        zIndex: -1,
                      },
                    }}
                  >
                    <Paper
                      elevation={6}
                      sx={{
                        overflow: 'hidden',
                        borderRadius: 4,
                        mb: 4,
                      }}
                    >
                      <Box
                        component="img"
                        src={steps[activeStep].image}
                        alt={steps[activeStep].title}
                        sx={{
                          width: '100%',
                          height: 'auto',
                          display: 'block',
                        }}
                      />
                    </Paper>
                  </Box>

                  <Grid container spacing={2}>
                    {steps[activeStep].content.map((item, itemIndex) => (
                      <Grid item xs={12} md={4} key={itemIndex}>
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.3, delay: itemIndex * 0.1 }}
                        >
                          <Card
                            sx={{
                              height: '100%',
                              transition: 'transform 0.3s, box-shadow 0.3s',
                              '&:hover': {
                                transform: 'translateY(-5px)',
                                boxShadow: '0 12px 30px rgba(0, 0, 0, 0.1)',
                              },
                            }}
                          >
                            <CardContent>
                              <Box
                                sx={{
                                  display: 'flex',
                                  alignItems: 'center',
                                  mb: 2,
                                }}
                              >
                                <Avatar
                                  sx={{
                                    bgcolor: 'primary.main',
                                    mr: 2,
                                    width: 40,
                                    height: 40,
                                    fontWeight: 'bold',
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
                    ))}
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
