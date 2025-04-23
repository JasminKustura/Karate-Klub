import React, { useState } from 'react';

export default function AdminPanel() {
  const [requests, setRequests] = useState([
    { id: 1, name: 'Marko Perić', email: 'marko@example.com', approved: false },
    { id: 2, name: 'Lana Novak', email: 'lana@example.com', approved: false },
  ]);

  const handleApprove = (id: number) => {
    setRequests((prev) =>
      prev.map((req) =>
        req.id === id ? { ...req, approved: true } : req
      )
    );
  };

  return (
    <div className="p-10 bg-gray-100 min-h-screen">
      <h1 className="text-2xl mb-6">Zahtjevi za registraciju</h1>
      <ul className="space-y-4">
        {requests.map((req) => (
          <li key={req.id} className="p-4 bg-white shadow rounded flex justify-between items-center">
            <div>
              <p className="font-bold">{req.name}</p>
              <p className="text-sm text-gray-600">{req.email}</p>
            </div>
            <button
              onClick={() => handleApprove(req.id)}
              className={`px-4 py-2 rounded ${
                req.approved ? 'bg-green-500 text-white' : 'bg-blue-500 text-white'
              }`}
              disabled={req.approved}
            >
              {req.approved ? 'Odobreno' : 'Odobri'}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}