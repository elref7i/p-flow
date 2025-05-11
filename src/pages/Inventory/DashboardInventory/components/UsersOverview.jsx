import {
  Box,
  Card,
  CardContent,
  Grid,
  Typography,
  useTheme,
} from "@mui/material";
import { People, Business } from "@mui/icons-material";
import { motion } from "framer-motion";

const UsersOverview = () => {
  const theme = useTheme();

  const userData = [
    {
      title: "Total Customers",
      value: "1.8k",
      icon: <People />,
      iconBg: theme.palette.info.light,
      iconColor: theme.palette.info.main,
    },
    {
      title: "Total Suppliers",
      value: "27",
      icon: <Business />,
      iconBg: theme.palette.secondary.light,
      iconColor: theme.palette.secondary.main,
    },
  ];

  return (
    <Card sx={{ height: "100%" }}>
      <CardContent>
        <Typography
          variant="h6"
          sx={{ mb: 2 }}
        >
          No. of Users
        </Typography>
        <Grid
          container
          spacing={2}
        >
          {userData.map((item, index) => (
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
                    p: 2,
                    borderRadius: 2,
                    backgroundColor: theme.palette.background.default,
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      borderRadius: 2,
                      width: 48,
                      height: 48,
                      backgroundColor: item.iconBg,
                      color: item.iconColor,
                      mr: 2,
                    }}
                  >
                    {item.icon}
                  </Box>
                  <Box>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                    >
                      {item.title}
                    </Typography>
                    <Typography
                      variant="h5"
                      sx={{ fontWeight: "bold" }}
                    >
                      {item.value}
                    </Typography>
                  </Box>
                </Box>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </CardContent>
    </Card>
  );
};

export default UsersOverview;
