import React from 'react';

export default function Members() {
  const trainers = [
    { name: 'Ivan Horvat', belt: 'Crni pojas' },
    { name: 'Ana Kovačić', belt: 'Crni pojas' },
  ];

  const members = [
    { name: 'Marko Perić', belt: 'Plavi pojas' },
    { name: 'Lana Novak', belt: 'Zeleni pojas' },
    { name: 'Petar Jurić', belt: 'Žuti pojas' },
  ];

  return (
    <div className="h-screen bg-gray-100 text-gray-800 p-10">
      <h1 className="text-4xl text-center mb-10">Članovi Karate Kluba</h1>

      {/* Sekcija za trenere */}
      <section className="mb-10">
        <h2 className="text-2xl mb-4">Treneri</h2>
        <ul className="space-y-4">
          {trainers.map((trainer, index) => (
            <li key={index} className="p-4 bg-white shadow rounded">
              <p className="text-lg font-bold">{trainer.name}</p>
              <p className="text-sm text-gray-600">{trainer.belt}</p>
            </li>
          ))}
        </ul>
      </section>

      {/* Sekcija za članove */}
      <section>
        <h2 className="text-2xl mb-4">Članovi</h2>
        <ul className="space-y-4">
          {members.map((member, index) => (
            <li key={index} className="p-4 bg-white shadow rounded">
              <p className="text-lg font-bold">{member.name}</p>
              <p className="text-sm text-gray-600">{member.belt}</p>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}