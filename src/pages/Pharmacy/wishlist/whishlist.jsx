import { Button, Grid2, Stack, Typography } from "@mui/material";
import CardWhishlist from "../../../components/CardWhishlist/CardWhishlist";
import { useWishlist } from "../../../lib/hooks/usewishlist.action";
import { useTypeContext } from "../../../context/UserType.context";
import { useThemeConstants } from "../../../lib/constants/theme.constant";
import { useNavigate } from "react-router-dom";
import LoadingSpinner from "../../../components/Common/Loading/LoadingSpinner";
import { Helmet } from "react-helmet";

export default function Whishlist() {
  //Context
  const { token } = useTypeContext();

  //Navigations
  const navigate = useNavigate();

  // Queries
  const { data: payload, isLoading } = useWishlist({ token });

  //Thems
  const { typography, cardBackground, textPrimary } = useThemeConstants();

  if (isLoading) return <LoadingSpinner />;

  return (
    <>
      <Helmet>
        <title>My Wishlisht</title>
        <meta
          name="description"
          content="View and manage your favorite inventories with ease."
        />
        <meta
          name="keywords"
          content="inventory, favorites, pharmacy, warehouse, medicine"
        />
        <meta name="author" content="Your Project Name or Team" />

        <meta property="og:title" content="My Favorite Inventories" />
        <meta
          property="og:description"
          content="Check your saved favorite inventories in one place."
        />
        <meta property="og:type" content="website" />
      </Helmet>
      <Stack
        component={"header"}
        sx={{ py: 3 }}
        direction={"row"}
        justifyContent={"space-between"}
      >
        <Typography
          variant="h1"
          sx={{
            color: textPrimary,
            fontSize: typography.h1.fontSize,
            fontWeight: typography.h1.fontWeight,
            lineHeight: typography.h1.lineHeight,
          }}
        >
          My Favorite Inventories
        </Typography>
        <Stack direction={"row"} gap={2}>
          <Button
            color="error"
            variant="outlined"
            // onClick={() => navigate("/pharmacy/inventores")}
          >
            Delete All
          </Button>
          <Button
            variant="text"
            sx={{
              textDecoration: "underline",
            }}
            onClick={() => navigate("/pharmacy/inventores")}
          >
            View All
          </Button>
        </Stack>
      </Stack>
      <Grid2
        container
        spacing={2}
        p={3}
        sx={{
          pt: "20px",
          background: cardBackground,
          boxShadow: 1,
          borderRadius: 5,
        }}
      >
        {payload.data.map((inventory) => (
          <Grid2
            key={inventory._id}
            size={{ xs: 12, md: 6, lg: 4 }}
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              mb: 2,
            }}
          >
            <CardWhishlist inventory={inventory} />
          </Grid2>
        ))}
        {payload.data.length <= 0 && (
          <Typography
            textAlign={"center"}
            width={"100%"}
            fontSize={20}
            fontWeight={700}
            color={textPrimary}
          >
            Empty
          </Typography>
        )}
      </Grid2>
    </>
  );
}
