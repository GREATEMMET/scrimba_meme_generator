import React from "react";
import "./Generator.scss";
import Display from "../Display/Display";

export default function Generator() {
  const [memesData, setMemesData] = React.useState([]);

  const [meme, setMeme] = React.useState({
    topText: "",
    bottomText: "",
    memeImg: "",
  });

  function generateImg() {
    const randomNum = Math.floor(Math.random() * memesData.length);
    let url = memesData[randomNum].url;

    setMeme((prevState) => ({
      ...prevState,
      memeImg: url,
    }));
  }

  function handleChange(event) {
    const { name, value } = event.target;
    setMeme((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  }

  React.useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((res) => res.json())
      .then((data) => setMemesData(data.data.memes));
  }, []);

  return (
    <div className="generator">
      <div className="inputField">
        <input
          type="text"
          placeholder="Enter top text"
          className="topText"
          onChange={handleChange}
          value={meme.topText}
          name="topText"
        />

        <input
          type="text"
          placeholder="Enter bottom text"
          className="bottomText"
          onChange={handleChange}
          value={meme.bottomText}
          name="bottomText"
        />
      </div>

      <p className="generateBtn" onClick={generateImg}>
        Get a new meme image 🖼
      </p>

      <Display meme={meme} />
    </div>
  );
}
