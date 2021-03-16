import React from 'react'
import {Button, Form, Modal} from "react-bootstrap";

function VacancyCreate() {
  return (
    <Modal show={true}>
      <Modal.Header closeButton>
        <Modal.Title>Vacancy creating...</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group controlId='formBasicVacancyTitle'>
            <Form.Label>Vacancy Title</Form.Label>
            <Form.Control type='title' placeholder='Enter vacancy title' />
          </Form.Group>
          <Form.Group controlId='formBasicSalary'>
            <Form.Label>Salary</Form.Label>
            <Form.Control type='salary' placeholder='Enter salary' />
            <Form.Text className='text-muted'>We'll never share your email with anyone else.</Form.Text>
          </Form.Group>
          <Form.Group controlId='formBasicVacancyDescription'>
            <Form.Label>Description</Form.Label>
            <Form.Control type='description' placeholder='Enter description about vacancy' />
          </Form.Group>
          <Form.Group controlId='formBasicVacancyTags'>
            <Form.Label>Choose tags</Form.Label>
            <Form.Control type='tags' placeholder='Start typing...' />
          </Form.Group>

          <Button variant='dark'>Send</Button>
        </Form>
      </Modal.Body>
    </Modal>
  )
}

export default VacancyCreate
