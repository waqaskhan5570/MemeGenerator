import React from "react";
import Header from "./Header";
import MemeGenerator from "./MemeGenerator";
import "./memeGenerator.css";

function MemeComponent(props) {
  return (
    <div>
      <Header />
      <MemeGenerator />
    </div>
  );
}

export default MemeComponent;
