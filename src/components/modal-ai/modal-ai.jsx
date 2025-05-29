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
} from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import { useFormik } from "formik";
import { Search, Close, Psychology, Medication } from "@mui/icons-material";
import { SearchAiSchema } from "../../lib/schemas/serch-ai-schema";
import { useSearchAI } from "../../lib/hooks/pharmacy.action";
import { useTypeContext } from "../../context/UserType.context";
import DrugCardSkeleton from "../Common/Loading/DrugCardSkeleton";
import { useThemeConstants } from "../../lib/constants/theme.constant";
import DrugCard from "../PharmacyComonents/DrugCard/DrugCard";
const modalStyle = {
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: { xs: "90%", sm: "80%", md: "50%", lg: "70%" },
  maxWidth: "900px",
  maxHeight: "90vh",
  borderRadius: 2,
  boxShadow: 24,
  p: 0,
  overflow: "hidden",
};

const SearchAi = () => {
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
    badgeBackground,
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

      {/* Modal */}
      <Modal
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box
            sx={{
              ...modalStyle,
              boxShadow: 14,
              background: backgroundElevated,
            }}
          >
            {/* Header */}
            <Box
              sx={{
                background: cardActiveBackground,
                color: textPrimary,
                p: 2,
                boxShadow: 7,
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 2,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "linear",
                  }}
                >
                  <Psychology sx={{ fontSize: 32 }} />
                </motion.div>
                <Typography
                  variant="h5"
                  component="h2"
                  fontWeight="bold"
                >
                  AI Drug Search
                </Typography>
              </Box>
              <IconButton
                onClick={handleClose}
                color="error"
              >
                <Close />
              </IconButton>
            </Box>

            {/* Content */}
            <Box
              sx={{
                maxHeight: "calc(90vh - 120px)",
                position: "relative",
                overflow: "auto",
              }}
            >
              {/* Search Form */}
              <Box
                fullWidth
                component={"form"}
                sx={{
                  position: "sticky",
                  top: 0,
                  px: 2,
                  py: 4,
                  mb: 1,
                  backdropFilter: "blur(6px)",
                  background: cardBackground,
                  boxShadow: 8,
                }}
                onSubmit={formik.handleSubmit}
              >
                <Box
                  fullWidth
                  sx={{
                    backdropFilter: "blur(5px)",
                    position: "relative",
                  }}
                >
                  <TextField
                    fullWidth
                    id="medicine"
                    name="medicine"
                    label="Enter drug name"
                    variant="outlined"
                    value={formik.values.medicine}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    sx={{
                      "& input:-webkit-autofill": {
                        WebkitBoxShadow: `0 0 0 1000px ${cardBackground} inset`,
                        WebkitTextFillColor: textPrimary,
                        caretColor: textPrimary,
                      },
                    }}
                    error={
                      formik.touched.medicine && Boolean(formik.errors.medicine)
                    }
                    helperText={
                      formik.touched.medicine && formik.errors.medicine
                    }
                    disabled={isLoading}
                    InputProps={{
                      startAdornment: (
                        <Medication
                          sx={{
                            mr: 1,
                            color: textPrimary,
                            boxShadow: 3,
                            background: badgeBackground,
                          }}
                        />
                      ),
                      endAdornment: (
                        <Button
                          type="submit"
                          variant="contained"
                          disabled={isLoading || !formik.values.medicine.trim()}
                          sx={{
                            position: "absolute",
                            right: 0,
                            px: 5,
                          }}
                          startIcon={
                            isLoading ? (
                              <CircularProgress
                                size={15}
                                color="inherit"
                              />
                            ) : (
                              <Search />
                            )
                          }
                        >
                          Search
                        </Button>
                      ),
                    }}
                  />
                </Box>
              </Box>

              {/* Error Display */}
              {error && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <Alert
                    severity="error"
                    sx={{ mb: 3 }}
                  >
                    {error}
                  </Alert>
                </motion.div>
              )}

              {/* Results */}
              <Box
                pt={5}
                px={2}
              >
                {" "}
                <AnimatePresence sx={{ overflow: "auto" }}>
                  {isLoading && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      transition={{ duration: 0.3 }}
                    >
                      <DrugCardSkeleton count={3} />
                    </motion.div>
                  )}
                  {isSuccess ? (
                    data.data.drugs.length > 0 ? (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
                      >
                        <Grid2
                          container
                          spacing={4}
                          px={3}
                          py={2}
                        >
                          {data.data.drugs.map((drug) => (
                            <Grid2
                              key={drug._id}
                              size={{ xs: 12, md: 6, lg: 4 }}
                            >
                              <DrugCard
                                dataInfo={drug}
                                checkPage={true}
                                checkdistance={false}
                              />
                            </Grid2>
                          ))}
                        </Grid2>
                      </motion.div>
                    ) : (
                      <p>Zero</p>
                    )
                  ) : (
                    ""
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
