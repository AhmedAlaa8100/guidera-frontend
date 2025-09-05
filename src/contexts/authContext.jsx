import { createContext, useState, useMemo, useCallback } from "react";

export const authContext = createContext();

export default function AuthContextProvider({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    // Use a function to initialize state to avoid calling localStorage on every render
    return localStorage.getItem("token") != null;
  });

  // Memoize setIsLoggedIn to prevent it from changing on every render
  const setIsLoggedInMemo = useCallback((value) => {
    setIsLoggedIn(value);
  }, []);

  const contextValue = useMemo(
    () => ({ isLoggedIn, setIsLoggedIn: setIsLoggedInMemo }),
    [isLoggedIn, setIsLoggedInMemo]
  );

  return (
    <authContext.Provider value={contextValue}>{children}</authContext.Provider>
  );
}
