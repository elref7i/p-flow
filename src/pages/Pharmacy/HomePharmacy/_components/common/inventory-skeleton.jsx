import { Box, Paper, Skeleton } from "@mui/material";

export default function InventorySkeleton() {
  return (
    <Box
      sx={{
        display: "flex",
        gap: 3,
        justifyContent: "center",
        flexWrap: "wrap",
      }}
    >
      {[...Array(8)].map((_, idx) => (
        <Paper
          key={idx}
          sx={{
            p: 3,
            borderRadius: 4,
            textAlign: "center",
            minWidth: 160,
          }}
        >
          <Skeleton
            variant="circular"
            width={90}
            height={90}
            sx={{ mx: "auto", mb: 2 }}
          />
          <Skeleton
            variant="text"
            width={120}
            height={24}
            sx={{ mx: "auto", mb: 1 }}
          />
          <Skeleton
            variant="text"
            width={80}
            height={20}
            sx={{ mx: "auto" }}
          />
        </Paper>
      ))}
    </Box>
  );
}
