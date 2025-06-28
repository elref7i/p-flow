import { useInfiniteDrugs } from "../../../../lib/hooks/useDrugAction";
import { useQueryParams } from "../../../../context/params.context";
import {
  flattenedDrugs,
  totalItems,
} from "../../../../lib/constants/infinte-data";
import InfiniteScrollComponent from "../../../../components/infinite-scroll";
import { Box } from "@mui/material";
import DrugCardSkeleton from "../../../../components/Common/Loading/DrugCardSkeleton";
import { useTypeContext } from "../../../../context/UserType.context";
import { useEffect, useRef } from "react";

export default function HomeDrugs() {
  //Hooks
  const sectionRef = useRef(null);

  //Context
  const { token } = useTypeContext();

  //Queries
  const { debouncedParams, showDrugaAtHome } = useQueryParams();

  const { data, fetchNextPage, hasNextPage, isLoading, isFetched } =
    useInfiniteDrugs(token, debouncedParams);
  const total = totalItems({ data });

  // Flatten the data from all pages
  const flattenData = flattenedDrugs({ data });

  useEffect(() => {
    if (showDrugaAtHome && sectionRef.current) {
      sectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [showDrugaAtHome]);

  if (!showDrugaAtHome) return;
  return (
    <>
      {!isLoading && isFetched ? (
        <Box
          ref={sectionRef}
          mx={"auto"}
          maxWidth={"lg"}
          pt={3}
        >
          <InfiniteScrollComponent
            page={"drugs"}
            layoutGrid={4}
            fetchNextPage={fetchNextPage}
            flattenData={flattenData}
            total={total}
            hasNextPage={hasNextPage}
          />
        </Box>
      ) : (
        <DrugCardSkeleton count={6} />
      )}
      {flattenData.length <= 0 && ""}
    </>
  );
}
