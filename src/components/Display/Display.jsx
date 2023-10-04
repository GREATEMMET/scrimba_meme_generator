import React from "react";
import "./Display.scss";

export default function Display(props) {
  return (
    <div className="display">
      <img src={props.meme.url} alt="" className="memeImg" />

      {props.meme.url && <h1 className="topDisplay">{props.text.topText}</h1>}
      {props.meme.url && (
        <h1 className="bottomDisplay">{props.text.bottomText}</h1>
      )}
    </div>
  );
}
