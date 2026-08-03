import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const messages = [
  "🌙 Имруз...",
  "✨ Ма мехостм тда я падаркачай майда кнм Занакчон...",
  "❤️ Но словами это сделать сложно...",
  "🥺 Поэтому я сделал этот маленький сюрприз...",
];

export default function IntroStory({ onFinish }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index >= messages.length) {
      const timer = setTimeout(onFinish, 1200);
      return () => clearTimeout(timer);
    }

    const timer = setTimeout(() => {
      setIndex((prev) => prev + 1);
    }, 2600);

    return () => clearTimeout(timer);
  }, [index, onFinish]);

  return (
    <div className="story-screen">
      <AnimatePresence mode="wait">
        {index < messages.length && (
          <motion.h1
            key={index}
            className="story-text"
            initial={{ opacity: 0, y: 40, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -40 }}
            transition={{ duration: 0.8 }}
          >
            {messages[index]}
          </motion.h1>
        )}
      </AnimatePresence>
    </div>
  );
}
