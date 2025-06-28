import { Box, Grid2, Stack, Typography } from "@mui/material";
import { useThemeConstants } from "../../../lib/constants/theme.constant";
import AddCategory from "../_components/add_category";
import CardCategory from "../_components/card_category";
import { useCategories } from "@/lib/hooks/use-admin";
import { Helmet } from "react-helmet";

export default function CategoriesAdmin() {
  //Themes
  const { textPrimary } = useThemeConstants();

  //Mutations
  const { data: payload, isLoading } = useCategories();

  return (
    <>
      <Helmet>
        <title>Categories</title>
        <meta
          name="description"
          content="Browse and manage drug categories in your pharmacy system. Organize medications efficiently using P-Flow."
        />
        <meta
          name="keywords"
          content="pharmacy categories, drug classification, medication types, P-Flow, pharmacy management"
        />

        <meta
          property="og:title"
          content="Categories | P-Flow System"
        />
        <meta
          property="og:description"
          content="Manage all your pharmacy's drug categories easily with P-Flow's intuitive interface."
        />
      </Helmet>
      <Box>
        <Stack
          direction={"row"}
          justifyContent={"space-between"}
          flexWrap={"wrap"}
          gap={2}
        >
          <Typography
            variant="h1"
            sx={{ color: textPrimary }}
          >
            Categories
          </Typography>

          <AddCategory />
        </Stack>

        {!isLoading && (
          <Grid2
            spacing={2}
            container
            py={5}
            justifyItems={"center"}
            justifyContent={"center"}
          >
            {payload.data.map((category) => (
              <Grid2
                key={category._id}
                size={{ xs: 12, md: 6, lg: 3 }}
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  mb: 2,
                }}
              >
                <CardCategory category={category} />
              </Grid2>
            ))}
          </Grid2>
        )}
      </Box>
    </>
  );
}
