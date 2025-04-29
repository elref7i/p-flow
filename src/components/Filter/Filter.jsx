/* eslint-disable react/prop-types */
"use client";

import { useState } from "react";
import {
  Box,
  Modal,
  Typography,
  Button,
  TextField,
  Slider,
  Grid,
  IconButton,
  Paper,
  Slide,
  FormControl,
  Select,
  MenuItem,
  AccordionDetails,
  AccordionSummary,
  Accordion,
  InputLabel,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import { useThemeConstants } from "../../lib/constants/theme.constant";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

// Custom transition component for sliding from right
const SlideTransition = (props) => {
  return (
    <Slide
      {...props}
      direction="left"
    />
  );
};

export default function Filter({ openFilter, handleCloseFilter, setParams }) {
  //States
  const [filters, setFilters] = useState({
    "productionDate[gte]": null,
    "expirationDate[lte]": null,
    "price[gte]": 0,
    "price[lte]": 1000,
    sort: "distanceInKm",
  });

  //Theme
  const {
    textPrimary,
    shadow1,
    shadow2,
    shadow3,
    typography,
    cardBackground,
    border,
  } = useThemeConstants();

  // Functions
  const handleFilterChange = (key, value) => {
    setFilters((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const applyFilters = () => {
    const validFilters = Object.fromEntries(
      // eslint-disable-next-line no-unused-vars
      Object.entries(filters).filter(([_, value]) => value !== null)
    );
    setParams(validFilters);
    if (handleCloseFilter) handleCloseFilter();
  };

  const handleResetFilters = () => {
    setFilters({
      "productionDate[gte]": null,
      "expirationDate[lte]": null,
      "price[gte]": 0,
      "price[lte]": 1000,
      sort: "distanceInKm",
    });
    setParams({});
    if (openFilter) handleCloseFilter();
  };

  return (
    <Modal
      open={openFilter}
      onClose={handleCloseFilter}
      aria-labelledby="filter-modal-title"
      closeAfterTransition
      BackdropProps={{
        timeout: 500,
      }}
    >
      <SlideTransition in={openFilter}>
        <Paper
          elevation={1}
          sx={{
            position: "fixed",
            top: 0,
            right: 0,
            width: { xs: "85%", sm: "400px" },
            height: "100%",
            maxWidth: "100%",
            overflow: "auto",
            borderRadius: 0,
          }}
        >
          <Box sx={{ p: { xs: 2, sm: 3 } }}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                mb: 3,
                pb: 2,
                borderBottom: `1px solid ${border}`,
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <FilterAltIcon
                  sx={{
                    color: "primary.main",
                    mr: 1,
                    fontSize: typography.h2.fontSize,
                  }}
                />
                <Typography
                  id="filter-modal-title"
                  variant="h6"
                  sx={{
                    fontWeight: typography.h2.fontWeight,
                    fontSize: typography.h2.fontSize,
                    lineHeight: typography.h2.lineHeight,
                  }}
                  color="text.primary"
                >
                  Filter Results
                </Typography>
              </Box>
              <IconButton
                onClick={handleCloseFilter}
                size="small"
                sx={{
                  bgcolor: "rgba(0, 0, 0, 0.04)",
                  "&:hover": {
                    bgcolor: "rgba(0, 0, 0, 0.08)",
                  },
                }}
              >
                <CloseIcon fontSize="small" />
              </IconButton>
            </Box>

            <Accordion
              defaultExpanded
              elevation={0}
              sx={{
                background: cardBackground,
                boxShadow: shadow3,
                mb: 1,
                "&:before": { display: "none" },
                border: "1px solid rgba(0, 0, 0, 0.08)",
                borderRadius: "8px",
                overflow: "hidden",
              }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                sx={{
                  bgcolor: cardBackground,
                  boxShadow: shadow1,
                  "&:hover": { bgcolor: "rgba(0, 0, 0, 0.04)" },
                }}
              >
                <Typography
                  sx={{
                    fontSize: typography.h5.fontSize,
                    fontWeight: typography.h5.fontWeight,
                    lineHeight: typography.h5.lineHeight,
                  }}
                >
                  Price Range
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Box sx={{ pt: 2, px: 2 }}>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      mb: 1,
                    }}
                  >
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      font
                    >
                      {filters["price[gte]"]} EGP
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                    >
                      {filters["price[lte]"]} EGP
                    </Typography>
                  </Box>
                  <Slider
                    value={[filters["price[gte]"], filters["price[lte]"]]}
                    onChange={(e, newValue) => {
                      handleFilterChange("price[gte]", newValue[0]);
                      handleFilterChange("price[lte]", newValue[1]);
                    }}
                    valueLabelDisplay="auto"
                    min={0}
                    max={1000}
                    sx={{ mb: 1 }}
                  />
                </Box>
              </AccordionDetails>
            </Accordion>

            <Accordion
              defaultExpanded
              elevation={0}
              sx={{
                mb: 1,
                "&:before": { display: "none" },
                border: border,
                background: cardBackground,
                boxShadow: shadow3,
                borderRadius: "8px",
                overflow: "hidden",
              }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                sx={{
                  bgcolor: cardBackground,
                  boxShadow: shadow1,
                  "&:hover": { bgcolor: "rgba(0, 0, 0, 0.04)" },
                }}
              >
                <Typography
                  sx={{
                    fontSize: typography.h5.fontSize,
                    fontWeight: typography.h5.fontWeight,
                    lineHeight: typography.h5.lineHeight,
                  }}
                >
                  Date Range
                </Typography>
              </AccordionSummary>
              <AccordionDetails sx={{ pt: 3 }}>
                <TextField
                  label="Production Date"
                  type="date"
                  fullWidth
                  InputLabelProps={{ shrink: true }}
                  value={filters["productionDate[gte]"] || ""}
                  onChange={(e) =>
                    handleFilterChange("productionDate[gte]", e.target.value)
                  }
                  sx={{ mb: 2 }}
                  size="small"
                />
                <TextField
                  label="Expiration Date"
                  type="date"
                  fullWidth
                  InputLabelProps={{ shrink: true }}
                  value={filters["expirationDate[lte]"] || ""}
                  onChange={(e) =>
                    handleFilterChange("expirationDate[lte]", e.target.value)
                  }
                  size="small"
                />
              </AccordionDetails>
            </Accordion>

            <Box
              sx={{
                mb: 1.5,
                p: 2,
                background: cardBackground,
                borderRadius: 2,
                border: border,
                boxShadow: shadow3,
              }}
            >
              <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                <FilterAltIcon
                  sx={{ color: "primary.main", mr: 1, fontSize: 20 }}
                />
                <Typography
                  sx={{
                    fontSize: typography.h5.fontSize,
                    fontWeight: typography.h5.fontWeight,
                    lineHeight: typography.h5.lineHeight,
                  }}
                  color="text.primary"
                >
                  Select Sort
                </Typography>
              </Box>

              <FormControl
                fullWidth
                size="small"
              >
                <InputLabel>Sort By</InputLabel>
                <Select
                  value={filters.sort}
                  label="Sort By"
                  onChange={(e) => handleFilterChange("sort", e.target.value)}
                >
                  <MenuItem value="distanceInKm">Distance</MenuItem>
                  <MenuItem value="price">Price</MenuItem>
                </Select>
              </FormControl>
            </Box>

            <Box sx={{ mt: 4 }}>
              <Grid
                container
                spacing={2}
              >
                <Grid
                  item
                  xs={6}
                >
                  <Button
                    onClick={handleResetFilters}
                    variant="outlined"
                    fullWidth
                    sx={{
                      borderRadius: 2,
                      py: 1.2,
                      textTransform: "none",
                      fontWeight: typography.button.fontWeight,
                      fontSize: typography.button.fontSize,
                      boxShadow: shadow2,
                      border: border,
                      color: textPrimary,
                      "&:hover": {
                        backgroundColor: "rgba(0, 0, 0, 0.04)",
                      },
                    }}
                  >
                    Reset
                  </Button>
                </Grid>
                <Grid
                  item
                  xs={6}
                >
                  <Button
                    onClick={applyFilters}
                    variant="contained"
                    color="primary"
                    fullWidth
                    sx={{
                      borderRadius: 2,
                      py: 1.2,
                      textTransform: "none",
                      fontWeight: typography.button.fontWeight,
                      fontSize: typography.button.fontSize,
                      boxShadow: shadow1,
                      "&:hover": {
                        boxShadow: "0px 6px 10px rgba(0, 0, 0, 0.15)",
                      },
                    }}
                  >
                    Apply Filters
                  </Button>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Paper>
      </SlideTransition>
    </Modal>
  );
}
