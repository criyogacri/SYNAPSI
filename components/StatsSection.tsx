
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Senza Programma', Produttività: 75, Stress: 65 },
  { name: 'Con Programma', Produttività: 94, Stress: 40 },
];

const StatsSection: React.FC = () => {
  return (
    <section id="statistiche" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            I Risultati Parlano da Soli
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Investire nel benessere genera un ritorno misurabile sulla produttività e la soddisfazione del team.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="bg-teal-50 p-8 rounded-lg">
            <p className="text-5xl font-extrabold text-teal-600">+25%</p>
            <p className="mt-2 text-lg font-medium text-gray-700">Aumento della Produttività</p>
            <p className="text-sm text-gray-500">(Fonte: American Journal of Health Promotion)</p>
          </div>
          <div className="bg-teal-50 p-8 rounded-lg">
            <p className="text-5xl font-extrabold text-teal-600">-39%</p>
            <p className="mt-2 text-lg font-medium text-gray-700">Riduzione dello Stress Percepito</p>
            <p className="text-sm text-gray-500">(Dati medi dai nostri clienti)</p>
          </div>
          <div className="bg-teal-50 p-8 rounded-lg">
            <p className="text-5xl font-extrabold text-teal-600">+47%</p>
            <p className="mt-2 text-lg font-medium text-gray-700">Aumento della Lucidità Mentale</p>
            <p className="text-sm text-gray-500">(Feedback dei partecipanti)</p>
          </div>
        </div>

        <div className="mt-16 bg-gray-50 p-8 rounded-lg shadow-inner">
          <h3 className="text-xl font-semibold text-center text-gray-800 mb-6">Impatto sulla Performance del Team</h3>
          <div style={{ width: '100%', height: 300 }}>
            <ResponsiveContainer>
              <BarChart data={data} margin={{ top: 5, right: 20, left: -10, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="Produttività" fill="#0d9488" />
                <Bar dataKey="Stress" fill="#f43f5e" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
