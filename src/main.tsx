import Body from "./components/Body/Body";
import Create from "./components/Dialog/Create/Create";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";

import * as React from "react";
import * as ReactDOM from "react-dom";

import "./favicon.ico";

interface IState {
  title: string;
  panels: any;
  footers: string[];
  open: boolean;
  pageIndex: number;
}

class App extends React.Component<object, IState> {
  constructor(props: any) {
    super(props);

    this.state = {
      footers: ["First", "Second", "Third"],
      open: false,
      pageIndex: 0,
      panels: {
        0: [],
        1: [],
        2: [],
      },
      title: "Example",
    };

    this.onChangeStateModal = this.onChangeStateModal.bind(this);
    this.onSubscribe = this.onSubscribe.bind(this);
    this.onChangeTab = this.onChangeTab.bind(this);
  }

  public render() {
    const { title, panels, footers, open, pageIndex } = this.state;

    return (
      <React.Fragment>
        <Header
          title={title}
          onChangeStateModal={this.onChangeStateModal}
        />
        <Body panels={panels[pageIndex]} />
        <Footer footers={footers} pageIndex={pageIndex} onChangeTab={this.onChangeTab}/>
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
    const { panels, pageIndex } = this.state;

    this.setState({
      open: !open,
      panels: {
        ...panels,
        [pageIndex]: [...panels[pageIndex], email],
      },
    });
  }

  public onChangeTab(event: React.ChangeEvent<HTMLInputElement>, index: number) {
    this.setState({
      pageIndex: index,
    });
  }
}

ReactDOM.render(
  <App />, document.getElementById("app"),
);
