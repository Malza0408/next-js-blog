import { Col, Row } from "antd";
import Link from "next/link";
import { CodeOutlined } from "@ant-design/icons/lib/icons";

export default function Header() {
  return (
    <Row
      align="middle"
      style={{
        height: 64,
      }}
      className="blog-header"
    >
      <Col span={24}>
        <Link href="/">
          <a href="">
            <div style={{ fontSize: 20, fontWeight: "bold" }}>
              <CodeOutlined /> Malza&apos;s Blog
            </div>
          </a>
        </Link>
      </Col>
    </Row>
  );
}
