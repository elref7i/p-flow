export const totalItems = ({ data }) => {
  return (
    data?.pages.reduce((total, page) => {
      return total + (page.data?.length || 0);
    }, 0) || 0
  );
};

export const flattenedDrugs = ({ data }) => {
  return data?.pages.flatMap((page) => page.data || []) || [];
};
