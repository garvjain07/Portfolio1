import React from 'react';
import { ExternalLink, Code, Folder, Search, Calculator } from 'lucide-react';

const Projects: React.FC = () => {
  const projects = [
    {
      title: 'UniConnect',
      description: 'A full-stack campus marketplace with real-time chat and AI-powered recommendations.',
      technologies: ['React', 'Express.js', 'MongoDB', 'Socket.IO', 'FastAPI'],
      details: 'Campus marketplace featuring real-time chat, moderation system, bill sharing, and ML-powered recommendations.',
      icon: '🎓',
      color: 'from-pink-500 to-rose-600',
      link: 'https://github.com/garvjain07/UNICONNECT',
      deployLink: 'https://uniconnect-campus.vercel.app/'
    },
    {
      title: 'FaceFind - AI Face Recognition Photo Search Platform',
      description: 'Upload event photos and instantly find only your photos using AI-based face recognition.',
      technologies: ['React.js', 'Tailwind CSS', 'Python FastAPI', 'OpenCV', 'face_recognition (dlib)', 'SQLite'],
      details: 'Designed for event photo retrieval workflows, allowing users to scan via webcam or upload a selfie to search photos quickly and accurately.',
      icon: <Search className="w-8 h-8 text-white" />,
      color: 'from-orange-500 to-red-600',
      link: 'https://github.com/garvjain07/Face-Finder-AI-Recognition',
      deployLink: 'https://face-finder-ai-recognition.vercel.app/'
    },
    {
      title: 'Routine Planner',
      description: 'A full-stack productivity app to plan days, track habits, manage goals, and visualize progress.',
      technologies: ['React 18', 'Vite 5', 'Tailwind CSS 3', 'Node.js', 'Express 4', 'MongoDB', 'JWT'],
      details: 'Includes dashboard, daily planner, habit streak tracker, goals, journal, meal & workout modules, and analytics charts in a cyberpunk-inspired UI.',
      icon: '🗓️',
      color: 'from-purple-500 to-violet-600',
      link: 'https://github.com/garvjain07/Routine_Planner',
      deployLink: 'https://routine-planner-three.vercel.app/login'
    },
    {
      title: 'Stock Maintenance System',
      description: 'A comprehensive stock management and billing system for inventory control.',
      technologies: ['React 18', 'Node.js', 'Express.js', 'MongoDB', 'Tailwind CSS'],
      details: 'Complete stock maintenance system with integrated billing functionality for efficient inventory tracking and management.',
      icon: '📦',
      color: 'from-indigo-500 to-blue-600',
      link: 'https://github.com/garvjain07/Stock_Management_System',
      deployLink: 'https://stock-management-system-bice-theta.vercel.app/login'
    },
    {
      title: 'Tic Tac Toe Game',
      description: 'A modern tic-tac-toe game with AI opponent using minimax algorithm.',
      technologies: ['React 18', 'Vite', 'CSS3', 'JavaScript', 'AI Algorithm'],
      details: 'Features Player vs Player and Player vs Computer modes with three difficulty levels. Built with React and minimax algorithm with alpha-beta pruning for optimal AI gameplay.',
      icon: '🎮',
      color: 'from-blue-500 to-cyan-600',
      link: 'https://github.com/garvjain07/tic-tac-toe',
      deployLink: 'https://tic-tac-toe-chi-lilac.vercel.app/'
    },
    {
      title: 'Scientific Calculator',
      description: 'A feature-rich scientific calculator for advanced arithmetic and mathematical operations.',
      technologies: ['JavaScript', 'HTML5', 'CSS3', 'Math Functions', 'Responsive UI'],
      details: 'Built an interactive scientific calculator with support for advanced operations, clean UI interactions, and responsive behavior across devices.',
      icon: <Calculator className="w-8 h-8 text-white" />,
      color: 'from-green-500 to-emerald-600',
      link: 'https://github.com/garvjain07/Scientific-Calculator',
      deployLink: 'https://scientific-calculator-xi-silk.vercel.app/'
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            My <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A showcase of my development journey through various technologies and problem-solving approaches
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
            >
              <div className="p-8">
                {/* Project Header */}
                <div className="flex items-center mb-6">
                  <div className={`w-16 h-16 aspect-square shrink-0 rounded-2xl bg-gradient-to-r ${project.color} flex items-center justify-center text-2xl shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    {project.icon}
                  </div>
                  <div className="ml-4">
                    <h3 className="text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                      {project.title}
                    </h3>
                  </div>
                </div>

                {/* Project Description */}
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <p className="text-gray-700 mb-6 text-sm">
                  {project.details}
                </p>

                {/* Technologies */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-900 mb-3 flex items-center">
                    <Code className="w-4 h-4 mr-2" />
                    Technologies Used
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full hover:bg-blue-100 hover:text-blue-700 transition-colors duration-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Project Actions */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-sm text-gray-500">
                    <Folder className="w-4 h-4 mr-1" />
                    Project
                  </div>
                  <div className="flex gap-2">
                    {project.deployLink && (
                      <a
                        href={project.deployLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center px-4 py-2 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-full hover:from-green-700 hover:to-emerald-700 transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg"
                      >
                        <span className="text-sm font-medium">Live Demo</span>
                        <ExternalLink className="w-4 h-4 ml-2" />
                      </a>
                    )}
                    {project.link ? (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg"
                      >
                        <span className="text-sm font-medium">GitHub</span>
                        <ExternalLink className="w-4 h-4 ml-2" />
                      </a>
                    ) : (
                      <button className="flex items-center px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg">
                        <span className="text-sm font-medium">View Details</span>
                        <ExternalLink className="w-4 h-4 ml-2" />
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6">
            Each project represents a step in my learning journey, focusing on different aspects of software development.
          </p>
          <a
            href="https://github.com/garvjain07"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 border-2 border-blue-600 text-blue-600 font-semibold rounded-full hover:bg-blue-600 hover:text-white transition-all duration-300 shadow-md hover:shadow-lg"
          >
            <Code className="w-5 h-5 mr-2" />
            View All Projects on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;