"use client";

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
  const {
    debouncedParams,
    showDrugaAtHome,
    shouldScrollToResults,
    setShouldScrollToResults,
  } = useQueryParams();

  const { data, fetchNextPage, hasNextPage, isLoading, isFetched } =
    useInfiniteDrugs(token, debouncedParams);

  const total = totalItems({ data });

  // Flatten the data from all pages
  const flattenData = flattenedDrugs({ data });

  // Handle scrolling to results
  useEffect(() => {
    if (shouldScrollToResults && sectionRef.current && !isLoading) {
      // Add a small delay to ensure the content is rendered
      const scrollTimer = setTimeout(() => {
        sectionRef.current.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
        // Reset the scroll trigger
        setShouldScrollToResults(false);
      }, 200);

      return () => clearTimeout(scrollTimer);
    }
  }, [shouldScrollToResults, isLoading, setShouldScrollToResults]);

  // Also handle the original showDrugaAtHome scroll (for subsequent searches)
  useEffect(() => {
    if (showDrugaAtHome && sectionRef.current && !shouldScrollToResults) {
      sectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [showDrugaAtHome, shouldScrollToResults]);

  if (!showDrugaAtHome) return null;

  return (
    <>
      {!isLoading && isFetched ? (
        <Box
          ref={sectionRef}
          mx={"auto"}
          maxWidth={"lg"}
          pt={3}
          id="search-results-section" // Added ID for better targeting
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
        <Box pt={3}>
          <DrugCardSkeleton count={6} />
        </Box>
      )}
      {flattenData.length <= 0 && isFetched && (
        <Box
          pt={3}
          textAlign="center"
        >
          <p>No drugs found matching your search.</p>
        </Box>
      )}
    </>
  );
}
