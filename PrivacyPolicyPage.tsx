
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
                                Informativa sulla Privacy e Cookie Policy
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
                            
                            <h2>8. Cookie Policy</h2>
                            <p>
                                I cookie sono piccoli file di testo che i siti visitati dagli utenti inviano ai loro terminali, dove vengono memorizzati per essere poi ritrasmessi agli stessi siti alla successiva visita.
                            </p>
                            <h3>Tipologie di Cookie utilizzati</h3>
                            <p>
                                Questo sito utilizza principalmente <strong>cookie tecnici</strong>, essenziali per il corretto funzionamento delle pagine web. Questi cookie non richiedono il consenso dell'utente. Non utilizziamo cookie di profilazione per inviare messaggi pubblicitari in linea con le preferenze manifestate dall'utente.
                            </p>
                             <p>
                                Possono essere presenti cookie di terze parti (es. Google Fonts) per l'integrazione di funzionalità esterne. La gestione di questi cookie è disciplinata dalle relative informative sulla privacy cui si prega di fare riferimento.
                            </p>
                            <h3>Gestione dei Cookie</h3>
                            <p>
                                L'utente può gestire le preferenze relative ai cookie direttamente all'interno del proprio browser ed impedire – ad esempio – che terze parti possano installarne. Tramite le preferenze del browser è inoltre possibile eliminare i cookie installati in passato. È importante notare che disabilitando tutti i cookie, il funzionamento di questo sito potrebbe essere compromesso. Puoi trovare informazioni su come gestire i cookie nel tuo browser ai seguenti indirizzi:
                                <ul>
                                    <li><a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer">Google Chrome</a></li>
                                    <li><a href="https://support.mozilla.org/it/kb/Gestione%20dei%20cookie" target="_blank" rel="noopener noreferrer">Mozilla Firefox</a></li>
                                    <li><a href="https://support.apple.com/it-it/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer">Apple Safari</a></li>
                                    <li><a href="https://support.microsoft.com/it-it/windows/eliminare-e-gestire-i-cookie-168dab11-0753-043d-7c16-ede5947fc64d" target="_blank" rel="noopener noreferrer">Microsoft Edge</a></li>
                                </ul>
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
