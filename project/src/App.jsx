import { useState } from 'react';
import FlashScreen from './components/FlashScreen';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
import { FaYoutube, FaInstagram, FaFacebook } from 'react-icons/fa';

function App() {
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

      <div className="flex space-x-16 p-4 bg-gray-800 text-white  shadow-lg justify-center">
        <a href="https://www.youtube.com/channel/UC-Ra0qUQHUGH5cpMd2Ipkpw" target="_blank" rel="noopener noreferrer" className="hover:text-red-500">
          <FaYoutube size={24} />
        </a>
        <a href="https://www.instagram.com/mommycare_plus?igsh=MW16MGRzaWE1MDhrag%3D%3D&utm_source=qr " target="_blank" rel="noopener noreferrer" className="hover:text-pink-500">
          <FaInstagram size={24} />
        </a>
        <a href="https://www.facebook.com/share/15yZgs1Ntq/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500">
          <FaFacebook size={24} />
        </a>

        
        </div>
        <div className="text-center  bg-gray-800 p-4  ">
    <p className="text-sm text-blue-500 mt-2">© 2025 - MOMMYcare+ Team - All Rights Reserved. Concept, Design & Development.</p>
  </div>
      

    </div>
  );
}

export default App;