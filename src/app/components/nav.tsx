'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-indigo-600 shadow-md fixed top-0 left-0 right-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold text-yellow-400">
          Katalog <span className="text-white">in</span>
        </Link>

        <div className="hidden md:flex space-x-6 text-white font-medium">
          <Link href="#fitur" className=" hover:text-yellow-400 transition">Fitur</Link>
          <Link href="#tentang" className="hover:text-yellow-400 transition">Tentang</Link>
          <Link href="#kontak" className="hover:text-yellow-400 transition">Kontak</Link>
        </div>

        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white px-4 py-4 mt-0 space-y-2 shadow-lg">
          <Link href="#fitur" onClick={() => setIsOpen(false)} className="block text-gray-700">Fitur</Link>
          <Link href="#tentang" onClick={() => setIsOpen(false)} className="block text-gray-700">Tentang</Link>
          <Link href="#kontak" onClick={() => setIsOpen(false)} className="block text-gray-700">Kontak</Link>
          <Link href="/login" onClick={() => setIsOpen(false)} className="block text-gray-700">Login</Link>
        </div>
      )}
    </nav>
  );
}
