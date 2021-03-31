import React, { Component } from "react";
import { Page, Navbar, NavTitle, NavRight, BlockTitle, List, ListItem, Button, Toggle } from "framework7-react";

import { codeReviewList } from "../services/code-review";
import ReactToPrint, { PrintContextConsumer } from "react-to-print";

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
                  {item.apply ? <input type="checkbox" slot="media" /> : <span slot="media">N/A</span>}
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
            <ReactToPrint content={() => this.componentRef}>
              <PrintContextConsumer>
                {({ handlePrint }) => (
                  <Button iconF7="printer" onClick={handlePrint} id="print" className="not-print">
                    Print
                  </Button>
                )}
              </PrintContextConsumer>
            </ReactToPrint>
          </NavRight>
        </Navbar>

        {/* <Toolbar bottom></Toolbar> */}
        <div ref={(el) => (this.componentRef = el)} className="print-container" style={{ margin: "0", padding: "0" }}>
          {list.map((item) => (
            <>
              <div className="page-break" />
              <div>{item}</div>
            </>
          ))}
        </div>
      </Page>
    );
  }
}

export default HomePage;
