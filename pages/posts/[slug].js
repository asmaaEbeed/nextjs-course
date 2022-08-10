import { Fragment } from "react";
import PostContent from "../../components/posts/post-detail/post-content";
import { getPostData, getPostsFiles } from "../../lib/posts-util";

import Head from "next/head";


function PostDetailPage(props){
 return  (
    <Fragment>
        <Head>
            <title>{ props.post.title }</title>
            <meta name="description" content={props.post.excerpt} />
        </Head>
        <PostContent post={props.post} />
    </Fragment>
 )
 
}

export function getStaticProps(context){
    const {params} = context;
    const { slug } = params;

    const postData = getPostData(slug)

    return {
        props: {
            post: postData
        }
    }

}
export function getStaticPaths() {

    const postFilenames = getPostsFiles();

    const slugs = postFilenames.map(postFilename => postFilename.replace(/\.md/, ''))
    return {
        paths: slugs.map(slug => ({params: {slug: slug}})),
        fallback: 'blocking'
    }
}
export default PostDetailPage;