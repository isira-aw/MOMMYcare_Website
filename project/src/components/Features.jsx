import { motion } from 'framer-motion';
import { ChatBubbleLeftRightIcon, HeartIcon, BookOpenIcon, ClipboardDocumentCheckIcon, SparklesIcon, ClipboardDocumentListIcon } from '@heroicons/react/24/outline';
import '/src/styles.css';

const features = [
  {
    icon: ChatBubbleLeftRightIcon,
    title: 'AI Chat Support',
    description: 'Get personalized, 24/7 support for all your postpartum care needs. Our AI-driven chat assistant is always available to answer your questions and offer advice.',
    imageSrc: '/src/assets/iPhone 15 Pro.png'
  },
  {
    icon: HeartIcon,
    title: 'Baby Care',
    description: 'Explore a range of tools and resources to ensure your newborn receives the best care possible. From feeding schedules to health tips, everything is here.',
    imageSrc: '/src/assets/iPhone 15 Pro.png'
  },
  {
    icon: BookOpenIcon,
    title: 'Content Library',
    description: 'Access expert-written articles, video tutorials, and guides on topics that matter most to you—postpartum recovery, baby care, and much more.',
    imageSrc: '/src/assets/iPhone 15 Pro.png'
  },
  {
    icon: ClipboardDocumentCheckIcon,
    title: 'Vaccination Records',
    description: 'Easily keep track of your baby\'s vaccination schedule with reminders and a clear, organized log. Stay on top of all immunizations and health checks.',
    imageSrc: '/src/assets/iPhone 15 Pro.png'
  },
  {
    icon: SparklesIcon,
    title: 'Self-Care Tips',
    description: 'Prioritize your mental and physical well-being with expert-recommended self-care routines and advice tailored to new mothers.',
    imageSrc: '/src/assets/iPhone 15 Pro.png'
  },
  {
    icon: ClipboardDocumentListIcon,
    title: 'To-Do List',
    description: 'Stay organized and on top of daily tasks with an intuitive to-do list. Manage appointments, baby care routines, and personal reminders with ease.',
    imageSrc: '/src/assets/iPhone 15 Pro.png'
  }
];

export default function Features() {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
                <img src={feature.imageSrc} alt={feature.title} className="w-full h-48 object-cover rounded-lg fixed-size-image-f" />
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
