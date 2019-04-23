import Body from "./components/Body/Body";
import Create from "./components/Dialog/Create/Create";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";

import * as React from "react";
import * as ReactDOM from "react-dom";

interface IState {
  title: string;
  panels: string[];
  footers: string[];
  open: boolean;
}

class App extends React.Component<object, IState> {
  constructor(props: any) {
    super(props);

    this.state = {
      footers: ["1", "2", "3"],
      open: false,
      panels: [],
      title: "Exemple",
    };

    this.onChangeStateModal = this.onChangeStateModal.bind(this);
    this.onSubscribe = this.onSubscribe.bind(this);
  }

  public render() {
    const { title, panels, footers, open } = this.state;

    return (
      <React.Fragment>
        <Header
          title={title}
          onChangeStateModal={this.onChangeStateModal}
        />
        <Body panels={panels} />
        <Footer footers={footers} />
        <Create
          open={open}
          onChangeStateModal={this.onChangeStateModal}
          onSubscribe={this.onSubscribe}
        />
      </React.Fragment>
    );
  }

  public onChangeStateModal() {
    const { open } = this.state;

    this.setState({
      open: !open,
    });
  }

  public onSubscribe(email: string) {
    const { panels } = this.state;

    this.setState({
      open: !open,
      panels: [...panels, email],
    });
  }
}

ReactDOM.render(
  <App />, document.getElementById("app"),
);
