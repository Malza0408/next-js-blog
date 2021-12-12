import { Col, Row } from "antd";
import React from "react";

const Footer = (props) => {
  return (
    <Row
      align="middle"
      style={{
        height: 50,
        textAlign: "center",
      }}
    >
      <Col span={24}>
        <p>© 2021 Malza. All rights reserved</p>
      </Col>
    </Row>
  );
};

export default Footer;
