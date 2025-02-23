import { useState } from 'react';
import { motion } from 'framer-motion';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md z-40 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <motion.span 
              className="text-2xl font-bold text-primary-600"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              MommyCare+
            </motion.span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <NavLink href="#home">Home</NavLink>
            <NavLink href="#features">Features</NavLink>
            <NavLink href="#about">About Us</NavLink>
            <NavLink href="#contact" className="bg-primary-600 text-white px-4 py-2 rounded-md">
              Contact Us
            </NavLink>
          </div>

          <button
            className="md:hidden flex items-center"
            onClick={() => setIsOpen(!isOpen)}
          >
            <span className="sr-only">Open menu</span>
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <motion.div
        className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: isOpen ? 1 : 0, y: isOpen ? 0 : -20 }}
        transition={{ duration: 0.2 }}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <MobileNavLink href="#home">Home</MobileNavLink>
          <MobileNavLink href="#features">Features</MobileNavLink>
          <MobileNavLink href="#about">About Us</MobileNavLink>
          <MobileNavLink href="#contact">Contact Us</MobileNavLink>
        </div>
      </motion.div>
    </nav>
  );
}

function NavLink({ href, children, className = '' }) {
  return (
    <a
      href={href}
      className={`text-gray-700 hover:text-primary-600 transition-colors ${className}`}
    >
      {children}
    </a>
  );
}

function MobileNavLink({ href, children }) {
  return (
    <a
      href={href}
      className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary-600 hover:bg-gray-50"
    >
      {children}
    </a>
  );
}