import './App.css'
import 'animate.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import {NavBar, Banner, Skills, Projects, Footer} from './components'

const App = () => {
  return (
    <div className='App'>
      <NavBar />
      <Banner />
      <Skills />
      <Projects />s
      <Footer />
    </div>
  )
}

export default App
