import {
  Grid,
  Box,
  Typography,
  useTheme,
  Container,
  Chip,
  Paper,
  Button,
} from "@mui/material";
import { Helmet } from "react-helmet";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate, useParams } from "react-router-dom";
import { useCategoryDrugs } from "../../../lib/hooks/useAdminAction";
import CategoryDrugCard from "./_components/CategoryDrugCard";
import Inventory2OutlinedIcon from "@mui/icons-material/Inventory2Outlined";
import CategoryDrugSkeleton from "./_components/CategoryDrugSkeleton";
import MedicalServicesIcon from "@mui/icons-material/MedicalServices";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import VerifiedIcon from "@mui/icons-material/Verified";

export default function CategoryDrugs() {
  const { id } = useParams();
  const { data, isLoading } = useCategoryDrugs({ id });
  const categoryDrugs = data?.data || [];
  const categoryName = categoryDrugs[0]?.category?.name;
  const categoryImage = categoryDrugs[0]?.category?.imageCover;
  const theme = useTheme();
  const navigate = useNavigate();

  if (isLoading) return <CategoryDrugSkeleton />;

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  const headerVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  return (
    <>
      <Helmet>
        <title> Drug Categories </title>
        <meta
          name="description"
          content="Browse all available medicines in this category. Find prices, details, and availability from connected inventories on MedConnect."
        />
      </Helmet>

      {categoryDrugs.length > 0 ? (
        <>
          <Helmet>
            <title> {categoryName} drugs </title>
          </Helmet>

          <Box
            sx={{
              background:
                theme.palette.mode === "light"
                  ? "linear-gradient(180deg,rgb(230, 234, 237) 0%,rgb(222, 225, 228) 100%)"
                  : "linear-gradient(135deg, #232526 0%, #414345 100%)",
              minHeight: "100vh",
              position: "relative",
            }}
          >
            {/* Background Pattern */}
            <Box
              sx={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundImage:
                  theme.palette.mode === "light"
                    ? `radial-gradient(circle at 1px 1px, rgba(59,130,246,0.15) 1px, transparent 0)`
                    : `radial-gradient(circle at 1px 1px, rgba(59,130,246,0.1) 1px, transparent 0)`,
                backgroundSize: "20px 20px",
                opacity: 0.5,
                pointerEvents: "none",
              }}
            />

            <Container
              maxWidth="xl"
              sx={{ position: "relative", zIndex: 1, py: 4 }}
            >
              {/* Enhanced Header Section */}
              <motion.div
                variants={headerVariants}
                initial="hidden"
                animate="visible"
              >
                <Paper
                  elevation={0}
                  sx={{
                    background:
                      theme.palette.mode === "dark"
                        ? "linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)"
                        : "linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.6) 100%)",
                    backdropFilter: "blur(20px)",
                    WebkitBackdropFilter: "blur(20px)",
                    border:
                      theme.palette.mode === "dark"
                        ? "1px solid rgba(255,255,255,0.1)"
                        : "1px solid rgba(0,0,0,0.05)",
                    borderRadius: 4,
                    p: { xs: 3, md: 5 },
                    mb: 5,
                    position: "relative",
                    overflow: "hidden",
                    "&::before": {
                      content: '""',
                      position: "absolute",
                      top: 0,
                      left: 0,
                      right: 0,
                      height: "4px",
                      background:
                        "linear-gradient(90deg, #4285f4, #34a853, #fbbc04, #ea4335)",
                      backgroundSize: "300% 100%",
                      animation: "gradientMove 3s ease-in-out infinite",
                    },
                    "@keyframes gradientMove": {
                      "0%, 100%": { backgroundPosition: "0% 50%" },
                      "50%": { backgroundPosition: "100% 50%" },
                    },
                  }}
                >
                  <Grid container spacing={4} alignItems="center">
                    {/* Category Image */}
                    <Grid item xs={12} md={3}>
                      <motion.div
                        whileHover={{ scale: 1.05, rotate: 2 }}
                        transition={{
                          type: "spring",
                          stiffness: 300,
                          damping: 20,
                        }}
                      >
                        <Box
                          sx={{
                            position: "relative",
                            display: "flex",
                            justifyContent: "center",
                          }}
                        >
                          <Box
                            component="img"
                            src={categoryImage}
                            alt={categoryName}
                            sx={{
                              width: { xs: 120, md: 150 },
                              height: { xs: 120, md: 150 },
                              borderRadius: 3,
                              objectFit: "cover",
                              boxShadow: "0 20px 40px rgba(0,0,0,0.15)",
                              border: "3px solid rgba(255,255,255,0.2)",
                            }}
                          />
                        </Box>
                      </motion.div>
                    </Grid>

                    {/* Category Info */}
                    <Grid item xs={12} md={6}>
                      <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3, duration: 0.8 }}
                      >
                        <Typography
                          variant="h3"
                          sx={{
                            fontWeight: 800,
                            background:
                              theme.palette.mode === "dark"
                                ? "linear-gradient(135deg, #ffffff 0%, #e2e8f0 100%)"
                                : "linear-gradient(135deg, #1e293b 0%, #475569 100%)",
                            backgroundClip: "text",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                            mb: 2,
                            fontSize: { xs: "2rem", md: "2.5rem", lg: "3rem" },
                            lineHeight: 1.2,
                            letterSpacing: "-0.02em",
                          }}
                        >
                          {categoryName}
                        </Typography>

                        <Typography
                          variant="h6"
                          sx={{
                            color:
                              theme.palette.mode === "dark"
                                ? "rgba(255,255,255,0.7)"
                                : "rgba(0,0,0,0.6)",
                            fontWeight: 400,
                            mb: 3,
                            lineHeight: 1.6,
                          }}
                        >
                          Discover premium quality medicines and healthcare
                          products with competitive pricing and verified
                          authenticity.
                        </Typography>

                        <Box
                          sx={{ display: "flex", flexWrap: "wrap", gap: 1.5 }}
                        >
                          <Chip
                            icon={<MedicalServicesIcon />}
                            label={`${categoryDrugs.length} Products`}
                            sx={{
                              background:
                                "linear-gradient(135deg, #4285f4, #1976d2)",
                              color: "white",
                              fontWeight: 600,
                              "& .MuiChip-icon": { color: "white" },
                            }}
                          />
                          <Chip
                            icon={<TrendingUpIcon />}
                            label="Best Prices"
                            variant="outlined"
                            sx={{
                              borderColor: "#34a853",
                              color: "#34a853",
                              fontWeight: 600,
                              "& .MuiChip-icon": { color: "#34a853" },
                            }}
                          />
                          <Chip
                            icon={<VerifiedIcon />}
                            label="Verified Quality"
                            variant="outlined"
                            sx={{
                              borderColor: "#fbbc04",
                              color: "#fbbc04",
                              fontWeight: 600,
                              "& .MuiChip-icon": { color: "#fbbc04" },
                            }}
                          />
                        </Box>
                      </motion.div>
                    </Grid>
                  </Grid>
                </Paper>
              </motion.div>

              {/* Products Grid */}
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                <Grid container spacing={3}>
                  <AnimatePresence mode="wait">
                    {categoryDrugs.map((item, index) => (
                      <Grid item key={item._id} xs={12} sm={6} lg={4}>
                        <motion.div
                          variants={itemVariants}
                          initial="hidden"
                          animate="visible"
                          exit="hidden"
                          transition={{ delay: index * 0.05 }}
                          style={{ height: "100%" }}
                        >
                          <CategoryDrugCard dataInfo={item} checkPage={true} />
                        </motion.div>
                      </Grid>
                    ))}
                  </AnimatePresence>
                </Grid>
              </motion.div>
            </Container>
          </Box>
        </>
      ) : (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Box
            sx={{
              mt: 5,
              p: 5,
              minHeight: "320px",
              borderRadius: 5,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor:
                theme.palette.mode === "light"
                  ? "#f4f6f8"
                  : "rgba(255,255,255,0.03)",
              boxShadow:
                theme.palette.mode === "light"
                  ? "0 6px 20px rgba(0,0,0,0.1)"
                  : "0 6px 20px rgba(255,255,255,0.05)",
              textAlign: "center",
              color: theme.palette.text.primary,
              border: theme.palette.mode === "dark" ? "1px solid #333" : "none",
            }}
          >
            <Box
              sx={{
                background:
                  theme.palette.mode === "dark" ? "#1e1e1e" : "#e3f2fd",
                borderRadius: "50%",
                p: 2,
                mb: 2,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Inventory2OutlinedIcon
                sx={{
                  fontSize: 64,
                  color: theme.palette.mode === "light" ? "#1976d2" : "#90caf9",
                }}
              />
            </Box>

            <Typography
              variant="h5"
              sx={{
                fontWeight: 600,
                mb: 1,
                color: theme.palette.text.primary,
              }}
            >
              No Medicines Available
            </Typography>

            <Typography
              variant="body1"
              sx={{ color: theme.palette.text.secondary, maxWidth: "500px" }}
            >
              This category is currently being updated with new medicines.
              Please check back soon or explore other categories.
            </Typography>

            <Button
              variant="outlined"
              sx={{ mt: 3, textTransform: "none", borderRadius: 3 }}
              onClick={() => {
                navigate("/pharmacy/categories");
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
            >
              Explore Categories
            </Button>
          </Box>
        </motion.div>
      )}
    </>
  );
}
