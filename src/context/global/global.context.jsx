import React, { createContext, useState } from "react";

const initialState = {
  user: null,
};
export const GlobalContext = createContext(initialState);
export const GlobalProvider = ({ children, authData }) => {
  const [state, setState] = useState(authData);

  return (
    <GlobalContext.Provider value={{ state }}>
      {children}
    </GlobalContext.Provider>
  );
};
