import { motion } from "framer-motion";

export const starVariants = {
  initial: { opacity: 0, scale: 0.5 },
  animate: (i) => ({
    opacity: [0, 1, 0],
    scale: [0.5, 1, 0.5],
    x: [0, 100 * (i % 2 === 0 ? 1 : -1)],
    y: [0, 100],
    transition: {
      duration: 5,
      repeat: Infinity,
      repeatDelay: Math.random() * 2,
    },
  }),
};

export const generateStars = () => {
  const stars = [];
  for (let i = 0; i < 50; i++) {
    stars.push(
      <motion.div
        key={`star-${i}`}
        className="absolute w-1 h-1 bg-white rounded-full"
        custom={i}
        variants={starVariants}
        initial="initial"
        animate="animate"
        style={{
          top: `${Math.random() * 100}%`,
          left: `${Math.random() * 100}%`,
        }}
      />
    );
  }
  return stars;
};

export const meteorVariants = {
  initial: { opacity: 0, x: -200, y: -200 },
  animate: (i) => ({
    opacity: [0, 1, 0],
    x: [0, 1000],
    y: [0, 1000],
    transition: {
      duration: 1.5,
      delay: Math.random() * 5,
      repeat: Infinity,
      repeatDelay: Math.random() * 3,
    },
  }),
};

export const generateMeteors = () => {
  const meteors = [];
  for (let i = 0; i < 10; i++) {
    meteors.push(
      <motion.div
        key={`meteor-${i}`}
        className="absolute w-1 h-1 bg-white rounded-full"
        custom={i}
        variants={meteorVariants}
        initial="initial"
        animate="animate"
        style={{
          top: `${Math.random() * 100}%`,
          left: `${Math.random() * 100}%`,
          width: '2px',
          height: '10px',
          filter: 'blur(2px)',
          background: 'linear-gradient(45deg, white, transparent)',
        }}
      />
    );
  }
  return meteors;
};