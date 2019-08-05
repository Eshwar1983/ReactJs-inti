import React from 'react';
import ReactDOM from 'react-dom';
class clearInputApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: ''
    }
    //this.updateState = this.updateState.bind(this);
    //this.clearInput = this.clearInput.bind(this);
  }
  updateState (e) {
    this.setState({data: e.target.value});
  }
  clearInput(){
    this.setState({data: ''});
    ReactDOM.findDOMNode(this.refs.myText).focus();
  }
  render(){
    return(
      <div>
        <input type="text" value={this.state.data} onChange={this.updateState.bind(this)} ref="myText"/>
        <h4>{this.state.data}</h4>
        <button onClick={this.clearInput.bind(this)}>Clear</button>
      </div>
    )
  }
}
export default clearInputApp;