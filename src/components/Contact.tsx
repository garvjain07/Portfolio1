import React from 'react';
import { Mail, Github, Linkedin, MapPin, Send, User } from 'lucide-react';

const Contact: React.FC = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'garvjainmundi@gmail.com',
      link: 'mailto:garvjainmundi@gmail.com',
      color: 'from-red-500 to-pink-600'
    },
    {
      icon: Github,
      label: 'GitHub',
      value: 'github.com/garvjain07',
      link: 'https://github.com/garvjain07',
      color: 'from-gray-700 to-gray-900'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'linkedin.com/in/garv-jain',
      link: 'https://www.linkedin.com/in/garv-jain-1478a22b7?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
      color: 'from-blue-600 to-blue-800'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-gray-900 to-blue-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Let's <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Connect</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            I'm always open to discussing new opportunities, collaborations, or just having a great conversation about technology
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6 flex items-center">
                <User className="w-8 h-8 mr-3 text-blue-400" />
                Get in Touch
              </h3>
              <p className="text-gray-300 mb-8 leading-relaxed">
                Whether you're looking for a passionate developer for your team, want to collaborate on an exciting project, 
                or simply want to connect and share ideas, I'd love to hear from you!
              </p>
              
              <div className="space-y-6">
                {contactInfo.map((contact, index) => {
                  const IconComponent = contact.icon;
                  return (
                    <a
                      key={index}
                      href={contact.link}
                      target={contact.link.startsWith('http') ? '_blank' : undefined}
                      rel={contact.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="group flex items-center p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-all duration-300 transform hover:scale-105"
                    >
                      <div className={`w-14 h-14 rounded-xl bg-gradient-to-r ${contact.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                        <IconComponent className="w-7 h-7 text-white" />
                      </div>
                      <div className="ml-4">
                        <h4 className="font-semibold text-white group-hover:text-blue-400 transition-colors duration-300">
                          {contact.label}
                        </h4>
                        <p className="text-gray-300 text-sm">{contact.value}</p>
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Location Card */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8">
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <MapPin className="w-6 h-6 mr-3 text-green-400" />
                Current Location
              </h3>
              <p className="text-gray-300">Pune, Maharashtra, India</p>
              <p className="text-gray-400 text-sm mt-2">Available for remote opportunities</p>
            </div>
          </div>

          {/* Call to Action */}
          <div className="space-y-8">
            <div className="bg-gradient-to-br from-blue-600/20 to-purple-600/20 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
              <h3 className="text-2xl font-bold mb-6">Ready to Start a Conversation?</h3>
              <p className="text-gray-300 mb-8 leading-relaxed">
                I'm currently seeking internship opportunities and open to discussing exciting projects. 
                Let's explore how we can work together to create something amazing!
              </p>
              
              <div className="space-y-4">
                <a
                  href="mailto:garvjainmundi@gmail.com"
                  className="w-full flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  <Send className="w-5 h-5 mr-3" />
                  Send me an Email
                </a>
                
                <a
                  href="https://www.linkedin.com/in/garv-jain-1478a22b7?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center px-8 py-4 border-2 border-blue-400 text-blue-400 font-semibold rounded-xl hover:bg-blue-400 hover:text-white transition-all duration-300 shadow-md hover:shadow-lg"
                >
                  <Linkedin className="w-5 h-5 mr-3" />
                  Connect on LinkedIn
                </a>
              </div>
            </div>

            {/* Skills Summary */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8">
              <h3 className="text-xl font-bold mb-4">What I Bring</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-white/5 rounded-lg">
                  <div className="text-2xl font-bold text-blue-400">4+</div>
                  <div className="text-sm text-gray-300">Projects</div>
                </div>
                <div className="text-center p-4 bg-white/5 rounded-lg">
                  <div className="text-2xl font-bold text-purple-400">5+</div>
                  <div className="text-sm text-gray-300">Languages</div>
                </div>
                <div className="text-center p-4 bg-white/5 rounded-lg">
                  <div className="text-2xl font-bold text-green-400">3+</div>
                  <div className="text-sm text-gray-300">Years Learning</div>
                </div>
                <div className="text-center p-4 bg-white/5 rounded-lg">
                  <div className="text-2xl font-bold text-yellow-400">∞</div>
                  <div className="text-sm text-gray-300">Enthusiasm</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;