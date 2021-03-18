import React from 'react'
import {Col, Container, Row, Badge} from 'react-bootstrap'
import vacancyStyles from '../assets/styles/vacancies-summaries.css'

function Vacancy(props) {
    const tags = [
      { id: 1, tag: 'IOS' },
      { id: 2, tag: 'C++' },
      { id: 3, tag: 'CI/CD' },
      { id: 4, tag: 'Backend' },
      { id: 5, tag: 'JS' }
    ]

    const conditions = [
      { id: 1, condition: 'Опыт работы более 3-х лет' },
      { id: 2, condition: 'Работа в офисе' },
      { id: 3, condition: 'Типа того' },
      { id: 4, condition: 'Квадратики по бокам что-ли' }
    ]

  const renderTags = tags.map(item => (
    <li key={item.id} className='mr-2 d-inline'><Badge pill className='tags'>{item.tag}</Badge></li>
  ))

  const renderConditions = conditions.map(item => (
    <li key={item.id} className='conditions'>{item.condition}</li>
  ))

  return (
    <Container className='vacancy-wrapper'>
      <Row className='justify-content-between'>
        <Col md='8' className='line'>
          <p className='title'>{props.title}</p>
          <p className='salary'>{props.salary}</p>
          <p className='description-vacancy'>{props.description}</p>
          <ul className='tags-list'>{renderTags}</ul>
          <p className='company'>{props.company}</p>
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
