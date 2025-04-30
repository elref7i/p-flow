import { Box, Button, Grid2 } from "@mui/material";
import DrugCard from "../../../components/PharmacyComonents/DrugCard/DrugCard";
import { useTypeContext } from "../../../context/UserType.context";
import { useState } from "react";
import { useInfiniteDrugs } from "../../../lib/hooks/useDrugAction";
import { Helmet } from "react-helmet";
import FilterListIcon from "@mui/icons-material/FilterList";
import Filter from "../../../components/Filter/Filter";
import { TextField } from "@mui/material";
import InfiniteScroll from "react-infinite-scroll-component";
import { useDebounce } from "use-debounce";
import DrugCardSkeleton from "../../../components/Common/Loading/DrugCardSkeleton";
import LoadingSpinner from "../../../components/Common/Loading/LoadingSpinner";
export default function Drugs() {
  //states
  const [params, setParams] = useState({});
  const [openFilter, setOpenFilter] = useState(false);

  //Contexts
  const { token } = useTypeContext();

  // Debounce
  const [debouncedParams] = useDebounce(params, 500);

  const { data, fetchNextPage, hasNextPage, isLoading, isFetched } =
    useInfiniteDrugs(token, debouncedParams);

  //Fuctions
  const handleOpenFilter = () => setOpenFilter(true);

  const handleCloseFilter = () => setOpenFilter(false);

  const handleSearch = (searchValue) => {
    setParams((prev) => ({ ...prev, keyword: searchValue }));
  };

  console.log(data);

  const totalItems =
    data?.pages.reduce((total, page) => {
      return total + (page.data?.length || 0);
    }, 0) || 0;

  // Flatten the data from all pages
  const flattenedDrugs = data?.pages.flatMap((page) => page.data || []) || [];

  // if (error) return <ErrorPage />;
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
          setParams={setParams}
        />
      </Box>
      <Box
        sx={{
          display: { xs: "flex", md: "flex", lg: "none" },
          justifyContent: "center",
          mb: 2,
        }}
      ></Box>

      {!isLoading ? (
        <InfiniteScroll
          dataLength={totalItems}
          next={fetchNextPage}
          hasMore={hasNextPage}
          loader={<DrugCardSkeleton count={3} />}
          endMessage={
            <p style={{ textAlign: "center", padding: "20px" }}>
              <b>You have seen all drugs</b>
              <Button variant="contained">Search By AI</Button>
            </p>
          }
          scrollThreshold={0.8}
          style={{ overflow: "hidden" }}
        >
          <Grid2
            container
            spacing={4}
            px={3}
            py={2}
          >
            {isFetched ? (
              flattenedDrugs.map((drug) => (
                <Grid2
                  key={drug._id}
                  size={{ xs: 12, md: 6, lg: 4 }}
                >
                  <DrugCard
                    dataInfo={drug}
                    checkPage={true}
                  />
                </Grid2>
              ))
            ) : (
              <LoadingSpinner />
            )}
          </Grid2>
        </InfiniteScroll>
      ) : (
        <DrugCardSkeleton count={6} />
      )}
    </>
  );
}
