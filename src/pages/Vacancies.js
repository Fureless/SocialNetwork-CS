import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import AsideFilters from '../Components/AsideFilters'
import Vacancy from '../Components/Vacancy'
import vacanciesStyles from '../assets/styles/vacancies-summaries.css'

export function vacancies() {
  return (
  <>
    <Container fluid className='mr-auto'>
      <Row className='row-container'>
        <Col md='8'>
          <Vacancy title='IOS разработчик'
                   salary='10 000 - 20 000 руб'
                   description='Ищем разработчика в основную команду. Все требования кандидатам в личку, если у вас нет реального опыта работы, то пропускайте'
                   tags='IOS'
                   company='Apple'
                   conditions='Опыт работы от 3-х лет'
          />
          <Vacancy title='Frontend разработчик'
                   salary='75 000 руб'
                   description='Ищем разработчика в основную команду. Все требования кандидатам в личку, если у вас нет реального опыта работы, то пропускайте'
                   tags='IOS'
                   company='NVIDIA'
                   conditions='Опыт работы от 3-х лет'
          />
          <Vacancy title='Менеджер и ревьюер кода))0)'
                   salary='190 000 - 210 000 руб'
                   description='Ищем разработчика в основную команду. Все требования кандидатам в личку, если у вас нет реального опыта работы, то пропускайте'
                   tags='IOS'
                   company='Yamaha'
                   conditions='Опыт работы от 3-х лет'
          />
          <Vacancy title='Backend разработчик на GO'
                   salary='75 000 - 100 000 руб'
                   description='Ищем разработчика в основную команду. Все требования кандидатам в личку, если у вас нет реального опыта работы, то пропускайте'
                   tags='IOS'
                   company='Microsoft'
                   conditions='Опыт работы от 3-х лет'
          />
          <Vacancy title='Ваня иди делай андроид'
                   salary='150 000 руб'
                   description='Ищем разработчика в основную команду. Все требования кандидатам в личку, если у вас нет реального опыта работы, то пропускайте'
                   tags='IOS'
                   company='Санкт-Петербургский политехнический универститет'
                   conditions='Опыт работы от 3-х лет'
          />
        </Col>

        <Col md='3' className='filter-wrapper'>
          <AsideFilters />
        </Col>
      </Row>
    </Container>
  </>
  )
}
