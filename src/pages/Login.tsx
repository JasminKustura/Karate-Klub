import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulacija prijave
    if (email === 'trener@karateklub.com' && password === 'trener123') {
      navigate('/admin'); // Trener ide na administratorski panel
    } else if (email === 'clan@karateklub.com' && password === 'clan123') {
      navigate('/dashboard'); // Član ide na korisnički panel
    } else {
      alert('Pogrešan email ili lozinka!');
    }
  };

  return (
    <div className="h-screen flex items-center justify-center bg-gray-100">
      <form onSubmit={handleLogin} className="p-6 bg-white shadow rounded w-full max-w-sm">
        <h1 className="text-2xl mb-4">Prijava</h1>
        <div className="mb-4">
          <label className="block mb-1">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 border rounded text-black"
            placeholder="Unesite vaš email"
            title="Email"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block mb-1">Lozinka</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-2 border rounded text-black"
            placeholder="Unesite vašu lozinku"
            title="Lozinka"
            required
          />
        </div>
        <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded">
          Prijavi se
        </button>
      </form>
    </div>
  );
}