'use client';

import { useState, useEffect } from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Avatar,
  Rating,
  IconButton,
  Paper,
} from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import { motion, AnimatePresence } from 'framer-motion';

const testimonials = [
  {
    name: 'Dr. Sarah Johnson',
    role: 'Pharmacy Owner',
    content:
      'P-FLOW has completely transformed how we manage our pharmacy. The inventory tracking is precise, and the analytics help us make better business decisions. Our team loves how intuitive it is to use.',
    avatar: 'SJ',
    rating: 5,
    image: '/placeholder.svg?height=100&width=100&text=SJ',
  },
  {
    name: 'Michael Chen',
    role: 'Pharmacy Manager',
    content:
      'After trying several inventory systems, P-FLOW stands out for its comprehensive features and ease of use. The order processing workflow has cut our fulfillment time in half.',
    avatar: 'MC',
    rating: 5,
    image: '/placeholder.svg?height=100&width=100&text=MC',
  },
  {
    name: 'Lisa Rodriguez',
    role: 'Hospital Pharmacy Director',
    content:
      'The compliance features in P-FLOW have been invaluable for our hospital pharmacy. We can easily track controlled substances and generate reports for regulatory requirements.',
    avatar: 'LR',
    rating: 5,
    image: '/placeholder.svg?height=100&width=100&text=LR',
  },
  {
    name: 'James Wilson',
    role: 'Independent Pharmacist',
    content:
      "As a small independent pharmacy, P-FLOW has given us the tools to compete with larger chains. The customer support is exceptional, and they're always adding new features.",
    avatar: 'JW',
    rating: 5,
    image: '/placeholder.svg?height=100&width=100&text=JW',
  },
];

const TestimonialsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [autoplay, setAutoplay] = useState(true);

  useEffect(() => {
    let interval;
    if (autoplay) {
      interval = setInterval(() => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
      }, 5000);
    }
    return () => clearInterval(interval);
  }, [autoplay]);

  const handlePrev = () => {
    setAutoplay(false);
    setActiveIndex(
      (prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length
    );
  };

  const handleNext = () => {
    setAutoplay(false);
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  return (
    <Box
      id="testimonials"
      sx={{
        py: { xs: 10, md: 16 },
        // background: 'linear-gradient(180deg, #ffffff 0%, #f5f9ff 100%)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background elements */}
      <Box
        sx={{
          position: 'absolute',
          top: '20%',
          left: '10%',
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
          bottom: '15%',
          right: '10%',
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
              TESTIMONIALS
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
              What Our Customers Say
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
              See what our customers have to say about how P-FLOW has improved
              their pharmacy operations.
            </Typography>
          </motion.div>
        </Box>

        <Box sx={{ position: 'relative', mb: 6 }}>
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
            >
              <Paper
                elevation={12}
                sx={{
                  p: { xs: 4, md: 6 },
                  borderRadius: 4,
                  // background:
                  //   'linear-gradient(135deg, #ffffff 0%, #f8fbff 100%)',
                  position: 'relative',
                  overflow: 'visible',
                }}
              >
                <Grid container spacing={4} alignItems="center">
                  <Grid item xs={12} md={4} sx={{ textAlign: 'center' }}>
                    <Box
                      sx={{
                        position: 'relative',
                        width: 150,
                        height: 150,
                        mx: 'auto',
                        mb: { xs: 3, md: 0 },
                      }}
                    >
                      <Avatar
                        src={testimonials[activeIndex].image}
                        alt={testimonials[activeIndex].name}
                        sx={{
                          width: 150,
                          height: 150,
                          border: '5px solid white',
                          boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
                        }}
                      />
                      <Box
                        sx={{
                          position: 'absolute',
                          bottom: -10,
                          right: -10,
                          bgcolor: 'primary.main',
                          color: 'white',
                          borderRadius: '50%',
                          width: 50,
                          height: 50,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          boxShadow: '0 5px 15px rgba(0, 0, 0, 0.1)',
                        }}
                      >
                        <FormatQuoteIcon fontSize="large" />
                      </Box>
                    </Box>
                    <Box sx={{ mt: 3 }}>
                      <Typography
                        variant="h5"
                        component="h3"
                        gutterBottom
                        fontWeight={600}
                      >
                        {testimonials[activeIndex].name}
                      </Typography>
                      <Typography
                        variant="body1"
                        color="text.secondary"
                        gutterBottom
                      >
                        {testimonials[activeIndex].role}
                      </Typography>
                      <Rating
                        value={testimonials[activeIndex].rating}
                        readOnly
                        size="large"
                      />
                    </Box>
                  </Grid>
                  <Grid item xs={12} md={8}>
                    <Typography
                      variant="h5"
                      paragraph
                      sx={{
                        fontStyle: 'italic',
                        lineHeight: 1.6,
                        position: 'relative',
                        '::before': {
                          content: '""""',
                          fontSize: '4rem',
                          color: 'rgba(25, 118, 210, 0.1)',
                          position: 'absolute',
                          top: -30,
                          left: -20,
                          fontFamily: 'serif',
                        },
                        '::after': {
                          content: '""""',
                          fontSize: '4rem',
                          color: 'rgba(25, 118, 210, 0.1)',
                          position: 'absolute',
                          bottom: -60,
                          right: -20,
                          fontFamily: 'serif',
                        },
                      }}
                    >
                      {testimonials[activeIndex].content}
                    </Typography>
                  </Grid>
                </Grid>
              </Paper>
            </motion.div>
          </AnimatePresence>

          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              mt: 4,
              gap: 2,
            }}
          >
            <IconButton
              onClick={handlePrev}
              sx={{
                bgcolor: 'white',
                boxShadow: '0 4px 14px rgba(0, 0, 0, 0.1)',
                '&:hover': {
                  bgcolor: 'primary.main',
                  color: 'white',
                },
              }}
            >
              <ArrowBackIcon />
            </IconButton>
            {testimonials.map((_, index) => (
              <Box
                key={index}
                onClick={() => {
                  setAutoplay(false);
                  setActiveIndex(index);
                }}
                sx={{
                  width: 12,
                  height: 12,
                  borderRadius: '50%',
                  bgcolor: index === activeIndex ? 'primary.main' : 'grey.300',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    bgcolor:
                      index === activeIndex ? 'primary.main' : 'grey.400',
                  },
                }}
              />
            ))}
            <IconButton
              onClick={handleNext}
              sx={{
                bgcolor: 'white',
                boxShadow: '0 4px 14px rgba(0, 0, 0, 0.1)',
                '&:hover': {
                  bgcolor: 'primary.main',
                  color: 'white',
                },
              }}
            >
              <ArrowForwardIcon />
            </IconButton>
          </Box>
        </Box>

        <Grid container spacing={4}>
          {testimonials.map(
            (testimonial, index) =>
              index !== activeIndex && (
                <Grid item xs={12} md={4} key={index}>
                  <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Card
                      sx={{
                        height: '100%',
                        transition: 'transform 0.3s, box-shadow 0.3s',
                        cursor: 'pointer',
                        '&:hover': {
                          transform: 'translateY(-10px)',
                          boxShadow: '0 20px 40px rgba(0, 0, 0, 0.1)',
                        },
                      }}
                      onClick={() => {
                        setAutoplay(false);
                        setActiveIndex(index);
                      }}
                    >
                      <CardContent sx={{ p: 4 }}>
                        <Box
                          sx={{ display: 'flex', alignItems: 'center', mb: 3 }}
                        >
                          <Avatar
                            src={testimonial.image}
                            alt={testimonial.name}
                            sx={{ width: 60, height: 60, mr: 2 }}
                          />
                          <Box>
                            <Typography
                              variant="h6"
                              component="h3"
                              fontWeight={600}
                            >
                              {testimonial.name}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                              {testimonial.role}
                            </Typography>
                          </Box>
                        </Box>
                        <Rating
                          value={testimonial.rating}
                          readOnly
                          size="small"
                          sx={{ mb: 2 }}
                        />
                        <Typography
                          variant="body1"
                          color="text.secondary"
                          sx={{
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                            display: '-webkit-box',
                            WebkitLineClamp: 4,
                            WebkitBoxOrient: 'vertical',
                          }}
                        >
                          {testimonial.content}
                        </Typography>
                      </CardContent>
                    </Card>
                  </motion.div>
                </Grid>
              )
          )}
        </Grid>
      </Container>
    </Box>
  );
};

export default TestimonialsSection;
