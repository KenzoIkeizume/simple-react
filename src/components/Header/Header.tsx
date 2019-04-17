import { AppBar, Fab, Toolbar, Typography } from "@material-ui/core";
import * as React from "react";

interface IHeader {
  title: string;
  onChangeStateModal: () => void;
}

const ADDICON = "+";

export default class extends React.Component<IHeader, {}> {
  public render() {
    const { title, onChangeStateModal } = this.props;

    return (
      <AppBar position="static">
        <Toolbar>
          <Typography variant="headline" color="inherit" style={{ flex: 1 }}>
            {title}
          </Typography>
          <Fab aria-label="Add" onClick={onChangeStateModal}>
            {ADDICON}
          </Fab>
        </Toolbar>
      </AppBar>
    );
  }
}
