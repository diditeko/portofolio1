
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

const navItems = [
  { name: "Home", href: "/" },
  { name: "Resume", href: "/resume" },
  { name: "Work Portfolio", href: "/work-portfolio" },
  // { name: "Achievements", href: "/achievements" },
  { name: "Side Projects", href: "/side-projects" },
  // { name: "Other Activities", href: "/other-activities" },
  { name: "Socials", href: "/socials" },
  // { name: "Theme", href: "/Theme" },
];

const Navbar = () => {
  return (
    <nav className="bg-white py-4 border-b border-gray-100 sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Link to="/" className="flex items-center gap-2">
            <img
              src="/goku-dragonball.gif" // Make sure this file is inside the public/ folder
              alt="Goku Kamehameha"
              className="h-10 w-28 object-contain"

            />
            {/* Uncomment below if you want to keep the name next to the gif */}
            {/* <span className="text-green-700 text-xl font-bold">Didit Eko Setyo Ariandi</span> */}
          </Link>
        </div>
        <div className="hidden md:flex space-x-1">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className={cn(
                "px-3 py-2 text-sm font-medium transition-colors",
                "hover:text-green-700 relative group"
              )}
            >
              {item.name}
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-green-700 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
            </Link>
          ))}
        </div>
        <div className="md:hidden">
          <button className="text-gray-700">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
