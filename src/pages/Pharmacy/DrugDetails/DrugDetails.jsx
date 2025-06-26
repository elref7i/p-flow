import { useNavigate, useParams } from "react-router-dom";
import {
  Box,
  Paper,
  Typography,
  Card,
  CardContent,
  IconButton,
  Button,
  Divider,
  useTheme,
  styled,
  Grid,
  Chip,
  alpha,
  Avatar,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import InventoryIcon from "@mui/icons-material/Inventory";
import BusinessIcon from "@mui/icons-material/Business";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import { formatNumber } from "@/lib/utils/formateNumber";
import { useSpecificDrug } from "@/lib/hooks/useDrugAction";
import { useTypeContext } from "@/context/UserType.context";
import DrugDetailsSkeleton from "@/components/Common/Loading/DrugDetailsSkeleton";
import { formatDate } from "@/lib/utils/dateUtils";
import { useThemeConstants } from "@/lib/constants/theme.constant";
import CategoryIcon from "@mui/icons-material/Category";
import BadgeStock from "@/components/Common/badge-stock";
import { getStockStatus } from "@/lib/utils/status-stock";
import { useAddToCart } from "@/lib/hooks/use-cart";
import { Helmet } from "react-helmet";

const InfoCard = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
  height: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  borderRadius: theme.shape.borderRadius * 2,
  transition: "transform 0.2s, box-shadow 0.2s",
  "&:hover": {
    transform: "translateY(-4px)",
    boxShadow: theme.shadows[4],
  },
}));

