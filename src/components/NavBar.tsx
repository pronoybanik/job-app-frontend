import React from "react";
import { Bell, Menu } from "lucide-react";

const NavBar = () => {
  return (
    <header className="bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-bold text-blue-600">JobPortal</h1>
            </div>
            <nav className="hidden md:ml-8 md:flex md:space-x-8">
              <a
                href="#"
                className="text-gray-900 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors"
              >
                Find Jobs
              </a>
              <a
                href="#"
                className="text-gray-900 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors"
              >
                Companies
              </a>
              <a
                href="#"
                className="text-gray-900 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors"
              >
                Salary Guide
              </a>
              <a
                href="#"
                className="text-gray-900 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors"
              >
                Resources
              </a>
            </nav>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <button>
              <Bell className="h-5 w-5" />
            </button>
            <button>Sign In</button>
            <button className="bg-blue-600 hover:bg-blue-700">Post Job</button>
          </div>

          <div className="md:hidden">
            <button>
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
