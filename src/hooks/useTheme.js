import { useDebugValue, useState } from "react";


export default function useTheme() {
    const [darkTheme, setDarkTheme] = useState(false);
    const toggleTheme = () => setDarkTheme(!darkTheme);


    useDebugValue(
        `${darkTheme ? "dark" : "light"}`,
        (val) => {
            return val == "dark" ? "The theme is dark" : "The theme is light";
        }
    );

    return { darkTheme, toggleTheme };
}