/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react';
import { Box, Container, Typography, Grid, Paper } from '@mui/material';
import { motion } from 'framer-motion';
import CountUp from 'react-countup';

const stats = [
  {
    value: 500,
    suffix: '+',
    label: 'Pharmacies',
    description: 'Pharmacies using P-FLOW',
    color: '#1976d2',
  },
  {
    value: 99.9,
    suffix: '%',
    label: 'Uptime',
    description: 'System reliability',
    color: '#00bcd4',
  },
  {
    value: 30,
    suffix: '%',
    label: 'Time Saved',
    description: 'Average time saved on inventory management',
    color: '#4caf50',
  },
  {
    value: 1000000,
    suffix: '+',
    label: 'Prescriptions',
    description: 'Processed monthly through our system',
    color: '#ff9800',
  },
];

const StatCard = ({ stat, index }) => {
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.1 }
    );

    const currentElement = document.getElementById(`stat-${index}`);
    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, [index]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <Paper
        elevation={6}
        sx={{
          p: 4,
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          borderRadius: 4,
          position: 'relative',
          overflow: 'hidden',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '5px',
            background: stat.color,
          },
        }}
      >
        <Box id={`stat-${index}`}>
          <Typography
            variant="h2"
            component="div"
            sx={{
              fontWeight: 800,
              color: stat.color,
              mb: 1,
              fontSize: { xs: '2.5rem', md: '3.5rem' },
            }}
          >
            {inView ? (
              <CountUp
                end={stat.value}
                duration={2.5}
                separator=","
                suffix={stat.suffix}
                decimals={stat.value % 1 !== 0 ? 1 : 0}
              />
            ) : (
              '0'
            )}
          </Typography>
        </Box>
        <Typography
          variant="h5"
          component="h3"
          gutterBottom
          sx={{ fontWeight: 600 }}
        >
          {stat.label}
        </Typography>
        <Typography variant="body1" color="text.secondary">
          {stat.description}
        </Typography>
      </Paper>
    </motion.div>
  );
};

const StatisticsSection = () => {
  return (
    <Box
      sx={{
        py: { xs: 10, md: 16 },
        background: 'linear-gradient(135deg, #0a1929 0%, #1a3b5d 100%)',
        position: 'relative',
        overflow: 'hidden',
        color: 'white',
      }}
    >
      {/* Animated background elements */}
      {[...Array(10)].map((_, index) => (
        <Box
          key={index}
          sx={{
            position: 'absolute',
            width: `${Math.random() * 10 + 5}px`,
            height: `${Math.random() * 10 + 5}px`,
            borderRadius: '50%',
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animation: `float ${Math.random() * 10 + 10}s linear infinite`,
            '@keyframes float': {
              '0%': {
                transform: 'translateY(0) rotate(0deg)',
                opacity: 0.2,
              },
              '50%': {
                transform: `translateY(-${
                  Math.random() * 100 + 50
                }px) rotate(180deg)`,
                opacity: 0.7,
              },
              '100%': {
                transform: `translateY(-${
                  Math.random() * 200 + 100
                }px) rotate(360deg)`,
                opacity: 0.2,
              },
            },
          }}
        />
      ))}

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
                color: 'primary.light',
                fontWeight: 600,
                letterSpacing: 1,
                mb: 2,
              }}
            >
              BY THE NUMBERS
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
                color: 'white',
              }}
            >
              Trusted by Pharmacies Everywhere
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
              sx={{
                maxWidth: 800,
                mx: 'auto',
                color: 'rgba(255, 255, 255, 0.7)',
              }}
            >
              P-FLOW is helping pharmacies across the country improve their
              operations and serve their customers better.
            </Typography>
          </motion.div>
        </Box>

        <Grid container spacing={4}>
          {stats.map((stat, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <StatCard stat={stat} index={index} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default StatisticsSection;
