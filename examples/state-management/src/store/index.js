import { createContext, useReducer, useContext } from "react";

import reducer, { initialState } from './reducer'

export const AppContext = createContext()

// AppContext.Provider
// AppContext.Consumer

export function AppProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <AppContext.Provider value={{state, dispatch}}>
      {children}
    </AppContext.Provider>
  )
}

export function useAppContext() {
  const context = useContext(AppContext)
  if (context === undefined) {
    throw new Error('useAppContext must be used within a AppProvider')
  }
  return context
}
