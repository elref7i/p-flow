/* eslint-disable react/prop-types */
// import React from "react";
import { Box, Typography, Button, Container, Paper, Grid } from "@mui/material";
import {
  ErrorOutline as ErrorIcon,
  Refresh as RefreshIcon,
  Home as HomeIcon,
} from "@mui/icons-material";

function ErrorPage() {
  return (
    <Container
      maxWidth="md"
      sx={{ py: 8 }}
    >
      <Paper
        elevation={3}
        sx={{
          p: 4,
          borderRadius: 2,
          textAlign: "center",
          backgroundColor: "background.paper",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            mb: 4,
          }}
        >
          <ErrorIcon sx={{ fontSize: 100, color: "error.main", mb: 2 }} />
          <Typography
            variant="h3"
            component="h1"
            gutterBottom
            fontWeight="bold"
          >
            Error Loading Data
          </Typography>
          <Typography
            variant="h6"
            color="text.secondary"
            paragraph
          >
            We encountered a problem while trying to fetch drug information.
            Please try again later.
          </Typography>
        </Box>

        <Grid
          container
          spacing={2}
          justifyContent="center"
        >
          <Grid item>
            <Button
              variant="contained"
              color="primary"
              startIcon={<RefreshIcon />}
              // onClick={() => (reset ? reset() : window.location.reload())}
            >
              Try Again
            </Button>
          </Grid>
          <Grid item>
            <Button
              variant="outlined"
              startIcon={<HomeIcon />}
              href="/"
            >
              Home Page
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
}

export default ErrorPage;
