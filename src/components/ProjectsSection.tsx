'use client';
import React from 'react';
import { Project } from '../types/types';
import ProjectCard from './ProjectCard';
import Section from './Section';
import { SECTION_TITLES, PROJECT_CARD_TEXTS } from '../constants/constants';
import { useLanguage } from '../contexts/LanguageContext';

interface ProjectsSectionProps {
  projects: Project[];
}

const ProjectsSection: React.FC<ProjectsSectionProps> = ({ projects }) => {
  const { language } = useLanguage();
  return (
    <Section id="projects" title={SECTION_TITLES.projects} className="bg-blue-900">
      {projects.length > 0 ? (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      ) : (
        <p className="text-center text-slate-400">{PROJECT_CARD_TEXTS.noProjects[language]}</p>
      )}
    </Section>
  );
};

export default ProjectsSection;
