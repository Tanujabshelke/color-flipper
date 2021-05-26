import React from "react";
import { useState } from "react/cjs/react.development";
import "./Color.css";

function Color() {
  let myColor = document.querySelector(".color");

  // console.log(myColor.nodeValue);

  const [color, setColor] = useState();

  const handleClick = () => {
    let a = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);
    let c = Math.floor(Math.random() * 255);
    // Math.floor(Math.random() * 16777215).toString(16);

    //let chgColor = `rgb(${a},${b},${c})`;

    let chgColor = `rgb(${a},${b} ,${c})`;
    //myColor.style.backgroundColor = chgColor;
    return setColor(() => (myColor.style.backgroundColor = chgColor));
    //console.log(myColor.style.backgroundColor = chgColor);
  };

  return (
    <div>
      <div className="color">
        <button className="btn" onClick={handleClick}>
          Tap to change color
        </button>
      </div>
    </div>
  );
}

export default Color;
