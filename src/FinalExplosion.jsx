import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import TypeWritter from "./TypeWritter";
import Confetti from "react-confetti";
import HeartExplosion from "./HeartExplosion";

export default function FinalExplosion() {
  const [explode, setExplode] = useState(false);
  const [heartBoom, setHeartBoom] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setHeartBoom(true);
    }, 2500);

    setTimeout(() => {
      setExplode(true);
    }, 3500);
  }, []);

  return (
    <div className="finalScene">
      {explode && <Confetti recycle={true} numberOfPieces={100} />}

      <motion.div
        className="flash"
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        transition={{ duration: 1 }}
      />

      <motion.div
        className="hugeHeart"
        animate={
          heartBoom
            ? {
                scale: [1, 1.15, 1.5],
                opacity: [1, 1, 0],
              }
            : {}
        }
        transition={{
          duration: 1.2,
        }}
      >
        ❤️
      </motion.div>
      {heartBoom && <HeartExplosion />}

      {explode && (
        <div className="loveBox">
          <TypeWritter
            speed={35}
            text=" Ма мехом тда гапой важнима бугум Чон... ❤️"
          />

          <p>Рахмат барой ки хар руз хасти.</p>

          <p>Рахмат барой хандой хшрут Занакчон.</p>

          <p>Рахмат барой дустдорит.</p>

          <p>Рахмат Занакчон ки да хаёти ма пайдо шиди.</p>

          <motion.h1
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              delay: 8,

              duration: 1,
            }}
          >
            ❤️ Ма тра ганда сахт дуст Медор Хаёти ма ❤️
          </motion.h1>
        </div>
      )}
    </div>
  );
}
