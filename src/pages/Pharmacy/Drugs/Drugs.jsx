import { Box, Button, Grid2, Typography } from "@mui/material";
import DrugCard from "../../../components/PharmacyComonents/DrugCard/DrugCard";
import { useTypeContext } from "../../../context/UserType.context";
import { useEffect, useState } from "react";
import { useInfiniteDrugs } from "../../../lib/hooks/useDrugAction";
import { Helmet } from "react-helmet";
import FilterListIcon from "@mui/icons-material/FilterList";
import Filter from "../../../components/Filter/Filter";
import { TextField } from "@mui/material";
import InfiniteScroll from "react-infinite-scroll-component";
import { useDebounce } from "use-debounce";
import DrugCardSkeleton from "../../../components/Common/Loading/DrugCardSkeleton";
import { useThemeConstants } from "../../../lib/constants/theme.constant";
import useSarchHistory from "../../../lib/hooks/useSearchHistory";
import SearchAi from "../../../components/modal-ai/modal-ai";
export default function Drugs() {
  //states
  const [params, setParams] = useState({});
  const [openFilter, setOpenFilter] = useState(false);
  const [openHistory, setOpenHistory] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  //Contexts
  const { token } = useTypeContext();

  // Debounce
  const [debouncedParams] = useDebounce(params, 500);

  const { data, fetchNextPage, hasNextPage, isLoading, isFetched } =
    useInfiniteDrugs(token, debouncedParams);

  //Themes
  const { typography } = useThemeConstants();

  //Hooks
  const {
    history: searchHistory,
    save: saveSearchToHistory,
    remove: deleteSearchItem,
    clear: clearAllHistory,
  } = useSarchHistory("serachHistory");

  //Fuctions
  const handleOpenFilter = () => setOpenFilter(true);

  const handleCloseFilter = () => setOpenFilter(false);

  const handleSearchOnclick = () => {
    setParams((prev) => ({ ...prev, keyword: searchValue }));
    saveSearchToHistory(searchValue);
  };

  const handleSearch = (e) => {
    setParams((prev) => ({ ...prev, keyword: e.target.value }));
    setSearchValue(e.target.value);
    setOpenHistory(true);
    // saveSearchToHistory0(searchValue);
  };

  //handlerSearchVlaueHistory
  const handleSearchHistory = (keyword) => {
    setParams((prev) => ({ ...prev, keyword: keyword }));
    setSearchValue(keyword);
    setOpenHistory(false);
  };

  //Effects
  useEffect(() => {
    window.addEventListener("click", (e) => {
      if (e.target.closest(".MuiTextField-root") === null) {
        setOpenHistory(false);
      }
    });
    return () => {
      window.removeEventListener("click", (e) => {
        if (e.target.closest(".MuiTextField-root") === null) {
          setOpenHistory(false);
        }
      });
    };
  }, []);

  console.log(data);

  // Total Items
  const totalItems =
    data?.pages.reduce((total, page) => {
      return total + (page.data?.length || 0);
    }, 0) || 0;

  // Flatten the data from all pages
  const flattenedDrugs = data?.pages.flatMap((page) => page.data || []) || [];
  console.log(flattenedDrugs);

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

      <Box sx={{ mb: 1, mt: 5, width: "100%" }}>
        <SearchAi />
        <Box
          sx={{
            position: "relative",
            width: "100%",
            mx: "auto",
            display: "flex",
            gap: 2,
            alignItems: "center",
          }}
        >
          <TextField
            fullWidth
            value={searchValue}
            placeholder="Search Drugs"
            variant="outlined"
            autoComplete="false"
            type="search"
            onFocus={() => setOpenHistory(true)}
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
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              gap: 1,
              alignItems: "center",
              cursor: "pointer",
            }}
          >
            <Button
              sx={{
                fontSize: typography.button.fontSize,
                fontWeight: typography.button.fontWeight,
                lineHeight: typography.button.lineHeight,
                py: 1.5,
                px: 5,
              }}
              variant="contained"
              onClick={handleSearchOnclick}
            >
              Search
            </Button>
          </Box>

          {/* Search History */}
          {openHistory && (
            <Box
              sx={{
                background: "#fff",
                boxShadow: 1,
                borderRadius: 1,
                mt: 1,
                p: 1,
                maxHeight: 200,
                overflowY: "auto",
                position: "absolute",
                top: 50,
                zIndex: 10,
                display: openHistory ? "block" : "none",
                width: "80%",
              }}
            >
              {searchHistory.length > 0 ? (
                <>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      mb: 1,
                    }}
                  >
                    <Box fontWeight="bold">Recent Searches</Box>
                    <Button
                      size="small"
                      onClick={clearAllHistory}
                      sx={{ textTransform: "none" }}
                      color="error"
                    >
                      Clear All
                    </Button>
                  </Box>
                  {searchHistory.map((item, index) => (
                    <Box
                      key={index}
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        p: 1,
                        "&:hover": { backgroundColor: "#f9f9f9" },
                      }}
                    >
                      <Box
                        onClick={() => handleSearchHistory(item)}
                        sx={{ cursor: "pointer", flexGrow: 1 }}
                      >
                        {item}
                      </Box>
                      <Button
                        onClick={() => deleteSearchItem(item)}
                        size="small"
                        color="error"
                      >
                        ✕
                      </Button>
                    </Box>
                  ))}
                </>
              ) : (
                <Typography textAlign={"center"}>
                  Try searching for people, lists, or keywords
                </Typography>
              )}
            </Box>
          )}
        </Box>
        <Filter
          openFilter={openFilter}
          handleCloseFilter={handleCloseFilter}
          handleOpenFilter={handleOpenFilter}
          setParams={setParams}
        />
      </Box>

      {!isLoading && isFetched ? (
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
          style={{ overflow: "visible" }}
        >
          <Grid2
            container
            spacing={4}
            py={2}
          >
            {flattenedDrugs.map((drug) => (
              <Grid2
                key={drug._id}
                size={{ xs: 12, md: 6, lg: 4 }}
              >
                <DrugCard
                  dataInfo={drug}
                  checkPage={true}
                  checkdistance={true}
                />
              </Grid2>
            ))}
          </Grid2>
        </InfiniteScroll>
      ) : (
        <DrugCardSkeleton count={6} />
      )}
    </>
  );
}
