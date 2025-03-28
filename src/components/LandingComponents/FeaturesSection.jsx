/* eslint-disable react/prop-types */
'use client';

import { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Button,
  IconButton,
  useTheme,
} from '@mui/material';
import InventoryIcon from '@mui/icons-material/Inventory';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import BarChartIcon from '@mui/icons-material/BarChart';
import PeopleIcon from '@mui/icons-material/People';
import SecurityIcon from '@mui/icons-material/Security';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { motion } from 'framer-motion';

const features = [
  {
    icon: InventoryIcon,
    title: 'Inventory Management',
    description:
      'Track medications, manage stock levels, and receive alerts for low inventory or expiring products.',
    color: '#1976d2',
    image: '/placeholder.svg?height=600&width=800&text=Inventory+Management',
  },
  {
    icon: ShoppingCartIcon,
    title: 'Order Processing',
    description:
      'Streamline order creation, processing, and fulfillment with an intuitive interface.',
    color: '#00bcd4',
    image: '/placeholder.svg?height=600&width=800&text=Order+Processing',
  },
  {
    icon: LocalShippingIcon,
    title: 'Delivery Tracking',
    description:
      'Monitor deliveries in real-time and provide accurate ETAs to your customers.',
    color: '#4caf50',
    image: '/placeholder.svg?height=600&width=800&text=Delivery+Tracking',
  },
  {
    icon: BarChartIcon,
    title: 'Analytics Dashboard',
    description:
      'Gain insights into sales trends, inventory turnover, and business performance.',
    color: '#ff9800',
    image: '/placeholder.svg?height=600&width=800&text=Analytics+Dashboard',
  },
  {
    icon: PeopleIcon,
    title: 'Supplier Management',
    description:
      'Maintain supplier information, track performance, and manage relationships effectively.',
    color: '#9c27b0',
    image: '/placeholder.svg?height=600&width=800&text=Supplier+Management',
  },
  {
    icon: SecurityIcon,
    title: 'Compliance & Security',
    description:
      'Ensure regulatory compliance and protect sensitive patient and business data.',
    color: '#f44336',
    image: '/placeholder.svg?height=600&width=800&text=Compliance+Security',
  },
];

const FeatureCard = ({ feature, index, isActive, onClick }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <Card
        sx={{
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          transition: 'all 0.3s ease',
          cursor: 'pointer',
          position: 'relative',
          overflow: 'visible',
          transform: isActive ? 'scale(1.05)' : 'scale(1)',
          boxShadow: isActive
            ? `0 20px 60px rgba(${Number.parseInt(
                feature.color.slice(1, 3),
                16
              )}, ${Number.parseInt(
                feature.color.slice(3, 5),
                16
              )}, ${Number.parseInt(feature.color.slice(5, 7), 16)}, 0.2)`
            : '0 8px 40px rgba(0, 0, 0, 0.08)',
          border: isActive ? `2px solid ${feature.color}` : 'none',
          '&:hover': {
            transform: 'scale(1.03)',
            boxShadow: `0 15px 50px rgba(${Number.parseInt(
              feature.color.slice(1, 3),
              16
            )}, ${Number.parseInt(
              feature.color.slice(3, 5),
              16
            )}, ${Number.parseInt(feature.color.slice(5, 7), 16)}, 0.15)`,
          },
          '&::before': isActive
            ? {
                content: '""',
                position: 'absolute',
                top: -10,
                left: -10,
                right: -10,
                bottom: -10,
                background: `linear-gradient(45deg, ${feature.color}22, ${feature.color}00)`,
                borderRadius: '24px',
                zIndex: -1,
              }
            : {},
        }}
        onClick={onClick}
      >
        <CardContent sx={{ p: 4, flexGrow: 1 }}>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              mb: 2,
              gap: 2,
            }}
          >
            <Box
              sx={{
                width: 60,
                height: 60,
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: `linear-gradient(135deg, ${feature.color}22, ${feature.color}44)`,
                color: feature.color,
              }}
            >
              <feature.icon fontSize="large" />
            </Box>
            <Typography variant="h5" component="h3" fontWeight={600}>
              {feature.title}
            </Typography>
          </Box>

          <Typography variant="body1" color="text.secondary" paragraph>
            {feature.description}
          </Typography>

          <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 2 }}>
            <IconButton
              sx={{
                color: feature.color,
                opacity: isActive ? 1 : 0.5,
                transition: 'all 0.3s ease',
              }}
            >
              <ArrowForwardIcon />
            </IconButton>
          </Box>
        </CardContent>
      </Card>
    </motion.div>
  );
};

