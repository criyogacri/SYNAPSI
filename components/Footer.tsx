
import React, { useState } from 'react';

interface FooterProps {
    onNavigate: (page: 'home' | 'programs' | 'company' | 'privacy') => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
    const [newsletterPrivacyAccepted, setNewsletterPrivacyAccepted] = useState(false);
    
    const handleScroll = (targetId: string) => {
        onNavigate('home');
        setTimeout(() => {
            const element = document.getElementById(targetId);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }, 100);
    };

    const handleNewsletterSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!newsletterPrivacyAccepted) {
            alert("Per favore, accetta l'informativa sulla privacy per iscriverti.");
            return;
        }
        // Placeholder for actual submission logic
        alert("Grazie per l'iscrizione!");
        // You would typically clear the form fields here
    };

    return (
        <footer className="bg-gray-800 text-white">
            <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    <div>
                        <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Soluzioni</h3>
                        <ul className="mt-4 space-y-4">
                            <li><p className="text-base text-gray-300">Corsi Settimanali</p></li>
                            <li><p className="text-base text-gray-300">Workshop</p></li>
                            <li><p className="text-base text-gray-300">Team Building</p></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Azienda</h3>
                        <ul className="mt-4 space-y-4">
                            <li><button onClick={() => onNavigate('company')} className="text-base text-gray-300 hover:text-white text-left transition-colors">Chi Siamo</button></li>
                            <li><button onClick={() => handleScroll('contatti')} className="text-base text-gray-300 hover:text-white text-left transition-colors">Contatti</button></li>
                        </ul>
                    </div>
                    <div className="col-span-2 md:col-span-2">
                        <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Iscriviti alla nostra newsletter</h3>
                        <p className="mt-4 text-base text-gray-300">Rimani aggiornato su consigli di benessere e offerte speciali.</p>
                        <form onSubmit={handleNewsletterSubmit} className="mt-4 sm:max-w-md">
                            <div className="sm:flex">
                                <label htmlFor="email-address" className="sr-only">Email</label>
                                <input type="email" name="email-address" id="email-address" autoComplete="email" required className="appearance-none min-w-0 w-full bg-white border border-transparent rounded-md py-2 px-4 text-base text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white focus:border-white focus:placeholder-gray-400" placeholder="Inserisci la tua email" />
                                <div className="mt-3 rounded-md sm:mt-0 sm:ml-3 sm:flex-shrink-0">
                                    <button type="submit" disabled={!newsletterPrivacyAccepted} className="w-full bg-teal-600 flex items-center justify-center border border-transparent rounded-md py-2 px-4 text-base font-medium text-white hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-teal-500 disabled:opacity-60 disabled:cursor-not-allowed">Iscriviti</button>
                                </div>
                            </div>
                            <div className="mt-4 flex items-start">
                                <div className="flex items-center h-5">
                                    <input
                                        id="newsletter-privacy"
                                        name="newsletter-privacy"
                                        type="checkbox"
                                        checked={newsletterPrivacyAccepted}
                                        onChange={(e) => setNewsletterPrivacyAccepted(e.target.checked)}
                                        className="focus:ring-teal-500 h-4 w-4 text-teal-600 border-gray-300 rounded bg-gray-700"
                                    />
                                </div>
                                <div className="ml-3 text-sm">
                                    <label htmlFor="newsletter-privacy" className="text-gray-300">
                                        Accetto l'{' '}
                                        <button type="button" onClick={() => onNavigate('privacy')} className="font-medium text-teal-400 hover:text-teal-300 underline">
                                            Informativa sulla Privacy
                                        </button>
                                        .
                                    </label>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="mt-8 border-t border-gray-700 pt-8 md:flex md:items-center md:justify-between">
                    <p className="text-base text-gray-400">&copy; {new Date().getFullYear()} Synapsi Flow. Tutti i diritti riservati.</p>
                    {/* Social media icons can be added here */}
                </div>
            </div>
        </footer>
    );
};

export default Footer;
