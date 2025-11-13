
import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import BenefitsSection from './components/BenefitsSection';
import AboutSection from './components/AboutSection';
import ProgramsSection from './components/ProgramsSection';
import StatsSection from './components/StatsSection';
import TestimonialsSection from './components/TestimonialsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

interface HomePageProps {
    onNavigate: (page: 'home' | 'programs' | 'company' | 'privacy') => void;
}

const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
    
    return (
        <>
            <Header onNavigate={onNavigate} />
            <main>
                <HeroSection onNavigate={onNavigate} />
                <BenefitsSection />
                <AboutSection />
                <ProgramsSection />
                <StatsSection />
                <TestimonialsSection />
                <ContactSection onNavigate={onNavigate} />
            </main>
            <Footer onNavigate={onNavigate} />
        </>
    );
};

export default HomePage;
