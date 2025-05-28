'use client';
import React from 'react';
import { TranslatableString } from '../types/types';
import { useLanguage } from '../contexts/LanguageContext';

interface SectionProps {
  id: string;
  children: React.ReactNode;
  className?: string;
  title?: TranslatableString | string; // Allow string for non-translated titles if any
  titleClassName?: string;
}

const Section: React.FC<SectionProps> = ({ id, children, className = '', title, titleClassName = '' }) => {
  const { language } = useLanguage();
  
  const getTitle = () => {
    if (!title) return null;
    if (typeof title === 'string') return title;
    return title[language] || title['pt']; // Fallback to Portuguese if current language key is missing
  };

  const currentTitle = getTitle();

  return (
    <section id={id} className={`py-16 md:py-24 ${className}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {currentTitle && (
          <div className="mb-12 md:mb-16">
            <h2 className={`text-2xl md:text-3xl font-semibold text-gray-100 ${titleClassName}`}>
              {currentTitle}
            </h2>
            <div className="w-20 h-1 bg-blue-500 mt-3 rounded"></div>
          </div>
        )}
        {children}
      </div>
    </section>
  );
};

export default Section;
