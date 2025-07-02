
import React from 'react';
import { Mail, Github, Linkedin, Instagram, User, ArrowRight } from 'lucide-react';

const Contact = () => {
  const socialLinks = [
    {
      name: "Email",
      handle: "anshuman.rai.1004@gmail.com",
      icon: Mail,
      gradient: "from-red-500 to-pink-500",
      bgGradient: "from-red-50 to-pink-50",
      href: "mailto:anshuman.rai.1004@gmail.com"
    },
    {
      name: "GitHub",
      handle: "github.com/Anshuman-Rai-1004",
      icon: Github,
      gradient: "from-gray-700 to-gray-900",
      bgGradient: "from-gray-50 to-slate-50",
      href: "https://github.com/Anshuman-Rai-1004"
    },
    {
      name: "LinkedIn",
      handle: "linkedin.com/in/anshuman-rai-0433032b9",
      icon: Linkedin,
      gradient: "from-blue-600 to-blue-800",
      bgGradient: "from-blue-50 to-indigo-50",
      href: "https://www.linkedin.com/in/anshuman-rai-0433032b9"
    },
    {
      name: "Instagram",
      handle: "@thesamratanshuman",
      icon: Instagram,
      gradient: "from-purple-500 to-pink-500",
      bgGradient: "from-purple-50 to-pink-50",
      href: "https://www.instagram.com/thesamratanshuman?igsh=aDNyNWVrZHBnbmQ0"
    }
  ];

  return (
    <section id="contact" className="py-20 px-4 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-40 h-40 border border-blue-400 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-32 h-32 border border-emerald-400 rounded-lg rotate-45 animate-pulse delay-300"></div>
        <div className="absolute bottom-20 left-1/4 w-24 h-24 border border-purple-400 rounded-full animate-pulse delay-700"></div>
        <div className="absolute bottom-40 right-1/3 w-28 h-28 border border-pink-400 rounded-lg rotate-12 animate-pulse delay-500"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Let's <span className="bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">Connect</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ready to collaborate on exciting projects, discuss innovative ideas, or explore internship opportunities? 
            Let's build something amazing together and create impactful tech solutions!
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {socialLinks.map((link, index) => {
            const IconComponent = link.icon;
            return (
              <a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group block"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="bg-white/10 backdrop-blur-lg p-6 rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-500 hover:scale-105 hover:shadow-2xl">
                  <div className="flex items-center gap-4">
                    <div className={`p-3 rounded-xl bg-gradient-to-r ${link.gradient} shadow-lg group-hover:shadow-xl transition-all duration-300`}>
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-bold text-white mb-1">{link.name}</h3>
                      <p className="text-gray-300 text-sm truncate">{link.handle}</p>
                    </div>
                    <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-white group-hover:translate-x-1 transition-all duration-300" />
                  </div>
                </div>
              </a>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center bg-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/10">
          <div className="max-w-3xl mx-auto">
            <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-blue-500 to-emerald-500 rounded-full flex items-center justify-center shadow-2xl">
              <User className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-3xl font-bold mb-4">Ready to Collaborate?</h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Whether you're looking for a skilled full-stack developer, a dedicated team member, or someone passionate about 
              AI/ML and community building, I'm always excited to take on new challenges. Currently open to internships, 
              freelance projects, and opportunities to contribute to impactful tech solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="mailto:anshuman.rai.1004@gmail.com"
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-emerald-600 text-white rounded-full font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
              >
                <div className="flex items-center gap-2 justify-center">
                  <Mail className="w-5 h-5" />
                  Get In Touch
                </div>
              </a>
              <a 
                href="https://www.linkedin.com/in/anshuman-rai-0433032b9"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-white/10 text-white rounded-full font-semibold border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105"
              >
                <div className="flex items-center gap-2 justify-center">
                  <Linkedin className="w-5 h-5" />
                  Connect on LinkedIn
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-12 pt-8 border-t border-white/10">
          <p className="text-gray-400 text-sm">
            © 2024 Anshuman Rai | Pre-Final Year B.Tech CSE (AIML) | Built with React & Tailwind CSS
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
