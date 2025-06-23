/* eslint-disable react/prop-types */
import { useState, useRef } from "react";
import {
  Modal,
  Box,
  Typography,
  Button,
  IconButton,
  Fade,
  Backdrop,
  Paper,
  Chip,
  Stack,
  Grid2,
  Card,
  CardContent,
  Avatar,
  Divider,
  LinearProgress,
  Alert,
} from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import {
  Close,
  Receipt,
  Person,
  LocalHospital,
  Medication,
  CheckCircle,
  Warning,
  Notes,
  AutoAwesome,
  ShoppingCart,
  CloudUpload,
  Image,
  Delete,
  Visibility,
  Send,
} from "@mui/icons-material";
import { useThemeConstants } from "../../../lib/constants/theme.constant";

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

const PrescriptionModal = ({
  open,
  onClose,
  prescriptionData,
  onUpload,
  uploadLoading = false,
  uploadError = null,
}) => {
  // States
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);
  const [dragActive, setDragActive] = useState(false);
  const fileInputRef = useRef(null);

  // Themes
  const {
    cardActiveBackground,
    cardBackground,
    backgroundElevated,
    navyBackground,
    textPrimary,
  } = useThemeConstants();

  // Mock data for when no data is provided
  const mockData = {
    imageUrl:
      "https://res.cloudinary.com/dqicm2ir2/raw/upload/v1750532994/prescriptions/image-1750532994117-photo_2025-06-19_18-16-23.jpg",
    prescription: {
      patient: { name: "John Doe", age: 35, gender: "Male" },
      doctor: { name: "Dr. Smith Johnson", license: "12345" },
      prescriptionDate: "2025-01-15",
      medications: [
        {
          name: "Paracetamol",
          dosage: "500mg",
          frequency: "Twice a day",
          duration: "7 days",
          available: true,
          matchedDrugs: [
            {
              _id: "1",
              name: "Paracetamol 500mg",
              price: 25,
              discountedPrice: 20,
              stock: 100,
              inventory: {
                name: "City Pharmacy",
                profileImage: "/placeholder.svg?height=40&width=40",
              },
            },
          ],
        },
        {
          name: "Ibuprofen",
          dosage: "400mg",
          frequency: "Three times a day",
          duration: "5 days",
          available: false,
          matchedDrugs: [],
        },
      ],
      medicationsCount: 2,
      additionalNotes:
        "Take medications after meals. Avoid alcohol during treatment.",
    },
  };

  const data = prescriptionData || mockData;
  const prescription = data?.prescription;
  const hasData = Boolean(prescriptionData);

  // File handling functions
  const handleFileSelect = (file) => {
    if (file && file.type.startsWith("image/")) {
      setSelectedFile(file);
      const reader = new FileReader();
      reader.onload = (e) => setPreviewUrl(e.target.result);
      reader.readAsDataURL(file);
    }
  };

  const handleFileInputChange = (e) => {
    const file = e.target.files[0];
    if (file) handleFileSelect(file);
  };

  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    const file = e.dataTransfer.files[0];
    if (file) handleFileSelect(file);
  };

  const handleUpload = () => {
    if (selectedFile && onUpload) {
      onUpload(selectedFile);
    }
  };

  const handleRemoveFile = () => {
    setSelectedFile(null);
    setPreviewUrl(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const formatPrice = (price) => {
    return `$${price.toFixed(2)}`;
  };

  return (
    <Modal
      open={open}
      onClose={onClose}
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
                    rotate: [0, 5, -5, 0],
                    scale: [1, 1.05, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                  }}
                >
                  <Box
                    sx={{
                      background: "linear-gradient(45deg, #4CAF50, #8BC34A)",
                      borderRadius: "50%",
                      p: 1.5,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      boxShadow: "0 8px 25px rgba(76, 175, 80, 0.3)",
                    }}
                  >
                    <Receipt sx={{ fontSize: 32, color: "white" }} />
                  </Box>
                </motion.div>
                <Box>
                  <Typography
                    variant="h4"
                    component="h2"
                    fontWeight="800"
                    sx={{ mb: 0.5 }}
                  >
                    Prescription Analysis
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{ opacity: 0.9, fontSize: "0.95rem" }}
                  >
                    Upload prescription • AI analysis • Medicine matching
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
                  onClick={onClose}
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
            <Box p={3}>
              {/* Upload Section - Always visible */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Paper
                  sx={{
                    p: 3,
                    borderRadius: 3,
                    background: `linear-gradient(135deg, ${cardBackground} 0%, rgba(33, 150, 243, 0.05) 100%)`,
                    border: "2px solid rgba(33, 150, 243, 0.1)",
                    mb: 4,
                  }}
                >
                  <Stack
                    direction="row"
                    alignItems="center"
                    spacing={2}
                    mb={3}
                  >
                    <CloudUpload sx={{ color: "primary.main", fontSize: 28 }} />
                    <Box>
                      <Typography
                        variant="h6"
                        fontWeight={700}
                        color={textPrimary}
                      >
                        Upload Prescription Image
                      </Typography>
                      <Typography
                        variant="body2"
                        color="text.secondary"
                      >
                        Upload a clear image of your prescription for AI
                        analysis
                      </Typography>
                    </Box>
                  </Stack>

                  {/* Upload Error */}
                  {uploadError && (
                    <Alert
                      severity="error"
                      sx={{ mb: 2 }}
                    >
                      {uploadError}
                    </Alert>
                  )}

                  {/* File Upload Area */}
                  {!selectedFile ? (
                    <Box
                      onDragEnter={handleDrag}
                      onDragLeave={handleDrag}
                      onDragOver={handleDrag}
                      onDrop={handleDrop}
                      sx={{
                        border: `2px dashed ${
                          dragActive ? "#2196F3" : "rgba(0,0,0,0.2)"
                        }`,
                        borderRadius: 3,
                        p: 4,
                        textAlign: "center",
                        bgcolor: dragActive
                          ? "rgba(33, 150, 243, 0.05)"
                          : "transparent",
                        cursor: "pointer",
                        transition: "all 0.3s ease",
                        "&:hover": {
                          borderColor: "#2196F3",
                          bgcolor: "rgba(33, 150, 243, 0.05)",
                        },
                      }}
                      onClick={() => fileInputRef.current?.click()}
                    >
                      <motion.div
                        animate={{ y: [0, -5, 0] }}
                        transition={{
                          duration: 2,
                          repeat: Number.POSITIVE_INFINITY,
                        }}
                      >
                        <Image
                          sx={{ fontSize: 48, color: "primary.main", mb: 2 }}
                        />
                      </motion.div>
                      <Typography
                        variant="h6"
                        fontWeight={600}
                        gutterBottom
                      >
                        Drop your prescription here
                      </Typography>
                      <Typography
                        variant="body2"
                        color="text.secondary"
                        mb={2}
                      >
                        or click to browse files
                      </Typography>
                      <Button
                        variant="outlined"
                        startIcon={<CloudUpload />}
                        sx={{ textTransform: "none" }}
                      >
                        Choose File
                      </Button>
                      <Typography
                        variant="caption"
                        display="block"
                        mt={1}
                        color="text.secondary"
                      >
                        Supports: JPG, PNG, JPEG (Max 10MB)
                      </Typography>
                    </Box>
                  ) : (
                    /* File Preview */
                    <Box>
                      <Paper
                        sx={{
                          p: 2,
                          borderRadius: 2,
                          border: "1px solid rgba(76, 175, 80, 0.3)",
                          bgcolor: "rgba(76, 175, 80, 0.05)",
                        }}
                      >
                        <Stack
                          direction="row"
                          alignItems="center"
                          spacing={2}
                        >
                          {previewUrl && (
                            <Box
                              component="img"
                              src={previewUrl}
                              sx={{
                                width: 80,
                                height: 80,
                                objectFit: "cover",
                                borderRadius: 2,
                                border: "2px solid rgba(76, 175, 80, 0.3)",
                              }}
                            />
                          )}
                          <Box flex={1}>
                            <Typography
                              variant="body1"
                              fontWeight={600}
                            >
                              {selectedFile.name}
                            </Typography>
                            <Typography
                              variant="body2"
                              color="text.secondary"
                            >
                              {(selectedFile.size / 1024 / 1024).toFixed(2)} MB
                            </Typography>
                            <Chip
                              label="Ready to upload"
                              size="small"
                              color="success"
                              sx={{ mt: 1 }}
                            />
                          </Box>
                          <Stack
                            direction="row"
                            spacing={1}
                          >
                            <IconButton
                              onClick={() => window.open(previewUrl, "_blank")}
                              sx={{ color: "primary.main" }}
                            >
                              <Visibility />
                            </IconButton>
                            <IconButton
                              onClick={handleRemoveFile}
                              sx={{ color: "error.main" }}
                            >
                              <Delete />
                            </IconButton>
                          </Stack>
                        </Stack>
                      </Paper>

                      {/* Upload Button */}
                      <Box
                        mt={2}
                        display="flex"
                        gap={2}
                      >
                        <Button
                          variant="contained"
                          startIcon={uploadLoading ? null : <Send />}
                          onClick={handleUpload}
                          disabled={uploadLoading}
                          sx={{
                            background:
                              "linear-gradient(45deg, #4CAF50, #8BC34A)",
                            "&:hover": {
                              background:
                                "linear-gradient(45deg, #388E3C, #689F38)",
                            },
                            textTransform: "none",
                            fontWeight: 600,
                            px: 3,
                          }}
                        >
                          {uploadLoading
                            ? "Analyzing..."
                            : "Analyze Prescription"}
                        </Button>
                        <Button
                          variant="outlined"
                          onClick={handleRemoveFile}
                          sx={{ textTransform: "none" }}
                        >
                          Choose Different File
                        </Button>
                      </Box>

                      {/* Upload Progress */}
                      {uploadLoading && (
                        <Box mt={2}>
                          <LinearProgress
                            sx={{
                              borderRadius: 1,
                              height: 6,
                              "& .MuiLinearProgress-bar": {
                                background:
                                  "linear-gradient(45deg, #4CAF50, #8BC34A)",
                              },
                            }}
                          />
                          <Typography
                            variant="body2"
                            color="text.secondary"
                            mt={1}
                          >
                            AI is analyzing your prescription...
                          </Typography>
                        </Box>
                      )}
                    </Box>
                  )}

                  <input
                    ref={fileInputRef}
                    type="file"
                    accept="image/*"
                    onChange={handleFileInputChange}
                    style={{ display: "none" }}
                  />
                </Paper>
              </motion.div>

              {/* Results Section - Only show when data is available */}
              <AnimatePresence>
                {hasData && prescription && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                  >
                    {/* Patient & Doctor Information */}
                    <Grid2
                      container
                      spacing={3}
                      mb={4}
                    >
                      {/* Patient Info */}
                      <Grid2 size={{ xs: 12, md: 6 }}>
                        <motion.div
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5 }}
                        >
                          <Paper
                            sx={{
                              p: 3,
                              borderRadius: 3,
                              background: `linear-gradient(135deg, ${cardBackground} 0%, rgba(33, 150, 243, 0.05) 100%)`,
                              border: "1px solid rgba(33, 150, 243, 0.1)",
                            }}
                          >
                            <Stack
                              direction="row"
                              alignItems="center"
                              spacing={2}
                              mb={2}
                            >
                              <Person
                                sx={{ color: "primary.main", fontSize: 28 }}
                              />
                              <Typography
                                variant="h6"
                                fontWeight={700}
                                color={textPrimary}
                              >
                                Patient Information
                              </Typography>
                            </Stack>
                            <Stack spacing={1.5}>
                              <Box
                                display="flex"
                                justifyContent="space-between"
                              >
                                <Typography
                                  variant="body2"
                                  color="text.secondary"
                                >
                                  Name:
                                </Typography>
                                <Typography
                                  variant="body1"
                                  fontWeight={600}
                                >
                                  {prescription.patient.name}
                                </Typography>
                              </Box>
                              <Box
                                display="flex"
                                justifyContent="space-between"
                              >
                                <Typography
                                  variant="body2"
                                  color="text.secondary"
                                >
                                  Age:
                                </Typography>
                                <Typography
                                  variant="body1"
                                  fontWeight={600}
                                >
                                  {prescription.patient.age} years
                                </Typography>
                              </Box>
                              <Box
                                display="flex"
                                justifyContent="space-between"
                              >
                                <Typography
                                  variant="body2"
                                  color="text.secondary"
                                >
                                  Gender:
                                </Typography>
                                <Typography
                                  variant="body1"
                                  fontWeight={600}
                                >
                                  {prescription.patient.gender}
                                </Typography>
                              </Box>
                            </Stack>
                          </Paper>
                        </motion.div>
                      </Grid2>

                      {/* Doctor Info */}
                      <Grid2 size={{ xs: 12, md: 6 }}>
                        <motion.div
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: 0.1 }}
                        >
                          <Paper
                            sx={{
                              p: 3,
                              borderRadius: 3,
                              background: `linear-gradient(135deg, ${cardBackground} 0%, rgba(76, 175, 80, 0.05) 100%)`,
                              border: "1px solid rgba(76, 175, 80, 0.1)",
                            }}
                          >
                            <Stack
                              direction="row"
                              alignItems="center"
                              spacing={2}
                              mb={2}
                            >
                              <LocalHospital
                                sx={{ color: "success.main", fontSize: 28 }}
                              />
                              <Typography
                                variant="h6"
                                fontWeight={700}
                                color={textPrimary}
                              >
                                Doctor Information
                              </Typography>
                            </Stack>
                            <Stack spacing={1.5}>
                              <Box
                                display="flex"
                                justifyContent="space-between"
                              >
                                <Typography
                                  variant="body2"
                                  color="text.secondary"
                                >
                                  Doctor:
                                </Typography>
                                <Typography
                                  variant="body1"
                                  fontWeight={600}
                                >
                                  {prescription.doctor.name}
                                </Typography>
                              </Box>
                              <Box
                                display="flex"
                                justifyContent="space-between"
                              >
                                <Typography
                                  variant="body2"
                                  color="text.secondary"
                                >
                                  License:
                                </Typography>
                                <Typography
                                  variant="body1"
                                  fontWeight={600}
                                >
                                  #{prescription.doctor.license}
                                </Typography>
                              </Box>
                              <Box
                                display="flex"
                                justifyContent="space-between"
                              >
                                <Typography
                                  variant="body2"
                                  color="text.secondary"
                                >
                                  Date:
                                </Typography>
                                <Typography
                                  variant="body1"
                                  fontWeight={600}
                                >
                                  {formatDate(prescription.prescriptionDate)}
                                </Typography>
                              </Box>
                            </Stack>
                          </Paper>
                        </motion.div>
                      </Grid2>
                    </Grid2>

                    {/* Medications Section */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                    >
                      <Paper
                        sx={{
                          p: 3,
                          borderRadius: 3,
                          background: `linear-gradient(135deg, ${cardBackground} 0%, rgba(255,255,255,0.05) 100%)`,
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
                          <Medication
                            sx={{ color: "primary.main", fontSize: 28 }}
                          />
                          <Box>
                            <Typography
                              variant="h6"
                              fontWeight={700}
                              color={textPrimary}
                            >
                              Prescribed Medications (
                              {prescription.medicationsCount})
                            </Typography>
                            <Typography
                              variant="body2"
                              color="text.secondary"
                            >
                              {
                                prescription.medications.filter(
                                  (med) => med.available
                                ).length
                              }{" "}
                              available •{" "}
                              {
                                prescription.medications.filter(
                                  (med) => !med.available
                                ).length
                              }{" "}
                              not found
                            </Typography>
                          </Box>
                        </Stack>

                        <Grid2
                          container
                          spacing={3}
                        >
                          {prescription.medications.map((medication, index) => (
                            <Grid2
                              key={index}
                              size={{ xs: 12, md: 6 }}
                            >
                              <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{
                                  duration: 0.4,
                                  delay: index * 0.1,
                                }}
                              >
                                <Card
                                  sx={{
                                    borderRadius: 3,
                                    border: medication.available
                                      ? "2px solid rgba(76, 175, 80, 0.3)"
                                      : "2px solid rgba(255, 152, 0, 0.3)",
                                    background: medication.available
                                      ? "linear-gradient(135deg, rgba(76, 175, 80, 0.05), rgba(76, 175, 80, 0.02))"
                                      : "linear-gradient(135deg, rgba(255, 152, 0, 0.05), rgba(255, 152, 0, 0.02))",
                                    position: "relative",
                                    overflow: "visible",
                                  }}
                                >
                                  {/* Status Badge */}
                                  <Chip
                                    icon={
                                      medication.available ? (
                                        <CheckCircle sx={{ fontSize: 16 }} />
                                      ) : (
                                        <Warning sx={{ fontSize: 16 }} />
                                      )
                                    }
                                    label={
                                      medication.available
                                        ? "Matched"
                                        : "Not Found"
                                    }
                                    sx={{
                                      position: "absolute",
                                      top: -10,
                                      right: 16,
                                      bgcolor: medication.available
                                        ? "success.main"
                                        : "warning.main",
                                      color: "white",
                                      fontWeight: 700,
                                      fontSize: "0.75rem",
                                      zIndex: 2,
                                      boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
                                    }}
                                  />

                                  <CardContent sx={{ p: 3 }}>
                                    <Typography
                                      variant="h6"
                                      fontWeight={700}
                                      gutterBottom
                                      color={textPrimary}
                                    >
                                      {medication.name}
                                    </Typography>

                                    <Stack
                                      spacing={1.5}
                                      mb={2}
                                    >
                                      {medication.dosage && (
                                        <Box
                                          display="flex"
                                          justifyContent="space-between"
                                        >
                                          <Typography
                                            variant="body2"
                                            color="text.secondary"
                                          >
                                            Dosage:
                                          </Typography>
                                          <Typography
                                            variant="body2"
                                            fontWeight={600}
                                          >
                                            {medication.dosage}
                                          </Typography>
                                        </Box>
                                      )}
                                      <Box
                                        display="flex"
                                        justifyContent="space-between"
                                      >
                                        <Typography
                                          variant="body2"
                                          color="text.secondary"
                                        >
                                          Frequency:
                                        </Typography>
                                        <Typography
                                          variant="body2"
                                          fontWeight={600}
                                        >
                                          {medication.frequency}
                                        </Typography>
                                      </Box>
                                      <Box
                                        display="flex"
                                        justifyContent="space-between"
                                      >
                                        <Typography
                                          variant="body2"
                                          color="text.secondary"
                                        >
                                          Duration:
                                        </Typography>
                                        <Typography
                                          variant="body2"
                                          fontWeight={600}
                                        >
                                          {medication.duration}
                                        </Typography>
                                      </Box>
                                    </Stack>

                                    {/* Matched Drugs */}
                                    {medication.available &&
                                      medication.matchedDrugs.length > 0 && (
                                        <Box>
                                          <Divider sx={{ my: 2 }} />
                                          <Typography
                                            variant="subtitle2"
                                            fontWeight={600}
                                            color="success.main"
                                            gutterBottom
                                          >
                                            Available Options:
                                          </Typography>
                                          {medication.matchedDrugs.map(
                                            (drug, drugIndex) => (
                                              <Paper
                                                key={drugIndex}
                                                sx={{
                                                  p: 2,
                                                  mt: 1,
                                                  borderRadius: 2,
                                                  background:
                                                    "rgba(76, 175, 80, 0.1)",
                                                  border:
                                                    "1px solid rgba(76, 175, 80, 0.2)",
                                                }}
                                              >
                                                <Stack
                                                  direction="row"
                                                  alignItems="center"
                                                  spacing={2}
                                                  mb={1}
                                                >
                                                  <Avatar
                                                    src={
                                                      drug.inventory
                                                        ?.profileImage
                                                    }
                                                    sx={{
                                                      width: 32,
                                                      height: 32,
                                                    }}
                                                  />
                                                  <Box flex={1}>
                                                    <Typography
                                                      variant="body2"
                                                      fontWeight={600}
                                                    >
                                                      {drug.name}
                                                    </Typography>
                                                    <Typography
                                                      variant="caption"
                                                      color="text.secondary"
                                                    >
                                                      {drug.inventory?.name} •
                                                      Stock: {drug.stock}
                                                    </Typography>
                                                  </Box>
                                                  <Box textAlign="right">
                                                    <Typography
                                                      variant="body2"
                                                      fontWeight={700}
                                                      color="success.main"
                                                    >
                                                      {formatPrice(
                                                        drug.discountedPrice ||
                                                          drug.price
                                                      )}
                                                    </Typography>
                                                    {drug.discountedPrice &&
                                                      drug.discountedPrice <
                                                        drug.price && (
                                                        <Typography
                                                          variant="caption"
                                                          sx={{
                                                            textDecoration:
                                                              "line-through",
                                                          }}
                                                        >
                                                          {formatPrice(
                                                            drug.price
                                                          )}
                                                        </Typography>
                                                      )}
                                                  </Box>
                                                </Stack>
                                                <Button
                                                  variant="contained"
                                                  size="small"
                                                  startIcon={<ShoppingCart />}
                                                  fullWidth
                                                  sx={{
                                                    borderRadius: 2,
                                                    textTransform: "none",
                                                    fontWeight: 600,
                                                  }}
                                                >
                                                  Add to Cart
                                                </Button>
                                              </Paper>
                                            )
                                          )}
                                        </Box>
                                      )}
                                  </CardContent>
                                </Card>
                              </motion.div>
                            </Grid2>
                          ))}
                        </Grid2>
                      </Paper>
                    </motion.div>

                    {/* Additional Notes */}
                    {prescription.additionalNotes && (
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                      >
                        <Paper
                          sx={{
                            p: 3,
                            borderRadius: 3,
                            background: `linear-gradient(135deg, ${cardBackground} 0%, rgba(103, 58, 183, 0.05) 100%)`,
                            border: "1px solid rgba(103, 58, 183, 0.1)",
                          }}
                        >
                          <Stack
                            direction="row"
                            alignItems="flex-start"
                            spacing={2}
                          >
                            <Notes
                              sx={{
                                color: "secondary.main",
                                fontSize: 28,
                                mt: 0.5,
                              }}
                            />
                            <Box>
                              <Typography
                                variant="h6"
                                fontWeight={700}
                                color={textPrimary}
                                gutterBottom
                              >
                                Additional Notes
                              </Typography>
                              <Typography
                                variant="body1"
                                sx={{ whiteSpace: "pre-line", lineHeight: 1.6 }}
                              >
                                {prescription.additionalNotes}
                              </Typography>
                            </Box>
                          </Stack>
                        </Paper>
                      </motion.div>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>
            </Box>
          </Box>
        </Box>
      </Fade>
    </Modal>
  );
};

export default PrescriptionModal;
