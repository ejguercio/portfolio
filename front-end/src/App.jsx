import './App.css'
import Contact from './components/Contact/Contact'
import NavBar from './components/NavBar/NavBar'
import Presentation from './components/Presentation/Presentation'
import Projects from './components/Projects/Projects'
import Technologies from './components/Technologies/Technologies'
import WaveBackground from './components/WaveBackground/WaveBackground'

function App() {
  
  return (
    <>
      <NavBar/>
      <Presentation/>
      <Technologies/>
      <Projects/>
      <Contact/>
      <WaveBackground/>
    </>
  )
}

export default App
