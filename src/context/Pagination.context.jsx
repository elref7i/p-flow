/* eslint-disable react/prop-types */
// PaginationContext.js
import { createContext, useContext, useState } from "react";

const PaginationContext = createContext();

export default function PaginationProvider({ children }) {
  const [params, setParams] = useState({
    page: 1,
    limit: 10, // يمكنك تغيير هذا حسب احتياجاتك
  });

  return (
    <PaginationContext.Provider value={{ params, setParams }}>
      {children}
    </PaginationContext.Provider>
  );
}

export function usePaginationTable() {
  return useContext(PaginationContext);
}
