import React from 'react'
import {Col, Container, Row, Badge} from 'react-bootstrap'

const styles = {
  vacancyWrapper: {
    backgroundColor: '#EBEBEB',
    padding: '1.5rem',
    height: '18rem',
    marginBottom: '1rem'
  },
  container: {
    height: '100%'
  },
  line: {
    borderRight: '1px solid gray',
  },
  title: {
    margin: 0,
    fontFamily: 'Work Sans, sans-serif',
    fontWeight: 600,
    fontSize: '1.3rem',
    lineHeight: '1.6rem',
    paddingBottom: '.5rem'
  },
  salary: {
    margin: 0,
    fontFamily: 'Work Sans, sans-serif',
    fontSize: '1.3rem',
    lineHeight: '1.6rem',
  },
  description: {
    fontFamily: 'Lato, sans-serif',
    fontWeight: 300,
    fontSize: '1rem',
    lineHeight: '1.7rem',
    width: '95%',
    overflow: 'scroll',
    height: '7rem',
    marginTop: '.6rem',
    marginBottom: '.6rem',
    color: '#73726A'
  },
  tags: {

  },
  company: {

  },
  conditionsTitle: {
    margin: 0,
    paddingLeft: '.4rem',
    fontFamily: 'Work Sans, sans-serif',
    fontSize: '1.1rem',
    lineHeight: '1.4rem',
    marginBottom: '2rem'
  },
  conditions: {
    paddingLeft: '1rem',
    marginBottom: '.6rem',
    fontFamily: 'Work Sans, sans-serif',
    fontWeight: 300,
    fontSize: '.9rem',
    lineHeight: '1.2rem'
  }
}

function Vacancy(props) {
  return (
    <Container style={styles.vacancyWrapper}>
      <Row style={{justifyContent: 'space-between'}}>
        <Col md='8' style={styles.line}>
          <p style={styles.title}>{props.title}</p>
          <p style={styles.salary}>{props.salary}</p>
          <p style={styles.description}>{props.description}</p>
          <Badge pill variant="secondary">
            {/*//TODO цикл*/}
            {props.tags}
          </Badge>{' '}
          <p style={styles.company}>{props.company}</p>
        </Col>

        <Col md='4'>
          <p style={styles.conditionsTitle}>Условия</p>
          {/*TODO Цикл*/}
          <p style={styles.conditions}>{props.conditions}</p>
        </Col>
      </Row>
    </Container>
  )
}

export default Vacancy
