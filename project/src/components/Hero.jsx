import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import '/src/styles.css';

const mockups = [
  {
    title: 'Baby Care',
    image: '/src/assets/iPhone 15 Pro.png',
    alt: 'Baby Care Screen'
  },
  {
    title: 'Library',
    image: '/src/assets/iPhone 13 Pro.png',
    alt: 'Library Screen'
  },
  {
    title: 'AI Chat',
    image: '/src/assets/Group 1.png',
    alt: 'AI Chat Screen'
  }
];

export default function Hero() {
  return (
    <section id="home" className="min-h-screen pt-16 bg-gradient-to-b from-primary-50 to-white background-page">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Supporting Your Journey Through Motherhood
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              A postpartum wellness app designed to support moms in their recovery journey, mental health, and newborn care.
            </p>
            
            {/* <motion.button
              className="bg-primary-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-primary-700 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Download App
            </motion.button> */}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            <Swiper
              modules={[Autoplay, Pagination]}
              spaceBetween={30}
              centeredSlides={true}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
              }}
              className="w-full max-w-md mx-auto"
            >
              
              {mockups.map((mockup) => (
                <SwiperSlide key={mockup.title}>
                  <img
                    src={mockup.image}
                    alt={mockup.alt}
                    className="w-full h-auto rounded-lg shadow-xl fixed-size-image"
                  />
                </SwiperSlide>
              ))}

            </Swiper>
          </motion.div>
        </div>
        <div className="bg-black text-white p-8 rounded-2xl flex flex-col items-center">
      <h2 className="text-2xl font-bold mb-2">Your Wellness Matters...Start Today!</h2>
      <p className="text-center mb-6">
        Download MOMMYCare+ and get expert-backed support for your recovery, mental well-being, and baby care - all in one place!
      </p>
      <button className="bg-white text-black font-semibold py-2 px-6 rounded-full shadow-md hover:bg-gray-200 transition">
        Download App
      </button>
    </div>
      </div>
    </section>
  );
}