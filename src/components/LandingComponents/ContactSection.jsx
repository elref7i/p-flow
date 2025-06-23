"use client";

import { useState } from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  TextField,
  Button,
  Paper,
  InputAdornment,
  Snackbar,
  Alert,
} from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PersonIcon from "@mui/icons-material/Person";
import MessageIcon from "@mui/icons-material/Message";
import SendIcon from "@mui/icons-material/Send";
import { motion } from "framer-motion";
import { useThemeConstants } from "../../lib/constants/theme.constant";

const ContactSection = () => {
  const { cardBackground, textPrimary, backgroundElevated } =
    useThemeConstants();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "success",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error when user types
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }
    if (!formData.message.trim()) newErrors.message = "Message is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Handle form submission
      console.log("Form submitted:", formData);
      // Show success message
      setSnackbar({
        open: true,
        message: "Message sent successfully! We'll get back to you soon.",
        severity: "success",
      });
      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
      });
    } else {
      setSnackbar({
        open: true,
        message: "Please fix the errors in the form.",
        severity: "error",
      });
    }
  };

  const handleCloseSnackbar = () => {
    setSnackbar((prev) => ({ ...prev, open: false }));
  };

  return (
    <Box
      id="contact"
      sx={{
        py: { xs: 10, md: 10 },
        bgcolor: backgroundElevated,
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background elements */}
      <Box
        sx={{
          position: "absolute",
          top: "10%",
          right: "5%",
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
          bottom: "10%",
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
              CONTACT US
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
              Get in Touch
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
              Have questions about P-FLOW? Our team is here to help you get
              started.
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
            md={6}
          >
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Paper
                elevation={8}
                sx={{
                  color: textPrimary,
                  p: 4,
                  borderRadius: 4,
                  height: "100%",
                  background: cardBackground,
                }}
              >
                <Typography
                  variant="h4"
                  component="h3"
                  gutterBottom
                  fontWeight={700}
                >
                  Send Us a Message
                </Typography>
                <Typography
                  variant="body1"
                  color="text.secondary"
                  paragraph
                  sx={{ mb: 4 }}
                >
                  Fill out the form below and we&apos;ll get back to you as soon
                  as possible.
                </Typography>

                <Box
                  component="form"
                  onSubmit={handleSubmit}
                >
                  <Grid
                    container
                    spacing={3}
                  >
                    <Grid
                      item
                      xs={12}
                    >
                      <TextField
                        fullWidth
                        label="Your Name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        variant="outlined"
                        error={!!errors.name}
                        helperText={errors.name}
                        InputProps={{
                          startAdornment: (
                            <InputAdornment position="start">
                              <PersonIcon color="primary" />
                            </InputAdornment>
                          ),
                        }}
                        sx={{
                          "& .MuiOutlinedInput-root": {
                            "&.Mui-focused fieldset": {
                              borderColor: "primary.main",
                              borderWidth: 2,
                            },
                          },
                        }}
                      />
                    </Grid>
                    <Grid
                      item
                      xs={12}
                      sm={6}
                    >
                      <TextField
                        fullWidth
                        label="Your Email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        variant="outlined"
                        error={!!errors.email}
                        helperText={errors.email}
                        InputProps={{
                          startAdornment: (
                            <InputAdornment position="start">
                              <EmailIcon color="primary" />
                            </InputAdornment>
                          ),
                        }}
                        sx={{
                          "& .MuiOutlinedInput-root": {
                            "&.Mui-focused fieldset": {
                              borderColor: "primary.main",
                              borderWidth: 2,
                            },
                          },
                        }}
                      />
                    </Grid>
                    <Grid
                      item
                      xs={12}
                      sm={6}
                    >
                      <TextField
                        fullWidth
                        label="Phone Number"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        variant="outlined"
                        InputProps={{
                          startAdornment: (
                            <InputAdornment position="start">
                              <PhoneIcon color="primary" />
                            </InputAdornment>
                          ),
                        }}
                        sx={{
                          "& .MuiOutlinedInput-root": {
                            "&.Mui-focused fieldset": {
                              borderColor: "primary.main",
                              borderWidth: 2,
                            },
                          },
                        }}
                      />
                    </Grid>
                    <Grid
                      item
                      xs={12}
                    >
                      <TextField
                        fullWidth
                        label="Your Message"
                        name="message"
                        multiline
                        rows={6}
                        value={formData.message}
                        onChange={handleChange}
                        required
                        variant="outlined"
                        error={!!errors.message}
                        helperText={errors.message}
                        InputProps={{
                          startAdornment: (
                            <InputAdornment
                              position="start"
                              sx={{ alignSelf: "flex-start", mt: 1.5 }}
                            >
                              <MessageIcon color="primary" />
                            </InputAdornment>
                          ),
                        }}
                        sx={{
                          "& .MuiOutlinedInput-root": {
                            "&.Mui-focused fieldset": {
                              borderColor: "primary.main",
                              borderWidth: 2,
                            },
                          },
                        }}
                      />
                    </Grid>
                    <Grid
                      item
                      xs={12}
                    >
                      <Button
                        type="submit"
                        variant="contained"
                        size="large"
                        endIcon={<SendIcon />}
                        sx={{
                          py: 1.5,
                          px: 4,
                          mt: 2,
                          background:
                            "linear-gradient(45deg, #1976d2 30%, #00bcd4 90%)",
                          boxShadow: "0 8px 20px rgba(25, 118, 210, 0.3)",
                        }}
                      >
                        Send Message
                      </Button>
                    </Grid>
                  </Grid>
                </Box>
              </Paper>
            </motion.div>
          </Grid>

          <Grid
            item
            xs={12}
            md={6}
          >
            <Grid
              container
              spacing={3}
              direction="column"
              sx={{ height: "100%" }}
            >
              <Grid item>
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  viewport={{ once: true }}
                >
                  <Paper
                    elevation={6}
                    sx={{
                      p: 4,
                      borderRadius: 4,
                      background:
                        "linear-gradient(135deg, #1976d2 0%, #42a5f5 100%)",
                      color: "white",
                    }}
                  >
                    <Box
                      sx={{ display: "flex", alignItems: "flex-start", gap: 3 }}
                    >
                      <Box
                        sx={{
                          width: 60,
                          height: 60,
                          borderRadius: "50%",
                          bgcolor: "rgba(255, 255, 255, 0.2)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <EmailIcon fontSize="large" />
                      </Box>
                      <Box>
                        <Typography
                          variant="h5"
                          component="h3"
                          gutterBottom
                          fontWeight={600}
                        >
                          Email Us
                        </Typography>
                        <Typography
                          variant="body1"
                          paragraph
                          sx={{ opacity: 0.8 }}
                        >
                          Our friendly team is here to help.
                        </Typography>
                        <Typography
                          variant="h6"
                          fontWeight={500}
                        >
                          <Box
                            component="a"
                            href="mailto:info@p-flow.com"
                            sx={{
                              color: "white",
                              textDecoration: "none",
                              position: "relative",
                              "&::after": {
                                content: '""',
                                position: "absolute",
                                width: "100%",
                                height: "2px",
                                bottom: -2,
                                left: 0,
                                backgroundColor: "white",
                                opacity: 0.5,
                              },
                              "&:hover::after": {
                                opacity: 1,
                              },
                            }}
                          >
                            info@p-flow.com
                          </Box>
                        </Typography>
                      </Box>
                    </Box>
                  </Paper>
                </motion.div>
              </Grid>

              <Grid item>
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <Paper
                    elevation={6}
                    sx={{
                      p: 4,
                      borderRadius: 4,
                      background:
                        "linear-gradient(135deg, #00bcd4 0%, #4dd0e1 100%)",
                      color: "white",
                    }}
                  >
                    <Box
                      sx={{ display: "flex", alignItems: "flex-start", gap: 3 }}
                    >
                      <Box
                        sx={{
                          width: 60,
                          height: 60,
                          borderRadius: "50%",
                          bgcolor: "rgba(255, 255, 255, 0.2)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <PhoneIcon fontSize="large" />
                      </Box>
                      <Box>
                        <Typography
                          variant="h5"
                          component="h3"
                          gutterBottom
                          fontWeight={600}
                        >
                          Call Us
                        </Typography>
                        <Typography
                          variant="body1"
                          paragraph
                          sx={{ opacity: 0.8 }}
                        >
                          Mon-Fri from 8am to 5pm.
                        </Typography>
                        <Typography
                          variant="h6"
                          fontWeight={500}
                        >
                          <Box
                            component="a"
                            href="tel:+1234567890"
                            sx={{
                              color: "white",
                              textDecoration: "none",
                              position: "relative",
                              "&::after": {
                                content: '""',
                                position: "absolute",
                                width: "100%",
                                height: "2px",
                                bottom: -2,
                                left: 0,
                                backgroundColor: "white",
                                opacity: 0.5,
                              },
                              "&:hover::after": {
                                opacity: 1,
                              },
                            }}
                          >
                            +1 (234) 567-890
                          </Box>
                        </Typography>
                      </Box>
                    </Box>
                  </Paper>
                </motion.div>
              </Grid>

              <Grid item>
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  <Paper
                    elevation={6}
                    sx={{
                      p: 4,
                      borderRadius: 4,
                      background:
                        "linear-gradient(135deg, #4caf50 0%, #81c784 100%)",
                      color: "white",
                    }}
                  >
                    <Box
                      sx={{ display: "flex", alignItems: "flex-start", gap: 3 }}
                    >
                      <Box
                        sx={{
                          width: 60,
                          height: 60,
                          borderRadius: "50%",
                          bgcolor: "rgba(255, 255, 255, 0.2)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <LocationOnIcon fontSize="large" />
                      </Box>
                      <Box>
                        <Typography
                          variant="h5"
                          component="h3"
                          gutterBottom
                          fontWeight={600}
                        >
                          Visit Us
                        </Typography>
                        <Typography
                          variant="body1"
                          paragraph
                          sx={{ opacity: 0.8 }}
                        >
                          Come say hello at our office.
                        </Typography>
                        <Typography
                          variant="body1"
                          fontWeight={500}
                        >
                          123 Pharmacy Street
                          <br />
                          Suite 100
                          <br />
                          San Francisco, CA 94103
                        </Typography>
                      </Box>
                    </Box>
                  </Paper>
                </motion.div>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>

      <Snackbar
        open={snackbar.open}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity={snackbar.severity}
          variant="filled"
          sx={{ width: "100%" }}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default ContactSection;
