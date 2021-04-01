import React from 'react'
import {Container} from 'react-bootstrap'
import LogIn from '../Components/Auth/LogIn'

export function messages() {
  return (
    <>
      <LogIn/>

      <Container>
        <h1>Messages page</h1>
      </Container>
    </>
  )
}
