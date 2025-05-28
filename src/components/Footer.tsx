'use client';
import React from 'react';
import { FOOTER_TEXTS } from '../constants/constants';
import { useLanguage } from '../contexts/LanguageContext';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const { language } = useLanguage();

  return (
    <footer className="bg-blue-950 text-center py-8 border-t border-blue-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-sm text-gray-300">
          &copy; {currentYear} {FOOTER_TEXTS.copyright[language]}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
