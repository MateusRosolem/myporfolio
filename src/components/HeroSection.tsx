'use client';

import React, { useState, useEffect } from 'react';
import { GITHUB_PROFILE_URL, LINKEDIN_PROFILE_URL, CONTACT_EMAIL, HERO_TEXTS } from '../constants/constants';
import { useLanguage } from '../contexts/LanguageContext';

// Icons defined locally for simplicity, could be moved to a shared icons file
const GitHubIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg viewBox="0 0 16 16" fill="currentColor" {...props}><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path></svg>
);

const LinkedInIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}>
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
    </svg>
);

const MailIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
    </svg>
);

const ArrowDownIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="m9 12.75 3 3m0 0 3-3m-3 3v-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
    </svg>
);

const DownloadIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
  </svg>
);

const HeroSection: React.FC = () => {
  const { language } = useLanguage();
  const [typedRole, setTypedRole] = useState('');
  
  const fullRole = HERO_TEXTS.role[language];
  const typingDelay = 100;

  useEffect(() => {
    setTypedRole(''); // Reset when language changes to re-trigger typing
  }, [language]);

  useEffect(() => {
    if (typedRole.length < fullRole.length) {
      const timer = setTimeout(() => {
        setTypedRole(fullRole.substring(0, typedRole.length + 1));
      }, typingDelay);
      return () => clearTimeout(timer);
    }
  }, [typedRole, fullRole, typingDelay, language]);

  const socialLinks = [
    { name: 'GitHub', href: GITHUB_PROFILE_URL, icon: <GitHubIcon className="w-6 h-6" /> },
    { name: 'LinkedIn', href: LINKEDIN_PROFILE_URL, icon: <LinkedInIcon className="w-6 h-6" /> },
    { name: 'Email', href: `mailto:${CONTACT_EMAIL}`, icon: <MailIcon className="w-6 h-6" /> },
  ];

  const curriculumVitaeUrl = "https://www.linkedin.com/ambry/?x-li-ambry-ep=AQIamFQ84k3AngAAAZcPLOoZkKox0TwVxDpVvxc2shKpFQejD-iji5GqkuX0wqxTgfRuyc2MohQitGG0nLXSRPgd8i8TMhLTMNutic4ZDd6qB1NAMbbpix4TZZ6CNqUbtY_4CS6ai-ayk6c3EyH6a5FGPo8fnwpAjoUeqVlKYSmyoPZdAl-YTzdHveP-tR4SlbpMutPjpjeU60CCT4LXdp9faUwNV6yqjLhIM19QPdTo7qkYn1wrgS6yYktPa7QrtBZ7NcRzQvHWfj0bNK_sw9Bb4Uh9nD2WUkSxkoxpz2X8oHH4rdKs6bSEejPoYPNmBPLnbH8-UgqQtvLMMTzovJ5C5AIqVY7XkTCRk2uYwISthn4-n-9OP9vB7hhcPXwPGbx4NdfrLGBwGE8RZVoqvzO-zvPBg8ZIElU2x4qUaKUowECOzjTkrZ7XI7OdNNBLzo_2YeiAdoytsU619nkplFkt_vMOygzAgjNh-6gCpWpC94NAE0poSZdr8fpPKtvRLI6m3PtdLXD-_WMkECmoninaRvYKz_DnJnNqFxAU9gJgCZEJOOTsV_9cX12vnuxwAsePEA&x-ambry-um-filename=Profile.pdf";

  return (
    <section 
      id="hero" 
      className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden text-center p-4"
      style={{ background: 'radial-gradient(circle at center, rgba(30, 64, 175, 0.2) 0%, #111827 60%, #0c1322 100%)' }}
    >
      <div className="relative z-10 flex flex-col items-center pt-20">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-3 mt-10">
          <span className="block text-gray-100">{HERO_TEXTS.name}</span>
        </h1>
        <p className="text-2xl sm:text-3xl md:text-4xl text-blue-300 font-semibold mb-10 h-10 sm:h-12">
          {typedRole}
          <span className="animate-ping">_</span>
        </p>
        
        <a
            href={curriculumVitaeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center w-full max-w-xs mx-auto bg-gray-900 border-2 border-blue-500 text-white font-bold py-3 px-6 rounded-lg shadow-md hover:bg-blue-700 hover:border-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-75 transition-colors duration-300 mb-10 text-lg"
            aria-label={HERO_TEXTS.cvButton[language]}
        >
            <DownloadIcon className="w-5 h-5 mr-2" />
            {HERO_TEXTS.cvButton[language]}
        </a>

        <div className="flex space-x-6 mb-12">
          {socialLinks.map(link => (
            <a 
              key={link.name} 
              href={link.href} 
              target={link.name === 'Email' ? '_self' : '_blank'}
              rel="noopener noreferrer" 
              aria-label={link.name}
              className="text-gray-300 hover:text-blue-200 transition-colors duration-300"
            >
              {link.icon}
            </a>
          ))}
        </div>
      </div>
      
      <a href="#about" className="absolute bottom-10 left-1/2 -translate-x-1/2 text-blue-300 hover:text-blue-200 animate-bounce z-10" aria-label="Scroll down">
        <ArrowDownIcon className="w-10 h-10" />
      </a>
    </section>
  );
};

export default HeroSection;
