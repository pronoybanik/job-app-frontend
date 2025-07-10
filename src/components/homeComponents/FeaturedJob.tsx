import { useEffect } from "react";
import { MapPin, Clock, DollarSign, Building } from "lucide-react";
import { useAppDispatch, useAppSelector } from "../../redux/hook";
import { fetchJobs } from "../../redux/features/job/job.slice";
import { Link, useNavigate } from "react-router-dom";

const FeaturedJobs = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { jobs, loading, error } = useAppSelector((state) => state.jobs);
  const { user } = useAppSelector((state) => state.auth);

  useEffect(() => {
    dispatch(
      fetchJobs({
        limit: 6,
      })
    );
  }, [dispatch]);

  if (loading) {
    return (
      <div className="text-center py-16">
        <p className="text-gray-500">Loading jobs...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-16">
        <p className="text-red-500">Error loading jobs: {error}</p>
      </div>
    );
  }

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-block px-3 py-1 text-sm font-medium text-blue-600 bg-blue-50 rounded-full mb-4">
            Career Opportunities
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Featured <span className="text-blue-600">Jobs</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover hand-picked opportunities from top companies looking for
            talented professionals like you.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {jobs.map((job) => (
            <div
              key={job._id}
              className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-all duration-300 hover:-translate-y-1"
            >
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="font-bold text-lg text-gray-900 hover:text-blue-600 transition-colors">
                      {job.position}
                    </h3>
                    <p className="text-gray-600 flex items-center text-sm">
                      <Building className="w-4 h-4 mr-1 text-gray-400" />
                      {job.companyName}
                    </p>
                  </div>
                </div>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-gray-600 text-sm">
                    <MapPin className="w-4 h-4 mr-2 text-gray-400" />
                    {job.location}
                  </div>

                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center text-gray-600 capitalize">
                      <Clock className="w-4 h-4 mr-2 text-gray-400" />
                      {job.contractType}
                    </div>
                    {/* Placeholder Salary */}
                    <div className="flex items-center text-green-600 font-medium">
                      <DollarSign className="w-4 h-4 mr-1" />
                      $1200+
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <span className="text-sm text-gray-500">
                    {job.createdAt
                      ? new Date(job.createdAt).toLocaleDateString()
                      : "N/A"}
                  </span>

                  {user ? (
                    <button
                      onClick={() => navigate(`/jobs/${job._id}`)}
                      className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                    >
                      Apply Now
                    </button>
                  ) : (
                    <button
                      onClick={() => navigate("/login")}
                      className="px-4 py-2 text-sm font-medium text-white bg-gray-500 rounded-md hover:bg-gray-600"
                    >
                      Login to Apply
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/jobs"
            className="px-8 py-3 text-base font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 hover:border-gray-400 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            View All Jobs
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedJobs;
