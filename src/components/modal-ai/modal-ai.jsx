"use client";

/* eslint-disable react/prop-types */
import { useState } from "react";
import {
  Modal,
  Box,
  Typography,
  TextField,
  Button,
  IconButton,
  Fade,
  Backdrop,
  CircularProgress,
  Alert,
  Grid2,
  Paper,
  Chip,
  Stack,
} from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import { useFormik } from "formik";
import {
  Search,
  Close,
  Psychology,
  Medication,
  AutoAwesome,
  TrendingUp,
} from "@mui/icons-material";
import { SearchAiSchema } from "../../lib/schemas/serch-ai-schema";
import { useTypeContext } from "../../context/UserType.context";
import DrugCardSkeleton from "../Common/Loading/DrugCardSkeleton";
import { useThemeConstants } from "../../lib/constants/theme.constant";
import DrugCard from "../PharmacyComonents/DrugCard/DrugCard";
import { useSearchAI } from "../../lib/hooks/use-ai";

const modalStyle = {
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: { xs: "95%", sm: "90%", md: "85%", lg: "80%" },
  maxWidth: "1200px",
  maxHeight: "95vh",
  borderRadius: 4,
  boxShadow: "0 25px 50px rgba(0,0,0,0.25)",
  p: 0,
  overflow: "hidden",
  border: "1px solid rgba(255,255,255,0.1)",
};

