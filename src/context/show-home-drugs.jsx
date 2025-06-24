/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState } from "react";

const HomeDrugsContext = createContext();

export default function HomeDrugsProvider({ children }) {
  const [showDrugs, setShowDrugs] = useState(true);
  return (
    <HomeDrugsContext.Provider value={{ showDrugs, setShowDrugs }}>
      {children}
    </HomeDrugsContext.Provider>
  );
}

export function useShowDrugs() {
  return useContext(HomeDrugsContext);
}
