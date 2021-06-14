import React from "react";
import "./UserDetail.css";
import { Tabs } from "antd";

import TabOne from "./TabOne";
import TabTwo from "./TabTwo";
import TabThree from "./TabThree";
const { TabPane } = Tabs;
function callback(key) {
  console.log(key);
}
function UserDetail(props) {
  return (
    <div className="users-details">
      <div className="user-detail">
        <div className="user-detail__header">
          <img
            src="https://smarthr-angular.dreamguystech.com/purple/assets/img/profiles/avatar-1.jpg"
            alt="Mutosi employee"
            className="user-detail__header-img"
          />
          <div className="user-detail__header-info">
            <h1 className="user-detail__header-name">John Doe</h1>
            <p className="user-detail__header-depart">Phòng HCNS</p>
            <p className="user-detail__header-title">Chuyên viên IT</p>
            <p className="user-detail__header-id">Empoyee ID: MTS0106309</p>
            <p className="user-detail__header-joindate">
              Date of Join: 06/05/2021
            </p>
            <div className="user-detail__header-sendmessage">
              <a href="#">send mesage</a>
            </div>
          </div>
        </div>
        <div className="user-detail__contact">
          <ul className="user-detail__list">
            <li className="user-detail__item">
              <div className="user-detail__list_label">Phone:</div>
              <div className="user-detail__list_text">
                <a href="#">096xxxxxxx</a>
              </div>
            </li>
            <li className="user-detail__item">
              <div className="user-detail__list_label">Email:</div>
              <div className="user-detail__list_text">
                <a href="#">admin@gmail.com</a>
              </div>
            </li>
            <li className="user-detail__item">
              <div className="user-detail__list_label">Birthday:</div>
              <div className="user-detail__list_text">02/11/1990</div>
            </li>
            <li className="user-detail__item">
              <div className="user-detail__list_label">Address:</div>
              <div className="user-detail__list_text">
                Truc Thai, Truc Ninh, Nam Dinh
              </div>
            </li>
            <li className="user-detail__item">
              <div className="user-detail__list_label">Gender:</div>
              <div className="user-detail__list_text">Nam</div>
            </li>
            <li className="user-detail__item">
              <div className="user-detail__list_label">Report to:</div>
              <div className="user-detail__list_text">
                <img
                  src="https://smarthr-angular.dreamguystech.com/purple/assets/img/profiles/avatar-1.jpg"
                  alt="avantar"
                />
                <a href="#">Ms. Loan</a>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className="profile-tab">
        <Tabs defaultActiveKey="1" onChange={callback}>
          <TabPane tab="Thông tin cơ bản" key="1">
            <TabOne />
          </TabPane>
          <TabPane tab="Tab 2" key="2">
            <TabTwo />
          </TabPane>
          <TabPane tab="Tab 3" key="3">
            <TabThree />
          </TabPane>
        </Tabs>
      </div>
    </div>
  );
}

export default UserDetail;
