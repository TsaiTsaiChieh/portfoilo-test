import {useEffect, useState} from 'react'
import {Col, Container, Row} from 'react-bootstrap'
import {ArrowRightCircle} from 'react-bootstrap-icons'
import headerImg from '../assets/img/header-img.svg'

const Banner = () => {
  const [loopNum, setLoopNum] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const toRotate = ['Web Developer', 'Web Designer', 'UI/UX Designer']
  const [text, setText] = useState('')
  const [delta, setDelta] = useState(300 - Math.random() * 100)
  const period = 2000

  useEffect(() => {
    const ticker = setInterval(() => {
      tick()
    }, delta)

    return () => clearInterval(ticker)
  }, [text])

  const tick = () => {
    const i = loopNum % toRotate.length
    const fullText = toRotate[i]
    const updatedText = isDeleting ?
      fullText.substring(0, text.length - 1) :
      fullText.substring(0, text.length + 1)
    setText(updatedText)

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2)
    }
    if (updatedText === fullText) {
      setIsDeleting(true)
      setDelta(period)
    } else if (updatedText === '') {
      setIsDeleting(false)
      setLoopNum(loopNum + 1)
      setDelta(500)
    }
  }

  return (
    <section id='home' className='banner'>
      <Container>
        <Row className='align-items-center'>
          <Col xs={12} md={6} xl={7}>
            <span className='tagline'>Welcome to my Portfolio</span>
            <h1>
              {`Hi I'm webdecoded`}
              <span className='wrap'>{text}</span>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Aliquid, aspernatur veritatis. Eos amet iure quibusdam, iste
                architecto nemo voluptatem itaque ab dolor dolorum nobis?
                Praesentium neque nam facilis ducimus voluptatum.
              </p>
              <button
                onClick={() => {
                  console.log('connect')
                }}
              >
                Let&apos;s connect
                <ArrowRightCircle size={25} />
              </button>
            </h1>
          </Col>
          <Col xs={2} md={6} xl={5}>
            <img src={headerImg} alt='Header Img' />
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Banner
