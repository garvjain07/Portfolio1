import React from 'react';
import { Heart, Code } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center space-y-4">
          {/* Name */}
          <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Garv Jain
          </h3>
          
          {/* Made with Love */}
          <div className="flex items-center text-gray-400 text-sm">
            <span>Made with</span>
            <Heart className="w-4 h-4 mx-2 text-red-500 animate-pulse" />
            <span>and</span>
            <Code className="w-4 h-4 mx-2 text-blue-500" />
            <span>by Garv Jain</span>
          </div>
          
          {/* Copyright */}
          <div className="text-gray-500 text-sm text-center">
            <p>&copy; {new Date().getFullYear()} Garv Jain. All rights reserved.</p>
            <p className="mt-1">B.Tech Student | IIIT Pune | Computer Science Engineering</p>
          </div>
          
          {/* Quote */}
          <div className="text-center max-w-2xl">
            <p className="text-gray-400 text-sm italic">
              "Transforming ideas into practical applications that add value"
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;