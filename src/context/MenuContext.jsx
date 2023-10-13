import React, { useState } from "react";

export const MenuContext = React.createContext();

export const MenuContextProvider = ({children}) => {
    const [active, setActive] = useState({
      value: "home",
      child: false,
    });
    return (
      <MenuContext.Provider value={{ active, setActive }}>
        {children}
      </MenuContext.Provider>
    );
}