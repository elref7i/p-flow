/* eslint-disable react/prop-types */
import { Box, Typography } from "@mui/material";
import InventoryIcon from "@mui/icons-material/Inventory";
import DrugCardSkeleton from "../../../../components/Common/Loading/DrugCardSkeleton";
import InfiniteScrollComponent from "../../../../components/infinite-scroll";
import {
  flattenedDrugs,
  totalItems,
} from "../../../../lib/constants/infinte-data";

const TabContent = ({
  activeTab,
  dataInfo,
  fetchNextPage,
  hasNextPage,
  LoadingOwnDrugs,
  promotionData,
  fetchNextPromotion,
  loadingPromotion,
  hasNextPagePromotion,
}) => {
  // Flatten the data from all pages
  const flattenedDataDrugs =
    dataInfo?.pages?.flatMap((page) => page.data.drugs || []) || [];

  const flattenedPromotion = flattenedDrugs({ data: promotionData });

  const totalItemsDrugs =
    dataInfo?.pages?.reduce((total, page) => {
      return total + (page.data.drugs?.length || 0);
    }, 0) || 0;

  const totalItemsPromotion = totalItems({ data: promotionData });

  console.log("flattenedDrugsR", flattenedPromotion);
  // console.log("totalItems", totalItems);

  return (
    <>
      {activeTab === 0 &&
        (!LoadingOwnDrugs ? (
          <InfiniteScrollComponent
            page={"inventoryProfile"}
            layoutGrid={4}
            fetchNextPage={fetchNextPage}
            flattenData={flattenedDataDrugs}
            total={totalItemsDrugs}
            hasNextPage={hasNextPage}
          />
        ) : (
          <DrugCardSkeleton count={6} />
        ))}

      {activeTab === 1 && (
        <Box sx={{ textAlign: "center", py: 2 }}>
          {!loadingPromotion ? (
            <InfiniteScrollComponent
              page={"offers"}
              layoutGrid={4}
              fetchNextPage={fetchNextPromotion}
              flattenData={flattenedPromotion}
              total={totalItemsPromotion}
              hasNextPage={hasNextPagePromotion}
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
