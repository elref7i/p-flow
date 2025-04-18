"use client";

import {
  Box,
  Grid2,
  Pagination,
  PaginationItem,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import DrugCard from "../../../components/PharmacyComonents/DrugCard/DrugCard";
import LoadingSpinner from "../../../components/Common/Loading/LoadingSpinner";
import { useTypeContext } from "../../../context/UserType.context";
import { useState } from "react";
import { useDrugs } from "../../../lib/hooks/useDrugAction";
import { Helmet } from "react-helmet";
import FilterListIcon from "@mui/icons-material/FilterList";
import Filter from "../../../components/Filter/Filter";
import { TextField } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

// import FilterListIcon from "@mui/icons-material/FilterList";
// import Filter from "../../../components/Filter/Filter";

export default function Drugs() {
  const { token } = useTypeContext();
  const [params, setParams] = useState({});
  const { data, isLoading } = useDrugs(token, params);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const [openFilter, setOpenFilter] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [page, setPage] = useState(1);

  // Assuming each page has 9 items
  const itemsPerPage = 9;
  const totalPages = data?.data
    ? Math.ceil(data.data.length / itemsPerPage)
    : 0;

  const handleOpenFilter = () => setOpenFilter(true);
  const handleCloseFilter = () => setOpenFilter(false);

  const handleApplyFilters = (filterParams) => {
    setParams({
      ...params,
      ...filterParams,
      search: searchTerm,
    });
    setPage(1); // Reset to first page when filters change
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    setParams({
      ...params,
      search: e.target.value,
    });
    setPage(1); // Reset to first page when search changes
  };

  const handlePageChange = (event, value) => {
    setPage(value);
    // If your API supports pagination, you would update params here
    // setParams({
    //   ...params,
    //   page: value,
    // })

    // Scroll to top when page changes
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // Calculate which items to display based on current page
  const displayedData = data?.data
    ? data.data.slice((page - 1) * itemsPerPage, page * itemsPerPage)
    : [];

  console.log(data);

  if (isLoading) return <LoadingSpinner />;

  return (
    <>
      <Helmet>
        <title>Pharmacy Drugs </title>
        <meta
          name="description"
          content="Browse a wide range of pharmacy drugs, including prescriptions and over-the-counter medicines."
        />
        <meta
          name="keywords"
          content="pharmacy, drugs, medicine, healthcare, prescription, OTC"
        />
      </Helmet>
      <Box sx={{ mb: 3, mt: 2, width: "100%" }}>
        <Box sx={{ position: "relative", width: "100%" }}>
          <TextField
            fullWidth
            placeholder="Search drugs..."
            variant="outlined"
            value={searchTerm}
            onChange={handleSearch}
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
          open={openFilter}
          handleClose={handleCloseFilter}
          applyFilters={handleApplyFilters}
        />
      </Box>
      <Box
        sx={{
          display: { xs: "flex", md: "flex", lg: "none" },
          justifyContent: "center",
          mb: 2,
        }}
      ></Box>
      <Grid2
        py={2}
        spacing={4}
        container
        // sx={{ bgcolor: "red" }}
      >
        {displayedData.map((drug) => (
          <Grid2
            key={drug._id}
            size={{ xs: 12, md: 6, lg: 4 }}
          >
            <DrugCard
              dataInfo={drug}
              checkPage={true}
            />
          </Grid2>
        ))}
      </Grid2>

      {/* Pagination Component */}
      {totalPages > 1 && (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            mt: 4,
            py: 2,
          }}
        >
          <Box
            sx={{
              bgcolor: "rgba(0, 0, 0, 0.02)",
              borderRadius: 3,
              py: 1.5,
              px: { xs: 2, sm: 3 },
              border: "1px solid rgba(0, 0, 0, 0.04)",
              boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.05)",
            }}
          >
            <Pagination
              count={totalPages}
              page={page}
              onChange={handlePageChange}
              variant="outlined"
              shape="rounded"
              size={isMobile ? "small" : "medium"}
              siblingCount={isMobile ? 0 : 1}
              renderItem={(item) => (
                <PaginationItem
                  slots={{ previous: ArrowBackIcon, next: ArrowForwardIcon }}
                  {...item}
                  sx={{
                    borderRadius: 1.5,
                    mx: 0.3,
                    border: item.selected
                      ? "none"
                      : "1px solid rgba(0, 0, 0, 0.12)",
                    bgcolor: item.selected ? "primary.main" : "transparent",
                    color: item.selected ? "white" : "text.primary",
                    "&:hover": {
                      bgcolor: item.selected
                        ? "primary.dark"
                        : "rgba(0, 0, 0, 0.04)",
                    },
                    "&.Mui-selected": {
                      fontWeight: "bold",
                    },
                    "& .MuiPaginationItem-icon": {
                      fontSize: isMobile ? 18 : 22,
                    },
                  }}
                />
              )}
            />
          </Box>
        </Box>
      )}
    </>
  );
}
