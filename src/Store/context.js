import React, { useState, useContext } from 'react';

// const [openModal, setOpenModal] = useState(false);
// const [openToggle, setOpenToggle] = useState(false);

const AppContext = React.createContext();
const AppProvider = ({ children }) => {
  return <AppContext.Provider value="Hello">{children}</AppContext.Provider>;
};
//costom Hooks

export const useGlobalContext = () => {
  return useContext(AppContext);
};
export { AppContext, AppProvider };
