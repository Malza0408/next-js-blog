import BlogMainPost from "../../Components/BlogMainPost";
import BlogPostDetail from "../../Components/BlogPostDetail";
import Footer from "../../Components/Footer";
import Header from "../../Components/Header";
import SanityService from "../../services/SanityService";
import styles from "../../styles/Home.module.css";

export default function PostAll({ slug, post }) {
  console.log(post);
  return (
    <div className={styles.container}>
      <Header />
      <BlogMainPost slug={post.slug} thumbnail={post.thumbnail} />
      <BlogPostDetail blocks={post.content} />
      <Footer />
    </div>
  );
}

// dynamic routing
export async function getStaticPaths() {
  const posts = await new SanityService().getPosts();

  // params 에는 반드시 slug 를 넘긴다
  const paths = posts.map((post) => ({
    params: {
      slug: post.slug,
    },
  }));
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const { slug } = params;
  const posts = await new SanityService().getPosts();
  const post = posts.find((p) => p.slug === slug);
  return {
    props: {
      slug,
      post,
    },
  };
}
