/* eslint-disable react/prop-types */
import { Box, Grid, Stack, Typography, useTheme } from "@mui/material";

export default function OrderTimeline({ steps }) {
  const theme = useTheme();

  return (
    <Box>
      <Typography variant="h6" gutterBottom color={theme.palette.text.primary}>
        Order Timeline
      </Typography>
      <Grid container spacing={2}>
        {steps.map((step, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Stack
              spacing={1}
              alignItems="center"
              sx={{
                backgroundColor: step.color,
                p: 2,
                borderRadius: 2,
                boxShadow: 1,
                color: theme.palette.getContrastText(step.color),
              }}
            >
              {step.icon}
              <Typography variant="subtitle2" align="center">
                {step.title}
              </Typography>
              <Typography variant="caption">{step.time}</Typography>
              <Typography variant="body2" align="center">
                {step.description}
              </Typography>
            </Stack>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
