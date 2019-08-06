import React, { Component } from 'react';
import HeaderComponent from './headerApp'
import ContentComponent from './contentApp'

class componentApp extends Component {
  render() {
    return (
      <div className="App">
        <HeaderComponent/>
        <ContentComponent/>
      </div>
    )
  }
}

export default componentApp;
