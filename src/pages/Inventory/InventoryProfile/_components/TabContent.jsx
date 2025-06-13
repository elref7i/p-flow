/* eslint-disable react/prop-types */
import { Box, Typography, Grid2 } from "@mui/material";
import InventoryIcon from "@mui/icons-material/Inventory";
import { motion } from "framer-motion";
import DrugCard from "../../../../components/PharmacyComonents/DrugCard/DrugCard";
import DrugCardSkeleton from "../../../../components/Common/Loading/DrugCardSkeleton";
import InfiniteScroll from "react-infinite-scroll-component";
import { Button } from "react-scroll";
import LoadingSpinner from "../../../../components/Common/Loading/LoadingSpinner";

const TabContent = ({
  activeTab,
  dataInfo,
  isFetched,
  fetchNextPage,
  hasNextPage,
  LoadingOwnDrugs,
}) => {
  console.log("dataInfo", dataInfo);

  // Flatten the data from all pages
  const flattenedDrugs =
    dataInfo?.pages?.flatMap((page) => page.data.drugs || []) || [];

  const totalItems =
    dataInfo?.pages?.reduce((total, page) => {
      return total + (page.data.drugs?.length || 0);
    }, 0) || 0;

  console.log("flattenedDrugs", flattenedDrugs);
  console.log("totalItems", totalItems);

  return (
    <>
      {activeTab === 0 &&
        (!LoadingOwnDrugs ? (
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
              py={2}
            >
              {isFetched ? (
                flattenedDrugs.map((drug) => (
                  <Grid2
                    component={motion.div}
                    animate="visible"
                    key={drug._id}
                    size={{ xs: 12, md: 6, lg: 4 }}
                  >
                    <DrugCard
                      dataInfo={drug}
                      checkPage={false}
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
        ))}

      {activeTab === 1 && (
        <Box sx={{ textAlign: "center", py: 2 }}>
          {!LoadingOwnDrugs ? (
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
                py={2}
              >
                {isFetched ? (
                  flattenedDrugs.map((drug) => (
                    <Grid2
                      component={motion.div}
                      animate="visible"
                      key={drug._id}
                      size={{ xs: 12, md: 6, lg: 4 }}
                    >
                      <DrugCard
                        dataInfo={drug}
                        checkPage={false}
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
        </Box>
      )}

      {activeTab === 2 && (
        <Box sx={{ textAlign: "center", py: 6 }}>
          <InventoryIcon
            sx={{ fontSize: 60, color: "text.secondary", mb: 2 }}
          />
          <Typography
            variant="h6"
            color="text.secondary"
          >
            Inventory Statistics
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
          >
            This feature is coming soon
          </Typography>
        </Box>
      )}
    </>
  );
};

export default TabContent;
