import { Box, Grid, Paper, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { Speed, Security, TrendingUp } from "@mui/icons-material";
import { itemVariants } from "../constants/variants";
import { useThemeConstants } from "../../../../../../lib/constants/theme.constant";

const trustIndicators = [
  { icon: <Speed />, label: "1000+ Suppliers", value: "Real-time Stock" },
  { icon: <Security />, label: "100% Verified", value: "Licensed Products" },
  { icon: <TrendingUp />, label: "Save 30%", value: "Best Prices" },
];

export default function TrustIndications() {
  const { textPrimary } = useThemeConstants();
  return (
    <motion.div variants={itemVariants}>
      <Box>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.4, duration: 1 }}
        >
          <Typography
            variant="h4"
            sx={{
              color: textPrimary,
              textAlign: "center",
              mb: 5,
              fontWeight: 700,
              fontSize: { xs: "1.8rem", md: "2rem" },
            }}
          >
            Trusted by 10,000+ Pharmacists
          </Typography>
        </motion.div>

        <Grid
          container
          spacing={4}
          justifyContent="center"
          maxWidth={900}
          mx="auto"
        >
          {trustIndicators.map((indicator, index) => (
            <Grid
              item
              xs={12}
              sm={4}
              key={index}
            >
              <motion.div
                initial={{ opacity: 0, y: 50, scale: 0.8 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{
                  delay: 2.6 + index * 0.15,
                  duration: 0.8,
                }}
                whileHover={{
                  y: -12,
                  scale: 1.08,
                  rotateY: 5,
                }}
                style={{ transformStyle: "preserve-3d" }}
              >
                <Paper
                  elevation={9}
                  sx={{
                    p: 4,
                    textAlign: "center",
                    background: "rgba(255,255,255,0.12)",
                    backdropFilter: "blur(25px)",
                    border: "2px solid rgba(255,255,255,0.25)",
                    borderRadius: 4,
                    color: textPrimary,
                    transition: "all 0.4s ease",
                    "&:hover": {
                      background: "rgba(255,255,255,0.18)",
                      boxShadow: "0 20px 40px rgba(0,0,0,0.3)",
                    },
                  }}
                >
                  <motion.div
                    animate={{
                      rotate: [0, 8, -8, 0],
                      scale: [1, 1.1, 1],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "easeInOut",
                      delay: index * 0.7,
                    }}
                  >
                    <Box sx={{ color: "#2196F3", mb: 2, fontSize: 35 }}>
                      {indicator.icon}
                    </Box>
                  </motion.div>
                  <Typography
                    variant="h5"
                    fontWeight={800}
                    gutterBottom
                  >
                    {indicator.label}
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{ opacity: 0.9, fontSize: "1.1rem" }}
                  >
                    {indicator.value}
                  </Typography>
                </Paper>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Box>
    </motion.div>
  );
}
