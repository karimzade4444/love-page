import { motion } from "framer-motion";
import TypeWritter from "./TypeWritter";


export default function LoveLetter({ onNext }) {
  return (
    <motion.div
      className="card"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="bigHeart">❤️</div>

      <TypeWritter text="Прежде чем продолжить..." speed={50} />

      <p className="loveMessage">Ма просто мехохм ки т бдони...</p>

      <p className="loveMessage">Ты — самый дорогой человек в моей жизни.</p>

      <p className="loveMessage">
        Спасибо за твою улыбку, за твою доброту, за то, что ты есть ❤️
      </p>

      <button className="continueBtn" onClick={onNext}>
        Давом те Занакчон 💕
      </button>
    </motion.div>
  );
}
