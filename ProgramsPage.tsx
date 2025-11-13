
import React, { useState, useRef } from 'react';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

import Header from './components/Header';
import Footer from './components/Footer';
import BrochureTemplate from './components/BrochureTemplate';
import DownloadIcon from './components/icons/DownloadIcon';

import YogaIcon from './components/icons/YogaIcon';
import WorkshopIcon from './components/icons/WorkshopIcon';
import TeamBuildingIcon from './components/icons/TeamBuildingIcon';
import CustomProgramIcon from './components/icons/CustomProgramIcon';

interface ProgramsPageProps {
    onNavigate: (page: 'home' | 'programs' | 'company' | 'privacy') => void;
}

const programsData = [
    {
        icon: <YogaIcon className="w-8 h-8" />,
        title: "Mindset Shift: Percorsi di Mindfulness e Yoga Strategico",
        subtitle: "Focus profondo, performance sostenibile.",
        description: "Portiamo percorsi di mindfulness e yoga strategico direttamente nel cuore della tua azienda, online o in sede. Non semplici lezioni, ma un training mentale e fisico per aumentare la concentrazione, ridurre la reattività allo stress e migliorare la lucidità operativa. Forniamo strumenti pratici e immediati per navigare la complessità quotidiana con maggiore calma e efficacia.",
        benefits: [
            "Potenziamento della concentrazione e della capacità di deep work.",
            "Miglioramento della gestione emotiva e della resilienza allo stress.",
            "Riduzione del rischio di burnout e aumento del benessere generale.",
            "Sviluppo di una mentalità più agile e adattabile al cambiamento."
        ]
    },
    {
        icon: <WorkshopIcon className="w-8 h-8" />,
        title: "Workshop Intensivi",
        subtitle: "Dalla pressione alla performance di picco.",
        description: "Giornate o mezze giornate immersive per una trasformazione rapida e mirata. I nostri workshop sono laboratori pratici dove i team imparano a trasformare la pressione in un'alleata, a guidare con consapevolezza e a comunicare in modo più efficace. Affrontiamo temi come la leadership consapevole, la creatività e la gestione dell'energia per sbloccare il potenziale latente.",
        benefits: [
            "Acquisizione di tool concreti per la gestione dello stress e della performance.",
            "Sviluppo di soft skill cruciali per la leadership moderna.",
            "Stimolo alla creatività e al problem-solving innovativo.",
            "Impatto immediato sulla dinamica e sulla produttività del team."
        ]
    },
    {
        icon: <TeamBuildingIcon className="w-8 h-8" />,
        title: "Performance & Resilience Program",
        subtitle: "Un team coeso, un'azienda imbattibile.",
        description: "Esperienze di gruppo immersive, anche in contesti naturali, per costruire le fondamenta di un team resiliente e performante. Attraverso pratiche condivise di yoga e mindfulness, rafforziamo la coesione, la fiducia reciproca e il senso di appartenenza. Questi programmi sono progettati per migliorare la collaborazione e creare un ambiente di lavoro psicologicamente sicuro e motivante.",
        benefits: [
            "Rafforzamento della fiducia, della comunicazione e dello spirito di squadra.",
            "Aumento della resilienza collettiva di fronte alle sfide.",
            "Miglioramento del clima aziendale e della collaborazione inter-funzionale.",
            "Creazione di un'esperienza memorabile che consolida la cultura aziendale."
        ]
    },
    {
        icon: <CustomProgramIcon className="w-8 h-8" />,
        title: "Executive Presence Coaching",
        subtitle: "Guidare con chiarezza, calma e visione.",
        description: "Un programma di coaching individuale, esclusivo e confidenziale, dedicato a C-Level e Top Manager. L'obiettivo è affinare la 'presenza esecutiva': quella rara capacità di guidare con calma sotto pressione, comunicare con impatto, ispirare fiducia e mantenere una visione strategica chiara anche nella complessità. Un percorso su misura per potenziare la leadership al massimo livello.",
        benefits: [
            "Miglioramento della capacità di decision-making in situazioni complesse.",
            "Potenziamento delle doti di comunicazione carismatica e influenza.",
            "Aumento della resilienza personale e della gestione dello stress manageriale.",
            "Sviluppo di una leadership autentica, consapevole e visionaria."
        ]
    }
];


