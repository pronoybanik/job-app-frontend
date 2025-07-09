import { Code, Heart, DollarSign, Megaphone, GraduationCap, Truck, Camera, Users } from 'lucide-react';

const JobCategories = () => {
  const categories = [
    {
      name: "Technology",
      jobs: "12,547",
      icon: Code,
      color: "bg-blue-100 text-blue-600"
    },
    {
      name: "Healthcare",
      jobs: "8,234",
      icon: Heart,
      color: "bg-red-100 text-red-600"
    },
    {
      name: "Finance",
      jobs: "6,891",
      icon: DollarSign,
      color: "bg-green-100 text-green-600"
    },
    {
      name: "Marketing",
      jobs: "5,432",
      icon: Megaphone,
      color: "bg-purple-100 text-purple-600"
    },
    {
      name: "Education",
      jobs: "4,567",
      icon: GraduationCap,
      color: "bg-yellow-100 text-yellow-600"
    },
    {
      name: "Logistics",
      jobs: "3,891",
      icon: Truck,
      color: "bg-orange-100 text-orange-600"
    },
    {
      name: "Creative",
      jobs: "2,678",
      icon: Camera,
      color: "bg-pink-100 text-pink-600"
    },
    {
      name: "HR & Admin",
      jobs: "2,345",
      icon: Users,
      color: "bg-indigo-100 text-indigo-600"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Popular <span className="text-blue-600">Job Categories</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore opportunities across various industries and find the perfect career path for your skills.
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {categories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div 
                key={index} 
                className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-all duration-300 hover:-translate-y-1 p-6 text-center"
              >
                <div className={`w-16 h-16 rounded-full ${category.color} flex items-center justify-center mx-auto mb-4`}>
                  <Icon className="w-8 h-8" />
                </div>
                <h3 className="font-semibold text-lg text-gray-900 mb-2">
                  {category.name}
                </h3>
                <p className="text-gray-600">
                  {category.jobs} jobs
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default JobCategories;

