
import React from 'react';

interface FooterProps {
    onNavigate: (page: 'home' | 'programs' | 'company') => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
    
    const handleScroll = (targetId: string) => {
        onNavigate('home');
        setTimeout(() => {
            const element = document.getElementById(targetId);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }, 100);
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
                        <form className="mt-4 sm:flex sm:max-w-md">
                            <label htmlFor="email-address" className="sr-only">Email</label>
                            <input type="email" name="email-address" id="email-address" autoComplete="email" required className="appearance-none min-w-0 w-full bg-white border border-transparent rounded-md py-2 px-4 text-base text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white focus:border-white focus:placeholder-gray-400" placeholder="Inserisci la tua email" />
                            <div className="mt-3 rounded-md sm:mt-0 sm:ml-3 sm:flex-shrink-0">
                                <button type="submit" className="w-full bg-teal-600 flex items-center justify-center border border-transparent rounded-md py-2 px-4 text-base font-medium text-white hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-teal-500">Iscriviti</button>
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