import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaHeart } from "react-icons/fa";
import Confetti from "react-confetti";
import Hearts from "./Hearts";
import TypeWritter from "./TypeWritter";

import LoveLetter from "./LoveLetter";
import Petals from "./Petals";
import Nebula from "./Nebula";
import LoadingScreen from "./LoadingScreen";
import FinalExplosion from "./FinalExplosion";

export default function App() {
  const [step, setStep] = useState(0);
  const [showConfetti, setShowConfetti] = useState(false);

  const next = () => {
    if (step === 3) {
      setShowConfetti(true);
    }
    setStep(step + 1);
  };
const [loaded, setLoaded] = useState(false);
if (!loaded) {
  return <LoadingScreen finish={() => setLoaded(true)} />;
}

  return (
    <div className="page">
      <div className="moon"></div>

      {showConfetti && <Confetti recycle={false} numberOfPieces={150} />}

      {step < 5 && <Nebula />}

      {step < 5 && <Stars />}

      {step < 5 && <Hearts />}

      {step < 5 && <Petals />}

      <AnimatePresence mode="wait">
        {step === 0 && (
          <motion.div
            key={0}
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            className="card"
          >
            <FaHeart className="heart" />

            <TypeWritter text="Привет, моя самая любимая ❤️" />

            <p className="loveText">
              Ма хела и сюрпризи майдара барой т таёр кадм Чони Ма☺️...
              <br />
              <br />
              Надеюсь, махкулт мешава Занакчон 😊
            </p>

            <button onClick={next}>Ку бин 💕</button>
          </motion.div>
        )}

        {step === 1 && (
          <Question
            title="Как настроение?"
            yes="😊 Соз"
            no="😔 Безеб"
            yesClick={next}
            message="Ма хрсанд Занакчон ❤️"
          />
        )}

        {step === 2 && <LoveQuestion next={next} />}

        {step === 3 && <LoveQuestion2 next={next} />}
        {step === 4 && <LoveLetter onNext={next} />}
        {step === 5 && <FinalExplosion />}
      </AnimatePresence>
    </div>
  );
}

function Question({ title, yes, no, yesClick, message }) {
  const [text, setText] = useState("");

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="card"
    >
      <h1>{title}</h1>

      <div className="buttons">
        <button
          onClick={() => {
            setText(message);
            setTimeout(yesClick, 1200);
          }}
        >
          {yes}
        </button>

        <button
          onClick={() => {
            setText("Тогда Ма настрениёта соз мекнм Чони ширин ак Соза бчк  ❤️");
          }}
        >
          {no}
        </button>
      </div>

      <p>{text}</p>
    </motion.div>
  );
}

function LoveQuestion({ next }) {
  const texts = [
    "Неее 😜",
    "Намекапии😂",
    "Хора бчк Занакчон ❤️",
    "Ай-ай-ай 😆",
    "Дуст медори 🥰",
    "Хи-хи 🤭",
    "Ну давай ❤️",
    "Не сюда 😝",
    "Попробуй ещё 😅",
    "❤️❤️❤️",
  ];

  const [index, setIndex] = useState(0);

  const [pos, setPos] = useState({
    x: 0,
    y: 0,
    rotate: 0,
    scale: 1,
  });

  const move = () => {
    setIndex(Math.floor(Math.random() * texts.length));

    setPos({
      x: Math.random() * 250 - 125,
      y: Math.random() * 200 - 100,
      rotate: Math.random() * 360,
      scale: 0.8 + Math.random() * 0.8,
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="card"
    >
      <h1>Мара дуст медори Занакчон? 🥺</h1>

      <div className="buttons">
        <button onClick={next}>Конечно ❤️</button>

        <motion.button
          animate={pos}
          transition={{
            type: "spring",
            stiffness: 250,
            damping: 10,
          }}
          onMouseEnter={move}
          onClick={move}
        >
          {texts[index]}
        </motion.button>
      </div>
    </motion.div>
  );
}

function LoveQuestion2({ next }) {
  const texts = [
    "Нее 😜",
    "Не поймаешь 😂",
    "Жми Да ❤️",
    "Ай-ай-ай 😆",
    "Мерем хь 🥰",
    "Хи-хи 🤭",
    "Ну давай ❤️",
    "Не сюда 😝",
    "Попробуй ещё 😅",
    "❤️❤️❤️",
  ];

  const [index, setIndex] = useState(0);

  const [pos, setPos] = useState({
    x: 0,
    y: 0,
    rotate: 0,
    scale: 1,
  });

  const move = () => {
    setIndex(Math.floor(Math.random() * texts.length));

    setPos({
      x: Math.random() * 250 - 125,
      y: Math.random() * 200 - 100,
      rotate: Math.random() * 360,
      scale: 0.8 + Math.random() * 0.8,
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="card"
    >
      <h1>Чон мегуй мара? 🥺🌙✨</h1>

      <div className="buttons">
        <button onClick={next}>Чон ❤️</button>

        <motion.button
          animate={pos}
          transition={{
            type: "spring",
            stiffness: 250,
            damping: 10,
          }}
          onMouseEnter={move}
          onClick={move}
        >
          {texts[index]}
        </motion.button>
      </div>
    </motion.div>

  );
}

function Stars() {
  const starPositions = useMemo(() => {
    const arr = [];
    for (let i = 0; i < 60; i++) {
      arr.push({
        left: Math.random() * 100 + "%",
        top: Math.random() * 100 + "%",
        animationDelay: Math.random() * 5 + "s",
        key: i,
      });
    }
    return arr;
  }, []);

  return starPositions.map((s) => (
    <div key={s.key} className="star" style={{ left: s.left, top: s.top, animationDelay: s.animationDelay }} />
  ));
}
