
import React, { useState } from 'react';
import HomePage from './HomePage';
import ProgramsPage from './ProgramsPage';
import CompanyPage from './CompanyPage';
import PrivacyPolicyPage from './PrivacyPolicyPage';
import WhatsAppButton from './components/WhatsAppButton';


const App: React.FC = () => {
    const [currentPage, setCurrentPage] = useState<'home' | 'programs' | 'company' | 'privacy'>('home');

    const handleNavigate = (page: 'home' | 'programs' | 'company' | 'privacy') => {
        setCurrentPage(page);
        window.scrollTo(0, 0); // Scroll to top on page change
    };

    return (
        <div className="bg-white">
            {currentPage === 'home' && <HomePage onNavigate={handleNavigate} />}
            {currentPage === 'programs' && <ProgramsPage onNavigate={handleNavigate} />}
            {currentPage === 'company' && <CompanyPage onNavigate={handleNavigate} />}
            {currentPage === 'privacy' && <PrivacyPolicyPage onNavigate={handleNavigate} />}
            <WhatsAppButton />
        </div>
    );
};

export default App;
