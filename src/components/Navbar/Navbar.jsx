import React from "react";
import "./Navbar.scss";

import navLogo from '../../assets/images/toll-face.png'

export default function Navbar() {
  return (
    <div className="navbar">
      <img src={navLogo} alt="" className="navLogo" />
      <h1 className="navTitle">Meme Generator</h1>
      <h3 className="navProject">React Course - Project 3</h3>
    </div>
  );
}
