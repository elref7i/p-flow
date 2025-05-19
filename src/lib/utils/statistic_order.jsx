import LoadingSpinner from "../../components/Common/Loading/LoadingSpinner";

export const getStatValue = (loadingStatus, value) => {
  return loadingStatus ? <LoadingSpinner /> : value;
};
