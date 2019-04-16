import { AppBar, Fab, Toolbar, Typography } from "@material-ui/core";
import * as React from "react";

export interface IHeader { title: string; }

const ADDICON = '+';

export default class extends React.Component<IHeader, {}> {
  render() {
    return (
      <AppBar position="static">
        <Toolbar>
          <Typography variant="headline" color="inherit" style={{ flex: 1 }}>
            {this.props.title}
          </Typography>
          <Fab aria-label="Add">
            {ADDICON}
          </Fab>
        </Toolbar>
      </AppBar>
    );
  }
}
