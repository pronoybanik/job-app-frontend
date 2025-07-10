import { useState, useEffect } from "react";
import {
  Search,
  MapPin,
  Clock,
  Building2,
  Users,
  ChevronDown,
} from "lucide-react";
import { useAppDispatch, useAppSelector } from "../../redux/hook";
import { useNavigate } from "react-router-dom";
import { fetchJobs } from "../../redux/features/job/job.slice";

const JobSearchPage = () => {
  const locations = [
    "New York, USA",
    "Chattogram, Bangladesh",
    "Dhaka, Bangladesh",
  ];
  const contracts = ["Full-time", "Part-time"];

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("");
  const [selectedContract, setSelectedContract] = useState("");
  const [isLocationDropdownOpen, setIsLocationDropdownOpen] = useState(false);
  const [isContractDropdownOpen, setIsContractDropdownOpen] = useState(false);

  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { jobs, loading, error } = useAppSelector((state) => state.jobs);

  useEffect(() => {
    dispatch(
      fetchJobs({
        searchTerm,
        location: selectedLocation,
        contractType: selectedContract.toLowerCase(),
      })
    );
  }, [dispatch, searchTerm, selectedLocation, selectedContract]);

  const clearFilters = () => {
    setSearchTerm("");
    setSelectedLocation("");
    setSelectedContract("");
  };

  if (error) {
    return (
      <div className="text-center py-16">
        <p className="text-red-500">Error loading jobs: {error}</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Banner */}
      <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-700 text-white">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-pulse">
              Find Your Dream Job
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90">
              Discover opportunities that match your skills and ambitions
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm md:text-base">
              <div className="flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full">
                <Building2 className="w-4 h-4" />
                <span>1000+ Companies</span>
              </div>
              <div className="flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full">
                <Users className="w-4 h-4" />
                <span>5000+ Job Openings</span>
              </div>
              <div className="flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full">
                <MapPin className="w-4 h-4" />
                <span>Global Opportunities</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Search and Filter Section */}
      <div className="container mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {/* Search by Company */}
            <div className="relative">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Search Company or Job Title
              </label>
              <div className="relative">
                <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search companies..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>

            {/* Location Filter */}
            <div className="relative">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Location
              </label>
              <div className="relative">
                <button
                  onClick={() =>
                    setIsLocationDropdownOpen(!isLocationDropdownOpen)
                  }
                  className="w-full flex items-center justify-between px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white"
                >
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-gray-400" />
                    <span className="text-gray-700">
                      {selectedLocation || "All Locations"}
                    </span>
                  </div>
                  <ChevronDown className="h-4 w-4 text-gray-400" />
                </button>

                {isLocationDropdownOpen && (
                  <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg">
                    <div
                      className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                      onClick={() => {
                        setSelectedLocation("");
                        setIsLocationDropdownOpen(false);
                      }}
                    >
                      All Locations
                    </div>
                    {locations.map((location) => (
                      <div
                        key={location}
                        className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                        onClick={() => {
                          setSelectedLocation(location);
                          setIsLocationDropdownOpen(false);
                        }}
                      >
                        {location}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Contract Filter */}
            <div className="relative">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Contract Type
              </label>
              <div className="relative">
                <button
                  onClick={() =>
                    setIsContractDropdownOpen(!isContractDropdownOpen)
                  }
                  className="w-full flex items-center justify-between px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white"
                >
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-gray-400" />
                    <span className="text-gray-700">
                      {selectedContract || "All Types"}
                    </span>
                  </div>
                  <ChevronDown className="h-4 w-4 text-gray-400" />
                </button>

                {isContractDropdownOpen && (
                  <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg">
                    <div
                      className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                      onClick={() => {
                        setSelectedContract("");
                        setIsContractDropdownOpen(false);
                      }}
                    >
                      All Types
                    </div>
                    {contracts.map((contract) => (
                      <div
                        key={contract}
                        className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                        onClick={() => {
                          setSelectedContract(contract);
                          setIsContractDropdownOpen(false);
                        }}
                      >
                        {contract}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Clear Filters Button */}
            <div className="flex items-end">
              <button
                onClick={clearFilters}
                className="w-full bg-gray-600 text-white py-2 px-4 rounded-lg hover:bg-gray-700 transition-colors duration-200"
              >
                Clear Filters
              </button>
            </div>
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-gray-600">
            Showing {jobs.length} of {jobs.length} jobs
          </p>
        </div>

        {/* Job Listings */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {loading ? (
            <div className="text-center py-16 font-bold">
              <p className="text-gray-500">Loading jobs...</p>
            </div>
          ) : (
            jobs.map((job) => (
              <div
                key={job._id}
                className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 p-6"
              >
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {job.companyName}
                    </h3>
                    <div className="flex items-center gap-2 text-gray-600 mb-2">
                      <Building2 className="h-4 w-4" />
                      <span className="font-medium">{job.companyName}</span>
                    </div>
                    <div className="flex items-center gap-4 text-sm text-gray-500">
                      <div className="flex items-center gap-1">
                        <MapPin className="h-3 w-3" />
                        <span>{job.location}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        <span>{job.contractType}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* <p className="text-gray-700 mb-4">{job.description}</p> */}

                <div className="flex gap-3">
                  <button className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors duration-200">
                    Apply Now
                  </button>
                  <button className="flex-1 border border-gray-300 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-50 transition-colors duration-200">
                    Save Job
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        {/* No Results Message */}
        {jobs.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-400 mb-4">
              <Search className="h-16 w-16 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-600 mb-2">
                No jobs found
              </h3>
              <p className="text-gray-500">
                Try adjusting your search criteria or clear filters to see more
                results.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default JobSearchPage;
