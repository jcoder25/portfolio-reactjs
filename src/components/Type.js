import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter 
      options={{
        strings: [
          "Android Developer",
          "MERN Stack Developer",
          "Java Developer",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 80,
      }}
    />
  );
}

export default Type;