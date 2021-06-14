import React from "react";
import "./Users.css";
import { MoreOutlined } from "@ant-design/icons";
const data = [
  {
    _id: "a",
    img: "https://smarthr-angular.dreamguystech.com/purple/assets/img/profiles/avatar-2.jpg",
    name: "Catherine Manseau",
    title: "Web developer",
  },
  {
    _id: "b",
    img: "https://smarthr-angular.dreamguystech.com/purple/assets/img/profiles/avatar-1.jpg",
    name: "Catherine Manseau",
    title: "Web developer",
  },
  {
    _id: "c",
    img: "https://smarthr-angular.dreamguystech.com/purple/assets/img/profiles/avatar-2.jpg",
    name: "Catherine Manseau",
    title: "Web developer",
  },
  {
    _id: "d",
    img: "https://smarthr-angular.dreamguystech.com/purple/assets/img/profiles/avatar-4.jpg",
    name: "Catherine Manseau",
    title: "Web developer",
  },
  {
    _id: "e",
    img: "https://smarthr-angular.dreamguystech.com/purple/assets/img/profiles/avatar-3.jpg",
    name: "Catherine Manseau",
    title: "Web developer",
  },
  {
    _id: "f",
    img: "https://smarthr-angular.dreamguystech.com/purple/assets/img/profiles/avatar-2.jpg",
    name: "Catherine Manseau",
    title: "Web developer",
  },
  {
    _id: "g",
    img: "https://smarthr-angular.dreamguystech.com/purple/assets/img/profiles/avatar-2.jpg",
    name: "Catherine Manseau",
    title: "Web developer",
  },
  {
    _id: "h",
    img: "https://smarthr-angular.dreamguystech.com/purple/assets/img/profiles/avatar-2.jpg",
    name: "Catherine Manseau",
    title: "Web developer",
  },
  {
    _id: "i",
    img: "https://smarthr-angular.dreamguystech.com/purple/assets/img/profiles/avatar-2.jpg",
    name: "Catherine Manseau",
    title: "Web developer",
  },
  {
    _id: "j",
    img: "https://smarthr-angular.dreamguystech.com/purple/assets/img/profiles/avatar-2.jpg",
    name: "Catherine Manseau",
    title: "Web developer",
  },
  {
    _id: "k",
    img: "https://smarthr-angular.dreamguystech.com/purple/assets/img/profiles/avatar-2.jpg",
    name: "Catherine Manseau",
    title: "Web developer",
  },
  {
    _id: "l",
    img: "https://smarthr-angular.dreamguystech.com/purple/assets/img/profiles/avatar-2.jpg",
    name: "Catherine Manseau",
    title: "Web developer",
  },
  {
    _id: "l",
    img: "https://smarthr-angular.dreamguystech.com/purple/assets/img/profiles/avatar-2.jpg",
    name: "Catherine Manseau",
    title: "Web developer",
  },
  {
    _id: "l",
    img: "https://smarthr-angular.dreamguystech.com/purple/assets/img/profiles/avatar-2.jpg",
    name: "Catherine Manseau",
    title: "Web developer",
  },
  {
    _id: "l",
    img: "https://smarthr-angular.dreamguystech.com/purple/assets/img/profiles/avatar-2.jpg",
    name: "Catherine Manseau",
    title: "Web developer",
  },
  {
    _id: "l",
    img: "https://smarthr-angular.dreamguystech.com/purple/assets/img/profiles/avatar-2.jpg",
    name: "Catherine Manseau",
    title: "Web developer",
  },
  {
    _id: "l",
    img: "https://smarthr-angular.dreamguystech.com/purple/assets/img/profiles/avatar-2.jpg",
    name: "Catherine Manseau",
    title: "Web developer",
  },
];
function Users(props) {
  return (
    <>
      <div className="user-filter">
        <div className="user-filter__id">
          <label>Employee Id</label>
          <input type="text" className="form-control" />
        </div>
        <div className="user-filter__id">
          <label>Employee Name</label>
          <input type="text" className="form-control" />
        </div>
        <div className="user-filter__id">
          <label>Employee Title</label>
          <select className="form-control">
            <option>Chọn chức danh</option>
            <option>Chuyên viên IT</option>
            <option>Chuyên viên C&B</option>
          </select>
        </div>
        <div className="user-filter__search">
          <button>Search</button>
        </div>
      </div>
      <div className="list-user">
        {data.map((item) => (
          <div className="employee-profiles" key={item.id}>
            <div className="employee-profiles__header">
              <a href={`/users/a`}>
                <img src={item.img} alt="mutosi employee profile" />
                <span>100</span>
              </a>
            </div>
            <MoreOutlined className="employee-profiles__toogle" />
            <h4 className="employee-profiles__name">{item.name}</h4>
            <div className="employee-profiles__title">{item.title}</div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Users;
