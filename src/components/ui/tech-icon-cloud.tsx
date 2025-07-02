
import React, { useEffect, useMemo, useState } from "react";

// Simplified icon cloud component for tech skills
const TechIconCloud = ({ skills }: { skills: string[] }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="w-full h-64 flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <div className="relative w-full h-64 flex items-center justify-center">
      <div className="grid grid-cols-3 gap-4 animate-pulse">
        {skills.slice(0, 9).map((skill, index) => (
          <div
            key={skill}
            className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500/20 to-emerald-500/20 rounded-xl border border-white/20 backdrop-blur-sm hover:scale-110 transition-transform duration-300"
            style={{ 
              animationDelay: `${index * 100}ms`,
              transform: `rotate(${Math.random() * 20 - 10}deg)`
            }}
          >
            <span className="text-xs font-medium text-gray-700 text-center">
              {skill}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechIconCloud;
