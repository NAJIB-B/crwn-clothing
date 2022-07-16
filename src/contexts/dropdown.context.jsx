import { createContext } from "react";
import { useState } from "react";

export const DropdownContext = createContext({
  dropdown: false,
  setDropdown: () => null,
});

export const DropdownProvider = ({ children }) => {
  const [dropdown, setDropdown] = useState(false);
  const value = { dropdown, setDropdown };

  return (
    <DropdownContext.Provider value={value}>
      {children}
    </DropdownContext.Provider>
  );
};
