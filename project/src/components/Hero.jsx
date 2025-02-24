import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import '/src/styles.css';

const mockups = [
  {
    title: 'homeImage',
    image: '/src/assets/homepage2.png',
    alt: 'Screen'
  },
  {
    title: 'homeImage',
    image: '/src/assets/libary.png',
    alt: 'Screen'
  },
  {
    title: 'homeImage',
    image: '/src/assets/homepage1.png',
    alt: 'Screen'
  }
];

export default function Hero() {
  return (
    <section id="home" className="min-h-screen pt-16 bg-gradient-to-b from-primary-50 to-white background-page">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div className="motion.div-devtag"
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

          </motion.div >

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
              className="w-full max-w-md mx-auto home-pic-section"
            >
              
              {mockups.map((mockup) => (
                <SwiperSlide key={mockup.title}>
                  <img
                    src={mockup.image}
                    alt={mockup.alt}
                    className="w-full h-auto rounded-lg shadow-xl fixed-size-image-home"
                  />
                </SwiperSlide>
              ))}

            </Swiper>
          </motion.div>
          
        </div>
      </div>
      
    </section>
  );
}