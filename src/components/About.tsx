import React from 'react';
import { User, Target, Lightbulb } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            About <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Passionate about transforming ideas into practical applications
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {/* Profile Card */}
          <div className="lg:col-span-1">
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 h-full">
              <div className="text-center">
                <div className="w-32 h-32 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <User className="w-16 h-16 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Garv Jain</h3>
                <p className="text-lg text-gray-600 mb-4">CS Engineering Student</p>
                <p className="text-base text-gray-600">IIIT Pune | Batch 2023-27</p>
              </div>
            </div>
          </div>

          {/* Bio Content */}
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-gray-50 rounded-2xl p-8">
              <div className="flex items-center mb-6">
                <Target className="w-8 h-8 text-blue-600 mr-4" />
                <h3 className="text-2xl font-bold text-gray-900">My Journey</h3>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">
                I am a motivated B.Tech student specializing in Computer Science Engineering at IIIT Pune. 
                My passion lies in software development, problem-solving, and exploring emerging technologies 
                that shape our digital world.
              </p>
              <p className="text-gray-700 leading-relaxed">
                I enjoy the challenge of building impactful projects and continuously learning new tools 
                and frameworks. What drives me most is the opportunity to transform innovative ideas into 
                practical applications that add real value to users' lives.
              </p>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8">
              <div className="flex items-center mb-6">
                <Lightbulb className="w-8 h-8 text-purple-600 mr-4" />
                <h3 className="text-2xl font-bold text-gray-900">What Motivates Me</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <h4 className="font-semibold text-gray-900">Problem Solving</h4>
                  <p className="text-gray-600">Tackling complex challenges with creative solutions</p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-semibold text-gray-900">Continuous Learning</h4>
                  <p className="text-gray-600">Staying updated with latest technologies and trends</p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-semibold text-gray-900">Collaboration</h4>
                  <p className="text-gray-600">Growing through teamwork and knowledge sharing</p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-semibold text-gray-900">Real-world Impact</h4>
                  <p className="text-gray-600">Building applications that make a difference</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;