import React from "react";
import "./HangmanWord.scss";

type Props = {
  guessedLetters: string[];
  wordToGuess: string;
  reveal?: boolean;
};

export default function HangmanWord({
  guessedLetters,
  wordToGuess,
  reveal = false,
}: Props) {
  return (
    <div className="word">
      {wordToGuess.split("").map((letter, index) => (
        <span key={index} className="word__letter">
          <span
            className={`${
              !guessedLetters.includes(letter) ? "word__letter--hidden" : ""
            } ${
              !guessedLetters.includes(letter) && reveal
                ? "word__letter--loser"
                : ""
            }`}
          >
            {letter}
          </span>
        </span>
      ))}
    </div>
  );
}
