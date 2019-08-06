import React, { Component } from 'react';
import Item from "./item";

class raisingHandlingEventApp extends React.Component {
  state = {
    items: [{ id: 1, value: 10 }, { id: 2, value: 0 }, { id: 3, value: -1 }]
  };
 
  handleDelete = itemId => {
    const items = this.state.items.filter(item => item.id !== itemId);
    this.setState({ items: items });
  };
  render() {
    return (
      <React.Fragment>
        {this.state.items.map(item => (
          <Item 
          key={item.id} 
          value={item.value}
            onDelete={this.handleDelete}
            item={item} 
          />
        ))}
      </React.Fragment>
    )
  }
}

export default raisingHandlingEventApp;