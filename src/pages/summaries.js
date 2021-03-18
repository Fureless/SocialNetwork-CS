import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import AsideFilters from '../Components/AsideFilters'
import Summary from '../Components/Summary'
import summariesStyles from '../assets/styles/vacancies-summaries.css'

export function summaries() {
  return (
    <>
      <Container fluid className='mr-auto'>
        <Row className='row-container'>
          <Col md='8'>
            <Summary title='IOS разработчик'
                     name='Александр Логинов'
                     description='Ищем разработчика в основную команду. Все требования кандидатам в личку, если у вас нет реального опыта работы, то пропускайте'
                     tags='IOS'
            />
            <Summary title='IOS разработчик'
                     name='Александр Логинов'
                     description='Ищем разработчика в основную команду. Все требования кандидатам в личку, если у вас нет реального опыта работы, то пропускайте'
                     tags='IOS'
            />
            <Summary title='IOS разработчик'
                     name='Александр Логинов'
                     description='Ищем разработчика в основную команду. Все требования кандидатам в личку, если у вас нет реального опыта работы, то пропускайте'
                     tags='IOS'
            />
            <Summary title='IOS разработчик'
                     name='Александр Логинов'
                     description='Ищем разработчика в основную команду. Все требования кандидатам в личку, если у вас нет реального опыта работы, то пропускайте'
                     tags='IOS'
            />
            <Summary title='IOS разработчик'
                     name='Александр Логинов'
                     description='Ищем разработчика в основную команду. Все требования кандидатам в личку, если у вас нет реального опыта работы, то пропускайте'
                     tags='IOS'
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
