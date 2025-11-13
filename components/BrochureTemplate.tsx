import React from 'react';
import LogoIcon from './icons/LogoIcon';

interface ProgramData {
    title: string;
    subtitle: string;
    description: string;
    benefits: string[];
}

interface BrochureTemplateProps {
    programs: ProgramData[];
}

const BrochureTemplate = React.forwardRef<HTMLDivElement, BrochureTemplateProps>(({ programs }, ref) => {
    return (
        <div ref={ref} className="bg-white text-gray-900" style={{ width: '210mm', minHeight: '297mm', fontFamily: 'Poppins, sans-serif' }}>
            <div className="p-16">
                {/* --- HEADER --- */}
                <header className="flex items-center justify-between pb-8 border-b-4 border-teal-600">
                    <div className="flex items-center gap-4">
                        <LogoIcon className="h-16 w-16 text-teal-600" />
                        <div>
                            <h1 className="text-4xl font-extrabold text-gray-800 tracking-tight">Synapsi Flow</h1>
                            <p className="text-lg text-gray-500 font-medium">Il Vostro Vantaggio Competitivo Umano.</p>
                        </div>
                    </div>
                </header>

                {/* --- INTRO MISSION --- */}
                <section className="my-12 text-center">
                    <h2 className="text-2xl font-bold leading-tight text-gray-800">
                        Non offriamo un momento di pausa.
                        <br />
                        <span className="text-teal-600">Costruiamo le fondamenta per un pensiero di qualità superiore.</span>
                    </h2>
                    <p className="mt-4 max-w-3xl mx-auto text-lg text-gray-600">
                        Il successo di un'azienda non si misura in fogli di calcolo, ma nella qualità del pensiero che li ha creati. Lavoriamo con organizzazioni ambiziose per addestrare la mente a diventare uno strumento di precisione: capace di focus profondo, creatività inaspettata e resilienza autentica.
                    </p>
                </section>
                
                <div className="w-1/4 mx-auto border-t-2 border-gray-200 my-12"></div>

                {/* --- PROGRAMS SECTION --- */}
                <main>
                    <h3 className="text-3xl font-extrabold text-center text-gray-900 mb-10">Programmi di Sviluppo Strategico</h3>
                    <div className="space-y-10">
                        {programs.map((program, index) => (
                            <div key={index} className="p-8 bg-gray-50 rounded-lg border border-gray-200 break-inside-avoid">
                                <h4 className="text-xl font-bold text-teal-700">{program.title}</h4>
                                <p className="text-md font-semibold text-gray-600 italic mt-1">{program.subtitle}</p>
                                <p className="mt-4 text-gray-700">{program.description}</p>
                                <div className="mt-5">
                                    <h5 className="font-bold text-gray-800 mb-2">Risultati Strategici:</h5>
                                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-2">
                                        {program.benefits.map((benefit, i) => (
                                            <li key={i} className="flex items-start text-sm">
                                                <svg className="w-4 h-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                                                <span className="text-gray-600">{benefit}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>
                </main>
            </div>
            
            {/* --- FOOTER / CALL TO ACTION --- */}
            <footer className="mt-16 break-before-page">
                <div className="bg-teal-600 text-white text-center p-12">
                    <h3 className="text-3xl font-bold">Pronti a Sbloccare il Potenziale del Vostro Team?</h3>
                    <p className="mt-3 text-lg text-teal-100 max-w-2xl mx-auto">
                        Il primo passo è una conversazione strategica di 15 minuti. Analizziamo insieme le vostre sfide e disegniamo un'iniziativa pilota per dimostrare il ROI del benessere.
                    </p>
                     <p className="mt-6 text-2xl font-bold tracking-wider">
                        Cristina Ferrari
                    </p>
                </div>
                <div className="bg-gray-800 text-gray-300 p-8 text-center">
                    <p className="font-semibold">
                         <a href="mailto:criyogacri@gmail.com" className="hover:text-white transition-colors">criyogacri@gmail.com</a>
                         <span className="mx-3">|</span>
                         <a href="tel:+393346787798" className="hover:text-white transition-colors">+39 334 678 7798</a>
                         <span className="mx-3">|</span>
                         <span>Alzano Lombardo (BG)</span>
                    </p>
                    <p className="text-xs text-gray-500 mt-6">&copy; {new Date().getFullYear()} Synapsi Flow. Tutti i diritti riservati. Un partner strategico per la crescita del capitale umano.</p>
                </div>
            </footer>
        </div>
    );
});

export default BrochureTemplate;
