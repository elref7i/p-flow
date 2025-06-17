import {
  useInfiniteQuery,
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";
import {
  addAllMark,
  addMarkNotif,
  deleteAllNotif,
  deleteNotif,
  getAllMeNotifications,
  getUnreadCountNotif,
} from "../api/notification.api";
import toast from "react-hot-toast";

export const useCountNotif = ({ token }) => {
  return useQuery({
    queryKey: ["count-unread-Notification"],
    queryFn: () => getUnreadCountNotif({ token }),
    refetchOnWindowFocus: false,

    staleTime: 5 * 60 * 1000,
    cacheTime: 5 * 60 * 1000,
  });
};

// Get all me notifications
export const useGetAllMeNotifications = ({ token }) => {
  return useInfiniteQuery({
    queryKey: ["all-notifications", token],
    queryFn: ({ pageParam = 1 }) =>
      getAllMeNotifications({ token, page: pageParam }),
    getNextPageParam: (lastPage) => lastPage.pagination?.next || undefined,
    keepPreviousData: true,
    refetchOnWindowFocus: false,
    staleTime: 5 * 60 * 1000,
  });
};

//Add Mark all a notifications
export const useMarkAllNotif = () => {
  const queryClient = useQueryClient();
  return useMutation(addAllMark, {
    onSuccess: () => {
      toast.success("Notification added successfully");
      queryClient.invalidateQueries(["all-notifications"]);
      queryClient.invalidateQueries(["count-unread-Notification"]);
    },
    onError: (error) => {
      toast.error(error.response.data.message || "error");
      console.log(error);
    },
  });
};

//Add Mark a notification
export const useMarkNotif = () => {
  const queryClient = useQueryClient();
  return useMutation(addMarkNotif, {
    onSuccess: () => {
      toast.success("Notification added successfully");
      queryClient.invalidateQueries(["all-notifications"]);
      queryClient.invalidateQueries(["count-unread-Notification"]);
    },
    onError: (error) => {
      toast.error(error.response.data.message || "error");
      console.log(error);
    },
  });
};

//Delete a notification
export const useDeleteNotif = () => {
  const queryClient = useQueryClient();
  return useMutation(deleteNotif, {
    onSuccess: () => {
      toast.success("Notification added successfully");
      queryClient.invalidateQueries(["all-notifications"]);
      queryClient.invalidateQueries(["count-unread-Notification"]);
    },
    onError: (error) => {
      toast.error(error.response.data.message || "error");
      console.log(error);
    },
  });
};

//Delete a notification
export const useDeleteAllNotif = () => {
  const queryClient = useQueryClient();
  return useMutation(deleteAllNotif, {
    onSuccess: () => {
      toast.success("Notification added successfully");
      queryClient.invalidateQueries(["all-notifications"]);
      queryClient.invalidateQueries(["count-unread-Notification"]);
    },
    onError: (error) => {
      toast.error(error.response.data.message || "error");
      console.log(error);
    },
  });
};
