import { Box, Grid2, Stack, Typography } from "@mui/material";
import { useThemeConstants } from "../../../lib/constants/theme.constant";
import AddCategory from "../_components/add_category";
import CardCategory from "../_components/card_category";
import { useCategories } from "@/lib/hooks/use-admin";

export default function CategoriesAdmin() {
  //Themes
  const { textPrimary } = useThemeConstants();

  //Mutations
  const { data: payload, isLoading } = useCategories();
  console.log(payload);

  return (
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
  );
}
