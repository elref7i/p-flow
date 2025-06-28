import {
  Button,
  CircularProgress,
  Grid2,
  Stack,
  Typography,
} from "@mui/material";
import CardWhishlist from "../../../components/CardWhishlist/CardWhishlist";
import {
  useClearWishlist,
  useWishlist,
} from "../../../lib/hooks/usewishlist.action";
import { useTypeContext } from "../../../context/UserType.context";
import { useThemeConstants } from "../../../lib/constants/theme.constant";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import WishlistSkeleton from "./_components/WishlistSkeleton";
import ErrorPage from "../../../components/Common/error-page";
import EmptyPage from "../../../components/Common/empty-page";
import { Delete } from "@mui/icons-material";

export default function Whishlist() {
  //Context
  const { token } = useTypeContext();

  //Navigations
  const navigate = useNavigate();

  // Queries
  const { data: payload, isLoading, error, isError } = useWishlist({ token });

  //Thems

  const { typography, textPrimary } = useThemeConstants();

  const { mutate, isLoading: LoadingDelete } = useClearWishlist();

  if (isError)
    return (
      <ErrorPage
        errorMessage={error.message}
        errorCode={error.status}
        errorType={error.status}
      />
    );

  if (isLoading) return <WishlistSkeleton />;
  if (payload.data.length <= 0)
    return (
      <EmptyPage
        nameButton={"View All Inventories"}
        title={"Your wishlist is empty"}
        subtitle={"You haven’t added any items yet"}
        customMessage={" Browse products and save your favorites for later"}
        linkPage="/pharmacy/inventories"
      />
    );

  return (
    <>
      <Helmet>
        <title>Wishlisht</title>
        <meta
          name="description"
          content="View and manage your favorite inventories with ease."
        />
        <meta
          name="keywords"
          content="inventory, favorites, pharmacy, warehouse, medicine"
        />
        <meta
          name="author"
          content="Your Project Name or Team"
        />

        <meta
          property="og:title"
          content="My Favorite Inventories"
        />
        <meta
          property="og:description"
          content="Check your saved favorite inventories in one place."
        />
        <meta
          property="og:type"
          content="website"
        />
      </Helmet>

      <Stack
        component={"header"}
        sx={{ py: 3 }}
        direction={"row"}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <Typography
          variant="h1"
          sx={{
            color: textPrimary,
            fontSize: {
              xs: typography.h6.fontSize,
            },
            fontWeight: typography.h1.fontWeight,
            lineHeight: typography.h1.lineHeight,
          }}
        >
          My Favorite Inventories
        </Typography>
        <Stack
          direction={{ md: "row" }}
          gap={2}
        >
          <Button
            variant="text"
            sx={{
              textDecoration: "underline",
            }}
            onClick={() => navigate("/pharmacy/inventories")}
          >
            View All
          </Button>
        </Stack>
      </Stack>
      <Grid2
        container
        spacing={2}
        p={0}
        sx={{
          pt: "20px",
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
      </Grid2>
      <Stack
        flex={"row"}
        alignItems={"end"}
      >
        <Button
          color="error"
          variant="outlined"
          onClick={mutate}
          startIcon={
            LoadingDelete ? (
              <CircularProgress
                color="error"
                size="16px"
              />
            ) : (
              <Delete />
            )
          }
        >
          Delete All
        </Button>
      </Stack>
    </>
  );
}
