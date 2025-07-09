import React from 'react';
import { Mail } from 'lucide-react';

const Newsletter = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="flex justify-center mb-6">
          <div className="bg-white bg-opacity-20 rounded-full p-4">
            <Mail className="w-8 h-8 text-white" />
          </div>
        </div>
        
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Stay Updated with Latest Jobs
        </h2>
        <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
          Get the newest job opportunities delivered directly to your inbox. 
          Be the first to know about exclusive openings from top companies.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
          <input 
            type="email" 
            placeholder="Enter your email address"
            className="flex-1 h-12 px-4 rounded-md border-none bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button 
            className="h-12 px-8 rounded-md bg-white text-blue-600 font-semibold hover:bg-gray-100 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-600"
          >
            Subscribe
          </button>
        </div>
        
        <p className="text-blue-100 text-sm mt-4">
          Join 50,000+ professionals. No spam, unsubscribe anytime.
        </p>
      </div>
    </section>
  );
};

export default Newsletter;

