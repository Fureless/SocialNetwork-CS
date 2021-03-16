import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import AsideFilters from '../Components/AsideFilters'

const styles = {
  vacancyWrapper: { // дублирование
    backgroundColor: '#EBEBEB',
    padding: '1.5rem',
    height: '20rem'
  },
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

export function Summary() {
  return (
    <>
      <Container fluid className='mr-auto'>
        <Row style={styles.row}>
          <Col md='8' style={styles.vacancyWrapper}>

          </Col>

          <Col md='3' style={styles.filterWrapper}>
            <AsideFilters />
          </Col>
        </Row>
      </Container>
    </>
  )
}
