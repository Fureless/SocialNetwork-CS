import React from 'react'
import {Badge, Figure} from 'react-bootstrap'
import vacancyStyles from '../assets/styles/vacancies-summaries.css'

function Vacancy(props) {
  const renderTags = props.tags.map((item, index) => (
    <li key={index} className='mr-2 d-inline'><Badge pill className='tags'>{item}</Badge></li>
  ))

  const renderConditions = props.conditions.map((item, index) => (
    <li key={index} className='conditions'>{item}</li>
  ))

  return (
    <div className='vacancy-wrapper d-flex'>
      <div className='vertical-line w-75'>
        <p className='title'>{props.title}</p>
        <p className='salary'>{props.salary}</p>
        <div className='overflow-hidden'>
          <p className='description-vacancy'>{props.description}</p>
        </div>
        <ul className='tags-list'>{renderTags}</ul>
        <span className='company'>
          <Figure.Image
            width={45}
            height={45}
            alt='45x45'
            src={props.image}
            roundedCircle
            className='mr-2 mb-0 vacancy-img-border'
          />
          {props.company}
        </span>
      </div>
      <div className='w-25'>
        <p className='conditions-title mb-5'>Условия</p>
        <ul>{renderConditions}</ul>
      </div>
    </div>
  )
}

export default Vacancy
