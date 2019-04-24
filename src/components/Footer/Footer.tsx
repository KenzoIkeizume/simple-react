import { Paper, Tab, Tabs } from "@material-ui/core";
import * as React from "react";

interface IFooter {
  footers: string[];
  pageIndex: number;
  onChangeTab: (event: React.ChangeEvent<HTMLInputElement>, index: number) => void;
}

export default class extends React.Component<IFooter, {}> {
  constructor(props: any) {
    super(props);
  }

  public render() {
    const { pageIndex, onChangeTab } = this.props;

    const listTab = this.props.footers.map((value, index) => {
      return (
        <Tab label={value} key={index} />
      );
    });

    return (
      <Paper>
        <Tabs
          value={pageIndex}
          indicatorColor="primary"
          textColor="primary"
          centered={true}
          onChange={onChangeTab}
        >
          {listTab}
        </Tabs>
      </Paper>
    );
  }
}
