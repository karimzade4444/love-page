import { motion } from "framer-motion";

export default function Petals() {
  const petals = [];

  for (let i = 0; i < 10; i++) {
    petals.push(
      <motion.div
        key={i}
        className="petal"
        initial={{
          x: Math.random() * window.innerWidth,
          y: -200,
          rotate: 0,
          opacity: 0.9,
        }}
        animate={{
          y: window.innerHeight + 200,
          rotate: 720,
          x: [
            Math.random() * window.innerWidth,
            Math.random() * window.innerWidth,
          ],
        }}
        transition={{
          duration: Math.random() * 8 + 8,
          repeat: Infinity,
          ease: "linear",
          delay: Math.random() * 8,
        }}
      >
        🌸
      </motion.div>,
    );
  }

  return petals;
}
