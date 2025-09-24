import React from 'react';
import { ChevronDown, Code, Cpu } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(68,68,68,.05)_50%,transparent_75%,transparent)] bg-[length:20px_20px] animate-pulse"></div>
      </div>

      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="space-y-8">
          {/* Animated icon */}
          <div className="flex justify-center space-x-4 mb-8">
            <div className="p-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full animate-bounce">
              <Code className="w-8 h-8 text-white" />
            </div>
            <div className="p-4 bg-gradient-to-r from-purple-500 to-blue-600 rounded-full animate-bounce delay-75">
              <Cpu className="w-8 h-8 text-white" />
            </div>
          </div>

          {/* Main heading */}
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold">
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent">
                Garv Jain
              </span>
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-700">
              Computer Science Engineering Student
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              B.Tech Student at IIIT Pune | Passionate about Software Development & Problem Solving
            </p>
          </div>

          {/* Call to action */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={scrollToAbout}
              className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Explore My Work
            </button>
            <a
              href="mailto:garvjainmundi@gmail.com"
              className="px-8 py-3 border-2 border-blue-600 text-blue-600 font-semibold rounded-full hover:bg-blue-600 hover:text-white transition-all duration-300 shadow-md hover:shadow-lg"
            >
              Get in Touch
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <button
            onClick={scrollToAbout}
            className="animate-bounce text-gray-600 hover:text-blue-600 transition-colors duration-200"
          >
            <ChevronDown className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;