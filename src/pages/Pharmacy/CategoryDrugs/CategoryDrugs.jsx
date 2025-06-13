import { Grid, Box, Typography, useTheme } from "@mui/material";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import { useParams } from "react-router-dom";
import { useCategoryDrugs } from "../../../lib/hooks/useAdminAction";
import CategoryDrugCard from "./_components/CategoryDrugCard";
import Inventory2OutlinedIcon from "@mui/icons-material/Inventory2Outlined";
import CategoryDrugSkeleton from "./_components/CategoryDrugSkeleton";

export default function CategoryDrugs() {
  const { id } = useParams();
  const { data, isLoading } = useCategoryDrugs({ id });
  const categoryDrugs = data?.data || [];
  const categoryName = categoryDrugs[0]?.category?.name;
  const categoryImage = categoryDrugs[0]?.category?.imageCover;
  const theme = useTheme();

  if (isLoading) return <CategoryDrugSkeleton />;

  return (
    <>
      <Helmet>
        <title> Category drugs </title>
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
                  ? "linear-gradient(to bottom, #f5f7fa, #e8ecf1)"
                  : "linear-gradient(to bottom, #1e1e1e, #121212)",
              minHeight: "100vh",
              padding: 2,
              transition: "background-color 0.3s ease-in-out",
              borderRadius: 2,
            }}
          >
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: 2,
                  background:
                    theme.palette.mode === "dark"
                      ? "linear-gradient(to right, rgba(255,255,255,0.05), rgba(255,255,255,0.02))"
                      : "linear-gradient(to right, #e3f2fd, #ffffff)",
                  padding: 3,
                  borderRadius: 2,
                  boxShadow:
                    theme.palette.mode === "dark"
                      ? "0 4px 20px rgba(0, 0, 0, 0.6)"
                      : "0 4px 20px rgba(0, 0, 0, 0.1)",
                  mb: 5,
                  flexWrap: "wrap",
                }}
              >
                <Box
                  component="img"
                  src={categoryImage}
                  alt={categoryName}
                  sx={{
                    width: 120,
                    height: 120,
                    borderRadius: 3,
                    objectFit: "cover",
                    boxShadow:
                      theme.palette.mode === "dark"
                        ? "0 4px 12px rgba(255,255,255,0.1)"
                        : "0 4px 12px rgba(0, 0, 0, 0.15)",
                  }}
                />
                <Box>
                  <Typography variant="h4" fontWeight="bold" color="primary">
                    {categoryName}
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    color="text.secondary"
                    sx={{ mt: 2 }}
                  >
                    Explore all drugs under {categoryName} category
                  </Typography>
                </Box>
              </Box>
            </motion.div>

            {/* Drugs Grid */}

            <Box sx={{ px: 3, pb: 4 }}>
              <Grid container spacing={4}>
                {categoryDrugs.map((item) => (
                  <Grid item key={item._id} xs={12} sm={6} md={4}>
                    <CategoryDrugCard dataInfo={item} checkPage={true} />
                  </Grid>
                ))}
              </Grid>
            </Box>
          </Box>
        </>
      ) : (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Box
            sx={{
              mt: 5,
              p: 4,
              minHeight: "300px",
              borderRadius: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor:
                theme.palette.mode === "light"
                  ? "#f9fbfd"
                  : "rgba(255,255,255,0.03)",
              boxShadow:
                theme.palette.mode === "light"
                  ? "0 4px 12px rgba(0,0,0,0.1)"
                  : "0 4px 12px rgba(255,255,255,0.05)",
              textAlign: "center",
              color: theme.palette.text.primary,
              border: theme.palette.mode === "dark" ? "1px solid #333" : "none",
            }}
          >
            <Inventory2OutlinedIcon
              sx={{
                fontSize: 60,
                color: theme.palette.mode === "light" ? "#90a4ae" : "#b0bec5",
                mb: 2,
              }}
            />
            <Typography
              variant="h6"
              sx={{ fontWeight: 500, color: theme.palette.text.primary }}
            >
              No drugs found in this category
            </Typography>
            <Typography
              variant="body2"
              sx={{ mt: 1, color: theme.palette.text.secondary }}
            >
              Please try another category or come back later.
            </Typography>
          </Box>
        </motion.div>
      )}
    </>
  );
}
