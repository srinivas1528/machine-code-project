import React, { createContext, useContext, useState } from "react";

const ThemeContext = createContext();

// Themeprovider component to wrap the application.
const ThemeProvider = ({ children }) => {

    // state to maanage theme.
    const [theme, setTheme] = useState("light");


    const toggleTheme = () => {
        setTheme((prev) => (prev === "light" ? "dark" : "light"))
    
    }

    // Providing theme and toggle function to the children by wrapping with a provider
    return (
        <ThemeContext.Provider value= {{ theme, toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}

// custom hook.
const useTheme = () => {
  return useContext(ThemeContext)
}

export {ThemeProvider, useTheme };