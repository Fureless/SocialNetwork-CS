import React from 'react'
import {Col, Container, Row, Badge, Figure} from 'react-bootstrap'
import vacancyStyles from '../assets/styles/vacancies-summaries.css'

function Vacancy(props) {
  const renderTags = (props.tags.split(' ').map((item, index) => {
    return {id: index, tag: item}
  })).map(item => (
    <li key={item.id} className='mr-2 d-inline'><Badge pill className='tags'>{item.tag}</Badge></li>
  ))

  const renderConditions = (props.conditions.split('/').map((item, index) => {
    return {id: index, condition: item}
  })).map(item => (
    <li key={item.id} className='conditions'>{item.condition}</li>
  ))

  return (
    <Container className='vacancy-wrapper'>
      <Row className='justify-content-between flex-nowrap'>
        <Col md='8' className='line'>
          <p className='title'>{props.title}</p>
          <p className='salary'>{props.salary}</p>
          <p className='description-vacancy'>{props.description}</p>
          <ul className='tags-list'>{renderTags}</ul>
          <span className='company'>
            <Figure.Image
              width={40}
              height={40}
              alt='40x40'
              src={props.image}
              roundedCircle
              className='mr-2 mb-0'
            />
            <strong>{props.company}</strong>
          </span>
        </Col>

        <Col md='4'>
          <p className='conditions-title'>Условия</p>
          <ul className='conditions-list'>{renderConditions}</ul>
        </Col>
      </Row>
    </Container>
  )
}

export default Vacancy
