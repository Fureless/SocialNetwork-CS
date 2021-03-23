import React from 'react'
import {Badge, Figure} from 'react-bootstrap'
import summaryStyles from '../assets/styles/vacancies-summaries.css'

function Summary(props) {
  const renderTags = props.tags.map((item, index) => (
    <li key={index} className='mr-2 d-inline'><Badge pill className='tags'>{item}</Badge></li>
  ))

  return (
    <div className='summary-wrapper d-flex'>
      <div className='vertical-line w-75'>
          <span className='summary-img'>
            <Figure.Image
              width={64}
              height={64}
              alt='64x64'
              src={props.image}
              roundedCircle
              className='mr-2 mb-0 summary-img-border'
            />
            <span className='title mt-1'>{props.title}<p className='name'>{props.name}</p></span>
          </span>
          <p className='description-summary'>{props.description}</p>
          <ul className='tags-list'>{renderTags}</ul>

      </div>
      <div className='w-25'>
          <p className='conditions-title'>О себе</p>
          <ul className='about-list'>
            <li className='about'><span className='about-p'>Стаж работы: </span>{props.exp}</li>
            <li className='about'><span className='about-p'>Зарплата: </span>{props.salary}</li>
            <li className='about'><span className='about-p'>Уровень: </span>{props.level}</li>
          </ul>
      </div>
    </div>
  )
}

export default Summary
