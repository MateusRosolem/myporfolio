'use client';
import React from 'react';
import Section from './Section';
import { CONTACT_EMAIL, LINKEDIN_PROFILE_URL, GITHUB_PROFILE_URL, SECTION_TITLES, CONTACT_TEXTS } from '../constants/constants';
import { useLanguage } from '../contexts/LanguageContext';

const MailIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
    </svg>
);

const LinkedInIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}>
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
    </svg>
);

const GitHubIconSolid: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg viewBox="0 0 16 16" fill="currentColor" {...props}><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path></svg>
);


const ContactSection: React.FC = () => {
  const { language } = useLanguage();
  return (
    <Section id="contact" title={SECTION_TITLES.contact} className="bg-gradient-to-br from-blue-950 via-blue-900 to-blue-950">
      <div className="max-w-lg mx-auto text-center">
        <p className="text-lg text-gray-300 mb-8">
          {CONTACT_TEXTS.intro[language]}
        </p>
        
        <a 
          href={`mailto:${CONTACT_EMAIL}`}
          className="inline-flex items-center justify-center text-blue-200 hover:text-sky-200 font-semibold text-xl mb-10 transition-colors duration-300 group"
        >
          <MailIcon className="w-6 h-6 mr-3 transition-transform duration-300 group-hover:scale-110" />
          {CONTACT_EMAIL}
        </a>

        <div className="mt-10">
          <p className="text-gray-400 mb-4">{CONTACT_TEXTS.findMe[language]}</p>
          <div className="flex justify-center space-x-6">
            <a href={LINKEDIN_PROFILE_URL} target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-blue-200 transition-colors duration-300" aria-label="LinkedIn">
              <LinkedInIcon className="w-9 h-9" />
            </a>
            <a href={GITHUB_PROFILE_URL} target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-blue-200 transition-colors duration-300" aria-label="GitHub">
              <GitHubIconSolid className="w-9 h-9" />
            </a>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default ContactSection;
