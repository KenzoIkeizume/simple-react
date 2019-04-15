import { Paper, Tab, Tabs } from "@material-ui/core";
import * as React from "react";

export interface IFooter { footers: string[]; }

export default class extends React.Component<IFooter, {}> {
  render() {
    const listTab = this.props.footers.map((value, index) => {
      return (
        <Tab label={value} key={index} />
      );
    });

    return (
      <Paper>
        <Tabs
          value={0}
          indicatorColor="primary"
          textColor="primary"
          centered={true}
        >
          {listTab}
        </Tabs>
      </Paper>
    );
  }
}
