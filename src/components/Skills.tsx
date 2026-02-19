import React from 'react';
import { Code, Globe, Database, PenTool as Tool, Zap, Brain } from 'lucide-react';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: Code,
      color: 'from-blue-500 to-blue-600',
      skills: ['C', 'C++', 'Java', 'Python', 'JavaScript', 'SQL']
    },
    {
      title: 'Web Development',
      icon: Globe,
      color: 'from-green-500 to-green-600',
      skills: ['HTML', 'CSS', 'Tailwind CSS', 'React.js', 'Node.js', 'Express.js', 'REST API']
    },
    {
      title: 'Database Management',
      icon: Database,
      color: 'from-purple-500 to-purple-600',
      skills: ['MySQL', 'MongoDB', 'MongoDB Atlas']
    },
    {
      title: 'Tools & Platforms',
      icon: Tool,
      color: 'from-orange-500 to-orange-600',
      skills: ['Git/GitHub', 'VS Code', 'Vercel', 'Postman', 'Figma']
    },
    {
      title: 'Core Concepts',
      icon: Brain,
      color: 'from-red-500 to-red-600',
      skills: ['Data Structures & Algorithms', 'OOP', 'DBMS', 'Operating Systems', 'SDLC', 'System Design']
    },
    {
      title: 'Areas of Interest',
      icon: Zap,
      color: 'from-cyan-500 to-cyan-600',
      skills: ['Web Development', 'Problem Solving', 'Data Analysis', 'Machine Learning']
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Skills & <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Expertise</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Technical skills and areas of expertise that drive my development journey
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <div
                key={index}
                className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
              >
                {/* Category Header */}
                <div className="flex items-center mb-6">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${category.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="ml-4 text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                    {category.title}
                  </h3>
                </div>

                {/* Skills List */}
                <div className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skillIndex}
                      className="flex items-center p-3 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors duration-200 group-hover:bg-blue-50"
                    >
                      <div className="w-2 h-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mr-3"></div>
                      <span className="text-gray-700 font-medium group-hover:text-blue-700 transition-colors duration-200">
                        {skill}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Skill Count Badge */}
                <div className="mt-6 flex justify-end">
                  <span className="px-3 py-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm rounded-full font-medium">
                    {category.skills.length} {category.skills.length === 1 ? 'Skill' : 'Skills'}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Skill Summary */}
        <div className="mt-16 text-center">
          <div className="bg-white rounded-2xl p-8 shadow-lg max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Continuous Learning</h3>
            <p className="text-gray-600 leading-relaxed">
              My skill set continues to evolve as I explore new technologies and deepen my understanding 
              of software development principles. I'm passionate about staying current with industry trends 
              and best practices, always looking for opportunities to expand my technical expertise.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <span className="px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 rounded-full text-sm font-medium">
                Problem Solver
              </span>
              <span className="px-4 py-2 bg-gradient-to-r from-green-100 to-cyan-100 text-green-700 rounded-full text-sm font-medium">
                Quick Learner
              </span>
              <span className="px-4 py-2 bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 rounded-full text-sm font-medium">
                Team Player
              </span>
              <span className="px-4 py-2 bg-gradient-to-r from-orange-100 to-red-100 text-orange-700 rounded-full text-sm font-medium">
                Innovation Focused
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;