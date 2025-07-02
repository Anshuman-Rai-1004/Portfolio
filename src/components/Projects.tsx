
import React from 'react';
import { Code, Github, Star, Briefcase, ExternalLink } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "LearningRecite",
      description: "A career roadmap platform inspired by roadmap.sh, offering curated learning paths and mentorship to simplify career guidance for students.",
      tech: ["React", "Node.js", "MongoDB", "UI/UX Design"],
      category: "Web Platform",
      gradient: "from-blue-500 to-purple-600",
      status: "Live"
    },
    {
      title: "VastraKart",
      description: "Multi-vendor clothing e-commerce platform developed during internship at Aegistech Innovations using complete MERN stack architecture.",
      tech: ["MERN Stack", "Payment Gateway", "Multi-vendor", "Responsive Design"],
      category: "E-commerce",
      gradient: "from-emerald-500 to-teal-600",
      status: "Internship Project"
    },
    {
      title: "Return Gift UAE",
      description: "Freelance project focusing on UI/UX design for an international gifting portal, creating intuitive user experiences for global customers.",
      tech: ["UI/UX Design", "Prototyping", "User Research", "Figma"],
      category: "Freelance",
      gradient: "from-purple-500 to-pink-600",
      status: "Completed"
    },
    {
      title: "SignSetu",
      description: "Secure digital signature verification system with robust backend APIs, ensuring document authenticity and user verification.",
      tech: ["Node.js", "Express", "Authentication", "Security"],
      category: "Security Tech",
      gradient: "from-red-500 to-orange-600",
      status: "Development"
    },
    {
      title: "Portfolio Website",
      description: "Personal brand site built with React & Framer Motion, showcasing projects and professional journey with modern animations.",
      tech: ["React", "Framer Motion", "Tailwind CSS", "Responsive"],
      category: "Personal Brand",
      gradient: "from-cyan-500 to-blue-600",
      status: "Live"
    },
    /*{
      title: "Live Location Tracking for NSG",
      description: "Advanced real-time soldier movement tracking system in urban CQB zones displayed on interactive 3D model maps for strategic operations.",
      tech: ["3D Mapping", "Real-time Tracking", "Security", "GPS Integration"],
      category: "Security Tech",
      gradient: "from-green-500 to-blue-600",
      status: "Prototype"
    }*/
  ];

  return (
    <section id="projects" className="py-2 px-4 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            My <span className="bg-gradient-to-r from-blue-600 to-emerald-600 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A showcase of innovative solutions and impactful applications I've built across internships, freelance work, and personal projects
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={project.title}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden hover:scale-105"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Project Header */}
              <div className={`h-2 bg-gradient-to-r ${project.gradient}`}></div>
              
              <div className="p-6">
                {/* Category Badge & Status */}
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 bg-gray-100 text-gray-600 text-xs font-medium rounded-full">
                    {project.category}
                  </span>
                  <div className="flex items-center gap-2">
                    <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                      project.status === 'Live' ? 'bg-green-100 text-green-600' :
                      project.status === 'Development' ? 'bg-blue-100 text-blue-600' :
                      project.status === 'Completed' ? 'bg-purple-100 text-purple-600' :
                      'bg-orange-100 text-orange-600'
                    }`}>
                      {project.status}
                    </span>
                    <Code className="w-5 h-5 text-gray-400 group-hover:text-blue-500 transition-colors duration-300" />
                  </div>
                </div>

                {/* Project Title */}
                <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                  {project.title}
                </h3>

                {/* Project Description */}
                <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-4">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span 
                      key={tech}
                      className="px-2 py-1 bg-gray-50 text-gray-600 text-xs rounded-md border border-gray-200 hover:border-blue-300 transition-colors duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-2">
                  <button className="flex-1 py-2 bg-gradient-to-r from-blue-500 to-emerald-500 text-white rounded-lg font-medium hover:shadow-lg transition-all duration-300 group-hover:scale-105 text-sm">
                    <div className="flex items-center justify-center gap-1">
                      <ExternalLink className="w-4 h-4" />
                      View Details
                    </div>
                  </button>
                  <button className="p-2 bg-gray-100 text-gray-600 rounded-lg hover:bg-gray-200 transition-colors duration-300">
                    <Github className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center mt-12">
          <a 
            href="https://github.com/Anshuman-Rai-1004" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group px-8 py-4 bg-white text-gray-700 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-gray-200 hover:border-blue-300 inline-flex items-center gap-2"
          >
            <Github className="w-5 h-5" />
            View All Projects on GitHub
            <Star className="w-5 h-5 group-hover:text-yellow-500 transition-colors duration-300" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
