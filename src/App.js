import './App.css'
import NavBar from './components/NavBar'
import 'bootstrap/dist/css/bootstrap.min.css'
import Banner from './components/Banner'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import MailchimpForm from './components/MailchimpForm'

const App = () => {
  return (
    <div className='App'>
      <NavBar />
      <Banner />
      <Skills />
      <Projects />
      <Contact />
      <MailchimpForm />
    </div>
  )
}

export default App
