import React, { Component, PureComponent } from "react";

export default class ChildComponent extends PureComponent {
  constructor() {
    super();
    this.myCountdown = null;
  }

  componentDidMount() {
    console.log("Thôi nôi component con");
    let timer = 30;
    this.myCountdown = setInterval(() => {
      timer--;
      //   console.log("timer", timer);
    }, 1000);
  }
  componentWillUnmount() {
    // gọi api ở đây
    clearInterval(this.myCountdown);
    console.log("Đăng xuất component con");
  }
  render() {
    console.log("component con render");
    return <div className='p-5 bg-warning'>ChildComponent</div>;
  }
}
