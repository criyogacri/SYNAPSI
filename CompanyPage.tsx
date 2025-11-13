
import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';

interface CompanyPageProps {
    onNavigate: (page: 'home' | 'programs' | 'company') => void;
}

const CompanyPage: React.FC<CompanyPageProps> = ({ onNavigate }) => {
    return (
        <>
            <Header onNavigate={onNavigate} />
            <main className="bg-gray-50">
                <div className="py-20 px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto">
                        <div className="text-center">
                            <p className="text-base text-teal-600 font-semibold tracking-wide uppercase">La Nostra Filosofia</p>
                            <h1 className="mt-2 text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight">
                                L'Ingegneria dell'Anima Aziendale
                            </h1>
                            <p className="mt-4 text-xl text-gray-600">
                                Una fusione unica di logica manageriale e saggezza interiore per creare il futuro del lavoro.
                            </p>
                        </div>

                        <article className="mt-16 prose prose-lg prose-teal mx-auto text-gray-700">
                            <h2>Il Viaggio: Da Manager a Mentor</h2>
                            <p>
                                Il mio percorso non è un cambio di carriera, ma una sintesi. Nasce nei corridoi di aziende biomedicali, dove come ingegnere gestionale e manager ho imparato il valore dell'efficienza, della strategia e dei risultati misurabili. Ho imparato il "come" e il "cosa". Ma i miei viaggi in Oriente, le lunghe ore di meditazione e la disciplina dello yoga mi hanno insegnato il "perché".
                            </p>
                            <p>
                                Ho visto team brillanti bloccati non dalla mancanza di skill, ma dalla mancanza di chiarezza. Ho visto leader visionari logorati dallo stress. Ho capito che la più grande ottimizzazione possibile non riguarda un processo, ma la mente umana che quel processo lo governa.
                            </p>

                            <h2>La Sintesi: Precisione e Profondità</h2>
                            <p>
                                Il nostro approccio non è new-age, è "next-age". Uniamo la precisione analitica dell'ingegnere alla profondità del coach di mindfulness. Non proponiamo fughe dalla realtà, ma strumenti per padroneggiarla.
                            </p>
                            <ul>
                                <li><strong>Dall'ingegneria</strong>, prendiamo la capacità di analizzare un sistema (l'azienda), identificare i colli di bottiglia (lo stress, la scarsa comunicazione) e implementare soluzioni mirate.</li>
                                <li><strong>Dalla mindfulness</strong>, prendiamo le tecniche per potenziare la risorsa più critica di quel sistema: l'attenzione, la creatività e la resilienza delle persone.</li>
                            </ul>
                            
                            <h2>La Promessa: Un Vantaggio Competitivo Umano</h2>
                            <p>
                                Lavorare con noi non significa solo offrire un benefit ai dipendenti. Significa fare un upgrade strategico all'intera organizzazione. Il nostro obiettivo è trasformare il vostro ambiente di lavoro in un incubatore di innovazione, dove le persone non solo lavorano, ma prosperano. Dove le decisioni sono più lucide, la collaborazione più autentica e la leadership più ispirata.
                            </p>
                            <p>
                                Questo è il futuro del successo aziendale. Un futuro che si costruisce dall'interno. E noi abbiamo la mappa per costruirlo insieme.
                            </p>
                        </article>
                         <div className="mt-20 text-center">
                            <button 
                                onClick={() => onNavigate('programs')}
                                className="px-8 py-3 bg-teal-600 text-white font-bold rounded-full hover:bg-teal-500 transition-all duration-300 transform hover:scale-105 text-lg"
                            >
                                Esplora i nostri programmi
                            </button>
                        </div>
                    </div>
                </div>
            </main>
            <Footer onNavigate={onNavigate} />
        </>
    );
};

export default CompanyPage;
