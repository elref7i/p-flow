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
  Chip,
  FormControl,
  Select,
  MenuItem,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import { useThemeConstants } from "../../lib/constants/theme.constant";

// Custom transition component for sliding from right
const SlideTransition = (props) => {
  return (
    <Slide
      {...props}
      direction="left"
    />
  );
};

export default function Filter({ open, handleClose, applyFilters }) {
  //States
  const [priceRange, setPriceRange] = useState([0, 1000]);
  const [distance, setDistance] = useState(10);
  const [date, setDate] = useState("");
  const [category, setCategory] = useState("all");

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
  const handlePriceChange = (event, newValue) => {
    setPriceRange(newValue);
  };

  const handleDistanceChange = (event, newValue) => {
    setDistance(newValue);
  };

  const handleDateChange = (event) => {
    setDate(event.target.value);
  };

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  const handleApplyFilters = () => {
    applyFilters({
      minPrice: priceRange[0],
      maxPrice: priceRange[1],
      distance: distance,
      date: date,
      category: category,
    });
    handleClose();
  };

  const handleResetFilters = () => {
    setPriceRange([0, 1000]);
    setDistance(10);
    setDate("");
    setCategory("all");
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="filter-modal-title"
      closeAfterTransition
      BackdropProps={{
        timeout: 500,
      }}
    >
      <SlideTransition in={open}>
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
                onClick={handleClose}
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

            <Box
              sx={{
                mb: 1.5,
                p: 2,
                background: cardBackground,
                borderRadius: 2,
                border: "1px solid rgba(0, 0, 0, 0.04)",
                boxShadow: shadow3,
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  mb: 1.5,
                }}
              >
                <AttachMoneyIcon sx={{ color: "primary.main", fontSize: 20 }} />
                <Typography
                  fontWeight="500"
                  sx={{
                    fontWeight: typography.h6.fontWeight,
                    fontSize: typography.h6.fontSize,
                    lineHeight: typography.h6.lineHeight,
                  }}
                  color="text.primary"
                >
                  Price Range
                </Typography>
              </Box>

              <Box sx={{ px: 1, mb: 1 }}>
                <Slider
                  value={priceRange}
                  onChange={handlePriceChange}
                  valueLabelDisplay="auto"
                  min={0}
                  max={1000}
                  sx={{
                    color: "primary.main",
                    "& .MuiSlider-thumb": {
                      height: 16,
                      width: 16,
                      "&:hover, &.Mui-focusVisible": {
                        boxShadow: "0px 0px 0px 8px rgba(25, 118, 210, 0.16)",
                      },
                    },
                    "& .MuiSlider-rail": {
                      opacity: 0.32,
                    },
                  }}
                />
              </Box>

              <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <Chip
                  label={`$${priceRange[0]}`}
                  size="small"
                  variant="outlined"
                  sx={{ fontWeight: "medium" }}
                />
                <Chip
                  label={`$${priceRange[1]}`}
                  size="small"
                  variant="outlined"
                  sx={{ fontWeight: "medium" }}
                />
              </Box>
            </Box>

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
              <Box sx={{ display: "flex", alignItems: "center", mb: 1.5 }}>
                <LocationOnIcon
                  sx={{ color: "primary.main", mr: 1, fontSize: 20 }}
                />
                <Typography
                  fontWeight="500"
                  color="text.primary"
                >
                  Distance
                </Typography>
              </Box>

              <Box sx={{ px: 1, mb: 1 }}>
                <Slider
                  value={distance}
                  onChange={handleDistanceChange}
                  valueLabelDisplay="auto"
                  min={1}
                  max={50}
                  sx={{
                    color: "primary.main",
                    "& .MuiSlider-thumb": {
                      height: 16,
                      width: 16,
                      "&:hover, &.Mui-focusVisible": {
                        boxShadow: "0px 0px 0px 8px rgba(25, 118, 210, 0.16)",
                      },
                    },
                    "& .MuiSlider-rail": {
                      opacity: 0.32,
                    },
                  }}
                />
              </Box>

              <Box sx={{ display: "flex", justifyContent: "center" }}>
                <Chip
                  label={`${distance} km`}
                  size="medium"
                  color="primary"
                  sx={{ fontWeight: "bold", fontSize: "15px" }}
                />
              </Box>
            </Box>

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
                <CalendarTodayIcon
                  sx={{ color: "primary.main", mr: 1, fontSize: 20 }}
                />
                <Typography
                  fontWeight="500"
                  color="text.primary"
                >
                  Date
                </Typography>
              </Box>

              <TextField
                type="date"
                value={date}
                onChange={handleDateChange}
                fullWidth
                variant="outlined"
                size="small"
                InputLabelProps={{
                  shrink: true,
                }}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    borderRadius: 1.5,
                  },
                }}
              />
            </Box>

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
                  fontWeight="500"
                  color="text.primary"
                >
                  Category
                </Typography>
              </Box>

              <FormControl
                fullWidth
                size="small"
              >
                <Select
                  value={category}
                  onChange={handleCategoryChange}
                  displayEmpty
                  sx={{
                    borderRadius: 1.5,
                  }}
                >
                  <MenuItem value="all">All Categories</MenuItem>
                  <MenuItem value="prescription">Prescription Drugs</MenuItem>
                  <MenuItem value="otc">Over-the-Counter</MenuItem>
                  <MenuItem value="supplements">Supplements</MenuItem>
                  <MenuItem value="skincare">Skincare</MenuItem>
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
                      border: "1px solid rgba(0, 0, 0, 0.12)",
                      color: textPrimary,
                      "&:hover": {
                        backgroundColor: "rgba(0, 0, 0, 0.04)",
                        border: "1px solid rgba(0, 0, 0, 0.12)",
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
                    onClick={handleApplyFilters}
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
