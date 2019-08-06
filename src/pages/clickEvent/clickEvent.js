import React, { Component } from 'react';

class clickEventApp extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      liked: false
    }
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick(event) {
    this.setState({ liked: !this.state.liked });
  }
  btnClick(){
    alert("Button clicked..")
  }
  render() {
    var text = this.state.liked ? 'like' : 'haven\'t liked';
    return (
      <div>
        <p onClick={this.handleClick}>
          You {text} this. Click to toggle.
        </p>
        <div>
          <p>{this.props.children}</p>
          <button onClick={this.btnClick}>Click here</button>
        </div>
      </div>
    )
  }
}
export default clickEventApp;