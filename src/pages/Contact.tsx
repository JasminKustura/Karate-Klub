import React from 'react';

export default function Contact() {
  return (
    <div className="h-screen bg-gray-100 flex items-center justify-center">
      <form className="p-6 bg-white shadow rounded w-full max-w-md">
        <h1 className="text-2xl mb-4">Kontaktirajte nas</h1>
        <div className="mb-4">
          <label className="block mb-1">Ime</label>
          <input type="text" className="w-full p-2 border rounded" placeholder="Unesite vaše ime" />
        </div>
        <div className="mb-4">
          <label className="block mb-1">Email</label>
          <input type="email" className="w-full p-2 border rounded" title="Email" placeholder="Unesite vaš email" />
        </div>
        <div className="mb-4">
          <label className="block mb-1">Poruka</label>
          <textarea
            className="w-full p-2 border rounded"
            rows={4}
            title="Poruka"
            placeholder="Unesite vašu poruku"
          ></textarea>
        </div>
        <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded">
          Pošalji
        </button>
      </form>
    </div>
  );
}