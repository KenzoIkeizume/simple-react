import { Grid, Paper } from "@material-ui/core";
import * as React from "react";

interface IBody {
  panels: string[];
}

const style = {
  Paper: { padding: 20, marginTop: 10, marginBotton: 10 },
};

export default class extends React.Component<IBody, {}> {
  public render() {
    const { panels } = this.props;

    const listPaper = panels.map((value, index) => {
      return (
        <Paper style={style.Paper} key={index}>
          {value}
        </Paper>
      );
    });

    return (
      <Grid container={true}>
        <Grid item={true} xs={12}>
          {listPaper}
        </Grid>
      </Grid>
    );
  }
}
