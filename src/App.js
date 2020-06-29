const Pet = ({ name, animal, breed }) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, name),
    React.createElement("h2", {}, animal),
    React.createElement("h2", {}, breed),
  ]);
};

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

ReactDOM.render(React.createElement(App), document.getElementById("root"));
