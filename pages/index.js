import Head from 'next/head'
import About from '../components/About'
import Projects from '../components/Projects'

export default function Home({ posts }) {
  return (
    <div>
      <Head>
        <title>ardhan.dev</title>
        <meta name="description" content="Ardhan's Super Cool Personal Website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <About/> 
      <Projects/>
    </div>
  )
}

// https://youtu.be/MrjeefD8sac