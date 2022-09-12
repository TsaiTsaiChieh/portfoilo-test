import {Col, Container, Row} from 'react-bootstrap'
import {ArrowRightCircle} from 'react-bootstrap-icons'
import headerImg from '../assets/img/header-img.svg'

const Banner = () => {
  return (
    <section id='home' className='banner'>
      <Container>
        <Row className='align-items-center'>
          <Col xs={12} md={6} xl={7}>
            <span className='tagline'>Welcome to my Portfolio</span>
            <h1>
              {`Hi I'm webdecoded`}
              <span className='wrap'>web developer</span>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Aliquid, aspernatur veritatis. Eos amet iure quibusdam, iste
                architecto nemo voluptatem itaque ab dolor dolorum nobis?
                Praesentium neque nam facilis ducimus voluptatum.
              </p>
              <button onClick={() => {
                console.log('connect')
              }}>Let&apos;s connect<ArrowRightCircle size={25} /></button>
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
