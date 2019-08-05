import React, { Component } from 'react';
class clickEventApp extends React.Component {
  btnClick(){
    alert("Button clicked..")
  }
  render() {
    return (
      <div>
        <p>{this.props.children}</p>
        <button onClick={this.btnClick}>Click here</button>
      </div>
    )
  }
}
export default clickEventApp;