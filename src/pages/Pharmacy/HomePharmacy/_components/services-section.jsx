"use client";

import { Box, Container, Typography, Grid, Paper } from "@mui/material";
import { motion } from "framer-motion";
import {
  LocalPharmacy,
  Inventory,
  Search,
  Speed,
  Security,
  Support,
} from "@mui/icons-material";
import { useThemeConstants } from "../../../../lib/constants/theme.constant";

const services = [
  {
    icon: <Search sx={{ fontSize: 40 }} />,
    title: "Smart Search",
    description:
      "Advanced search with active ingredient suggestions and drug interactions",
  },
  {
    icon: <Inventory sx={{ fontSize: 40 }} />,
    title: "Real-time Stock",
    description:
      "Live inventory tracking across multiple warehouses and suppliers",
  },
  {
    icon: <Speed sx={{ fontSize: 40 }} />,
    title: "Fast Delivery",
    description: "Quick order processing and reliable delivery tracking system",
  },
  {
    icon: <Security sx={{ fontSize: 40 }} />,
    title: "Secure Platform",
    description:
      "HIPAA compliant with end-to-end encryption for all transactions",
  },
  {
    icon: <LocalPharmacy sx={{ fontSize: 40 }} />,
    title: "Licensed Partners",
    description:
      "Work only with verified and licensed pharmaceutical suppliers",
  },
  {
    icon: <Support sx={{ fontSize: 40 }} />,
    title: "24/7 Support",
    description:
      "Round-the-clock customer support for all your pharmaceutical needs",
  },
];

export default function ServicesSection() {
  const { textPrimary, paperBackground } = useThemeConstants();

  return (
    <Container
      maxWidth="xl"
      sx={{ py: 8 }}
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <Box
          textAlign="center"
          mb={6}
        >
          <Typography
            variant="h3"
            component="h2"
            fontWeight={700}
            gutterBottom
            sx={{
              color: textPrimary,
              fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem" },
              mb: 2,
            }}
          >
            Why Choose Us
          </Typography>
          <Typography
            variant="h6"
            sx={{
              color: "text.secondary",
              maxWidth: "600px",
              mx: "auto",
              fontSize: { xs: "1rem", sm: "1.1rem" },
            }}
          >
            Comprehensive pharmaceutical solutions designed for modern
            healthcare
          </Typography>
        </Box>
      </motion.div>

      <Grid
        container
        spacing={4}
      >
        {services.map((service, index) => (
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            key={index}
          >
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              <Paper
                elevation={3}
                sx={{
                  p: 4,
                  height: "100%",
                  textAlign: "center",
                  borderRadius: 3,
                  bgcolor: paperBackground,
                  transition: "all 0.3s ease",
                  cursor: "pointer",
                  "&:hover": {
                    boxShadow: "0 16px 48px rgba(33, 150, 243, 0.15)",
                    transform: "translateY(-5px)",
                    "& .service-icon": {
                      color: "primary.main",
                      transform: "scale(1.1)",
                    },
                  },
                }}
              >
                <Box
                  className="service-icon"
                  sx={{
                    color: "text.secondary",
                    mb: 3,
                    transition: "all 0.3s ease",
                  }}
                >
                  {service.icon}
                </Box>

                <Typography
                  variant="h5"
                  component="h3"
                  fontWeight={600}
                  gutterBottom
                  sx={{ color: textPrimary, mb: 2 }}
                >
                  {service.title}
                </Typography>

                <Typography
                  variant="body1"
                  sx={{
                    color: "text.secondary",
                    lineHeight: 1.6,
                  }}
                >
                  {service.description}
                </Typography>
              </Paper>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
