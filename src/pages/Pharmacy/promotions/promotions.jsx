import { useTypeContext } from "../../../context/UserType.context";
import { useInfinitePromotions } from "../../../lib/hooks/usepromotion";
import CardPromotionSkeleton from "../../../components/Common/Loading/promotion-skeleton";
import {
  flattenedDrugs,
  totalItems,
} from "../../../lib/constants/infinte-data";
import InfiniteScrollComponent from "../../../components/infinite-scroll";
import ErrorPage from "../../../components/Common/error-page";
import EmptyPage from "../../../components/Common/empty-page";
import { Helmet } from "react-helmet";

export default function Promotions() {
  const { token } = useTypeContext();
  const {
    data: promotionalMedicines,
    isLoading,
    fetchNextPage,
    hasNextPage,
    isFetched,
    isError,
    error,
  } = useInfinitePromotions(token, {});

  console.log(promotionalMedicines);

  if (isLoading) return <CardPromotionSkeleton />;

  // Total Items
  const total = totalItems({ data: promotionalMedicines });

  // Flatten the data from all pages
  const flattenData = flattenedDrugs({ data: promotionalMedicines });

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
        <title>Promotions</title>
        <meta
          name="description"
          content="Manage active drug promotions and discounts in your pharmacy. Attract more customers with special offers using P-Flow."
        />
        <meta
          name="keywords"
          content="pharmacy promotions, drug discounts, special offers, pharmacy deals, P-Flow system"
        />

        <meta property="og:title" content="Promotions | P-Flow  System" />
        <meta
          property="og:description"
          content="Create and manage drug promotions to increase customer engagement and boost sales with P-Flow."
        />
      </Helmet>

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
      {flattenData.length <= 0 && (
        <EmptyPage
          title={"No Offers Right Now"}
          subtitle={"There are currently no active promotions"}
          customMessage={" Stay tuned for upcoming deals and discounts"}
        />
      )}
    </>
  );
}
