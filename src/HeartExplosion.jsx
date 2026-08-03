import { motion } from "framer-motion";

export default function HeartExplosion() {
  const hearts = Array.from({ length: 30 });

  return (
    <>
      {hearts.map((_, i) => {
        const angle = Math.random() * Math.PI * 2;
        const distance = 200 + Math.random() * 500;

        return (
          <motion.div
            key={i}
            className="explode-heart"
            initial={{
              x: 0,
              y: 0,
              scale: 0,
              opacity: 1,
            }}
            animate={{
              x: Math.cos(angle) * distance,

              y: Math.sin(angle) * distance,

              scale: Math.random() * 1.5 + 0.5,

              opacity: 0,
            }}
            transition={{
              duration: 2 + Math.random(),

              ease: "easeOut",
            }}
          >
            ❤️
          </motion.div>
        );
      })}
    </>
  );
}
