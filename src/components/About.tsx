
import React from 'react';
import { Code, Star, User, Briefcase, Target, Award, Calendar, MapPin } from 'lucide-react';
import IconCloud from './ui/icon-cloud';

const About = () => {
  const skills = [
    'Java', 'C', 'Python', 'JavaScript', 'React.js', 'Node.js', 'Express.js', 'MongoDB', 'MySQL'
  ];

  const iconSlugs = [
    "java",
    "c",
    "python", 
    "javascript",
    "react",
    "nodedotjs",
    "express",
    "mongodb",
    "mysql",
    "html5",
    "css3",
    "git",
    "github",
    "firebase"
  ];

  const experiences = [
    {
      title: "Web Development Intern",
      company: "Aegistech Innovations (OPC) Pvt. Ltd.",
      duration: "Jun 2025 – Aug 2025 (45 Days)",
      type: "Remote",
      description: "Developed responsive, optimized front-end interfaces and contributed to full-stack modules using the MERN stack.",
      gradient: "from-blue-500 to-emerald-500"
    },
    {
      title: "Community Volunteer",
      company: "Google Developer Group (GDG) Prayagraj",
      duration: "Aug 2024 – Present",
      type: "Hybrid",
      description: "Promoted Google developer events through social media, campus engagement, and blog content.",
      gradient: "from-green-500 to-blue-500"
    },
    {
      title: "Head – Social Media & Marketing",
      company: "Prerogative Pointers, United University",
      duration: "Jan 2025 – Jun 2025",
      type: "On-Campus",
      description: "Led marketing campaigns for technical events and workshops, managing creative team.",
      gradient: "from-orange-500 to-red-500"
    },
    {
      title: "Content Writing Intern",
      company: "Aegistech Innovations (OPC) Pvt. Ltd.",
      duration: "Feb 2025 – Apr 2025",
      type: "Remote",
      description: "Crafted SEO-friendly blogs, web content, and social media posts tailored to tech audiences.",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      title: "Executive Member",
      company: "Public Relations and Outreach Team, Prerogative Pointers, United University",
      duration: "Apr 2024 – Jan 2025",
      type: "On-Campus",
      description: "Managed and executed PR strategies for event promotion, campus engagement, and collaborations. Handled external outreach to invite speakers, sponsors, and partners for events.",
      gradient: "from-orange-500 to-red-500"
    }
  ];

  return (
    <section id="about" className="py-20 px-4 bg-gradient-to-br from-slate-50 to-blue-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-24 h-24 border border-blue-400 rounded-full"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 border border-emerald-400 rounded-lg rotate-45"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-white/50 backdrop-blur-sm px-4 py-2 rounded-full border border-blue-200 mb-4">
            <User className="w-4 h-4 text-blue-600" />
            <span className="text-blue-600 font-medium">Get To Know Me</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            About <span className="bg-gradient-to-r from-blue-600 to-emerald-600 bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A Computer Science student passionate about turning ideas into real-world tech solutions. 
            Currently contributing to scalable full-stack web projects while building developer communities.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Left Side - Personal Info */}
          <div className="space-y-8">
            <div className="bg-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-500 border border-white/50">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-full">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800">My Journey</h3>
              </div>
              <p className="text-gray-600 leading-relaxed mb-4">
                I'm Anshuman Rai, a pre-final year B.Tech CSE (AIML) student at United University (Batch 2023–27). 
                With hands-on experience in MERN Stack, Java, DSA, and UI/UX Design, I thrive as both a developer and community leader.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Whether I'm building apps, managing tech events, or leading a student chapter, I believe in learning, 
                building, and lifting others around me. I'm currently gaining real-world experience as a Web Development Intern at Aegistech Innovations.
              </p>
            </div>

            <div className="bg-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-500 border border-white/50">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-full">
                  <Code className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800">Technical Arsenal</h3>
              </div>
              
              {/* Interactive Tech Cloud */}
              <div className="mb-6">
                <IconCloud iconSlugs={iconSlugs} />
              </div>
              
              <div className="grid grid-cols-2 gap-3">
                {skills.map((skill, index) => (
                  <div 
                    key={skill}
                    className="flex items-center gap-2 p-3 bg-gradient-to-r from-gray-50 to-blue-50 rounded-xl border border-gray-200 hover:shadow-md transition-all duration-300 hover:scale-105"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="w-2 h-2 bg-gradient-to-r from-emerald-400 to-blue-400 rounded-full"></div>
                    <span className="text-gray-700 font-medium text-sm">{skill}</span>
                  </div>
                ))}
              </div>
              <div className="mt-4 p-3 bg-gradient-to-r from-orange-50 to-red-50 rounded-xl border border-orange-100">
                <p className="text-gray-700 font-medium text-sm">
                  <span className="text-orange-600">Other Skills:</span> Git & GitHub, Firebase, Canva, UI/UX Design, SEO Writing, Content Strategy, Public Relations, Event Planning
                </p>
              </div>
            </div>
          </div>

          {/* Right Side - Experience Timeline */}
          <div className="space-y-6">
            <div className="bg-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-500 border border-white/50">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full">
                  <Briefcase className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800">Professional Experience</h3>
              </div>
              
              <div className="space-y-6">
                {experiences.map((exp, index) => (
                  <div 
                    key={exp.title}
                    className="relative pl-6 border-l-2 border-gray-200 last:border-l-0"
                    style={{ animationDelay: `${index * 200}ms` }}
                  >
                    <div className={`absolute -left-2 top-0 w-4 h-4 bg-gradient-to-r ${exp.gradient} rounded-full`}></div>
                    <div className="bg-gradient-to-r from-gray-50 to-blue-50 p-4 rounded-xl border border-gray-100">
                      <div className="flex flex-wrap items-center gap-2 mb-2">
                        <h4 className="font-bold text-gray-800">{exp.title}</h4>
                        <span className={`px-2 py-1 bg-gradient-to-r ${exp.gradient} text-white text-xs rounded-full`}>
                          {exp.type}
                        </span>
                      </div>
                      <p className="text-gray-700 font-medium text-sm mb-1">{exp.company}</p>
                      <div className="flex items-center gap-1 mb-2">
                        <Calendar className="w-3 h-3 text-gray-500" />
                        <p className="text-gray-500 text-xs">{exp.duration}</p>
                      </div>
                      <p className="text-gray-600 text-sm leading-relaxed">{exp.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center p-6 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-white/50">
            <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-emerald-600 bg-clip-text text-transparent mb-2">6+</div>
            <div className="text-gray-600 font-medium">Completed Projects</div>
          </div>
          <div className="text-center p-6 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-white/50">
            <div className="text-3xl font-bold bg-gradient-to-r from-emerald-600 to-purple-600 bg-clip-text text-transparent mb-2">80+</div>
            <div className="text-gray-600 font-medium">Events Participated</div>
          </div>
          <div className="text-center p-6 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-white/50">
            <div className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">20+</div>
            <div className="text-gray-600 font-medium">Leadership Roles</div>
          </div>
          <div className="text-center p-6 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-white/50">
            <div className="text-3xl font-bold bg-gradient-to-r from-pink-600 to-blue-600 bg-clip-text text-transparent mb-2">150+</div>
            <div className="text-gray-600 font-medium">Event Participants</div>
          </div>
        </div>*/}
      </div>
    </section>
  );
};

export default About;
