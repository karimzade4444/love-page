import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import TypeWritter from "./TypeWritter";
import HeartExplosion from "./HeartExplosion";

export default function FinalExplosion() {
  const [showHeart, setShowHeart] = useState(true);
  const [showExplosion, setShowExplosion] = useState(false);
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    const heartTimer = setTimeout(() => {
      setShowHeart(false);
      setShowExplosion(true);
    }, 2500);

    const textTimer = setTimeout(() => {
      setShowText(true);
    }, 4000);

    return () => {
      clearTimeout(heartTimer);
      clearTimeout(textTimer);
    };
  }, []);

  return (
    <div className="finalScene">
      {showHeart && (
        <motion.div
          className="hugeHeart"
          initial={{
            scale: 0,
            opacity: 0,
          }}
          animate={{
            scale: [0, 1.3, 1],
            opacity: 1,
          }}
          transition={{
            duration: 1,
          }}
        >
          ❤️
        </motion.div>
      )}

      {showExplosion && <HeartExplosion />}

      {showText && (
        <motion.div
          className="loveBox"
          initial={{
            opacity: 0,
            y: 50,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 1,
          }}
        >
          <TypeWritter
            speed={40}
            text="Ма мехом тда гапой важнима бугум Чон... ❤️"
          />

          <p>Рахмат барой ки хар руз хасти.</p>

          <p>Рахмат барой хандой хшрут Занакчон.</p>

          <p>Рахмат барой дустдорит.</p>

          <p>Рахмат Занакчон ки да хаёти ма пайдо шиди.</p>

          <motion.h1
            initial={{
              scale: 0,
              opacity: 0,
            }}
            animate={{
              scale: 1,
              opacity: 1,
            }}
            transition={{
              delay: 3,
            }}
          >
            ❤️ Ма тра ганда сахт дуст Медор Хаёти ма ❤️
          </motion.h1>
        </motion.div>
      )}
    </div>
  );
}
