import { useState, useEffect } from "react";

type Theme = "dark" | "light";

export default function useDarkSide(): [Theme, (theme: Theme) => void] {
    const [theme, setTheme] = useState<Theme>(localStorage.theme as Theme);
    const colorTheme = theme === "dark" ? "light" : "dark";

    useEffect(() => {
        const root = window.document.documentElement;
        root.setAttribute('data-bs-theme', theme)
        localStorage.setItem('theme', theme);
    }, [theme, colorTheme]);

    return [colorTheme, setTheme]
}
