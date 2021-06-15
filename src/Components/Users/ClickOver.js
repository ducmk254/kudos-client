import React, { useState } from "react";
import { Popover, Button } from "antd";
import { EllipsisOutlined } from "@ant-design/icons";
import "./ClickOver.css";
function ClickOver(props) {
  const [visible, setVisible] = useState(false);
  const hide = () => {
    setVisible(false);
  };
  const handleVisibleChange = (visible) => {
    setVisible(visible);
  };
  return (
    <Popover
      className="pop-over"
      content={
        <ul>
          <li>
            <a href="#edit" onClick={hide}>
              Edit
            </a>
          </li>
          <li>
            <a href="#edit" onClick={hide}>
              Delete
            </a>
          </li>
        </ul>
      }
      trigger="click"
      visible={visible}
      onVisibleChange={handleVisibleChange}
    >
      <Button type="primary">
        <EllipsisOutlined />
      </Button>
    </Popover>
  );
}

export default ClickOver;
