import React from "react";
import "./HangmanDrawing.scss";

type Props = {};

export default function HangmanDrawing({}: Props) {
  return (
    <div className="hangman">
      <div className="hangman__tree-top" />
      <div className="hangman__tree-top" />
      <div className="hangman__tree" />
      <div className="hangman__base" />
    </div>
  );
}
