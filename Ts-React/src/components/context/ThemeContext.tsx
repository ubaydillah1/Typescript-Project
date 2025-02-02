import { createContext } from "react";
import { theme } from "./Theme";

type ThemeContextProvider = {
  children: React.ReactNode;
};

export const ThemeContext = createContext(theme);

const ThemeContextProvider = ({ children }: ThemeContextProvider) => {
  return (
    <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
