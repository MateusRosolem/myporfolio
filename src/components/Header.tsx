'use client';

import React, { useState } from 'react';
import { NAV_ITEMS } from '../constants/constants';
import { NavItem } from '../types/types';
import { useLanguage } from '../contexts/LanguageContext'; // Import useLanguage

const MenuIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
  </svg>
);

const XMarkIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
  </svg>
);

const GlobeAltIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A11.978 11.978 0 0 1 12 16.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12" />
  </svg>
);


const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { language, toggleLanguage } = useLanguage(); // Use language context

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const NavLinks: React.FC<{ items: NavItem[]; mobile?: boolean; onItemClick?: () => void }> = ({ items, mobile = false, onItemClick }) => (
    <ul className={`flex ${mobile ? 'flex-col space-y-4 p-4' : 'space-x-6 items-center'}`}>
      {items.map((item) => (
        <li key={item.name[language]}> {/* Use translated name for key */}
          <a
            href={item.href}
            onClick={onItemClick}
            className="text-gray-200 hover:text-blue-200 transition-colors duration-300 px-3 py-2 rounded-md text-base font-semibold"
          >
            {item.name[language]} {/* Use translated name */}
          </a>
        </li>
      ))}
    </ul>
  );

  return (
    <header className="bg-blue-950/80 backdrop-blur-md sticky top-0 z-50 shadow-lg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <a href="#hero" className="text-2xl font-bold text-gray-100 hover:text-gray-300 transition-colors">
              Baroni<span className="text-blue-300">Dev</span>
            </a>
          </div>
          <div className="hidden md:flex items-center">
            <NavLinks items={NAV_ITEMS} />
            <button
              onClick={toggleLanguage}
              className="ml-6 flex items-center text-gray-200 hover:text-blue-200 transition-colors duration-300 px-3 py-2 rounded-md text-sm font-semibold border border-blue-600 hover:bg-blue-700"
              aria-label={language === 'pt' ? 'Mudar para Inglês' : 'Switch to Portuguese'}
            >
              <GlobeAltIcon className="w-5 h-5 mr-2" />
              {language.toUpperCase()}
            </button>
          </div>
          <div className="md:hidden flex items-center">
             <button
              onClick={toggleLanguage}
              className="mr-2 flex items-center text-gray-200 hover:text-blue-200 transition-colors duration-300 p-2 rounded-md text-sm font-semibold border border-blue-600 hover:bg-blue-700"
              aria-label={language === 'pt' ? 'Mudar para Inglês' : 'Switch to Portuguese'}
            >
              <GlobeAltIcon className="w-5 h-5" />
            </button>
            <button
              onClick={toggleMobileMenu}
              className="text-gray-200 hover:text-blue-200 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500 p-2 rounded-md"
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-menu"
            >
              <span className="sr-only">Abrir menu principal</span>
              {isMobileMenuOpen ? <XMarkIcon className="block h-6 w-6" /> : <MenuIcon className="block h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-20 left-0 right-0 bg-blue-900 shadow-xl pb-4" id="mobile-menu">
          <NavLinks items={NAV_ITEMS} mobile onItemClick={() => setIsMobileMenuOpen(false)} />
           <div className="px-4 pt-2 pb-3 border-t border-blue-800">
            <button
              onClick={() => {
                toggleLanguage();
                setIsMobileMenuOpen(false);
              }}
              className="w-full flex items-center justify-center text-gray-200 hover:text-blue-200 transition-colors duration-300 px-3 py-2 rounded-md text-base font-semibold border border-blue-600 hover:bg-blue-700"
              aria-label={language === 'pt' ? 'Mudar para Inglês' : 'Switch to Portuguese'}
            >
              <GlobeAltIcon className="w-5 h-5 mr-2" />
              Mudar para {language === 'pt' ? 'EN' : 'PT'}
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
