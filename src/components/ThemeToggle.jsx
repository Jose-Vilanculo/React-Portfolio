import { Sun, Moon } from "lucide-react";
import { useEffect, useState } from "react"
import { cn } from "../lib/utils";

export const ThemeToggle = () => {

    const [isDarkMode, setIsDarkMode] = useState(true);
    const [isScrolled, setIsScrolled] = useState(false);

    {/* Use effect for setting saved theme */}
    useEffect(() => {
        const storedTheme = localStorage.getItem("theme");
        if (storedTheme === "dark") {
            document.documentElement.classList.add("dark");
            setIsDarkMode(true);
        } else {
            localStorage.setItem("theme", "light");
            setIsDarkMode(false);
        }
    }, []);

    {/* Use effect to check when user scrolls */}
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        }

        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, []);

    const toggleTheme = () => {
        if (isDarkMode) {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light");
            setIsDarkMode(false);
        } else {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
            setIsDarkMode(true);
        }
    };

    return (
        <button 
        onClick={toggleTheme}
        className={cn(
            "fixed max-sm:hidden top-4 right-4 z-50 p-2 rounded-full transition-colors duration-300",
            "focus:outline-hidden transition-all duration-300",
            isScrolled ? "top-2" : "top-4"
        )}
        >
            {" "}
            {isDarkMode ? (
                <Sun className="h-6 w-6 text-yellow-300" />
            ) : (
            <Moon className="h-6 w-d text-blue-900" />
            )}
        </button>
    );
};