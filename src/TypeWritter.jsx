import { useEffect, useState } from "react";

export default function TypeWritter({ text, speed = 55 }) {
  const [display, setDisplay] = useState("");

  useEffect(() => {
    let i = 0;

    setDisplay("");

    const interval = setInterval(() => {
      if (i < text.length) {
        setDisplay((prev) => prev + text.charAt(i));

        i++;
      } else {
        clearInterval(interval);
      }
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed]);

  return (
    <h2 className="typing">
      {display}

      <span className="cursor">|</span>
    </h2>
  );
}
