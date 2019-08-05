import React, { Component } from 'react';

class componentApp extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Content/>
      </div>
    )
  }
}
class Header extends Component {
  render() {
    return (
      <div className="App">
        <h1>Header</h1>
      </div>
    )
  }
}
class Content extends Component {
  render() {
    return (
      <div className="App">
        <h2>Content</h2>
        <div>The Content text !</div>
      </div>
    )
  }
}
export default componentApp;