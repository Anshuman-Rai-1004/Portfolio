
import React from 'react';
import { Star, User, Briefcase } from 'lucide-react';

const Achievements = () => {
  const achievements = [
    {
      title: "Runner-up",
      event: "Vigyanam National Technology Extravaganza",
      icon: "🥈",
      description: "Second place in national technology competition showcasing innovative solutions",
      gradient: "from-yellow-400 to-orange-500",
      bgGradient: "from-yellow-50 to-orange-50"
    },
    {
      title: "Top 30",
      event: "ML Bootcamp by TensorFlow User Group",
      icon: "🎖️",
      description: "Selected among top 30 participants in prestigious machine learning bootcamp",
      gradient: "from-blue-500 to-purple-600",
      bgGradient: "from-blue-50 to-purple-50"
    },
    {
      title: "Lead Organizer",
      event: "HackDiwas 2.0",
      icon: "🎤",
      description: "Successfully organized hackathon with 150+ participants and 40 teams",
      gradient: "from-emerald-500 to-teal-600",
      bgGradient: "from-emerald-50 to-teal-50"
    },
    {
      title: "Participant",
      event: "FlutterFlow Innovation Hackathon at IIIT Allahabad",
      icon: "🚀",
      description: "Participated in prestigious innovation hackathon at IIIT Allahabad showcasing mobile app development skills",
      gradient: "from-indigo-500 to-purple-600",
      bgGradient: "from-indigo-50 to-purple-50"
    },
    {
      title: "Top 10",
      event: "50 Day Code Challenge",
      icon: "💻",
      description: "Stood in top 10 in 50 day code challenge where 100+ students actively participated",
      gradient: "from-cyan-500 to-blue-600",
      bgGradient: "from-cyan-50 to-blue-50"
    }
  ];

  const mediaImpact = [
    {
      title: "Best Actor",
      event: "Inter Department Skit Competition",
      icon: "🎭",
      description: "Won best actor award in inter-departmental skit competition showcasing performing arts skills"
    },
    {
      title: "Student Organiser",
      event: "Synergy 2024 (College Annual Fest) - Spell Bee Competition",
      icon: "📚",
      description: "Contributed as student organiser in synergy 2024 for spell bee competition, testing fluent English speaking and pronunciation"
    },
    {
      title: "Quiz Champion",
      event: "Multiple Quiz Competitions",
      icon: "🏆",
      description: "Winners of numerous quiz competitions demonstrating knowledge and quick thinking abilities"
    }
  ];

  return (
    <section id="achievements" className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            <span className="bg-gradient-to-r from-yellow-500 to-orange-500 bg-clip-text text-transparent">Achievements</span> & Impact
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Recognition and contributions that showcase my dedication to excellence
          </p>
        </div>

        {/* Main Achievements */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {achievements.map((achievement, index) => (
            <div 
              key={achievement.title}
              className={`group relative bg-gradient-to-br ${achievement.bgGradient} p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 border border-white/50`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Achievement Icon */}
              <div className="text-center mb-4">
                <div className="text-4xl mb-2">{achievement.icon}</div>
                <div className={`w-16 h-1 bg-gradient-to-r ${achievement.gradient} mx-auto rounded-full`}></div>
              </div>

              {/* Achievement Title */}
              <h3 className="text-xl font-bold text-gray-800 text-center mb-2">
                {achievement.title}
              </h3>

              {/* Event Name */}
              <p className="text-sm font-semibold text-center mb-3 text-gray-700">
                {achievement.event}
              </p>

              {/* Description */}
              <p className="text-xs text-gray-600 text-center leading-relaxed">
                {achievement.description}
              </p>

              {/* Hover Effect */}
              <div className={`absolute inset-0 bg-gradient-to-br ${achievement.gradient} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-500`}></div>
            </div>
          ))}
        </div>

        {/* Media & Social Impact Section */}
        <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-3xl p-8 shadow-lg">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-gray-800 mb-2">
              Media & <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Social Impact</span>
            </h3>
            <p className="text-gray-600">Contributions beyond technical achievements</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {mediaImpact.map((item, index) => (
              <div 
                key={item.title}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="text-center mb-4">
                  <div className="text-3xl mb-2">{item.icon}</div>
                  <h4 className="font-bold text-gray-800 text-lg mb-1">{item.title}</h4>
                  <p className="text-sm font-medium text-indigo-600 mb-3">{item.event}</p>
                </div>
                <p className="text-xs text-gray-600 text-center leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
          <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-emerald-50 rounded-xl shadow-md">
            <div className="text-3xl font-bold text-blue-600 mb-2">80+</div>
            <p className="text-gray-600 text-sm">Event Participants</p>
          </div>
          <div className="text-center p-6 bg-gradient-to-br from-emerald-50 to-teal-50 rounded-xl shadow-md">
            <div className="text-3xl font-bold text-emerald-600 mb-2">40</div>
            <p className="text-gray-600 text-sm">Teams Managed</p>
          </div>
          <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl shadow-md">
            <div className="text-3xl font-bold text-purple-600 mb-2">6+</div>
            <p className="text-gray-600 text-sm">Major Projects</p>
          </div>
          <div className="text-center p-6 bg-gradient-to-br from-orange-50 to-red-50 rounded-xl shadow-md">
            <div className="text-3xl font-bold text-orange-600 mb-2">20+</div>
            <p className="text-gray-600 text-sm">Leadership Roles</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
