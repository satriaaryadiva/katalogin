'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';

const navLinks = [
  { href: '#fitur', label: 'Beranda' },
  { href: '#tentang', label: 'Our Services' },
  { href: '#tentang-kami', label: 'Tentang Kami' },
  { href: '#kontak', label: 'Kontak' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { staggerChildren: 0.1, when: 'beforeChildren' },
    },
    exit: {
      opacity: 0,
      y: -20,
      transition: { when: 'afterChildren', duration: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 },
  };

  return (
<nav
  className={`fixed w-full top-0 left-0 z-50 transition-colors  duration-200
    ${isScrolled ? 'bg-[#1d3331] text-white' : 'bg-[#101d1c] text-white'}
    ${isScrolled ? ' duration-1000  before:absolute before:bottom-0 before:left-0 before:h-[4px] before:w-full before:bg-gradient-to-r before:from-blue-500 before:via-purple-500 before:to-pink-500 before:content-[""]' : ''}
  `}
>


    <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
      {/* Logo */}
      <Link href="/" className="text-2xl font-bold text-yellow-400">
        Katalog <span className={`${isScrolled ? ' text-white' : ' text-blue-600'}`}>in</span>
      </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6 font-medium">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="hover:text-yellow-400 font-bold transition">
              {link.label}
            </Link>
          ))}
        </div>

        {/* Desktop Button */}
        <div className="hidden md:flex items-center space-x-4">
          <Link
            href="/login"
            className="bg-blue-400 text-white px-4 py-2 rounded-md hover:bg-yellow-300 transition"
          >
            Tanyakan Sekarang
          </Link>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-black focus:outline-none transition"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu with Animation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="md:hidden bg-white text-gray-800 px-6 py-6 space-y-4 shadow-lg"
          >
            {navLinks.map((link) => (
              <motion.div key={link.href} variants={itemVariants}>
                <Link
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block  text-center text-lg font-bold hover:text-blue-600 transition"
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}

            <motion.div variants={itemVariants} className="text-center pt-2">
              <Link
                href="/login"
                onClick={() => setIsOpen(false)}
                className="bg-yellow-400 text-blue-900 px-4 py-2 rounded-md hover:bg-yellow-300 transition"
              >
                Tanyakan Sekarang
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
