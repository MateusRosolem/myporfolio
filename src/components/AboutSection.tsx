
'use client';
import React from 'react';
import Section from './Section';
import { ABOUT_TEXTS, SECTION_TITLES, HERO_TEXTS } from '../constants/constants';
import { useLanguage } from '../contexts/LanguageContext';
import { Language } from '../types/types';

const AboutSection: React.FC = () => {
  const { language } = useLanguage();

  const Highlight: React.FC<{children: React.ReactNode}> = ({ children }) => (
    <span className="text-blue-300 font-semibold">{children}</span>
  );

  const getHighlightedText = (text: string, lang: Language) => {
    // Basic highlighting for specific keywords. More sophisticated parsing might be needed for complex cases.
    // For this portfolio, explicitly defined keywords in ABOUT_TEXTS.techList are used.
    // The main paragraph text is directly from ABOUT_TEXTS.
    const keywords = [...ABOUT_TEXTS.techList, HERO_TEXTS.name, "Desenvolvedor Backend", "Web", "Ciência da Computação", "Desenvolvimento de Sistemas", "programação", "experiências de usuário", "aplicações", "Backend Developer", "Computer Science", "Systems Development", "programming", "user experiences", "applications"];

    // Create a regex from keywords
    // Adding word boundaries to match whole words, case insensitive
    const regex = new RegExp(`\\b(${keywords.join('|')})\\b`, 'gi');
    
    const parts = text.split(regex);

    return parts.map((part, index) => 
      keywords.some(keyword => new RegExp(`^${keyword}$`, 'i').test(part))
        ? <Highlight key={index}>{part}</Highlight>
        : part
    );
  };


  return (
    <Section id="about" title={SECTION_TITLES.about} className="bg-blue-950">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-10 md:gap-12 lg:gap-16">
        <div className="md:w-1/3 flex-shrink-0 w-full flex justify-center md:justify-start">
          <img
            src="/image.png" 
            alt={HERO_TEXTS.name}
            className="w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 rounded-full object-cover shadow-xl border-4 border-blue-600/70"
            aria-hidden="true" 
          />
        </div>
        <div className="md:w-2/3 text-center md:text-left">
          <p className="text-lg text-gray-300 mb-6 leading-relaxed">
            {ABOUT_TEXTS.greeting[language]} <Highlight>{HERO_TEXTS.name}</Highlight>!
          </p>
          <p className="text-lg text-gray-300 mb-6 leading-relaxed">
            {getHighlightedText(ABOUT_TEXTS.introduction1[language], language)}
          </p>
          <p className="text-lg text-gray-300 mb-6 leading-relaxed">
            {getHighlightedText(ABOUT_TEXTS.introduction2[language], language)}
          </p>
           <p className="text-lg text-gray-300 mb-6 leading-relaxed">
            {ABOUT_TEXTS.techIntro[language]} {ABOUT_TEXTS.techList.map((tech, index) => (
              <React.Fragment key={tech}>
                <Highlight>{tech}</Highlight>
                {index < ABOUT_TEXTS.techList.length - 1 ? ', ' : '.'}
              </React.Fragment>
            ))}
          </p>
        </div>
      </div>
    </Section>
  );
};

export default AboutSection;
