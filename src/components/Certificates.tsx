import React from 'react';
import { Award, ExternalLink } from 'lucide-react';

const Certificates: React.FC = () => {
  const certificates = [
    {
      title: 'Supervised Machine Learning: Regression and Classification',
      provider: 'DeepLearning.AI',
      platform: 'Coursera',
      credentialUrl: 'https://coursera.org/share/07ac2c7fd104b533d1bfe94cc47ba87b',
      icon: '🎓',
      color: 'from-blue-500 to-indigo-600',
      skills: [
        'Python Programming',
        'Machine Learning',
        'NumPy',
        'Scikit-Learn',
        'Logistic Regression',
        'Regression Analysis'
      ],
      learningOutcomes: [
        'Build machine learning models in Python using NumPy & scikit-learn',
        'Train supervised ML models for prediction & binary classification tasks',
        'Implement linear regression & logistic regression algorithms'
      ]
    },
    {
      title: 'Python (Basic) Certificate',
      provider: 'HackerRank',
      platform: 'HackerRank',
      credentialUrl: 'https://www.hackerrank.com/certificates/773e828cac0b',
      icon: '🐍',
      color: 'from-green-500 to-emerald-600',
      skills: [
        'Python Programming',
        'Scalar Types',
        'Control Flow',
        'Collections',
        'Modularity',
        'Objects and Classes'
      ],
      learningOutcomes: [
        'Master Python scalar types, operators and control flow structures',
        'Work with strings, collections and iteration techniques',
        'Implement modularity, objects, types and classes in Python'
      ]
    }
  ];

  return (
    <section id="certificates" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Certificates</span> & Credentials
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Professional certifications and completed courses in advanced technologies
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8">
          {certificates.map((cert, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 overflow-hidden"
            >
              <div className="p-8">
                {/* Certificate Header */}
                <div className="flex items-start gap-6 mb-6">
                  <div className={`w-20 h-20 rounded-2xl bg-gradient-to-r ${cert.color} flex items-center justify-center text-3xl shadow-lg flex-shrink-0`}>
                    {cert.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {cert.title}
                    </h3>
                    <p className="text-lg text-gray-600">
                      {cert.provider} • {cert.platform}
                    </p>
                  </div>
                </div>

                {/* Learning Outcomes */}
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                    <Award className="w-5 h-5 mr-2 text-blue-600" />
                    What I Learned
                  </h4>
                  <ul className="space-y-2">
                    {cert.learningOutcomes.map((outcome, idx) => (
                      <li key={idx} className="flex items-start text-gray-700">
                        <span className="text-blue-600 mr-2">✓</span>
                        <span>{outcome}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Skills */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-900 mb-3">
                    Skills Gained
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {cert.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-3 py-1 bg-blue-100 text-blue-700 text-sm rounded-full hover:bg-blue-200 transition-colors duration-200"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* View Certificate Button */}
                <div className="flex justify-end">
                  <a
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg"
                  >
                    <span className="font-medium">View Certificate</span>
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;
