import React, { Component } from "react";
import {
  Page,
  Navbar,
  NavTitle,
  NavRight,
  BlockTitle,
  List,
  ListItem,
  Button,
  Toggle,
  Checkbox,
  Chip,
} from "framework7-react";

import { codeReviewList } from "../services/code-review";
class HomePage extends Component {
  constructor() {
    super();
    let { categories, list } = codeReviewList();
    list = list.map((item) => {
      item.apply = true;
      item.checked = false;
      return item;
    });
    this.state = { categories, list };
  }

  componentDidMount() {}

  changeApply = (id, status) => {
    let list = [...this.state.list];
    list = list.map((item) => {
      if (item.id === id) {
        item.apply = status;
      }
      return item;
    });
    this.setState({ list });
  };

  render() {
    let list = [];

    for (const category of this.state.categories) {
      list.push(<BlockTitle key={`${category}-title`}>{category}</BlockTitle>);
      list.push(
        <List key={`${category}-list`}>
          {this.state.list
            .filter((item) => item.category === category)
            .map((item) => {
              const className = item.apply === false ? "not-applicable" : "";
              return (
                <ListItem key={item.id} title={`${item.id}. ${item.title}`} className={className}>
                  {item.apply ? <Checkbox slot="media"></Checkbox> : <span slot="media">N/A</span>}
                  <Toggle
                    slot="after"
                    defaultChecked={item.apply}
                    onToggleChange={(status) => this.changeApply(item.id, status)}
                  ></Toggle>
                </ListItem>
              );
            })}
        </List>
      );
    }

    return (
      <Page name="home">
        <Navbar sliding={false}>
          <NavTitle>Code Review Checklist</NavTitle>
          <NavRight>
            <Button iconF7="printer" onClick={() => window.print()} id="print" className="not-print">
              Print
            </Button>
          </NavRight>
        </Navbar>

        {/* <Toolbar bottom></Toolbar> */}

        {list.map((item) => item)}
      </Page>
    );
  }
}

export default HomePage;
