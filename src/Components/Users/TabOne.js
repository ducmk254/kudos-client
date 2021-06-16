import React from "react";
import { Table, Tag, Space, Timeline } from "antd";
// import { EllipsisOutlined } from "@ant-design/icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisV } from "@fortawesome/free-solid-svg-icons";
import "./TabOne.css";
import { EditOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import ClickOver from "./ClickOver";

/* data của bảng thông tin gia đình */
const columns = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Age",
    dataIndex: "age",
    key: "age",
  },
  {
    title: "Address",
    dataIndex: "address",
    key: "address",
  },
  {
    title: "",
    key: "action",
    render: (text, record) => (
      <Space size="middle">
        {/* <ClickOver /> */}
        <FontAwesomeIcon
          icon={faEllipsisV}
          className="profile-tab_one__list-icon"
        />
      </Space>
    ),
  },
];
const data = [
  {
    key: "1",
    name: "John Brown",
    age: 32,
    address: "New York No. 1 Lake Park",
    tags: ["nice", "developer"],
  },
  {
    key: "2",
    name: "Jim Green",
    age: 42,
    address: "London No. 1 Lake Park",
    tags: ["loser"],
  },
  {
    key: "3",
    name: "Joe Black",
    age: 32,
    address: "Sidney No. 1 Lake Park",
    tags: ["cool", "teacher"],
  },
];

function TabOne(props) {
  return (
    <div className="profile-tab__one">
      <div className="profile-tab_one-info">
        <div className="profile-tab_one-header">
          <h2>Thông tin nhân sự</h2>
          <Link href="#">
            <EditOutlined className="profile-tab_one-icon" />
          </Link>
        </div>
        <ul className="profile-tab_one__list">
          <li>
            <div>Số CMT/CCCD. </div>
            <span>163096084</span>
          </li>
          <li>
            <div>Ngày hết hạn.</div>
            <span>20/12/2025</span>
          </li>
          <li>
            <div>Mobile.</div>
            <span>0968xxxxxx</span>
          </li>
          <li>
            <div>Quốc tịch.</div>
            <span>Việt Nam</span>
          </li>
          <li>
            <div>Tỉnh/TP.</div>
            <span>163096084</span>
          </li>
          <li>
            <div>Quận/Huyện.</div>
            <span>163096084</span>
          </li>
          <li>
            <div>Tình trạng hôn nhân</div>
            <span>Đã lập gia đình</span>
          </li>
          <li>
            <div>Số con</div>
            <span>2</span>
          </li>
        </ul>
      </div>
      <div className="profile-tab_one-contact">
        <div className="profile-tab_one-header">
          <h2>Liên hệ khẩn cấp</h2>
          <Link href="#">
            <EditOutlined className="profile-tab_one-icon" />
          </Link>
        </div>
        <ul className="profile-tab_one__list profile-tab_one-bottom">
          <li>
            <div>Liên hệ chính</div>
            <span> </span>
          </li>
          <li>
            <div>Họ và tên</div>
            <span>John Doe</span>
          </li>
          <li>
            <div>Mối quan hệ</div>
            <span>Bố</span>
          </li>
          <li>
            <div>Phone</div>
            <span>0968xxxxxx</span>
          </li>
        </ul>
        <ul className="profile-tab_one__list">
          <li>
            <div>Liên hệ phụ</div>
            <span> </span>
          </li>
          <li>
            <div>Họ và tên</div>
            <span>John Doe</span>
          </li>
          <li>
            <div>Mối quan hệ</div>
            <span>Bố</span>
          </li>
          <li>
            <div>Phone</div>
            <span>0968xxxxxx</span>
          </li>
        </ul>
      </div>
      <div className="profile-tab_one-bank">
        <div className="profile-tab_one-header">
          <h2>Thông tin tài khoản ngân hàng</h2>
          <Link href="#">
            <EditOutlined className="profile-tab_one-icon" />
          </Link>
        </div>
        <ul className="profile-tab_one__list">
          <li>
            <div>Tên Ngân hàng </div>
            <span>Teckcombak </span>
          </li>
          <li>
            <div>Số tài khoản.</div>
            <span>1630960844</span>
          </li>
          <li>
            <div>Chi nhánh</div>
            <span>Văn Quán</span>
          </li>
          <li>
            <div>Số PAN</div>
            <span>TC000Y56</span>
          </li>
        </ul>
      </div>
      <div className="profile-tab_one-family">
        <div className="profile-tab_one-header">
          <h2>Thông tin gia đình</h2>
          <Link href="#">
            <EditOutlined className="profile-tab_one-icon" />
          </Link>
        </div>
        <div className="profile-tab_one__list">
          <Table
            columns={columns}
            dataSource={data}
            pagination={false}
            scroll={{ x: true }}
          />
        </div>
      </div>
      <div className="profile-tab_one-edu">
        <div className="profile-tab_one-header">
          <h2>Học vấn</h2>
          <Link href="#">
            <EditOutlined className="profile-tab_one-icon" />
          </Link>
        </div>
        <Timeline>
          <Timeline.Item color="gray">
            <p className="custom-for-timeline">
              Solve initial network problems 1
            </p>
            <p>Solve initial network problems 2</p>
            <p>Solve initial network problems 3 2015-09-01</p>
          </Timeline.Item>
          <Timeline.Item color="gray">
            <p className="custom-for-timeline">Technical testing 1</p>
            <p>Technical testing 2</p>
            <p>Technical testing 3 2015-09-01</p>
          </Timeline.Item>
        </Timeline>
      </div>
      <div className="profile-tab_one-experience">
        <div className="profile-tab_one-header">
          <h2>Kinh nghiệm làm việc</h2>
          <Link href="#">
            <EditOutlined className="profile-tab_one-icon" />
          </Link>
        </div>
        <Timeline>
          <Timeline.Item color="gray">
            <p className="custom-for-timeline">
              Solve initial network problems 1
            </p>
            <p>Solve initial network problems 2</p>
            <p>Solve initial network problems 3 2015-09-01</p>
          </Timeline.Item>
          <Timeline.Item color="gray">
            <p className="custom-for-timeline">Technical testing 1</p>
            <p>Technical testing 2</p>
            <p>Technical testing 3 2015-09-01</p>
          </Timeline.Item>
          <Timeline.Item color="gray">
            <p className="custom-for-timeline">Technical testing 1</p>
            <p>Technical testing 2</p>
            <p>Technical testing 3 2015-09-01</p>
          </Timeline.Item>
        </Timeline>
      </div>
    </div>
  );
}

export default TabOne;
