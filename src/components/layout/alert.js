import React, { useState } from "react";
import { Modal, Button } from "antd";

const Alert = () => {
  const [visible, setVisible] = useState(false);
  return (
    <>
      <Button type="primary" onClick={() => setVisible(true)}>
        Alert
      </Button>
      <Modal
        title="Warning"
        centered
        visible={visible}
        onOk={() => setVisible(false)}
        onCancel={() => setVisible(false)}
        width={800}
        // style={{ backgroundColor: "#911B01", color: "#911B01" }}
        bodyStyle={{ backgroundColor: "#911B01" }}
        // maskStyle={{ backgroundColor: "#911B01" }}
      >
        <p>High Amount of Air pollutants</p>
        <p>Be safe</p>
        <p>If possible Stay at home, Come out only if it is necessary</p>
      </Modal>
    </>
  );
};

export default Alert;
