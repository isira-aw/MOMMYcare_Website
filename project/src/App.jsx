import { useState } from 'react';
import FlashScreen from './components/FlashScreen';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';

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
    </div>
  );
}

export default App;