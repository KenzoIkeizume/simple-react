
import * as React from "react";
import * as ReactDOM from "react-dom";

import { Exemple } from "./components/Exemple/Exemple";

const App = () => {
  return (
    <Exemple title="Exemple" />
  );
};

ReactDOM.render(
  <App />, document.getElementById("app"),
);
