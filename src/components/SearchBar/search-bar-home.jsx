/* eslint-disable react/prop-types */

import { Box, InputAdornment, TextField } from "@mui/material";
import Filter from "../Filter/Filter";
import { useState } from "react";
import FilterListIcon from "@mui/icons-material/FilterList";
import { useQueryParams } from "../../context/params.context";
import { Search } from "@mui/icons-material";
import { motion } from "framer-motion";

export default function SearchBarHome({
  onSearchStart,
  onSearchComplete,
  onSearchReset,
}) {
  //States
  const [openFilter, setOpenFilter] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  //Context
  const { setSearchParams, setShowDrugsAtHome } = useQueryParams();

  //Functions
  const handleOpenFilter = () => setOpenFilter(true);
  const handleCloseFilter = () => setOpenFilter(false);

  const handleSearch = (searchValue) => {
    // Check if search value is empty
    if (searchValue.trim() === "") {
      // Reset everything when input is empty
      setShowDrugsAtHome(false);
      setSearchQuery(false);
      if (onSearchReset) {
        onSearchReset();
      }
      return;
    }

    // Notify parent that search is starting
    if (onSearchStart) {
      onSearchStart();
    }

    setSearchParams({ keyword: searchValue });
    setSearchQuery(true);
    setShowDrugsAtHome(true);

    // Simulate search completion after a brief delay
    setTimeout(() => {
      if (onSearchComplete) {
        onSearchComplete();
      }
    }, 1500);
  };

  const handleBlur = (e) => {
    if (e.target.value.trim() === "") {
      setShowDrugsAtHome(false);
      setSearchQuery(false);
      if (onSearchReset) {
        onSearchReset();
      }
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      // Force search completion on Enter
      setTimeout(() => {
        if (onSearchComplete) {
          onSearchComplete();
        }
      }, 1000);
    }
  };

  return (
    <>
      <Box sx={{ position: "relative", flex: 1 }}>
        <TextField
          fullWidth
          type="search"
          variant="outlined"
          placeholder="Search by name, active ingredient, or condition..."
          onBlur={handleBlur}
          onKeyPress={handleKeyPress}
          onChange={(e) => {
            handleSearch(e.target.value);
          }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <motion.div
                  animate={{
                    rotate: searchQuery ? [0, 360] : 0,
                    scale: searchQuery ? [1, 1.2, 1] : 1,
                  }}
                  transition={{ duration: 0.6 }}
                >
                  <Search
                    sx={{
                      color: "primary.main",
                      fontSize: 28,
                    }}
                  />
                </motion.div>
              </InputAdornment>
            ),
            endAdornment: (
              <Box
                sx={{
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                }}
                onClick={handleOpenFilter}
              >
                <FilterListIcon color="action" />
              </Box>
            ),
          }}
          sx={{
            "& .MuiOutlinedInput-root": {
              borderRadius: 4,
              fontSize: "1.2rem",
              py: 0.5,
              background: "transparent",
              transition: "all 0.3s ease",
              "&:hover": {
                boxShadow: 8,
                transform: "translateY(-2px)",
              },
              "&.Mui-focused": {
                boxShadow: "0 15px 35px 8",
                transform: "translateY(-3px)",
              },
            },
          }}
        />
      </Box>
      <Filter
        openFilter={openFilter}
        handleCloseFilter={handleCloseFilter}
        handleOpenFilter={handleOpenFilter}
        setParams={setSearchParams}
      />
    </>
  );
}
