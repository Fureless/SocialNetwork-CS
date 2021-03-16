import React, {useState} from 'react'
import {Button, Form, Modal} from "react-bootstrap";

// const styles = {
//   blur: {
//     filter: 'blur(10px)',
//   }
// }

function Auth() {

  const [auth, setAuth] = useState(true)
  const handleClose = () => setAuth(false)

  function sendAuth() {
    handleClose()
  }

  return (
    // Сделать проверку авторизован ли пользователь
    <Modal show={auth} centered>
      <Modal.Header>
        <Modal.Title>Log in</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group controlId='fromBasicEmail'>
            <Form.Label>Email Address</Form.Label>
            <Form.Control type='email' placeholder='Enter email' />
            <Form.Text className='text-muted'>We'll never share your email with anyone else.</Form.Text>
          </Form.Group>
          <Form.Group controlId='fromBasicPassword'>
            <Form.Label>Password</Form.Label>
            <Form.Control type='password' placeholder='Enter password' />
          </Form.Group>
          <Form.Group controlId='fromBasicCheckbox'>
            <Form.Check type='checkbox' label='remember me' />
          </Form.Group>
          <Button variant='dark' onClick={sendAuth}>Send</Button>
        </Form>
      </Modal.Body>
    </Modal>
  )
}

export default Auth
