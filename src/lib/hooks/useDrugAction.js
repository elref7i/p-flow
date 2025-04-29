import {
  useInfiniteQuery,
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";
import {
  addDrug,
  deleteDrug,
  getAllDrugs,
  getAllOwnDrugs,
  getDrugsspecificInventory,
  getSpecificDrug,
  updateDrug,
} from "../api/drugApi";
import toast from "react-hot-toast";

//* Get all Drugs

export const useInfiniteDrugs = (token, params = {}) => {
  return useInfiniteQuery({
    queryKey: ["infinite-drugs", params],
    queryFn: ({ pageParam = 1 }) =>
      getAllDrugs(token, { ...params, page: pageParam }),
    getNextPageParam: (lastPage) => {
      return lastPage.paginationResult?.next || undefined;
    },
    keepPreviousData: false,
    refetchOnWindowFocus: false,
    staleTime: 5 * 60 * 1000,
  });
};

//*Testing
/* export const useDrugs = (token, params = {}) => {
  return useQuery({
    queryKey: ["drugs", params],
    queryFn: () => getAllDrugs(token, params), // Pass all params directly
    keepPreviousData: true,
    refetchOnWindowFocus: false,
    staleTime: 5 * 60 * 1000,
    cacheTime: 5 * 60 * 1000,
  });
};
 const [page, setPage] = useState(1);

  const pagination = data?.paginationResult || {};
  const totalPages = pagination.numberOfPages || 1;
  const currentPage = pagination.currentPage || 1;
  const hasNextPage = Boolean(pagination.next);
  const hasPrevPage = Boolean(pagination.prev);
  const numberOfPages = data?.pages[0]?.paginationResult?.numberOfPages || 1;
  const handlePageChange = (event, newPage) => {
    setPage(newPage);
  };
<Pagination
          count={totalPages}
          page={currentPage}
          onChange={handlePageChange}
          color="primary"
          showFirstButton
          showLastButton
          hidePrevButton={!hasPrevPage}
          hideNextButton={!hasNextPage}
        /> */

//* get all drugs for specific inventory
export const useDrugsSpecificInventory = ({ drugId }) => {
  return useQuery({
    queryKey: ["drugsSpecificInventory", drugId],
    queryFn: () => getDrugsspecificInventory({ drugId }),
    keepPreviousData: true,
    refetchOnWindowFocus: false,
    cacheTime: 1 * 60 * 1000,
  });
};

//*  get specific Drug
export const useSpecificDrug = ({ token, drugId }) => {
  return useQuery({
    queryKey: ["SpecificDrug", drugId],
    queryFn: () => getSpecificDrug({ token, drugId }),
    cacheTime: 1 * 60 * 1000,
    refetchOnWindowFocus: false,
    keepPreviousData: true,
  });
};

//* Add Drug
export const useAddDrug = () => {
  const queryClient = useQueryClient();

  return useMutation(addDrug, {
    onSuccess: () => {
      toast.success("Drug added successfully");
      queryClient.invalidateQueries(["Owndrugs"]);
    },
    onError: (error) => {
      toast.error(error.response.data.message || "error");
      console.log(error);
    },
  });
};

// * Delete Drug
export const useDeleteDrug = () => {
  const queryClient = useQueryClient();

  return useMutation(deleteDrug, {
    onSuccess: () => {
      toast.success("Drug deleted successfully");
      queryClient.invalidateQueries(["Owndrugs"]);
    },
    onError: (error) => {
      toast.error(error.response.data.message || "error");
      console.log(error);
    },
  });
};

// * Update Drug
export const useUpdateDrug = () => {
  const queryClient = useQueryClient();
  return useMutation(updateDrug, {
    onSuccess: () => {
      toast.success("Drug Updated successfully");
      queryClient.invalidateQueries(["Owndrugs"]);
    },
    onError: (error) => {
      toast.error(error.response.data.message || "error");
      console.log(error);
    },
  });
};

// * get All Own Drugs
export const useOwnDrugs = (token, params = {}) => {
  return useQuery({
    queryKey: ["Owndrugs", params],
    queryFn: () => getAllOwnDrugs(token, params),
    enabled: !!token, // ميشتغلش لو مفيش توكن
    refetchOnMount: true,
    refetchOnWindowFocus: false,
  });
};
