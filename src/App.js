import React from "react";
import { render } from "react-dom";
import Pet from "./Pet";

const App = () => {
  return (
    <div>
      <h1 id="something-important">Adopt Me!</h1>
      <Pet name="Zoe" animal="Dog" breed="Aussie" />
      <Pet name="Rye" animal="Dog" breed="Mixed" />
      <Pet name="Lynx" animal="Cat" breed="Manx" />
    </div>
  );
};

render(<App />, document.getElementById("root"));
