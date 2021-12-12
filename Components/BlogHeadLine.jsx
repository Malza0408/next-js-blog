import { Col, Row } from "antd";
import React from "react";

const BlogHeadLine = (props) => {
  return (
    <Row
      align="middle"
      style={{
        height: 250,
        textAlign: "center",
      }}
    >
      <Col span={24}>
        <h1
          style={{
            fontSize: 70,
            fontWeight: "bold",
          }}
        >
          Welcome my Blog
        </h1>
        <p
          style={{
            fontSize: 24,
          }}
        >
          즐겁게 개발하며 알고 싶은 것이 많아 공부합니다 :)
        </p>
      </Col>
    </Row>
  );
};

export default BlogHeadLine;
