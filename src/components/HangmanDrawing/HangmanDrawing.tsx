import React from "react";
import "./HangmanDrawing.scss";

type Props = {};

const HEAD = <div className="head" />;
const BODY = <div className="body" />;
const RIGHT_ARM = <div className="right-arm" />;
const LEFT_ARM = <div className="left-arm" />;
const RIGHT_LEG = <div className="right-leg" />;
const LEFT_LEG = <div className="left-leg" />;

export default function HangmanDrawing({}: Props) {
  return (
    <div className="hangman">
      {HEAD}
      {BODY}
      {RIGHT_ARM}
      {LEFT_ARM}
      {RIGHT_LEG}
      {LEFT_LEG}
      <div className="hangman__noose" />
      <div className="hangman__tree-top" />
      <div className="hangman__tree" />
      <div className="hangman__base" />
    </div>
  );
}