const SearchAi = ({ check }) => {
  //States
  const [open, setOpen] = useState(false);
  //Context
  const { token } = useTypeContext();

  //Mutations
  const { mutateAsync, isLoading, isSuccess, data, error } = useSearchAI();

  // Themes
  const {
    cardActiveBackground,
    cardBackground,
    backgroundElevated,
    navyBackground,
    deepBlueBackground,
    textPrimary,
  } = useThemeConstants();

  // Formik
  const formik = useFormik({
    initialValues: {
      medicine: "",
    },
    validationSchema: SearchAiSchema,
    onSubmit: async (values) => {
      console.log(values);
      await mutateAsync({ token, values });
    },
  });

  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    formik.resetForm();
  };

  return (
    <>
      {/* AI Icon Trigger */}
      {check ? (
        <Button
          onClick={handleOpen}
          variant="contained"
          size="large"
          sx={{
            bgcolor: "rgba(255,255,255,0.25)",
            color: "white",
            fontWeight: 600,
            py: 1.5,
            px: 4,
            "&:hover": {
              bgcolor: "rgba(255,255,255,0.35)",
              boxShadow: "0 8px 20px rgba(255,255,255,0.2)",
            },
          }}
        >
          Try AI Search
        </Button>
      ) : (
        <IconButton
          onClick={handleOpen}
          sx={{
            background: navyBackground,
            color: "white",
            position: "fixed",
            bottom: 20,
            right: 20,
            zIndex: 99,
            width: 56,
            height: 56,
            "&:hover": {
              background: deepBlueBackground,
            },
          }}
        >
          <Psychology sx={{ fontSize: 28 }} />
        </IconButton>
      )}

      {/* Enhanced Modal */}
      <Modal
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
          sx: {
            backdropFilter: "blur(8px)",
            backgroundColor: "rgba(0,0,0,0.7)",
          },
        }}
      >
        <Fade in={open}>
          <Box
            sx={{
              ...modalStyle,
              background: `linear-gradient(135deg, ${backgroundElevated} 0%, ${cardBackground} 100%)`,
              backdropFilter: "blur(20px)",
            }}
          >
            {/* Enhanced Header */}
            <Paper
              elevation={0}
              sx={{
                background: `linear-gradient(135deg, ${cardActiveBackground} 0%, ${navyBackground} 100%)`,
                color: "white",
                p: 3,
                position: "relative",
                overflow: "hidden",
                "&::before": {
                  content: '""',
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  background:
                    "linear-gradient(45deg, transparent, rgba(255,255,255,0.1), transparent)",
                  transform: "translateX(-100%)",
                  animation: "shimmer 3s infinite",
                },
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  position: "relative",
                  zIndex: 1,
                }}
              >
                <Stack
                  direction="row"
                  alignItems="center"
                  spacing={2}
                >
                  <motion.div
                    animate={{
                      rotate: [0, 360],
                      scale: [1, 1.1, 1],
                    }}
                    transition={{
                      rotate: {
                        duration: 3,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "linear",
                      },
                      scale: {
                        duration: 2,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "easeInOut",
                      },
                    }}
                  >
                    <Box
                      sx={{
                        background: "linear-gradient(45deg, #667eea, #764ba2)",
                        borderRadius: "50%",
                        p: 1.5,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        boxShadow: "0 8px 25px rgba(102, 126, 234, 0.3)",
                      }}
                    >
                      <Psychology sx={{ fontSize: 32, color: "white" }} />
                    </Box>
                  </motion.div>
                  <Box>
                    <Typography
                      variant="h4"
                      component="h2"
                      fontWeight="800"
                      sx={{ mb: 0.5 }}
                    >
                      AI Drug Search
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{ opacity: 0.9, fontSize: "0.95rem" }}
                    >
                      Powered by advanced AI • Find medicines instantly
                    </Typography>
                  </Box>
                </Stack>

                <Stack
                  direction="row"
                  alignItems="center"
                  spacing={1}
                >
                  <Chip
                    icon={<AutoAwesome sx={{ fontSize: 16 }} />}
                    label="AI Powered"
                    size="small"
                    sx={{
                      bgcolor: "rgba(255,255,255,0.2)",
                      color: "white",
                      fontWeight: 600,
                      backdropFilter: "blur(10px)",
                    }}
                  />
                  <IconButton
                    onClick={handleClose}
                    sx={{
                      color: "white",
                      bgcolor: "rgba(255,255,255,0.1)",
                      "&:hover": {
                        bgcolor: "rgba(244, 67, 54, 0.8)",
                        transform: "scale(1.1)",
                      },
                      transition: "all 0.3s ease",
                    }}
                  >
                    <Close />
                  </IconButton>
                </Stack>
              </Box>

              {/* Decorative Elements */}
              <Box
                sx={{
                  position: "absolute",
                  top: -20,
                  right: -20,
                  width: 100,
                  height: 100,
                  borderRadius: "50%",
                  background:
                    "radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%)",
                }}
              />
            </Paper>

            {/* Content Container */}
            <Box
              sx={{
                maxHeight: "calc(95vh - 140px)",
                position: "relative",
                overflow: "auto",
                "&::-webkit-scrollbar": {
                  width: "8px",
                },
                "&::-webkit-scrollbar-track": {
                  background: "rgba(0,0,0,0.1)",
                },
                "&::-webkit-scrollbar-thumb": {
                  background: "rgba(0,0,0,0.3)",
                  borderRadius: "4px",
                },
              }}
            >
              {/* Enhanced Search Form */}
              <Paper
                elevation={3}
                component="form"
                onSubmit={formik.handleSubmit}
                sx={{
                  position: "sticky",
                  top: 0,
                  m: 3,
                  p: 3,
                  borderRadius: 3,
                  background: `linear-gradient(135deg, ${cardBackground} 0%, rgba(255,255,255,0.05) 100%)`,
                  backdropFilter: "blur(20px)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  zIndex: 10,
                }}
              >
                <Stack spacing={2}>
                  <Box
                    display="flex"
                    alignItems="center"
                    gap={2}
                    mb={1}
                  >
                    <Medication sx={{ color: "primary.main", fontSize: 24 }} />
                    <Typography
                      variant="h6"
                      fontWeight={600}
                      color={textPrimary}
                    >
                      Search Medicine Database
                    </Typography>
                  </Box>

                  <TextField
                    fullWidth
                    id="medicine"
                    name="medicine"
                    placeholder="Enter drug name, active ingredient, or condition..."
                    variant="outlined"
                    value={formik.values.medicine}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={
                      formik.touched.medicine && Boolean(formik.errors.medicine)
                    }
                    helperText={
                      formik.touched.medicine && formik.errors.medicine
                    }
                    disabled={isLoading}
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        borderRadius: 3,
                        fontSize: "1.1rem",
                        background: "rgba(255,255,255,0.8)",
                        backdropFilter: "blur(10px)",
                        transition: "all 0.3s ease",
                        "&:hover": {
                          boxShadow: "0 8px 25px rgba(33, 150, 243, 0.15)",
                        },
                        "&.Mui-focused": {
                          boxShadow: "0 8px 25px rgba(33, 150, 243, 0.25)",
                        },
                      },
                      "& input:-webkit-autofill": {
                        WebkitBoxShadow: `0 0 0 1000px ${cardBackground} inset`,
                        WebkitTextFillColor: textPrimary,
                        caretColor: textPrimary,
                      },
                    }}
                    InputProps={{
                      endAdornment: (
                        <motion.div
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Button
                            type="submit"
                            variant="contained"
                            disabled={
                              isLoading || !formik.values.medicine.trim()
                            }
                            sx={{
                              borderRadius: 2,
                              px: 3,
                              py: 1,
                              background:
                                "linear-gradient(45deg, #2196F3, #21CBF3)",
                              fontWeight: 600,
                              "&:hover": {
                                background:
                                  "linear-gradient(45deg, #1976D2, #1CB5E0)",
                                boxShadow: "0 8px 20px rgba(33, 150, 243, 0.4)",
                              },
                              "&:disabled": {
                                background: "rgba(0,0,0,0.12)",
                              },
                            }}
                            startIcon={
                              isLoading ? (
                                <CircularProgress
                                  size={18}
                                  color="inherit"
                                />
                              ) : (
                                <Search />
                              )
                            }
                          >
                            {isLoading ? "Searching..." : "Search"}
                          </Button>
                        </motion.div>
                      ),
                    }}
                  />

                  {/* Search Tips */}
                  <Box>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{ mb: 1, fontWeight: 500 }}
                    >
                      💡 Search Tips:
                    </Typography>
                    <Stack
                      direction="row"
                      spacing={1}
                      flexWrap="wrap"
                      useFlexGap
                    >
                      {[
                        "Paracetamol",
                        "Ibuprofen",
                        "Vitamin D",
                        "Antibiotics",
                      ].map((tip) => (
                        <Chip
                          key={tip}
                          label={tip}
                          size="small"
                          onClick={() => formik.setFieldValue("medicine", tip)}
                          sx={{
                            cursor: "pointer",
                            "&:hover": {
                              bgcolor: "primary.main",
                              color: "white",
                            },
                          }}
                        />
                      ))}
                    </Stack>
                  </Box>
                </Stack>
              </Paper>

              {/* Error Display */}
              {error && (
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                >
                  <Alert
                    severity="error"
                    sx={{
                      mx: 3,
                      mb: 3,
                      borderRadius: 3,
                      "& .MuiAlert-icon": {
                        fontSize: 24,
                      },
                    }}
                  >
                    <Typography
                      variant="body1"
                      fontWeight={500}
                    >
                      {error}
                    </Typography>
                  </Alert>
                </motion.div>
              )}

              {/* Results Section */}
              <Box
                px={3}
                pb={3}
              >
                <AnimatePresence mode="wait">
                  {isLoading && (
                    <motion.div
                      key="loading"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Paper
                        sx={{
                          p: 3,
                          borderRadius: 3,
                          background: "rgba(255,255,255,0.05)",
                          backdropFilter: "blur(10px)",
                          border: "1px solid rgba(255,255,255,0.1)",
                          mb: 3,
                        }}
                      >
                        <Stack
                          direction="row"
                          alignItems="center"
                          spacing={2}
                          mb={3}
                        >
                          <CircularProgress size={24} />
                          <Typography
                            variant="h6"
                            fontWeight={600}
                            color={textPrimary}
                          >
                            AI is searching through our database...
                          </Typography>
                        </Stack>
                        <DrugCardSkeleton count={3} />
                      </Paper>
                    </motion.div>
                  )}

                  {isSuccess && (
                    <motion.div
                      key="results"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5 }}
                    >
                      {data.data.drugs.length > 0 ? (
                        <>
                          {/* Results Header */}
                          <Paper
                            sx={{
                              p: 3,
                              borderRadius: 3,
                              background: "rgba(76, 175, 80, 0.1)",
                              border: "1px solid rgba(76, 175, 80, 0.3)",
                              mb: 3,
                            }}
                          >
                            <Stack
                              direction="row"
                              alignItems="center"
                              spacing={2}
                            >
                              <TrendingUp
                                sx={{ color: "success.main", fontSize: 28 }}
                              />
                              <Box>
                                <Typography
                                  variant="h6"
                                  fontWeight={700}
                                  color="success.main"
                                >
                                  Found {data.data.drugs.length} Results
                                </Typography>
                                <Typography
                                  variant="body2"
                                  color="text.secondary"
                                >
                                  AI has found the following medicines matching
                                  your search
                                </Typography>
                              </Box>
                            </Stack>
                          </Paper>

                          {/* Results Grid */}
                          <Grid2
                            container
                            spacing={3}
                          >
                            {data.data.drugs.map((drug, index) => (
                              <Grid2
                                key={drug._id}
                                size={{ xs: 12, md: 6, lg: 4 }}
                              >
                                <motion.div
                                  initial={{ opacity: 0, y: 30 }}
                                  animate={{ opacity: 1, y: 0 }}
                                  transition={{
                                    duration: 0.4,
                                    delay: index * 0.1,
                                  }}
                                >
                                  <DrugCard
                                    dataInfo={drug}
                                    checkPage={true}
                                    checkActive={false}
                                    checkdistance={false}
                                  />
                                </motion.div>
                              </Grid2>
                            ))}
                          </Grid2>
                        </>
                      ) : (
                        <Paper
                          sx={{
                            p: 4,
                            borderRadius: 3,
                            background: "rgba(255,193,7,0.1)",
                            border: "1px solid rgba(255,193,7,0.3)",
                            textAlign: "center",
                          }}
                        >
                          <Typography
                            variant="h6"
                            fontWeight={600}
                            color="warning.main"
                            gutterBottom
                          >
                            No Results Found
                          </Typography>
                          <Typography
                            variant="body1"
                            color="text.secondary"
                          >
                            Try searching with different keywords or check the
                            spelling
                          </Typography>
                        </Paper>
                      )}
                    </motion.div>
                  )}
                </AnimatePresence>
              </Box>
            </Box>
          </Box>
        </Fade>
      </Modal>
    </>
  );
};

export default SearchAi;
