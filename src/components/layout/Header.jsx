"use client";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../../hooks/useAuth";
import Button from "../ui/Button";
import { Menu, X } from "lucide-react";
// Brand gradient styles
const gradientText = {
  background: "linear-gradient(90deg, #FEB840 0%, #FC4968 50%, #9A1497 100%)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
};

const gradientBg = {
  background: "linear-gradient(90deg, #FEB840 0%, #FC4968 50%, #9A1497 100%)",
};

const Header = () => {
  const { session, logout } = useAuth();
  const [mobileOpen, setMobileOpen] = useState(false);
  const toggleMenu = () => setMobileOpen(!mobileOpen);

  const NAV_LINKS = [
    { name: "CourseOrbit", path: "/course-orbit" },
    { name: "Connect Mentors", path: "/mentor" },
    { name: "Skill Matrix", path: "/skill" },
    { name: "Connect Us", path: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-slate-900 text-white shadow-lg border-b border-slate-800 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto flex justify-between items-center py-4 px-4 md:px-8">
        {/* LOGO */}
        <Link to="/" className="flex items-center space-x-3">
          <div className="bg-dark-800/60 p-1 rounded-md flex items-center">
            <img src="/logo.png" alt="RAREVOC Logo" className="h-10 w-auto object-contain" />1
          </div>
          <span className="hidden sm:inline-block text-lg font-bold tracking-tight text-accent-white">RAREVOC</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="text-sm font-medium text-slate-300 hover:text-white transition-colors relative group"
            >
              {link.name}
              <span
                className="absolute -bottom-1 left-0 w-0 h-[2px] rounded-full group-hover:w-full transition-all duration-300"
                style={gradientBg}
              />
            </Link>
          ))}

          {session ? (
            <>
              <Link
                to="/dashboard"
                className="text-sm font-medium text-slate-300 hover:text-white transition-colors"
              >
                Dashboard
              </Link>
              <Button
                onClick={logout}
                variant="secondary"
                className="text-sm font-medium px-4 py-2 rounded-full border border-slate-600 hover:border-transparent hover:shadow-md transition-all"
                style={gradientBg}
              >
                Logout
              </Button>
            </>
          ) : (
            <>
              <Link
                to="/login"
                className="text-sm font-medium text-slate-300 hover:text-white transition-colors"
              >
                Login
              </Link>
              <Link
                to="/register"
                className="rounded-full px-4 py-2 text-sm text-white font-medium shadow-md hover:shadow-lg transition-all"
                style={gradientBg}
              >
                Get Started
              </Link>
            </>
          )}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden flex items-center justify-center rounded-lg p-2 hover:bg-slate-800 transition"
          onClick={toggleMenu}
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {mobileOpen && (
        <div className="md:hidden bg-slate-900 border-t border-slate-800 shadow-lg animate-slide-down">
          <div className="flex flex-col space-y-3 py-4 px-6">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setMobileOpen(false)}
                className="text-base font-medium text-slate-300 hover:text-white transition-colors"
              >
                {link.name}
              </Link>
            ))}

            <div className="border-t border-slate-800 my-3" />

            {session ? (
              <>
                <Link
                  to="/dashboard"
                  onClick={() => setMobileOpen(false)}
                  className="text-base font-medium text-slate-300 hover:text-white"
                >
                  Dashboard
                </Link>
                <Button
                  onClick={logout}
                  variant="secondary"
                  className="rounded-full text-sm px-4 py-2 text-white"
                  style={gradientBg}
                >
                  Logout
                </Button>
              </>
            ) : (
              <>
                <Link
                  to="/login"
                  onClick={() => setMobileOpen(false)}
                  className="text-base font-medium text-slate-300 hover:text-white"
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  onClick={() => setMobileOpen(false)}
                  className="rounded-full px-4 py-2 text-sm text-white text-center font-medium shadow-md hover:shadow-lg transition-all"
                  style={gradientBg}
                >
                  Get Started
                </Link>
              </>
            )}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
