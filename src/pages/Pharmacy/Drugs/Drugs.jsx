import { Box, Button, Typography } from "@mui/material";
import { useTypeContext } from "../../../context/UserType.context";
import { useEffect, useState } from "react";
import { useInfiniteDrugs } from "../../../lib/hooks/useDrugAction";
import { Helmet } from "react-helmet";
import FilterListIcon from "@mui/icons-material/FilterList";
import Filter from "../../../components/Filter/Filter";
import { TextField } from "@mui/material";
import { useDebounce } from "use-debounce";
import DrugCardSkeleton from "../../../components/Common/Loading/DrugCardSkeleton";
import { useThemeConstants } from "../../../lib/constants/theme.constant";
import useSarchHistory from "../../../lib/hooks/useSearchHistory";
import SearchAi from "../../../components/modal-ai/modal-ai";
import {
  flattenedDrugs,
  totalItems,
} from "../../../lib/constants/infinte-data";
import InfiniteScrollComponent from "../../../components/infinite-scroll";
import ErrorPage from "../../../components/Common/error-page";
import EmptyPage from "../../../components/Common/empty-page";
export default function Drugs() {
  //states
  const [params, setParams] = useState({ limit: 45 });
  const [openFilter, setOpenFilter] = useState(false);
  const [openHistory, setOpenHistory] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  //Contexts
  const { token } = useTypeContext();

  // Debounce
  const [debouncedParams] = useDebounce(params, 500);

  const {
    data,
    fetchNextPage,
    hasNextPage,
    isLoading,
    isFetched,
    isError,
    error,
  } = useInfiniteDrugs(token, debouncedParams);

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
  const total = totalItems({ data });

  // Flatten the data from all pages
  const flattenData = flattenedDrugs({ data });

  if (isError)
    return (
      <ErrorPage
        errorMessage={error.message}
        errorCode={error.status}
        errorType={error.status}
      />
    );

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
        <InfiniteScrollComponent
          page={"drugs"}
          layoutGrid={4}
          fetchNextPage={fetchNextPage}
          flattenData={flattenData}
          total={total}
          hasNextPage={hasNextPage}
        />
      ) : (
        <DrugCardSkeleton count={6} />
      )}
      {flattenData.length <= 0 && (
        <EmptyPage
          title={"No Drugs Found"}
          subtitle={" We couldn’t find any matching drugs"}
          customMessage={"Try searching with a different name or category"}
        />
      )}
    </>
  );
}
