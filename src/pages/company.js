import React from 'react'
import {Container} from 'react-bootstrap'
import LogIn from '../Components/Auth/LogIn'

export function company() {
  return (
    <>
      <LogIn/>

      <Container>
        <h1>Company Page</h1>
      </Container>
    </>
  )
}
