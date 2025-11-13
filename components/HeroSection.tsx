
import React, { useState, useEffect } from 'react';

const slides = [
    {
        bgImage: "https://images.pexels.com/photos/167699/pexels-photo-167699.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&dpr=2",
        text: "Oltre il rumore. Trova la chiarezza.",
    },
    {
        bgImage: "https://images.pexels.com/photos/1287145/pexels-photo-1287145.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&dpr=2",
        text: "Dove la pressione diventa potenziale.",
    },
    {
        bgImage: "https://images.pexels.com/photos/3408744/pexels-photo-3408744.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&dpr=2",
        text: "Costruisci la resilienza del tuo team.",
    },
];

const HeroSection: React.FC<{ onNavigate: (page: 'programs') => void }> = ({ onNavigate }) => {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 5000); // Change slide every 5 seconds
        return () => clearInterval(timer);
    }, []);

    return (
        <section id="home" className="relative h-[70vh] md:h-[90vh] min-h-[500px] flex items-center justify-center text-white overflow-hidden bg-black">
            {/* Background Image Slideshow */}
            {slides.map((slide, index) => (
                <div
                    key={index}
                    className={`absolute inset-0 bg-cover bg-center transition-opacity duration-2000 ease-in-out ${index === currentSlide ? 'opacity-100 animate-kenburns' : 'opacity-0'}`}
                    style={{ backgroundImage: `url(${slide.bgImage})` }}
                />
            ))}
            
            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black opacity-50 z-10"></div>

            {/* Text and Button Layer */}
            <div className="relative z-20 text-center px-4">
                {/* Wrapping div for text to manage transition */}
                <div className="relative h-24 md:h-32 flex items-center justify-center">
                    {slides.map((slide, index) => (
                        <div
                            key={index}
                            className={`absolute transition-opacity duration-2000 ease-in-out ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
                        >
                            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight" style={{textShadow: '2px 2px 4px rgba(0,0,0,0.7)'}}>
                                {slide.text}
                            </h1>
                        </div>
                    ))}
                </div>

                <p className="text-lg md:text-xl font-light mb-8 max-w-3xl mx-auto" style={{textShadow: '1px 1px 3px rgba(0,0,0,0.7)'}}>
                    Sbloccate il potenziale inespresso del vostro team. Raggiungete nuove vette di focus e innovazione.
                </p>
                <button
                    onClick={() => onNavigate('programs')}
                    className="px-8 py-3 bg-teal-600 text-white font-bold rounded-full hover:bg-teal-500 transition-all duration-300 transform hover:scale-105 text-lg"
                >
                    Scopri i Nostri Programmi
                </button>
            </div>
        </section>
    );
};

export default HeroSection;
