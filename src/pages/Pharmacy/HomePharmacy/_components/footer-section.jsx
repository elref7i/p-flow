"use client";

import { Box, Container, Typography, Grid, Link, Divider } from "@mui/material";
import { LocalPharmacy, Email, Phone, LocationOn } from "@mui/icons-material";
import { useThemeConstants } from "../../../../lib/constants/theme.constant";

export default function FooterSection() {
  const { textPrimary, paperBackground } = useThemeConstants();

  return (
    <Box
      component="footer"
      sx={{
        bgcolor: "grey.900",
        color: "white",
        py: 6,
        mt: 8,
      }}
    >
      <Container maxWidth="xl">
        <Grid
          container
          spacing={4}
        >
          {/* Brand Section */}
          <Grid
            item
            xs={12}
            md={4}
          >
            <Box
              display="flex"
              alignItems="center"
              mb={3}
            >
              <LocalPharmacy
                sx={{ fontSize: 32, color: "primary.main", mr: 2 }}
              />
              <Typography
                variant="h5"
                fontWeight={700}
              >
                PharmaCare
              </Typography>
            </Box>
            <Typography
              variant="body1"
              sx={{
                color: "grey.300",
                lineHeight: 1.6,
                mb: 3,
              }}
            >
              Your trusted partner in healthcare. We provide quality medicines
              and pharmaceutical services with reliability and care.
            </Typography>
            <Box>
              <Box
                display="flex"
                alignItems="center"
                mb={1}
              >
                <Email sx={{ fontSize: 18, mr: 2, color: "primary.main" }} />
                <Typography
                  variant="body2"
                  sx={{ color: "grey.300" }}
                >
                  support@pharmacare.com
                </Typography>
              </Box>
              <Box
                display="flex"
                alignItems="center"
                mb={1}
              >
                <Phone sx={{ fontSize: 18, mr: 2, color: "primary.main" }} />
                <Typography
                  variant="body2"
                  sx={{ color: "grey.300" }}
                >
                  +1 (555) 123-4567
                </Typography>
              </Box>
              <Box
                display="flex"
                alignItems="center"
              >
                <LocationOn
                  sx={{ fontSize: 18, mr: 2, color: "primary.main" }}
                />
                <Typography
                  variant="body2"
                  sx={{ color: "grey.300" }}
                >
                  123 Healthcare Ave, Medical District
                </Typography>
              </Box>
            </Box>
          </Grid>

          {/* Quick Links */}
          <Grid
            item
            xs={12}
            sm={6}
            md={2}
          >
            <Typography
              variant="h6"
              fontWeight={600}
              gutterBottom
            >
              Quick Links
            </Typography>
            <Box>
              {["Home", "Categories", "Inventories", "About Us", "Contact"].map(
                (item) => (
                  <Link
                    key={item}
                    href="#"
                    sx={{
                      display: "block",
                      color: "grey.300",
                      textDecoration: "none",
                      py: 0.5,
                      "&:hover": {
                        color: "primary.main",
                      },
                    }}
                  >
                    {item}
                  </Link>
                )
              )}
            </Box>
          </Grid>

          {/* Services */}
          <Grid
            item
            xs={12}
            sm={6}
            md={2}
          >
            <Typography
              variant="h6"
              fontWeight={600}
              gutterBottom
            >
              Services
            </Typography>
            <Box>
              {[
                "Prescription",
                "OTC Medicines",
                "Health Supplements",
                "Medical Devices",
                "Consultation",
              ].map((item) => (
                <Link
                  key={item}
                  href="#"
                  sx={{
                    display: "block",
                    color: "grey.300",
                    textDecoration: "none",
                    py: 0.5,
                    "&:hover": {
                      color: "primary.main",
                    },
                  }}
                >
                  {item}
                </Link>
              ))}
            </Box>
          </Grid>

          {/* Support */}
          <Grid
            item
            xs={12}
            sm={6}
            md={2}
          >
            <Typography
              variant="h6"
              fontWeight={600}
              gutterBottom
            >
              Support
            </Typography>
            <Box>
              {[
                "Help Center",
                "Track Order",
                "Returns",
                "Shipping Info",
                "FAQ",
              ].map((item) => (
                <Link
                  key={item}
                  href="#"
                  sx={{
                    display: "block",
                    color: "grey.300",
                    textDecoration: "none",
                    py: 0.5,
                    "&:hover": {
                      color: "primary.main",
                    },
                  }}
                >
                  {item}
                </Link>
              ))}
            </Box>
          </Grid>

          {/* Legal */}
          <Grid
            item
            xs={12}
            sm={6}
            md={2}
          >
            <Typography
              variant="h6"
              fontWeight={600}
              gutterBottom
            >
              Legal
            </Typography>
            <Box>
              {[
                "Privacy Policy",
                "Terms of Service",
                "Cookie Policy",
                "Disclaimer",
                "Licenses",
              ].map((item) => (
                <Link
                  key={item}
                  href="#"
                  sx={{
                    display: "block",
                    color: "grey.300",
                    textDecoration: "none",
                    py: 0.5,
                    "&:hover": {
                      color: "primary.main",
                    },
                  }}
                >
                  {item}
                </Link>
              ))}
            </Box>
          </Grid>
        </Grid>

        <Divider sx={{ my: 4, bgcolor: "grey.700" }} />

        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          flexWrap="wrap"
          gap={2}
        >
          <Typography
            variant="body2"
            sx={{ color: "grey.400" }}
          >
            © 2024 PharmaCare. All rights reserved.
          </Typography>
          <Typography
            variant="body2"
            sx={{ color: "grey.400" }}
          >
            Licensed Pharmacy | Regulated by Health Authority
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
