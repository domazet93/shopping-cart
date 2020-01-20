import React from "react";
import { connect } from "react-redux";

class Counter extends React.Component {
  constructor(props) {
    super(props);
  }

  increment() {
    this.props.dispatch({ type: "INCREMENT" });
  }

  decrement() {
    this.props.dispatch({ type: "DECREMENT" });
  }

  render() {
    return (
      <div>
        <h2>Counter</h2>
        <div>
          <button onClick={this.decrement.bind(this)}>-</button>
          <span>{this.props.count}</span>
          <button onClick={this.increment.bind(this)}>+</button>
        </div>
      </div>
    );
  }
}

// Add this function:
function mapStateToProps(state) {
  return {
    count: state.count
  };
}

export default connect(mapStateToProps)(Counter);
