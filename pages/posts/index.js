import AllPosts from "../../components/posts/all-posts";
import {getAllPosts} from '../../lib/posts-util'

// const DUMMY_POSTS = [
//     {
//       slug: "getting-Started",
//       title: "getting start new fashion",
//       image: "hijab1.jpg",
//       excerpt: "This is good style for slim body.",
//       date: "2022-02-10",
//     },
//     {
//       slug: "getting-Started-fashion2",
//       title: "getting start new fashion",
//       image: "hijab1.jpg",
//       excerpt: "This is good style for slim body.",
//       date: "2022-05-10",
//     },
//     {
//       slug: "getting-Started-fashion3",
//       title: "getting start new fashion",
//       image: "hijab1.jpg",
//       excerpt: "This is good style for slim body.",
//       date: "2022-05-10",
//     },
//     {
//       slug: "getting-Started-fashion4",
//       title: "getting start new fashion",
//       image: "hijab1.jpg",
//       excerpt: "This is good style for slim body.",
//       date: "2022-05-10",
//     },
//   ];


function AllPostsPage(props){
 return <AllPosts posts={props.posts} />
}


export function getStaticProps() {
  const allPosts = getAllPosts();

  return {
    props: {
      posts: allPosts
    }
  }
}
export default AllPostsPage;