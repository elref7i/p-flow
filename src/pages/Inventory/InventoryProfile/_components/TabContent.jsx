/* eslint-disable react/prop-types */
import { Box, Typography } from "@mui/material";
import InventoryIcon from "@mui/icons-material/Inventory";
import DrugCardSkeleton from "../../../../components/Common/Loading/DrugCardSkeleton";
import InfiniteScrollComponent from "../../../../components/infinite-scroll";

const TabContent = ({
  activeTab,
  dataInfo,
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
          <InfiniteScrollComponent
            page={"inventoryProfile"}
            layoutGrid={4}
            fetchNextPage={fetchNextPage}
            flattenData={flattenedDrugs}
            total={totalItems}
            hasNextPage={hasNextPage}
          />
        ) : (
          <DrugCardSkeleton count={6} />
        ))}

      {activeTab === 1 && (
        <Box sx={{ textAlign: "center", py: 2 }}>
          {!LoadingOwnDrugs ? (
            <InfiniteScrollComponent
              page={"inventoryProfile"}
              layoutGrid={4}
              fetchNextPage={fetchNextPage}
              flattenData={flattenedDrugs}
              total={totalItems}
              hasNextPage={hasNextPage}
            />
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
