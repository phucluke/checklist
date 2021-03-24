import React, { Component } from "react";
import {
  Page,
  Navbar,
  NavLeft,
  NavTitle,
  NavTitleLarge,
  NavRight,
  Link,
  Toolbar,
  Block,
  BlockTitle,
  List,
  ListItem,
  Row,
  Col,
  Button,
} from "framework7-react";

import { codeReviewList } from "../services/code-review";
class HomePage extends Component {
  constructor() {
    super();
    this.state = { list: [] };
  }

  componentDidMount() {
    let list = [];
    for (const [category, items] of Object.entries(codeReviewList())) {
      list.push(<BlockTitle key={`${category}-title`}>{category}</BlockTitle>);
      list.push(
        <List key={`${category}-list`}>
          {items.map((item, index) => (
            <ListItem key={`${category}-${index}`} checkbox title={item} name="demo-checkbox" />
          ))}
        </List>
      );
    }
    this.setState({ list });
  }

  render() {
    return (
      <Page name="home">
        <Navbar sliding={false}>
          <NavTitle>Code Review Checklist</NavTitle>
          <NavRight>
            <Button iconF7="printer" onClick={() => window.print()}></Button>
          </NavRight>
        </Navbar>

        {/* <Toolbar bottom></Toolbar> */}

        {this.state.list.map((item) => item)}
      </Page>
    );
  }
}

export default HomePage;
