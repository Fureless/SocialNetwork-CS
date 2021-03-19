import React from 'react'
import {Col, Container, Row, Badge, Figure} from 'react-bootstrap'
import summaryStyles from '../assets/styles/vacancies-summaries.css'

function Summary(props) {
  const renderTags = (props.tags.split(' ').map((item, index) => {
    return {id: index, tag: item}
  })).map(item => (
    <li key={item.id} className='mr-2 d-inline'><Badge pill className='tags'>{item.tag}</Badge></li>
  ))

  return (
    <Container className='summary-wrapper'>
      <Row className='justify-content-between flex-nowrap'>
        <Col md='8' className='vertical-line w-75'>
          <span className='summary-img'>
            <Figure.Image
              width={64}
              height={64}
              alt='64x64'
              src={props.image}
              roundedCircle
              className='mr-2 mb-0'
            />
            <span className='title mt-1'>{props.title}<p className='name'>{props.name}</p></span>
          </span>
          <p className='description-summary'>{props.description}</p>
          <ul className='tags-list'>{renderTags}</ul>
        </Col>
        <Col md='4' className='w-25'>
          <p className='conditions-title'>О себе</p>
          <ul className='about-list'>
            <li className='about'><span className='about-p'>Стаж работы: </span>{props.exp}</li>
            <li className='about'><span className='about-p'>Зарплата: </span>{props.salary}</li>
            <li className='about'><span className='about-p'>Уровень: </span>{props.level}</li>
          </ul>
        </Col>
      </Row>
    </Container>
  )
}

export default Summary
