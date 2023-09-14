import { message } from "antd";
import axios from "axios";
import React, { Component } from "react";

export default class LoginPage extends Component {
  state = {
    account: "",
    password: "",
  };
  handleChangeForm = (e) => {
    console.log("🚀 ~ file: LoginPage.js:9 ~ LoginPage ~ e:", e.target.name);
    let { value, name } = e.target;
    this.setState({
      [name]: value,
    });
  };
  handleLogin = () => {
    axios({
      url: "https://movienew.cybersoft.edu.vn/api/QuanLyNguoiDung/DangNhap",
      method: "POST",
      data: {
        taiKhoan: this.state.account,
        matKhau: this.state.password,
      },
      headers: {
        TokenCybersoft:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCBTw6FuZyAwOCIsIkhldEhhblN0cmluZyI6IjA3LzAzLzIwMjQiLCJIZXRIYW5UaW1lIjoiMTcwOTc2OTYwMDAwMCIsIm5iZiI6MTY4Njc2MjAwMCwiZXhwIjoxNzA5OTE3MjAwfQ.KMixzquIcyG1HcsZ_iekv3cHfqWMebGVfzp349mNosg",
      },
    })
      .then((res) => {
        console.log(res);
        message.success("Đăng nhập thành công");
        setTimeout(() => {
          //delay 3s trước khi chuyển trang
          window.location.href = "/";
        }, 2000);
      })
      .catch((err) => {
        console.log(err);
        message.error("Đăng nhập thất bại");
      });
  };
  render() {
    return (
      <div>
        <div className='container'>
          <div>
            <div className='form-group'>
              <label htmlFor>Account</label>
              <input
                name='account'
                onChange={this.handleChangeForm}
                type='text'
                className='form-control'
                value={this.state.account}
                placeholder
              />
            </div>
            <div className='form-group'>
              <label htmlFor>Password</label>
              <input
                name='password'
                onChange={this.handleChangeForm}
                type='text'
                className='form-control'
                value={this.state.password}
                placeholder
              />
            </div>
            <button classname='btn btn-warning' onClick={this.handleLogin}>
              Login
            </button>
          </div>
        </div>
      </div>
    );
  }
}
