import { useState } from "react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { useWeather } from "@/context/WeatherContext";
import { useTheme } from "@/context/ThemeContext";
import { Moon, Sun } from "lucide-react";

const navItems = [
  { name: "Home", href: "/" },
  { name: "Resume", href: "/resume" },
  { name: "Work Portfolio", href: "/work-portfolio" },
  { name: "Side Projects", href: "/side-projects" },
  { name: "Socials", href: "/socials" },
];

const Navbar = () => {
  const { setCurrentWeather } = useWeather();
  const { theme, toggleTheme } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white dark:bg-gray-900 py-4 border-b border-gray-100 dark:border-gray-800 sticky top-0 z-50 shadow-sm transition-colors">
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <img
            src="/goku-dragonball.gif"
            alt="Goku"
            className="h-10 w-auto object-contain"
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-4">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className={cn(
                "text-sm font-medium transition-colors",
                "text-gray-900 dark:text-white hover:text-green-700"
              )}
            >
              {item.name}
            </Link>
          ))}

          {/* Weather Buttons */}
          <div className="flex items-center gap-2 ml-4">
            <button onClick={() => setCurrentWeather("sunny")} className="text-yellow-500 text-xl">☀️</button>
            <button onClick={() => setCurrentWeather("snowy")} className="text-blue-400 text-xl">❄️</button>
            <button onClick={() => setCurrentWeather("rainy")} className="text-blue-600 text-xl">🌧️</button>
            <button onClick={() => setCurrentWeather("spring")} className="text-pink-400 text-xl">🌸</button>
          </div>

          {/* Dark Mode Toggle */}
          <button onClick={toggleTheme} className="ml-2 text-xl text-yellow-500 dark:text-white hover:text-yellow-600 transition">
            {theme === "light" ? <Moon size={20} /> : <Sun size={20} />}
          </button>
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden flex items-center">
          <button onClick={() => setMenuOpen(!menuOpen)} className="text-gray-700 dark:text-white focus:outline-none">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 px-4 pt-2 pb-4 shadow-md">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              onClick={() => setMenuOpen(false)}
              className="block py-2 text-gray-700 dark:text-white hover:text-green-700 font-medium"
            >
              {item.name}
            </Link>
          ))}
          <div className="flex gap-4 mt-4 justify-center">
            <button onClick={() => setCurrentWeather("sunny")} className="text-yellow-500 text-2xl">☀️</button>
            <button onClick={() => setCurrentWeather("snowy")} className="text-blue-400 text-2xl">❄️</button>
            <button onClick={() => setCurrentWeather("rainy")} className="text-blue-600 text-2xl">🌧️</button>
            <button onClick={() => setCurrentWeather("spring")} className="text-pink-400 text-2xl">🌸</button>
            <button onClick={toggleTheme} className="text-yellow-500 dark:text-white text-2xl">
              {theme === "light" ? <Moon size={20} /> : <Sun size={20} />}
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
