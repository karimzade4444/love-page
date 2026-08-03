import { motion } from "framer-motion";

export default function Hearts() {
  const hearts = [];

  for (let i = 0; i < 10; i++) {
    hearts.push(
      <motion.div
        key={i}
        className="floating-heart"
        initial={{
          x: Math.random() * window.innerWidth,
          y: window.innerHeight + 100,
          scale: Math.random() * 0.8 + 0.5,
          rotate: 0,
          opacity: 0.6,
        }}
        animate={{
          y: -200,
          rotate: 360,
          opacity: [0.6, 1, 0.6],
        }}
        transition={{
          duration: Math.random() * 8 + 8,
          repeat: Infinity,
          ease: "linear",
          delay: Math.random() * 8,
        }}
      >
        ❤️
      </motion.div>,
    );
  }

  return hearts;
}
