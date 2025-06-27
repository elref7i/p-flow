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
import { motion } from "framer-motion";
import { useNavigate, useParams } from "react-router-dom";
import Inventory2OutlinedIcon from "@mui/icons-material/Inventory2Outlined";
import MedicalServicesIcon from "@mui/icons-material/MedicalServices";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import VerifiedIcon from "@mui/icons-material/Verified";
import CategoryDrugSkeleton from "@/components/Common/Loading/categories-specific-skeleton";
import ErrorPage from "@/components/Common/error-page";
import { useThemeConstants } from "@/lib/constants/theme.constant";
import { useTypeContext } from "@/context/UserType.context";
import InfiniteScrollComponent from "@/components/infinite-scroll";
import { flattenedDrugs, totalItems } from "@/lib/constants/infinte-data";
import CardPromotionSkeleton from "@/components/Common/Loading/promotion-skeleton";
import { useInfiniteCategoryDrugs } from "@/lib/hooks/use-admin";

export default function CategoryDrugs() {
  const { id } = useParams();
  const { token } = useTypeContext();

  const {
    data: CategoresDrugsData,
    isLoading: LoadingInfinite,
    fetchNextPage,
    hasNextPage,
    isFetched,
    isError,
    error,
  } = useInfiniteCategoryDrugs(token, id, {});

  console.log(CategoresDrugsData);

  // Total Items
  const total = totalItems({ data: CategoresDrugsData });

  // Flatten the data from all pages
  const flattenData = flattenedDrugs({ data: CategoresDrugsData });

  const categoryName = flattenData[0]?.category?.name;
  const categoryImage = flattenData[0]?.category?.imageCover;

  const { backgroundElevated, cardBackground, borderHover, textPrimary } =
    useThemeConstants();
  const theme = useTheme();
  const navigate = useNavigate();

  if (LoadingInfinite) return <CategoryDrugSkeleton />;

  if (isError)
    return (
      <ErrorPage
        errorMessage={error.message}
        errorCode={error.status}
        errorType={error.status}
      />
    );

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

      {flattenData.length > 0 ? (
        <>
          <Helmet>
            <title> {categoryName} drugs </title>
          </Helmet>

          <Box
            sx={{
              background: backgroundElevated,
              borderRadius: 5,
              boxShadow: 8,
              minHeight: "100vh",
              position: "relative",
              mt: 3,
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
                borderRadius: 4,
                backgroundSize: "20px 20px",
                opacity: 0.5,
                pointerEvents: "none",
              }}
            />
            <Container
              maxWidth="xl"
              sx={{
                position: "relative",
                zIndex: 1,
                py: 4,
                background: backgroundElevated,
                borderRadius: 5,
              }}
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
                    background: cardBackground,
                    backdropFilter: "blur(20px)",
                    WebkitBackdropFilter: "blur(20px)",
                    border: `1px solid ${borderHover}`,

                    borderRadius: 4,
                    p: { xs: 3, md: 5 },
                    mb: 5,
                    position: "relative",
                    overflow: "hidden",
                    boxShadow: 8,
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
                  <Grid
                    container
                    spacing={4}
                    alignItems="center"
                  >
                    {/* Category Image */}
                    <Grid
                      item
                      xs={12}
                      md={3}
                    >
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
                    <Grid
                      item
                      xs={12}
                      md={6}
                    >
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
                            color: textPrimary,
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
                            label={`${flattenData.length} Products`}
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
                {!LoadingInfinite && isFetched ? (
                  <InfiniteScrollComponent
                    page={"drugs"}
                    fetchNextPage={fetchNextPage}
                    flattenData={flattenData}
                    total={total}
                    hasNextPage={hasNextPage}
                    layoutGrid={4}
                  />
                ) : (
                  <CardPromotionSkeleton />
                )}
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
              background: backgroundElevated,
              boxShadow: 8,
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
