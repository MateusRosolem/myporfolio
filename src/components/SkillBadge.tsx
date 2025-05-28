'use client';
import React from 'react';
import { Skill } from '../types/types';

interface SkillBadgeProps {
  skill: Skill;
}

const SkillBadge: React.FC<SkillBadgeProps> = ({ skill }) => {
  return (
    <div 
      className="group w-full aspect-square [perspective:1000px] transform-style-preserve-3d" 
      aria-label={skill.name}
    >
      <div 
        className="relative w-full h-full bg-gradient-to-br from-emerald-400/80 via-cyan-500/80 to-blue-600/80 p-0.5 rounded-xl shadow-lg transition-all duration-300 group-hover:shadow-cyan-400/50 group-hover:p-1" // Adjusted gradient opacity and hover shadow/padding
      >
        <div 
          className="w-full h-full bg-blue-800 rounded-[10px] py-2 px-1.5 
                     flex flex-col justify-center items-center text-center
                     transform transition-transform duration-300 ease-out 
                     group-hover:rotate-y-[-7deg] group-hover:rotate-x-[3deg] group-hover:scale-[1.03]" // Slightly adjusted hover transform
        >
          <div className="w-6 h-6 sm:w-7 sm:h-7 flex items-center justify-center mb-1 text-gray-200 group-hover:text-sky-200 transition-colors"> {/* Lighter blue on hover for icon */}
            {React.isValidElement(skill.icon) ? React.cloneElement(skill.icon, { 
              className: "w-full h-full" 
            }) : null}
          </div>
          <h3 className="text-gray-200 text-[11px] sm:text-xs font-medium group-hover:text-sky-100 transition-colors"> {/* Lighter blue on hover for text */}
            {skill.name}
          </h3>
        </div>
      </div>
    </div>
  );
};

export default SkillBadge;