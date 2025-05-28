'use client';
import React from 'react';
import { Project } from '../types/types';
import { PROJECT_CARD_TEXTS } from '../constants/constants';
import { useLanguage } from '../contexts/LanguageContext';

interface ProjectCardProps {
  project: Project;
}

const GitHubIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg viewBox="0 0 16 16" fill="currentColor" {...props}><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path></svg>
);

const ExternalLinkIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
  </svg>
);


const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const { language } = useLanguage();

  return (
    <div className="bg-blue-800 rounded-xl shadow-xl overflow-hidden flex flex-col transition-all duration-300 hover:shadow-blue-500/30 hover:scale-[1.02]">
      <img 
        src={project.imageUrl} 
        alt={project.title[language]} 
        className="w-full h-48 object-cover" 
      />
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-semibold text-gray-100 mb-2">{project.title[language]}</h3>
        <p className="text-gray-300 text-sm mb-4 flex-grow">{project.description[language]}</p>
        
        <div className="mb-4">
          <h4 className="text-sm font-semibold text-gray-300 mb-2">{PROJECT_CARD_TEXTS.technologies[language]}</h4>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span key={tech} className="bg-blue-700 text-blue-200 px-3 py-1 text-xs rounded-full font-medium">
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-auto pt-4 border-t border-blue-700 flex space-x-4">
          {project.githubLink && (
            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-blue-200 transition-colors duration-300 flex items-center text-sm"
            >
              <GitHubIcon className="w-5 h-5 mr-2" />
              {PROJECT_CARD_TEXTS.github[language]}
            </a>
          )}
          {project.liveLink && (
            <a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-blue-200 transition-colors duration-300 flex items-center text-sm"
            >
              <ExternalLinkIcon className="w-5 h-5 mr-2" />
              {PROJECT_CARD_TEXTS.live[language]}
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
