import { createContext, useContext } from "react";

let ThemeContext = createContext({
    lightTheme : 'light',
    darkMode : ()=>{},
    lightMode : ()=>{}
})

export let ThemeContextProvider = ThemeContext.Provider;

export default function useTheme(){
    return useContext(ThemeContext)
}