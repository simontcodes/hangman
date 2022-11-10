import React from "react";
import "./HangmanDrawing.scss";

type Props = { numberOfGuesses: number };

const HEAD = <div className="head" />;
const BODY = <div className="body" />;
const RIGHT_ARM = <div className="right-arm" />;
const LEFT_ARM = <div className="left-arm" />;
const RIGHT_LEG = <div className="right-leg" />;
const LEFT_LEG = <div className="left-leg" />;

const BODY_PARTS = [HEAD, BODY, RIGHT_ARM, RIGHT_LEG, LEFT_ARM, LEFT_LEG];

export default function HangmanDrawing({ numberOfGuesses }: Props) {
  return (
    <div className="hangman">
      {BODY_PARTS.slice(0, numberOfGuesses)}
      <div className="hangman__noose" />
      <div className="hangman__tree-top" />
      <div className="hangman__tree" />
      <div className="hangman__base" />
    </div>
  );
}
