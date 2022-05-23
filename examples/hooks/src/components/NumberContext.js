// 1. importart createContext

// 3. exportar el contexto
// 4. importar el provider y el consumer

import { createContext, useState, useContext } from "react";

// 2. crear el contexto
const NumberContext = createContext();


export const NumberProvider = ({ children }) => {

  const [number, setNumber] = useState(0);

  const handleNumber = () => {
    setNumber(number + 1);
  }

  const store = {
    state: number,
    dispatch: handleNumber,
  };

  return (
    <NumberContext.Provider value={store}>
      {children}
    </NumberContext.Provider>
  );
}


export const useNumber = () => {
  const context = useContext(NumberContext);

  if (context === undefined) {
    throw new Error("useNumber must be used within a NumberProvider");
  }

  return context;
}
