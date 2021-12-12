import styles from "../styles/Home.module.css";
import SanityService from "../services/SanityService";
import Header from "../Components/Header";
import BlogHeadLine from "../Components/BlogHeadLine";
import BlogMainPost from "../Components/BlogMainPost";
import BlogList from "../Components/BlogList";
import Footer from "../Components/Footer";

export default function Home({ home, posts }) {
  const mainPost = posts.find((p) => p.slug === home.mainPostUrl);
  const otherPosts = posts.filter((p) => p.slug !== home.mainPostUrl);

  console.log(mainPost);
  console.log(otherPosts);
  return (
    <div className={styles.container}>
      <Header />
      <BlogHeadLine />
      <BlogMainPost {...mainPost} />
      <BlogList posts={otherPosts} />
      <Footer />
    </div>
  );
}

export async function getStaticProps() {
  const sanityService = new SanityService();
  const home = await sanityService.getHome();
  const posts = await sanityService.getPosts();
  return {
    props: {
      home,
      posts,
    },
  };
}
