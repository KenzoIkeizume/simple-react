import Body from "./components/Body/Body";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";

import * as React from "react";
import * as ReactDOM from "react-dom";

const App = () => {
  return (
    <React.Fragment>
      <Header title="Exemple" />
      <Body panels={["Panel", "Panel", "Panel", "Panel", "Panel"]} />
      <Footer footers={["footer", "footer", "footer", "footer", "footer"]}/>
    </React.Fragment>
  );
};

ReactDOM.render(
  <App />, document.getElementById("app"),
);
