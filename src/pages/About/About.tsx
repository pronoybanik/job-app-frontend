
const About = () => {
  return (
    <section className="bg-white py-16 px-4 md:px-8 lg:px-16">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">
          About <span className="text-blue-600">JobVerse</span>
        </h2>
        <p className="text-lg text-gray-600 mb-10 max-w-3xl mx-auto">
          JobVerse is a modern job portal connecting top talent with the best companies around the world. Whether you’re looking for your next big career move or searching for the perfect candidate, we’re here to bridge the gap.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
          <div className="p-6 bg-blue-50 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold text-blue-600 mb-2">Our Mission</h3>
            <p className="text-gray-700">
              Empower individuals and businesses by providing a seamless platform to find jobs and hire exceptional talent globally.
            </p>
          </div>

          <div className="p-6 bg-blue-50 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold text-blue-600 mb-2">What We Offer</h3>
            <p className="text-gray-700">
              A curated list of full-time and part-time opportunities, real-time updates, employer branding, and easy application processes.
            </p>
          </div>

          <div className="p-6 bg-blue-50 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold text-blue-600 mb-2">Why Choose Us?</h3>
            <p className="text-gray-700">
              Trusted by startups and enterprises alike, JobVerse delivers a simple, clean interface backed by powerful features and reliable support.
            </p>
          </div>
        </div>

        <div className="mt-12">
          <a
            href="/contact"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-md font-medium hover:bg-blue-700 transition"
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
