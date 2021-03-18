import React from 'react'
import {Col, Container, Row, Badge} from 'react-bootstrap'
import summaryStyles from '../assets/styles/vacancies-summaries.css'

function Summary(props) {
  const tags = [
    { id: 1, tag: 'IOS' },
    { id: 2, tag: 'C++' },
    { id: 3, tag: 'CI/CD' },
    { id: 4, tag: 'Backend' },
    { id: 5, tag: 'JS' }
  ];

  // const conditions = [
  //   { id: 1, condition: 'Опыт работы более 3-х лет' },
  //   { id: 2, condition: 'Работа в офисе' },
  //   { id: 3, condition: 'Типа того' },
  //   { id: 4, condition: 'Квадратики по бокам что-ли' }
  // ];

  const renderTags = tags.map(item => (
    <li key={item.id} className='mr-2 d-inline'><Badge pill className='tags'>{item.tag}</Badge></li>
  ))

  // const renderConditions = conditions.map(item => (
  //   <li key={item.id} className='conditions'>{item.condition}</li>
  // ))

  return (
    <Container className='summary-wrapper'>
      <Row className='justify-content-between flex-nowrap'>
        <Col md='8' className='line'>
          <p className='title'>{props.title}</p>
          {/*TODO*/}
          <p className='salary'>{props.name}</p>
          <p className='description-summary'>{props.description}</p>
          <ul className='tags-list'>{renderTags}</ul>
        </Col>

        <Col md='4'>
          <p className='conditions-title'>О себе</p>
          {/*<ul className='conditions-list'>{renderConditions}</ul>*/}
          <p><strong>Стаж работы: </strong>3 года</p>
          <p><strong>Зарплата: </strong>От 30 000 руб</p>
          <p><strong>Уровень: </strong>Middle</p>
        </Col>
      </Row>
    </Container>
  )
}

export default Summary
