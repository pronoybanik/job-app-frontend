
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
