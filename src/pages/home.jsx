import React from "react";
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

const HomePage = () => (
  <Page name="home">
    <Navbar sliding={false}>
      <NavTitle>Checklist</NavTitle>
    </Navbar>

    <Toolbar bottom></Toolbar>

    <BlockTitle>Checkbox Group</BlockTitle>
    <List>
      <ListItem checkbox title="Books" name="demo-checkbox" indeterminate />
      <ListItem checkbox title="Movies" name="demo-checkbox" />
      <ListItem checkbox title="Food" name="demo-checkbox" checked />
      <ListItem checkbox title="Drinks" name="demo-checkbox" />
    </List>
  </Page>
);
export default HomePage;
