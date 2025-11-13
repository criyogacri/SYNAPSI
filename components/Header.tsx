
import React, { useState } from 'react';
import LogoIcon from './icons/LogoIcon';

interface HeaderProps {
    onNavigate: (page: 'home' | 'programs' | 'company' | 'privacy') => void;
}

const Header: React.FC<HeaderProps> = ({ onNavigate }) => {
  const [isOpen, setIsOpen] = useState(false);

    const handleNavAndScroll = (targetId: string) => {
        onNavigate('home');
        setIsOpen(false);
        // We need a timeout to allow the home page to render before scrolling
        setTimeout(() => {
            document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth' });
        }, 100);
    };

  const navLinks = [
    { label: 'Benefici', action: () => handleNavAndScroll('benefici') },
    { label: 'Chi Siamo', action: () => { onNavigate('company'); setIsOpen(false); } },
    { label: 'Programmi', action: () => { onNavigate('programs'); setIsOpen(false); } },
    { label: 'Contatti', action: () => handleNavAndScroll('contatti') },
  ];

  return (
    <header className="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <button onClick={() => onNavigate('home')} className="flex-shrink-0 flex items-center gap-3 group">
            <LogoIcon className="h-10 w-10 text-teal-600 transition-transform duration-300 group-hover:rotate-12" />
            <span className="text-xl font-bold text-gray-800 tracking-wide">Synapsi Flow</span>
          </button>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navLinks.map(link => (
                <button key={link.label} onClick={link.action} className="text-gray-600 hover:text-teal-600 transition-colors duration-300 px-3 py-2 rounded-md text-sm font-medium">
                  {link.label}
                </button>
              ))}
              <button onClick={() => handleNavAndScroll('contatti')} className="ml-4 px-4 py-2 bg-teal-600 text-white rounded-md hover:bg-teal-700 transition-colors duration-300 text-sm font-medium">
                Richiedi Consulenza
              </button>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="bg-white p-2 inline-flex items-center justify-center rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-teal-500"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map(link => 
              <button key={link.label} onClick={link.action} className="text-gray-600 hover:text-teal-600 block px-3 py-2 rounded-md text-base font-medium w-full text-left">
                {link.label}
              </button>
            )}
             <button onClick={() => handleNavAndScroll('contatti')} className="block w-full text-left mt-2 px-4 py-2 bg-teal-600 text-white rounded-md hover:bg-teal-700 transition-colors duration-300 text-base font-medium">
                Richiedi Consulenza
              </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
