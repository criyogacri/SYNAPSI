
import React from 'react';

const StressIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>;
const FocusIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>;
const ClimateIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.653-.28-1.25-.743-1.672M12 14c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zM4 9a7 7 0 0114 0v1" /></svg>;
const CultureIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>;

const benefits = [
  { icon: <StressIcon />, title: "Riduzione dello Stress", text: "Impara tecniche efficaci per gestire la pressione e prevenire il burnout." },
  { icon: <FocusIcon />, title: "Aumento della Concentrazione", text: "Migliora il focus e la produttività con pratiche di mindfulness mirate." },
  { icon: <ClimateIcon />, title: "Miglior Clima Aziendale", text: "Rafforza le relazioni interpersonali e la collaborazione nel team." },
  { icon: <CultureIcon />, title: "Cultura Positiva", text: "Promuovi la fidelizzazione dei dipendenti investendo nel loro benessere." },
];

const BenefitCard: React.FC<{ icon: React.ReactNode; title: string; text: string }> = ({ icon, title, text }) => (
  <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 text-center flex flex-col items-center">
    {icon}
    <h3 className="text-xl font-semibold text-gray-800 mt-4 mb-2">{title}</h3>
    <p className="text-gray-600">{text}</p>
  </div>
);

const BenefitsSection: React.FC = () => {
  return (
    <section id="benefici" className="py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Un Investimento nel Tuo Capitale Umano
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Scopri come i nostri programmi possono trasformare il tuo ambiente di lavoro.
          </p>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {benefits.map((benefit, index) => (
            <BenefitCard key={index} {...benefit} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
