import './App.css'
import 'animate.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import {NavBar, Banner, Skills, Projects, Footer, Contact} from './components'

const App = () => {
  return (
    <div className='App'>
      <NavBar />
      <Banner />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