const FeaturesSection = () => {
  const [activeFeature, setActiveFeature] = useState(0);
  const theme = useTheme();

  return (
    <Box
      id="features"
      sx={{
        py: { xs: 10, md: 16 },
        backgroundColor: theme.palette.background.default,
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background elements */}
      <Box
        sx={{
          position: 'absolute',
          top: '10%',
          left: '5%',
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
          bottom: '10%',
          right: '5%',
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
              POWERFUL FEATURES
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
              Everything You Need to Run Your Pharmacy
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
              P-FLOW combines powerful features with an intuitive interface to
              help you manage your pharmacy efficiently.
            </Typography>
          </motion.div>
        </Box>

        <Grid container spacing={4} sx={{ mb: 8 }}>
          {features.map((feature, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <FeatureCard
                feature={feature}
                index={index}
                isActive={activeFeature === index}
                onClick={() => setActiveFeature(index)}
              />
            </Grid>
          ))}
        </Grid>

        <Box sx={{ mt: 12 }}>
          <Grid
            container
            p={2}
            sx={{ backgroundColor: theme.palette.background.paper }}
            spacing={6}
            alignItems="center"
          >
            <Grid item xs={12} md={6}>
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
              >
                <Box
                  component="img"
                  src={features[activeFeature].image}
                  alt={features[activeFeature].title}
                  sx={{
                    width: '100%',
                    height: 'auto',
                    borderRadius: 4,
                    boxShadow: '0 30px 60px rgba(0, 0, 0, 0.1)',
                    transform:
                      'perspective(1500px) rotateY(5deg) rotateX(5deg)',
                    transition: 'all 0.5s ease',
                  }}
                />
              </motion.div>
            </Grid>

            <Grid item xs={12} md={6}>
              <motion.div
                key={activeFeature}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Box
                  sx={{
                    display: 'inline-block',
                    px: 2,
                    py: 0.5,
                    borderRadius: 2,
                    bgcolor: `${features[activeFeature].color}22`,
                    color: features[activeFeature].color,
                    mb: 2,
                  }}
                >
                  <Typography variant="subtitle2" fontWeight={600}>
                    {features[activeFeature].title}
                  </Typography>
                </Box>

                <Typography
                  variant="h4"
                  component="h3"
                  gutterBottom
                  fontWeight={700}
                >
                  Streamline Your {features[activeFeature].title}
                </Typography>

                <Typography
                  variant="body1"
                  color="text.secondary"
                  paragraph
                  sx={{ mb: 4 }}
                >
                  Our {features[activeFeature].title.toLowerCase()} system is
                  designed to make your pharmacy operations more efficient. With
                  P-FLOW, you can automate routine tasks, reduce errors, and
                  focus on what matters most - your customers.
                </Typography>

                <Box sx={{ mb: 4 }}>
                  {[1, 2, 3].map((item) => (
                    <Box
                      key={item}
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        mb: 2,
                        gap: 2,
                      }}
                    >
                      <Box
                        sx={{
                          width: 24,
                          height: 24,
                          borderRadius: '50%',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          bgcolor: features[activeFeature].color,
                          color: 'white',
                          fontWeight: 'bold',
                          fontSize: '0.8rem',
                        }}
                      >
                        {item}
                      </Box>
                      <Typography variant="body1">
                        Key benefit {item} of{' '}
                        {features[activeFeature].title.toLowerCase()}
                      </Typography>
                    </Box>
                  ))}
                </Box>

                <Button
                  variant="contained"
                  endIcon={<ArrowForwardIcon />}
                  sx={{
                    bgcolor: features[activeFeature].color,
                    '&:hover': {
                      bgcolor: features[activeFeature].color,
                      filter: 'brightness(0.9)',
                    },
                  }}
                >
                  Learn More
                </Button>
              </motion.div>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default FeaturesSection;
