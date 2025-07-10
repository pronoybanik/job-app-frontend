import { Link } from "react-router-dom";
import { AdminPaths } from "../routes/Admin.Routes";
import { NavBarItemsGenerator } from "../utils/NavBarItemsGenerator";
import { useState } from "react";
import { ChevronDown, ChevronRight, Home } from "lucide-react";

const AdminDashboard = () => {
  const navItems = NavBarItemsGenerator(AdminPaths, "");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="bg-white dark:bg-gray-800 shadow-sm border-b dark:border-gray-700">
      <div className="hidden md:block">
        <nav className="flex items-center px-4 py-3 space-x-1">
          <Link
            to="/"
            className="flex items-center px-3 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white rounded-md transition-colors"
          >
            <Home className="h-4 w-4 mr-2" />
            Home
          </Link>

          {navItems.map((item: any) => (
            <div key={item.key} className="flex items-center">
              <ChevronRight className="h-4 w-4 text-gray-400 mx-1" />
              <Link
                to={item.key}
                className="px-3 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white rounded-md transition-colors"
              >
                {item.label}
              </Link>
            </div>
          ))}
        </nav>
      </div>

      {/* Mobile Navigation */}
      <div className="md:hidden">
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="flex items-center justify-between w-full px-4 py-3 text-sm font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
        >
          <span>Admin Menu</span>
          <ChevronDown
            className={`h-4 w-4 transition-transform ${
              mobileMenuOpen ? "rotate-180" : ""
            }`}
          />
        </button>

        {mobileMenuOpen && (
          <div className="px-2 pt-2 pb-4 space-y-1">
            <Link
              to="/"
              className="flex items-center px-3 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              <Home className="h-4 w-4 mr-2" />
              Home
            </Link>

            {navItems.map((item: any) => (
              <Link
                key={item.key}
                to={item.key}
                className="block px-3 py-2 pl-8 text-sm font-medium text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminDashboard;
