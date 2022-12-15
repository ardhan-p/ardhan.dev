import '../styles/globals.css'
import Navbar from '../components/Navbar'
import About from '../components/About'
import Projects from '../components/Projects'
import Blogs from '../components/Blogs'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar/>
      <About/> 
      <Projects/>
      <Blogs/>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
