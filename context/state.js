import { createContext, useContext, useState } from "react";

const AppContext = createContext();

export default AppContext;

export function AppWrapper({ children }) {
  const [filter, setFilter] = useState("");
  const [region, setRegion] = useState("all");
  const sharedState = {
    filter,
    setFilter,
    region,
    setRegion,
  };
  return (
    <AppContext.Provider value={sharedState}>{children}</AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}
