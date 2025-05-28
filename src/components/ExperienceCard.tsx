'use client';
import React from 'react';
import { Experience } from '../types/types';
import { useLanguage } from '../contexts/LanguageContext';

interface ExperienceCardProps {
  experience: Experience;
}

const BulletIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg fill="currentColor" viewBox="0 0 8 8" {...props}>
    <circle cx="4" cy="4" r="3" />
  </svg>
);

const ExperienceCard: React.FC<ExperienceCardProps> = ({ experience }) => {
  const { language } = useLanguage();

  return (
    <div className="bg-blue-800 rounded-xl shadow-xl overflow-hidden flex flex-col md:flex-row transition-all duration-300 hover:shadow-blue-500/30 hover:scale-[1.02]">
      {experience.logo && (
        <div className="md:w-1/4 p-6 flex items-center justify-center bg-blue-700/50 md:rounded-l-xl md:rounded-r-none">
          <div className="w-20 h-20 md:w-24 md:h-24 flex items-center justify-center rounded-full bg-blue-900 p-2">
             {typeof experience.logo === 'string' ? (
                <img src={experience.logo as string} alt={`${experience.company} logo`} className="max-w-full max-h-full object-contain" />
              ) : (
                experience.logo 
              )}
          </div>
        </div>
      )}
      <div className={`p-6 flex flex-col flex-grow ${experience.logo ? 'md:w-3/4' : 'w-full'}`}>
        <h3 className="text-xl font-semibold text-gray-100 mb-1">{experience.title[language]}</h3>
        {experience.companyLink ? (
          <a 
            href={experience.companyLink} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-blue-300 hover:text-blue-200 font-medium text-lg mb-1 transition-colors duration-300"
          >
            {experience.company}
          </a>
        ) : (
          <p className="text-blue-300 font-medium text-lg mb-1">{experience.company}</p>
        )}
        <p className="text-gray-400 text-sm mb-4">{experience.period}</p>
        
        <ul className="space-y-2 flex-grow">
          {(experience.description[language] || experience.description['pt']).map((item: string, index: number) => (
            <li key={index} className="flex items-start text-gray-300 text-sm">
              <BulletIcon className="w-2 h-2 mr-3 mt-[5px] flex-shrink-0 text-blue-300" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ExperienceCard;
