/* eslint-disable react/prop-types */
import { LocalHospital, Person } from "@mui/icons-material";
import { Box, Grid2, Paper, Stack, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { useThemeConstants } from "@/lib/constants/theme.constant";
import { formatDate } from "@/lib/utils/formDate";

export default function PatienDoctorInfo({ prescription }) {
  //themes
  const { cardBackground, textPrimary } = useThemeConstants();

  return (
    <Grid2
      container
      spacing={3}
      mb={4}
    >
      {/* Patient Info */}
      <Grid2 size={{ xs: 12, md: 6 }}>
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Paper
            sx={{
              p: 3,
              borderRadius: 3,
              background: `linear-gradient(135deg, ${cardBackground} 0%, rgba(33, 150, 243, 0.05) 100%)`,
              border: "1px solid rgba(33, 150, 243, 0.1)",
            }}
          >
            <Stack
              direction="row"
              alignItems="center"
              spacing={2}
              mb={2}
            >
              <Person sx={{ color: "primary.main", fontSize: 28 }} />
              <Typography
                variant="h6"
                fontWeight={700}
                color={textPrimary}
              >
                Patient Information
              </Typography>
            </Stack>
            <Stack spacing={1.5}>
              <Box
                display="flex"
                justifyContent="space-between"
              >
                <Typography
                  variant="body2"
                  color="text.secondary"
                >
                  Name:
                </Typography>
                <Typography
                  variant="body1"
                  fontWeight={600}
                >
                  {prescription.patient.name}
                </Typography>
              </Box>
              <Box
                display="flex"
                justifyContent="space-between"
              >
                <Typography
                  variant="body2"
                  color="text.secondary"
                >
                  Age:
                </Typography>
                <Typography
                  variant="body1"
                  fontWeight={600}
                >
                  {prescription.patient.age} years
                </Typography>
              </Box>
              <Box
                display="flex"
                justifyContent="space-between"
              >
                <Typography
                  variant="body2"
                  color="text.secondary"
                >
                  Gender:
                </Typography>
                <Typography
                  variant="body1"
                  fontWeight={600}
                >
                  {prescription.patient.gender}
                </Typography>
              </Box>
            </Stack>
          </Paper>
        </motion.div>
      </Grid2>

      {/* Doctor Info */}
      <Grid2 size={{ xs: 12, md: 6 }}>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <Paper
            sx={{
              p: 3,
              borderRadius: 3,
              background: `linear-gradient(135deg, ${cardBackground} 0%, rgba(76, 175, 80, 0.05) 100%)`,
              border: "1px solid rgba(76, 175, 80, 0.1)",
            }}
          >
            <Stack
              direction="row"
              alignItems="center"
              spacing={2}
              mb={2}
            >
              <LocalHospital sx={{ color: "success.main", fontSize: 28 }} />
              <Typography
                variant="h6"
                fontWeight={700}
                color={textPrimary}
              >
                Doctor Information
              </Typography>
            </Stack>
            <Stack spacing={1.5}>
              <Box
                display="flex"
                justifyContent="space-between"
              >
                <Typography
                  variant="body2"
                  color="text.secondary"
                >
                  Doctor:
                </Typography>
                <Typography
                  variant="body1"
                  fontWeight={600}
                >
                  {prescription.doctor.name}
                </Typography>
              </Box>
              <Box
                display="flex"
                justifyContent="space-between"
              >
                <Typography
                  variant="body2"
                  color="text.secondary"
                >
                  License:
                </Typography>
                <Typography
                  variant="body1"
                  fontWeight={600}
                >
                  #{prescription.doctor.license}
                </Typography>
              </Box>
              <Box
                display="flex"
                justifyContent="space-between"
              >
                <Typography
                  variant="body2"
                  color="text.secondary"
                >
                  Date:
                </Typography>
                <Typography
                  variant="body1"
                  fontWeight={600}
                >
                  {formatDate(prescription.prescriptionDate)}
                </Typography>
              </Box>
            </Stack>
          </Paper>
        </motion.div>
      </Grid2>
    </Grid2>
  );
}
