/* eslint-disable react/prop-types */
// PaginationContext.js
import { createContext, useContext, useState } from "react";

const PaginationContext = createContext();

export default function PaginationProvider({ children }) {
  const [paramsPagination, setParamsPagination] = useState({
    page: 1,
    limit: 10, // يمكنك تغيير هذا حسب احتياجاتك
  });

  const [searchParams, setSearchParams] = useState({});

  return (
    <PaginationContext.Provider
      value={{
        paramsPagination,
        setParamsPagination,
        searchParams,
        setSearchParams,
      }}
    >
      {children}
    </PaginationContext.Provider>
  );
}

export function useQueryParams() {
  return useContext(PaginationContext);
}
