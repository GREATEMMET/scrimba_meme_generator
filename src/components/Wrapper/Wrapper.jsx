import React from "react";

import Navbar from "../Navbar/Navbar";
import "./Wrapper.scss";
import Generator from "../Generator/Generator";
import Display from "../Display/Display";

export default function Wrapper() {
  return (
    <div className="wrapper">
      <Navbar />
      <div className="main">
        <Generator />
        <Display />
      </div>
    </div>
  );
}
