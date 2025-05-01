/* eslint-disable react/prop-types */
// PaginationContext.js
import { createContext, useContext, useState } from "react";
import { useDebounce } from "use-debounce";

const PaginationContext = createContext();

export default function PaginationProvider({ children }) {
  const [searchParams, setSearchParams] = useState({});

  // Debounce
  const [debouncedParams] = useDebounce(searchParams, 500);

  return (
    <PaginationContext.Provider
      value={{
        searchParams,
        setSearchParams,
        debouncedParams,
      }}
    >
      {children}
    </PaginationContext.Provider>
  );
}

export function useQueryParams() {
  return useContext(PaginationContext);
}
