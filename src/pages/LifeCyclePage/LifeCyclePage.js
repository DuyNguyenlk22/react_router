import React, { Component } from "react";
import ChildComponent from "./ChildComponent";

export default class LifeCyclePage extends Component {
  state = {
    number: 1,
  };
  componentDidMount() {
    // dùng để gọi api khi user load trang
    console.log("did mount");
  }
  shouldComponentUpdate(nextProps, nextState) {
    console.log(
      "🚀 ~ file: LifeCyclePage.js:15 ~ LifeCyclePage ~ shouldComponentUpdate ~ nextProps:",
      nextState,
    );
    if (nextState.number == 5) {
      return false;
      // return false => không render lại
    }
    return true;
    //default là return true
  }
  handleIncrease = () => this.setState({ number: this.state.number + 1 });
  handleDecrease = () => this.setState({ number: this.state.number - 1 });
  componentDidUpdate() {
    console.log("Chạy khi render thành công");
  }
  render() {
    console.log("render");
    return (
      <div className='text-center'>
        <h2 className='display-4 text-danger'>LifeCycle Page</h2>
        <button onClick={this.handleDecrease} className='btn btn-dark'>
          -
        </button>
        <strong className='mx-3'>{this.state.number}</strong>
        <button onClick={this.handleIncrease} className='btn btn-dark'>
          +
        </button>
        <ChildComponent />
      </div>
    );
  }
}
