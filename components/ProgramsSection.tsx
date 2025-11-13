
import React from 'react';
import { Program } from '../types';
import YogaIcon from './icons/YogaIcon';
import WorkshopIcon from './icons/WorkshopIcon';
import TeamBuildingIcon from './icons/TeamBuildingIcon';
import CustomProgramIcon from './icons/CustomProgramIcon';

const programs: Program[] = [
  {
    title: "Mindset Shift: Percorsi di Mindfulness e Yoga Strategico",
    description: "Fornire strumenti pratici e immediati per aumentare la concentrazione e ridurre la reattività allo stress quotidiano, con un impatto diretto sulla lucidità operativa.",
    icon: <YogaIcon className="h-10 w-10 text-white" />
  },
  {
    title: "Workshop Intensivi",
    description: "Giornate o mezze giornate per trasformare la gestione della pressione in performance di picco, leadership consapevole, creatività e comunicazione efficace.",
    icon: <WorkshopIcon className="h-10 w-10 text-white" />
  },
  {
    title: "Performance & Resilience Program",
    description: "Esperienze di gruppo immersive per migliorare la coesione, la fiducia e il benessere del team attraverso pratiche di yoga e mindfulness.",
    icon: <TeamBuildingIcon className="h-10 w-10 text-white" />
  },
  {
    title: "Executive Presence Coaching",
    description: "Un programma di coaching individuale e confidenziale rivolto a C-Level e Top Manager, per affinare la presenza esecutiva: capacità di guidare con chiarezza, calma e visione strategica.",
    icon: <CustomProgramIcon className="h-10 w-10 text-white" />
  },
];

const ProgramCard: React.FC<Program> = ({ title, description, icon }) => (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:-translate-y-2 transition-transform duration-300">
        <div className="p-8">
            <div className="flex items-center">
                <div className="flex-shrink-0 bg-teal-600 p-4 rounded-md">
                    {icon}
                </div>
                <h3 className="ml-4 text-xl font-bold text-gray-900">{title}</h3>
            </div>
            <p className="mt-4 text-gray-600">{description}</p>
        </div>
    </div>
);


const ProgramsSection: React.FC = () => {
  return (
    <section id="programmi" className="py-20 bg-teal-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Soluzioni su Misura per la Tua Azienda
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Offriamo una gamma di programmi flessibili per soddisfare le esigenze uniche del tuo team.
          </p>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-1 lg:grid-cols-2">
            {programs.map((program) => (
                <ProgramCard key={program.title} {...program} />
            ))}
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection;