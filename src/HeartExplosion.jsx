import { motion } from "framer-motion";
import { useMemo } from "react";

export default function HeartExplosion() {
  const hearts = useMemo(() => {
    return Array.from({ length: 15 }, () => {
      const angle = Math.random() * Math.PI * 2;
      const distance = 180 + Math.random() * 180;

      return {
        x: Math.cos(angle) * distance,
        y: Math.sin(angle) * distance,
      };
    });
  }, []);

  return (
    <>
      {hearts.map((heart, i) => (
        <motion.div
          key={i}
          className="explode-heart"
          initial={{
            x: 0,
            y: 0,
            opacity: 1,
            scale: 0.7,
          }}
          animate={{
            x: heart.x,
            y: heart.y,
            opacity: 0,
            scale: 1,
          }}
          transition={{
            duration: 1.2,
            ease: "easeOut",
          }}
        >
          ❤️
        </motion.div>
      ))}
    </>
  );
}
