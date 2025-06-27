import {
  Box,
  Grid,
  Skeleton,
  Stack,
  IconButton,
  InputAdornment,
  TextField,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import TuneIcon from "@mui/icons-material/Tune";

export default function InventoriesSkeleton() {
  return (
    <Box
      py={3}
      fullWidth
    >
      {/* Search + Filter Section */}
      <Box
        fullWidth
        display="flex"
        alignItems="center"
        gap={2}
        mb={4}
        flexWrap="wrap"
        justifyContent="space-between"
      >
        {/* Search Input */}
        <Box flex={1}>
          <TextField
            fullWidth
            disabled
            placeholder="Search by name, active ingredient, or condition..."
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon color="disabled" />
                </InputAdornment>
              ),
            }}
          />
        </Box>

        {/* Filter Button */}
        <IconButton disabled>
          <TuneIcon />
        </IconButton>
      </Box>

      {/* Inventory Cards Skeleton */}
      <Grid
        container
        spacing={2}
      >
        {Array.from({ length: 8 }).map((_, idx) => (
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            lg={3}
            key={idx}
          >
            <Box
              sx={{
                borderRadius: 4,
                boxShadow: 3,
                p: 2,
                minHeight: 330,
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              {/* Top - Avatar */}
              <Box
                display="flex"
                justifyContent="center"
                mt={1}
                mb={2}
              >
                <Skeleton
                  variant="circular"
                  width={70}
                  height={70}
                />
              </Box>

              {/* Info Section */}
              <Stack spacing={1.5}>
                {/* Name */}
                <Skeleton
                  variant="text"
                  height={26}
                  width="60%"
                  sx={{ mx: "auto" }}
                />

                {/* Location */}
                <Box
                  display="flex"
                  alignItems="center"
                  gap={1}
                >
                  <Skeleton
                    variant="circular"
                    width={22}
                    height={22}
                  />
                  <Skeleton
                    variant="text"
                    width="70%"
                    height={20}
                  />
                </Box>

                {/* Phone */}
                <Box
                  display="flex"
                  alignItems="center"
                  gap={1}
                >
                  <Skeleton
                    variant="circular"
                    width={22}
                    height={22}
                  />
                  <Skeleton
                    variant="text"
                    width="60%"
                    height={20}
                  />
                </Box>

                {/* Distance */}
                <Box
                  display="flex"
                  alignItems="center"
                  gap={1}
                >
                  <Skeleton
                    variant="circular"
                    width={22}
                    height={22}
                  />
                  <Skeleton
                    variant="text"
                    width="40%"
                    height={20}
                  />
                </Box>

                {/* Progress bar */}
                <Skeleton
                  variant="rectangular"
                  width="100%"
                  height={8}
                  sx={{ borderRadius: 5 }}
                />

                {/* Minimum Order */}
                <Box
                  display="flex"
                  justifyContent="space-between"
                  alignItems="center"
                  mt={1}
                >
                  <Skeleton
                    variant="text"
                    width="50%"
                    height={20}
                  />
                  <Skeleton
                    variant="text"
                    width={50}
                    height={20}
                  />
                </Box>
              </Stack>

              {/* View Profile Button */}
              <Box mt={2}>
                <Skeleton
                  variant="rounded"
                  width="100%"
                  height={38}
                />
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
