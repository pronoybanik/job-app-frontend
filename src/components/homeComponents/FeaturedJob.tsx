import React from 'react';
import { MapPin, Clock, DollarSign, Building } from 'lucide-react';

const FeaturedJobs = () => {
  const jobs = [
    {
      id: 1,
      title: "Senior Frontend Developer",
      company: "TechCorp Inc.",
      location: "San Francisco, CA",
      type: "Full-time",
      salary: "$120k - $160k",
      posted: "2 days ago",
      logo: "https://images.unsplash.com/photo-1549923746-c502d488b3ea?w=64&h=64&fit=crop&crop=entropy",
      tags: ["React", "TypeScript", "Remote OK"]
    },
    {
      id: 2,
      title: "Product Manager",
      company: "InnovateLab",
      location: "New York, NY",
      type: "Full-time",
      salary: "$140k - $180k",
      posted: "1 day ago",
      logo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=64&h=64&fit=crop&crop=entropy",
      tags: ["Strategy", "Analytics", "Leadership"]
    },
    {
      id: 3,
      title: "UX Designer",
      company: "DesignStudio",
      location: "Austin, TX",
      type: "Contract",
      salary: "$80k - $110k",
      posted: "3 days ago",
      logo: "https://images.unsplash.com/photo-1553484771-371a605b060b?w=64&h=64&fit=crop&crop=entropy",
      tags: ["Figma", "User Research", "Prototyping"]
    },
    {
      id: 4,
      title: "Data Scientist",
      company: "DataTech Solutions",
      location: "Seattle, WA",
      type: "Full-time",
      salary: "$130k - $170k",
      posted: "4 days ago",
      logo: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=64&h=64&fit=crop&crop=entropy",
      tags: ["Python", "ML", "SQL"]
    },
    {
      id: 5,
      title: "DevOps Engineer",
      company: "CloudFirst",
      location: "Remote",
      type: "Full-time",
      salary: "$110k - $150k",
      posted: "1 week ago",
      logo: "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=64&h=64&fit=crop&crop=entropy",
      tags: ["AWS", "Docker", "Kubernetes"]
    },
    {
      id: 6,
      title: "Marketing Director",
      company: "BrandBoost",
      location: "Los Angeles, CA",
      type: "Full-time",
      salary: "$150k - $200k",
      posted: "5 days ago",
      logo: "https://images.unsplash.com/photo-1560472355-536de3962603?w=64&h=64&fit=crop&crop=entropy",
      tags: ["Digital Marketing", "Growth", "Team Lead"]
    }
  ];

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
            Discover hand-picked opportunities from top companies looking for talented professionals like you.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {jobs.map((job) => (
            <div 
              key={job.id} 
              className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-all duration-300 hover:-translate-y-1"
            >
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-4">
                    <img 
                      src={job.logo} 
                      alt={job.company}
                      className="w-12 h-12 rounded-lg object-cover border border-gray-200"
                    />
                    <div>
                      <h3 className="font-bold text-lg text-gray-900 hover:text-blue-600 transition-colors">
                        {job.title}
                      </h3>
                      <p className="text-gray-600 flex items-center text-sm">
                        <Building className="w-4 h-4 mr-1 text-gray-400" />
                        {job.company}
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-gray-600 text-sm">
                    <MapPin className="w-4 h-4 mr-2 text-gray-400" />
                    {job.location}
                  </div>
                  
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center text-gray-600">
                      <Clock className="w-4 h-4 mr-2 text-gray-400" />
                      {job.type}
                    </div>
                    <div className="flex items-center text-green-600 font-medium">
                      <DollarSign className="w-4 h-4 mr-1" />
                      {job.salary}
                    </div>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {job.tags.map((tag, index) => (
                    <span 
                      key={index} 
                      className="px-2.5 py-1 text-xs font-medium text-gray-600 bg-gray-50 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <span className="text-sm text-gray-500">{job.posted}</span>
                  <button className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                    Apply Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <button className="px-8 py-3 text-base font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 hover:border-gray-400 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
            View All Jobs
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedJobs;