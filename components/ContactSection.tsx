
import React, { useState } from 'react';
import { FaqItem } from '../types';

const faqItems: FaqItem[] = [
    {
        question: "I corsi si svolgono in azienda o online?",
        answer: "Offriamo la massima flessibilità! I nostri programmi possono essere svolti sia presso la vostra sede aziendale che in formato virtuale per i team che lavorano da remoto o in smart working."
    },
    {
        question: "È necessaria esperienza pregressa in yoga o mindfulness?",
        answer: "Assolutamente no. I nostri corsi sono progettati per essere accessibili a tutti, dai principianti assoluti ai praticanti più esperti. Adattiamo ogni sessione al livello del gruppo."
    },
    {
        question: "Qual è la durata tipica di un programma?",
        answer: "La durata è personalizzabile. Offriamo corsi settimanali continuativi, workshop di una singola giornata e percorsi personalizzati di più settimane o mesi, a seconda dei vostri obiettivi."
    }
];

const AccordionItem: React.FC<{ item: FaqItem; isOpen: boolean; onClick: () => void; }> = ({ item, isOpen, onClick }) => (
    <div className="border-b border-gray-200 py-4">
        <button
            onClick={onClick}
            className="w-full flex justify-between items-center text-left text-lg font-medium text-gray-800"
        >
            <span>{item.question}</span>
            <svg
                className={`w-5 h-5 transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
        </button>
        <div className={`overflow-hidden transition-all duration-500 ${isOpen ? 'max-h-96 mt-2' : 'max-h-0'}`}>
             <p className="text-gray-600 pr-4">{item.answer}</p>
        </div>
    </div>
);

interface ContactSectionProps {
    onNavigate: (page: 'home' | 'programs' | 'company' | 'privacy') => void;
}

const ContactSection: React.FC<ContactSectionProps> = ({ onNavigate }) => {
    const [openFaq, setOpenFaq] = useState<number | null>(0);
    const [formState, setFormState] = useState({ name: '', email: '', company: '', message: '' });
    const [privacyAccepted, setPrivacyAccepted] = useState(false);


    const handleFaqToggle = (index: number) => {
        setOpenFaq(openFaq === index ? null : index);
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormState({ ...formState, [e.target.name]: e.target.value });
    };
    
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!privacyAccepted) {
            alert("Per favore, accetta l'informativa sulla privacy per procedere.");
            return;
        }
        const subject = encodeURIComponent(`Richiesta di informazioni da ${formState.company || 'un potenziale cliente'}`);
        const body = encodeURIComponent(
`Nome: ${formState.name}
Email: ${formState.email}
Azienda: ${formState.company}

Messaggio:
${formState.message}`
        );
        window.location.href = `mailto:criyogacri@gmail.com?subject=${subject}&body=${body}`;
    };

    return (
        <section id="contatti" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                        Inizia il Tuo Percorso di Benessere
                    </h2>
                    <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
                        Contattaci per una consulenza gratuita di 15 minuti e scopri come possiamo aiutare la tua azienda.
                    </p>
                </div>
                <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-12">
                    <div className="bg-gray-50 p-8 rounded-lg shadow-md">
                        <h3 className="text-2xl font-bold text-gray-800 mb-6">Richiedi Informazioni</h3>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label htmlFor="name" className="sr-only">Nome</label>
                                <input type="text" name="name" id="name" placeholder="Il tuo nome" required value={formState.name} onChange={handleInputChange} className="w-full px-4 py-3 rounded-md border-gray-300 focus:ring-teal-500 focus:border-teal-500"/>
                            </div>
                            <div>
                                <label htmlFor="email" className="sr-only">Email</label>
                                <input type="email" name="email" id="email" placeholder="La tua email" required value={formState.email} onChange={handleInputChange} className="w-full px-4 py-3 rounded-md border-gray-300 focus:ring-teal-500 focus:border-teal-500"/>
                            </div>
                            <div>
                                <label htmlFor="company" className="sr-only">Azienda</label>
                                <input type="text" name="company" id="company" placeholder="Nome dell'azienda" value={formState.company} onChange={handleInputChange} className="w-full px-4 py-3 rounded-md border-gray-300 focus:ring-teal-500 focus:border-teal-500"/>
                            </div>
                            <div>
                                <label htmlFor="message" className="sr-only">Messaggio</label>
                                <textarea name="message" id="message" rows={4} placeholder="Il tuo messaggio" required value={formState.message} onChange={handleInputChange} className="w-full px-4 py-3 rounded-md border-gray-300 focus:ring-teal-500 focus:border-teal-500"></textarea>
                            </div>
                            <div className="flex items-start">
                                <div className="flex items-center h-5">
                                    <input
                                        id="privacy"
                                        name="privacy"
                                        type="checkbox"
                                        checked={privacyAccepted}
                                        onChange={(e) => setPrivacyAccepted(e.target.checked)}
                                        className="focus:ring-teal-500 h-4 w-4 text-teal-600 border-gray-300 rounded"
                                    />
                                </div>
                                <div className="ml-3 text-sm">
                                    <label htmlFor="privacy" className="text-gray-600">
                                        Ho letto e accetto l'{' '}
                                        <button type="button" onClick={() => onNavigate('privacy')} className="font-medium text-teal-600 hover:text-teal-700 underline">
                                            Informativa sulla Privacy
                                        </button>
                                        .
                                    </label>
                                </div>
                            </div>
                            <button type="submit" disabled={!privacyAccepted} className="w-full py-3 px-6 bg-teal-600 text-white font-bold rounded-md hover:bg-teal-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed">Invia Richiesta</button>
                        </form>
                         <div className="mt-8 text-center text-gray-600 space-y-2">
                            <p>Oppure scrivici a: <a href="mailto:criyogacri@gmail.com" className="text-teal-600 font-semibold hover:underline">criyogacri@gmail.com</a></p>
                            <p>Chiamaci al: <a href="tel:+393346787798" className="text-teal-600 font-semibold hover:underline">+39 334 678 7798</a></p>
                            <p className="text-sm text-gray-500">📍Alzano Lombardo (BG)</p>
                        </div>
                    </div>
                    <div>
                        <h3 className="text-2xl font-bold text-gray-800 mb-6">Domande Frequenti (FAQ)</h3>
                        <div className="space-y-2">
                           {faqItems.map((item, index) => (
                               <AccordionItem key={index} item={item} isOpen={openFaq === index} onClick={() => handleFaqToggle(index)} />
                           ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;
