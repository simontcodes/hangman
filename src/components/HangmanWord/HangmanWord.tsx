import React from "react";
import "./HangmanWord.scss";

type Props = {};

export default function HangmanWord({}: Props) {
  const word = "test";
  const guessedLetters = ["t"];
  return (
    <div className="word">
      {word.split("").map((letter, index) => (
        <span key={index} className="word__letter">
          <span
            className={
              !guessedLetters.includes(letter) ? "word__letter--hidden" : ""
            }
          >
            {letter}
          </span>
        </span>
      ))}
    </div>
  );
}
