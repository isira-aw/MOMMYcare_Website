import { motion } from 'framer-motion';
import { EnvelopeIcon, PhoneIcon, MapPinIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';
import axios from 'axios';
import '/src/styles.css';

export default function ContactUs() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [password, setPassword] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSendMessage = async () => {
    if (!email || !message || !password) {
      alert('Please fill in all fields!');
      return;
    }

    // Open confirmation modal
    setIsModalOpen(true);
  };

  const confirmSend = async () => {
    try {
      const response = await axios.post('http://127.0.0.1:8000/send_email/', {
        name,
        email,
        message,
        password,
      });
      alert('Message sent successfully!');
    } catch (error) {
      alert('There was an error sending the message.');
    } finally {
      setIsModalOpen(false);
    }
  };

  return (
    <section id="contact" className="relative py-20 overflow-hidden">
      {/* Background with blur effect */}
      <div
        className="absolute inset-0 bg-[url('/src/assets/pexels-polina.jpg')] bg-cover bg-center "
        style={{ filter: 'blur(0.2px)' }}
      />
      <div className="absolute inset-0 bg-primary-100/90" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Contact Us</h2>
          <p className="text-lg text-gray-700">
            We're here to help and answer any questions you might have
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="flex items-center space-x-4">
              <EnvelopeIcon className="h-6 w-6 text-primary-600" />
              <span className="text-gray-700">mommycare@gmail.com</span>
            </div>
            <div className="flex items-center space-x-4">
              <PhoneIcon className="h-6 w-6 text-primary-600" />
              <span className="text-gray-700">+94 32 146 7798</span>
            </div>
            <div className="flex items-center space-x-4">
              <MapPinIcon className="h-6 w-6 text-primary-600" />
              <span className="text-gray-700">Wadduwa, Sri Lanka</span>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div>
              <input
                type="text"
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-3 rounded-lg bg-white/80 border border-primary-200 focus:outline-none focus:ring-2 focus:ring-primary-500"
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="Your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 rounded-lg bg-white/80 border border-primary-200 focus:outline-none focus:ring-2 focus:ring-primary-500"
              />
            </div>
            <div>
              <textarea
                placeholder="Your Message"
                rows="4"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full px-4 py-3 rounded-lg bg-white/80 border border-primary-200 focus:outline-none focus:ring-2 focus:ring-primary-500"
              />
            </div>
            <div>
              <input
                type="password"
                placeholder="Your Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 rounded-lg bg-white/80 border border-primary-200 focus:outline-none focus:ring-2 focus:ring-primary-500"
              />
            </div>
            <button
              onClick={handleSendMessage}
              className="w-full bg-primary-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-primary-700 transition-colors"
            >
              SEND MESSAGE
            </button>
          </motion.div>
        </div>

        {/* Confirmation Modal */}
        {isModalOpen && (
          <div className="fixed inset-0 flex items-center justify-center bg-black/50">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-4">Confirm Message</h3>
              <p>Are you sure you want to send this message?</p>
              <div className="mt-4 flex space-x-4">
                <button
                  onClick={confirmSend}
                  className="bg-primary-600 text-white py-2 px-4 rounded-lg"
                >
                  Yes
                </button>
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="bg-gray-400 text-white py-2 px-4 rounded-lg"
                >
                  No
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}


ContactForm.js

