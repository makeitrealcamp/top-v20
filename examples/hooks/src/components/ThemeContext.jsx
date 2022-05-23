import { useContext, useState, createContext } from "react";

// 1. crear el contexto
const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  // 2. crear el state
  const [theme, setTheme] = useState("light");

  const store = { theme, setTheme }

  // 3. crear el provider
  return (
    <ThemeContext.Provider value={store}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => {
  const context = useContext(ThemeContext);

  if(context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }

  return context;
}
