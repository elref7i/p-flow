import { Box, InputAdornment, TextField } from "@mui/material";
import Filter from "../Filter/Filter";
import { useState } from "react";
import FilterListIcon from "@mui/icons-material/FilterList";
import { useQueryParams } from "../../context/params.context";
import { Search } from "@mui/icons-material";
import { motion } from "framer-motion";

export default function SearchBar() {
  //States
  const [openFilter, setOpenFilter] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  //Context
  const { setSearchParams, setShowDrugsAtHome } = useQueryParams();

  //Fuctions
  const handleOpenFilter = () => setOpenFilter(true);

  const handleCloseFilter = () => setOpenFilter(false);

  const handleSearch = (searchValue) => {
    setSearchParams({ keyword: searchValue });
    setSearchQuery(true);
    setShowDrugsAtHome(true);
  };

  const handleBlur = (e) => {
    if (e.target.value.trim() === "") {
      setShowDrugsAtHome(false);
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
        {/* <TextField
          fullWidth
          placeholder="Search drugs..."
          variant="filled"
          type="search"
          sx={{
            borderRadius: "10px",
            boxShadow: shadow2,
            overflow: "hidden",
            background: background,
            "& input::placeholder": {
              fontSize: "18px",
              fontWeight: "bold",
            },
          }}
          onChange={(e) => {
            handleSearch(e.target.value);
          }}
          InputProps={{
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
        /> */}
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
