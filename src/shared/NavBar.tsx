import { useState } from "react";
import { Bell, LogOut, Menu, X } from "lucide-react";
import { useAppDispatch, useAppSelector } from "../redux/hook";
import { NavBarItemsGenerator } from "../utils/NavBarItemsGenerator";
import { NavbarPath } from "../routes/Home.Routes";
import { logout, selectCurrentUser } from "../redux/features/auth/auth.slice";
import { Link } from "react-router-dom";

interface User {
  role: string;
}

const NavBar = () => {
  const user = useAppSelector(selectCurrentUser);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const dispatch = useAppDispatch();

  const navItems = NavBarItemsGenerator(NavbarPath, "");

  if ((user as User)?.role === "admin") {
    navItems.push({
      key: "Admin Dashboard",
      label: <Link to="/dashboard">Admin Dashboard</Link>,
    });
  }

  const handleLogout = () => {
    dispatch(logout());
    localStorage.clear();
  };

  return (
    <header className="bg-white shadow-sm border-b sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0">
              <h1 className="text-2xl font-bold text-blue-600">JobVerse</h1>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex md:space-x-8 md:items-center">
            {navItems.map((item: any) => (
              <Link
                key={item.key}
                to={item.key}
                className="text-gray-900 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Desktop Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="p-2 rounded-full hover:bg-gray-100">
              <Bell className="h-5 w-5 text-gray-600" />
            </button>
            {user ? (
              <button
                onClick={handleLogout}
                className="flex items-center text-sm text-red-600 hover:underline"
              >
                <LogOut className="h-4 w-4 mr-1" />
                Logout
              </button>
            ) : (
              <>
                <Link
                  to="/login"
                  className="text-sm font-medium text-gray-600 hover:text-blue-600"
                >
                  Sign In
                </Link>
                <Link
                  to="/signup"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium"
                >
                  Sign up
                </Link>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-100 focus:outline-none"
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden pb-4">
            <div className="pt-2 space-y-1">
              {navItems.map((item: any) => (
                <Link
                  key={item.key}
                  to={item.key}
                  className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>
            <div className="pt-4 border-t border-gray-200">
              {user ? (
                <div className="flex items-center justify-between px-3">
                  <button
                    onClick={() => {
                      handleLogout();
                      setMobileMenuOpen(false);
                    }}
                    className="text-sm font-medium text-gray-600 hover:text-blue-600"
                  >
                    Logout
                  </button>
                </div>
              ) : (
                <div className="space-y-2">
                  <Link
                    to="/login"
                    className="block w-full text-left px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Sign In
                  </Link>
                  <Link
                    to="/register"
                    className="block w-full text-left px-3 py-2 text-base font-medium text-blue-600 hover:bg-blue-50"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Post Job
                  </Link>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default NavBar;
