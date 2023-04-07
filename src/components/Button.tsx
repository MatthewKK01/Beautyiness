import React from "react";
import "./Button.css";
function Button(props: any) {
  return <button className="block m-auto mt-8">{props.text}</button>;
}

export default Button;
