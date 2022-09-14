import {useEffect, useState} from 'react'
import {Navbar, Nav, Container} from 'react-bootstrap'
import logo from '../assets/img/logo.svg'
import navIcon1 from '../assets/img/nav-icon1.svg'
import navIcon2 from '../assets/img/nav-icon2.svg'
import navIcon3 from '../assets/img/nav-icon3.svg'

const NavBar = () => {
  const [activeLink, setActiveLink] = useState('home')
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      // console.log(window.screenY)
      if (window.screenY > 50) {
        console.log('超過50')
        console.log(scrolled)
        return setScrolled(true)
      }
      if (window.screenY <= 50) {
        console.log('低過50')
        return setScrolled(false)
      }
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const onUpdateActiveLink = (link) => {
    console.log(link)
    setActiveLink(link)
  }
  return (
    <Navbar expand='lg' className={scrolled ? '' : 'scrolled'}>
      <Container>
        <Navbar.Brand href='#home'>
          <img src={logo} alt='logo' />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='me-auto'>
            <Nav.Link
              href='#home'
              className={
                activeLink === 'home' ? 'active navbar-link' : 'navbar-link'
              }
              onClick={() => onUpdateActiveLink('home')}
            >
              Home
            </Nav.Link>
            <Nav.Link
              href='#skills'
              className={
                activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'
              }
              onClick={() => onUpdateActiveLink('skills')}
            >
              Skills
            </Nav.Link>
            <Nav.Link
              href='#projects'
              className={
                activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'
              }
              onClick={() => onUpdateActiveLink('projects')}
            >
              Projects
            </Nav.Link>
          </Nav>
          <span className='navbar-text'>
            <div className='social-icon'>
              <a href='/'>
                <img src={navIcon1} alt='' />
              </a>
              <a href='/'>
                <img src={navIcon2} alt='' />
              </a>
              <a href='/'>
                <img src={navIcon3} alt='' />
              </a>
            </div>
            <button className='vvd' onClick={() => console.log('connect')}>
              <span>Let&apos;s connect</span>
            </button>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavBar
