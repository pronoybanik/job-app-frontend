import { Shield, Zap, Users, Award } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: Shield,
      title: "Verified Companies",
      description: "All companies are verified and trusted. Apply with confidence knowing you're dealing with legitimate employers.",
      color: "bg-blue-100 text-blue-600"
    },
    {
      icon: Zap,
      title: "Instant Matching",
      description: "Our AI-powered algorithm matches you with jobs that fit your skills, experience, and preferences perfectly.",
      color: "bg-yellow-100 text-yellow-600"
    },
    {
      icon: Users,
      title: "Career Support",
      description: "Get access to career coaches, resume reviews, and interview preparation to boost your success rate.",
      color: "bg-green-100 text-green-600"
    },
    {
      icon: Award,
      title: "Premium Opportunities",
      description: "Access exclusive job openings from top-tier companies that aren't available anywhere else.",
      color: "bg-purple-100 text-purple-600"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Choose <span className="text-blue-600">JobVerse</span>?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We're more than just a job board. We're your career partner, dedicated to helping you succeed.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div 
                key={index} 
                className="bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 p-6 text-center"
              >
                <div className={`w-14 h-14 rounded-full ${feature.color} flex items-center justify-center mx-auto mb-5`}>
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;