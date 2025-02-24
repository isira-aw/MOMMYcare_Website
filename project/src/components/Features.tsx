import { motion } from 'framer-motion';
import { ChatBubbleLeftRightIcon, HeartIcon, BookOpenIcon, ClipboardDocumentCheckIcon, SparklesIcon, ClipboardDocumentListIcon } from '@heroicons/react/24/outline';
import type { ComponentType } from 'react';

interface Feature {
  icon: ComponentType<{ className?: string }>;
  title: string;
  description: string;
  imageSrc: string;
}

const features: Feature[] = [
  {
    icon: ChatBubbleLeftRightIcon,
    title: 'AI Chat Support',
    description: 'Get personalized, 24/7 support for all your postpartum care needs. Our AI-driven chat assistant is always available to answer your questions and offer advice.',
    imageSrc: '/src/assets/aibot.png'
  },
  {
    icon: HeartIcon,
    title: 'EPDS Questionnaire',
    description: 'Easily assess your emotional well-being with the Edinburgh Postnatal Depression Scale (EPDS) questionnaire. Get insights into your mental health and access resources for support.',
    imageSrc: '/src/assets/ebps.png'
  },
  {
    icon: BookOpenIcon,
    title: 'Content Library',
    description: 'Explore a rich collection of articles, guides, and expert advice on postpartum care, newborn care, breastfeeding, and overall well-being.',
    imageSrc: '/src/assets/libary.png'
  },
  {
    icon: ClipboardDocumentCheckIcon,
    title: 'Vaccination Records',
    description: 'Keep track of your baby\'s vaccination schedule with an easy-to-use digital record. Stay informed and ensure timely immunizations.',
    imageSrc: '/src/assets/vacsination.png'
  },
  {
    icon: SparklesIcon,
    title: 'Self-Care Tips',
    description: 'Discover daily self-care tips tailored for new mothers, including relaxation techniques, mindfulness exercises, and wellness advice to support your postpartum journey.',
    imageSrc: '/src/assets/tips.png'
  },
  {
    icon: ClipboardDocumentListIcon,
    title: 'To-Do List',
    description: 'Organize your postpartum and baby care tasks effortlessly with a built-in to-do list. Stay on top of important activities, from doctor\'s appointments to self-care routines.',
    imageSrc: '/src/assets/todo.png'
  }
];

export default function Features() {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="bg-black text-white p-8 rounded-2xl flex flex-col items-center features-padding">
        <h2 className="text-2xl font-bold mb-2">Your Wellness Matters...Start Today!</h2>
        <p className="text-center mb-6">
          Download MOMMYCare+ and get expert-backed support for your recovery, mental well-being, and baby care - all in one place!
        </p>
        
        <a href="#" className="bg-black text-white flex items-center justify-center px-4 py-2 rounded-md shadow-md hover:bg-gray-800 transition border-2 border-white">
          <img src="/src/assets/googleplay.png" alt="Google Play" className="w-6 h-6 mr-2" />
          <div className="flex flex-col items-start">
            <span className="text-xs">GET IT ON</span>
            <span className="text-lg font-semibold">Google Play</span>
          </div>
        </a>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-3xl font-bold text-gray-900 mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Everything You Need
          </motion.h2>
          <motion.p 
            className="text-lg text-gray-600"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Comprehensive tools designed for your postpartum journey
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="relative mb-4">
                <img 
                  src={feature.imageSrc} 
                  alt={feature.title} 
                  className="w-full h-48 object-cover rounded-lg fixed-size-image-f" 
                />
                <feature.icon className="absolute top-4 right-4 h-12 w-12 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}