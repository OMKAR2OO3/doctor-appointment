import { createContext } from "react";
import { doctors } from "../assets/assets_frontend/assets";

export const AppContext = createContext();

// eslint-disable-next-line react/prop-types
const AppContextProvider = ({ children }) => {
  const value = { doctors };
  return (
    // eslint-disable-next-line react/prop-types
    <AppContext.Provider value={value}>{children}</AppContext.Provider>
  );
};
export default AppContextProvider;
