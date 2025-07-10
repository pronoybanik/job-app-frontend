import React from 'react';

const JobPostingForm = () => {
  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Post a New Job</h2>
      
      <form className="space-y-6">
        {/* Company Name */}
        <div>
          <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
            Company Name
          </label>
          <input
            type="text"
            id="company"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter company name"
          />
        </div>

        {/* Position */}
        <div>
          <label htmlFor="position" className="block text-sm font-medium text-gray-700 mb-1">
            Position
          </label>
          <input
            type="text"
            id="position"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
            placeholder="Job title/position"
          />
        </div>

        {/* Contract Type */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Contract Type
          </label>
          <div className="grid grid-cols-2 gap-4">
            <label className="inline-flex items-center">
              <input
                type="radio"
                name="contractType"
                value="full-time"
                className="h-4 w-4 text-blue-600 focus:ring-blue-500"
                defaultChecked
              />
              <span className="ml-2 text-gray-700">Full-time</span>
            </label>
            <label className="inline-flex items-center">
              <input
                type="radio"
                name="contractType"
                value="part-time"
                className="h-4 w-4 text-blue-600 focus:ring-blue-500"
              />
              <span className="ml-2 text-gray-700">Part-time</span>
            </label>
          </div>
        </div>

        {/* Location */}
        <div>
          <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-1">
            Location
          </label>
          <div className="mt-1 relative rounded-md shadow-sm">
            <input
              type="text"
              id="location"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              placeholder="City, Country or Remote"
            />
          </div>
        </div>

        {/* Submit Button */}
        <div className="pt-4">
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
          >
            Post Job
          </button>
        </div>
      </form>
    </div>
  );
};

export default JobPostingForm;