/* eslint-disable react/prop-types */
import { Notes } from "@mui/icons-material";
import { Box, Paper, Stack, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { useThemeConstants } from "../../../lib/constants/theme.constant";

export default function AdditionNotes({ prescription }) {
  //Themes
  const { cardBackground, textPrimary } = useThemeConstants();

  return (
    prescription.additionalNotes && (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <Paper
          sx={{
            p: 3,
            borderRadius: 3,
            background: `linear-gradient(135deg, ${cardBackground} 0%, rgba(103, 58, 183, 0.05) 100%)`,
            border: "1px solid rgba(103, 58, 183, 0.1)",
          }}
        >
          <Stack
            direction="row"
            alignItems="flex-start"
            spacing={2}
          >
            <Notes
              sx={{
                color: "secondary.main",
                fontSize: 28,
                mt: 0.5,
              }}
            />
            <Box>
              <Typography
                variant="h6"
                fontWeight={700}
                color={textPrimary}
                gutterBottom
              >
                Additional Notes
              </Typography>
              <Typography
                variant="body1"
                sx={{ whiteSpace: "pre-line", lineHeight: 1.6 }}
              >
                {prescription.additionalNotes}
              </Typography>
            </Box>
          </Stack>
        </Paper>
      </motion.div>
    )
  );
}
