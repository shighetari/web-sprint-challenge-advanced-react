import React from 'react';
import { useDarkMode } from "../hooks/useDarkMode"

const Navbar = () => {
    const [darkMode, setDarkMode] = useDarkMode(false)
    const toggleMode = e => {
        e.preventDefault()
        setDarkMode(!darkMode)
    }
    return (
        <nav>
            <div>
                <button
                    onClick={toggleMode}
                    className="darkmodebutton"
                >
                    Dark Mode
                </button>

            </div>
        </nav>

    )
}

export default Navbar