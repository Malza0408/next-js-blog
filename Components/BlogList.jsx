import { Card, Col, Row } from "antd";
import dayjs from "dayjs";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { v4 as uuidv4 } from "uuid";

const BlogList = ({ posts }) => {
  return (
    <>
      <Row
        align="middle"
        style={{
          height: 100,
        }}
      >
        <Col span={24}>
          <h1
            style={{
              fontSize: 30,
              fontWeight: "bold",
            }}
          >
            Latest Posts
          </h1>
        </Col>
      </Row>
      <Row
        gutter={16}
        align="top"
        style={{
          height: "auto",
        }}
      >
        {posts.map((post) => {
          const key = uuidv4();
          return (
            <Col span={6} key={key}>
              <Link href={`/post/${post.slug}`}>
                <a href="">
                  <Card
                    style={{
                      width: "100%",
                      border: "none",
                      marginBottom: 30,
                    }}
                    cover={
                      <Image
                        src={post.thumbnail.url}
                        alt={post.thumbnail.alt}
                        width={480}
                        height={270}
                      />
                    }
                  >
                    <h3>{post.title}</h3>
                    <h4>
                      {post.author.name} ∙{" "}
                      {dayjs(post.createdAt).format("MMMM D")}{" "}
                    </h4>
                  </Card>
                </a>
              </Link>
            </Col>
          );
        })}
      </Row>
    </>
  );
};

export default BlogList;
