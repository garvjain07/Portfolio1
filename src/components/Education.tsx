import React from 'react';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';

const Education: React.FC = () => {
  return (
    <section id="education" className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Education</span>
          </h2>
          <p className="text-xl text-gray-600">Academic Background & Learning Journey</p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-600 to-purple-600 rounded-full"></div>

            {/* Education item */}
            <div className="relative flex items-center mb-8">
              <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center shadow-lg md:absolute md:left-1/2 md:transform md:-translate-x-1/2">
                <GraduationCap className="w-8 h-8 text-white" />
              </div>
              
              <div className="ml-8 md:ml-0 md:w-1/2 md:pr-8 md:text-right">
                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    Bachelor of Technology
                  </h3>
                  <h4 className="text-xl font-semibold text-blue-600 mb-4">
                    Computer Science & Engineering
                  </h4>
                  
                  <div className="space-y-3">
                    <div className="flex items-center justify-center md:justify-end text-gray-600">
                      <MapPin className="w-5 h-5 mr-2" />
                      <span>IIIT Pune</span>
                    </div>
                    
                    <div className="flex items-center justify-center md:justify-end text-gray-600">
                      <Calendar className="w-5 h-5 mr-2" />
                      <span>2023 - 2027</span>
                    </div>
                  </div>
                  
                  <div className="mt-6 p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg">
                    <p className="text-gray-700 text-center md:text-right">
                      Pursuing comprehensive education in computer science fundamentals, 
                      software engineering principles, and cutting-edge technologies.
                    </p>
                  </div>
                  
                  <div className="mt-6">
                    <h5 className="font-semibold text-gray-900 mb-3 text-center md:text-right">Key Focus Areas:</h5>
                    <div className="flex flex-wrap gap-2 justify-center md:justify-end">
                      {['Data Structures', 'Algorithms', 'OOP', 'Operating Systems', 'Web Development'].map((area) => (
                        <span 
                          key={area}
                          className="px-3 py-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm rounded-full"
                        >
                          {area}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;