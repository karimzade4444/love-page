import { motion } from "framer-motion";
import { useMemo } from "react";

export default function HeartExplosion() {
  const hearts = useMemo(() => {
    return Array.from({ length: 25 }).map(() => {
      const angle = Math.random() * Math.PI * 2;
      const distance = 150 + Math.random() * 250;

      return {
        x: Math.cos(angle) * distance,

        y: Math.sin(angle) * distance,

        scale: Math.random() * 0.8 + 0.5,

        duration: 1.5 + Math.random() * 0.5,
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
            scale: 0,
            opacity: 1,
          }}
          animate={{
            x: heart.x,

            y: heart.y,

            scale: heart.scale,

            opacity: 0,
          }}
          transition={{
            duration: heart.duration,

            ease: "easeOut",
          }}
        >
          ❤️
        </motion.div>
      ))}
    </>
  );
}
