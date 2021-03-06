import React, { useState } from "react";
import "./Users.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisV } from "@fortawesome/free-solid-svg-icons";

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
  const [inputEmployeeId, setInputEmployeeId] = useState("");
  const [inputEmployeeName, setInputEmployeeName] = useState("");
  const [inputEmployeeTitle, setInputEmployeeTitle] = useState("");

  return (
    <>
      <div className="user-filter">
        <div className="user-filter__id">
          <label>Employee Id</label>
          <input
            type="text"
            className="form-control"
            value={inputEmployeeId}
            onChange={(e) => setInputEmployeeId(e.target.value)}
          />
        </div>
        <div className="user-filter__id">
          <label>Employee Name</label>
          <input
            type="text"
            className="form-control"
            value={inputEmployeeName}
            onChange={(e) => setInputEmployeeName(e.target.value)}
          />
        </div>
        <div className="user-filter__id">
          <label>Employee Title</label>
          <select className="form-control">
            <option>Ch???n ch???c danh</option>
            <option>Chuy??n vi??n IT</option>
            <option>Chuy??n vi??n C&B</option>
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

            <FontAwesomeIcon
              icon={faEllipsisV}
              className="employee-profiles__toogle"
            />

            <h4 className="employee-profiles__name">{item.name}</h4>
            <div className="employee-profiles__title">{item.title}</div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Users;
