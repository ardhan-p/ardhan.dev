import fs from 'fs'
import path from 'path'
import matter from 'gray-matter';
import { marked } from 'marked';
import Head from 'next/head';

export default function PostPage({frontmatter: {title, date, cover_image}, slug, content}) {
  return (
    <div className='post-block'>
      <Head>
        <title>{title}</title>
      </Head>
      <div className='post-info'>
        <h1 className='post-title'>{title}</h1>
        <p className='post-date'>{date}</p>
        <div className='post-img-container'>
          <img className='post-img' alt='Cover Blog Image' src={cover_image}/>
        </div>
      </div>

      <div className='post-content'>
        <div dangerouslySetInnerHTML={{__html: marked(content) }}></div>
      </div>
    </div>
  )
}

// to get URL paths from markdown blog files
export async function getStaticPaths() {
  const files = fs.readdirSync(path.join('posts'));

  const paths = files.map(fileName => ({
    params: {
      slug: fileName.replace(".md", "")
    }
  }))

  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params: { slug }}) {
  const mdWithMetadata = fs.readFileSync(path.join("posts", slug + ".md"), "utf-8");

  const {data:frontmatter, content} = matter(mdWithMetadata);

  return {
    props: {
      frontmatter, slug, content
    }
  }
}