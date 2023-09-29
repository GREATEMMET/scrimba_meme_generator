import React from "react";
import "./Generator.scss";
import Display from "../Display/Display";

import memesData from "../../data/memesData";

export default function Generator() {
  const memes = memesData.data.memes;

  const [meme, setMeme] = React.useState("");

  function generateImg() {
    const randomNum = Math.floor(Math.random() * memes.length);
    setMeme(memes[randomNum]);
  }

  return (
    <div className="generator">
      <div className="inputField">
        <input type="text" placeholder="Enter top text" className="topText" />
        <input
          type="text"
          placeholder="Enter bottom text"
          className="bottomText"
        />
      </div>
      
      <p className="generateBtn" onClick={generateImg}>
        Get a new meme image 🖼
      </p>

      <Display meme={meme} />
    </div>
  );
}
