import { createContext, useContext, useState } from "react";

const AppContext = createContext();

export default AppContext;

export function AppWrapper({ children }) {
  const [filter, setFilter] = useState("");
  const sharedState = {
    filter,
    setFilter,
  };
  return (
    <AppContext.Provider value={sharedState}>{children}</AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}
