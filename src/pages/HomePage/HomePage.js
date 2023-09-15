import axios from "axios";
import React, { Component } from "react";
import { TOKEN_CYBER, configHeaders } from "../../api/config";
import CardUser from "./CardUser";
import { CircleLoader } from "react-spinners";

export default class HomePage extends Component {
  state = {
    userArr: [],
    isLoading: true,
  };
  componentDidMount = () => {
    axios({
      url: "https://movienew.cybersoft.edu.vn/api/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=GP01",
      method: "GET",
      headers: configHeaders(),
    })
      .then((res) => {
        console.log(res.data.content);
        this.setState({
          userArr: res.data.content.slice(0, 200),
          isLoading: false,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  renderUserList = () => {
    return this.state.userArr.map((item, index) => {
      return <CardUser key={index} user={item} />;
    });
  };

  render() {
    return (
      <div>
        {this.state.isLoading && <CircleLoader size={200} color='#36d7b7' />}
        <div>{this.renderUserList()}</div>
      </div>
    );
  }
}
