import { Box, TextField } from "@mui/material";
import { useThemeConstants } from "../../lib/constants/theme.constant";
import Filter from "../Filter/Filter";
import { useState } from "react";
import FilterListIcon from "@mui/icons-material/FilterList";
import { useQueryParams } from "../../context/params.context";

export default function SearchBar() {
  //States
  const [openFilter, setOpenFilter] = useState(false);

  //Context
  const { setSearchParams } = useQueryParams();

  //Themes
  const { shadow2, background } = useThemeConstants();

  //Fuctions
  const handleOpenFilter = () => setOpenFilter(true);

  const handleCloseFilter = () => setOpenFilter(false);

  const handleSearch = (searchValue) => {
    setSearchParams((prev) => ({ ...prev, keyword: searchValue }));
  };

  return (
    <>
      <Box sx={{ position: "relative", flex: 1 }}>
        <TextField
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
