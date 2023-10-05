import React from "react";
import "./Display.scss";

export default function Display(props) {
  return (
    <div className="display">
      <img src={props.meme.memeImg.url} alt="" className="memeImg" />

      {props.meme.memeImg.url && (
        <h1 className="topDisplay">{props.meme.topText}</h1>
      )}
      {props.meme.memeImg.url && (
        <h1 className="bottomDisplay">{props.meme.bottomText}</h1>
      )}
    </div>
  );
}
