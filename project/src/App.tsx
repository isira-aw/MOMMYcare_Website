import { useState } from 'react';
import FlashScreen from './components/FlashScreen';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
import { FaYoutube, FaInstagram, FaFacebook } from 'react-icons/fa';

export default function App() {
  const [showFlash, setShowFlash] = useState(true);

  if (showFlash) {
    return <FlashScreen onComplete={() => setShowFlash(false)} />;
  }

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Features />
      <AboutUs />
      <ContactUs />

      <footer className="bg-gray-800">
        <div className="flex space-x-16 p-4 text-white shadow-lg justify-center">
          <a 
            href="https://www.youtube.com/channel/UC-Ra0qUQHUGH5cpMd2Ipkpw" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:text-red-500 transition-colors"
          >
            <FaYoutube size={24} />
          </a>
          <a 
            href="https://www.instagram.com/mommycare_plus?igsh=MW16MGRzaWE1MDhrag%3D%3D&utm_source=qr" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:text-pink-500 transition-colors"
          >
            <FaInstagram size={24} />
          </a>
          <a 
            href="https://www.facebook.com/share/15yZgs1Ntq/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:text-blue-500 transition-colors"
          >
            <FaFacebook size={24} />
          </a>
        </div>
        <div className="text-center p-4">
          <p className="text-sm text-blue-500">
            © 2025 - MOMMYcare+ Team - All Rights Reserved. Concept, Design & Development.
          </p>
        </div>
      </footer>
    </div>
  );
}