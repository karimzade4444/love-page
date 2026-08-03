import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function LoadingScreen({ finish }) {
  const [progress, setProgress] = useState(0);
  const [text, setText] = useState("Загрузка любви... ❤️");

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((old) => {
        const value = old + Math.floor(Math.random() * 8 + 2);

        if (value >= 100) {
          clearInterval(timer);

          setText("✓ Любовь найдена ❤️");

          setTimeout(() => {
            setText("Соединение двух сердец... 💕");
          }, 1000);

          setTimeout(() => {
            finish();
          }, 2800);

          return 100;
        }

        return value;
      });
    }, 120);

    return () => clearInterval(timer);
  }, []);

  return (
    <motion.div
      className="loading"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        animate={{
          scale: [1, 1.15, 1],
        }}
        transition={{
          repeat: Infinity,

          duration: 1,
        }}
        className="loadingHeart"
      >
        ❤️
      </motion.div>

      <h2>{text}</h2>

      <div className="progress">
        <motion.div
          className="progressFill"
          animate={{
            width: progress + "%",
          }}
        />
      </div>

      <p>{progress}%</p>
    </motion.div>
  );
}
