import React, { Component } from "react";

export default class CardUser extends Component {
  render() {
    let { hoTen } = this.props.user;
    return (
      <div className='col-2 pl-2'>
        {hoTen.length > 10 ? hoTen.slice(0, 10) + "..." : hoTen}
      </div>
    );
  }
}
