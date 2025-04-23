import React from 'react';

export default function Notices() {
  return (
    <div className="h-screen bg-gray-100 text-gray-800">
      <h1 className="text-4xl text-center p-10">Obavijesti</h1>
      <ul className="p-4 space-y-4">
        <li className="p-4 bg-white shadow rounded">Trening u subotu u 10:00</li>
        <li className="p-4 bg-white shadow rounded">Natjecanje u nedjelju u 15:00</li>
      </ul>
    </div>
  );
}