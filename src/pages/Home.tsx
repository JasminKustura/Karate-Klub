import React from 'react';
import { motion } from 'framer-motion';
import { FaFacebook, FaInstagram } from 'react-icons/fa';

export default function Home() {
  return (
    <div className="h-screen text-white flex flex-col bg-gradient-to-r from-black via-white to-red animate-gradientShift bg-[length:200%_200%]">
      <nav className="p-4 bg-gray-900">
        <ul className="flex justify-center space-x-4">
          <li><a href="/" className="hover:underline">Početna</a></li>
          <li><a href="/notices" className="hover:underline">Obavijesti</a></li>
          <li><a href="/members" className="hover:underline">Članovi</a></li>
          <li><a href="/login" className="hover:underline">Prijava</a></li>
          <li><a href="/contact" className="hover:underline">Kontakt</a></li>
        </ul>
      </nav>
      <motion.div
        className="flex items-center justify-center flex-grow"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="p-10 text-3xl text-center">🏠 Dobrodošli u Karate Klub</div>
      </motion.div>
      <motion.section
        className="p-10 bg-gray-700 text-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-2xl mb-4">O nama</h2>
        <p>
          Karate Klub je posvećen promicanju zdravog načina života i borilačkih vještina.
          Naši članovi su svih uzrasta i razina iskustva, a naš cilj je zajednički rast i razvoj.
        </p>
      </motion.section>
      <motion.section
        className="p-10 bg-red-600 text-center text-white"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <h2 className="text-2xl mb-4">Pridružite nam se!</h2>
        <p className="mb-6">
          Postanite dio našeg Karate Kluba i započnite svoje putovanje borilačkih vještina.
        </p>
        <a
          href="/members"
          className="bg-white text-red-600 px-6 py-3 rounded font-bold hover:bg-gray-200 transition"
        >
          Saznajte više
        </a>
      </motion.section>
      <section className="p-10 bg-gray-100 text-center">
        <h2 className="text-2xl mb-4 text-black">Galerija</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <img
            src="/images/trening1.jpg"
            alt="Trening 1"
            className="rounded shadow transform transition-transform duration-300 hover:scale-105"
          />
          <img 
            src="/images/trening2.jpg" 
            alt="Trening 2" 
            className="rounded shadow transform transition-transform duration-300 hover:scale-105"
         />
          <img src="/images/natjecanje.jpg" alt="Natjecanje" className="rounded shadow transform transition-transform duration-300 hover:scale-105" />
          <img src="/images/klub.jpg" alt="Klub" className="rounded shadow transform transition-transform duration-300 hover:scale-105" />
          <img src="/images/pojas.jpg" alt="Pojas" className="rounded shadow transform transition-transform duration-300 hover:scale-105" />
          <img src="/images/grupna.jpg" alt="Grupna slika" className="rounded shadow transform transition-transform duration-300 hover:scale-105" />
        </div>
      </section>
      <footer className="p-4 bg-gray-900 text-center text-white">
        <p>&copy; 2025 Karate Klub. Sva prava pridržana.</p>
        <p>Email: info@karateklub.com | Telefon: +387 91 123 4567</p>
        <div className="flex justify-center space-x-4 mt-4">
          <a href="#" className="text-white hover:text-gray-400 transform transition-transform duration-300 hover:scale-110">
            <FaFacebook size={24} />
          </a>
          <a href="#" className="text-white hover:text-gray-400 transform transition-transform duration-300 hover:scale-110">
            <FaInstagram size={24} />
          </a>
        </div>
      </footer>
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-4 right-4 bg-red-600 text-white px-4 py-2 rounded-full shadow-lg hover:bg-red-700 transition"
      >
        ↑ Povratak na vrh
      </button>
    </div>
  );
}
