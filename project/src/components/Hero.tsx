import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

interface Mockup {
  title: string;
  image: string;
  alt: string;
}

const mockups: Mockup[] = [
  {
    title: 'homeImage1',
    image: '/src/assets/homepage2.png',
    alt: 'MOMMYcare+ Home Screen'
  },
  {
    title: 'homeImage2',
    image: '/src/assets/libary.png',
    alt: 'MOMMYcare+ Library Screen'
  },
  {
    title: 'homeImage3',
    image: '/src/assets/homepage1.png',
    alt: 'MOMMYcare+ Features Screen'
  }
];

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen pt-16 bg-gradient-to-b from-primary-50 to-white background-page">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="text-white"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Supporting Your Journey Through Motherhood
            </h1>
            <p className="text-lg mb-8">
              A postpartum wellness app designed to support moms in their recovery journey, mental health, and newborn care.
            </p>
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