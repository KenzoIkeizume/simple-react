import { AppBar, Toolbar, Typography } from "@material-ui/core";
import * as React from "react";

export interface IHeader { title: string; }

export default class extends React.Component<IHeader, {}> {
  render() {
      return (
        <AppBar position="static">
          <Toolbar>
            <Typography variant="headline" color="inherit">
              {this.props.title}
            </Typography>
          </Toolbar>
        </AppBar>
      );
  }
}
