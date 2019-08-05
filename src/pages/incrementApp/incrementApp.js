import React from 'react';
class incrementApp extends React.Component {
  constructor(){
    super();
    this.state = {
      count: 0
    }
  }
  btnClick(){
    this.setState({
      count: this.state.count + 1
    })
  }
  render() {
    return (
      <div>
        <h1>Value: {this.state.count} </h1>
        <hr/>
        <button onClick={this.btnClick.bind(this)}>Increment by 1</button>
      </div>
    )
  }
}
export default incrementApp;