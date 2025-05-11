import {
  Box,
  Card,
  CardContent,
  Grid,
  Typography,
  useTheme,
} from "@mui/material";
import { motion } from "framer-motion";

const StockOverview = () => {
  const theme = useTheme();

  const stockData = [
    { title: "Low Stock Items", value: "02" },
    { title: "Item Group", value: "14" },
    { title: "No of Items", value: "104" },
  ];

  return (
    <Card sx={{ height: "100%" }}>
      <CardContent>
        <Typography
          variant="h6"
          sx={{ mb: 2 }}
        >
          Stock Overview
        </Typography>
        <Grid
          container
          spacing={2}
        >
          {stockData.map((item, index) => (
            <Grid
              item
              xs={12}
              key={index}
            >
              <motion.div
                whileHover={{ scale: 1.03 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    p: 2,
                    borderRadius: 2,
                    backgroundColor: theme.palette.background.default,
                  }}
                >
                  <Typography variant="body1">{item.title}</Typography>
                  <Typography
                    variant="h5"
                    sx={{ fontWeight: "bold" }}
                  >
                    {item.value}
                  </Typography>
                </Box>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </CardContent>
    </Card>
  );
};

export default StockOverview;
