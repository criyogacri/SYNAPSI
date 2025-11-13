
import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';

interface PrivacyPolicyPageProps {
    onNavigate: (page: 'home' | 'programs' | 'company' | 'privacy') => void;
}

const PrivacyPolicyPage: React.FC<PrivacyPolicyPageProps> = ({ onNavigate }) => {
    return (
        <>
            <Header onNavigate={onNavigate} />
            <main className="bg-white">
                <div className="py-20 px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto">
                        <div className="text-center">
                            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight">
                                Informativa sulla Privacy
                            </h1>
                            <p className="mt-4 text-xl text-gray-600">
                                La tua privacy è importante per noi.
                            </p>
                        </div>

                        <article className="mt-16 prose prose-lg prose-teal mx-auto text-gray-700">
                            <p>Ultimo aggiornamento: {new Date().toLocaleDateString('it-IT')}</p>

                            <h2>1. Titolare del Trattamento</h2>
                            <p>
                                Synapsi Flow di Cristina Ferrari, con sede in Alzano Lombardo (BG), email: criyogacri@gmail.com, è il Titolare del trattamento dei dati personali raccolti su questo sito.
                            </p>

                            <h2>2. Tipi di Dati Raccolti</h2>
                            <p>
                                Raccogliamo i seguenti tipi di dati:
                                <ul>
                                    <li><strong>Dati forniti volontariamente dall'utente:</strong> Nome, cognome, indirizzo email, nome dell'azienda e qualsiasi altra informazione che ci fornisci compilando i moduli di contatto o di iscrizione alla newsletter.</li>
                                    <li><strong>Dati di navigazione:</strong> Informazioni raccolte automaticamente durante l'uso del sito, come indirizzi IP, tipo di browser, orari di accesso. Questi dati sono utilizzati al solo fine di ricavare informazioni statistiche anonime sull'uso del sito e per controllarne il corretto funzionamento.</li>
                                </ul>
                            </p>

                            <h2>3. Finalità del Trattamento</h2>
                            <p>
                                I tuoi dati sono trattati per le seguenti finalità:
                                <ul>
                                    <li>Per rispondere alle tue richieste di informazioni inviate tramite il modulo di contatto.</li>
                                    <li>Per inviare la nostra newsletter e comunicazioni commerciali, solo se hai fornito il tuo esplicito consenso.</li>
                                    <li>Per adempiere a obblighi di legge e per tutelare i nostri diritti.</li>
                                </ul>
                            </p>
                             <h2>4. Base Giuridica del Trattamento</h2>
                            <p>
                                Il trattamento dei tuoi dati si basa sul tuo consenso (Art. 6.1.a GDPR) per le finalità di marketing e per rispondere alle tue richieste. In alcuni casi, il trattamento potrebbe essere necessario per adempiere a un obbligo legale (Art. 6.1.c GDPR).
                            </p>

                            <h2>5. Modalità di Trattamento e Periodo di Conservazione</h2>
                            <p>
                                I dati sono trattati con strumenti informatici e/o telematici, con logiche strettamente correlate alle finalità indicate. Conserviamo i tuoi dati per il tempo strettamente necessario a conseguire gli scopi per cui sono stati raccolti. I dati raccolti per finalità di marketing saranno conservati fino alla revoca del tuo consenso.
                            </p>

                            <h2>6. Diritti dell'Interessato</h2>
                            <p>
                                In qualità di interessato, hai il diritto di:
                                <ul>
                                    <li>Accedere ai tuoi dati e chiederne la rettifica.</li>
                                    <li>Ottenere la cancellazione dei dati (diritto all'oblio).</li>
                                    <li>Limitare il trattamento o opporti ad esso.</li>
                                    <li>Richiedere la portabilità dei dati.</li>
                                    <li>Revocare il consenso in qualsiasi momento.</li>
                                    <li>Proporre reclamo a un'autorità di controllo (Garante per la Protezione dei Dati Personali).</li>
                                </ul>
                                Per esercitare i tuoi diritti, puoi contattarci all'indirizzo email criyogacri@gmail.com.
                            </p>

                            <h2>7. Modifiche a questa Privacy Policy</h2>
                            <p>
                                Ci riserviamo il diritto di apportare modifiche a questa privacy policy in qualunque momento, dandone pubblicità su questa pagina. Si prega dunque di consultare regolarmente questa pagina, facendo riferimento alla data di ultima modifica indicata in alto.
                            </p>
                        </article>
                         <div className="mt-20 text-center">
                            <button 
                                onClick={() => onNavigate('home')}
                                className="px-8 py-3 bg-teal-600 text-white font-bold rounded-full hover:bg-teal-500 transition-all duration-300 transform hover:scale-105 text-lg"
                            >
                                Torna alla Homepage
                            </button>
                        </div>
                    </div>
                </div>
            </main>
            <Footer onNavigate={onNavigate} />
        </>
    );
};

export default PrivacyPolicyPage;
