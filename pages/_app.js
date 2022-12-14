import '../styles/globals.css'
import Navbar from '../components/Navbar'
import About from '../components/About'
import Projects from '../components/Projects'
import ProjectCard from '../components/ProjectCard'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar/>
      <About/> 
      <Projects/>
      <ProjectCard image="easypass" platform="Android App" title="EasyPass"/>
      <ProjectCard image="wareeyes" platform="ReactJS App" title="WareEyes"/>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
