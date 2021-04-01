import React from 'react'
import {Container} from 'react-bootstrap'
import LogIn from '../Components/Auth/LogIn'

export function profile() {
  return (
    <>
      <LogIn/>

      <Container>
        <h1>Profile page</h1>
      </Container>
    </>
  )
}
