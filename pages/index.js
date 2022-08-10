import { Fragment } from "react";
import Hero from "../components/home-page/hero";
import FeaturedPosts from "../components/home-page/featured-posts";
import { getFeaturedPosts } from '../lib/posts-util';

import Head from 'next/head';

// const DUMMY_POSTS = [
//   {
//     slug: "getting-Started",
//     title: "getting start new fashion",
//     image: "hijab1.jpg",
//     excerpt: "This is good style for slim body.",
//     date: "2022-02-10",
//   },
//   {
//     slug: "getting-Started-fashion2",
//     title: "getting start new fashion",
//     image: "hijab1.jpg",
//     excerpt: "This is good style for slim body.",
//     date: "2022-05-10",
//   },
//   {
//     slug: "getting-Started-fashion3",
//     title: "getting start new fashion",
//     image: "hijab1.jpg",
//     excerpt: "This is good style for slim body.",
//     date: "2022-05-10",
//   },
//   {
//     slug: "getting-Started-fashion4",
//     title: "getting start new fashion",
//     image: "hijab1.jpg",
//     excerpt: "This is good style for slim body.",
//     date: "2022-05-10",
//   },
// ];

function HomePage(props) {
  return (
    <Fragment>
      <Head>
        <title>
          Fashion&apos;s blog
        </title>
        <meta name="descruption" content="I post about programing and web development" />
      </Head>
      <Hero />
      <FeaturedPosts posts={props.posts} />
    </Fragment>
  );
}

export function getStaticProps() {
  const featuredPosts = getFeaturedPosts();

  return {
    props: {
      posts: featuredPosts
    }
  }
}
export default HomePage;
