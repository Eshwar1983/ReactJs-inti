import React, { Component } from "react";
 
class Item extends Component {
  state = {
    count: this.props.item.value
  };
 
  handleIncrement = e => {
    this.setState({ count: this.state.count + 1 });
  };

  handleDecrement = e => {
    this.setState({ count: this.state.count - 1 });
  };
 
  render() {
    return (
      <React.Fragment>
        <div className="card mb-2">
          <h5 className={this.styleCardHeader()}>
            {this.styleCount()}
            <button
              onClick={() => this.props.onDelete(this.props.item.id)}
              className="btn btn-lg btn-outline-success  ml-4 float-right">
              Delete
            </button></h5>
          <div className="card-body">
            <button
              onClick={item => {
                this.handleIncrement({ item });
              }}
              className="btn btn-lg btn-outline-secondary"
            >
              Increment
            </button>

            <button
              onClick={item => {
                this.handleDecrement({ item });
              }}
              className="ml-2 btn btn-lg btn-outline-secondary"
            >
              Decrement
            </button>
 
          </div>
        </div>
      </React.Fragment>
    );
  }
 
  styleCardHeader() {
    let classes = "card-header h4 text-white bg-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }
 
  styleCount() {
    const { count } = this.state;
    return count === 0 ? "No Items!" : count;
  }
}
 
export default Item;