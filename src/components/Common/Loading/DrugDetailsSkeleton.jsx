"use client";

import {
  Box,
  Paper,
  Typography,
  Card,
  CardContent,
  Divider,
  useTheme,
  styled,
  Grid,
  Skeleton,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import MedicationIcon from "@mui/icons-material/Medication";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import InventoryIcon from "@mui/icons-material/Inventory";

// Styled components
const InfoCard = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
  height: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  borderRadius: theme.shape.borderRadius * 2,
}));

export default function DrugDetailsSkeleton() {
  const theme = useTheme();

  return (
    <Box sx={{ p: { xs: 2, md: 3 }, maxWidth: 1200, mx: "auto" }}>
      <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
        <Box
          sx={{
            mr: 1,
            width: 40,
            height: 40,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <ArrowBackIcon color="disabled" />
        </Box>
        <Skeleton
          variant="text"
          width={200}
          height={40}
        />
      </Box>

      <Grid
        container
        spacing={3}
      >
        {/* Main Details Card */}
        <Grid
          item
          xs={12}
        >
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
            <CardContent sx={{ p: { xs: 2, md: 4 } }}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                  flexWrap: "wrap",
                  gap: 2,
                }}
              >
                <Box sx={{ flex: 1, minWidth: "280px" }}>
                  <Skeleton
                    variant="text"
                    width="80%"
                    height={60}
                    sx={{ mb: 1 }}
                  />

                  <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
                    <Skeleton
                      variant="circular"
                      width={24}
                      height={24}
                      sx={{ mr: 1 }}
                    />
                    <Skeleton
                      variant="text"
                      width="60%"
                      height={24}
                    />
                  </Box>

                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <Skeleton
                      variant="circular"
                      width={24}
                      height={24}
                      sx={{ mr: 1 }}
                    />
                    <Skeleton
                      variant="text"
                      width="40%"
                      height={24}
                    />
                  </Box>
                </Box>

                <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
                  <Skeleton
                    variant="rounded"
                    width={80}
                    height={32}
                  />
                  <Skeleton
                    variant="circular"
                    width={40}
                    height={40}
                  />
                </Box>
              </Box>

              <Divider sx={{ my: 3 }} />

              {/* Info Cards Grid */}
              <Grid
                container
                spacing={3}
                sx={{ mb: 3 }}
              >
                <Grid
                  item
                  xs={12}
                  sm={6}
                  md={3}
                >
                  <InfoCard elevation={2}>
                    <MedicationIcon
                      sx={{
                        fontSize: 40,
                        color: "disabled",
                        mb: 1,
                        opacity: 0.3,
                      }}
                    />
                    <Typography
                      variant="h6"
                      fontWeight="medium"
                      align="center"
                      color="text.disabled"
                    >
                      Stock
                    </Typography>
                    <Skeleton
                      variant="text"
                      width={40}
                      height={40}
                      sx={{ my: 1 }}
                    />
                    <Skeleton
                      variant="text"
                      width={60}
                      height={20}
                    />
                  </InfoCard>
                </Grid>

                <Grid
                  item
                  xs={12}
                  sm={6}
                  md={3}
                >
                  <InfoCard elevation={2}>
                    <CalendarMonthIcon
                      sx={{
                        fontSize: 40,
                        color: "disabled",
                        mb: 1,
                        opacity: 0.3,
                      }}
                    />
                    <Typography
                      variant="h6"
                      fontWeight="medium"
                      align="center"
                      color="text.disabled"
                    >
                      Production
                    </Typography>
                    <Skeleton
                      variant="text"
                      width={120}
                      height={24}
                      sx={{ my: 1 }}
                    />
                  </InfoCard>
                </Grid>

                <Grid
                  item
                  xs={12}
                  sm={6}
                  md={3}
                >
                  <InfoCard elevation={2}>
                    <CalendarMonthIcon
                      sx={{
                        fontSize: 40,
                        color: "disabled",
                        mb: 1,
                        opacity: 0.3,
                      }}
                    />
                    <Typography
                      variant="h6"
                      fontWeight="medium"
                      align="center"
                      color="text.disabled"
                    >
                      Expiration
                    </Typography>
                    <Skeleton
                      variant="text"
                      width={120}
                      height={24}
                      sx={{ my: 1 }}
                    />
                    <Skeleton
                      variant="rounded"
                      width={80}
                      height={24}
                      sx={{ mt: 1 }}
                    />
                  </InfoCard>
                </Grid>

                <Grid
                  item
                  xs={12}
                  sm={6}
                  md={3}
                >
                  <InfoCard elevation={2}>
                    <InventoryIcon
                      sx={{
                        fontSize: 40,
                        color: "disabled",
                        mb: 1,
                        opacity: 0.3,
                      }}
                    />
                    <Typography
                      variant="h6"
                      fontWeight="medium"
                      align="center"
                      color="text.disabled"
                    >
                      Inventory
                    </Typography>
                    <Skeleton
                      variant="text"
                      width={100}
                      height={24}
                      sx={{ my: 1 }}
                    />
                  </InfoCard>
                </Grid>
              </Grid>

              <Divider sx={{ my: 3 }} />

              {/* Pricing Section */}
              <Grid
                container
                spacing={2}
                alignItems="center"
                sx={{ mb: 3 }}
              >
                <Grid
                  item
                  xs={12}
                  md={6}
                >
                  <Box
                    sx={{
                      p: 2,
                      borderRadius: 2,
                      bgcolor:
                        theme.palette.mode === "dark"
                          ? "rgba(0, 0, 0, 0.2)"
                          : "rgba(0, 0, 0, 0.03)",
                    }}
                  >
                    <Typography
                      variant="caption"
                      color="text.disabled"
                    >
                      Consumer Price
                    </Typography>
                    <Skeleton
                      variant="text"
                      width="60%"
                      height={60}
                      sx={{ my: 1 }}
                    />
                    <Skeleton
                      variant="text"
                      width="40%"
                      height={24}
                    />
                  </Box>
                </Grid>

                <Grid
                  item
                  xs={12}
                  md={6}
                  sx={{ textAlign: { xs: "left", md: "right" } }}
                >
                  <Box
                    sx={{
                      p: 2,
                      borderRadius: 2,
                      bgcolor:
                        theme.palette.mode === "dark"
                          ? "rgba(0, 0, 0, 0.2)"
                          : "rgba(0, 0, 0, 0.03)",
                    }}
                  >
                    <Typography
                      variant="caption"
                      color="text.disabled"
                    >
                      Pharmacy Price
                    </Typography>
                    <Skeleton
                      variant="text"
                      width="40%"
                      height={40}
                      sx={{ my: 1, ml: { xs: 0, md: "auto" } }}
                    />
                    <Skeleton
                      variant="text"
                      width="30%"
                      height={20}
                      sx={{ ml: { xs: 0, md: "auto" } }}
                    />
                  </Box>
                </Grid>
              </Grid>

              {/* Action Button */}
              <Skeleton
                variant="rounded"
                width="100%"
                height={56}
                sx={{ borderRadius: 2 }}
              />

              {/* Additional Info */}
              <Box
                sx={{
                  mt: 3,
                  display: "flex",
                  justifyContent: "space-between",
                  flexWrap: "wrap",
                  gap: 1,
                }}
              >
                <Skeleton
                  variant="text"
                  width={200}
                  height={20}
                />
                <Skeleton
                  variant="text"
                  width={200}
                  height={20}
                />
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}
