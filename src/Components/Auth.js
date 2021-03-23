import React, {useState} from 'react'
import {Button, Form, Modal} from "react-bootstrap";

function Auth() {
  const [auth, setAuth] = useState(true)
  const handleClose = () => setAuth(false)

  return (
    // TODO Проверка авторизован ли пользователь
    <Modal show={auth} centered>
      <Modal.Header>
        <Modal.Title>Регистрация</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group controlId='fromBasicEmail'>
            <Form.Label>Почта</Form.Label>
            <Form.Control type='email' placeholder='Введите почту' />
            <Form.Text className='text-muted'>Никто другой ее не узнает</Form.Text>
          </Form.Group>
          <Form.Group controlId='fromBasicPassword'>
            <Form.Label>Пароль</Form.Label>
            <Form.Control type='password' placeholder='Введите пароль' />
            <Form.Label className='mt-2'>Повтор пароля</Form.Label>
            <Form.Control type='password' placeholder='Введите пароль ещё раз' />
          </Form.Group>
          <Form.Group controlId='fromBasicCheckbox'>
            <Form.Check type='checkbox' label='Принять политику конфиденциальности' />
          </Form.Group>
          <Button variant='dark' onClick={handleClose}>Send</Button>
        </Form>
      </Modal.Body>
    </Modal>
  )
}

export default Auth