export default function DrugDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { token } = useTypeContext();
  const theme = useTheme();
  const addToCartMutation = useAddToCart();
  //Queries
  const { isFetching, data } = useSpecificDrug({ token, drugId: id });

  const { backgroundGraySoft, textScondary } = useThemeConstants();

  // Get stock status
  const stockStatus = getStockStatus(data?.stock || 0);
  console.log(data);

  // Calculate days until expiration
  const daysUntilExpiration = () => {
    const today = new Date();
    const expDate = new Date(data.expirationDate);
    const diffTime = Math.abs(expDate - today);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  };

  // Determine expiration status color
  const getExpirationColor = () => {
    const days = daysUntilExpiration();
    if (days > 180) return "success.main";
    if (days > 90) return "warning.main";
    return "error.main";
  };

  if (isFetching)
    return (
      <>
        <Helmet>
          <title>Drug Details</title>
        </Helmet>
        <DrugDetailsSkeleton />
      </>
    );

  return (
    <>
      <Helmet>
        <title>{data.name} </title>
        <meta
          name="description"
          content="View detailed information about this drug, including dosage, pricing, availability, and promotions in your pharmacy system."
        />
        <meta
          name="keywords"
          content="drug details, medication info, pharmacy drug, dosage, pricing, P-Flow"
        />
        <meta property="og:title" content="Drug Details | P-Flow System" />
        <meta
          property="og:description"
          content="Explore all information about this medication in the P-Flow  system."
        />
      </Helmet>
      <Box sx={{ p: { xs: 2, md: 3 }, maxWidth: 1200, mx: "auto" }}>
        {/* Drug Details */}
        <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
          <IconButton onClick={() => navigate(-1)} sx={{ mr: 1 }}>
            <ArrowBackIcon />
          </IconButton>
          <Typography
            color="primary"
            variant="h5"
            component="h1"
            fontWeight="bold"
          >
            Drug Details
          </Typography>
        </Box>
        <Grid container spacing={3}>
          {/* Main Details Card */}
          <Grid item xs={12}>
            <Card
              elevation={3}
              sx={{
                borderRadius: 3,
                position: "relative",
                overflow: "visible",
                background:
                  theme.palette.mode === "dark"
                    ? "rgba(45, 45, 60, 0.8)"
                    : "rgba(255, 255, 255, 0.9)",
                backdropFilter: "blur(10px)",
                boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1)",
              }}
            >
              {/* <BadgePromtion medicine={data.promotions} /> */}
              <BadgeStock stockStatus={stockStatus} />
              <CardContent sx={{ p: { xs: 2, md: 4 } }}>
                <Box sx={{ flex: 1, minWidth: "280px" }}>
                  <Typography
                    variant="h4"
                    component="h2"
                    fontWeight="bold"
                    gutterBottom
                    sx={{
                      color: theme.palette.primary.main,
                      fontSize: { xs: "1.5rem", md: "2rem" },
                    }}
                  >
                    {data.name}
                  </Typography>

                  {/* Category box */}
                  <Box
                    onClick={() =>
                      navigate(`/pharmacy/categorydrugs/${data.category._id}`)
                    }
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      mb: 1,
                      cursor: "pointer",
                    }}
                    tital="Category"
                  >
                    <CategoryIcon
                      sx={{
                        color: textScondary,
                        mr: 1,
                        fontSize: "1.2rem",
                      }}
                    />

                    <Box
                      sx={{
                        display: "inline-flex",
                        alignItems: "center",
                        px: 1.5,
                        py: 0.5,
                        borderRadius: 20,
                        background: backgroundGraySoft,
                        cursor: "pointer",
                        border: `1px solid ${alpha(
                          theme.palette.info.main,
                          0.2
                        )}`,
                        maxWidth: "fit-content",
                        boxShadow: 7,
                      }}
                    >
                      <Box
                        sx={{
                          width: 20,
                          height: 20,
                          borderRadius: "50%",
                          background: "transparent",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          mr: 1,
                          boxShadow: 6,
                        }}
                      >
                        <Avatar
                          src={
                            data.category.imageCover ||
                            "/placeholder.svg?height=16&width=16"
                          }
                          alt={data.category.name}
                          sx={{
                            width: 16,
                            height: 16,
                            border: "none",
                          }}
                        />
                      </Box>
                      <Typography
                        variant="caption"
                        sx={{
                          fontWeight: 700,
                          color: theme.palette.info.dark,
                          fontSize: "0.7rem",
                          textTransform: "uppercase",
                          letterSpacing: "0.5px",
                          lineHeight: 1,
                        }}
                      >
                        {data.category.name}
                      </Typography>
                    </Box>
                  </Box>

                  {/* Manufacturer */}
                  <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
                    <BusinessIcon
                      sx={{
                        color: textScondary,
                        mr: 1,
                        fontSize: "1.2rem",
                      }}
                    />
                    <Typography variant="h6" color={textScondary}>
                      {data.manufacturer}
                    </Typography>
                  </Box>

                  {/* Description */}
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <InfoOutlinedIcon
                      sx={{
                        color: "text.secondary",
                        mr: 1,
                        fontSize: "1.2rem",
                      }}
                    />
                    <Typography
                      variant="body1"
                      sx={{
                        fontStyle: "italic",
                        color:
                          theme.palette.mode === "dark"
                            ? theme.palette.info.light
                            : theme.palette.info.dark,
                      }}
                    >
                      {data.description}
                    </Typography>
                  </Box>
                </Box>

                <Divider sx={{ my: 3 }} />

                {/* Info Cards Grid */}
                <Grid
                  container
                  spacing={3}
                  sx={{ mb: 3 }}
                  justifyContent={"center"}
                >
                  {/* Production */}
                  <Grid item xs={12} sm={6} md={3}>
                    <InfoCard elevation={2}>
                      <CalendarMonthIcon
                        sx={{ fontSize: 40, color: "success.main", mb: 1 }}
                      />
                      <Typography
                        variant="h6"
                        fontWeight="medium"
                        align="center"
                      >
                        Production
                      </Typography>
                      <Typography
                        variant="body1"
                        color="success.main"
                        fontWeight="medium"
                      >
                        {formatDate(data.productionDate)}
                      </Typography>
                    </InfoCard>
                  </Grid>

                  {/* Expiration */}
                  <Grid item xs={12} sm={6} md={3}>
                    <InfoCard elevation={2}>
                      <CalendarMonthIcon
                        sx={{
                          fontSize: 40,
                          color: getExpirationColor(),
                          mb: 1,
                        }}
                      />
                      <Typography
                        variant="h6"
                        fontWeight="medium"
                        align="center"
                      >
                        Expiration
                      </Typography>
                      <Typography
                        variant="body1"
                        color={getExpirationColor()}
                        fontWeight="medium"
                      >
                        {formatDate(data.expirationDate)}
                      </Typography>
                      <Chip
                        size="small"
                        label={`${daysUntilExpiration()} days left`}
                        color={
                          getExpirationColor() === "error.main"
                            ? "error"
                            : "default"
                        }
                        sx={{ mt: 1 }}
                      />
                    </InfoCard>
                  </Grid>

                  <Grid item xs={12} sm={6} md={3}>
                    <InfoCard elevation={2}>
                      <InventoryIcon
                        sx={{
                          fontSize: 40,
                          color: theme.palette.secondary.main,
                          mb: 1,
                        }}
                      />
                      <Typography
                        variant="h6"
                        fontWeight="medium"
                        align="center"
                      >
                        Inventory
                      </Typography>
                      <Typography
                        variant="body1"
                        color="text.primary"
                        fontWeight="medium"
                      >
                        {data.createdBy?.name || "N/A"}
                      </Typography>
                    </InfoCard>
                  </Grid>
                </Grid>

                <Divider sx={{ my: 3 }} />

                {/* Pricing Section */}
                <Box
                  sx={{
                    p: 2,
                    mb: 2,
                    borderRadius: 2,
                    bgcolor:
                      theme.palette.mode === "dark"
                        ? "rgba(0, 0, 0, 0.2)"
                        : "rgba(0, 0, 0, 0.03)",
                  }}
                >
                  <Typography variant="caption" color="text.secondary">
                    Consumer Price
                  </Typography>
                  <Typography
                    variant="h3"
                    color="primary"
                    fontWeight="bold"
                    sx={{ fontSize: { xs: "2rem", md: "2.5rem" } }}
                  >
                    {formatNumber(data.discountedPrice)} EGP
                  </Typography>
                  {data.discount > 0 && (
                    <Typography
                      variant="body1"
                      color="text.secondary"
                      sx={{ textDecoration: "line-through" }}
                    >
                      {formatNumber(data.price)} EGP
                    </Typography>
                  )}
                </Box>

                {/* Action Button */}
                <Button
                  onClick={() => {
                    addToCartMutation.mutate({
                      drugId: id,
                      quantity: 1,
                    });
                  }}
                  variant="contained"
                  size="large"
                  startIcon={<AddShoppingCartIcon />}
                  sx={{
                    py: 1.5,
                    mb: 2,
                    fontSize: "1.1rem",
                    borderRadius: 2,
                    boxShadow: "0 4px 14px rgba(0, 0, 0, 0.25)",
                    transition: "all 0.2s",
                    "&:hover": {
                      transform: "translateY(-2px)",
                      boxShadow: "0 6px 20px rgba(0, 0, 0, 0.3)",
                    },
                  }}
                  fullWidth
                  disabled={data.stock < 1}
                >
                  {data.stock > 0 ? "Add to Cart" : "Out of Stock"}
                </Button>

                {/*  Last updated*/}
                <Typography
                  sx={{ textAlign: "end" }}
                  variant="caption"
                  color="text.secondary"
                >
                  Last updated: {new Date(data.updatedAt).toLocaleString()}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
