"use client";

import {
  Box,
  Container,
  TextField,
  InputAdornment,
  Paper,
} from "@mui/material";
import { Search, LocalPharmacy } from "@mui/icons-material";
import { motion } from "framer-motion";
import { useState } from "react";
import { useThemeConstants } from "../../../../lib/constants/theme.constant";

export default function SearchSection() {
  const [searchQuery, setSearchQuery] = useState("");
  const { textPrimary, paperBackground } = useThemeConstants();

  return (
    <Box
      sx={{
        py: 6,
        background: "linear-gradient(135deg, #f8f9ff 0%, #e8f2ff 100%)",
        position: "relative",
      }}
    >
      <Container maxWidth="md">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Paper
            elevation={8}
            sx={{
              p: 4,
              borderRadius: 4,
              bgcolor: paperBackground,
              boxShadow: "0 20px 60px rgba(0,0,0,0.1)",
              border: "1px solid rgba(255,255,255,0.2)",
              backdropFilter: "blur(10px)",
            }}
          >
            <Box
              display="flex"
              alignItems="center"
              justifyContent="center"
              mb={3}
            >
              <LocalPharmacy
                sx={{ fontSize: 32, color: "primary.main", mr: 2 }}
              />
              <Box>
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <Box
                    component="h2"
                    sx={{
                      fontSize: { xs: "1.5rem", sm: "1.8rem" },
                      fontWeight: 700,
                      color: textPrimary,
                      mb: 0.5,
                      margin: 0,
                    }}
                  >
                    Find Your Medicine
                  </Box>
                  <Box
                    component="p"
                    sx={{
                      color: "text.secondary",
                      fontSize: "0.95rem",
                      margin: 0,
                    }}
                  >
                    Search by name, active ingredient, or category
                  </Box>
                </motion.div>
              </Box>
            </Box>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 }}
            >
              <TextField
                fullWidth
                variant="outlined"
                placeholder="Search for medicines, supplements, or health products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Search sx={{ color: "primary.main" }} />
                    </InputAdornment>
                  ),
                }}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    borderRadius: 3,
                    fontSize: "1.1rem",
                    py: 0.5,
                    background: "rgba(255,255,255,0.8)",
                    backdropFilter: "blur(10px)",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      boxShadow: "0 8px 25px rgba(33, 150, 243, 0.15)",
                    },
                    "&.Mui-focused": {
                      boxShadow: "0 8px 25px rgba(33, 150, 243, 0.25)",
                      "& fieldset": {
                        borderColor: "primary.main",
                        borderWidth: 2,
                      },
                    },
                  },
                }}
              />
            </motion.div>
          </Paper>
        </motion.div>
      </Container>
    </Box>
  );
}
