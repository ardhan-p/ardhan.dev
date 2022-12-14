import '../styles/globals.css'
import Navbar from '../components/Navbar'
import About from '../components/About'
import Projects from '../components/Projects'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar/>
      <About/> 
      <Projects/>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
