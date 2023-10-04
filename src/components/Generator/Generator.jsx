import React from "react";
import "./Generator.scss";
import Display from "../Display/Display";

import memesData from "../../data/memesData";

export default function Generator() {
  const memes = memesData.data.memes;

  const [meme, setMeme] = React.useState("");
  const [text, setText] = React.useState({
    topText: "",
    bottomText: "",
  });

  function generateImg() {
    const randomNum = Math.floor(Math.random() * memes.length);
    setMeme(memes[randomNum]);
  }

  function handleChange(event) {
    const { name, value } = event.target;
    setText((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  }

  return (
    <div className="generator">
      <div className="inputField">

        <input
          type="text"
          placeholder="Enter top text"
          className="topText"
          onChange={handleChange}
          value={text.topText}
          name="topText"
        />

        <input
          type="text"
          placeholder="Enter bottom text"
          className="bottomText"
          onChange={handleChange}
          value={text.bottomText}
          name="bottomText"
        />

      </div>

      <p className="generateBtn" onClick={generateImg}>
        Get a new meme image 🖼
      </p>

      <Display meme={meme} text={text} />
      
    </div>
  );
}
