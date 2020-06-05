// import { useLocalStorage } from "./useLocalStorage"
import { useEffect, useState } from "react";


export const useDarkMode = initialValue => {
    const [darkMode, setDarkMode] = useState()

    useEffect(() => {
        darkMode ?
            document.body.classList.add("dark-mode")
            :
            document.body.classList.remove("dark-mode")
    }, [darkMode]);

    return [darkMode, setDarkMode]

}