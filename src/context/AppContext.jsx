import { useState, createContext } from "react";

export const ApplicationContext = createContext();

const AppContext = ({ children }) => {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  return (
    <ApplicationContext.Provider value={[isNavbarOpen, setIsNavbarOpen]}>
      {children}
    </ApplicationContext.Provider>
  );
};

export default AppContext;
