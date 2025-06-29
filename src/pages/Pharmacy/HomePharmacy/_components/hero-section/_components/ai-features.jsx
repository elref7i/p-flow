import { DocumentScanner, Psychology } from "@mui/icons-material";
import { Box, Card, CardContent, Grid, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { itemVariants } from "../constants/variants";
import SearchAi from "../../../../../../components/modal-ai/modal-ai";
import { useThemeConstants } from "../../../../../../lib/constants/theme.constant";
import PrescriptionModalUsage from "../../../../../../components/prescription-modal/prescription-modal-usage";

export default function AiFeatures() {
  //Themes
  const { textPrimary } = useThemeConstants();
  //Functions
  const handleAISearch = () => {
    console.log("Opening AI Active Ingredient Search Modal");
  };

  const handlePrescriptionScan = () => {
    console.log("Opening Prescription OCR Modal");
  };

  return (
    <motion.div variants={itemVariants}>
      <Box mb={{ xs: 6, md: 8 }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.8, duration: 1 }}
        >
          <Typography
            variant="h3"
            sx={{
              color: textPrimary,
              textAlign: "center",
              mb: 6,
              fontWeight: 800,
              fontSize: { xs: "2rem", md: "2.5rem" },
              textShadow: "0 4px 20px rgba(0,0,0,0.3)",
            }}
          >
            AI-Powered Features
          </Typography>
        </motion.div>

        <Grid
          container
          spacing={5}
          justifyContent="center"
          maxWidth={1000}
          mx="auto"
        >
          <Grid
            item
            xs={12}
            sm={6}
          >
            <motion.div
              initial={{ opacity: 0, x: -100, rotateY: -45 }}
              animate={{ opacity: 1, x: 0, rotateY: 0 }}
              transition={{
                delay: 2,
                duration: 1.2,
                ease: "easeOut",
              }}
              whileHover={{
                y: -15,
                rotateY: 8,
                scale: 1.03,
                rotateX: 5,
              }}
              style={{ transformStyle: "preserve-3d" }}
            >
              <Card
                onClick={handleAISearch}
                sx={{
                  background:
                    "linear-gradient(135deg, rgba(102, 126, 234, 0.95), rgba(118, 75, 162, 0.95))",
                  color: "white",
                  cursor: "pointer",
                  borderRadius: 6,
                  transition: "all 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
                  position: "relative",
                  overflow: "hidden",
                  border: "2px solid rgba(255,255,255,0.2)",
                  "&:hover": {
                    boxShadow: "0 30px 60px rgba(102, 126, 234, 0.5)",
                  },
                  "&::before": {
                    content: '""',
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background:
                      "linear-gradient(45deg, transparent, rgba(255,255,255,0.15), transparent)",
                    transform: "translateX(-100%)",
                    transition: "transform 0.8s",
                  },
                  "&:hover::before": {
                    transform: "translateX(100%)",
                  },
                }}
              >
                <CardContent
                  sx={{
                    p: 5,
                    textAlign: "center",
                    position: "relative",
                    zIndex: 1,
                  }}
                >
                  <motion.div
                    animate={{
                      rotate: [0, 15, -15, 0],
                      scale: [1, 1.15, 1],
                    }}
                    transition={{
                      duration: 5,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "easeInOut",
                    }}
                  >
                    <Psychology sx={{ fontSize: 70, mb: 3 }} />
                  </motion.div>
                  <Typography
                    variant="h4"
                    fontWeight={800}
                    gutterBottom
                  >
                    AI Ingredient Search
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      opacity: 0.95,
                      mb: 4,
                      lineHeight: 1.7,
                      fontSize: "1.1rem",
                    }}
                  >
                    Search drugs by name and get instant results with smart
                    filtering.
                  </Typography>
                  <motion.div
                    whileHover={{ scale: 1.08 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <SearchAi check={true} />
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          </Grid>

          <Grid
            item
            xs={12}
            sm={6}
          >
            <motion.div
              initial={{ opacity: 0, x: 100, rotateY: 45 }}
              animate={{ opacity: 1, x: 0, rotateY: 0 }}
              transition={{
                delay: 2.2,
                duration: 1.2,
                ease: "easeOut",
              }}
              whileHover={{
                y: -15,
                rotateY: -8,
                scale: 1.03,
                rotateX: 5,
              }}
              style={{ transformStyle: "preserve-3d" }}
            >
              <Card
                onClick={handlePrescriptionScan}
                sx={{
                  background:
                    "linear-gradient(135deg, rgba(240, 147, 251, 0.95), rgba(245, 87, 108, 0.95))",
                  color: "white",
                  cursor: "pointer",
                  borderRadius: 6,
                  transition: "all 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
                  position: "relative",
                  overflow: "hidden",
                  border: "2px solid rgba(255,255,255,0.2)",
                  "&:hover": {
                    boxShadow: "0 30px 60px rgba(240, 147, 251, 0.5)",
                  },
                  "&::before": {
                    content: '""',
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background:
                      "linear-gradient(45deg, transparent, rgba(255,255,255,0.15), transparent)",
                    transform: "translateX(-100%)",
                    transition: "transform 0.8s",
                  },
                  "&:hover::before": {
                    transform: "translateX(100%)",
                  },
                }}
              >
                <CardContent
                  sx={{
                    p: 5,
                    textAlign: "center",
                    position: "relative",
                    zIndex: 1,
                  }}
                >
                  <motion.div
                    animate={{
                      rotate: [0, -15, 15, 0],
                      scale: [1, 1.15, 1],
                    }}
                    transition={{
                      duration: 5,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "easeInOut",
                      delay: 2.5,
                    }}
                  >
                    <DocumentScanner sx={{ fontSize: 70, mb: 3 }} />
                  </motion.div>
                  <Typography
                    variant="h4"
                    fontWeight={800}
                    gutterBottom
                  >
                    Prescription OCR
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      opacity: 0.95,
                      lineHeight: 1.7,
                      fontSize: "1.1rem",
                    }}
                  >
                    Upload prescription images and let AI read them instantly
                    with accuracy
                  </Typography>
                  <motion.div
                    whileHover={{ scale: 1.08 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <PrescriptionModalUsage />
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          </Grid>
        </Grid>
      </Box>
    </motion.div>
  );
}
