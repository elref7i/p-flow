import { useTypeContext } from "../../../context/UserType.context";
import { useInfinitePromotions } from "../../../lib/hooks/usepromotion";
import CardPromotionSkeleton from "../../../components/Common/Loading/promotion-skeleton";
import {
  flattenedDrugs,
  totalItems,
} from "../../../lib/constants/infinte-data";
import InfiniteScrollComponent from "../../../components/infinite-scroll";

export default function Promotions() {
  const { token } = useTypeContext();
  const {
    data: promotionalMedicines,
    isLoading,
    fetchNextPage,
    hasNextPage,
    isFetched,
  } = useInfinitePromotions(token, {});

  console.log(promotionalMedicines);

  if (isLoading) return <CardPromotionSkeleton />;

  // Total Items
  const total = totalItems({ data: promotionalMedicines });

  // Flatten the data from all pages
  const flattenData = flattenedDrugs({ data: promotionalMedicines });

  console.log(flattenData);

  return (
    <>
      {!isLoading && isFetched ? (
        <InfiniteScrollComponent
          page={"offers"}
          fetchNextPage={fetchNextPage}
          flattenData={flattenData}
          total={total}
          hasNextPage={hasNextPage}
          layoutGrid={3}
        />
      ) : (
        <CardPromotionSkeleton />
      )}
    </>
  );
}
