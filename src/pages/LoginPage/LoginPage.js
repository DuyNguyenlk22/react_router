import { message } from "antd";
import axios from "axios";
import React, { Component } from "react";
import { TOKEN_CYBER, configHeaders } from "../../api/config";

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
      headers: configHeaders(),
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
              <label>Account</label>
              <input
                name='account'
                onChange={this.handleChangeForm}
                type='text'
                className='form-control'
                value={this.state.account}
              />
            </div>
            <div className='form-group'>
              <label>Password</label>
              <input
                name='password'
                onChange={this.handleChangeForm}
                type='text'
                className='form-control'
                value={this.state.password}
              />
            </div>
            <button className='btn btn-warning' onClick={this.handleLogin}>
              Login
            </button>
          </div>
        </div>
      </div>
    );
  }
}
