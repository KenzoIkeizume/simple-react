import Body from "./components/Body/Body";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";

import * as React from "react";
import * as ReactDOM from "react-dom";

interface IState {
  title: string,
  panels: Array<string>,
  footers: Array<string>
}

class App extends React.Component<object, IState> {
  constructor(props: any) {
    super(props);

    this.state = {
      title: 'Exemple',
      panels: [],
      footers: []
    };
  }

  render() {
    const { title, panels, footers } = this.state;

    return (
      <React.Fragment>
        <Header title={title} />
        <Body panels={panels} />
        <Footer footers={footers} />
      </React.Fragment>
    );
  }
};

ReactDOM.render(
  <App />, document.getElementById("app"),
);