const ProgramDetailCard: React.FC<{
    icon: React.ReactNode;
    title: string;
    subtitle: string;
    description: string;
    benefits: string[];
}> = ({ icon, title, subtitle, description, benefits }) => (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-[1.02] transition-transform duration-300 ring-1 ring-gray-200">
        <div className="p-8">
            <div className="flex items-center gap-4">
                <div className="flex-shrink-0 bg-teal-600 p-4 rounded-lg text-white">
                    {icon}
                </div>
                <div>
                    <h3 className="text-2xl font-bold text-gray-900">{title}</h3>
                    <p className="text-teal-700 font-semibold">{subtitle}</p>
                </div>
            </div>
            <p className="mt-6 text-gray-600 leading-relaxed">{description}</p>
            <div className="mt-6">
                <h4 className="font-semibold text-gray-800">Vantaggi Strategici per la Tua Azienda:</h4>
                <ul className="mt-3 space-y-2">
                    {benefits.map((benefit, i) => (
                        <li key={i} className="flex items-start">
                            <svg className="flex-shrink-0 h-5 w-5 text-green-500 mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                            <span className="ml-2 text-gray-600">{benefit}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    </div>
);

const ProgramsPage: React.FC<ProgramsPageProps> = ({ onNavigate }) => {
    const [isGeneratingPdf, setIsGeneratingPdf] = useState(false);
    const brochureRef = useRef<HTMLDivElement>(null);

    const handleScrollToContact = () => {
        onNavigate('home');
        setTimeout(() => {
            document.getElementById('contatti')?.scrollIntoView({ behavior: 'smooth' });
        }, 100);
    };

    const handleDownloadPdf = async () => {
        if (!brochureRef.current) return;
        setIsGeneratingPdf(true);

        try {
            const canvas = await html2canvas(brochureRef.current, { scale: 2 });
            const imgData = canvas.toDataURL('image/png');
            
            const pdf = new jsPDF('p', 'mm', 'a4');
            const pdfWidth = pdf.internal.pageSize.getWidth();
            const pdfHeight = pdf.internal.pageSize.getHeight();
            const imgWidth = canvas.width;
            const imgHeight = canvas.height;
            const ratio = imgWidth / imgHeight;
            const imgHeightOnPdf = pdfWidth / ratio;
            
            let heightLeft = imgHeightOnPdf;
            let position = 0;
            
            pdf.addImage(imgData, 'PNG', 0, position, pdfWidth, imgHeightOnPdf);
            heightLeft -= pdfHeight;
            
            while (heightLeft > 0) {
                position = heightLeft - imgHeightOnPdf;
                pdf.addPage();
                pdf.addImage(imgData, 'PNG', 0, position, pdfWidth, imgHeightOnPdf);
                heightLeft -= pdfHeight;
            }

            pdf.save('brochure-synapsi-flow.pdf');

        } catch (error) {
            console.error("Errore durante la generazione del PDF:", error);
            alert("Si è verificato un errore durante la creazione della brochure. Riprova.");
        } finally {
            setIsGeneratingPdf(false);
        }
    };


    return (
        <>
            <Header onNavigate={onNavigate} />
            <main className="bg-teal-50">
                <div className="py-20 px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto text-center">
                        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900">
                            Programmi di Benessere Corporate Trasformativi
                        </h1>
                        <p className="mt-4 text-xl text-gray-600">
                            Non semplici corsi, ma investimenti strategici nel vostro capitale più prezioso: le persone.
                            Scopri le nostre soluzioni progettate per sbloccare il potenziale del tuo team.
                        </p>
                        <div className="mt-8 flex justify-center items-center gap-6">
                            <button 
                                onClick={() => onNavigate('home')}
                                className="text-teal-600 font-semibold hover:text-teal-800 transition-colors"
                            >
                                &larr; Torna alla Homepage
                            </button>
                             <button
                                onClick={handleDownloadPdf}
                                disabled={isGeneratingPdf}
                                className="px-5 py-2.5 bg-white text-teal-700 font-semibold rounded-full border-2 border-teal-600 hover:bg-teal-600 hover:text-white transition-all duration-300 transform hover:scale-105 flex items-center gap-2 disabled:opacity-50 disabled:cursor-wait"
                            >
                                {isGeneratingPdf ? (
                                    <>
                                        <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                        </svg>
                                        Creazione...
                                    </>
                                ) : (
                                    <>
                                        <DownloadIcon className="w-5 h-5" />
                                        Scarica Brochure (PDF)
                                    </>
                                )}
                            </button>
                        </div>
                    </div>

                    <div className="max-w-5xl mx-auto mt-16 grid gap-12">
                       {programsData.map((program, index) => (
                           <ProgramDetailCard key={index} {...program} />
                       ))}
                    </div>

                    <div className="mt-20 max-w-3xl mx-auto text-center bg-white p-8 rounded-xl shadow-lg">
                        <h3 className="text-2xl font-bold text-gray-900">Pronto a investire sul tuo team?</h3>
                        <p className="mt-3 text-gray-600">Costruiamo insieme un progetto pilota di 15 minuti, senza impegno, per mostrare il potenziale trasformativo di queste pratiche. Contattami per definire il primo passo.</p>
                        <button 
                            onClick={handleScrollToContact}
                            className="mt-6 px-8 py-3 bg-teal-600 text-white font-bold rounded-full hover:bg-teal-500 transition-all duration-300 transform hover:scale-105 text-lg"
                        >
                            Richiedi una Consulenza Gratuita
                        </button>
                    </div>
                </div>
            </main>
            <Footer onNavigate={onNavigate} />
            <div className="absolute top-0 left-[-9999px] opacity-0" aria-hidden="true">
                <BrochureTemplate ref={brochureRef} programs={programsData} />
            </div>
        </>
    );
};

export default ProgramsPage;
