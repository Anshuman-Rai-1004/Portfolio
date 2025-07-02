
import React from 'react';
import { ArrowDown, Code, User, Github, Linkedin, Mail, Instagram } from 'lucide-react';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
      {/* Background Elements */}
      <div className="absolute inset-0">
        {/* Geometric shapes */}
        <div className="absolute top-20 left-10 w-32 h-32 border border-emerald-400/20 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-24 h-24 border border-blue-400/20 rounded-lg rotate-45 animate-pulse delay-300"></div>
        <div className="absolute bottom-32 left-1/4 w-16 h-16 border border-purple-400/20 rounded-full animate-pulse delay-700"></div>
        <div className="absolute bottom-40 right-1/3 w-20 h-20 border border-pink-400/20 rounded-lg rotate-12 animate-pulse delay-500"></div>
        
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 to-transparent"></div>
      </div>

      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center z-10">
        {/* Left Side - Content */}
        <div className="text-left space-y-8">
          {/* Greeting */}
          <div className="space-y-2">
            <p className="text-emerald-400 text-lg font-medium animate-fade-in">Hello, I'm</p>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight animate-fade-in delay-200">
              Anshuman 
              <span className="block bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent">
                Rai
              </span>
            </h1>
          </div>

          {/* Subtitle */}
          <div className="space-y-4 animate-fade-in delay-300">
            <h2 className="text-2xl md:text-3xl text-gray-300 font-semibold">
              Full Stack Developer & 
              <span className="text-emerald-400"> Community Leader</span>
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed max-w-lg">
              Pre-Final Year B.Tech CSE (AIML) at United University (2023-27). Web Development Intern at Aegistech Innovations, 
              passionate about turning ideas into real-world tech solutions.
            </p>
          </div>

          {/* Role Badges */}
          <div className="flex flex-wrap gap-3 animate-fade-in delay-500">
            <span className="px-4 py-2 bg-emerald-500/20 text-emerald-300 rounded-full text-sm font-medium border border-emerald-500/30 backdrop-blur-sm">
              Web Dev Intern @ Aegistech
            </span>
            <span className="px-4 py-2 bg-blue-500/20 text-blue-300 rounded-full text-sm font-medium border border-blue-500/30 backdrop-blur-sm">
              GDG Prayagraj Volunteer
            </span>
            <span className="px-4 py-2 bg-purple-500/20 text-purple-300 rounded-full text-sm font-medium border border-purple-500/30 backdrop-blur-sm">
              Head - Social Media & Marketing
            </span>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 animate-fade-in delay-700">
            <button 
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="group bg-gradient-to-r from-emerald-500 to-blue-500 text-white px-8 py-4 rounded-full font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
            >
              <div className="flex items-center gap-2">
                <Code className="w-5 h-5" />
                View My Work
                <ArrowDown className="w-5 h-5 group-hover:animate-bounce" />
              </div>
            </button>
            
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 border-2 border-emerald-400 text-emerald-400 rounded-full font-semibold hover:bg-emerald-400 hover:text-slate-900 transition-all duration-300"
            >
              Get In Touch
            </button>
          </div>

          {/* Social Links */}
          <div className="flex gap-4 animate-fade-in delay-700">
            <a href="https://github.com/Anshuman-Rai-1004" target="_blank" rel="noopener noreferrer" className="p-3 bg-white/10 backdrop-blur-sm rounded-full text-white hover:bg-emerald-500 transition-all duration-300 hover:scale-110">
              <Github className="w-5 h-5" />
            </a>
            <a href="https://www.linkedin.com/in/anshuman-rai-0433032b9" target="_blank" rel="noopener noreferrer" className="p-3 bg-white/10 backdrop-blur-sm rounded-full text-white hover:bg-blue-500 transition-all duration-300 hover:scale-110">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="mailto:anshuman.rai.1004@gmail.com" className="p-3 bg-white/10 backdrop-blur-sm rounded-full text-white hover:bg-purple-500 transition-all duration-300 hover:scale-110">
              <Mail className="w-5 h-5" />
            </a>
            <a href="https://www.instagram.com/thesamratanshuman?igsh=aDNyNWVrZHBnbmQ0" target="_blank" rel="noopener noreferrer" className="p-3 bg-white/10 backdrop-blur-sm rounded-full text-white hover:bg-pink-500 transition-all duration-300 hover:scale-110">
              <Instagram className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Right Side - Image Section */}
        <div className="flex justify-center lg:justify-end">
          <div className="relative">
            {/* Background Circle */}
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-400/30 to-blue-400/30 rounded-full blur-3xl scale-110 animate-pulse"></div>
            
            {/* Main Image Container*/}
            <div className="relative w-80 h-80 lg:w-96 lg:h-96 bg-gradient-to-br from-emerald-500/20 to-blue-500/20 rounded-full border border-emerald-400/30 backdrop-blur-sm flex items-center justify-center animate-scale-in">
              { /* Place holder for image*/}
              <div className="w-72 h-72 lg:w-80 lg:h-80 bg-gradient-to-br from-emerald-500 to-blue-500 rounded-full flex items-center justify-center shadow-2xl">
                <img 
                 src="https://github.com/Anshuman-Rai-1004/Image-Hosting/blob/main/pp.jpg?raw=true" 
                 alt="Anshuman Rai" 
                 className="w-72 h-72 lg:w-80 lg:h-80 rounded-full object-cover shadow-2xl" 
/>

              </div>
              
              {/* Floating Stats */}
              <div className="absolute -top-4 -right-4 bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20 animate-fade-in delay-1000">
                <div className="text-center">
                  <div className="text-2xl font-bold text-emerald-400">6+</div>
                  <div className="text-xs text-gray-300">Projects</div>
                </div>
              </div>
              
              <div className="absolute -bottom-4 -left-4 bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20 animate-fade-in delay-1200">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-400">2+</div>
                  <div className="text-xs text-gray-300">Internships</div>
                </div>
              </div>
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-16 h-16 border-2 border-emerald-400/30 rounded-full animate-spin-slow"></div>
            <div className="absolute -bottom-8 right-1/4 w-12 h-12 border-2 border-blue-400/30 rounded-lg rotate-45 animate-pulse"></div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="w-6 h-6 text-emerald-400" />
      </div>
    </section>
  );
};

export default Hero;
