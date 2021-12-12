import { Card, Col, Row } from "antd";
import dayjs from "dayjs";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const BlogMainPost = ({
  slug,
  thumbnail,
  title,
  subtitle,
  author,
  createdAt,
}) => {
  return (
    <Row
      align="middle"
      style={{
        height: "auto",
      }}
    >
      <Col span={24}>
        <Link href={`/post/${slug}`}>
          <a href="">
            <Card
              style={{ border: "none" }}
              cover={
                <Image
                  src={thumbnail.url}
                  alt={thumbnail.alt}
                  width="1024"
                  height="720"
                />
              }
            >
              {title !== undefined &&
                subtitle !== undefined &&
                author !== undefined &&
                createdAt !== undefined && (
                  <>
                    <h1>{title}</h1>
                    <h3>{subtitle}</h3>
                    <h4>
                      {author.name} ∙ {dayjs(createdAt).format("MMMM D")}
                    </h4>
                  </>
                )}
            </Card>
          </a>
        </Link>
      </Col>
    </Row>
  );
};

export default BlogMainPost;
