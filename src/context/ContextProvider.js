import { createContext, useContext, useState } from "react";

// 1- Create the context
const StateContext = createContext();

// 2- Initial State
const initialState = {
  chat: false,
  cart: false,
  userProfile: false,
  notification: false,
};

// 3- return Context Provider
export const ContextProvider = ({ children }) => {
  // Handle Provider
  const [activeMenu, setActiveMenu] = useState(true);
  const [isClicked, setIsClicked] = useState(initialState);
  const [screenSize, setScreenSize] = useState(undefined);
  const [currentColor, setCurrentColor] = useState("#03C9D7");
  const [currentMode, setCurrentMode] = useState("Light");
  const [themeSettings, setThemeSettings] = useState(false);

  const setMode = (event) => {
    setCurrentMode(event.target.value);

    localStorage.setItem("themeMode", event.target.value);
    setThemeSettings(false);
  };

  const setColor = (color) => {
    setCurrentColor(color);

    localStorage.setItem("colorMode", color);
    setThemeSettings(false);
  };

  const handleClick = (clicked) => {
    setIsClicked({ ...initialState, [clicked]: true });
  };
  return (
    <StateContext.Provider
      value={{
        activeMenu,
        setActiveMenu,
        isClicked,
        setIsClicked,
        handleClick,
        screenSize,
        setScreenSize,
        currentColor,
        currentMode,
        themeSettings,
        setThemeSettings,
        setMode,
        setColor,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

// 4- create use Context
export const useStateContext = () => useContext(StateContext);
