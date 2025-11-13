import React from 'react';
import { TeamMember } from '../types';

const teamMembers: TeamMember[] = [
  {
    name: "Cristina Ferrari",
    role: "Fondatrice & Corporate Wellness Specialist",
    imageUrl: "https://i.ibb.co/7tz6N0h4/ae0aae64-c9be-4a6a-80a6-3e5cb8870235-2.jpg",
    bio: "Con 15 anni di esperienza in contesti multinazionali e 25 anni di pratica yoga, Cristina ha vissuto le sfide del mondo corporate. Oggi trasforma questa sintesi unica in percorsi di benessere (yoga e mindfulness) professionali, fluidi e su misura per le aziende."
  }
];

const AboutSection: React.FC = () => {
  return (
    <section id="chisiamo" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">La Nostra Visione</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            "L'architettura della mente vincente."
          </p>
          <p className="mt-4 max-w-3xl text-xl text-gray-500 lg:mx-auto">
            Il successo di un'azienda non si misura in fogli di calcolo, ma nella qualità del pensiero che li ha creati. Il nostro lavoro non è offrire un momento di pausa, ma costruire le fondamenta per un pensiero di qualità superiore. Addestriamo la mente a diventare uno strumento di precisione: capace di focus profondo, creatività inaspettata e resilienza autentica. Le grandi strategie, le soluzioni innovative, le relazioni proficue... tutto nasce da una mente chiara. Noi siamo gli architetti di quella chiarezza.
          </p>
        </div>

        <div className="mt-20">
            <h3 className="text-2xl font-bold text-center text-gray-900 mb-12">La Fondatrice</h3>
          <div className="max-w-3xl mx-auto">
            {teamMembers.map((member) => (
              <div key={member.name} className="flex flex-col sm:flex-row items-center text-center sm:text-left gap-8 bg-gray-50 p-6 rounded-lg shadow-sm transform hover:scale-105 transition-transform duration-300">
                <img className="h-32 w-32 rounded-full object-cover flex-shrink-0" src={member.imageUrl} alt={member.name} />
                <div>
                  <h4 className="text-xl font-semibold text-gray-900">{member.name}</h4>
                  <p className="text-teal-600 font-medium">{member.role}</p>
                  <p className="mt-2 text-gray-600">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;