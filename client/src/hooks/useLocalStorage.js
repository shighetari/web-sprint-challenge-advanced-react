import { useState } from "react"

export const useLocalStorage = (key, initialValue) => {
    const [storedValue, setStoredValue] = useState(() => {
        //get from local storage by key
        const item = window.localStorage.getItem(key)
        //parse and return stores json or if undefined return "initialValue"
        return item ? JSON.parse(item) : initialValue
    })
    const setValue = value => {
        //saving state
        setStoredValue(value)
        //saving this value to local storage
        window.localStorage.setItem(key, JSON.stringify(value))
    }
    return [storedValue, setValue]
}