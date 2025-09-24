import React from 'react';
import { Trophy, Code2, Users, Award, Target, Sparkles } from 'lucide-react';

const Achievements: React.FC = () => {
  const achievements = [
    {
      title: 'Competitive Programming',
      icon: Code2,
      color: 'from-yellow-500 to-orange-600',
      description: 'Active participant in coding contests on multiple platforms',
      details: [
        'LeetCode problem solving',
        'Codeforces competitions',
        'CodeChef challenges'
      ],
      badge: 'Problem Solver'
    },
    {
      title: 'Smart India Hackathon 2024',
      icon: Target,
      color: 'from-green-500 to-emerald-600',
      description: 'Participated in the prestigious national-level hackathon',
      details: [
        'Team of 5 members',
        'National-level competition',
        'Innovative solution development'
      ],
      badge: 'Team Player'
    },
    {
      title: 'Iconclave Management Team',
      icon: Users,
      color: 'from-blue-500 to-cyan-600',
      description: 'Served as Management Team Member for college fest',
      details: [
        'Event organization',
        'Team coordination',
        'Leadership responsibilities'
      ],
      badge: 'Leader'
    },
    {
      title: 'Mess Committee Member',
      icon: Award,
      color: 'from-purple-500 to-violet-600',
      description: 'Active member of the Mess Committee at IIIT Pune',
      details: [
        'Student representation',
        'Quality management',
        'Community service'
      ],
      badge: 'Community'
    }
  ];

  return (
    <section id="achievements" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Achievements & <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Activities</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Highlights from my academic journey and extracurricular involvement
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {achievements.map((achievement, index) => {
            const IconComponent = achievement.icon;
            return (
              <div
                key={index}
                className="group bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
              >
                {/* Achievement Header */}
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${achievement.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                        {achievement.title}
                      </h3>
                    </div>
                  </div>
                  <span className={`px-3 py-1 bg-gradient-to-r ${achievement.color} text-white text-xs font-semibold rounded-full`}>
                    {achievement.badge}
                  </span>
                </div>

                {/* Achievement Description */}
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {achievement.description}
                </p>

                {/* Achievement Details */}
                <div className="space-y-2">
                  {achievement.details.map((detail, detailIndex) => (
                    <div
                      key={detailIndex}
                      className="flex items-center p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200"
                    >
                      <Sparkles className="w-4 h-4 text-blue-600 mr-3 flex-shrink-0" />
                      <span className="text-gray-700 text-sm font-medium">{detail}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Achievement Stats */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
          <h3 className="text-2xl font-bold text-center mb-8">My Journey in Numbers</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="group">
              <div className="bg-white/20 rounded-xl p-4 hover:bg-white/30 transition-colors duration-300">
                <Trophy className="w-8 h-8 mx-auto mb-2 group-hover:scale-110 transition-transform duration-300" />
                <div className="text-2xl font-bold mb-1">3+</div>
                <div className="text-sm opacity-90">Platforms</div>
              </div>
            </div>
            <div className="group">
              <div className="bg-white/20 rounded-xl p-4 hover:bg-white/30 transition-colors duration-300">
                <Target className="w-8 h-8 mx-auto mb-2 group-hover:scale-110 transition-transform duration-300" />
                <div className="text-2xl font-bold mb-1">1</div>
                <div className="text-sm opacity-90">National Hackathon</div>
              </div>
            </div>
            <div className="group">
              <div className="bg-white/20 rounded-xl p-4 hover:bg-white/30 transition-colors duration-300">
                <Users className="w-8 h-8 mx-auto mb-2 group-hover:scale-110 transition-transform duration-300" />
                <div className="text-2xl font-bold mb-1">2</div>
                <div className="text-sm opacity-90">Leadership Roles</div>
              </div>
            </div>
            <div className="group">
              <div className="bg-white/20 rounded-xl p-4 hover:bg-white/30 transition-colors duration-300">
                <Code2 className="w-8 h-8 mx-auto mb-2 group-hover:scale-110 transition-transform duration-300" />
                <div className="text-2xl font-bold mb-1">100+</div>
                <div className="text-sm opacity-90">Problems Solved</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;