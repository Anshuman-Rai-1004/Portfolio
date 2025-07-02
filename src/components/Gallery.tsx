
import React from 'react';
import { Camera, Images } from 'lucide-react';
import { AnimatedTestimonials } from './ui/animated-testimonials';

const Gallery = () => {
  const galleryImages = [
    
    {
      quote: "Led the end-to-end execution of a national-level hackathon fostering innovation, collaboration, and real-world problem solving.",
      name: "HackDiwas 2.0",
      designation: "Lead Organiser",
      src: "https://github.com/Anshuman-Rai-1004/Image-Hosting/blob/main/Hackdiwas.jpg?raw=true"
    },
    {
      quote: "Attended DevFest 2024 to explore emerging technologies, connect with industry experts, and gain insights into the developer ecosystem.",
      name: "DevFest 2024",
      designation: "Attendee",
      src: "https://github.com/Anshuman-Rai-1004/Image-Hosting/blob/main/Devfest2024.jpg?raw=true"
    },
    {
      quote: "Organised and coordinated the Spell Bee competition at Synergy 2024, promoting linguistic skills and engaging student participation.",
      name: "Synergy 2024",
      designation: "Student Organiser Spell Bee",
      src: "https://github.com/Anshuman-Rai-1004/Image-Hosting/blob/main/Synergy2024.jpg?raw=true"
    },
    {
      quote: "Contributed to the technical setup and social media operations at TEDx United University, amplifying the event's impact and engagement.",
      name: "TEDx United University",
      designation: "Technical & Social Media Team",
      src: "https://github.com/Anshuman-Rai-1004/Image-Hosting/blob/main/TedXuu.jpg?raw=true"
    },
    {
      quote: "Participated in FlutterFlow Innovation Hackathon at IIITA, developing creative app solutions using no-code tools in a competitive environment.",
      name: "FlutterFlow Innovation Hackathon",
      designation: "Participant",
      src: "https://github.com/Anshuman-Rai-1004/Image-Hosting/blob/main/flutterflowhackathon.jpg?raw=true"
    },
    {
      quote: "Attended Build with AI by GDG Prayagraj to explore real-world applications of generative AI and engage with the local developer community.",
      name: "Build with AI",
      designation: "Attendee",
      src: "https://github.com/Anshuman-Rai-1004/Image-Hosting/blob/main/Build-with-ai.jpg?raw=true"
    },
    {
      quote: "Actively contributed to planning and executing technical initiatives as an executive member of the Pro Team at PPUU.",
      name: "Pro Team – PPUU",
      designation: "Executive Member",
      src: "https://github.com/Anshuman-Rai-1004/Image-Hosting/blob/main/PRO_team.jpg?raw=true"
    },
    {
      quote: "Won Best Actor for an outstanding performance in a stage skit, bringing emotion, expression, and character to life.",
      name: "Stage Skit Performance",
      designation: "Best Actor – Winner",
      src: "https://github.com/Anshuman-Rai-1004/Image-Hosting/blob/main/Skit.jpg?raw=true"
    },
    {
      quote: "Oversaw digital outreach and campaign strategies as Head of the Social Media and Marketing Team at PPUU, ensuring strong brand visibility.",
      name: "Social Media and Marketing – PPUU",
      designation: "Head",
      src: "https://github.com/Anshuman-Rai-1004/Image-Hosting/blob/main/Head_Social-Media.jpg?raw=true"
    },
    {
      quote: "Secured a Top 10 position in a 50-Day Coding Challenge by consistently solving algorithmic problems and maintaining high code quality.",
      name: "50-Day Coding Challenge",
      designation: "Top 10 Performer",
      src: "https://github.com/Anshuman-Rai-1004/Image-Hosting/blob/main/50DCC.jpg?raw=true"
    } 
  ];

  return (
    <section id="gallery" className="py-20 px-4 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 border border-purple-400 rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 border border-blue-400 rounded-lg rotate-45 animate-pulse delay-300"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 border border-indigo-400 rounded-full animate-pulse delay-700"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-white/50 backdrop-blur-sm px-4 py-2 rounded-full border border-purple-200 mb-4">
            <Images className="w-4 h-4 text-purple-600" />
            <span className="text-purple-600 font-medium">Visual Journey</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            My <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">Gallery</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore my technical journey through visual stories - from code to creativity, 
            showcasing the diverse projects, technologies, and experiences that shape my development path.
          </p>
        </div>

        {/* Animated Gallery */}
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl border border-white/50 p-8">
          <AnimatedTestimonials testimonials={galleryImages} autoplay={true} />
        </div>

        {/* Gallery Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
          <div className="text-center p-6 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-white/50">
            <div className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-2">20+</div>
            <div className="text-gray-600 font-medium">Tech Stories</div>
          </div>
          <div className="text-center p-6 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-white/50">
            <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-2">6+</div>
            <div className="text-gray-600 font-medium">Projects Showcased</div>
          </div>
          <div className="text-center p-6 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-white/50">
            <div className="text-3xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-2">9+</div>
            <div className="text-gray-600 font-medium">Technologies</div>
          </div>
          <div className="text-center p-6 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-white/50">
            <div className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">∞</div>
            <div className="text-gray-600 font-medium">Learning Journey</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
