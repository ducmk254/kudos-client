import React from "react";
import "./TabOne.css";
import { EditOutlined } from "@ant-design/icons";
function TabOne(props) {
  return (
    <div className="profile-tab__one">
      <div className="profile-tab_one-info">
        <div className="profile-tab_one-header">
          <h2>Thông tin nhân sự</h2>
          <a href="#">
            <EditOutlined className="profile-tab_one-icon" />
          </a>
        </div>
        <ul className="profile-tab_one__list">
          <li>
            <div>CMT/CCCD No.</div>
            <span>163096084</span>
          </li>
          <li>
            <div>Ngày hết hạn.</div>
            <span>20/12/2025</span>
          </li>
          <li>
            <div>Tel</div>
            <span>0968xxxxxx</span>
          </li>
          <li>
            <div>Quốc tịch</div>
            <span>Việt Nam</span>
          </li>
          <li>
            <div>Tỉnh/TP.</div>
            <span>163096084</span>
          </li>
          <li>
            <div>Quận / Huyện.</div>
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
          <a href="#">
            <EditOutlined className="profile-tab_one-icon" />
          </a>
        </div>
        <ul className="profile-tab_one__list profile-tab_one-bottom">
          <li>
            <div>CMT/CCCD No.</div>
            <span>163096084</span>
          </li>
          <li>
            <div>Ngày hết hạn.</div>
            <span>20/12/2025</span>
          </li>
          <li>
            <div>Tel</div>
            <span>0968xxxxxx</span>
          </li>
          <li>
            <div>Quốc tịch</div>
            <span>Việt Nam</span>
          </li>
        </ul>
        <ul className="profile-tab_one__list">
          <li>
            <div>CMT/CCCD No.</div>
            <span>163096084</span>
          </li>
          <li>
            <div>Ngày hết hạn.</div>
            <span>20/12/2025</span>
          </li>
          <li>
            <div>Tel</div>
            <span>0968xxxxxx</span>
          </li>
          <li>
            <div>Quốc tịch</div>
            <span>Việt Nam</span>
          </li>
        </ul>
      </div>
      <div className="profile-tab_one-bank">
        <div className="profile-tab_one-header">
          <h2>Thông tin tài khoản ngân hàng</h2>
          <a href="#">
            <EditOutlined className="profile-tab_one-icon" />
          </a>
        </div>
      </div>
      <div className="profile-tab_one-family">
        <div className="profile-tab_one-header">
          <h2>Thông tin gia đình</h2>
          <a href="#">
            <EditOutlined className="profile-tab_one-icon" />
          </a>
        </div>
      </div>
      <div className="profile-tab_one-edu">
        <div className="profile-tab_one-header">
          <h2>Học vấn</h2>
          <a href="#">
            <EditOutlined className="profile-tab_one-icon" />
          </a>
        </div>
      </div>
      <div className="profile-tab_one-experience">
        <div className="profile-tab_one-header">
          <h2>Kinh nghiệm làm việc</h2>
          <a href="#">
            <EditOutlined className="profile-tab_one-icon" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default TabOne;
