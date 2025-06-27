import { Box, Card, Skeleton } from "@mui/material";
import { useThemeConstants } from "@/lib/constants/theme.constant";

export default function StatisticsOrdersSkeleton() {
  // Themes
  const { chartsBackground, tableBorder } = useThemeConstants();

  // Create an array of 6 items to match the original stats count
  const skeletonCards = Array(6).fill(null);

  return (
    <>
      {skeletonCards.map((_, index) => (
        <Card
          key={index}
          sx={{
            p: 2,
            width: "165px",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            flexWrap: "wrap",
            borderRadius: 3,
            boxShadow: 7,
            border: tableBorder,
            background: chartsBackground,
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              mb: 1,
              width: "100%",
            }}
          >
            <Box
              sx={{
                width: 9,
                height: 9,
                borderRadius: "50%",
                mr: 1,
              }}
            >
              <Skeleton variant="circular" width={9} height={9} />
            </Box>
            <Skeleton variant="text" width="80%" height={20} />
          </Box>
          <Skeleton variant="text" width="60%" height={40} />
        </Card>
      ))}
    </>
  );
}
