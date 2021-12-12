import SanityBlockContent from "@sanity/block-content-to-react";
import { Col, Row } from "antd";
import Link from "next/link";
import React from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import getYouTubeID from "get-youtube-id";

const serializers = {
  types: {
    code: ({ node }) => {
      const { code } = node;
      return (
        <SyntaxHighlighter language="javascript">{code}</SyntaxHighlighter>
      );
    },
    youtube: ({ node }) => {
      const id = getYouTubeID(node.url);
      const url = `https://www.youtube.com/embed/${id}`;
      if (!id) {
        return <div>Missing Youtube URL</div>;
      }
      return (
        <iframe
          width="100%"
          height="315"
          src={url}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        />
      );
    },
    link: ({ node }) => {
      const { metadata } = node;
      return <Link href={metadata.url}>gitHub로 이동~!🙌</Link>;
    },
  },
};

const BlogPostDetail = ({ blocks }) => {
  return (
    <Row>
      <Col span={24}>
        <SanityBlockContent
          blocks={blocks}
          projectId={process.env.SANITY_PROJECT_ID}
          dataset="production"
          serializers={serializers}
        />
      </Col>
    </Row>
  );
};

export default BlogPostDetail;
