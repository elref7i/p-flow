/* eslint-disable react/prop-types */
import DrugCardSkeleton from "./Common/Loading/DrugCardSkeleton";
import { Grid2 } from "@mui/material";
import DrugCard from "./PharmacyComonents/DrugCard/DrugCard";
import InfiniteScroll from "react-infinite-scroll-component";
import CardPromotion from "./card-promotion";
import CardPromotionSkeleton from "./Common/Loading/promotion-skeleton";

export default function InfiniteScrollComponent({
  page,
  flattenData,
  fetchNextPage,
  hasNextPage,
  total,
  layoutGrid,
}) {
  return (
    <InfiniteScroll
      dataLength={total}
      next={fetchNextPage}
      hasMore={hasNextPage}
      loader={
        page === "drugs" ? (
          <DrugCardSkeleton count={3} />
        ) : (
          <CardPromotionSkeleton />
        )
      }
      scrollThreshold={0.8}
      style={{ overflow: "visible" }}
    >
      <Grid2
        container
        spacing={4}
        py={2}
      >
        {flattenData.map((drug) => (
          <Grid2
            key={drug._id}
            size={{ xs: 12, md: 6, lg: layoutGrid }}
          >
            {page === "drugs" ? (
              <DrugCard
                dataInfo={drug}
                checkPage={true}
                checkdistance={true}
                checkActive={true}
              />
            ) : page === "offers" ? (
              <CardPromotion drug={drug} />
            ) : (
              <DrugCard
                dataInfo={drug}
                checkPage={false}
              />
            )}
          </Grid2>
        ))}
      </Grid2>
    </InfiniteScroll>
  );
}
