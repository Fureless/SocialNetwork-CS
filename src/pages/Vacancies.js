import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import AsideFilters from '../Components/AsideFilters'
import Vacancy from '../Components/Vacancy'

const styles = {
  badgeColor: {
    backgroundColor: '#DADADA'
  },
  filterWrapper: { // дублирование
    backgroundColor: '#EBEBEB',
    padding: '1.5rem',
    height: '40rem'
  },
  row: {
    justifyContent: 'space-between',
    flexWrap: 'nowrap',
    margin: '0 auto',
    width: '90rem'
  }
}

export function Vacancies() {
  return (
  <>
    <Container fluid className='mr-auto'>
      <Row style={styles.row}>
        <Col md='8'>
          <Vacancy title='IOS разработчик'
                   salary='10 000 - 20 000 руб'
                   description='Ищем разработчика в основную  команду. Все требования кандидатам в личку, если у вас нет реального опыта работы, то пропускайте'
                   tags='IOS'
                   company='Apple'
                   conditions='Опыт работы от 3-х лет'
          />
          <Vacancy title='IOS разработчик'
                   salary='10 000 - 20 000 руб'
                   description='Ищем разработчика в основную  команду. Все требования кандидатам в личку, если у вас нет реального опыта работы, то пропускайте'
                   tags='IOS'
                   company='Apple'
                   conditions='Опыт работы от 3-х лет'
          />
        </Col>

        <Col md='3' style={styles.filterWrapper}>
          <AsideFilters />
        </Col>
      </Row>
    </Container>
  </>
  )
}
