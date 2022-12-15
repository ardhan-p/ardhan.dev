import Head from 'next/head'

export default function Home({ posts }) {
  console.log(posts);
  return (
    <div>
      <Head>
        <title>ardhan.dev</title>
        <meta name="description" content="Ardhan's Personal Website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </div>
  )
}

export async function getStaticProps() {

  return {
    props: {
      posts: 'Test Posts'
    }
  }
}
