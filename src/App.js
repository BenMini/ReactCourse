import React from "react";
import { render } from "react-dom";
import Pet from "./Pet";

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Adopt Me!"),
    React.createElement(Pet, {
      name: "Zoe",
      animal: "Dog",
      breed: "Aussie",
    }),
    React.createElement(Pet, {
      name: "Rye",
      animal: "Dog",
      breed: "Mixed",
    }),
    React.createElement(Pet, {
      name: "Lynx",
      animal: "Cat",
      breed: "Manx",
    }),
  ]);
};

render(React.createElement(App), document.getElementById("root"));
