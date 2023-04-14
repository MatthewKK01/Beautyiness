import React from "react";
import "./Button.css";

interface IProps {
  text: string;
  style?: string;
}

function Button({ text, style }: IProps) {
  return <button className="button block m-auto mt-8">{text}</button>;
}

export default Button;
