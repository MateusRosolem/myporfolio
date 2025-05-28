'use client';
import React from 'react';
import { Experience } from '../types/types';
import ExperienceCard from './ExperienceCard';
import Section from './Section';
import { SECTION_TITLES, EXPERIENCE_TEXTS } from '../constants/constants';
import { useLanguage } from '../contexts/LanguageContext';

interface ExperienceSectionProps {
  experiences: Experience[];
}

const ExperienceSection: React.FC<ExperienceSectionProps> = ({ experiences }) => {
  const { language } = useLanguage();
  return (
    <Section id="experience" title={SECTION_TITLES.experience} className="bg-blue-900">
      {experiences.length > 0 ? (
        <div className="space-y-8">
          {experiences.map((experience) => (
            <ExperienceCard key={experience.id} experience={experience} />
          ))}
        </div>
      ) : (
        <p className="text-center text-slate-400">{EXPERIENCE_TEXTS.noExperience[language]}</p>
      )}
    </Section>
  );
};

export default ExperienceSection;
