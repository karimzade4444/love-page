import { motion } from "framer-motion";

export default function ShootingStars() {
  const stars = [];

  for (let i = 0; i < 8; i++) {
    stars.push(
      <motion.div
        key={i}
        className="shooting-star"
        initial={{
          x: Math.random() * window.innerWidth,
          y: -200,
          opacity: 0,
        }}
        animate={{
          x: Math.random() * window.innerWidth - 500,
          y: window.innerHeight + 300,
          opacity: [0, 1, 1, 0],
        }}
        transition={{
          duration: Math.random() * 2 + 2,
          repeat: Infinity,
          delay: Math.random() * 6,
          ease: "linear",
        }}
      />,
    );
  }

  return stars;
}
