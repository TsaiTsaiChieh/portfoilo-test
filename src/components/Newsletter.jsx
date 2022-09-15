import React, {useEffect, useState} from 'react'
import {Alert, Col, Row} from 'react-bootstrap'

// eslint-disable-next-line react/prop-types
const Newsletter = ({onValidated, status, message}) => {
  const [email, setEmail] = useState('')
  useEffect(() => {
    if (status === 'success') clearFields()
  }, [status])


  const handleSubmit = (e) => {
    e.preventDefault()
    email && email.indexOf('@') > -1 && onValidated({
      EMAIL: email,
    })
  }

  return (
    <Col lg={12}>
      <div className='newsletter-bx'>
        <Row>
          <Col lg={12} mg={6} xl={5}>
            <h3>Subscribe to our Newsletter</h3>
            {status === 'sending' && <Alert>Sending...</Alert>}
            {status === 'error' && <Alert variant='danger'>{message}</Alert>}
            {status === 'success' && <Alert variant='success'>{message}</Alert>}
          </Col>
          <Col md={6} xl={7}>
            <form onSubmit={handleSubmit}></form>
            <div className='new-email-bx'>
              <input
                value={email}
                type='email'
                onChange={(e) => setEmail(e.target.value)}
                placeholder='Email'
              />
              <button type='submit'>Submit</button>
            </div>
          </Col>
        </Row>
      </div>
    </Col>
  )
}

export default Newsletter
