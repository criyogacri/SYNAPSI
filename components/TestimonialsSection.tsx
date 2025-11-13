
import React from 'react';
import { Testimonial } from '../types';

const testimonials: Testimonial[] = [
  {
    quote: "I programmi di mindfulness hanno trasformato il modo in cui il nostro team affronta le sfide quotidiane. Abbiamo notato un incredibile aumento della concentrazione e della collaborazione.",
    author: "Luca Verdi",
    company: "CEO, Tech Solutions S.p.A."
  },
  {
    quote: "Le sessioni di yoga in ufficio sono diventate l'appuntamento più atteso della settimana. Un'iniziativa che ha ridotto visibilmente lo stress e migliorato l'umore generale.",
    author: "Giulia Neri",
    company: "HR Manager, Creative Agency"
  },
  {
    quote: "Un investimento che si è ripagato mille volte. I nostri dipendenti sono più felici, più sani e più produttivi. Non potremmo essere più soddisfatti.",
    author: "Paolo Russo",
    company: "Direttore Operativo, FinTech Corp"
  },
];

const TestimonialsSection: React.FC = () => {
  return (
    <section id="testimonianze" className="py-20 bg-teal-700 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold sm:text-4xl">
            Le Storie di Chi ci ha Scelto
          </h2>
          <p className="mt-4 text-lg text-teal-100 max-w-2xl mx-auto">
            Aziende come Google e Johnson & Johnson hanno aperto la strada. Ecco cosa dicono i nostri clienti.
          </p>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-1 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white/10 p-8 rounded-lg backdrop-blur-sm">
              <blockquote className="text-lg text-teal-50 italic">
                “{testimonial.quote}”
              </blockquote>
              <footer className="mt-4">
                <p className="text-base font-semibold text-white">{testimonial.author}</p>
                <p className="text-sm text-teal-200">{testimonial.company}</p>
              </footer>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
