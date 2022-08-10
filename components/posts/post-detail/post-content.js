import PostHeader from "./post-header";
import ReactMarkdown from "react-markdown";
import classes from "./post-content.module.css";
import Image from "next/image";

import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter'

import atomDark from 'react-syntax-highlighter/dist/cjs/styles/prism/atom-dark'

import js from 'react-syntax-highlighter/dist/cjs/languages/prism/javascript'
import css from 'react-syntax-highlighter/dist/cjs/languages/prism/css'

SyntaxHighlighter.registerLanguage('js', js);
SyntaxHighlighter.registerLanguage('css', css);

function PostContent(props) {
  const { post } = props;
 

  const imagePath = `/images/posts/${post.slug}/${post.image}`;
  const customRenderers = {
    img(image) {
      return (
        <Image
          src={`/images/posts/${post.slug}/${image.src}`}
          alt={image.alt}
          width={300}
          height={600}
        />
      );
    },
    code(code) {
      const { language, value } = code
      // return (<SyntaxHighlighter style={atomDark} language={language} children={value} >
        return (<SyntaxHighlighter style={atomDark} language={language} >
        {code.value}
      </SyntaxHighlighter>);
    }
  };

  return (
    <article className={classes.content}>
      <PostHeader title={post.title} image={imagePath} />
      <div className={classes.datacontent}>
        <div>
          <ReactMarkdown components={customRenderers}>
            {post.content}
          </ReactMarkdown>
        </div>
        <div>
          <Image src={imagePath} alt={post.title} width={200} height={150} />
        </div>
      </div>
    </article>
  );
}
export default PostContent;
