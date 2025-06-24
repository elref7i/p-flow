import {
  Box,
  Card,
  CardContent,
  Skeleton,
  Typography,
  Container,
  Grid,
} from "@mui/material";
import { motion } from "framer-motion";
import { useThemeConstants } from "@/lib/constants/theme.constant";
import { useNavigate } from "react-router-dom";
import { useTypeContext } from "@/context/UserType.context";
import { Helmet } from "react-helmet";
import { useCategories } from "@/lib/hooks/use-admin";
import EmptyPage from "../../../components/Common/empty-page";
import ErrorPage from "../../../components/Common/error-page";

export default function Categories() {
  const { textPrimary, cardBackground } = useThemeConstants();
  const { data, isLoading, isError, error } = useCategories();
  const categories = data?.data || [];
  const navigate = useNavigate();
  const { role } = useTypeContext();

  if (isError)
    return (
      <ErrorPage
        errorMessage={error.message}
        errorCode={error.status}
        errorType={error.status}
      />
    );
  return (
    <>
      <Helmet>
        <title>Drug Categories</title>
        <meta
          name="description"
          content="Explore a wide range of pharmaceutical drug categories available on the P-FLOW platform. Browse and select the right category for your medical needs."
        />
        <meta
          name="keywords"
          content="medicine categories, pharmaceutical drugs, pharmacy, healthcare, P-FLOW"
        />
        <meta
          property="og:title"
          content="Drug Categories | P-FLOW Platform"
        />
        <meta
          property="og:description"
          content="Discover different drug categories offered on the P-FLOW platform. Easy browsing for pharmacies and users."
        />
      </Helmet>

      <Container
        maxWidth="xl"
        sx={{ py: 2 }}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Box
            sx={{
              textAlign: "center",
              mb: 5,
              maxWidth: "700px",
              mx: "auto",
              px: 2,
            }}
          >
            <Typography
              variant="h3"
              component="h2"
              fontWeight={550}
              gutterBottom
              sx={{
                color: textPrimary,
                fontSize: { xs: "2.2rem", sm: "2.8rem", md: "3.2rem" },
                lineHeight: 1.2,
                background: "linear-gradient(90deg, #2196F3, #21CBF3)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Drug Categories
            </Typography>
          </Box>
        </motion.div>

        {isLoading ? (
          <Grid
            container
            spacing={4}
          >
            {[...Array(8)].map((_, idx) => (
              <Grid
                item
                xs={12}
                sm={6}
                md={4}
                lg={3}
                key={idx}
              >
                <Card
                  sx={{
                    borderRadius: 4,
                    boxShadow: 2,
                    background: cardBackground,
                    overflow: "hidden",
                  }}
                >
                  <Skeleton
                    variant="rectangular"
                    animation="wave"
                    height={220}
                    sx={{ width: "100%" }}
                  />
                  <CardContent sx={{ p: 3, textAlign: "center" }}>
                    <Skeleton
                      variant="text"
                      animation="wave"
                      width="60%"
                      height={28}
                      sx={{ mx: "auto", mb: 1 }}
                    />
                    <Skeleton
                      variant="text"
                      animation="wave"
                      width="40%"
                      height={20}
                      sx={{ mx: "auto", mb: 2 }}
                    />
                    <Skeleton
                      variant="rectangular"
                      width={40}
                      height={4}
                      sx={{ mx: "auto", borderRadius: 2 }}
                    />
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        ) : (
          <Grid
            container
            spacing={4}
          >
            {categories.map((cat, index) => (
              <Grid
                item
                xs={12}
                sm={6}
                md={4}
                lg={3}
                key={cat._id}
              >
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -8 }}
                >
                  <Card
                    onClick={() => {
                      if (role === "pharmacy") {
                        return navigate(`/pharmacy/categorydrugs/${cat._id}`);
                      }
                    }}
                    sx={{
                      borderRadius: 4,
                      boxShadow: 2,
                      bgcolor: cardBackground,
                      cursor: role === "pharmacy" ? "pointer" : "default",
                      overflow: "hidden",
                      position: "relative",
                      transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                      border: "1px solid rgba(255,255,255,0.1)",
                      "&:hover": {
                        boxShadow: 9,
                        transform: "translateY(-1px) scale(1.02)",
                        "& .category-image": {
                          transform: "scale(1.1)",
                        },
                        "& .category-overlay": {
                          opacity: 1,
                        },
                        "& .category-chip": {
                          transform: "translateY(-5px)",
                          boxShadow: "0 8px 20px rgba(33, 150, 243, 0.3)",
                        },
                      },
                    }}
                  >
                    <Box
                      sx={{
                        position: "relative",
                        overflow: "hidden",
                        height: 220,
                      }}
                    >
                      <Box
                        component="img"
                        src={cat.imageCover}
                        alt={cat.name}
                        className="category-image"
                        sx={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                          transition:
                            "transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)",
                        }}
                      />

                      {/* Gradient Overlay */}
                      <Box
                        sx={{
                          position: "absolute",
                          top: 0,
                          left: 0,
                          right: 0,
                          bottom: 0,
                          background:
                            "linear-gradient(180deg, transparent 0%, rgba(0,0,0,0.7) 100%)",
                        }}
                      />

                      {/* Hover Overlay */}
                      <Box
                        className="category-overlay"
                        sx={{
                          position: "absolute",
                          top: 0,
                          left: 0,
                          right: 0,
                          bottom: 0,
                          background:
                            "linear-gradient(135deg, rgba(33, 150, 243, 0.9), rgba(33, 203, 243, 0.9))",
                          opacity: 0,
                          transition: "opacity 0.4s ease",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <Typography
                          variant="h5"
                          sx={{
                            color: "white",
                            fontWeight: 700,
                            textShadow: "0 2px 8px rgba(0,0,0,0.3)",
                            textAlign: "center",
                          }}
                        >
                          Explore Category
                        </Typography>
                      </Box>
                    </Box>

                    <CardContent
                      sx={{ p: 3, textAlign: "center", position: "relative" }}
                    >
                      <Typography
                        variant="h5"
                        fontWeight={700}
                        sx={{
                          color: textPrimary,
                          fontSize: "1.3rem",
                          mb: 1,
                          lineHeight: 1.3,
                        }}
                      >
                        {cat.name}
                      </Typography>

                      <Typography
                        variant="body2"
                        sx={{
                          color: "text.secondary",
                          fontSize: "0.9rem",
                          opacity: 0.8,
                        }}
                      >
                        Browse medicines in this category
                      </Typography>

                      {/* Decorative Element */}
                      <Box
                        sx={{
                          width: 40,
                          height: 3,
                          bgcolor: "primary.main",
                          borderRadius: 2,
                          mx: "auto",
                          mt: 2,
                          transition: "all 0.3s ease",
                        }}
                      />
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        )}
        {categories.length <= 0 && (
          <EmptyPage
            title={" No Categories Available"}
            subtitle={" We couldn't find any product categories"}
            customMessage={" Try refreshing the page or come back later"}
          />
        )}
      </Container>
    </>
  );
}
