import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import {
  getAllNotifications,
  getUnreadCountNotif,
} from "../api/notification.api";

export const useCountNotif = ({ token }) => {
  return useQuery({
    queryKey: ["count-unread-Notification"],
    queryFn: () => getUnreadCountNotif({ token }),
    refetchOnWindowFocus: false,

    staleTime: 5 * 60 * 1000,
    cacheTime: 5 * 60 * 1000,
  });
};

export const useGetAllNotifications = ({ token }) => {
  return useInfiniteQuery({
    queryKey: ["all-notifications", token],
    queryFn: ({ pageParam = 1 }) =>
      getAllNotifications({ token, page: pageParam }),
    getNextPageParam: (lastPage) => lastPage.pagination?.next || undefined,
    keepPreviousData: true,
    refetchOnWindowFocus: false,
    staleTime: 5 * 60 * 1000,
  });
};
