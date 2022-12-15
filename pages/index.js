import Head from 'next/head'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter';
import Navbar from '../components/Navbar'
import About from '../components/About'
import Projects from '../components/Projects'
import Blogs from '../components/Blogs'

export default function Home({ posts }) {
  console.log(posts);
  return (
    <div>
      <Head>
        <title>ardhan.dev</title>
        <meta name="description" content="Ardhan's Personal Website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <About/> 
      <Projects/>
      <Blogs currentPosts={posts}/>
    </div>
  )
}

// https://youtu.be/MrjeefD8sac
export async function getStaticProps() {
  // creates a path to read all blog posts from 'posts' directory
  const files = fs.readdirSync(path.join("posts"));

  // gets each posts' slugs (url) and frontmatter (metadata)
  const posts = files.map(fileName => {
    const slug = fileName.replace(".md", "");

    const mdWithMetadata = fs.readFileSync(path.join("posts", fileName), "utf-8");

    const { data: frontmatter } = matter(mdWithMetadata);

    return {
      slug, frontmatter
    }
  });

  return {
    props: {
      posts
    }
  }
}
