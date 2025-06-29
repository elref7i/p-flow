import { Box, Card, Skeleton } from "@mui/material";
import { useThemeConstants } from "@/lib/constants/theme.constant";

export default function StatisticsOrdersSkeleton() {
  const { chartsBackground, tableBorder } = useThemeConstants();

  const skeletonCards = Array(6).fill(null);

  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        gap: 2,
        justifyContent: {
          xs: "center", // center on small screens
          sm: "flex-start",
        },
      }}
    >
      {skeletonCards.map((_, index) => (
        <Card
          key={index}
          sx={{
            p: 2,
            width: {
              xs: "100%", // full width on xs screens
              sm: "45%", // two per row on small screens
              md: "30%", // three per row on medium+
              lg: "150px", // fixed width on large screens
            },
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            borderRadius: 3,
            boxShadow: 7,
            border: tableBorder,
            background: chartsBackground,
            minWidth: "140px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              mb: 1,
              width: "100%",
              gap: 1,
            }}
          >
            <Skeleton
              variant="circular"
              width={9}
              height={9}
            />
            <Skeleton
              variant="text"
              width="80%"
              height={20}
            />
          </Box>
          <Skeleton
            variant="text"
            width="60%"
            height={40}
          />
        </Card>
      ))}
    </Box>
  );
}
