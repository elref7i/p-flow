import { useQuery } from "@tanstack/react-query";
import { getUnreadCountNotif } from "../api/notification.api";

export const useCountNotif = ({ token }) => {
  return useQuery({
    queryKey: ["count-unread-Notification"],
    queryFn: () => getUnreadCountNotif({ token }),
    refetchOnWindowFocus: false,

    staleTime: 5 * 60 * 1000,
    cacheTime: 5 * 60 * 1000,
  });
};
