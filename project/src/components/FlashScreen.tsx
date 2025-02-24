import { motion } from 'framer-motion';

interface FlashScreenProps {
  onComplete: () => void;
}

export default function FlashScreen({ onComplete }: FlashScreenProps) {
  const text = "MOMMYcare+";

  return (
    <motion.div
      className="fixed inset-0 bg-white z-50 flex items-center justify-center"
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 1.5, delay: 2, ease: 'easeInOut' }}
      onAnimationComplete={onComplete}
    >
      <div className="flex space-x-1">
        {text.split('').map((char, index) => (
          <motion.span
            key={index}
            initial={{ rotate: -180 }}
            animate={{ rotate: 0 }}
            transition={{
              duration: 0.6,
              delay: index * 0.1,
              type: 'spring',
              stiffness: 100,
              damping: 20,
            }}
            className="text-5xl font-extrabold text-primary-600"
          >
            {char}
          </motion.span>
        ))}
      </div>
    </motion.div>
  );
}