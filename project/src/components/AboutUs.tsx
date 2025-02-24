import { motion } from 'framer-motion';

export default function AboutUs() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <img
              src="/src/assets/_ (6) 1.png"
              alt="Peaceful sleeping baby"
              className="rounded-lg shadow-xl w-full h-auto object-cover fixed-size-image-aboutus"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">About Us</h2>
            <div className="space-y-4">
              <p className="text-lg text-gray-600">
                MOMMYcare+ was created by a team of healthcare professionals and tech experts who understand the challenges of postpartum life. Our mission is to support new mothers through their journey into motherhood.
              </p>
              <p className="text-lg text-gray-600">
                We believe every mother deserves access to quality postpartum care and support. Our app combines cutting-edge technology with expert knowledge to provide comprehensive postpartum care solutions.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}