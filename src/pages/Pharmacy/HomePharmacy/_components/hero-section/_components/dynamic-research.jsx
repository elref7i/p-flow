"use client";

import { Box, Paper, Stack, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { itemVariants } from "../constants/variants";
import { useThemeConstants } from "../../../../../../lib/constants/theme.constant";
import SearchBar from "../../../../../../components/SearchBar/SearchBar";

export default function DynamicResearch() {
  //Context
  const { textPrimary, border } = useThemeConstants();

  return (
    <motion.div variants={itemVariants}>
      <Box mb={{ xs: 6, md: 8 }}>
        <Box
          maxWidth={900}
          mx="auto"
        >
          <motion.div
            whileHover={{
              scale: 1.02,
              boxShadow: 8,
            }}
            transition={{ duration: 0.3 }}
          >
            <Paper
              elevation={8}
              sx={{
                p: { xs: 4, md: 5 },
                borderRadius: 6,
                background: "transparent",
                backdropFilter: "blur(30px)",
                border: `2px solid ${border}`,
                position: "relative",
                overflow: "hidden",
              }}
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.8 }}
              >
                <Typography
                  variant="h5"
                  sx={{
                    color: textPrimary,
                    mb: 4,
                    fontWeight: 700,
                    textAlign: "center",
                    fontSize: { xs: "1.3rem", md: "1.5rem" },
                  }}
                >
                  🔍 Smart Medicine Search
                </Typography>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.2, duration: 0.8 }}
              >
                <SearchBar />
              </motion.div>

              {/* Enhanced Quick Suggestions */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.4, duration: 0.8 }}
              >
                <Box mt={4}>
                  <Typography
                    variant="body1"
                    sx={{
                      color: "text.secondary",
                      mb: 3,
                      fontWeight: 500,
                    }}
                  >
                    Popular searches:
                  </Typography>
                  {/* Popular searches are now handled in SearchBar component */}
                  <Stack
                    direction="row"
                    spacing={2}
                    flexWrap="wrap"
                    useFlexGap
                  ></Stack>
                </Box>
              </motion.div>
            </Paper>
          </motion.div>
        </Box>
      </Box>
    </motion.div>
  );
}
