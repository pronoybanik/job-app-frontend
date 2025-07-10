import { Search, MapPin, Briefcase } from "lucide-react";

const Header = () => {
  return (
    <section className="bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Find Your Dream
            <span className="text-blue-600 block">Career Today</span>
          </h1>
          <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
            Connect with top employers and discover opportunities that match
            your skills, experience, and career goals. Your next great job is
            just a search away.
          </p>

          <div className="bg-white rounded-2xl shadow-xl p-8 max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              </div>
              <div className="relative">
                <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              </div>
              <div className="relative">
                <Briefcase className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <select className="w-full pl-10 h-12 text-lg border border-gray-300 rounded-md focus:border-blue-500 focus:ring-1 focus:ring-blue-500 bg-white">
                  <option>All Categories</option>
                  <option>Technology</option>
                  <option>Healthcare</option>
                  <option>Finance</option>
                  <option>Marketing</option>
                  <option>Education</option>
                </select>
              </div>
            </div>
            <button className="w-full md:w-auto bg-blue-600 hover:bg-blue-700 text-white px-12 py-3 text-lg font-semibold rounded-xl transition-all hover:scale-105">
              Search Jobs
            </button>
          </div>

          <div className="mt-12 flex flex-wrap justify-center items-center gap-8 text-sm text-gray-600">
            <span>Trusted by:</span>
            <div className="flex flex-wrap items-center gap-6">
              <span className="font-semibold text-gray-800">
                10,000+ Companies
              </span>
              <span className="font-semibold text-gray-800">50,000+ Jobs</span>
              <span className="font-semibold text-gray-800">
                1M+ Job Seekers
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
