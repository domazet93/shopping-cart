import React from "react";
import { render } from "react-dom";
import Counter from "./components/Counter/Counter";

const App = () => (
  <div>
    <Counter />
  </div>
);

render(<App />, document.getElementById("root"));
